
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
import { Initiative, ChatMessage, InitiativeLevel } from './types';
import { 
  Search, BrainCircuit, Plus, Send, 
  LayoutDashboard, X, Trash2, Building2, 
  Loader2, FileUp, TrendingUp, Users, 
  ArrowRight, Bot, Upload, Edit, Lightbulb,
  Award, BarChart3, Zap, Activity, Sparkles, ChevronRight, Target,
  LogIn, LogOut, ShieldCheck, Mail, Lock, UserPlus, Filter, Paperclip, Link, Download, ExternalLink, FileText, Calendar, CheckCircle2, AlertCircle, Check, Briefcase
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
  'NPSC': 'bg-blue-600',
  'NPC': 'bg-indigo-700',
  'EVN': 'bg-purple-800'
};

interface BatchItem extends Partial<Initiative> {
  tempId: string;
  selected: boolean;
}

const AI_SYSTEM_INSTRUCTION = `Bạn là chuyên gia cố vấn chiến lược và quản lý sáng kiến tại NPSC Hub. 
Nhiệm vụ của bạn là cung cấp thông tin chính xác, chuyên nghiệp.
QUY TẮC TRÌNH BÀY QUAN TRỌNG:
1. Tuyệt đối KHÔNG sử dụng các ký tự Markdown như dấu sao (*), dấu thăng (#) hoặc bất kỳ ký hiệu định dạng văn bản thô nào.
2. Sử dụng tiêu đề viết hoa để phân tách các mục lớn.
3. Xuống dòng rõ ràng giữa các đoạn văn để tạo không gian trắng, giúp văn bản dễ đọc.
4. Sử dụng ngôn ngữ hành chính, lịch sự, chuyên nghiệp của ngành điện lực.
5. Nếu cần liệt kê, hãy sử dụng đánh số thứ tự (1, 2, 3...) thay vì dùng dấu chấm đầu dòng.`;

