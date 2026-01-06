
import React, { useState, useEffect, useMemo } from 'react';
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
import { Initiative, InitiativeLevel, ResearchProject, SettlementStatus, ProjectStatus } from "./types";
import { 
  X, LogIn, Mail, Lock, Lightbulb, Building2, Users, Edit, 
  Award, Plus, Search, Paperclip, ExternalLink, Download, FileText, Trash2, Loader2, AlertTriangle,
  Microscope, DollarSign, Activity, GraduationCap, UserCheck, Save
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

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'list' | 'stats' | 'chat' | 'bubble' | 'treemap' | 'references' | 'research'>('list');
  const [theme, setTheme] = useState<keyof typeof THEMES>('red');
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [user, setUser] = useState<any>(null);
  
  // Modal States
  const [viewingItem, setViewingItem] = useState<Initiative | null>(null);
  const [editingItem, setEditingItem] = useState<Partial<Initiative> | null>(null);
  const [editingProject, setEditingProject] = useState<Partial<ResearchProject> | null>(null);
  
  // States for raw string inputs to fix Space typing issue
  const [rawAuthors, setRawAuthors] = useState('');
  const [rawMembers, setRawMembers] = useState('');
  const [rawExperts, setRawExperts] = useState('');

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isBatchModalOpen, setIsBatchModalOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const { initiatives, loading, error } = useInitiatives();
  const activeTheme = THEMES[theme];

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
        content: ''
      });
      setRawAuthors('');
      setRawMembers('');
      setRawExperts('');
    } else {
      setEditingItem({ title: '', authors: [], year: new Date().getFullYear(), level: ['HLH'], content: '', unit: [] });
    }
  };

  const handleEditProject = (project: ResearchProject) => {
    setEditingProject(project);
    setRawAuthors(project.authors?.join(', ') || '');
    setRawMembers(project.mainMembers?.join(', ') || '');
    setRawExperts(project.experts?.join(', ') || '');
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
            {activeTab === 'list' && <ListPage initiatives={initiatives} activeTheme={activeTheme} user={user} onView={setViewingItem} onEdit={setEditingItem} onDelete={(id) => db.collection("initiatives").doc(id).delete()} />}
            {activeTab === 'stats' && <StatsPage initiatives={initiatives} activeTheme={activeTheme} onViewItem={setViewingItem} />}
            {activeTab === 'chat' && <ChatPage initiatives={initiatives} activeTheme={activeTheme} />}
            {activeTab === 'references' && <ReferencePage activeTheme={activeTheme} user={user} />}
            {activeTab === 'research' && <ResearchPage activeTheme={activeTheme} user={user} onEdit={handleEditProject} onAdd={handleAdd} />}
            {activeTab === 'bubble' && <BubblePage initiatives={initiatives} activeTheme={activeTheme} user={user} onView={setViewingItem} onEdit={setEditingItem} onDelete={(id) => db.collection("initiatives").doc(id).delete()} />}
            {activeTab === 'treemap' && <TreeMapPage initiatives={initiatives} activeTheme={activeTheme} user={user} onView={setViewingItem} onEdit={setEditingItem} onDelete={(id) => db.collection("initiatives").doc(id).delete()} />}
          </div>
        </main>

        {/* MODAL EDIT PROJECT */}
        {editingProject && (
          <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl">
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] w-full max-w-3xl max-h-[95vh] shadow-2xl flex flex-col overflow-hidden border-4 border-white dark:border-slate-800">
               <div className="p-8 border-b dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900">
                 <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3"><Microscope className={activeTheme.text}/> Quản trị Đề tài KHCN</h3>
                 <button onClick={() => setEditingProject(null)} className="p-4 hover:bg-white dark:hover:bg-slate-800 rounded-2xl transition-all shadow-sm text-slate-400"><X size={28} /></button>
               </div>
               <div className="p-8 lg:p-12 overflow-y-auto flex-1 space-y-6 custom-scrollbar">
                  <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-2">Tên đề tài nghiên cứu</label><input className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20" value={editingProject.title} onChange={e => setEditingProject({...editingProject, title: e.target.value})} /></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-2">Năm thực hiện</label><input type="number" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20" value={editingProject.year} onChange={e => setEditingProject({...editingProject, year: parseInt(e.target.value)})} /></div>
                    <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-2">Cấp đề tài</label>
                      <select className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold appearance-none dark:text-white outline-none" value={editingProject.level} onChange={e => setEditingProject({...editingProject, level: e.target.value as any})}>
                        <option value="NPSC">Cấp Công ty (NPSC)</option>
                        <option value="NPC">Cấp Tổng công ty (NPC)</option>
                        <option value="EVN">Cấp Tập đoàn (EVN)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-2">Kinh phí (VNĐ)</label><input type="number" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20" value={editingProject.budget} onChange={e => setEditingProject({...editingProject, budget: parseInt(e.target.value)})} /></div>
                    <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-2">Tiến độ (%)</label><input type="range" min="0" max="100" className="w-full h-10 accent-orange-600" value={editingProject.progress} onChange={e => setEditingProject({...editingProject, progress: parseInt(e.target.value)})} /><p className="text-right text-[10px] font-black text-orange-600 uppercase">{editingProject.progress}% Hoàn thành</p></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-2">Thanh quyết toán</label>
                      <select className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold appearance-none dark:text-white outline-none" value={editingProject.settlementStatus} onChange={e => setEditingProject({...editingProject, settlementStatus: e.target.value as any})}>
                        <option value="chua_thanh_toan">Chưa thanh toán</option>
                        <option value="dang_thanh_toan">Đang thanh toán</option>
                        <option value="da_quyet_toan">Đã quyết toán</option>
                      </select>
                    </div>
                    <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-2">Tình trạng đề tài</label>
                      <select className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold appearance-none dark:text-white outline-none" value={editingProject.status} onChange={e => setEditingProject({...editingProject, status: e.target.value as any})}>
                        <option value="dang_thuc_hien">Đang thực hiện</option>
                        <option value="da_nghiem_thu">Đã nghiệm thu</option>
                        <option value="da_huy">Đã hủy</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-2 flex items-center gap-1"><Users size={10}/> Nhóm tác giả (phân cách bằng dấu phẩy)</label>
                      <input 
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20" 
                        value={rawAuthors} 
                        onChange={e => setRawAuthors(e.target.value)} 
                        placeholder="Nguyễn Văn A, Trần Thị B..." 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-2 flex items-center gap-1"><UserCheck size={10}/> Thành viên làm chính</label>
                      <input 
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20" 
                        value={rawMembers} 
                        onChange={e => setRawMembers(e.target.value)} 
                        placeholder="Huy, Nam..."
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-2 flex items-center gap-1"><GraduationCap size={10}/> Chuyên gia cố vấn</label>
                      <input 
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20" 
                        value={rawExperts} 
                        onChange={e => setRawExperts(e.target.value)} 
                        placeholder="Tiến sĩ A, Chuyên gia B..."
                      />
                    </div>
                  </div>

                  <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 ml-2">Nội dung tóm tắt</label><textarea rows={5} className="w-full px-6 py-5 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-[2rem] font-bold resize-none dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20" value={editingProject.content} onChange={e => setEditingProject({...editingProject, content: e.target.value})} /></div>
               </div>
               <div className="p-8 border-t dark:border-slate-800 flex gap-4 bg-white dark:bg-slate-900">
                 <button onClick={() => setEditingProject(null)} className="flex-1 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-[2rem] font-black text-slate-400 uppercase text-[10px] hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">Hủy bỏ</button>
                 <button onClick={handleSaveProject} className={`flex-[2] py-4 ${activeTheme.primary} text-white rounded-[2rem] font-black shadow-lg uppercase text-[10px] flex items-center justify-center gap-2 hover:brightness-110 transition-all`}><Save size={18}/> Lưu hồ sơ đề tài</button>
               </div>
            </div>
          </div>
        )}

        {/* LOGIN MODAL (existing) */}
        {isLoginModalOpen && (
          <div className="fixed inset-0 z-[600] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl">
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
