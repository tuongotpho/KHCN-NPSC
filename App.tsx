
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
  LogIn, LogOut, ShieldCheck, Mail, Lock, UserPlus
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

const App: React.FC = () => {
  const [initiatives, setInitiatives] = useState<Initiative[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'list' | 'stats' | 'chat'>('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevels, setSelectedLevels] = useState<InitiativeLevel[]>([]);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [drillDownUnit, setDrillDownUnit] = useState<string | null>(null);
  const [aiInsight, setAiInsight] = useState<string>('');
  const [isGeneratingInsight, setIsGeneratingInsight] = useState(false);
  
  // Auth states
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [authError, setAuthError] = useState('');
  const [isAuthProcessing, setIsAuthProcessing] = useState(false);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Chào bạn! Tôi là trợ lý AI NPSC Hub. Tôi có thể giúp bạn tìm kiếm, phân tích sự trùng lặp hoặc chỉnh sửa thông tin sáng kiến. Bạn cần hỗ trợ gì không?' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Modals
  const [isBatchModalOpen, setIsBatchModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [viewingInitiative, setViewingInitiative] = useState<Initiative | null>(null);
  const [editingInitiative, setEditingInitiative] = useState<Partial<Initiative> | null>(null);
  const [isBatchProcessing, setIsBatchProcessing] = useState(false);
  
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
      console.error("Auth Error:", error);
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
        setAuthError('Email hoặc mật khẩu không chính xác.');
      } else if (error.code === 'auth/email-already-in-use') {
        setAuthError('Email này đã được đăng ký.');
      } else {
        setAuthError('Lỗi xác thực: ' + error.message);
      }
    } finally {
      setIsAuthProcessing(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const dashboardStats = useMemo(() => {
    const total = initiatives.length;
    const currentYear = new Date().getFullYear();
    const currentYearCount = initiatives.filter(i => i.year === currentYear).length;
    const lastYearCount = initiatives.filter(i => i.year === currentYear - 1).length;
    const growth = lastYearCount === 0 ? 100 : Math.round(((currentYearCount - lastYearCount) / lastYearCount) * 100);

    const levelDist = initiatives.reduce((acc, curr) => {
      (curr.level || []).forEach(l => { acc[l] = (acc[l] || 0) + 1; });
      return acc;
    }, {} as Record<string, number>);

    const unitDist = initiatives.reduce((acc, curr) => {
      if (curr.unit) { acc[curr.unit] = (acc[curr.unit] || 0) + 1; }
      return acc;
    }, {} as Record<string, number>);
    const topUnits = Object.entries(unitDist).sort(([, a], [, b]) => b - a).slice(0, 8);

    const fieldDist = initiatives.reduce((acc, curr) => {
      const field = curr.field || 'Khác';
      acc[field] = (acc[field] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return { total, currentYearCount, growth, levelDist, topUnits, fieldDist };
  }, [initiatives]);

  const unitDetailStats = useMemo(() => {
    if (!drillDownUnit) return null;
    const unitInits = initiatives.filter(i => i.unit === drillDownUnit);
    return { count: unitInits.length };
  }, [drillDownUnit, initiatives]);

  const handleEditInitiative = (init: Initiative) => {
    if (!user) return;
    setEditingInitiative({ ...init });
    setIsEditModalOpen(true);
  };

  const handleAddNew = () => {
    if (!user) return;
    setEditingInitiative({
      title: '',
      content: '',
      authors: [],
      unit: '',
      year: new Date().getFullYear(),
      level: ['HLH'],
      field: ''
    });
    setIsEditModalOpen(true);
  };

  const saveInitiative = async () => {
    if (!editingInitiative?.title) return alert("Vui lòng nhập tên sáng kiến.");
    setLoading(true);
    try {
      if (editingInitiative.id) {
        await updateDoc(doc(db, "initiatives", editingInitiative.id), editingInitiative);
      } else {
        await addDoc(collection(db, "initiatives"), editingInitiative);
      }
      setIsEditModalOpen(false);
      setEditingInitiative(null);
    } catch (e) {
      console.error(e);
      alert("Lỗi khi lưu.");
    } finally {
      setLoading(false);
    }
  };

  const filteredInitiatives = useMemo(() => {
    return initiatives.filter(i => {
      const matchesSearch = i.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           (i.authors?.some(a => a.toLowerCase().includes(searchTerm.toLowerCase())));
      const matchesLevel = selectedLevels.length === 0 || 
                          (i.level && i.level.some(l => selectedLevels.includes(l as InitiativeLevel)));
      const matchesUnit = !selectedUnit || i.unit === selectedUnit;
      return matchesSearch && matchesLevel && matchesUnit;
    });
  }, [searchTerm, selectedLevels, selectedUnit, initiatives]);

  const handleSendMessage = async () => {
    if (!userInput.trim() || isTyping) return;
    const newMessages: ChatMessage[] = [...chatMessages, { role: 'user', text: userInput }];
    setChatMessages(newMessages);
    setUserInput('');
    setIsTyping(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const context = initiatives.map(i => `- [${i.level?.join(',')}] ${i.title} (${i.year}): ${i.content.substring(0, 100)}`).join('\n').substring(0, 5000);
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Dữ liệu sáng kiến:\n${context}\n\nCâu hỏi: ${userInput}`,
        config: { systemInstruction: "Bạn là trợ lý NPSC Hub. Hỗ trợ tra cứu và so sánh sáng kiến." }
      });
      setChatMessages([...newMessages, { role: 'model', text: response.text || "Không có phản hồi." }]);
    } catch (error) {
      setChatMessages([...newMessages, { role: 'model', text: "Lỗi kết nối AI." }]);
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
        contents: `Dựa trên thống kê sau: ${context}, hãy đưa ra 3 nhận xét chiến lược ngắn gọn về tình hình đổi mới.`,
        config: { systemInstruction: "Bạn là chuyên gia chiến lược tại NPSC." }
      });
      setAiInsight(response.text || "");
    } catch (error) {
      setAiInsight("Lỗi AI.");
    } finally {
      setIsGeneratingInsight(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#f8fafc]">
      <aside className="w-full lg:w-80 bg-slate-900 text-white lg:sticky lg:top-0 lg:h-screen flex flex-col p-8 z-30 shadow-2xl">
        {/* NPSC Hub Logo - Hidden Login Trigger */}
        <div 
          onClick={() => !user && setIsLoginModalOpen(true)}
          className={`flex items-center gap-4 mb-10 group transition-all ${!user ? 'cursor-pointer' : ''}`}
        >
          <div className="bg-gradient-to-br from-blue-400 to-indigo-600 p-3 rounded-2xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
            <BrainCircuit size={28} className="text-white" />
          </div>
          <div>
            <h1 className="font-extrabold text-2xl tracking-tighter text-white group-hover:text-blue-400 transition-colors">NPSC Hub</h1>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Innovation Engine</p>
            </div>
          </div>
        </div>

        {/* User Info (Only if logged in) */}
        {user && (
          <div className="mb-8 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 animate-slide">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-black text-white shrink-0">
                {user.email?.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-xs font-black truncate text-slate-200">{user.email}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <ShieldCheck size={10} className="text-blue-400"/>
                  <span className="text-[9px] text-blue-400 font-black uppercase">Administrator</span>
                </div>
              </div>
              <button onClick={handleLogout} title="Đăng xuất" className="p-2 text-slate-500 hover:text-rose-400 transition-colors">
                <LogOut size={16}/>
              </button>
            </div>
          </div>
        )}

        <nav className="space-y-2 flex-1">
          <button onClick={() => setActiveTab('list')} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold ${activeTab === 'list' ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
            <LayoutDashboard size={22} /> Danh mục
          </button>
          <button onClick={() => setActiveTab('stats')} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold ${activeTab === 'stats' ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
            <BarChart3 size={22} /> Thống kê
          </button>
          <button onClick={() => setActiveTab('chat')} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold ${activeTab === 'chat' ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
            <Bot size={22} /> Trợ lý AI
          </button>
        </nav>

        {user && (
          <div className="mt-auto pt-6 border-t border-slate-800 space-y-3 animate-slide">
            <button onClick={handleAddNew} className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-4 rounded-2xl font-black hover:bg-slate-100 transition-all">
              <Plus size={20} /> Thêm mới
            </button>
            <button onClick={() => setIsBatchModalOpen(true)} className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-2xl font-black hover:bg-blue-500 transition-all">
              <FileUp size={20} /> Nhập PDF (AI)
            </button>
          </div>
        )}
      </aside>

      <main className="flex-1 p-6 lg:p-10 flex flex-col gap-8 overflow-y-auto">
        <header className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase">
              {activeTab === 'list' ? 'Kho sáng kiến' : activeTab === 'stats' ? 'Thống kê' : 'Hỏi đáp AI'}
            </h2>
            {activeTab === 'list' && (
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Tìm theo tên hoặc tác giả..."
                  className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 shadow-sm font-medium"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            )}
          </div>
        </header>

        {activeTab === 'list' ? (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {filteredInitiatives.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl transition-all group animate-slide">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-900 text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase shadow-sm">{item.year}</span>
                    {item.level?.map(lvl => (
                      <span key={lvl} className={`${LEVEL_COLORS[lvl as InitiativeLevel] || 'bg-slate-400'} text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase shadow-sm`}>{lvl}</span>
                    ))}
                    {item.unit && <span className="bg-indigo-50 text-indigo-700 border border-indigo-100 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase flex items-center gap-1.5 shadow-sm"><Building2 size={10} /> {item.unit}</span>}
                  </div>
                  {user && (
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => handleEditInitiative(item)} className="p-2.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-xl transition-all"><Edit size={18} /></button>
                      <button onClick={() => { if(confirm('Xóa?')) deleteDoc(doc(db, "initiatives", item.id)); }} className="p-2.5 bg-rose-50 text-rose-400 hover:text-rose-600 rounded-xl transition-all"><Trash2 size={18} /></button>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight line-clamp-2 min-h-[4rem]">{item.title}</h3>
                <div className="flex items-center gap-2 mb-6 text-slate-500 font-bold text-sm">
                  <Users size={16} className="text-blue-500" /> {Array.isArray(item.authors) ? item.authors.join(', ') : item.authors}
                </div>
                <button onClick={() => setViewingInitiative(item)} className="text-blue-600 font-black text-sm flex items-center gap-2 hover:gap-3 transition-all border-b-2 border-transparent hover:border-blue-600 pb-1 w-fit">
                  Xem chi tiết <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        ) : activeTab === 'stats' ? (
          <div className="space-y-10 animate-slide">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl mb-4"><Zap size={24} /></div>
                  <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">Tổng sáng kiến</p>
                  <h4 className="text-4xl font-black text-slate-900">{dashboardStats.total}</h4>
                  <div className="mt-2 text-xs font-bold text-emerald-500 flex items-center gap-1"><TrendingUp size={12} /> {dashboardStats.growth}%</div>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl mb-4"><Award size={24} /></div>
                  <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">Cấp EVN</p>
                  <h4 className="text-4xl font-black text-slate-900">{dashboardStats.levelDist['EVN'] || 0}</h4>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl mb-4"><Building2 size={24} /></div>
                  <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">Cấp NPC</p>
                  <h4 className="text-4xl font-black text-slate-900">{dashboardStats.levelDist['NPC'] || 0}</h4>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <div className="p-4 bg-amber-50 text-amber-600 rounded-2xl mb-4"><Activity size={24} /></div>
                  <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">Năm {new Date().getFullYear()}</p>
                  <h4 className="text-4xl font-black text-slate-900">{dashboardStats.currentYearCount}</h4>
                </div>
             </div>
             
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
                   <h3 className="text-xl font-black text-slate-900 uppercase mb-8">Phân bổ Đơn vị</h3>
                   <div className="space-y-6">
                      {dashboardStats.topUnits.map(([unit, count], idx) => (
                        <div key={unit} className="space-y-2 group/unit cursor-pointer" onClick={() => setDrillDownUnit(unit)}>
                          <div className="flex justify-between items-center text-sm font-bold">
                            <span className="text-slate-700 group-hover/unit:text-blue-600 transition-colors flex items-center gap-2">{unit} <ChevronRight size={14}/></span>
                            <span className="text-blue-600">{count}</span>
                          </div>
                          <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full bg-gradient-to-r ${idx === 0 ? 'from-blue-600 to-indigo-600' : 'from-slate-400 to-slate-500'} rounded-full transition-all duration-1000`} style={{ width: `${(count / (dashboardStats.topUnits[0][1] as number)) * 100}%` }}></div>
                          </div>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col">
                   <h3 className="text-xl font-black text-slate-900 uppercase mb-8">Lĩnh vực</h3>
                   <div className="flex-1 flex flex-wrap gap-3">
                      {Object.entries(dashboardStats.fieldDist).map(([field, count]) => (
                        <div key={field} className="flex-1 min-w-[100px] p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center flex flex-col justify-center hover:bg-white hover:shadow-md transition-all">
                           <span className="text-[9px] font-black uppercase text-slate-400 line-clamp-1">{field}</span>
                           <span className="text-xl font-black text-blue-600">{count}</span>
                        </div>
                      ))}
                   </div>
                   <button onClick={generateLeadershipInsight} disabled={isGeneratingInsight} className="mt-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
                      {isGeneratingInsight ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />} Phân tích AI
                   </button>
                   {aiInsight && (
                     <div className="mt-6 p-6 bg-blue-50 border border-blue-100 rounded-3xl text-[13px] font-medium text-slate-700 leading-relaxed animate-slide">
                       <p className="font-black text-blue-600 mb-2 uppercase text-[10px]">AI Strategic Insight:</p>
                       {aiInsight}
                     </div>
                   )}
                </div>
             </div>
          </div>
        ) : (
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col h-[70vh] overflow-hidden">
             <div className="p-8 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
                <div className="bg-blue-600 p-3 rounded-2xl text-white"><Bot size={24} /></div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Trợ lý AI NPSC Hub</h3>
             </div>
             <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-6 rounded-[2rem] font-medium ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none shadow-lg' : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200'}`}>{msg.text}</div>
                  </div>
                ))}
                {isTyping && <div className="text-blue-500 animate-pulse font-bold px-6 flex items-center gap-2"><Loader2 className="animate-spin" size={16}/> AI đang suy nghĩ...</div>}
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

      {/* LOGIN MODAL (HIDDEN TRIGGER ON LOGO) */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-white rounded-[3rem] w-full max-w-md shadow-2xl overflow-hidden animate-slide">
             <div className="p-10 text-center space-y-6">
                <div className="mx-auto bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg mb-4">
                   {isRegisterMode ? <UserPlus size={32} /> : <LogIn size={32} />}
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight uppercase">
                  {isRegisterMode ? 'Đăng ký tài khoản' : 'Đăng nhập Quản trị'}
                </h3>
                
                <form onSubmit={handleAuthAction} className="space-y-4 text-left">
                   <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input 
                        type="email" 
                        placeholder="Email công vụ" 
                        required
                        className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-500 font-bold"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                      />
                   </div>
                   <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input 
                        type="password" 
                        placeholder="Mật khẩu" 
                        required
                        className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-500 font-bold"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                      />
                   </div>
                   {authError && <p className="text-xs font-black text-rose-500 px-2 animate-pulse">{authError}</p>}
                   <button disabled={isAuthProcessing} className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black shadow-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                     {isAuthProcessing ? <Loader2 size={20} className="animate-spin" /> : (isRegisterMode ? 'Tạo tài khoản' : 'Đăng nhập ngay')}
                   </button>
                </form>

                <div className="pt-4 flex flex-col gap-3">
                   <button onClick={() => { setIsRegisterMode(!isRegisterMode); setAuthError(''); }} className="text-sm font-black text-slate-400 hover:text-blue-600">
                     {isRegisterMode ? 'Đã có tài khoản? Đăng nhập' : 'Chưa có tài khoản? Đăng ký'}
                   </button>
                   <button onClick={() => setIsLoginModalOpen(false)} className="text-xs font-bold text-slate-300 hover:text-rose-500">Đóng</button>
                </div>
             </div>
          </div>
        </div>
      )}

      {/* EDIT MODAL */}
      {isEditModalOpen && editingInitiative && user && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
          <div className="bg-white rounded-[3rem] w-full max-w-2xl max-h-[95vh] shadow-2xl flex flex-col overflow-hidden animate-slide">
             <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Hồ sơ Sáng kiến</h3>
                <button onClick={() => setIsEditModalOpen(false)} className="p-3 hover:bg-slate-100 rounded-xl transition-colors"><X size={24} /></button>
             </div>
             <div className="p-8 overflow-y-auto flex-1 space-y-6 custom-scrollbar">
                <div className="space-y-1">
                   <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Tên sáng kiến</label>
                   <input className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold focus:border-blue-500 outline-none" value={editingInitiative.title} onChange={(e) => setEditingInitiative({...editingInitiative, title: e.target.value})} />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Năm</label>
                    <input type="number" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold" value={editingInitiative.year} onChange={(e) => setEditingInitiative({...editingInitiative, year: parseInt(e.target.value)})} />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Lĩnh vực</label>
                    <input className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold" value={editingInitiative.field} onChange={(e) => setEditingInitiative({...editingInitiative, field: e.target.value})} />
                  </div>
                </div>
                <div className="space-y-1">
                   <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Mô tả chi tiết</label>
                   <textarea rows={8} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold outline-none resize-none focus:border-blue-500" value={editingInitiative.content} onChange={(e) => setEditingInitiative({...editingInitiative, content: e.target.value})} />
                </div>
             </div>
             <div className="p-8 border-t border-slate-100 bg-slate-50 flex gap-4">
                <button onClick={() => setIsEditModalOpen(false)} className="flex-1 py-4 border border-slate-200 rounded-2xl font-black text-slate-400 hover:bg-white transition-all">Hủy</button>
                <button onClick={saveInitiative} className="flex-[2] py-4 bg-blue-600 text-white rounded-2xl font-black shadow-xl hover:bg-blue-700 transition-all">Lưu thông tin</button>
             </div>
          </div>
        </div>
      )}

      {/* VIEW MODAL */}
      {viewingInitiative && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-xl animate-in zoom-in">
           <div className="bg-white rounded-[4rem] w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
              <div className="p-12 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                 <div className="flex items-center gap-6">
                    <div className="bg-blue-600 p-5 rounded-3xl text-white"><Lightbulb size={36} /></div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-blue-500 tracking-widest">Innovation Hub Archive</p>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tight">Chi tiết sáng kiến</h3>
                    </div>
                 </div>
                 <button onClick={() => setViewingInitiative(null)} className="p-4 bg-white rounded-2xl text-slate-400 hover:text-rose-500 shadow-sm border border-slate-100 transition-all"><X size={28} /></button>
              </div>
              <div className="p-12 overflow-y-auto flex-1 space-y-8 custom-scrollbar">
                 <h1 className="text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">{viewingInitiative.title}</h1>
                 <div className="flex items-center gap-4 py-4 px-6 bg-slate-50 rounded-2xl w-fit">
                    <Users size={20} className="text-blue-500" />
                    <span className="font-black text-slate-700">{Array.isArray(viewingInitiative.authors) ? viewingInitiative.authors.join(', ') : viewingInitiative.authors}</span>
                 </div>
                 <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-inner">
                    <p className="text-xl text-slate-700 leading-relaxed font-medium whitespace-pre-wrap">{viewingInitiative.content}</p>
                 </div>
              </div>
              {user && (
                <div className="p-10 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
                   <p className="text-[10px] font-bold text-slate-400 italic">Phiên làm việc Quản trị viên</p>
                   <button onClick={() => handleEditInitiative(viewingInitiative)} className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2">Sửa nội dung <Edit size={16}/></button>
                </div>
              )}
           </div>
        </div>
      )}
    </div>
  );
};

export default App;
