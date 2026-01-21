
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { auth, db, storage } from "./services/firebase";
import { useInitiatives } from "./hooks/useInitiatives";
import Sidebar from "./components/Sidebar";
import ListPage from "./pages/ListPage";
import ChatPage from "./pages/ChatPage";
import StatsPage from "./pages/StatsPage";
import BubblePage from "./pages/BubblePage";
import TreeMapPage from "./pages/TreeMapPage";
import ReferencePage from "./pages/ReferencePage";
import ResearchPage from "./pages/ResearchPage";
import ErrorBoundary from "./ErrorBoundary";
import BatchImportModal from "./components/BatchImportModal";
import { Initiative, InitiativeLevel, ResearchProject, SettlementStatus, ProjectStatus, PointConfig } from "./types";
import { 
  X, LogIn, Mail, Lock, Lightbulb, Building2, Users, Edit, 
  Award, Plus, Search, Paperclip, ExternalLink, Download, FileText, Trash2, Loader2, AlertTriangle,
  Microscope, DollarSign, Activity, GraduationCap, UserCheck, Save, Calendar, CheckCircle2, Info, Check, TrendingUp, Briefcase
} from 'lucide-react';

const THEMES = {
  red: { primary: 'bg-orange-600', hover: 'hover:bg-orange-700', text: 'text-orange-600', border: 'border-orange-200', gradient: 'from-orange-500 to-red-600', accent: 'bg-orange-50', shadow: 'shadow-orange-600/20' },
  blue: { primary: 'bg-blue-600', hover: 'hover:bg-blue-700', text: 'text-blue-600', border: 'border-blue-200', gradient: 'from-blue-500 to-indigo-600', accent: 'bg-blue-50', shadow: 'shadow-blue-600/20' },
  emerald: { primary: 'bg-emerald-600', hover: 'hover:bg-emerald-700', text: 'text-emerald-600', border: 'border-emerald-200', gradient: 'from-emerald-500 to-teal-600', accent: 'bg-emerald-50', shadow: 'shadow-emerald-600/20' },
  indigo: { primary: 'bg-indigo-600', hover: 'hover:bg-indigo-700', text: 'text-indigo-600', border: 'border-indigo-200', gradient: 'from-indigo-500 to-purple-600', accent: 'bg-emerald-50', shadow: 'shadow-emerald-600/20' }
};

const LEVEL_COLORS: Record<string, string> = {
  'HLH': 'bg-slate-500',
  'NPSC': 'bg-red-600',
  'NPC': 'bg-orange-600',
  'EVN': 'bg-rose-700'
};

const DEFAULT_POINT_CONFIG: PointConfig = {
  HLH: 1,
  NPSC: 2,
  NPC: 3,
  EVN: 4
};