const App: React.FC = () => {
  const [initiatives, setInitiatives] = useState<Initiative[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'list' | 'stats' | 'chat'>('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevels, setSelectedLevels] = useState<InitiativeLevel[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [aiInsight, setAiInsight] = useState<string>('');
  const [isGeneratingInsight, setIsGeneratingInsight] = useState(false);
  
  // Stats Drill-down states
  const [statsView, setStatsView] = useState<'level' | 'year' | 'unit' | 'field'>('level');
  const [statsDetailValue, setStatsDetailValue] = useState<string | number | null>(null);

  // Auth states
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isRegisterMode, setIsRegisterMode] = useState(false);
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

  const handleAuthAction = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) return;
    setIsAuthProcessing(true);
    setAuthError('');
    try {
      if (isRegisterMode) {
        await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
      } else {
        await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      }
      setIsLoginModalOpen(false);
      setLoginEmail('');
      setLoginPassword('');
    } catch (error: any) {
      setAuthError('Email hoặc mật khẩu không chính xác.');
    } finally {
      setIsAuthProcessing(false);
    }
  };

  const handleLogout = async () => {
    try { await signOut(auth); } catch (error) { console.error("Logout Error:", error); }
  };

  const dashboardStats = useMemo(() => {
    const total = initiatives.length;
    const currentYear = new Date().getFullYear();
    const currentYearCount = initiatives.filter(i => i.year === currentYear).length;
    
    const levelDist = initiatives.reduce((acc, curr) => {
      (curr.level || []).forEach(l => { acc[l] = (acc[l] || 0) + 1; });
      return acc;
    }, {} as Record<string, number>);

    const yearDist = initiatives.reduce((acc, curr) => {
      acc[curr.year] = (acc[curr.year] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

    const unitDist = initiatives.reduce((acc, curr) => {
      if (curr.unit) acc[curr.unit] = (acc[curr.unit] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const fieldDist = initiatives.reduce((acc, curr) => {
      const f = curr.field || 'Khác';
      acc[f] = (acc[f] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return { total, currentYearCount, levelDist, yearDist, unitDist, fieldDist };
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

  // Fix: Add missing toggleLevelFilter function
  const toggleLevelFilter = (lvl: InitiativeLevel) => {
    setSelectedLevels(prev => 
      prev.includes(lvl) ? prev.filter(l => l !== lvl) : [...prev, lvl]
    );
  };

  // Fix: Add missing toggleYearFilter function
  const toggleYearFilter = (year: number) => {
    setSelectedYears(prev => 
      prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]
    );
  };

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

  const handleEditInitiative = (init: Initiative) => {
    if (!user) return;
    setEditingInitiative({ ...init });
    setIsEditModalOpen(true);
  };

  const handleAddNew = () => {
    if (!user) return;
    setEditingInitiative({ title: '', content: '', authors: [], unit: '', year: new Date().getFullYear(), level: ['HLH'], field: '' });
    setIsEditModalOpen(true);
  };

  const handleBatchPdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setIsBatchProcessing(true);
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
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: [{ inlineData: { data: base64, mimeType: 'application/pdf' } }, { text: "Trích xuất danh sách sáng kiến. Nội dung tóm tắt phải tuân thủ quy tắc trình bày không dùng dấu sao, dấu thăng." }],
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
      alert("Lỗi khi xử lý PDF bằng AI.");
    } finally { setIsBatchProcessing(false); }
  };

  const saveBatchResults = async () => {
    const selectedItems = batchResults.filter(r => r.selected);
    if (selectedItems.length === 0) return alert("Vui lòng chọn ít nhất một sáng kiến.");
    setLoading(true);
    try {
      const batch = writeBatch(db);
      selectedItems.forEach(item => {
        const { tempId, selected, ...data } = item;
        batch.set(doc(collection(db, "initiatives")), data);
      });
      await batch.commit();
      setIsBatchModalOpen(false);
      setBatchResults([]);
    } catch (error) { alert("Lỗi khi lưu."); }
    finally { setLoading(false); }
  };

  const saveInitiative = async () => {
    if (!editingInitiative?.title) return alert("Vui lòng nhập tên sáng kiến.");
    setLoading(true);
    try {
      if (editingInitiative.id) { await updateDoc(doc(db, "initiatives", editingInitiative.id), editingInitiative); }
      else { await addDoc(collection(db, "initiatives"), editingInitiative); }
      setIsEditModalOpen(false);
      setEditingInitiative(null);
    } catch (e) { alert("Lỗi khi lưu."); }
    finally { setLoading(false); }
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
        contents: `Hãy phân tích tình hình sáng kiến dựa trên dữ liệu thống kê sau: ${context}.`,
        config: { systemInstruction: AI_SYSTEM_INSTRUCTION }
      });
      setAiInsight(response.text || "");
    } catch (error) { setAiInsight("Lỗi AI."); }
    finally { setIsGeneratingInsight(false); }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#f8fafc]">
      <aside className="w-full lg:w-80 bg-slate-900 text-white lg:sticky lg:top-0 lg:h-screen flex flex-col p-8 z-30 shadow-2xl">
        <div onClick={() => !user && setIsLoginModalOpen(true)} className="flex items-center gap-4 mb-10 group cursor-pointer transition-all">
          <div className="bg-gradient-to-br from-blue-400 to-indigo-600 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform"><BrainCircuit size={28} className="text-white" /></div>
          <div><h1 className="font-extrabold text-2xl tracking-tighter">NPSC Hub</h1><p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Innovation Engine</p></div>
        </div>
        {user && (
          <div className="mb-8 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-black text-white">{user.email?.charAt(0).toUpperCase()}</div>
              <div className="flex-1 overflow-hidden"><p className="text-xs font-black truncate text-slate-200">{user.email}</p><span className="text-[9px] text-blue-400 font-black uppercase">Administrator</span></div>
              <button onClick={handleLogout} className="p-2 text-slate-500 hover:text-rose-400 transition-colors"><LogOut size={16}/></button>
            </div>
          </div>
        )}
        <nav className="space-y-2 flex-1">
          <button onClick={() => setActiveTab('list')} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold ${activeTab === 'list' ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}><LayoutDashboard size={22} /> Danh mục</button>
          <button onClick={() => setActiveTab('stats')} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold ${activeTab === 'stats' ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}><BarChart3 size={22} /> Thống kê</button>
          <button onClick={() => setActiveTab('chat')} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold ${activeTab === 'chat' ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}><Bot size={22} /> Trợ lý AI</button>
        </nav>
        {user && (
          <div className="mt-auto pt-6 border-t border-slate-800 space-y-3">
            <button onClick={handleAddNew} className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-4 rounded-2xl font-black hover:bg-slate-100 transition-all"><Plus size={20} /> Thêm mới</button>
            <button onClick={() => setIsBatchModalOpen(true)} className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-2xl font-black hover:bg-blue-500 transition-all"><FileUp size={20} /> Nhập PDF (AI)</button>
          </div>
        )}
      </aside>

      <main className="flex-1 p-6 lg:p-10 flex flex-col gap-8 overflow-y-auto">
        {activeTab === 'list' ? (
          <>
            <header className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <h2 className="text-4xl font-black text-slate-900 uppercase">Kho sáng kiến</h2>
                <div className="relative w-full md:w-96"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} /><input type="text" placeholder="Tìm kiếm..." className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm font-medium" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /></div>
              </div>
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-3"><p className="text-[9px] font-black text-slate-400 uppercase ml-2">Cấp công nhận</p><div className="flex flex-wrap gap-2">{(['HLH', 'NPSC', 'NPC', 'EVN'] as InitiativeLevel[]).map(lvl => (<button key={lvl} onClick={() => toggleLevelFilter(lvl)} className={`px-4 py-2 rounded-xl text-[10px] font-black border-2 transition-all ${selectedLevels.includes(lvl) ? `${LEVEL_COLORS[lvl]} text-white border-transparent shadow-lg scale-105` : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'}`}>{lvl}</button>))}</div></div>
                   <div className="space-y-3"><p className="text-[9px] font-black text-slate-400 uppercase ml-2">Năm công nhận</p><div className="flex flex-wrap gap-2">{availableYears.map(year => (<button key={year} onClick={() => toggleYearFilter(year)} className={`px-4 py-2 rounded-xl text-[10px] font-black border-2 transition-all ${selectedYears.includes(year) ? 'bg-emerald-600 text-white border-transparent shadow-lg scale-105' : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'}`}>{year}</button>))}</div></div>
                </div>
              </div>
            </header>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {filteredInitiatives.map((item) => (
                <div key={item.id} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl transition-all group animate-slide">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-slate-900 text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase shadow-sm">{item.year}</span>
                      {item.level?.map(lvl => (<span key={lvl} className={`${LEVEL_COLORS[lvl as InitiativeLevel] || 'bg-slate-400'} text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase shadow-sm`}>{lvl}</span>))}
                      {item.unit && <span className="bg-indigo-50 text-indigo-700 border border-indigo-100 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase flex items-center gap-1.5 shadow-sm"><Building2 size={10} /> {item.unit}</span>}
                    </div>
                    {user && (
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handleEditInitiative(item)} className="p-2.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-xl transition-all"><Edit size={18} /></button>
                        <button onClick={() => { if(confirm('Xác nhận xóa sáng kiến?')) deleteDoc(doc(db, "initiatives", item.id)); }} className="p-2.5 bg-rose-50 text-rose-400 hover:text-rose-600 rounded-xl transition-all"><Trash2 size={18} /></button>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight line-clamp-2 min-h-[4rem]">{item.title}</h3>
                  <div className="flex items-center gap-2 text-slate-500 font-bold text-sm mb-6"><Users size={16} className="text-blue-500" /> {Array.isArray(item.authors) ? item.authors.join(', ') : item.authors}</div>
                  <button onClick={() => setViewingInitiative(item)} className="text-blue-600 font-black text-sm flex items-center gap-2 hover:gap-3 transition-all border-b-2 border-transparent hover:border-blue-600 pb-1 w-fit">Xem chi tiết <ArrowRight size={16} /></button>
                </div>
              ))}
            </div>
          </>
        ) : activeTab === 'stats' ? (
          <div className="space-y-10 animate-slide">
             <h2 className="text-4xl font-black text-slate-900 uppercase">Báo cáo Thống kê</h2>
             
             {/* Summary Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm text-center">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl mb-4 mx-auto w-fit"><Zap size={24} /></div>
                  <p className="text-slate-400 font-bold uppercase text-[10px] mb-1">Tổng sáng kiến</p>
                  <h4 className="text-4xl font-black text-slate-900">{dashboardStats.total}</h4>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm text-center">
                  <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl mb-4 mx-auto w-fit"><Award size={24} /></div>
                  <p className="text-slate-400 font-bold uppercase text-[10px] mb-1">Cấp EVN</p>
                  <h4 className="text-4xl font-black text-slate-900">{dashboardStats.levelDist['EVN'] || 0}</h4>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm text-center">
                  <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl mb-4 mx-auto w-fit"><Building2 size={24} /></div>
                  <p className="text-slate-400 font-bold uppercase text-[10px] mb-1">Cấp NPC</p>
                  <h4 className="text-4xl font-black text-slate-900">{dashboardStats.levelDist['NPC'] || 0}</h4>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm text-center">
                  <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl mb-4 mx-auto w-fit"><Activity size={24} /></div>
                  <p className="text-slate-400 font-bold uppercase text-[10px] mb-1">Cấp NPSC</p>
                  <h4 className="text-4xl font-black text-slate-900">{dashboardStats.levelDist['NPSC'] || 0}</h4>
                </div>
             </div>

             {/* Interactive Tabs for Stats */}
             <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
                <div className="flex flex-wrap items-center gap-4 border-b border-slate-100 pb-6">
                   <button onClick={() => { setStatsView('level'); setStatsDetailValue(null); }} className={`px-6 py-3 rounded-2xl font-black text-sm transition-all ${statsView === 'level' ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-400 hover:bg-slate-50'}`}>Theo Cấp</button>
                   <button onClick={() => { setStatsView('year'); setStatsDetailValue(null); }} className={`px-6 py-3 rounded-2xl font-black text-sm transition-all ${statsView === 'year' ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-400 hover:bg-slate-50'}`}>Theo Năm</button>
                   <button onClick={() => { setStatsView('unit'); setStatsDetailValue(null); }} className={`px-6 py-3 rounded-2xl font-black text-sm transition-all ${statsView === 'unit' ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-400 hover:bg-slate-50'}`}>Theo Đơn vị</button>
                   <button onClick={() => { setStatsView('field'); setStatsDetailValue(null); }} className={`px-6 py-3 rounded-2xl font-black text-sm transition-all ${statsView === 'field' ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-400 hover:bg-slate-50'}`}>Theo Lĩnh vực</button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                   {/* Distribution Grid */}
                   <div className="space-y-4">
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest flex items-center gap-2"><Target size={14}/> Click vào danh mục để xem chi tiết</p>
                      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                         {Object.entries(
                           statsView === 'level' ? dashboardStats.levelDist :
                           statsView === 'year' ? dashboardStats.yearDist :
                           statsView === 'unit' ? dashboardStats.unitDist :
                           dashboardStats.fieldDist
                         ).sort((a,b) => (statsView === 'year' ? Number(b[0]) - Number(a[0]) : Number(b[1]) - Number(a[1]))).map(([key, count]) => (
                           <button 
                             key={key} 
                             onClick={() => setStatsDetailValue(key)}
                             className={`w-full group p-4 rounded-2xl border transition-all flex items-center justify-between ${statsDetailValue === key ? 'bg-blue-600 border-transparent shadow-lg text-white' : 'bg-slate-50 border-slate-100 hover:bg-white hover:border-blue-500 text-slate-700'}`}
                           >
                              <div className="flex items-center gap-3">
                                 {statsView === 'level' && <Award size={18} className={statsDetailValue === key ? 'text-white' : 'text-blue-500'} />}
                                 {statsView === 'year' && <Calendar size={18} className={statsDetailValue === key ? 'text-white' : 'text-emerald-500'} />}
                                 {statsView === 'unit' && <Building2 size={18} className={statsDetailValue === key ? 'text-white' : 'text-indigo-500'} />}
                                 {statsView === 'field' && <Briefcase size={18} className={statsDetailValue === key ? 'text-white' : 'text-purple-500'} />}
                                 <span className="font-bold text-sm">{key}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                 <span className={`text-xs font-black px-3 py-1 rounded-lg ${statsDetailValue === key ? 'bg-white/20' : 'bg-slate-200'}`}>{count} sáng kiến</span>
                                 <ChevronRight size={16} className={statsDetailValue === key ? 'text-white' : 'text-slate-300'} />
                              </div>
                           </button>
                         ))}
                      </div>
                   </div>

                   {/* Detail Preview Area */}
                   <div className="bg-slate-50/50 rounded-[2.5rem] border border-slate-100 p-8 flex flex-col min-h-[400px]">
                      {statsDetailValue ? (
                        <>
                           <div className="flex items-center justify-between mb-6">
                              <h4 className="font-black text-slate-900 uppercase tracking-tight flex items-center gap-2"><List size={18} /> Danh sách {statsDetailValue}</h4>
                              <span className="text-[10px] font-black bg-blue-100 text-blue-600 px-3 py-1 rounded-full uppercase">{statsDrillDownList.length} Bản ghi</span>
                           </div>
                           <div className="space-y-4 overflow-y-auto flex-1 pr-2 custom-scrollbar">
                              {statsDrillDownList.map(item => (
                                <div key={item.id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer" onClick={() => setViewingInitiative(item)}>
                                   <div className="flex justify-between items-start mb-2">
                                      <span className="text-[10px] font-black text-blue-500 uppercase">{item.year}</span>
                                      <span className="text-[10px] font-bold text-slate-400 truncate max-w-[150px]">{item.unit}</span>
                                   </div>
                                   <p className="text-sm font-bold text-slate-800 line-clamp-2 leading-snug">{item.title}</p>
                                </div>
                              ))}
                           </div>
                        </>
                      ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-10">
                           <div className="bg-white p-6 rounded-full text-slate-200 shadow-inner mb-4"><BarChart3 size={48} /></div>
                           <p className="text-slate-400 font-bold text-sm uppercase tracking-wider">Chọn một danh mục để xem danh sách</p>
                        </div>
                      )}
                   </div>
                </div>
             </div>

             {/* AI Insights Section */}
             <div className="bg-slate-900 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10"><Bot size={150} /></div>
                <div className="relative z-10">
                   <div className="flex items-center justify-between mb-10">
                      <div className="flex items-center gap-4">
                         <div className="bg-blue-600 p-3 rounded-2xl"><Sparkles size={24} /></div>
                         <h3 className="text-2xl font-black uppercase tracking-tight">Cố vấn Chiến lược AI</h3>
                      </div>
                      <button 
                        onClick={generateLeadershipInsight} 
                        disabled={isGeneratingInsight} 
                        className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black flex items-center gap-3 hover:bg-blue-50 transition-all shadow-xl"
                      >
                         {isGeneratingInsight ? <Loader2 size={18} className="animate-spin" /> : <Activity size={18} />} 
                         Tạo bản phân tích mới
                      </button>
                   </div>
                   <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 p-10 min-h-[300px] flex items-center justify-center">
                      {aiInsight ? (
                        <div className="text-lg text-slate-200 leading-[1.8] font-medium whitespace-pre-wrap w-full animate-slide">
                           {aiInsight}
                        </div>
                      ) : (
                        <div className="text-center space-y-4">
                           <Bot size={48} className="mx-auto text-slate-600" />
                           <p className="text-slate-500 font-black uppercase text-xs tracking-[0.2em]">Sẵn sàng phân tích dữ liệu kho sáng kiến</p>
                        </div>
                      )}
                   </div>
                </div>
             </div>
          </div>
        ) : (
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col h-[70vh] overflow-hidden">
             <div className="p-8 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
                <div className="bg-blue-600 p-3 rounded-2xl text-white shadow-lg"><Bot size={24} /></div>
                <h3 className="text-xl font-black text-slate-900 uppercase">Trợ lý AI NPSC Hub</h3>
             </div>
             <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-6 rounded-[2rem] font-medium whitespace-pre-wrap ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none shadow-lg' : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200 shadow-sm'}`}>{msg.text}</div>
                  </div>
                ))}
                {isTyping && <div className="text-blue-500 animate-pulse font-bold px-6 flex items-center gap-2"><Loader2 className="animate-spin" size={16}/> Trợ lý đang chuẩn bị câu trả lời...</div>}
                <div ref={chatEndRef} />
             </div>
             <div className="p-8 border-t border-slate-100">
                <div className="relative">
                   <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} placeholder="Hỏi về bất kỳ sáng kiến nào..." className="w-full pl-8 pr-16 py-5 bg-white border border-slate-200 rounded-3xl outline-none focus:border-blue-500 font-bold shadow-sm" />
                   <button onClick={handleSendMessage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 p-3 rounded-2xl text-white shadow-lg hover:bg-blue-700 transition-colors"><Send size={20} /></button>
                </div>
             </div>
          </div>
        )}
      </main>

      {/* BATCH MODAL */}
      {isBatchModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-white rounded-[3rem] w-full max-w-6xl max-h-[90vh] shadow-2xl overflow-hidden flex flex-col animate-slide">
             <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-4"><div className="bg-blue-600 p-3 rounded-2xl text-white shadow-lg"><FileUp size={24} /></div><h3 className="text-2xl font-black text-slate-900 uppercase">Nhập sáng kiến bằng AI</h3></div>
                <button onClick={() => { setIsBatchModalOpen(false); setBatchResults([]); }} className="p-3 hover:bg-slate-100 rounded-xl transition-colors"><X size={24} /></button>
             </div>
             <div className="p-8 overflow-y-auto flex-1 custom-scrollbar bg-slate-50/30">
                {batchResults.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 border-4 border-dashed border-slate-200 bg-white rounded-[3rem] text-center">
                     <div className="bg-blue-50 p-6 rounded-full text-blue-600 mb-6">{isBatchProcessing ? <Loader2 size={48} className="animate-spin" /> : <Upload size={48} />}</div>
                     <h4 className="text-xl font-black text-slate-900 mb-2">{isBatchProcessing ? "Trí tuệ nhân tạo đang phân tích tài liệu..." : "Tải lên tệp PDF danh sách sáng kiến"}</h4>
                     <p className="text-slate-400 font-medium mb-8 max-w-sm">Hệ thống sẽ tự động bóc tách thông tin sáng kiến từ tệp văn bản đính kèm.</p>
                     {!isBatchProcessing && (<div className="relative"><input type="file" id="batch-pdf" hidden accept=".pdf" multiple onChange={handleBatchPdfUpload} /><label htmlFor="batch-pdf" className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black shadow-xl hover:bg-blue-700 cursor-pointer transition-all flex items-center gap-2"><Plus size={20}/> Chọn tài liệu PDF</label></div>)}
                  </div>
                ) : (
                  <div className="space-y-6">
                     <div className="flex items-center justify-between bg-emerald-50 p-6 rounded-3xl border border-emerald-100">
                        <div className="flex items-center gap-3 text-emerald-700 font-black"><CheckCircle2 size={32} /> AI đã bóc tách thành công {batchResults.length} sáng kiến</div>
                     </div>
                     <div className="border border-slate-100 bg-white rounded-3xl overflow-hidden shadow-sm">
                        <table className="w-full text-left text-sm border-collapse">
                           <thead className="bg-slate-50 text-[10px] font-black uppercase text-slate-400 border-b border-slate-100">
                              <tr><th className="px-6 py-4 w-12 text-center">Lưu</th><th className="px-6 py-4">Tên sáng kiến</th><th className="px-6 py-4">Tác giả</th><th className="px-6 py-4">Đơn vị</th><th className="px-6 py-4">Năm</th><th className="px-6 py-4 text-center">Thao tác</th></tr>
                           </thead>
                           <tbody className="divide-y divide-slate-100">
                              {batchResults.map((item) => (
                                <tr key={item.tempId} className={`transition-colors ${item.selected ? 'bg-emerald-50/20' : 'bg-slate-50/50 opacity-40'}`}>
                                   <td className="px-6 py-4 text-center"><button onClick={() => setBatchResults(prev => prev.map(r => r.tempId === item.tempId ? { ...r, selected: !r.selected } : r))} className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${item.selected ? 'bg-emerald-500 border-transparent text-white shadow-sm' : 'bg-white border-slate-200 text-transparent'}`}><Check size={14} strokeWidth={4} /></button></td>
                                   <td className="px-6 py-4 font-bold text-slate-800 max-w-sm"><span className="line-clamp-2">{item.title}</span></td>
                                   <td className="px-6 py-4 text-slate-600 font-medium">{item.authors?.join(', ')}</td>
                                   <td className="px-6 py-4 text-slate-500 font-bold">{item.unit}</td>
                                   <td className="px-6 py-4 font-black text-blue-600">{item.year}</td>
                                   <td className="px-6 py-4"><div className="flex items-center justify-center gap-2"><button onClick={() => setEditingBatchItem(item)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg"><Edit size={16} /></button><button onClick={() => setBatchResults(prev => prev.filter(r => r.tempId !== item.tempId))} className="p-2 text-rose-400 hover:bg-rose-50 rounded-lg"><Trash2 size={16} /></button></div></td>
                                </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </div>
                )}
             </div>
             {batchResults.length > 0 && (
                <div className="p-8 border-t border-slate-100 bg-slate-50 flex gap-4">
                   <button onClick={() => { setBatchResults([]); setIsBatchModalOpen(false); }} className="flex-1 py-4 border border-slate-200 rounded-2xl font-black text-slate-400 hover:bg-white transition-all uppercase text-xs tracking-widest">Hủy bỏ</button>
                   <button onClick={saveBatchResults} className="flex-[2] py-4 bg-emerald-600 text-white rounded-2xl font-black shadow-xl hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 uppercase text-xs tracking-widest">Xác nhận lưu {batchResults.filter(r => r.selected).length} bản ghi</button>
                </div>
             )}
          </div>
        </div>
      )}

      {/* EDIT BATCH ITEM MODAL */}
      {editingBatchItem && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in zoom-in duration-200">
           <div className="bg-white rounded-[3rem] w-full max-w-2xl shadow-2xl flex flex-col overflow-hidden">
              <div className="p-8 border-b border-slate-100 flex items-center justify-between"><h3 className="text-xl font-black text-slate-900 uppercase">Sửa thông tin sáng kiến</h3><button onClick={() => setEditingBatchItem(null)} className="p-2 hover:bg-slate-100 rounded-lg"><X size={20}/></button></div>
              <div className="p-8 space-y-4">
                 <div className="space-y-1"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Tên sáng kiến</label><textarea className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold focus:border-blue-500 outline-none resize-none" rows={3} value={editingBatchItem.title} onChange={(e) => setEditingBatchItem({...editingBatchItem, title: e.target.value})} /></div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1"><label className="text-[10px) font-black uppercase text-slate-400 ml-2">Đơn vị</label><input className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold" value={editingBatchItem.unit} onChange={(e) => setEditingBatchItem({...editingBatchItem, unit: e.target.value})} /></div>
                    <div className="space-y-1"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Năm</label><input type="number" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold" value={editingBatchItem.year} onChange={(e) => setEditingBatchItem({...editingBatchItem, year: parseInt(e.target.value)})} /></div>
                 </div>
              </div>
              <div className="p-8 border-t border-slate-100 bg-slate-50"><button onClick={() => { setBatchResults(prev => prev.map(item => item.tempId === editingBatchItem.tempId ? editingBatchItem : item)); setEditingBatchItem(null); }} className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg uppercase text-xs tracking-widest">Lưu cập nhật</button></div>
           </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl animate-in fade-in">
           <div className="bg-white rounded-[3rem] w-full max-w-md shadow-2xl overflow-hidden animate-slide">
              <div className="p-10 text-center space-y-6">
                 <div className="mx-auto bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg mb-4"><LogIn size={32} /></div>
                 <h3 className="text-3xl font-black text-slate-900 uppercase">Đăng nhập Quản trị</h3>
                 <form onSubmit={handleAuthAction} className="space-y-4 text-left">
                    <div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} /><input type="email" placeholder="Email công vụ" required className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} /></div>
                    <div className="relative"><Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} /><input type="password" placeholder="Mật khẩu" required className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} /></div>
                    {authError && <p className="text-xs font-black text-rose-500 px-2">{authError}</p>}
                    <button disabled={isAuthProcessing} className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black shadow-xl uppercase tracking-widest text-xs">Xác nhận</button>
                 </form>
                 <button onClick={() => setIsLoginModalOpen(false)} className="text-xs font-bold text-slate-300 hover:text-rose-500 transition-colors">Hủy bỏ</button>
              </div>
           </div>
        </div>
      )}

      {/* EDIT MODAL */}
      {isEditModalOpen && editingInitiative && user && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-white rounded-[3rem] w-full max-w-2xl max-h-[95vh] shadow-2xl flex flex-col overflow-hidden animate-slide">
             <div className="p-8 border-b border-slate-100 flex items-center justify-between"><h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Hồ sơ Sáng kiến</h3><button onClick={() => setIsEditModalOpen(false)} className="p-3 hover:bg-slate-100 rounded-xl transition-colors"><X size={24} /></button></div>
             <div className="p-8 overflow-y-auto flex-1 space-y-6 custom-scrollbar">
                <div className="space-y-1"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Tên sáng kiến</label><input className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold focus:border-blue-500 outline-none" value={editingInitiative.title} onChange={(e) => setEditingInitiative({...editingInitiative, title: e.target.value})} /></div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Năm</label><input type="number" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold" value={editingInitiative.year} onChange={(e) => setEditingInitiative({...editingInitiative, year: parseInt(e.target.value)})} /></div>
                  <div className="space-y-1"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Lĩnh vực</label><input className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold" value={editingInitiative.field} onChange={(e) => setEditingInitiative({...editingInitiative, field: e.target.value})} /></div>
                </div>
                <div className="space-y-1"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Đơn vị</label><input className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold" value={editingInitiative.unit} onChange={(e) => setEditingInitiative({...editingInitiative, unit: e.target.value})} /></div>
                <div className="space-y-1"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Tác giả (Cách nhau bằng dấu phẩy)</label><input className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold focus:border-blue-500 outline-none" value={Array.isArray(editingInitiative.authors) ? editingInitiative.authors.join(', ') : ''} onChange={(e) => setEditingInitiative({...editingInitiative, authors: e.target.value.split(',').map(a => a.trim())})} /></div>
                <div className="space-y-2"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Cấp công nhận (Chọn nhiều)</label><div className="flex flex-wrap gap-2">{(['HLH', 'NPSC', 'NPC', 'EVN'] as InitiativeLevel[]).map(lvl => (<button key={lvl} type="button" onClick={() => { const curr = editingInitiative.level || []; const next = curr.includes(lvl) ? curr.filter(l => l !== lvl) : [...curr, lvl]; setEditingInitiative({...editingInitiative, level: next}); }} className={`px-6 py-2.5 rounded-xl text-xs font-black border-2 transition-all ${editingInitiative.level?.includes(lvl) ? `${LEVEL_COLORS[lvl]} text-white border-transparent shadow-lg scale-105` : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'}`}>{lvl}</button>))}</div></div>
                <div className="space-y-1"><label className="text-[10px] font-black uppercase text-slate-400 ml-2">Mô tả chi tiết</label><textarea rows={6} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold outline-none resize-none focus:border-blue-500" value={editingInitiative.content} onChange={(e) => setEditingInitiative({...editingInitiative, content: e.target.value})} /></div>
             </div>
             <div className="p-8 border-t border-slate-100 bg-slate-50 flex gap-4"><button onClick={() => setIsEditModalOpen(false)} className="flex-1 py-4 border border-slate-200 rounded-2xl font-black text-slate-400 hover:bg-white transition-all uppercase text-xs tracking-widest">Hủy bỏ</button><button onClick={saveInitiative} className="flex-[2] py-4 bg-blue-600 text-white rounded-2xl font-black shadow-xl hover:bg-blue-700 transition-all uppercase text-xs tracking-widest">Lưu hồ sơ</button></div>
          </div>
        </div>
      )}

      {/* VIEW MODAL */}
      {viewingInitiative && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-xl animate-in zoom-in duration-300">
           <div className="bg-white rounded-[4rem] w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
              <div className="p-10 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between"><div className="flex items-center gap-6"><div className="bg-blue-600 p-5 rounded-3xl text-white shadow-lg"><Lightbulb size={36} /></div><div><p className="text-[10px] font-black uppercase text-blue-500 tracking-widest">Hồ sơ số hóa thông minh</p><h3 className="text-3xl font-black text-slate-900 tracking-tight">Chi tiết sáng kiến</h3></div></div><button onClick={() => setViewingInitiative(null)} className="p-4 bg-white rounded-2xl text-slate-400 hover:text-rose-500 transition-all"><X size={28} /></button></div>
              <div className="p-10 overflow-y-auto flex-1 space-y-8 custom-scrollbar">
                 <div className="flex flex-wrap gap-2"><span className="bg-slate-900 text-white px-4 py-1.5 rounded-xl text-xs font-black uppercase">{viewingInitiative.year}</span>{viewingInitiative.level?.map(lvl => (<span key={lvl} className={`${LEVEL_COLORS[lvl as InitiativeLevel]} text-white px-4 py-1.5 rounded-xl text-xs font-black uppercase shadow-sm`}>{lvl}</span>))}{viewingInitiative.unit && <span className="bg-indigo-50 text-indigo-700 border border-indigo-100 px-4 py-1.5 rounded-xl text-xs font-black uppercase flex items-center gap-2"><Building2 size={12}/> {viewingInitiative.unit}</span>}</div>
                 <h1 className="text-4xl font-black text-slate-900 leading-[1.15] tracking-tight">{viewingInitiative.title}</h1>
                 <div className="bg-white p-8 lg:p-10 rounded-[3rem] border border-slate-100 shadow-inner"><p className="text-lg lg:text-xl text-slate-700 leading-relaxed font-medium whitespace-pre-wrap">{viewingInitiative.content}</p></div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

// Add Missing Icons helper
const List: React.FC<any> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
);

export default App;
