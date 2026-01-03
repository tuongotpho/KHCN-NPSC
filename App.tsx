
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { initializeApp, getApp, getApps } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot,
  query,
  orderBy,
  writeBatch
} from "firebase/firestore";
import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged, 
  signOut,
  User 
} from "firebase/auth";
import { Initiative, ChatMessage, InitiativeLevel, BatchItem } from './types';
import { 
  Search, BrainCircuit, Plus, Send, 
  LayoutDashboard, X, Trash2, Building2, 
  Loader2, FileUp, TrendingUp, Users, 
  ArrowRight, Bot, Upload, Edit, Lightbulb,
  Award, BarChart3, Zap, Activity, Sparkles, ChevronRight, Target,
  LogIn, LogOut, ShieldCheck, Mail, Lock, UserPlus, Filter, Paperclip, Link, Download, ExternalLink, FileText, Calendar, CheckCircle2, AlertCircle, Check, Briefcase, Palette, ChevronLeft
} from 'lucide-react';

const firebaseConfig = {
  apiKey: "AIzaSyD_0AkyF0VHWWjqiX_ZE1KapQ72kgbM--Q",
  authDomain: "dashboard-8787.firebaseapp.com",
  projectId: "dashboard-8787",
  storageBucket: "dashboard-8787.firebasestorage.app",
  messagingSenderId: "544276859484",
  appId: "1:544276859484:web:973ad657ff87044349b499",
  measurementId: "G-GS3R89R7ZY"
};

const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const LEVEL_COLORS: Record<InitiativeLevel, string> = {
  'HLH': 'bg-slate-500',
  'NPSC': 'bg-red-600',
  'NPC': 'bg-orange-600',
  'EVN': 'bg-rose-700'
};

const THEMES = {
  red: { primary: 'bg-orange-600', hover: 'hover:bg-orange-700', text: 'text-orange-600', border: 'border-orange-200', gradient: 'from-orange-500 to-red-600', ring: 'focus:ring-orange-500/20', accent: 'bg-orange-50', shadow: 'shadow-orange-600/20' },
  blue: { primary: 'bg-blue-600', hover: 'hover:bg-blue-700', text: 'text-blue-600', border: 'border-blue-200', gradient: 'from-blue-500 to-indigo-600', ring: 'focus:ring-blue-500/20', accent: 'bg-blue-50', shadow: 'shadow-blue-600/20' },
  emerald: { primary: 'bg-emerald-600', hover: 'hover:bg-emerald-700', text: 'text-emerald-600', border: 'border-emerald-200', gradient: 'from-emerald-500 to-teal-600', ring: 'focus:ring-emerald-500/20', accent: 'bg-emerald-50', shadow: 'shadow-emerald-600/20' },
  indigo: { primary: 'bg-indigo-600', hover: 'hover:bg-indigo-700', text: 'text-indigo-600', border: 'border-indigo-200', gradient: 'from-indigo-500 to-purple-600', ring: 'focus:ring-indigo-500/20', accent: 'bg-blue-50', shadow: 'shadow-indigo-600/20' }
};

type ThemeKey = keyof typeof THEMES;

const ITEMS_PER_PAGE = 10;

