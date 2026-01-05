
import React, { useState, useEffect, useMemo } from 'react';
// Firebase imports replaced with compat methods usage via services/firebase
import { auth, db, storage } from "./services/firebase";
import { useInitiatives } from "./hooks/useInitiatives";
import Sidebar from "./components/Sidebar";
import ListPage from "./pages/ListPage";
import ChatPage from "./pages/ChatPage";
import StatsPage from "./pages/StatsPage";
import BubblePage from "./pages/BubblePage";
import TreeMapPage from "./pages/TreeMapPage";
import ErrorBoundary from "./ErrorBoundary";
import { Initiative, InitiativeLevel } from "./types";
import { 
  X, LogIn, Mail, Lock, Lightbulb, Building2, Users, Edit, 
  Award, Plus, Search, Paperclip, ExternalLink, Download, FileText, Trash2, Loader2, AlertTriangle
} from 'lucide-react';

const THEMES = {
  red: { primary: 'bg-orange-600', hover: 'hover:bg-orange-700', text: 'text-orange-600', border: 'border-orange-200', gradient: 'from-orange-500 to-red-600', accent: 'bg-orange-50', shadow: 'shadow-orange-600/20' },
  blue: { primary: 'bg-blue-600', hover: 'hover:bg-blue-700', text: 'text-blue-600', border: 'border-blue-200', gradient: 'from-blue-500 to-indigo-600', accent: 'bg-blue-50', shadow: 'shadow-blue-600/20' },
  emerald: { primary: 'bg-emerald-600', hover: 'hover:bg-emerald-700', text: 'text-emerald-600', border: 'border-emerald-200', gradient: 'from-emerald-500 to-teal-600', accent: 'bg-emerald-50', shadow: 'shadow-emerald-600/20' },
  indigo: { primary: 'bg-indigo-600', hover: 'hover:bg-indigo-700', text: 'text-indigo-600', border: 'border-indigo-200', gradient: 'from-indigo-500 to-purple-600', accent: 'bg-indigo-50', shadow: 'shadow-indigo-600/20' }
};

