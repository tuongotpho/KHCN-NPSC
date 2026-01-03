
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { deleteDoc, doc, addDoc, collection, updateDoc } from "firebase/firestore";
import { auth, db } from "./services/firebase";
import { useInitiatives } from "./hooks/useInitiatives";
import Sidebar from "./components/Sidebar";
import ListPage from "./pages/ListPage";
import ChatPage from "./pages/ChatPage";
import StatsPage from "./pages/StatsPage";
import ErrorBoundary from "./ErrorBoundary";
import { Initiative, InitiativeLevel } from "./types";
import { X, LogIn, Mail, Lock, Lightbulb, Building2, Users, Edit, Award } from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState<'list' | 'stats' | 'chat'>('list');
  const [theme, setTheme] = useState<keyof typeof THEMES>('red');
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [user, setUser] = useState<any>(null);
  
  // Modal States
  const [viewingItem, setViewingItem] = useState<Initiative | null>(null);
  const [editingItem, setEditingItem] = useState<Partial<Initiative> | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isBatchModalOpen, setIsBatchModalOpen] = useState(false);
  
  // Login States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const { initiatives, loading, error } = useInitiatives();
  const activeTheme = THEMES[theme];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoginModalOpen(false);
      setAuthError('');
    } catch (err) {
      setAuthError('Email hoặc mật khẩu không đúng.');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Xác nhận xóa sáng kiến này?')) return;
    try {
      await deleteDoc(doc(db, "initiatives", id));
    } catch (e) {
      alert("Lỗi khi xóa tài liệu.");
    }
  };

  const handleSaveInitiative = async () => {
    if (!editingItem?.title) return alert("Vui lòng nhập tên sáng kiến.");
    try {
      if (editingItem.id) {
        await updateDoc(doc(db, "initiatives", editingItem.id), editingItem as any);
      } else {
        await addDoc(collection(db, "initiatives"), editingItem as any);
      }
      setEditingItem(null);
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
          onLogout={() => signOut(auth)}
          onLogin={() => setIsLoginModalOpen(true)}
          onAdd={() => setEditingItem({ title: '', authors: [], year: new Date().getFullYear(), level: ['HLH'], content: '', unit: '' })}
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
                onEdit={(item) => setEditingItem({...item})} 
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

        {/* VIEW MODAL */}
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
                  <span className={`${activeTheme.accent} dark:bg-slate-800 ${activeTheme.text} px-5 py-2 rounded-2xl text-[10px] font-black uppercase flex items-center gap-2 border border-slate-100 dark:border-slate-700`}><Building2 size={14}/> {viewingItem.unit}</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white uppercase leading-tight">{viewingItem.title}</h1>
                <div className="flex items-center gap-3 text-slate-500 font-bold text-lg"><Users size={20} className={activeTheme.text}/> {viewingItem.authors?.join(', ')}</div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium whitespace-pre-wrap">{viewingItem.content}</p>
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
                 <button onClick={() => setEditingItem(null)} className="p-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl transition-all"><X size={28} /></button>
               </div>
               <div className="p-8 overflow-y-auto flex-1 space-y-6 custom-scrollbar">
                  <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-2">Tên sáng kiến</label><input className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold" value={editingItem.title} onChange={e => setEditingItem({...editingItem, title: e.target.value})} /></div>
                  
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase text-slate-400 ml-2 flex items-center gap-1"><Award size={10}/> Cấp công nhận</label>
                    <div className="flex flex-wrap gap-2">
                      {(['HLH', 'NPSC', 'NPC', 'EVN'] as InitiativeLevel[]).map(lvl => (
                        <button 
                          key={lvl} 
                          onClick={() => toggleLevel(lvl)}
                          className={`px-5 py-2.5 rounded-xl text-[10px] font-black border-2 transition-all ${editingItem.level?.includes(lvl) ? `${activeTheme.primary} text-white border-transparent` : 'bg-slate-50 dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700'}`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-2">Năm</label><input type="number" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold" value={editingItem.year} onChange={e => setEditingItem({...editingItem, year: parseInt(e.target.value)})} /></div>
                    <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-2">Lĩnh vực</label><input className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold" value={editingItem.field} onChange={e => setEditingItem({...editingItem, field: e.target.value})} /></div>
                  </div>
                  <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-2">Đơn vị</label><input className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold" value={editingItem.unit} onChange={e => setEditingItem({...editingItem, unit: e.target.value})} /></div>
                  <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-2">Tác giả</label><input className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold" value={editingItem.authors?.join(', ')} onChange={e => setEditingItem({...editingItem, authors: e.target.value.split(',').map(a => a.trim())})} /></div>
                  <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-2">Tóm tắt nội dung</label><textarea rows={5} className="w-full px-6 py-5 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-[2rem] font-bold resize-none" value={editingItem.content} onChange={e => setEditingItem({...editingItem, content: e.target.value})} /></div>
               </div>
               <div className="p-8 border-t dark:border-slate-800 flex gap-4">
                 <button onClick={() => setEditingItem(null)} className="flex-1 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-[2rem] font-black text-slate-400 uppercase text-[10px]">Hủy</button>
                 <button onClick={handleSaveInitiative} className={`flex-[2] py-4 ${activeTheme.primary} text-white rounded-[2rem] font-black shadow-lg uppercase text-[10px]`}>Lưu thay đổi</button>
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