const AI_SYSTEM_INSTRUCTION = `Bạn là chuyên gia cố vấn chiến lược và quản lý sáng kiến tại NPSC Hub. 
Nhiệm vụ của bạn là cung cấp thông tin chính xác, chuyên nghiệp.
QUY TẮC TRÌNH BÀY QUAN TRỌNG:
1. Tuyệt đối KHÔNG sử dụng các ký tự Markdown như dấu sao (*), dấu thăng (#) hoặc bất kỳ ký hiệu định dạng văn bản thô nào.
2. Sử dụng tiêu đề viết hoa để phân tách các mục lớn.
3. Xuống dòng rõ ràng giữa các đoạn văn để tạo không gian trắng, giúp văn bản dễ đọc.
4. Sử dụng ngôn ngữ hành chính, lịch sự, chuyên nghiệp.
5. Nếu cần liệt kê, hãy sử dụng đánh số thứ tự (1, 2, 3...) thay vì dùng dấu chấm đầu dòng.`;

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeKey>('red');
  const [initiatives, setInitiatives] = useState<Initiative[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'list' | 'stats' | 'chat'>('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevels, setSelectedLevels] = useState<InitiativeLevel[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [aiInsight, setAiInsight] = useState<string>('');
  const [isGeneratingInsight, setIsGeneratingInsight] = useState(false);
  
  // Pagination States
  const [currentPageList, setCurrentPageList] = useState(1);
  const [currentPageStats, setCurrentPageStats] = useState(1);

  // Stats Drill-down states
  const [statsView, setStatsView] = useState<'level' | 'year' | 'unit' | 'field'>('level');
  const [statsDetailValue, setStatsDetailValue] = useState<string | number | null>(null);

  // Auth states
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [isAuthProcessing, setIsAuthProcessing] = useState(false);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Chào mừng bạn đến với NPSC Hub.\nTôi là trợ lý trí tuệ nhân tạo, sẵn sàng hỗ trợ bạn tra cứu và phân tích các dữ liệu sáng kiến khoa học công nghệ.' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Modals
  const [isBatchModalOpen, setIsBatchModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [viewingInitiative, setViewingInitiative] = useState<Initiative | null>(null);
  const [editingInitiative, setEditingInitiative] = useState<Partial<Initiative> | null>(null);
  const [isBatchProcessing, setIsBatchProcessing] = useState(false);
  const [batchResults, setBatchResults] = useState<BatchItem[]>([]);
  const [editingBatchItem, setEditingBatchItem] = useState<BatchItem | null>(null);
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const activeTheme = THEMES[theme];

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const q = query(collection(db, "initiatives"), orderBy("year", "desc"));
    const unsubscribeData = onSnapshot(q, (querySnapshot) => {
      const items: Initiative[] = [];
      querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id } as Initiative);
      });
      setInitiatives(items);
      setLoading(false);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeData();
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Reset page 1 on filter/search change
  useEffect(() => {
    setCurrentPageList(1);
  }, [searchTerm, selectedLevels, selectedYears]);

  // Reset stats page on detail value change
  useEffect(() => {
    setCurrentPageStats(1);
  }, [statsDetailValue, statsView]);

  const handleAuthAction = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) return;
    setIsAuthProcessing(true);
    setAuthError('');
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setIsLoginModalOpen(false);
    } catch (error: any) {
      setAuthError('Xác thực thất bại.');
    } finally {
      setIsAuthProcessing(false);
    }
  };

  const dashboardStats = useMemo(() => {
    const total = initiatives.length;
    const currentYear = new Date().getFullYear();
    const currentYearCount = initiatives.filter(i => i.year === currentYear).length;
    
    const dist = (key: keyof Initiative) => initiatives.reduce((acc, curr) => {
      const val = curr[key];
      if (Array.isArray(val)) {
        val.forEach(v => { acc[v] = (acc[v] || 0) + 1; });
      } else if (val) {
        acc[val] = (acc[val] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    return { 
      total, 
      currentYearCount, 
      levelDist: dist('level'), 
      yearDist: dist('year'), 
      unitDist: dist('unit'), 
      fieldDist: dist('field') 
    };
  }, [initiatives]);

  const availableYears = useMemo(() => {
    return Object.keys(dashboardStats.yearDist).map(Number).sort((a, b) => b - a);
  }, [dashboardStats.yearDist]);

  const filteredInitiatives = useMemo(() => {
    return initiatives.filter(i => {
      const matchesSearch = i.title.toLowerCase().includes(searchTerm.toLowerCase()) || (i.authors?.some(a => a.toLowerCase().includes(searchTerm.toLowerCase())));
      const matchesLevel = selectedLevels.length === 0 || (i.level && i.level.some(l => selectedLevels.includes(l as InitiativeLevel)));
      const matchesYear = selectedYears.length === 0 || selectedYears.includes(i.year);
      return matchesSearch && matchesLevel && matchesYear;
    });
  }, [searchTerm, selectedLevels, selectedYears, initiatives]);

  const paginatedList = useMemo(() => {
    const start = (currentPageList - 1) * ITEMS_PER_PAGE;
    return filteredInitiatives.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredInitiatives, currentPageList]);

  const statsDrillDownList = useMemo(() => {
    if (!statsDetailValue) return [];
    return initiatives.filter(i => {
      if (statsView === 'level') return i.level?.includes(statsDetailValue as InitiativeLevel);
      if (statsView === 'year') return i.year === Number(statsDetailValue);
      if (statsView === 'unit') return i.unit === statsDetailValue;
      if (statsView === 'field') return (i.field || 'Khác') === statsDetailValue;
      return false;
    });
  }, [initiatives, statsView, statsDetailValue]);

  const paginatedStatsList = useMemo(() => {
    const start = (currentPageStats - 1) * ITEMS_PER_PAGE;
    return statsDrillDownList.slice(start, start + ITEMS_PER_PAGE);
  }, [statsDrillDownList, currentPageStats]);

  const handleBatchPdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setIsBatchProcessing(true);
    // Fix: Create instance right before API call as per guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const results: BatchItem[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const base64 = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve((reader.result as string).split(',')[1]);
          reader.readAsDataURL(file);
        });
        // Fix: Use strictly correct contents structure according to GenAI guidelines
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: { 
            parts: [
              { inlineData: { data: base64, mimeType: 'application/pdf' } }, 
              { text: "Trích xuất danh sách sáng kiến. Nội dung tóm tắt chuyên nghiệp, không Markdown." }
            ] 
          },
          config: {
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  authors: { type: Type.ARRAY, items: { type: Type.STRING } },
                  unit: { type: Type.STRING },
                  year: { type: Type.INTEGER },
                  content: { type: Type.STRING },
                  field: { type: Type.STRING }
                },
                required: ["title", "authors", "year", "unit"]
              }
            }
          }
        });
        const extracted = JSON.parse(response.text || "[]");
        results.push(...extracted.map((item: any, idx: number) => ({
          ...item,
          level: ['HLH'],
          selected: true,
          tempId: `batch-${i}-${idx}-${Date.now()}`
        })));
      }
      setBatchResults(results);
    } catch (error) { alert("Lỗi xử lý AI."); }
    finally { setIsBatchProcessing(false); }
  };

  const handleSendMessage = async () => {
    if (!userInput.trim() || isTyping) return;
    const newMessages: ChatMessage[] = [...chatMessages, { role: 'user', text: userInput }];
    setChatMessages(newMessages);
    setUserInput('');
    setIsTyping(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const context = initiatives.map(i => `- [${i.year}] ${i.title}`).join('\n').substring(0, 3000);
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Dữ liệu:\n${context}\n\nCâu hỏi: ${userInput}`,
        config: { systemInstruction: AI_SYSTEM_INSTRUCTION }
      });
      setChatMessages([...newMessages, { role: 'model', text: response.text || "Không có phản hồi." }]);
    } catch (error) { setChatMessages([...newMessages, { role: 'model', text: "Lỗi kết nối AI." }]); }
    finally { setIsTyping(false); }
  };

  const generateLeadershipInsight = async () => {
    if (isGeneratingInsight) return;
    setIsGeneratingInsight(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const context = JSON.stringify(dashboardStats);
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Phân tích chiến lược sáng kiến dựa trên dữ liệu: ${context}.`,
        config: { systemInstruction: AI_SYSTEM_INSTRUCTION }
      });
      setAiInsight(response.text || "");
    } catch (error) { setAiInsight("Lỗi AI."); }
    finally { setIsGeneratingInsight(false); }
  };

  const PaginationControls = ({ currentPage, totalItems, onPageChange }: { currentPage: number, totalItems: number, onPageChange: (p: number) => void }) => {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    if (totalPages <= 1) return null;

    return (
      <div className="flex items-center justify-center gap-2 mt-8">
        <button 
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`p-3 rounded-xl border border-slate-200 bg-white text-slate-400 hover:text-slate-600 transition-all disabled:opacity-30`}
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => onPageChange(idx + 1)}
              className={`w-10 h-10 rounded-xl font-black text-xs transition-all ${currentPage === idx + 1 ? `${activeTheme.primary} text-white shadow-lg ${activeTheme.shadow}` : 'bg-white text-slate-400 border border-slate-100 hover:border-orange-200'}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
        <button 
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`p-3 rounded-xl border border-slate-200 bg-white text-slate-400 hover:text-slate-600 transition-all disabled:opacity-30`}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#f8fafc]">
      <aside className="w-full lg:w-80 bg-slate-900 text-white lg:sticky lg:top-0 lg:h-screen flex flex-col p-8 z-30 shadow-2xl">
        <div onClick={() => !user && setIsLoginModalOpen(true)} className="flex items-center gap-4 mb-10 group cursor-pointer transition-all">
          <div className={`bg-gradient-to-br ${activeTheme.gradient} p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}><BrainCircuit size={28} className="text-white" /></div>
          <div><h1 className="font-extrabold text-2xl tracking-tighter">NPSC Hub</h1><p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Innovation Engine</p></div>
        </div>

        {user && (
          <div className="mb-6 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${activeTheme.primary} flex items-center justify-center font-black text-white`}>{user.email?.charAt(0).toUpperCase()}</div>
              <div className="flex-1 overflow-hidden"><p className="text-xs font-black truncate text-slate-200">{user.email}</p><span className={`text-[9px] ${activeTheme.text} font-black uppercase`}>Administrator</span></div>
              <button onClick={() => signOut(auth)} className="p-2 text-slate-500 hover:text-rose-400 transition-colors"><LogOut size={16}/></button>
            </div>
            
            {/* Theme Selector for Admin */}
            <div className="mt-4 pt-4 border-t border-slate-700/50">
              <p className="text-[9px] font-black text-slate-500 uppercase mb-2 flex items-center gap-1.5"><Palette size={10}/> Tùy chỉnh màu sắc</p>
              <div className="flex gap-2">
                {(Object.keys(THEMES) as ThemeKey[]).map(t => (
                  <button 
                    key={t} 
                    onClick={() => setTheme(t)}
                    className={`w-5 h-5 rounded-full border-2 transition-all ${THEMES[t].primary} ${theme === t ? 'border-white scale-125' : 'border-transparent opacity-50 hover:opacity-100'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <nav className="space-y-2 flex-1">
          <button onClick={() => setActiveTab('list')} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold ${activeTab === 'list' ? `${activeTheme.primary} text-white shadow-xl ${activeTheme.shadow}` : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}><LayoutDashboard size={22} /> Danh mục</button>
          <button onClick={() => setActiveTab('stats')} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold ${activeTab === 'stats' ? `${activeTheme.primary} text-white shadow-xl ${activeTheme.shadow}` : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}><BarChart3 size={22} /> Thống kê</button>
          <button onClick={() => setActiveTab('chat')} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold ${activeTab === 'chat' ? `${activeTheme.primary} text-white shadow-xl ${activeTheme.shadow}` : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}><Bot size={22} /> Trợ lý AI</button>
        </nav>

        {user && (
          <div className="mt-auto pt-6 border-t border-slate-800 space-y-3">
            <button onClick={() => { setEditingInitiative({ title: '', content: '', authors: [], unit: '', year: new Date().getFullYear(), level: ['HLH'], field: '' }); setIsEditModalOpen(true); }} className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-4 rounded-2xl font-black hover:bg-slate-100 transition-all shadow-lg"><Plus size={20} /> Thêm mới</button>
            <button onClick={() => setIsBatchModalOpen(true)} className={`w-full flex items-center justify-center gap-3 ${activeTheme.primary} text-white px-6 py-4 rounded-2xl font-black ${activeTheme.hover} transition-all shadow-lg`}><FileUp size={20} /> Nhập PDF (AI)</button>
          </div>
        )}
      </aside>

      <main className="flex-1 p-6 lg:p-10 flex flex-col gap-8 overflow-y-auto">
        {activeTab === 'list' ? (
          <>
            <header className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <h2 className="text-4xl font-black text-slate-900 uppercase">Kho sáng kiến</h2>
                <div className="relative w-full md:w-96"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} /><input type="text" placeholder="Tìm kiếm..." className={`w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm font-medium focus:ring-4 ${activeTheme.ring} outline-none`} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /></div>
              </div>
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-3"><p className="text-[9px] font-black text-slate-400 uppercase ml-2 flex items-center gap-1.5"><Award size={10}/> Cấp công nhận</p><div className="flex flex-wrap gap-2">{(['HLH', 'NPSC', 'NPC', 'EVN'] as InitiativeLevel[]).map(lvl => (<button key={lvl} onClick={() => setSelectedLevels(prev => prev.includes(lvl) ? prev.filter(l => l !== lvl) : [...prev, lvl])} className={`px-4 py-2 rounded-xl text-[10px] font-black border-2 transition-all ${selectedLevels.includes(lvl) ? `${LEVEL_COLORS[lvl]} text-white border-transparent shadow-lg scale-105` : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'}`}>{lvl}</button>))}</div></div>
                   <div className="space-y-3"><p className="text-[9px] font-black text-slate-400 uppercase ml-2 flex items-center gap-1.5"><Calendar size={10}/> Năm công nhận</p><div className="flex flex-wrap gap-2">{availableYears.map(year => (<button key={year} onClick={() => setSelectedYears(prev => prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year])} className={`px-4 py-2 rounded-xl text-[10px] font-black border-2 transition-all ${selectedYears.includes(year) ? `${activeTheme.primary} text-white border-transparent shadow-lg scale-105` : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'}`}>{year}</button>))}</div></div>
                </div>
              </div>
            </header>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {paginatedList.map((item) => (
                <div key={item.id} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all group animate-slide">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-slate-900 text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase shadow-sm">{item.year}</span>
                      {item.level?.map(lvl => (<span key={lvl} className={`${LEVEL_COLORS[lvl as InitiativeLevel] || 'bg-slate-400'} text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase shadow-sm`}>{lvl}</span>))}
                      {item.unit && <span className={`${activeTheme.accent} ${activeTheme.text} border ${activeTheme.border} px-3 py-1.5 rounded-xl text-[10px] font-black uppercase flex items-center gap-1.5 shadow-sm`}><Building2 size={10} /> {item.unit}</span>}
                    </div>
                    {user && (
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => { setEditingInitiative({...item}); setIsEditModalOpen(true); }} className={`p-2.5 ${activeTheme.accent} ${activeTheme.text} rounded-xl hover:scale-110 transition-all`}><Edit size={18} /></button>
                        <button onClick={() => { if(confirm('Xác nhận xóa?')) deleteDoc(doc(db, "initiatives", item.id)); }} className="p-2.5 bg-rose-50 text-rose-400 rounded-xl hover:scale-110 transition-all"><Trash2 size={18} /></button>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight line-clamp-2 min-h-[4rem] group-hover:text-orange-600 transition-colors">{item.title}</h3>
                  <div className="flex items-center gap-2 text-slate-500 font-bold text-sm mb-6"><Users size={16} className={activeTheme.text} /> {Array.isArray(item.authors) ? item.authors.join(', ') : item.authors}</div>
                  <button onClick={() => setViewingInitiative(item)} className={`${activeTheme.text} font-black text-sm flex items-center gap-2 hover:gap-3 transition-all border-b-2 border-transparent hover:border-current pb-1 w-fit uppercase tracking-wider`}>Xem chi tiết <ArrowRight size={16} /></button>
                </div>
              ))}
            </div>
            
            <PaginationControls 
              currentPage={currentPageList} 
              totalItems={filteredInitiatives.length} 
              onPageChange={setCurrentPageList} 
            />
          </>
        ) : activeTab === 'stats' ? (
          <div className="space-y-10 animate-slide">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-4xl font-black text-slate-900 uppercase">Thống kê Tổng thể</h2>
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest"><Activity size={14}/> Cập nhật theo thời gian thực</div>
             </div>
             
             {/* Summary Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Tổng sáng kiến', value: dashboardStats.total, icon: Zap, color: 'blue' },
                  { label: 'Cấp EVN', value: dashboardStats.levelDist['EVN'] || 0, icon: Award, color: 'purple' },
                  { label: 'Cấp NPC', value: dashboardStats.levelDist['NPC'] || 0, icon: Building2, color: 'indigo' },
                  { label: 'Năm hiện tại', value: dashboardStats.currentYearCount, icon: Activity, color: 'orange' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm text-center group hover:shadow-lg transition-all">
                    <div className={`p-4 bg-${stat.color}-50 text-${stat.color}-600 rounded-2xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform`}><stat.icon size={24} /></div>
                    <p className="text-slate-400 font-bold uppercase text-[10px] mb-1">{stat.label}</p>
                    <h4 className="text-4xl font-black text-slate-900">{stat.value}</h4>
                  </div>
                ))}
             </div>

             {/* Interactive Analytics Panel */}
             <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-8">
                <div className="flex flex-wrap items-center gap-3 bg-slate-50 p-2 rounded-[2rem] border border-slate-100 w-fit">
                   {[
                     { id: 'level', label: 'Theo Cấp', icon: Award },
                     { id: 'year', label: 'Theo Năm', icon: Calendar },
                     { id: 'unit', label: 'Theo Đơn vị', icon: Building2 },
                     { id: 'field', label: 'Theo Lĩnh vực', icon: Briefcase }
                   ].map(v => (
                     <button 
                       key={v.id} 
                       onClick={() => { setStatsView(v.id as any); setStatsDetailValue(null); }} 
                       className={`px-8 py-4 rounded-[1.5rem] font-black text-sm flex items-center gap-2 transition-all ${statsView === v.id ? `${activeTheme.primary} text-white shadow-xl ${activeTheme.shadow}` : 'text-slate-400 hover:text-slate-600'}`}
                     >
                       <v.icon size={18}/> {v.label}
                     </button>
                   ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                   {/* Distribution Grid */}
                   <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center justify-between px-2">
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Phân bổ dữ liệu</p>
                        <p className="text-[10px] font-bold text-slate-300">Click xem danh sách</p>
                      </div>
                      <div className="space-y-2 max-h-[600px] overflow-y-auto pr-3 custom-scrollbar">
                         {Object.entries(
                           statsView === 'level' ? dashboardStats.levelDist :
                           statsView === 'year' ? dashboardStats.yearDist :
                           statsView === 'unit' ? dashboardStats.unitDist :
                           dashboardStats.fieldDist
                         ).sort((a, b) => {
                           // Fix: Explicitly cast values to numbers to resolve arithmetic operation type error on line 495
                           const isYearSort = statsView === 'year';
                           const valA = isYearSort ? Number(a[0]) : Number(a[1]);
                           const valB = isYearSort ? Number(b[0]) : Number(b[1]);
                           return valB - valA;
                         }).map(([key, count]) => {
                           const percentage = Math.round((count / dashboardStats.total) * 100);
                           return (
                             <button 
                               key={key} 
                               onClick={() => setStatsDetailValue(key)}
                               className={`w-full group p-5 rounded-3xl border transition-all text-left ${statsDetailValue === key ? `${activeTheme.primary} border-transparent text-white shadow-xl` : 'bg-white border-slate-100 hover:border-orange-200 text-slate-700'}`}
                             >
                                <div className="flex justify-between items-center mb-3">
                                   <span className="font-black text-sm uppercase">{key}</span>
                                   <span className={`text-[10px] font-black px-2.5 py-1 rounded-lg ${statsDetailValue === key ? 'bg-white/20' : 'bg-slate-100'}`}>{count} sáng kiến</span>
                                </div>
                                <div className={`w-full h-2 rounded-full ${statsDetailValue === key ? 'bg-white/20' : 'bg-slate-100'} overflow-hidden`}>
                                   <div 
                                    className={`h-full ${statsDetailValue === key ? 'bg-white' : activeTheme.primary} transition-all duration-1000`} 
                                    style={{ width: `${percentage}%` }}
                                   />
                                </div>
                             </button>
                           );
                         })}
                      </div>
                   </div>

                   {/* Detail Preview Area */}
                   <div className="lg:col-span-7 bg-slate-50/50 rounded-[3rem] border border-slate-100 p-8 flex flex-col min-h-[600px] shadow-inner">
                      {statsDetailValue ? (
                        <>
                           <div className="flex items-center justify-between mb-8">
                              <div className="flex items-center gap-3">
                                 <div className={`${activeTheme.primary} p-3 rounded-2xl text-white shadow-lg`}><FileText size={20}/></div>
                                 <h4 className="font-black text-slate-900 uppercase tracking-tight">Danh sách {statsDetailValue}</h4>
                              </div>
                              <span className={`text-[10px] font-black ${activeTheme.accent} ${activeTheme.text} px-4 py-2 rounded-full uppercase border ${activeTheme.border}`}>{statsDrillDownList.length} sáng kiến</span>
                           </div>
                           <div className="space-y-4 flex-1">
                              <div className="space-y-4 overflow-y-auto max-h-[450px] pr-2 custom-scrollbar">
                                 {paginatedStatsList.map(item => (
                                   <div 
                                     key={item.id} 
                                     className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all cursor-pointer animate-slide" 
                                     onClick={() => setViewingInitiative(item)}
                                   >
                                      <div className="flex justify-between items-start mb-3">
                                         <span className={`text-[10px] font-black ${activeTheme.text} uppercase tracking-widest`}>Năm {item.year}</span>
                                         <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full">{item.unit}</span>
                                      </div>
                                      <p className="text-base font-bold text-slate-800 leading-tight group-hover:text-orange-600">{item.title}</p>
                                   </div>
                                 ))}
                              </div>
                              
                              <PaginationControls 
                                currentPage={currentPageStats} 
                                totalItems={statsDrillDownList.length} 
                                onPageChange={setCurrentPageStats} 
                              />
                           </div>
                        </>
                      ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-10 animate-pulse">
                           <div className="bg-white p-8 rounded-full text-slate-100 shadow-inner mb-6"><BarChart3 size={64} /></div>
                           <p className="text-slate-400 font-black text-sm uppercase tracking-[0.2em] max-w-xs">Chọn một hạng mục bên trái để hiển thị chi tiết sáng kiến</p>
                        </div>
                      )}
                   </div>
                </div>
             </div>

             {/* AI Analysis Section */}
             <div className="bg-slate-900 p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-16 opacity-10 rotate-12 scale-150"><Sparkles size={150} /></div>
                <div className="relative z-10">
                   <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
                      <div className="flex items-center gap-5">
                         <div className={`${activeTheme.primary} p-4 rounded-3xl shadow-2xl shadow-orange-600/50 animate-bounce`}><Bot size={32} /></div>
                         <div>
                            <h3 className="text-3xl font-black uppercase tracking-tight">Trí tuệ nhân tạo NPSC</h3>
                            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Cố vấn chiến lược & Phân tích chuyên sâu</p>
                         </div>
                      </div>
                      <button 
                        onClick={generateLeadershipInsight} 
                        disabled={isGeneratingInsight} 
                        className={`px-10 py-5 bg-white text-slate-900 rounded-[2rem] font-black flex items-center gap-3 hover:bg-orange-50 transition-all shadow-2xl active:scale-95 disabled:opacity-50`}
                      >
                         {isGeneratingInsight ? <Loader2 size={22} className="animate-spin" /> : <Activity size={22} />} 
                         TỔNG HỢP & PHÂN TÍCH
                      </button>
                   </div>
                   <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 p-12 min-h-[350px] flex items-center justify-center shadow-inner">
                      {aiInsight ? (
                        <div className="text-xl text-slate-100 leading-[1.8] font-medium whitespace-pre-wrap w-full animate-slide tracking-wide">
                           {aiInsight}
                        </div>
                      ) : (
                        <div className="text-center space-y-6">
                           <Sparkles size={56} className="mx-auto text-slate-700" />
                           <p className="text-slate-500 font-black uppercase text-xs tracking-[0.3em]">Hệ thống AI đã sẵn sàng xử lý {initiatives.length} dữ liệu sáng kiến</p>
                        </div>
                      )}
                   </div>
                </div>
             </div>
          </div>
        ) : (
          <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl flex flex-col h-[75vh] overflow-hidden">
             <div className="p-10 border-b border-slate-100 flex items-center gap-5 bg-slate-50/50">
                <div className={`${activeTheme.primary} p-4 rounded-2xl text-white shadow-lg`}><Bot size={28} /></div>
                <div>
                   <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Trợ lý AI Thông minh</h3>
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hỗ trợ tra cứu & Nhận diện trùng lặp</p>
                </div>
             </div>
             <div className="flex-1 overflow-y-auto p-10 space-y-8 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-7 rounded-[2.5rem] font-medium whitespace-pre-wrap shadow-sm ${msg.role === 'user' ? `${activeTheme.primary} text-white rounded-tr-none shadow-orange-600/10` : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'}`}>{msg.text}</div>
                  </div>
                ))}
                {isTyping && <div className={`${activeTheme.text} animate-pulse font-black px-10 flex items-center gap-3 text-xs uppercase tracking-widest`}><Loader2 className="animate-spin" size={16}/> AI đang trích xuất dữ liệu...</div>}
                <div ref={chatEndRef} />
             </div>
             <div className="p-8 border-t border-slate-100 bg-white">
                <div className="relative max-w-4xl mx-auto">
                   <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} placeholder="Hỏi tôi về các sáng kiến trong kho..." className={`w-full pl-10 pr-20 py-6 bg-slate-50 border border-slate-200 rounded-[2.5rem] outline-none focus:bg-white focus:border-orange-500 font-bold transition-all shadow-inner`} />
                   <button onClick={handleSendMessage} className={`absolute right-3 top-1/2 -translate-y-1/2 ${activeTheme.primary} p-4 rounded-3xl text-white shadow-xl ${activeTheme.shadow} hover:scale-110 transition-all`}><Send size={24} /></button>
                </div>
             </div>
          </div>
        )}
      </main>

      {/* MODALS - THEMED */}
      {isBatchModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-white rounded-[4rem] w-full max-w-6xl max-h-[92vh] shadow-2xl overflow-hidden flex flex-col animate-slide">
             <div className="p-10 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-5"><div className={`${activeTheme.primary} p-4 rounded-3xl text-white shadow-lg`}><FileUp size={28} /></div><h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Số hóa Sáng kiến (AI)</h3></div>
                <button onClick={() => { setIsBatchModalOpen(false); setBatchResults([]); }} className="p-4 hover:bg-slate-100 rounded-2xl transition-all"><X size={32} /></button>
             </div>
             <div className="p-10 overflow-y-auto flex-1 custom-scrollbar bg-slate-50/30">
                {batchResults.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-24 border-4 border-dashed border-slate-200 bg-white rounded-[4rem] text-center">
                     <div className={`${activeTheme.accent} p-8 rounded-full ${activeTheme.text} mb-8`}>{isBatchProcessing ? <Loader2 size={64} className="animate-spin" /> : <Upload size={64} />}</div>
                     <h4 className="text-2xl font-black text-slate-900 mb-3">{isBatchProcessing ? "AI đang bóc tách văn bản..." : "Tải tệp PDF lên hệ thống"}</h4>
                     <p className="text-slate-400 font-medium mb-10 max-w-md">Kéo thả hoặc chọn tệp PDF danh sách sáng kiến. AI sẽ tự động trích xuất các trường thông tin quan trọng.</p>
                     {!isBatchProcessing && (<div className="relative"><input type="file" id="batch-pdf" hidden accept=".pdf" multiple onChange={handleBatchPdfUpload} /><label htmlFor="batch-pdf" className={`px-12 py-5 ${activeTheme.primary} text-white rounded-[2rem] font-black shadow-2xl ${activeTheme.shadow} ${activeTheme.hover} cursor-pointer transition-all flex items-center gap-3 uppercase tracking-widest text-sm`}><Plus size={24}/> Chọn tài liệu PDF</label></div>)}
                  </div>
                ) : (
                  <div className="space-y-8">
                     <div className="flex items-center justify-between bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-100 shadow-sm animate-slide">
                        <div className="flex items-center gap-4 text-emerald-700 font-black text-xl"><CheckCircle2 size={40} /> Hệ thống đã nhận diện {batchResults.length} sáng kiến mới</div>
                        <div className="text-[11px] font-black text-emerald-600 bg-white px-5 py-2 rounded-full uppercase tracking-widest border border-emerald-200 shadow-sm">Admin vui lòng kiểm duyệt dữ liệu</div>
                     </div>
                     <div className="border border-slate-100 bg-white rounded-[3rem] overflow-hidden shadow-sm">
                        <table className="w-full text-left text-sm border-collapse">
                           <thead className="bg-slate-50 text-[10px] font-black uppercase text-slate-400 border-b border-slate-100">
                              <tr><th className="px-8 py-5 w-16 text-center">Lưu</th><th className="px-8 py-5">Tên sáng kiến</th><th className="px-8 py-5">Tác giả</th><th className="px-8 py-5">Đơn vị</th><th className="px-8 py-5">Năm</th><th className="px-8 py-5 text-center">Thao tác</th></tr>
                           </thead>
                           <tbody className="divide-y divide-slate-100">
                              {batchResults.map((item) => (
                                <tr key={item.tempId} className={`transition-all ${item.selected ? 'bg-emerald-50/10' : 'bg-slate-50/50 opacity-40'}`}>
                                   <td className="px-8 py-6 text-center"><button onClick={() => setBatchResults(prev => prev.map(r => r.tempId === item.tempId ? { ...r, selected: !r.selected } : r))} className={`w-7 h-7 rounded-xl border-2 flex items-center justify-center transition-all ${item.selected ? 'bg-emerald-500 border-transparent text-white shadow-lg' : 'bg-white border-slate-200 text-transparent hover:border-emerald-300'}`}><Check size={18} strokeWidth={4} /></button></td>
                                   <td className="px-8 py-6 font-black text-slate-800 max-w-sm"><span className="line-clamp-2 leading-tight">{item.title}</span></td>
                                   <td className="px-8 py-6 text-slate-600 font-bold whitespace-nowrap">{item.authors?.join(', ')}</td>
                                   <td className="px-8 py-6 text-slate-500 font-black uppercase text-[11px]">{item.unit}</td>
                                   <td className={`px-8 py-6 font-black ${activeTheme.text} text-base`}>{item.year}</td>
                                   <td className="px-8 py-6"><div className="flex items-center justify-center gap-3"><button onClick={() => setEditingBatchItem(item)} className={`p-2.5 ${activeTheme.accent} ${activeTheme.text} rounded-xl hover:scale-110 transition-all`}><Edit size={18} /></button><button onClick={() => setBatchResults(prev => prev.filter(r => r.tempId !== item.tempId))} className="p-2.5 bg-rose-50 text-rose-400 rounded-xl hover:scale-110 transition-all"><Trash2 size={18} /></button></div></td>
                                </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </div>
                )}
             </div>
             {batchResults.length > 0 && (
                <div className="p-10 border-t border-slate-100 bg-slate-50 flex gap-6">
                   <button onClick={() => { setBatchResults([]); setIsBatchModalOpen(false); }} className="flex-1 py-5 border-2 border-slate-200 rounded-[2rem] font-black text-slate-400 hover:bg-white hover:text-slate-600 transition-all uppercase tracking-widest text-xs">Hủy bỏ</button>
                   <button onClick={async () => {
                     const items = batchResults.filter(r => r.selected);
                     if (items.length === 0) return alert("Chọn ít nhất 1 mục.");
                     setLoading(true);
                     try {
                        const batch = writeBatch(db);
                        items.forEach(it => {
                          const { tempId, selected, ...data } = it;
                          batch.set(doc(collection(db, "initiatives")), data);
                        });
                        await batch.commit();
                        setIsBatchModalOpen(false);
                        setBatchResults([]);
                     } catch(e) { alert("Lỗi lưu."); } finally { setLoading(false); }
                   }} className={`flex-[2] py-5 ${activeTheme.primary} text-white rounded-[2rem] font-black shadow-2xl ${activeTheme.shadow} ${activeTheme.hover} transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs`}>Xác nhận lưu {batchResults.filter(r => r.selected).length} bản ghi số hóa <CheckCircle2 size={20} /></button>
                </div>
             )}
          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl animate-in fade-in">
           <div className="bg-white rounded-[4rem] w-full max-w-md shadow-2xl overflow-hidden animate-slide">
              <div className="p-12 text-center space-y-8">
                 <div className={`mx-auto ${activeTheme.primary} w-20 h-20 rounded-[2rem] flex items-center justify-center text-white shadow-2xl ${activeTheme.shadow} mb-4 rotate-3`}><LogIn size={36} /></div>
                 <div>
                    <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Đăng nhập Admin</h3>
                    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-2">Truy cập hệ thống quản trị NPSC</p>
                 </div>
                 <form onSubmit={handleAuthAction} className="space-y-5 text-left">
                    <div className="relative"><Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} /><input type="email" placeholder="Email công vụ" required className={`w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-200 rounded-[1.5rem] font-bold focus:bg-white focus:border-orange-500 outline-none transition-all shadow-inner`} value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} /></div>
                    <div className="relative"><Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} /><input type="password" placeholder="Mật khẩu" required className={`w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-200 rounded-[1.5rem] font-bold focus:bg-white focus:border-orange-500 outline-none transition-all shadow-inner`} value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} /></div>
                    {authError && <p className="text-[11px] font-black text-rose-500 px-4 text-center">{authError}</p>}
                    <button disabled={isAuthProcessing} className={`w-full py-5 ${activeTheme.primary} text-white rounded-[1.5rem] font-black shadow-2xl ${activeTheme.shadow} uppercase tracking-widest text-xs transition-all active:scale-95`}>{isAuthProcessing ? 'Đang xác thực...' : 'Đăng nhập ngay'}</button>
                 </form>
                 <button onClick={() => setIsLoginModalOpen(false)} className="text-xs font-bold text-slate-300 hover:text-orange-500 transition-colors uppercase tracking-widest">Quay lại trang khách</button>
              </div>
           </div>
        </div>
      )}

      {/* VIEW MODAL */}
      {viewingInitiative && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-2xl animate-in zoom-in duration-300">
           <div className="bg-white rounded-[5rem] w-full max-w-4xl max-h-[92vh] overflow-hidden shadow-2xl flex flex-col border-4 border-white">
              <div className="p-12 border-b border-slate-100 bg-slate-50/80 flex items-center justify-between">
                 <div className="flex items-center gap-7">
                    <div className={`${activeTheme.primary} p-6 rounded-[2.5rem] text-white shadow-2xl ${activeTheme.shadow} rotate-2`}><Lightbulb size={40} /></div>
                    <div>
                      <p className={`text-[10px] font-black uppercase ${activeTheme.text} tracking-[0.3em]`}>Hồ sơ số hóa độc quyền</p>
                      <h3 className="text-4xl font-black text-slate-900 tracking-tighter">Chi tiết hồ sơ</h3>
                    </div>
                 </div>
                 <button onClick={() => setViewingInitiative(null)} className="p-5 bg-white rounded-3xl text-slate-300 hover:text-rose-500 hover:rotate-90 transition-all shadow-sm"><X size={36} /></button>
              </div>
              <div className="p-12 overflow-y-auto flex-1 space-y-10 custom-scrollbar">
                 <div className="flex flex-wrap gap-3">
                    <span className="bg-slate-900 text-white px-5 py-2 rounded-2xl text-[11px] font-black uppercase tracking-widest">Năm {viewingInitiative.year}</span>
                    {viewingInitiative.level?.map(lvl => (<span key={lvl} className={`${LEVEL_COLORS[lvl as InitiativeLevel]} text-white px-5 py-2 rounded-2xl text-[11px] font-black uppercase shadow-sm`}>{lvl}</span>))}
                    {viewingInitiative.unit && <span className={`${activeTheme.accent} ${activeTheme.text} border ${activeTheme.border} px-5 py-2 rounded-2xl text-[11px] font-black uppercase flex items-center gap-2 shadow-sm`}><Building2 size={14}/> {viewingInitiative.unit}</span>}
                 </div>
                 <h1 className="text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter">{viewingInitiative.title}</h1>
                 <div className="flex items-center gap-3 text-slate-500 font-bold text-lg"><Users size={20} className={activeTheme.text}/> {viewingInitiative.authors?.join(', ')}</div>
                 <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-inner relative">
                    <div className="absolute top-8 right-8 text-slate-100"><Bot size={80}/></div>
                    <div className="relative z-10">
                       <p className="text-xl text-slate-700 leading-relaxed font-medium whitespace-pre-wrap">{viewingInitiative.content}</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* EDIT MODAL */}
      {isEditModalOpen && editingInitiative && user && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl animate-in fade-in">
          <div className="bg-white rounded-[4rem] w-full max-w-2xl max-h-[95vh] shadow-2xl flex flex-col overflow-hidden animate-slide border-4 border-white">
             <div className="p-10 border-b border-slate-100 flex items-center justify-between"><h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter flex items-center gap-3"><Edit className={activeTheme.text}/> Hiệu chỉnh Sáng kiến</h3><button onClick={() => setIsEditModalOpen(false)} className="p-4 hover:bg-slate-100 rounded-2xl transition-all"><X size={28} /></button></div>
             <div className="p-10 overflow-y-auto flex-1 space-y-6 custom-scrollbar">
                <div className="space-y-1"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Tên sáng kiến</label><input className={`w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-[1.5rem] font-bold focus:bg-white focus:border-orange-500 outline-none shadow-inner`} value={editingInitiative.title} onChange={(e) => setEditingInitiative({...editingInitiative, title: e.target.value})} /></div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Năm</label><input type="number" className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-[1.5rem] font-bold shadow-inner" value={editingInitiative.year} onChange={(e) => setEditingInitiative({...editingInitiative, year: parseInt(e.target.value)})} /></div>
                  <div className="space-y-1"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Lĩnh vực</label><input className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-[1.5rem] font-bold shadow-inner" value={editingInitiative.field} onChange={(e) => setEditingInitiative({...editingInitiative, field: e.target.value})} /></div>
                </div>
                <div className="space-y-1"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Đơn vị</label><input className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-[1.5rem] font-bold shadow-inner" value={editingInitiative.unit} onChange={(e) => setEditingInitiative({...editingInitiative, unit: e.target.value})} /></div>
                <div className="space-y-1"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Tác giả (Cách nhau bằng dấu phẩy)</label><input className={`w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-[1.5rem] font-bold outline-none focus:bg-white focus:border-orange-500 transition-all shadow-inner`} value={Array.isArray(editingInitiative.authors) ? editingInitiative.authors.join(', ') : ''} onChange={(e) => setEditingInitiative({...editingInitiative, authors: e.target.value.split(',').map(a => a.trim())})} /></div>
                <div className="space-y-1"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Nội dung tóm tắt</label><textarea rows={6} className={`w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-[2rem] font-bold outline-none resize-none focus:bg-white focus:border-orange-500 transition-all shadow-inner`} value={editingInitiative.content} onChange={(e) => setEditingInitiative({...editingInitiative, content: e.target.value})} /></div>
             </div>
             <div className="p-10 border-t border-slate-100 bg-slate-50 flex gap-4"><button onClick={() => setIsEditModalOpen(false)} className="flex-1 py-5 border-2 border-slate-200 rounded-[2rem] font-black text-slate-400 hover:bg-white transition-all uppercase text-xs">Hủy</button><button onClick={async () => {
               if(!editingInitiative?.title) return alert("Thiếu tên.");
               setLoading(true);
               try {
                  if(editingInitiative.id) { await updateDoc(doc(db, "initiatives", editingInitiative.id), editingInitiative); }
                  else { await addDoc(collection(db, "initiatives"), editingInitiative); }
                  setIsEditModalOpen(false);
               } catch(e) { alert("Lỗi lưu."); } finally { setLoading(false); }
             }} className={`flex-[2] py-5 ${activeTheme.primary} text-white rounded-[2rem] font-black shadow-2xl ${activeTheme.shadow} uppercase text-xs tracking-widest`}>Lưu hồ sơ ngay</button></div>
          </div>
        </div>
      )}

      {/* EDIT BATCH ITEM MODAL */}
      {editingBatchItem && (
        <div className="fixed inset-0 z-[210] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in zoom-in duration-200">
           <div className="bg-white rounded-[4rem] w-full max-w-2xl shadow-2xl flex flex-col overflow-hidden border-4 border-white">
              <div className="p-10 border-b border-slate-100 flex items-center justify-between"><h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Cập nhật dữ liệu trích xuất</h3><button onClick={() => setEditingBatchItem(null)} className="p-3 hover:bg-slate-100 rounded-xl transition-all"><X size={24}/></button></div>
              <div className="p-10 space-y-5">
                 <div className="space-y-1"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Tên sáng kiến</label><textarea className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-[1.5rem] font-bold focus:border-orange-500 outline-none resize-none shadow-inner" rows={3} value={editingBatchItem.title} onChange={(e) => setEditingBatchItem({...editingBatchItem, title: e.target.value})} /></div>
                 <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-1"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Đơn vị</label><input className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-[1.5rem] font-bold shadow-inner" value={editingBatchItem.unit} onChange={(e) => setEditingBatchItem({...editingBatchItem, unit: e.target.value})} /></div>
                    <div className="space-y-1"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Năm</label><input type="number" className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-[1.5rem] font-bold shadow-inner" value={editingBatchItem.year} onChange={(e) => setEditingBatchItem({...editingBatchItem, year: parseInt(e.target.value)})} /></div>
                 </div>
              </div>
              <div className="p-10 border-t border-slate-100 bg-slate-50"><button onClick={() => { setBatchResults(prev => prev.map(item => item.tempId === editingBatchItem.tempId ? editingBatchItem : item)); setEditingBatchItem(null); }} className={`w-full py-5 ${activeTheme.primary} text-white rounded-[2rem] font-black shadow-2xl ${activeTheme.shadow} uppercase text-xs tracking-widest`}>Lưu thay đổi tạm thời</button></div>
           </div>
        </div>
      )}

      {loading && (
        <div className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center space-y-4">
           <div className={`w-16 h-16 border-8 border-slate-100 border-t-orange-600 rounded-full animate-spin shadow-xl`}></div>
           <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] animate-pulse">NPSC Hub đang tải dữ liệu...</p>
        </div>
      )}
    </div>
  );
};

// SVG Helper for missing icon in some versions of lucide
const ListIcon: React.FC<any> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
);

export default App;
