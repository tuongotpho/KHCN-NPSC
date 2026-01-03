
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, orderBy, writeBatch } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, type User } from "firebase/auth";
import { Initiative, ChatMessage, InitiativeLevel, BatchItem } from './types';
import { 
  Search, BrainCircuit, Plus, Send, 
  LayoutDashboard, X, Trash2, Building2, 
  Loader2, FileUp, TrendingUp, Users, 
  ArrowRight, Bot, Upload, Edit, Lightbulb,
  Award, BarChart3, Zap, Activity, Sparkles, ChevronRight, Target,
  LogIn, LogOut, ShieldCheck, Mail, Lock, UserPlus, Filter, Paperclip, Link, Download, ExternalLink, FileText, Calendar, CheckCircle2, AlertCircle, Check, Briefcase, Palette, ChevronLeft, Moon, Sun, Menu
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
  red: { primary: 'bg-orange-600', hover: 'hover:bg-orange-700', text: 'text-orange-600', border: 'border-orange-200', gradient: 'from-orange-500 to-red-600', ring: 'focus:ring-orange-500/20', accent: 'bg-orange-50', darkAccent: 'dark:bg-orange-500/10', shadow: 'shadow-orange-600/20' },
  blue: { primary: 'bg-blue-600', hover: 'hover:bg-blue-700', text: 'text-blue-600', border: 'border-blue-200', gradient: 'from-blue-500 to-indigo-600', ring: 'focus:ring-blue-500/20', accent: 'bg-blue-50', darkAccent: 'dark:bg-blue-500/10', shadow: 'shadow-blue-600/20' },
  emerald: { primary: 'bg-emerald-600', hover: 'hover:bg-emerald-700', text: 'text-emerald-600', border: 'border-emerald-200', gradient: 'from-emerald-500 to-teal-600', ring: 'focus:ring-emerald-500/20', accent: 'bg-emerald-50', darkAccent: 'dark:bg-emerald-500/10', shadow: 'shadow-emerald-600/20' },
  indigo: { primary: 'bg-indigo-600', hover: 'hover:bg-indigo-700', text: 'text-indigo-600', border: 'border-indigo-200', gradient: 'from-indigo-500 to-purple-600', ring: 'focus:ring-indigo-500/20', accent: 'bg-blue-50', darkAccent: 'dark:bg-indigo-500/10', shadow: 'shadow-indigo-600/20' }
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
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [initiatives, setInitiatives] = useState<Initiative[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'list' | 'stats' | 'chat'>('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevels, setSelectedLevels] = useState<InitiativeLevel[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [aiInsight, setAiInsight] = useState<string>('');
  const [isGeneratingInsight, setIsGeneratingInsight] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [currentPageList, setCurrentPageList] = useState(1);
  const [currentPageStats, setCurrentPageStats] = useState(1);
  const [statsView, setStatsView] = useState<'level' | 'year' | 'unit' | 'field'>('level');
  const [statsDetailValue, setStatsDetailValue] = useState<string | number | null>(null);

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
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const q = query(collection(db, "initiatives"), orderBy("year", "desc"));
    const unsubscribeData = onSnapshot(q, 
      (querySnapshot) => {
        const items: Initiative[] = [];
        querySnapshot.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id } as Initiative);
        });
        setInitiatives(items);
        setLoading(false);
        setGlobalError(null);
      },
      (error) => {
        console.error("Firestore error:", error);
        setGlobalError("Không thể tải dữ liệu từ máy chủ. Vui lòng kiểm tra kết nối mạng.");
        setLoading(false);
      }
    );

    return () => {
      unsubscribeAuth();
      unsubscribeData();
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  useEffect(() => {
    setCurrentPageList(1);
  }, [searchTerm, selectedLevels, selectedYears]);

  useEffect(() => {
    setCurrentPageStats(1);
  }, [statsDetailValue, statsView]);

  const handleAiError = (error: any) => {
    console.error("AI Error:", error);
    const msg = error.message || "";
    if (msg.includes("Requested entity was not found")) {
      return "Lỗi cấu hình API. Vui lòng kiểm tra lại quyền truy cập mô hình.";
    }
    if (msg.includes("Safety") || msg.includes("safety")) {
      return "Yêu cầu bị từ chối do chính sách an toàn của AI.";
    }
    return "Đã có lỗi xảy ra khi kết nối với trí tuệ nhân tạo. Vui lòng thử lại sau.";
  };

  const handleAuthAction = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) return;
    setIsAuthProcessing(true);
    setAuthError('');
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setIsLoginModalOpen(false);
    } catch (error: any) {
      setAuthError('Email hoặc mật khẩu không chính xác.');
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
        acc[val as string] = (acc[val as string] || 0) + 1;
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
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const results: BatchItem[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const base64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve((reader.result as string).split(',')[1]);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
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
    } catch (error) { 
      alert(handleAiError(error));
    } finally { 
      setIsBatchProcessing(false); 
    }
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
      setChatMessages([...newMessages, { role: 'model', text: response.text || "AI không thể đưa ra phản hồi lúc này." }]);
    } catch (error) { 
      setChatMessages([...newMessages, { role: 'model', text: handleAiError(error) }]); 
    } finally { 
      setIsTyping(false); 
    }
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
    } catch (error) { 
      setAiInsight(handleAiError(error)); 
    } finally { 
      setIsGeneratingInsight(false); 
    }
  };

  const PaginationControls = ({ currentPage, totalItems, onPageChange }: { currentPage: number, totalItems: number, onPageChange: (p: number) => void }) => {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    if (totalPages <= 1) return null;

    return (
      <div className="flex items-center justify-center gap-2 mt-8">
        <button 
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-all disabled:opacity-30`}
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => onPageChange(idx + 1)}
              className={`w-10 h-10 rounded-xl font-black text-xs transition-all ${currentPage === idx + 1 ? `${activeTheme.primary} text-white shadow-lg ${activeTheme.shadow}` : 'bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-700 hover:border-orange-200'}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
        <button 
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-all disabled:opacity-30`}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-slate-900 border-b dark:border-slate-800 shadow-sm z-50">
        <div className="flex items-center gap-3">
          <div className={`${activeTheme.primary} p-2 rounded-lg text-white`}><BrainCircuit size={20} /></div>
          <span className="font-black dark:text-white uppercase tracking-tighter">NPSC Hub</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 dark:text-white">{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 dark:text-white"><Menu size={24} /></button>
        </div>
      </div>

      {/* Sidebar */}
      <aside className={`w-full lg:w-72 bg-slate-900 text-white lg:sticky lg:top-0 lg:h-screen flex flex-col p-5 z-[60] shadow-2xl transition-transform duration-300 fixed inset-y-0 left-0 lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex items-center justify-between mb-8">
          <div onClick={() => !user && setIsLoginModalOpen(true)} className="flex items-center gap-3 group cursor-pointer transition-all">
            <div className={`bg-gradient-to-br ${activeTheme.gradient} p-2.5 rounded-xl shadow-lg group-hover:scale-110 transition-transform`}><BrainCircuit size={24} className="text-white" /></div>
            <div><h1 className="font-extrabold text-xl tracking-tighter">NPSC Hub</h1><p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Sáng kiến - KHCN</p></div>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden p-2 text-slate-400 hover:text-white"><X size={24} /></button>
        </div>

        {user && (
          <div className="mb-4 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg ${activeTheme.primary} flex items-center justify-center font-black text-white text-sm`}>{user.email?.charAt(0).toUpperCase()}</div>
              <div className="flex-1 overflow-hidden"><p className="text-[10px] font-black truncate text-slate-200">{user.email}</p><span className={`text-[8px] ${activeTheme.text} font-black uppercase`}>Admin</span></div>
              <button onClick={() => signOut(auth)} className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"><LogOut size={14}/></button>
            </div>
            
            <div className="mt-3 pt-3 border-t border-slate-700/50">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[8px] font-black text-slate-500 uppercase flex items-center gap-1.5"><Palette size={10}/> Chủ đề</p>
                <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-slate-500 hover:text-white transition-colors">{isDarkMode ? <Sun size={12} /> : <Moon size={12} />}</button>
              </div>
              <div className="flex gap-2">
                {(Object.keys(THEMES) as ThemeKey[]).map(t => (
                  <button 
                    key={t} 
                    onClick={() => setTheme(t)}
                    className={`w-4 h-4 rounded-full border-2 transition-all ${THEMES[t].primary} ${theme === t ? 'border-white scale-125' : 'border-transparent opacity-50 hover:opacity-100'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <nav className="space-y-1.5 flex-1 overflow-y-auto custom-scrollbar pr-2">
          <button onClick={() => { setActiveTab('list'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all font-bold text-sm ${activeTab === 'list' ? `${activeTheme.primary} text-white shadow-xl ${activeTheme.shadow}` : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}><LayoutDashboard size={18} /> Danh mục</button>
          <button onClick={() => { setActiveTab('stats'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all font-bold text-sm ${activeTab === 'stats' ? `${activeTheme.primary} text-white shadow-xl ${activeTheme.shadow}` : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}><BarChart3 size={18} /> Thống kê</button>
          <button onClick={() => { setActiveTab('chat'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all font-bold text-sm ${activeTab === 'chat' ? `${activeTheme.primary} text-white shadow-xl ${activeTheme.shadow}` : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}><Bot size={18} /> Trợ lý AI</button>
        </nav>

        {user && (
          <div className="mt-auto pt-4 border-t border-slate-800 space-y-2.5">
            <button onClick={() => { setEditingInitiative({ title: '', content: '', authors: [], unit: '', year: new Date().getFullYear(), level: ['HLH'], field: '' }); setIsEditModalOpen(true); }} className="w-full flex items-center justify-center gap-2.5 bg-white text-slate-900 px-4 py-3.5 rounded-xl font-bold text-sm hover:bg-slate-100 transition-all shadow-lg"><Plus size={18} /> Thêm mới</button>
            <button onClick={() => setIsBatchModalOpen(true)} className={`w-full flex items-center justify-center gap-2.5 ${activeTheme.primary} text-white px-4 py-3.5 rounded-xl font-bold text-sm ${activeTheme.hover} transition-all shadow-lg`}><FileUp size={18} /> Nhập PDF (AI)</button>
          </div>
        )}
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && <div onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 lg:hidden"></div>}

      <main className="flex-1 p-4 lg:p-10 flex flex-col gap-6 lg:gap-8 overflow-y-auto">
        {globalError && (
          <div className="bg-rose-50 dark:bg-rose-950 border border-rose-100 dark:border-rose-900 p-4 rounded-2xl flex items-center gap-4 text-rose-700 dark:text-rose-300 font-bold text-sm animate-slide">
            <AlertCircle size={20} /> {globalError}
            <button onClick={() => window.location.reload()} className="ml-auto underline text-xs">Thử lại</button>
          </div>
        )}

        {activeTab === 'list' ? (
          <>
            <header className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Kho sáng kiến</h2>
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input type="text" placeholder="Tìm kiếm..." className={`w-full pl-12 pr-6 py-4 bg-white dark:bg-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm font-medium focus:ring-4 ${activeTheme.ring} outline-none transition-all`} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm transition-all">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-3">
                    <p className="text-[9px] font-black text-slate-400 uppercase ml-2 flex items-center gap-1.5"><Award size={10}/> Cấp công nhận</p>
                    <div className="flex flex-wrap gap-2">
                      {(['HLH', 'NPSC', 'NPC', 'EVN'] as InitiativeLevel[]).map(lvl => (
                        <button key={lvl} onClick={() => setSelectedLevels(prev => prev.includes(lvl) ? prev.filter(l => l !== lvl) : [...prev, lvl])} className={`px-4 py-2 rounded-xl text-[10px] font-black border-2 transition-all ${selectedLevels.includes(lvl) ? `${LEVEL_COLORS[lvl]} text-white border-transparent shadow-lg scale-105` : 'bg-white dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-500'}`}>{lvl}</button>
                      ))}
                    </div>
                   </div>
                   <div className="space-y-3">
                    <p className="text-[9px] font-black text-slate-400 uppercase ml-2 flex items-center gap-1.5"><Calendar size={10}/> Năm công nhận</p>
                    <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto custom-scrollbar pr-2">
                      {availableYears.map(year => (
                        <button key={year} onClick={() => setSelectedYears(prev => prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year])} className={`px-4 py-2 rounded-xl text-[10px] font-black border-2 transition-all ${selectedYears.includes(year) ? `${activeTheme.primary} text-white border-transparent shadow-lg scale-105` : 'bg-white dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-500'}`}>{year}</button>
                      ))}
                    </div>
                   </div>
                </div>
              </div>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {paginatedList.map((item) => (
                <div key={item.id} className="bg-white dark:bg-slate-900 rounded-3xl p-6 lg:p-8 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-slate-200 dark:hover:shadow-slate-900 hover:-translate-y-1 transition-all group animate-slide relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${activeTheme.gradient} opacity-0 group-hover:opacity-10 -mr-12 -mt-12 rounded-full transition-opacity duration-500`}></div>
                  
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-slate-900 dark:bg-slate-800 text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase shadow-sm">{item.year}</span>
                      {item.level?.map(lvl => (<span key={lvl} className={`${LEVEL_COLORS[lvl as InitiativeLevel] || 'bg-slate-400'} text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase shadow-sm`}>{lvl}</span>))}
                    </div>
                    {user && (
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => { setEditingInitiative({...item}); setIsEditModalOpen(true); }} className={`p-2.5 ${activeTheme.accent} ${activeTheme.darkAccent} ${activeTheme.text} rounded-xl hover:scale-110 transition-all`}><Edit size={16} /></button>
                        <button onClick={async () => { if(confirm('Xác nhận xóa?')) { try { await deleteDoc(doc(db, "initiatives", item.id)); } catch(e) { alert("Lỗi khi xóa tài liệu."); } } }} className="p-2.5 bg-rose-50 dark:bg-rose-950 text-rose-400 rounded-xl hover:scale-110 transition-all"><Trash2 size={16} /></button>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black text-slate-900 dark:text-white mb-4 leading-tight line-clamp-2 min-h-[3.5rem] group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors tracking-tight uppercase relative z-10">{item.title}</h3>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold text-xs mb-6 relative z-10"><Users size={14} className={activeTheme.text} /> {Array.isArray(item.authors) ? item.authors.join(', ') : item.authors}</div>
                  
                  <div className="flex items-center justify-between mt-auto relative z-10">
                    <span className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase flex items-center gap-1.5 truncate max-w-[150px]"><Building2 size={12} /> {item.unit || 'N/A'}</span>
                    <button onClick={() => setViewingInitiative(item)} className={`${activeTheme.text} font-black text-[10px] lg:text-xs flex items-center gap-2 hover:gap-3 transition-all pb-1 w-fit uppercase tracking-widest`}>Chi tiết <ArrowRight size={14} /></button>
                  </div>
                </div>
              ))}
              {paginatedList.length === 0 && !loading && (
                <div className="col-span-full py-20 text-center text-slate-400 animate-slide">
                  <div className="bg-slate-100 dark:bg-slate-900 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 opacity-40"><Lightbulb size={48} /></div>
                  <p className="font-black uppercase tracking-widest text-xs">Không tìm thấy sáng kiến nào khớp với bộ lọc</p>
                </div>
              )}
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
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Thống kê Tổng thể</h2>
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest"><Activity size={14}/> Theo dõi dữ liệu thực</div>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {[
                  { label: 'Tổng sáng kiến', value: dashboardStats.total, icon: Zap, color: 'blue' },
                  { label: 'Cấp EVN', value: dashboardStats.levelDist['EVN'] || 0, icon: Award, color: 'purple' },
                  { label: 'Cấp NPC', value: dashboardStats.levelDist['NPC'] || 0, icon: Building2, color: 'indigo' },
                  { label: 'Năm hiện tại', value: dashboardStats.currentYearCount, icon: Activity, color: 'orange' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white dark:bg-slate-900 p-6 lg:p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm text-center group hover:shadow-lg hover:-translate-y-1 transition-all">
                    <div className={`p-4 bg-${stat.color}-50 dark:bg-${stat.color}-950 text-${stat.color}-600 dark:text-${stat.color}-400 rounded-2xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform`}><stat.icon size={24} /></div>
                    <p className="text-slate-400 dark:text-slate-500 font-bold uppercase text-[10px] mb-1">{stat.label}</p>
                    <h4 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tighter">{stat.value}</h4>
                  </div>
                ))}
             </div>

             <div className="bg-white dark:bg-slate-900 p-6 lg:p-10 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-sm space-y-8">
                <div className="flex flex-wrap items-center gap-2 lg:gap-3 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-[2rem] border border-slate-100 dark:border-slate-700 w-fit">
                   {[
                     { id: 'level', label: 'Cấp độ', icon: Award },
                     { id: 'year', label: 'Năm', icon: Calendar },
                     { id: 'unit', label: 'Đơn vị', icon: Building2 },
                     { id: 'field', label: 'Lĩnh vực', icon: Briefcase }
                   ].map(v => (
                     <button 
                       key={v.id} 
                       onClick={() => { setStatsView(v.id as any); setStatsDetailValue(null); }} 
                       className={`px-4 lg:px-8 py-3 lg:py-4 rounded-[1.5rem] font-black text-[10px] lg:text-sm flex items-center gap-2 transition-all ${statsView === v.id ? `${activeTheme.primary} text-white shadow-xl ${activeTheme.shadow}` : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
                     >
                       <v.icon size={16}/> {v.label}
                     </button>
                   ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                   <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center justify-between px-2">
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Phân bổ dữ liệu</p>
                        <p className="text-[10px] font-bold text-slate-300 dark:text-slate-600 hidden sm:block">Nhấn để xem danh sách</p>
                      </div>
                      <div className="space-y-2 max-h-[500px] overflow-y-auto pr-3 custom-scrollbar">
                         {(Object.entries(
                           statsView === 'level' ? dashboardStats.levelDist :
                           statsView === 'year' ? dashboardStats.yearDist :
                           statsView === 'unit' ? dashboardStats.unitDist :
                           dashboardStats.fieldDist
                         ) as [string, number][]).sort((a, b) => {
                           const isYearSort = statsView === 'year';
                           const valA = isYearSort ? Number(a[0]) : Number(a[1]);
                           const valB = isYearSort ? Number(b[0]) : Number(b[1]);
                           return valB - valA;
                         }).map(([key, count]) => {
                           const percentage = Math.round(((count as number) / (dashboardStats.total || 1)) * 100);
                           return (
                             <button 
                               key={key} 
                               onClick={() => setStatsDetailValue(key)}
                               className={`w-full group p-5 rounded-3xl border transition-all text-left ${statsDetailValue === key ? `${activeTheme.primary} border-transparent text-white shadow-xl` : 'bg-white dark:bg-slate-800/50 border-slate-100 dark:border-slate-700 hover:border-orange-200 text-slate-700 dark:text-slate-300'}`}
                             >
                                <div className="flex justify-between items-center mb-3">
                                   <span className="font-black text-[11px] lg:text-sm uppercase tracking-tight line-clamp-1 flex-1">{key}</span>
                                   <span className={`text-[9px] font-black px-2.5 py-1 rounded-lg ml-2 ${statsDetailValue === key ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-700'}`}>{count} Sáng kiến</span>
                                </div>
                                <div className={`w-full h-1.5 rounded-full ${statsDetailValue === key ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-700'} overflow-hidden`}>
                                   <div className={`h-full ${statsDetailValue === key ? 'bg-white' : activeTheme.primary} transition-all duration-1000`} style={{ width: `${percentage}%` }} />
                                </div>
                             </button>
                           );
                         })}
                      </div>
                   </div>

                   <div className="lg:col-span-7 bg-slate-50/50 dark:bg-slate-800/20 rounded-[3rem] border border-slate-100 dark:border-slate-800 p-6 lg:p-8 flex flex-col min-h-[400px] lg:min-h-[500px] shadow-inner">
                      {statsDetailValue ? (
                        <>
                           <div className="flex items-center justify-between mb-8">
                              <div className="flex items-center gap-3">
                                 <div className={`${activeTheme.primary} p-3 rounded-2xl text-white shadow-lg`}><FileText size={20}/></div>
                                 <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-tighter truncate max-w-[200px]">Danh sách {statsDetailValue}</h4>
                              </div>
                              <span className={`text-[10px] font-black ${activeTheme.accent} ${activeTheme.darkAccent} ${activeTheme.text} px-4 py-2 rounded-full uppercase border ${activeTheme.border} whitespace-nowrap`}>{statsDrillDownList.length} Mục</span>
                           </div>
                           <div className="space-y-4 flex-1">
                              <div className="space-y-4 overflow-y-auto max-h-[350px] lg:max-h-[400px] pr-2 custom-scrollbar">
                                 {paginatedStatsList.map(item => (
                                   <div 
                                     key={item.id} 
                                     className="bg-white dark:bg-slate-900 p-5 lg:p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-orange-200 transition-all cursor-pointer group" 
                                     onClick={() => setViewingInitiative(item)}
                                   >
                                      <div className="flex justify-between items-start mb-3">
                                         <span className={`text-[10px] font-black ${activeTheme.text} uppercase tracking-widest`}>Năm {item.year}</span>
                                         <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full uppercase truncate max-w-[120px]">{item.unit}</span>
                                      </div>
                                      <p className="text-sm lg:text-base font-bold text-slate-800 dark:text-white leading-tight group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors uppercase tracking-tight">{item.title}</p>
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
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-10 opacity-50">
                           <div className="bg-white dark:bg-slate-800 p-8 rounded-full text-slate-200 dark:text-slate-700 shadow-inner mb-6"><BarChart3 size={64} /></div>
                           <p className="text-slate-400 dark:text-slate-500 font-black text-xs uppercase tracking-[0.2em] max-w-xs">Chọn danh mục để hiển thị thông tin chi tiết</p>
                        </div>
                      )}
                   </div>
                </div>
             </div>

             <div className="bg-slate-900 dark:bg-slate-900/50 p-8 lg:p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden border dark:border-slate-800">
                <div className="absolute top-0 right-0 p-16 opacity-5 rotate-12 scale-150"><Sparkles size={150} /></div>
                <div className="relative z-10">
                   <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
                      <div className="flex items-center gap-5">
                         <div className={`${activeTheme.primary} p-4 rounded-3xl shadow-2xl shadow-orange-600/50 animate-pulse`}><Bot size={32} /></div>
                         <div>
                            <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter">AI Phân tích Chiến lược</h3>
                            <p className="text-slate-400 font-bold text-[10px] lg:text-xs uppercase tracking-widest">Cố vấn chuyên sâu cho cán bộ quản lý</p>
                         </div>
                      </div>
                      <button 
                        onClick={generateLeadershipInsight} 
                        disabled={isGeneratingInsight} 
                        className={`px-8 lg:px-10 py-4 lg:py-5 bg-white text-slate-900 rounded-[2rem] font-black flex items-center gap-3 hover:bg-orange-50 transition-all shadow-2xl active:scale-95 disabled:opacity-50 tracking-widest uppercase text-[10px] lg:text-xs`}
                      >
                         {isGeneratingInsight ? <Loader2 size={20} className="animate-spin" /> : <Activity size={20} />} 
                         TỔNG HỢP DỮ LIỆU
                      </button>
                   </div>
                   <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 p-8 lg:p-12 min-h-[300px] flex items-center justify-center shadow-inner overflow-hidden">
                      {aiInsight ? (
                        <div className="text-base lg:text-xl text-slate-100 leading-[1.8] font-medium whitespace-pre-wrap w-full animate-slide tracking-wide">
                           {aiInsight}
                        </div>
                      ) : (
                        <div className="text-center space-y-6 opacity-40">
                           <Sparkles size={48} className="mx-auto text-slate-500" />
                           <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.3em]">Hệ thống AI sẵn sàng xử lý {initiatives.length} hồ sơ</p>
                        </div>
                      )}
                   </div>
                </div>
             </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl flex flex-col h-[75vh] lg:h-[80vh] overflow-hidden transition-all duration-300">
             <div className="p-6 lg:p-10 border-b border-slate-100 dark:border-slate-800 flex items-center gap-5 bg-slate-50/50 dark:bg-slate-800/30">
                <div className={`${activeTheme.primary} p-4 rounded-2xl text-white shadow-lg`}><Bot size={28} /></div>
                <div>
                   <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Trợ lý AI NPSC</h3>
                   <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Hỗ trợ tra cứu & Nhận diện trùng lặp</p>
                </div>
             </div>
             <div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-8 custom-scrollbar dark:bg-slate-900/50">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide`}>
                    <div className={`max-w-[85%] lg:max-w-[75%] p-5 lg:p-7 rounded-[2.5rem] font-medium whitespace-pre-wrap shadow-sm ${msg.role === 'user' ? `${activeTheme.primary} text-white rounded-tr-none` : 'bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-700'}`}>{msg.text}</div>
                  </div>
                ))}
                {isTyping && <div className={`${activeTheme.text} animate-pulse font-black px-6 flex items-center gap-3 text-[10px] uppercase tracking-widest`}><Loader2 className="animate-spin" size={14}/> Trợ lý đang xử lý dữ liệu...</div>}
                <div ref={chatEndRef} />
             </div>
             <div className="p-6 lg:p-8 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="relative max-w-4xl mx-auto flex gap-3">
                   <div className="relative flex-1">
                    <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} placeholder="Tra cứu nhanh sáng kiến..." className={`w-full pl-8 pr-14 py-5 bg-slate-50 dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-[2.5rem] outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-orange-500 font-bold transition-all shadow-inner`} />
                    <button onClick={handleSendMessage} className={`absolute right-2 top-1/2 -translate-y-1/2 ${activeTheme.primary} p-3 rounded-full text-white shadow-lg ${activeTheme.shadow} hover:scale-110 transition-all`}><Send size={20} /></button>
                   </div>
                </div>
             </div>
          </div>
        )}
      </main>

      {/* MODALS - All with dark mode support */}
      {isBatchModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-white dark:bg-slate-900 rounded-[3rem] lg:rounded-[4rem] w-full max-w-6xl max-h-[92vh] shadow-2xl overflow-hidden flex flex-col animate-slide border dark:border-slate-800">
             <div className="p-6 lg:p-10 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-5"><div className={`${activeTheme.primary} p-4 rounded-3xl text-white shadow-lg`}><FileUp size={28} /></div><h3 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Số hóa Sáng kiến AI</h3></div>
                <button onClick={() => { setIsBatchModalOpen(false); setBatchResults([]); }} className="p-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl transition-all dark:text-slate-400"><X size={32} /></button>
             </div>
             <div className="p-6 lg:p-10 overflow-y-auto flex-1 custom-scrollbar bg-slate-50/30 dark:bg-slate-950/30">
                {batchResults.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 lg:py-24 border-4 border-dashed border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-[3rem] lg:rounded-[4rem] text-center px-4">
                     <div className={`${activeTheme.accent} dark:bg-slate-800 p-8 rounded-full ${activeTheme.text} mb-8`}>{isBatchProcessing ? <Loader2 size={64} className="animate-spin" /> : <Upload size={64} />}</div>
                     <h4 className="text-xl lg:text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">{isBatchProcessing ? "AI đang phân tích tài liệu..." : "Tải tệp PDF danh sách"}</h4>
                     <p className="text-slate-400 dark:text-slate-500 font-medium mb-10 max-w-md text-sm">Hệ thống sẽ tự động nhận diện tên sáng kiến, tác giả, đơn vị và tóm tắt nội dung từ tệp PDF của bạn.</p>
                     {!isBatchProcessing && (<div className="relative"><input type="file" id="batch-pdf" hidden accept=".pdf" multiple onChange={handleBatchPdfUpload} /><label htmlFor="batch-pdf" className={`px-10 lg:px-12 py-4 lg:py-5 ${activeTheme.primary} text-white rounded-[2rem] font-black shadow-2xl ${activeTheme.shadow} ${activeTheme.hover} cursor-pointer transition-all flex items-center gap-3 uppercase tracking-widest text-[10px] lg:text-xs`}><Plus size={20}/> Chọn hồ sơ PDF</label></div>)}
                  </div>
                ) : (
                  <div className="space-y-8">
                     <div className="flex flex-col sm:flex-row items-center justify-between bg-emerald-50 dark:bg-emerald-950/30 p-6 lg:p-8 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-900 shadow-sm animate-slide gap-4">
                        <div className="flex items-center gap-4 text-emerald-700 dark:text-emerald-400 font-black text-lg lg:text-xl text-center sm:text-left"><CheckCircle2 size={32} className="hidden sm:block"/> Đã trích xuất {batchResults.length} bản ghi</div>
                        <div className="text-[10px] font-black text-emerald-600 dark:text-emerald-500 bg-white dark:bg-slate-800 px-5 py-2 rounded-full uppercase tracking-widest border border-emerald-200 dark:border-emerald-900 shadow-sm">Vui lòng kiểm tra lại trước khi lưu</div>
                     </div>
                     <div className="border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-x-auto shadow-sm">
                        <table className="w-full text-left text-sm border-collapse min-w-[800px]">
                           <thead className="bg-slate-50 dark:bg-slate-800 text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 border-b dark:border-slate-700">
                              <tr><th className="px-8 py-5 w-16 text-center">Lưu</th><th className="px-8 py-5">Tên sáng kiến</th><th className="px-8 py-5">Tác giả</th><th className="px-8 py-5">Năm</th><th className="px-8 py-5 text-center">Thao tác</th></tr>
                           </thead>
                           <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                              {batchResults.map((item) => (
                                <tr key={item.tempId} className={`transition-all ${item.selected ? 'bg-emerald-50/10 dark:bg-emerald-500/5' : 'bg-slate-50/50 dark:bg-slate-950/20 opacity-40'}`}>
                                   <td className="px-8 py-6 text-center"><button onClick={() => setBatchResults(prev => prev.map(r => r.tempId === item.tempId ? { ...r, selected: !r.selected } : r))} className={`w-7 h-7 rounded-xl border-2 flex items-center justify-center mx-auto transition-all ${item.selected ? 'bg-emerald-500 border-transparent text-white shadow-lg' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-transparent hover:border-emerald-300'}`}><Check size={18} strokeWidth={4} /></button></td>
                                   <td className="px-8 py-6 font-black text-slate-800 dark:text-slate-200 max-w-md"><span className="line-clamp-2 leading-tight uppercase tracking-tight">{item.title}</span></td>
                                   <td className="px-8 py-6 text-slate-600 dark:text-slate-400 font-bold whitespace-nowrap">{item.authors?.join(', ')}</td>
                                   <td className={`px-8 py-6 font-black ${activeTheme.text} text-base`}>{item.year}</td>
                                   <td className="px-8 py-6"><div className="flex items-center justify-center gap-3"><button onClick={() => setEditingBatchItem(item)} className={`p-2.5 ${activeTheme.accent} dark:bg-slate-800 ${activeTheme.text} rounded-xl hover:scale-110 transition-all`}><Edit size={18} /></button><button onClick={() => setBatchResults(prev => prev.filter(r => r.tempId !== item.tempId))} className="p-2.5 bg-rose-50 dark:bg-rose-950 text-rose-400 rounded-xl hover:scale-110 transition-all"><Trash2 size={18} /></button></div></td>
                                </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </div>
                )}
             </div>
             {batchResults.length > 0 && (
                <div className="p-6 lg:p-10 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex flex-col sm:flex-row gap-4 lg:gap-6">
                   <button onClick={() => { setBatchResults([]); setIsBatchModalOpen(false); }} className="flex-1 py-4 lg:py-5 border-2 border-slate-200 dark:border-slate-700 rounded-[2rem] font-black text-slate-400 dark:text-slate-500 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-600 transition-all uppercase tracking-widest text-[10px] lg:text-xs">Hủy bỏ</button>
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
                        setGlobalError(null);
                     } catch(e) { alert("Lỗi khi lưu dữ liệu hàng loạt."); } finally { setLoading(false); }
                   }} className={`flex-[2] py-4 lg:py-5 ${activeTheme.primary} text-white rounded-[2rem] font-black shadow-2xl ${activeTheme.shadow} ${activeTheme.hover} transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-[10px] lg:text-xs`}>Lưu {batchResults.filter(r => r.selected).length} sáng kiến <CheckCircle2 size={20} /></button>
                </div>
             )}
          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl animate-in fade-in">
           <div className="bg-white dark:bg-slate-900 rounded-[3rem] w-full max-w-md shadow-2xl overflow-hidden animate-slide border dark:border-slate-800">
              <div className="p-8 lg:p-12 text-center space-y-8">
                 <div className={`mx-auto ${activeTheme.primary} w-20 h-20 rounded-[2rem] flex items-center justify-center text-white shadow-2xl ${activeTheme.shadow} mb-4 rotate-3`}><LogIn size={36} /></div>
                 <div>
                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Hệ thống Admin</h3>
                    <p className="text-slate-400 dark:text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-2">Đăng nhập để quản trị kho dữ liệu</p>
                 </div>
                 <form onSubmit={handleAuthAction} className="space-y-5 text-left">
                    <div className="relative"><Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} /><input type="email" placeholder="Email" required className={`w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-[1.5rem] font-bold focus:bg-white dark:focus:bg-slate-900 focus:border-orange-500 outline-none transition-all shadow-inner`} value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} /></div>
                    <div className="relative"><Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} /><input type="password" placeholder="Mật khẩu" required className={`w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-[1.5rem] font-bold focus:bg-white dark:focus:bg-slate-900 focus:border-orange-500 outline-none transition-all shadow-inner`} value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} /></div>
                    {authError && <p className="text-[11px] font-black text-rose-500 px-4 text-center">{authError}</p>}
                    <button disabled={isAuthProcessing} className={`w-full py-5 ${activeTheme.primary} text-white rounded-[1.5rem] font-black shadow-2xl ${activeTheme.shadow} uppercase tracking-widest text-xs transition-all active:scale-95 disabled:opacity-50`}>{isAuthProcessing ? 'Đang xác thực...' : 'Đăng nhập ngay'}</button>
                 </form>
                 <button onClick={() => setIsLoginModalOpen(false)} className="text-[10px] font-bold text-slate-300 dark:text-slate-600 hover:text-orange-500 transition-colors uppercase tracking-widest">Đóng</button>
              </div>
           </div>
        </div>
      )}

      {/* VIEW MODAL */}
      {viewingInitiative && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-2xl animate-in zoom-in duration-300">
           <div className="bg-white dark:bg-slate-900 rounded-[3rem] lg:rounded-[5rem] w-full max-w-4xl max-h-[92vh] overflow-hidden shadow-2xl flex flex-col border-4 border-white dark:border-slate-800 relative">
              <button onClick={() => setViewingInitiative(null)} className="absolute top-6 right-6 lg:top-10 lg:right-10 p-4 bg-white dark:bg-slate-800 rounded-3xl text-slate-300 dark:text-slate-600 hover:text-rose-500 dark:hover:text-rose-400 hover:rotate-90 transition-all shadow-sm z-10"><X size={28} /></button>
              
              <div className="p-8 lg:p-12 border-b border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/50 flex items-center">
                 <div className="flex items-center gap-4 lg:gap-7">
                    <div className={`${activeTheme.primary} p-4 lg:p-6 rounded-[1.5rem] lg:rounded-[2.5rem] text-white shadow-2xl ${activeTheme.shadow} rotate-2`}><Lightbulb size={32} /></div>
                    <div>
                      <p className={`text-[9px] lg:text-[10px] font-black uppercase ${activeTheme.text} tracking-[0.3em]`}>Chi tiết sáng kiến</p>
                      <h3 className="text-2xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tighter uppercase line-clamp-1">Hồ sơ số hóa</h3>
                    </div>
                 </div>
              </div>
              <div className="p-8 lg:p-12 overflow-y-auto flex-1 space-y-8 lg:space-y-10 custom-scrollbar pr-4">
                 <div className="flex flex-wrap gap-3">
                    <span className="bg-slate-900 dark:bg-slate-700 text-white px-4 lg:px-5 py-2 rounded-2xl text-[10px] lg:text-[11px] font-black uppercase tracking-widest">Năm {viewingInitiative.year}</span>
                    {viewingInitiative.level?.map(lvl => (<span key={lvl} className={`${LEVEL_COLORS[lvl as InitiativeLevel]} text-white px-4 lg:px-5 py-2 rounded-2xl text-[10px] lg:text-[11px] font-black uppercase shadow-sm`}>{lvl}</span>))}
                    {viewingInitiative.unit && <span className={`${activeTheme.accent} dark:bg-slate-800 ${activeTheme.text} border ${activeTheme.border} dark:border-slate-700 px-4 lg:px-5 py-2 rounded-2xl text-[10px] lg:text-[11px] font-black uppercase flex items-center gap-2 shadow-sm`}><Building2 size={14}/> {viewingInitiative.unit}</span>}
                 </div>
                 <h1 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white leading-[1.2] tracking-tighter uppercase">{viewingInitiative.title}</h1>
                 <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 font-bold text-base lg:text-lg"><Users size={20} className={activeTheme.text}/> {viewingInitiative.authors?.join(', ')}</div>
                 <div className="bg-white dark:bg-slate-800/50 p-8 lg:p-12 rounded-[3rem] lg:rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-inner relative">
                    <div className="absolute top-8 right-8 text-slate-100 dark:text-slate-700 opacity-20 hidden sm:block"><Bot size={80}/></div>
                    <div className="relative z-10">
                       <p className="text-base lg:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium whitespace-pre-wrap">{viewingInitiative.content}</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* EDIT MODAL */}
      {isEditModalOpen && editingInitiative && user && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-[3rem] w-full max-w-2xl max-h-[95vh] shadow-2xl flex flex-col overflow-hidden animate-slide border-4 border-white dark:border-slate-800 transition-all">
             <div className="p-8 lg:p-10 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between"><h3 className="text-xl lg:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter flex items-center gap-3"><Edit className={activeTheme.text}/> Quản lý hồ sơ</h3><button onClick={() => setIsEditModalOpen(false)} className="p-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl transition-all dark:text-white"><X size={28} /></button></div>
             <div className="p-8 lg:p-10 overflow-y-auto flex-1 space-y-6 custom-scrollbar pr-4">
                <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 dark:text-slate-500 ml-2 tracking-widest">Tên sáng kiến</label><input className={`w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-[1.5rem] font-bold focus:bg-white dark:focus:bg-slate-900 focus:border-orange-500 outline-none shadow-inner transition-all`} value={editingInitiative.title} onChange={(e) => setEditingInitiative({...editingInitiative, title: e.target.value})} /></div>
                
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase text-slate-400 dark:text-slate-500 ml-2 flex items-center gap-1.5 tracking-widest"><Award size={10}/> Cấp công nhận</label>
                  <div className="flex flex-wrap gap-2 px-2">
                    {(['HLH', 'NPSC', 'NPC', 'EVN'] as InitiativeLevel[]).map(lvl => {
                      const isSelected = editingInitiative.level?.includes(lvl);
                      return (
                        <button 
                          key={lvl} 
                          onClick={() => {
                            const current = editingInitiative.level || [];
                            const updated = current.includes(lvl) ? current.filter(l => l !== lvl) : [...current, lvl];
                            setEditingInitiative({...editingInitiative, level: updated});
                          }}
                          className={`px-4 py-2 rounded-xl text-[10px] font-black border-2 transition-all ${isSelected ? `${LEVEL_COLORS[lvl]} text-white border-transparent shadow-md scale-105` : 'bg-white dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-500'}`}
                        >
                          {lvl}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 dark:text-slate-500 ml-2 tracking-widest">Năm</label><input type="number" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-[1.5rem] font-bold shadow-inner" value={editingInitiative.year} onChange={(e) => setEditingInitiative({...editingInitiative, year: parseInt(e.target.value)})} /></div>
                  <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 dark:text-slate-500 ml-2 tracking-widest">Lĩnh vực</label><input className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-[1.5rem] font-bold shadow-inner" value={editingInitiative.field} onChange={(e) => setEditingInitiative({...editingInitiative, field: e.target.value})} /></div>
                </div>
                <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 dark:text-slate-500 ml-2 tracking-widest">Đơn vị</label><input className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-[1.5rem] font-bold shadow-inner" value={editingInitiative.unit} onChange={(e) => setEditingInitiative({...editingInitiative, unit: e.target.value})} /></div>
                <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 dark:text-slate-500 ml-2 tracking-widest">Tác giả</label><input className={`w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-[1.5rem] font-bold outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-orange-500 transition-all shadow-inner`} value={Array.isArray(editingInitiative.authors) ? editingInitiative.authors.join(', ') : ''} onChange={(e) => setEditingInitiative({...editingInitiative, authors: e.target.value.split(',').map(a => a.trim())})} /></div>
                <div className="space-y-1"><label className="text-[9px] font-black uppercase text-slate-400 dark:text-slate-500 ml-2 tracking-widest">Tóm tắt nội dung</label><textarea rows={6} className={`w-full px-6 py-5 bg-slate-50 dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-[2rem] font-bold outline-none resize-none focus:bg-white dark:focus:bg-slate-900 focus:border-orange-500 transition-all shadow-inner custom-scrollbar`} value={editingInitiative.content} onChange={(e) => setEditingInitiative({...editingInitiative, content: e.target.value})} /></div>
             </div>
             <div className="p-8 lg:p-10 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex gap-4"><button onClick={() => setIsEditModalOpen(false)} className="flex-1 py-4 lg:py-5 border-2 border-slate-200 dark:border-slate-700 rounded-[2rem] font-black text-slate-400 dark:text-slate-500 hover:bg-white dark:hover:bg-slate-800 transition-all uppercase text-[10px] tracking-widest">Hủy</button><button onClick={async () => {
               if(!editingInitiative?.title) return alert("Vui lòng nhập tên sáng kiến.");
               setLoading(true);
               try {
                  if(editingInitiative.id) { await updateDoc(doc(db, "initiatives", editingInitiative.id), editingInitiative); }
                  else { await addDoc(collection(db, "initiatives"), editingInitiative); }
                  setIsEditModalOpen(false);
                  setGlobalError(null);
               } catch(e) { alert("Lỗi khi lưu dữ liệu."); } finally { setLoading(false); }
             }} className={`flex-[2] py-4 lg:py-5 ${activeTheme.primary} text-white rounded-[2rem] font-black shadow-2xl ${activeTheme.shadow} uppercase text-[10px] lg:text-xs tracking-widest`}>Xác nhận lưu</button></div>
          </div>
        </div>
      )}

      {loading && (
        <div className="fixed inset-0 z-[1000] bg-white dark:bg-slate-950 flex flex-col items-center justify-center space-y-4">
           <div className={`w-16 h-16 border-8 border-slate-100 dark:border-slate-800 border-t-orange-600 rounded-full animate-spin shadow-xl`}></div>
           <p className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em] animate-pulse">NPSC Hub đang kết nối...</p>
        </div>
      )}
    </div>
  );
};

export default App;