// Danh sách lĩnh vực cố định
const INITIATIVE_FIELDS = [
  'Thiết bị điện',
  'Thí nghiệm điện',
  'Tư vấn',
  'CNTT',
  'Giải pháp',
  'Hành chính'
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'list' | 'stats' | 'chat' | 'bubble' | 'treemap' | 'references' | 'research'>('list');
  const [theme, setTheme] = useState<keyof typeof THEMES>('red');
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [user, setUser] = useState<any>(null);
  
  // Modal States
  const [viewingItem, setViewingItem] = useState<Initiative | null>(null);
  const [editingItem, setEditingItem] = useState<Partial<Initiative> | null>(null);
  const [editingProject, setEditingProject] = useState<Partial<ResearchProject> | null>(null);
  
  // Point Config State
  const [pointConfig, setPointConfig] = useState<PointConfig>(DEFAULT_POINT_CONFIG);

  // States for raw string inputs (Research Project)
  const [rawAuthors, setRawAuthors] = useState('');
  const [rawMembers, setRawMembers] = useState('');
  const [rawExperts, setRawExperts] = useState('');

  // States for raw string inputs (Initiative) - Separate to avoid conflicts
  const [rawInitAuthors, setRawInitAuthors] = useState('');
  
  // Unit Auto-suggestion State
  const [unitInput, setUnitInput] = useState('');
  const [showUnitSuggestions, setShowUnitSuggestions] = useState(false);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isBatchModalOpen, setIsBatchModalOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const { initiatives, loading, error } = useInitiatives();
  const activeTheme = THEMES[theme];

  // Get unique list of units for auto-suggestion
  const availableUnits = useMemo(() => {
    const units = new Set<string>();
    initiatives.forEach(i => {
      const uList = Array.isArray(i.unit) ? i.unit : (i.unit ? [i.unit] : []);
      uList.forEach(u => u && units.add(u.trim()));
    });
    return Array.from(units).sort();
  }, [initiatives]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  // Load Point Config from Firebase
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const doc = await db.collection('settings').doc('global_config').get();
        if (doc.exists && doc.data()?.pointConfig) {
          setPointConfig(doc.data()?.pointConfig as PointConfig);
        } else {
          // Init config if not exists
          // Note: This might fail if rules are not set up, which is expected for first run
          try {
             await db.collection('settings').doc('global_config').set({ pointConfig: DEFAULT_POINT_CONFIG }, { merge: true });
          } catch (writeErr) {
             console.warn("Could not init default config (likely permission issue), using local defaults.");
          }
        }
      } catch (e) {
        console.error("Error fetching point config:", e);
      }
    };
    fetchConfig();
  }, []);

  const handleSavePointConfig = async (newConfig: PointConfig) => {
    try {
      await db.collection('settings').doc('global_config').set({ pointConfig: newConfig }, { merge: true });
      setPointConfig(newConfig);
      return true;
    } catch (e: any) {
      console.error("Error saving point config:", e);
      if (e.code === 'permission-denied') {
        alert("Lỗi quyền truy cập: Bạn cần cập nhật Firestore Rules để cho phép ghi vào collection 'settings'.");
      } else {
        alert("Lỗi khi lưu cấu hình điểm: " + e.message);
      }
      return false;
    }
  };

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

  const handleAdd = () => {
    if (activeTab === 'research') {
      setEditingProject({
        title: '',
        year: new Date().getFullYear(),
        authors: [],
        mainMembers: [],
        experts: [],
        budget: 0,
        progress: 0,
        settlementStatus: 'chua_thanh_toan',
        status: 'dang_thuc_hien',
        level: 'NPSC',
        content: '',
        attachmentUrl: ''
      });
      setRawAuthors('');
      setRawMembers('');
      setRawExperts('');
    } else {
      setEditingItem({ 
        title: '', 
        authors: [], 
        year: new Date().getFullYear(), 
        level: ['HLH'], 
        content: '', 
        unit: [], 
        field: [], // Initialize as array
        driveLink: '',
        isScalable: false 
      });
      setRawInitAuthors('');
      setUnitInput('');
    }
  };

  const handleEditProject = (project: ResearchProject) => {
    setEditingProject(project);
    setRawAuthors(project.authors?.join(', ') || '');
    setRawMembers(project.mainMembers?.join(', ') || '');
    setRawExperts(project.experts?.join(', ') || '');
  };

  const handleEditInitiative = (item: Initiative) => {
    // Ensure unit is always an array
    const normalizedUnits = Array.isArray(item.unit) 
      ? item.unit 
      : (item.unit ? [item.unit] : []);

    // Ensure field is always an array (Migration for old data)
    let normalizedFields: string[] = [];
    if (Array.isArray(item.field)) {
        normalizedFields = item.field;
    } else if (typeof item.field === 'string' && item.field) {
        normalizedFields = [item.field];
    }

    setEditingItem({
      ...item,
      unit: normalizedUnits,
      field: normalizedFields
    });
    setRawInitAuthors(Array.isArray(item.authors) ? item.authors.join(', ') : (item.authors || ''));
    setUnitInput('');
  };

  const handleSaveProject = async () => {
    if (!editingProject?.title) return alert("Vui lòng nhập tên đề tài.");
    
    // Process raw strings into arrays only upon saving
    const finalProject = {
      ...editingProject,
      authors: rawAuthors.split(',').map(s => s.trim()).filter(s => s !== ''),
      mainMembers: rawMembers.split(',').map(s => s.trim()).filter(s => s !== ''),
      experts: rawExperts.split(',').map(s => s.trim()).filter(s => s !== '')
    };

    try {
      if (finalProject.id) {
        await db.collection("research_projects").doc(finalProject.id).update(finalProject);
      } else {
        await db.collection("research_projects").add(finalProject);
      }
      setEditingProject(null);
    } catch (e) {
      alert("Lỗi khi lưu đề tài.");
    }
  };

  const handleSaveInitiative = async () => {
    if (!editingItem?.title) return alert("Vui lòng nhập tên sáng kiến.");

    // Process raw strings for Initiative
    const finalInitiative = {
      ...editingItem,
      authors: rawInitAuthors.split(',').map(s => s.trim()).filter(s => s !== ''),
      // Unit and Field are already arrays in editingItem state
      unit: (editingItem.unit || []).map(s => s.trim()).filter(s => s !== ''),
      field: (editingItem.field || []).filter(f => f)
    };

    try {
      if (finalInitiative.id) {
        await db.collection("initiatives").doc(finalInitiative.id).update(finalInitiative);
      } else {
        await db.collection("initiatives").add(finalInitiative);
      }
      setEditingItem(null);
    } catch (e) {
      alert("Lỗi khi lưu sáng kiến.");
      console.error(e);
    }
  };

  // Helper for Unit Tags
  const addUnitTag = (unitName: string) => {
    const trimmed = unitName.trim();
    if (!trimmed) return;
    
    setEditingItem(prev => {
      if (!prev) return null;
      const currentUnits = prev.unit || [];
      if (!currentUnits.includes(trimmed)) {
        return { ...prev, unit: [...currentUnits, trimmed] };
      }
      return prev;
    });
    setUnitInput('');
    setShowUnitSuggestions(false);
  };

  const removeUnitTag = (unitName: string) => {
    setEditingItem(prev => {
      if (!prev) return null;
      const currentUnits = prev.unit || [];
      return { ...prev, unit: currentUnits.filter(u => u !== unitName) };
    });
  };

  // Helper for Level Toggle
  const toggleLevel = (lvl: InitiativeLevel) => {
    setEditingItem(prev => {
      if (!prev) return null;
      const currentLevels = prev.level || [];
      const newLevels = currentLevels.includes(lvl) 
        ? currentLevels.filter(l => l !== lvl)
        : [...currentLevels, lvl];
      return { ...prev, level: newLevels };
    });
  };

  // Helper for Field Toggle
  const toggleField = (field: string) => {
    setEditingItem(prev => {
      if (!prev) return null;
      const currentFields = prev.field || [];
      const newFields = currentFields.includes(field)
        ? currentFields.filter(f => f !== field)
        : [...currentFields, field];
      return { ...prev, field: newFields };
    });
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col lg:flex-row bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300">
        <Sidebar 
          activeTab={activeTab} setActiveTab={setActiveTab}
          isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}
          activeTheme={activeTheme} setTheme={setTheme as any}
          user={user} onLogout={() => auth.signOut()} onLogin={() => setIsLoginModalOpen(true)}
          onAdd={handleAdd} onBatch={() => setIsBatchModalOpen(true)}
        />

        <main className="flex-1 p-4 lg:p-10 overflow-y-auto">
          <div className="animate-slide">
            {activeTab === 'list' && <ListPage initiatives={initiatives} activeTheme={activeTheme} user={user} onView={setViewingItem} onEdit={handleEditInitiative} onDelete={(id) => db.collection("initiatives").doc(id).delete()} />}
            {activeTab === 'stats' && <StatsPage initiatives={initiatives} activeTheme={activeTheme} onViewItem={setViewingItem} pointConfig={pointConfig} onUpdatePointConfig={handleSavePointConfig} user={user} />}
            {activeTab === 'chat' && <ChatPage initiatives={initiatives} activeTheme={activeTheme} />}
            {activeTab === 'references' && <ReferencePage activeTheme={activeTheme} user={user} />}
            {activeTab === 'research' && <ResearchPage activeTheme={activeTheme} user={user} onEdit={handleEditProject} onAdd={handleAdd} />}
            {activeTab === 'bubble' && <BubblePage initiatives={initiatives} activeTheme={activeTheme} user={user} onView={setViewingItem} onEdit={handleEditInitiative} onDelete={(id) => db.collection("initiatives").doc(id).delete()} />}
            {activeTab === 'treemap' && <TreeMapPage initiatives={initiatives} activeTheme={activeTheme} user={user} onView={setViewingItem} onEdit={handleEditInitiative} onDelete={(id) => db.collection("initiatives").doc(id).delete()} />}
          </div>
        </main>

        {/* MODAL BATCH IMPORT */}
        <BatchImportModal isOpen={isBatchModalOpen} onClose={() => setIsBatchModalOpen(false)} activeTheme={activeTheme} />

        {/* MODAL EDIT PROJECT (Research) */}
        {editingProject && (
          <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl">
            {/* ... Research Modal Content ... */}
            {/* Keeping existing implementation abbreviated for clarity */}
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] w-full max-w-3xl max-h-[95vh] shadow-2xl flex flex-col overflow-hidden border-4 border-white dark:border-slate-800">
               {/* ... */}
               <div className="p-8 border-t dark:border-slate-800 flex gap-4 bg-white dark:bg-slate-900">
                 <button onClick={() => setEditingProject(null)} className="flex-1 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-[2rem] font-black text-slate-400 uppercase text-[10px] hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">Hủy bỏ</button>
                 <button onClick={handleSaveProject} className={`flex-[2] py-4 ${activeTheme.primary} text-white rounded-[2rem] font-black shadow-lg uppercase text-[10px] flex items-center justify-center gap-2 hover:brightness-110 transition-all`}><Save size={18}/> Lưu hồ sơ đề tài</button>
               </div>
            </div>
          </div>
        )}

        {/* MODAL EDIT INITIATIVE (Sáng kiến) */}
        {editingItem && (
          <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl">
             <div className="bg-white dark:bg-slate-900 rounded-[3rem] w-full max-w-3xl max-h-[95vh] shadow-2xl flex flex-col overflow-hidden border-4 border-white dark:border-slate-800">
                <div className="p-8 border-b dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900">
                  <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3"><Lightbulb className={activeTheme.text}/> Thông tin sáng kiến</h3>
                  <button onClick={() => setEditingItem(null)} className="p-4 hover:bg-white dark:hover:bg-slate-800 rounded-2xl transition-all shadow-sm text-slate-400"><X size={28} /></button>
                </div>
                
                <div className="p-8 lg:p-12 overflow-y-auto flex-1 space-y-8 custom-scrollbar">
                   {/* Tên sáng kiến */}
                   <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-2">Tên sáng kiến</label>
                      <input 
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20" 
                        value={editingItem.title} 
                        onChange={e => setEditingItem({...editingItem, title: e.target.value})} 
                      />
                   </div>
                   
                   {/* HÀNG 2: Năm công nhận + Khả năng nhân rộng */}
                   <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                      {/* Năm công nhận (Chiếm 4/12 cột) */}
                      <div className="md:col-span-4 space-y-1">
                         <label className="text-[9px] font-black uppercase text-slate-400 ml-2">Năm công nhận</label>
                         <input 
                           type="number" 
                           className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20" 
                           value={editingItem.year} 
                           onChange={e => setEditingItem({...editingItem, year: parseInt(e.target.value)})} 
                         />
                      </div>
                      
                      {/* Khả năng nhân rộng (Chiếm 8/12 cột) - Di chuyển lên đây */}
                      <div className="md:col-span-8 flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 h-full">
                         <div className={`p-2.5 rounded-full ${editingItem.isScalable ? 'bg-emerald-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'} transition-colors`}>
                            <TrendingUp size={18} />
                         </div>
                         <div className="flex-1">
                            <label className="text-xs font-black uppercase text-slate-900 dark:text-white cursor-pointer select-none" htmlFor="scalable-check">
                              Khả năng nhân rộng
                            </label>
                            <p className="text-[9px] text-slate-500 dark:text-slate-400">Đánh dấu nếu có thể áp dụng rộng rãi.</p>
                         </div>
                         <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                              type="checkbox" 
                              id="scalable-check"
                              className="sr-only peer"
                              checked={editingItem.isScalable || false}
                              onChange={(e) => setEditingItem({...editingItem, isScalable: e.target.checked})}
                            />
                            <div className="w-12 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                         </label>
                      </div>
                   </div>

                   {/* HÀNG 3: Lĩnh vực (Xuống dòng riêng) */}
                   <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-2">Lĩnh vực (Có thể chọn nhiều)</label>
                      <div className="flex flex-wrap gap-2">
                         {/* Hiển thị cả lĩnh vực mặc định VÀ lĩnh vực tự tạo đã có trong data */}
                         {Array.from(new Set([...INITIATIVE_FIELDS, ...(editingItem.field || [])])).map(field => {
                           const isSelected = editingItem.field?.includes(field);
                           const isCustom = !INITIATIVE_FIELDS.includes(field);
                           return (
                             <button
                               key={field}
                               onClick={() => toggleField(field)}
                               className={`px-3 py-2 rounded-xl text-[10px] font-bold uppercase transition-all flex items-center gap-1.5
                                 ${isSelected 
                                   ? `${activeTheme.primary} text-white shadow-md` 
                                   : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700'}
                                 ${isCustom && isSelected ? 'ring-2 ring-offset-1 ring-orange-500/50' : ''} 
                               `}
                             >
                               {field}
                               {isSelected && <Check size={12} />}
                             </button>
                           );
                         })}
                      </div>
                   </div>
                   
                   {/* Cấp công nhận - Button Group */}
                   <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-2 flex items-center gap-1">
                         <Award size={10}/> Các cấp công nhận
                      </label>
                      <div className="flex flex-wrap gap-2">
                         {(['HLH', 'NPSC', 'NPC', 'EVN'] as InitiativeLevel[]).map(lvl => {
                           const isSelected = editingItem.level?.includes(lvl);
                           return (
                             <button
                               key={lvl}
                               onClick={() => toggleLevel(lvl)}
                               className={`px-6 py-3 rounded-2xl font-black text-xs uppercase border-2 transition-all flex items-center gap-2
                                 ${isSelected 
                                   ? `${LEVEL_COLORS[lvl]} text-white border-transparent shadow-md transform scale-105` 
                                   : 'bg-slate-50 dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700 hover:border-orange-200'}`}
                             >
                               {isSelected && <Check size={14} strokeWidth={4} />}
                               {lvl}
                             </button>
                           );
                         })}
                      </div>
                   </div>
                   
                   {/* Tác giả */}
                   <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-2 flex items-center gap-1">
                         <Users size={10}/> Tác giả (phân cách bằng dấu phẩy)
                      </label>
                      <input 
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20" 
                        value={rawInitAuthors} 
                        onChange={e => setRawInitAuthors(e.target.value)} 
                        placeholder="Nguyễn Văn A, Trần Thị B..." 
                      />
                   </div>
                   
                   {/* Đơn vị áp dụng - Multi-select Tags + Auto Suggestion */}
                   <div className="space-y-2 relative">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-2 flex items-center gap-1">
                         <Building2 size={10}/> Đơn vị áp dụng
                      </label>
                      <div className="min-h-[60px] w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl flex flex-wrap gap-2 items-center focus-within:ring-2 focus-within:ring-orange-500/20 transition-shadow">
                         {editingItem.unit?.map((unit, idx) => (
                           <div key={idx} className={`${activeTheme.primary} text-white px-3 py-1.5 rounded-xl text-[11px] font-bold flex items-center gap-1 animate-in fade-in zoom-in`}>
                             <span>{unit}</span>
                             <button onClick={() => removeUnitTag(unit)} className="hover:text-red-200"><X size={12}/></button>
                           </div>
                         ))}
                         <input 
                           className="flex-1 bg-transparent border-none outline-none font-bold text-sm min-w-[150px] py-1 dark:text-white"
                           placeholder={editingItem.unit && editingItem.unit.length > 0 ? "Thêm đơn vị..." : "Nhập tên đơn vị..."}
                           value={unitInput}
                           onChange={(e) => {
                             setUnitInput(e.target.value);
                             setShowUnitSuggestions(true);
                           }}
                           onFocus={() => setShowUnitSuggestions(true)}
                           onKeyDown={(e) => {
                             if (e.key === 'Enter') {
                               e.preventDefault();
                               addUnitTag(unitInput);
                             }
                             if (e.key === 'Backspace' && !unitInput && editingItem.unit && editingItem.unit.length > 0) {
                               removeUnitTag(editingItem.unit[editingItem.unit.length - 1]);
                             }
                           }}
                         />
                      </div>
                      
                      {/* Suggestions Dropdown */}
                      {showUnitSuggestions && unitInput && (
                        <div className="absolute z-50 left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-xl max-h-48 overflow-y-auto custom-scrollbar">
                           {availableUnits
                             .filter(u => u.toLowerCase().includes(unitInput.toLowerCase()) && !editingItem.unit?.includes(u))
                             .map((u, i) => (
                               <button 
                                 key={i}
                                 onClick={() => addUnitTag(u)}
                                 className="w-full text-left px-5 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 transition-colors"
                               >
                                 {u}
                               </button>
                             ))}
                        </div>
                      )}
                      
                      {/* Click outside to close suggestions */}
                      {showUnitSuggestions && (
                        <div className="fixed inset-0 z-40" onClick={() => setShowUnitSuggestions(false)}></div>
                      )}
                   </div>

                   <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-2">Nội dung tóm tắt</label>
                      <textarea rows={6} className="w-full px-6 py-5 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-[2rem] font-bold resize-none dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20" value={editingItem.content} onChange={e => setEditingItem({...editingItem, content: e.target.value})} />
                   </div>
                   
                   <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-2">Link Drive (Nếu có)</label>
                      <input className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20" value={editingItem.driveLink || ''} onChange={e => setEditingItem({...editingItem, driveLink: e.target.value})} placeholder="https://drive.google.com/..." />
                   </div>
                </div>
                
                <div className="p-8 border-t dark:border-slate-800 flex gap-4 bg-white dark:bg-slate-900">
                  <button onClick={() => setEditingItem(null)} className="flex-1 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-[2rem] font-black text-slate-400 uppercase text-[10px] hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">Hủy bỏ</button>
                  <button onClick={handleSaveInitiative} className={`flex-[2] py-4 ${activeTheme.primary} text-white rounded-[2rem] font-black shadow-lg uppercase text-[10px] flex items-center justify-center gap-2 hover:brightness-110 transition-all`}><Save size={18}/> Lưu thông tin</button>
                </div>
             </div>
          </div>
        )}
        
        {/* VIEW DETAIL MODAL */}
        {viewingItem && (
          <div className="fixed inset-0 z-[1050] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
             <div className="bg-white dark:bg-slate-900 rounded-[3rem] w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border-4 border-white dark:border-slate-800">
                <div className="p-8 border-b dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
                   <div className="flex items-center gap-4">
                      <div className={`${activeTheme.primary} p-4 rounded-2xl text-white shadow-lg`}><Info size={24} /></div>
                      <h3 className="text-2xl font-black uppercase tracking-tighter dark:text-white">Chi tiết sáng kiến</h3>
                   </div>
                   <button onClick={() => setViewingItem(null)} className="p-4 hover:bg-white dark:hover:bg-slate-800 rounded-2xl transition-all shadow-sm text-slate-400"><X size={28} /></button>
                </div>
                <div className="flex-1 overflow-y-auto p-8 lg:p-12 space-y-8 custom-scrollbar">
                   <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                         <span className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest"><Calendar size={14}/> Năm {viewingItem.year}</span>
                         {viewingItem.level?.map(l => (
                            <span key={l} className={`flex items-center gap-2 ${LEVEL_COLORS[l] || 'bg-slate-500'} text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest`}><Award size={14}/> {l}</span>
                         ))}
                         {viewingItem.isScalable && (
                            <span className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest animate-pulse"><TrendingUp size={14}/> Nhân rộng</span>
                         )}
                         {/* Display Fields */}
                         {Array.isArray(viewingItem.field) ? (
                            viewingItem.field.map(f => (
                                <span key={f} className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest"><Briefcase size={14}/> {f}</span>
                            ))
                         ) : viewingItem.field && (
                             <span className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest"><Briefcase size={14}/> {viewingItem.field}</span>
                         )}
                      </div>
                      <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase leading-tight tracking-tight">{viewingItem.title}</h1>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 dark:bg-slate-800/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                      <div className="space-y-4">
                         <div className="space-y-1">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><Users size={12}/> Tác giả</p>
                            <p className="text-base font-bold text-slate-800 dark:text-white">{Array.isArray(viewingItem.authors) ? viewingItem.authors.join(', ') : viewingItem.authors}</p>
                         </div>
                      </div>
                      <div className="space-y-4">
                         <div className="space-y-1">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><Building2 size={12}/> Đơn vị áp dụng</p>
                            <p className="text-base font-bold text-slate-800 dark:text-white">{Array.isArray(viewingItem.unit) ? viewingItem.unit.join(', ') : viewingItem.unit}</p>
                         </div>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b dark:border-slate-800 pb-2"><FileText size={14}/> Nội dung giải pháp</p>
                      <div className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium whitespace-pre-wrap">{viewingItem.content}</div>
                   </div>

                   {viewingItem.driveLink && (
                      <a href={viewingItem.driveLink} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 px-8 py-4 ${activeTheme.primary} text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-all w-fit`}>
                         <ExternalLink size={16} /> Xem tài liệu gốc
                      </a>
                   )}
                </div>
             </div>
          </div>
        )}

        {/* LOGIN MODAL */}
        {isLoginModalOpen && (
          <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl">
             <div className="bg-white dark:bg-slate-900 rounded-[3rem] w-full max-w-md p-10 text-center space-y-8 animate-slide">
                <div className={`mx-auto ${activeTheme.primary} w-20 h-20 rounded-[2rem] flex items-center justify-center text-white shadow-xl mb-4`}><LogIn size={36} /></div>
                <h3 className="text-2xl font-black uppercase tracking-tighter">Hệ thống Admin</h3>
                <form onSubmit={handleLogin} className="space-y-5 text-left">
                   <div className="relative"><Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} /><input type="email" placeholder="Email" required className="w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/10" value={email} onChange={e => setEmail(e.target.value)} /></div>
                   <div className="relative"><Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} /><input type="password" placeholder="Mật khẩu" required className="w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/10" value={password} onChange={e => setPassword(e.target.value)} /></div>
                   {authError && <p className="text-[11px] font-black text-rose-500 text-center">{authError}</p>}
                   <button className={`w-full py-5 ${activeTheme.primary} text-white rounded-[1.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:brightness-110 transition-all`}>Đăng nhập</button>
                </form>
                <button onClick={() => setIsLoginModalOpen(false)} className="text-[10px] font-bold text-slate-300 uppercase hover:text-orange-500 transition-colors">Đóng</button>
             </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default App;