const LEVEL_COLORS: Record<InitiativeLevel, string> = {
  'HLH': 'bg-slate-500',
  'NPSC': 'bg-red-600',
  'NPC': 'bg-orange-600',
  'EVN': 'bg-rose-700'
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'list' | 'stats' | 'chat' | 'bubble' | 'treemap'>('list');
  const [theme, setTheme] = useState<keyof typeof THEMES>('red');
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [user, setUser] = useState<any>(null);
  
  // Modal States
  const [viewingItem, setViewingItem] = useState<Initiative | null>(null);
  const [editingItem, setEditingItem] = useState<Partial<Initiative> | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isBatchModalOpen, setIsBatchModalOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  
  // Login States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Unit Dropdown States
  const [unitSearch, setUnitSearch] = useState('');
  const [showUnitDropdown, setShowUnitDropdown] = useState(false);

  const { initiatives, loading, error } = useInitiatives();
  const activeTheme = THEMES[theme];

  const availableUnits = useMemo(() => {
    const units = new Set<string>();
    initiatives.forEach(i => {
      if (Array.isArray(i.unit)) {
        i.unit.forEach(u => units.add(u));
      } else if (i.unit) {
        units.add(i.unit);
      }
    });
    return Array.from(units).sort();
  }, [initiatives]);

  const filteredUnits = useMemo(() => {
    return availableUnits.filter(u => u.toLowerCase().includes(unitSearch.toLowerCase()));
  }, [availableUnits, unitSearch]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setIsLoginModalOpen(false);
      setAuthError('');
    } catch (err) {
      setAuthError('Email hoặc mật khẩu không đúng.');
    }
  };

  const handleDelete = async (id: string) => {
    const item = initiatives.find(i => i.id === id);
    if (!confirm('Xác nhận xóa sáng kiến này?')) return;
    try {
      if (item?.attachmentUrl) {
        try {
          const fileRef = item.attachmentUrl.startsWith('http') 
            ? storage.refFromURL(item.attachmentUrl)
            : storage.ref(item.attachmentUrl);
          await fileRef.delete();
        } catch (e) {
          console.warn("Could not delete file from storage.");
        }
      }
      await db.collection("initiatives").doc(id).delete();
    } catch (e) {
      alert("Lỗi khi xóa tài liệu.");
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!auth.currentUser) {
      alert("Vui lòng đăng nhập để thực hiện tính năng này.");
      return;
    }

    if (file.size > 20 * 1024 * 1024) {
      alert("File quá lớn (tối đa 20MB).");
      return;
    }

    setIsUploading(true);
    setUploadError(null);
    try {
      const safeFileName = file.name.replace(/[^a-z0-9.]/gi, '_').toLowerCase();
      const storageRef = storage.ref(`initiatives/${Date.now()}_${safeFileName}`);
      
      const snapshot = await storageRef.put(file);
      const downloadURL = await snapshot.ref.getDownloadURL();

      setEditingItem(prev => ({
        ...prev,
        attachmentName: file.name,
        attachmentUrl: downloadURL
      }));
    } catch (err: any) {
      console.error("Upload error detail:", err);
      if (err.code === 'storage/unauthorized') {
        setUploadError("Lỗi quyền truy cập Storage. Hãy đảm bảo Firebase Storage Rules cho phép write khi đã auth.");
      } else {
        setUploadError("Lỗi hệ thống khi tải file lên.");
      }
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveAttachment = () => {
    setEditingItem(prev => ({
      ...prev,
      attachmentName: '',
      attachmentUrl: ''
    }));
    setUploadError(null);
  };

  const handleSaveInitiative = async () => {
    if (!editingItem?.title) return alert("Vui lòng nhập tên sáng kiến.");
    const dataToSave = {
      ...editingItem,
      unit: Array.isArray(editingItem.unit) ? editingItem.unit : (editingItem.unit ? [editingItem.unit] : [])
    };
    try {
      if (editingItem.id) {
        await db.collection("initiatives").doc(editingItem.id).update(dataToSave);
      } else {
        await db.collection("initiatives").add(dataToSave);
      }
      setEditingItem(null);
      setUploadError(null);
    } catch (e) {
      alert("Lỗi khi lưu dữ liệu.");
    }
  };

  const toggleLevel = (lvl: InitiativeLevel) => {
    if (!editingItem) return;
    const currentLevels = editingItem.level || [];
    const newLevels = currentLevels.includes(lvl) 
      ? currentLevels.filter(l => l !== lvl)
      : [...currentLevels, lvl];
    setEditingItem({ ...editingItem, level: newLevels });
  };

  const toggleUnit = (u: string) => {
    if (!editingItem) return;
    const currentUnits = Array.isArray(editingItem.unit) ? editingItem.unit : (editingItem.unit ? [editingItem.unit as unknown as string] : []);
    const newUnits = currentUnits.includes(u)
      ? currentUnits.filter(unit => unit !== u)
      : [...currentUnits, u];
    setEditingItem({ ...editingItem, unit: newUnits });
  };

  const addNewUnit = () => {
    if (!unitSearch.trim() || !editingItem) return;
    const currentUnits = Array.isArray(editingItem.unit) ? editingItem.unit : (editingItem.unit ? [editingItem.unit as unknown as string] : []);
    if (!currentUnits.includes(unitSearch.trim())) {
      setEditingItem({ ...editingItem, unit: [...currentUnits, unitSearch.trim()] });
    }
    setUnitSearch('');
    setShowUnitDropdown(false);
  };

  if (loading) return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-slate-200 border-t-orange-600 rounded-full animate-spin"></div>
      <p className="mt-4 font-black text-slate-400 uppercase text-[10px] tracking-widest animate-pulse">NPSC Hub đang kết nối...</p>
    </div>
  );

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col lg:flex-row bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          activeTheme={activeTheme}
          setTheme={setTheme as any}
          user={user}
          onLogout={() => auth.signOut()}
          onLogin={() => setIsLoginModalOpen(true)}
          onAdd={() => setEditingItem({ title: '', authors: [], year: new Date().getFullYear(), level: ['HLH'], content: '', unit: [] })}
          onBatch={() => setIsBatchModalOpen(true)}
        />

        <main className="flex-1 p-4 lg:p-10 overflow-y-auto">
          {error && <div className="bg-rose-50 text-rose-700 p-4 rounded-xl mb-6">{error}</div>}
          
          <div className="animate-slide">
            {activeTab === 'list' && (
              <ListPage 
                initiatives={initiatives} 
                activeTheme={activeTheme} 
                user={user} 
                onView={setViewingItem} 
                onEdit={(item) => { setEditingItem({...item, unit: Array.isArray(item.unit) ? item.unit : (item.unit ? [item.unit] : [])}); setUploadError(null); }} 
                onDelete={handleDelete} 
              />
            )}
            
            {activeTab === 'bubble' && (
              <BubblePage 
                initiatives={initiatives} 
                activeTheme={activeTheme} 
                user={user}
                onView={setViewingItem}
                onEdit={(item) => { setEditingItem({...item, unit: Array.isArray(item.unit) ? item.unit : (item.unit ? [item.unit] : [])}); setUploadError(null); }} 
                onDelete={handleDelete}
              />
            )}

             {activeTab === 'treemap' && (
              <TreeMapPage 
                initiatives={initiatives} 
                activeTheme={activeTheme} 
                user={user}
                onView={setViewingItem}
                onEdit={(item) => { setEditingItem({...item, unit: Array.isArray(item.unit) ? item.unit : (item.unit ? [item.unit] : [])}); setUploadError(null); }} 
                onDelete={handleDelete}
              />
            )}

            {activeTab === 'stats' && (
              <StatsPage 
                initiatives={initiatives} 
                activeTheme={activeTheme} 
                onViewItem={setViewingItem} 
              />
            )}

            {activeTab === 'chat' && <ChatPage initiatives={initiatives} activeTheme={activeTheme} />}
          </div>
        </main>

        {/* VIEW MODAL - CHỈNH SỬA ĐỂ HIỂN THỊ TÀI LIỆU CHO KHÁCH */}
        {viewingItem && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-xl animate-in fade-in">
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col border-4 border-white dark:border-slate-800">
              <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`${activeTheme.primary} p-4 rounded-2xl text-white shadow-lg`}><Lightbulb size={24} /></div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">Chi tiết hồ sơ</h3>
                </div>
                <button onClick={() => setViewingItem(null)} className="p-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl transition-all"><X size={28} /></button>
              </div>
              <div className="p-8 lg:p-12 overflow-y-auto flex-1 space-y-8 custom-scrollbar">
                <div className="flex flex-wrap gap-3">
                  <span className="bg-slate-900 text-white px-5 py-2 rounded-2xl text-[10px] font-black uppercase">Năm {viewingItem.year}</span>
                  {viewingItem.level?.map(lvl => (<span key={lvl} className={`${LEVEL_COLORS[lvl as InitiativeLevel]} text-white px-5 py-2 rounded-2xl text-[10px] font-black uppercase shadow-sm`}>{lvl}</span>))}
                  <div className="flex flex-wrap gap-2">
                    {(Array.isArray(viewingItem.unit) ? viewingItem.unit : [viewingItem.unit]).map((u, i) => (
                      <span key={i} className={`${activeTheme.accent} dark:bg-slate-800 ${activeTheme.text} px-5 py-2 rounded-2xl text-[10px] font-black uppercase flex items-center gap-2 border border-slate-100 dark:border-slate-700`}><Building2 size={14}/> {u}</span>
                    ))}
                  </div>
                </div>
                <h1 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white uppercase leading-tight">{viewingItem.title}</h1>
                <div className="flex items-center gap-3 text-slate-500 font-bold text-lg"><Users size={20} className={activeTheme.text}/> {viewingItem.authors?.join(', ')}</div>
                
                <div className="bg-slate-50 dark:bg-slate-800/50 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium whitespace-pre-wrap mb-10">{viewingItem.content}</p>
                  
                  {/* Attachments Section - Hiển thị cho tất cả mọi người */}
                  {(viewingItem.attachmentUrl || viewingItem.driveLink) && (
                    <div className="pt-8 border-t border-slate-200 dark:border-slate-700 space-y-4">
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest flex items-center gap-2"><Paperclip size={12}/> Tài liệu hồ sơ</p>
                      <div className="flex flex-wrap gap-4">
                        {viewingItem.attachmentUrl && (
                          <a 
                            href={viewingItem.attachmentUrl} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 px-8 py-5 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:scale-[1.02] transition-all group min-w-[240px]"
                          >
                            <div className={`${activeTheme.primary} p-3 rounded-2xl text-white group-hover:rotate-12 transition-transform shadow-lg`}><Download size={20}/></div>
                            <div className="text-left overflow-hidden">
                              <p className="text-xs font-black uppercase text-slate-800 dark:text-slate-100 truncate w-full">{viewingItem.attachmentName || "Tải tệp đính kèm"}</p>
                              <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Lưu trữ hệ thống</p>
                            </div>
                          </a>
                        )}
                        {viewingItem.driveLink && (
                          <a 
                            href={viewingItem.driveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 px-8 py-5 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:scale-[1.02] transition-all group min-w-[240px]"
                          >
                            <div className="bg-blue-600 p-3 rounded-2xl text-white group-hover:rotate-12 transition-transform shadow-lg"><ExternalLink size={20}/></div>
                            <div className="text-left overflow-hidden">
                              <p className="text-xs font-black uppercase text-slate-800 dark:text-slate-100 truncate w-full">Google Drive</p>
                              <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Kho lưu trữ đám mây</p>
                            </div>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* EDIT MODAL */}
        {editingItem && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl">
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] w-full max-w-2xl max-h-[95vh] shadow-2xl flex flex-col overflow-hidden">
               <div className="p-8 border-b dark:border-slate-800 flex items-center justify-between">
                 <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3"><Edit className={activeTheme.text}/> Cập nhật hồ sơ</h3>
                 <button onClick={() => { setEditingItem(null); setShowUnitDropdown(false); setUploadError(null); }} className="p-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl transition-all"><X size={28} /></button>
               </div>
               <div className="p-8 overflow-y-auto flex-1 space-y-6 custom-scrollbar">
                  <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-2">Tên sáng kiến</label><input className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold" value={editingItem.title} onChange={e => setEditingItem({...editingItem, title: e.target.value})} /></div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase text-slate-400 ml-2 flex items-center gap-1"><Award size={10}/> Cấp công nhận</label>
                    <div className="flex flex-wrap gap-2">
                      {(['HLH', 'NPSC', 'NPC', 'EVN'] as InitiativeLevel[]).map(lvl => (
                        <button key={lvl} onClick={() => toggleLevel(lvl)} className={`px-5 py-2.5 rounded-xl text-[10px] font-black border-2 transition-all ${editingItem.level?.includes(lvl) ? `${activeTheme.primary} text-white border-transparent` : 'bg-slate-50 dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700'}`}>{lvl}</button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1 relative">
                    <label className="text-[9px] font-black uppercase text-slate-400 ml-2 flex items-center gap-1"><Building2 size={10}/> Đơn vị thực hiện</label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {(Array.isArray(editingItem.unit) ? editingItem.unit : (editingItem.unit ? [editingItem.unit as unknown as string] : [])).map((u, i) => (
                        <div key={i} className={`${activeTheme.primary} text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase flex items-center gap-2 shadow-sm`}>{u}<button onClick={() => toggleUnit(u)} className="hover:text-red-200"><X size={14}/></button></div>
                      ))}
                    </div>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input type="text" placeholder="Tìm hoặc thêm đơn vị mới..." className="w-full pl-12 pr-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold" value={unitSearch} onChange={(e) => { setUnitSearch(e.target.value); setShowUnitDropdown(true); }} onFocus={() => setShowUnitDropdown(true)} onKeyPress={(e) => e.key === 'Enter' && addNewUnit()} />
                      {showUnitDropdown && (
                        <div className="absolute z-10 w-full mt-2 bg-white dark:bg-slate-900 border dark:border-slate-800 rounded-2xl shadow-2xl max-h-48 overflow-y-auto custom-scrollbar p-2">
                          {filteredUnits.length > 0 ? filteredUnits.map((u, i) => (<button key={i} onClick={() => { toggleUnit(u); setShowUnitDropdown(false); setUnitSearch(''); }} className={`w-full text-left px-4 py-3 rounded-xl text-xs font-black uppercase transition-all ${(editingItem.unit as string[])?.includes(u) ? activeTheme.primary + ' text-white' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}>{u}</button>)) : <p className="text-[10px] font-bold text-slate-400 p-4 text-center uppercase tracking-widest">Không có sẵn</p>}
                          {unitSearch.trim() && !availableUnits.includes(unitSearch.trim()) && (<button onClick={addNewUnit} className="w-full text-left px-4 py-3 rounded-xl text-xs font-black uppercase text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950 flex items-center gap-2 border-t mt-1"><Plus size={14}/> Thêm mới: "{unitSearch}"</button>)}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-2">Năm</label><input type="number" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold" value={editingItem.year} onChange={e => setEditingItem({...editingItem, year: parseInt(e.target.value)})} /></div>
                    <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-2">Lĩnh vực</label><input className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold" value={editingItem.field} onChange={e => setEditingItem({...editingItem, field: e.target.value})} /></div>
                  </div>
                  <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-2">Tác giả</label><input className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold" value={editingItem.authors?.join(', ')} onChange={e => setEditingItem({...editingItem, authors: e.target.value.split(',').map(a => a.trim())})} /></div>
                  <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-2">Tóm tắt nội dung</label><textarea rows={5} className="w-full px-6 py-5 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-[2rem] font-bold resize-none" value={editingItem.content} onChange={e => setEditingItem({...editingItem, content: e.target.value})} /></div>
               
                  <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest flex items-center gap-2"><Paperclip size={12}/> Quản lý tệp tin & Link</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase text-slate-400 ml-2">Storage (Max 20MB)</label>
                        <div className="relative group">
                          <input type="file" id="file-upload" className="hidden" onChange={handleFileChange} disabled={isUploading} />
                          <label htmlFor="file-upload" className={`flex items-center gap-3 px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl font-bold cursor-pointer group-hover:border-orange-400 transition-all text-sm text-slate-500 ${isUploading ? 'opacity-50 cursor-wait' : ''}`}>
                            {isUploading ? <Loader2 className="animate-spin" size={18} /> : <FileText size={18} />} 
                            <span className="truncate">{isUploading ? 'Đang tải lên...' : (editingItem.attachmentName || "Chọn tài liệu...")}</span>
                          </label>
                          {editingItem.attachmentUrl && !isUploading && (<button onClick={handleRemoveAttachment} className="absolute -top-2 -right-2 bg-rose-500 text-white p-1.5 rounded-full shadow-lg hover:bg-rose-600 transition-colors"><X size={12} strokeWidth={3} /></button>)}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase text-slate-400 ml-2">Link Google Drive</label>
                        <div className="relative">
                          <ExternalLink className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                          <input className="w-full pl-12 pr-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold text-sm" placeholder="https://drive.google.com/..." value={editingItem.driveLink || ''} onChange={e => setEditingItem({...editingItem, driveLink: e.target.value})} />
                        </div>
                      </div>
                    </div>
                    {uploadError && (<div className="p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900 rounded-2xl flex items-start gap-3 animate-slide"><AlertTriangle className="text-rose-500 shrink-0" size={18} /><div className="space-y-1"><p className="text-[11px] font-black text-rose-600 dark:text-rose-400 uppercase">Lỗi Storage</p><p className="text-[10px] text-rose-500 dark:text-rose-300 font-medium leading-relaxed">{uploadError}</p></div></div>)}
                  </div>
               </div>
               <div className="p-8 border-t dark:border-slate-800 flex gap-4">
                 <button onClick={() => { setEditingItem(null); setShowUnitDropdown(false); setUploadError(null); }} className="flex-1 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-[2rem] font-black text-slate-400 uppercase text-[10px]">Hủy</button>
                 <button onClick={handleSaveInitiative} disabled={isUploading} className={`flex-[2] py-4 ${activeTheme.primary} text-white rounded-[2rem] font-black shadow-lg uppercase text-[10px] disabled:opacity-50`}>Lưu thay đổi</button>
               </div>
            </div>
          </div>
        )}

        {/* LOGIN MODAL */}
        {isLoginModalOpen && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl">
             <div className="bg-white dark:bg-slate-900 rounded-[3rem] w-full max-w-md p-10 text-center space-y-8 animate-slide">
                <div className={`mx-auto ${activeTheme.primary} w-20 h-20 rounded-[2rem] flex items-center justify-center text-white shadow-xl mb-4`}><LogIn size={36} /></div>
                <h3 className="text-2xl font-black uppercase tracking-tighter">Hệ thống Admin</h3>
                <form onSubmit={handleLogin} className="space-y-5 text-left">
                   <div className="relative"><Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} /><input type="email" placeholder="Email" required className="w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-800 border rounded-2xl font-bold" value={email} onChange={e => setEmail(e.target.value)} /></div>
                   <div className="relative"><Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} /><input type="password" placeholder="Mật khẩu" required className="w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-800 border rounded-2xl font-bold" value={password} onChange={e => setPassword(e.target.value)} /></div>
                   {authError && <p className="text-[11px] font-black text-rose-500 text-center">{authError}</p>}
                   <button className={`w-full py-5 ${activeTheme.primary} text-white rounded-[1.5rem] font-black uppercase tracking-widest text-xs transition-all active:scale-95 shadow-xl`}>Đăng nhập</button>
                </form>
                <button onClick={() => setIsLoginModalOpen(false)} className="text-[10px] font-bold text-slate-300 uppercase hover:text-orange-500">Đóng</button>
             </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default App;
