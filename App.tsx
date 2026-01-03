
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
  writeBatch,
  setDoc
} from "firebase/firestore";
import { Initiative, ChatMessage, InitiativeLevel } from './types';
import { 
  Search, BrainCircuit, Plus, Send, 
  LayoutDashboard, X, Trash2, Eye, Save, Building2, 
  Loader2, FileUp, Database, TrendingUp, Users, Calendar, 
  ArrowRight, Bot, Upload, FileWarning, Filter, Tag, Lightbulb,
  Edit, Paperclip, FileText, CheckCircle2, Award, BarChart3, 
  Zap, PieChart, Activity, Sparkles, ChevronRight, Layers, Target, Focus
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

const LEVEL_COLORS: Record<InitiativeLevel, string> = {
  'HLH': 'bg-slate-500',
  'NPSC': 'bg-blue-600',
  'NPC': 'bg-indigo-700',
  'EVN': 'bg-purple-800'
};

const App: React.FC = () => {
  const [initiatives, setInitiatives] = useState<Initiative[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'list' | 'stats' | 'chat'>('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevels, setSelectedLevels] = useState<InitiativeLevel[]>([]);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [drillDownUnit, setDrillDownUnit] = useState<string | null>(null);
  const [aiInsight, setAiInsight] = useState<string>('');
  const [isGeneratingInsight, setIsGeneratingInsight] = useState(false);
  
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
  
  const [batchResults, setBatchResults] = useState<any[]>([]);
  const [isBatchProcessing, setIsBatchProcessing] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = query(collection(db, "initiatives"), orderBy("year", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items: Initiative[] = [];
      querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id } as Initiative);
      });
      setInitiatives(items);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const dashboardStats = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const lastYear = currentYear - 1;

    const total = initiatives.length;
    const currentYearCount = initiatives.filter(i => i.year === currentYear).length;
    const lastYearCount = initiatives.filter(i => i.year === lastYear).length;
    
    const growth = lastYearCount === 0 ? 100 : Math.round(((currentYearCount - lastYearCount) / lastYearCount) * 100);

    const levelDist = initiatives.reduce((acc, curr) => {
      (curr.level || []).forEach(l => {
        acc[l] = (acc[l] || 0) + 1;
      });
      return acc;
    }, {} as Record<string, number>);

    const unitDist = initiatives.reduce((acc, curr) => {
      if (curr.unit) {
        acc[curr.unit] = (acc[curr.unit] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);
    const topUnits = Object.entries(unitDist)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 8); // Tăng lên 8 để xem nhiều hơn

    const yearDist = initiatives.reduce((acc, curr) => {
      acc[curr.year] = (acc[curr.year] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

    // Thống kê theo lĩnh vực (Field Distribution)
    const fieldDist = initiatives.reduce((acc, curr) => {
      const field = curr.field || 'Chưa phân loại';
      acc[field] = (acc[field] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return { total, currentYearCount, growth, levelDist, topUnits, yearDist, fieldDist };
  }, [initiatives]);

  // Dữ liệu Drill-down cho đơn vị đang chọn
  const unitDetailStats = useMemo(() => {
    if (!drillDownUnit) return null;
    const unitInits = initiatives.filter(i => i.unit === drillDownUnit);
    const levels = unitInits.reduce((acc, curr) => {
      (curr.level || []).forEach(l => {
        acc[l] = (acc[l] || 0) + 1;
      });
      return acc;
    }, {} as Record<string, number>);
    const years = unitInits.reduce((acc, curr) => {
      acc[curr.year] = (acc[curr.year] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);
    return { count: unitInits.length, levels, years };
  }, [drillDownUnit, initiatives]);

  const generateLeadershipInsight = async () => {
    if (isGeneratingInsight || initiatives.length === 0) return;
    setIsGeneratingInsight(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const dataSummary = initiatives.map(i => `- ${i.title} (${i.level?.join(',')}): ${i.content.substring(0, 50)}`).join('\n');
    
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Dưới đây là danh sách sáng kiến của công ty:\n${dataSummary}\n\nHãy phân tích xu hướng sáng kiến, chỉ ra các mảng đang được quan tâm nhiều và đưa ra lời khuyên về hướng thúc đẩy đổi mới sáng tạo tiếp theo. Trình bày ngắn gọn, chuyên nghiệp cho cấp quản lý.`,
        config: { systemInstruction: "Bạn là chuyên gia phân tích dữ liệu KHCN cấp cao. Trình bày bằng tiếng Việt, súc tích, có các đầu mục rõ ràng." }
      });
      setAiInsight(response.text || 'Không thể tạo nhận xét vào lúc này.');
    } catch (e) {
      setAiInsight('Lỗi kết nối AI khi tạo nhận xét chiến lược.');
    } finally {
      setIsGeneratingInsight(false);
    }
  };

  const handleEditInitiative = (init: Initiative) => {
    setEditingInitiative({ ...init });
    setIsEditModalOpen(true);
  };

  const handleAddNew = () => {
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

  const toggleLevelInEdit = (lvl: InitiativeLevel) => {
    if (!editingInitiative) return;
    const currentLevels = editingInitiative.level || [];
    const newLevels = currentLevels.includes(lvl)
      ? currentLevels.filter(l => l !== lvl)
      : [...currentLevels, lvl];
    setEditingInitiative({ ...editingInitiative, level: newLevels });
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

  const toggleLevelFilter = (level: InitiativeLevel) => {
    setSelectedLevels(prev => 
      prev.includes(level) 
        ? prev.filter(l => l !== level) 
        : [...prev, level]
    );
  };

  const handleFilterByLevel = (level: InitiativeLevel) => {
    setSelectedLevels([level]);
    setSelectedUnit(null);
    setActiveTab('list');
  };

  const handleFilterByUnit = (unit: string) => {
    setSelectedUnit(unit);
    setSelectedLevels([]);
    setActiveTab('list');
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsBatchProcessing(true);
    const reader = new FileReader();
    reader.onload = async () => {
      const result = reader.result as string;
      const base64Data = result.split(',')[1];
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: {
            parts: [
              { inlineData: { mimeType: 'application/pdf', data: base64Data } },
              { text: "Hãy trích xuất danh sách các sáng kiến từ tệp PDF này. Trả về một mảng JSON các đối tượng. Mỗi đối tượng có các thuộc tính: title, content, authors (mảng string), unit, year (number), level (mảng các chuỗi thuộc ['HLH', 'NPSC', 'NPC', 'EVN']), field (chuỗi lĩnh vực)." }
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
                  content: { type: Type.STRING },
                  authors: { type: Type.ARRAY, items: { type: Type.STRING } },
                  unit: { type: Type.STRING },
                  year: { type: Type.NUMBER },
                  level: { type: Type.ARRAY, items: { type: Type.STRING } },
                  field: { type: Type.STRING },
                },
                required: ["title", "content", "authors", "unit", "year", "level"]
              }
            }
          }
        });

        const extractedData = JSON.parse(response.text || '[]');
        if (extractedData && Array.isArray(extractedData) && extractedData.length > 0) {
          const batch = writeBatch(db);
          extractedData.forEach((item: any) => {
            const newDocRef = doc(collection(db, "initiatives"));
            batch.set(newDocRef, item);
          });
          await batch.commit();
          alert(`Đã nhập thành công ${extractedData.length} sáng kiến.`);
        }
      } catch (error) {
        console.error("AI Error:", error);
        alert("Lỗi khi xử lý PDF.");
      } finally {
        setIsBatchProcessing(false);
        setIsBatchModalOpen(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSendMessage = async () => {
    if (!userInput.trim() || isTyping) return;
    const newMessages: ChatMessage[] = [...chatMessages, { role: 'user', text: userInput }];
    setChatMessages(newMessages);
    setUserInput('');
    setIsTyping(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const context = initiatives.map(i => `- [${i.level?.join(',')}] ${i.title} (${i.year}): ${i.content.substring(0, 150)}`).join('\n');
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Dữ liệu sáng kiến hiện có:\n${context}\n\nCâu hỏi: ${userInput}`,
        config: { systemInstruction: "Bạn là trợ lý NPSC Hub. Hỗ trợ tra cứu, đánh giá sự trùng lặp và tóm tắt sáng kiến." }
      });
      setChatMessages([...newMessages, { role: 'model', text: response.text || "Không có phản hồi." }]);
    } catch (error) {
      setChatMessages([...newMessages, { role: 'model', text: "Lỗi kết nối AI." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#f8fafc]">
      <aside className="w-full lg:w-80 bg-slate-900 text-white lg:sticky lg:top-0 lg:h-screen flex flex-col p-8 z-30 shadow-2xl">
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-gradient-to-br from-blue-400 to-indigo-600 p-3 rounded-2xl shadow-lg shadow-blue-500/20">
            <BrainCircuit size={28} className="text-white" />
          </div>
          <div>
            <h1 className="font-extrabold text-2xl tracking-tighter text-white">NPSC Hub</h1>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Executive Mode</p>
            </div>
          </div>
        </div>
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
        <div className="mt-auto pt-6 border-t border-slate-800 space-y-3">
          <button onClick={handleAddNew} className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-4 rounded-2xl font-black hover:bg-slate-100 transition-all">
            <Plus size={20} /> Thêm mới
          </button>
          <button onClick={() => setIsBatchModalOpen(true)} className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-2xl font-black hover:bg-blue-500 transition-all">
            <FileUp size={20} /> Nhập PDF (AI)
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 lg:p-10 flex flex-col gap-8 overflow-y-auto">
        <header className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight uppercase">
              {activeTab === 'list' ? 'Kho sáng kiến' : activeTab === 'stats' ? 'Thống kê sáng kiến' : 'Hỏi đáp AI'}
            </h2>
            {activeTab === 'list' && (
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Tìm kiếm..."
                  className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 shadow-sm font-medium"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            )}
          </div>

          {activeTab === 'list' && (
            <div className="flex flex-wrap items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 text-slate-400 mr-2 font-bold text-sm uppercase">
                <Filter size={16} /> Lọc:
              </div>
              {(['HLH', 'NPSC', 'NPC', 'EVN'] as InitiativeLevel[]).map(lvl => (
                <button
                  key={lvl}
                  onClick={() => toggleLevelFilter(lvl)}
                  className={`px-5 py-2 rounded-xl text-xs font-black transition-all border-2 ${
                    selectedLevels.includes(lvl) 
                    ? `${LEVEL_COLORS[lvl]} text-white border-transparent shadow-lg scale-105` 
                    : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'
                  }`}
                >
                  {lvl}
                </button>
              ))}
              {selectedUnit && (
                <div className="bg-indigo-50 text-indigo-700 border border-indigo-200 px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 animate-slide">
                  <Building2 size={14} /> {selectedUnit}
                  <button onClick={() => setSelectedUnit(null)} className="hover:text-rose-500 transition-colors"><X size={14}/></button>
                </div>
              )}
              {(selectedLevels.length > 0 || selectedUnit) && (
                <button onClick={() => { setSelectedLevels([]); setSelectedUnit(null); }} className="ml-auto text-xs font-bold text-rose-500 hover:underline">Xóa tất cả lọc</button>
              )}
            </div>
          )}
        </header>

        {activeTab === 'list' ? (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {filteredInitiatives.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl transition-all group animate-slide">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-900 text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase shadow-sm">{item.year}</span>
                    {item.level?.map(lvl => (
                      <span key={lvl} className={`${LEVEL_COLORS[lvl as InitiativeLevel] || 'bg-slate-400'} text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase shadow-sm`}>
                        {lvl}
                      </span>
                    ))}
                    {item.unit && (
                      <span className="bg-indigo-50 text-indigo-700 border border-indigo-100 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase flex items-center gap-1.5 shadow-sm">
                        <Building2 size={10} className="shrink-0" />
                        <span className="truncate max-w-[120px]">{item.unit}</span>
                      </span>
                    )}
                    {item.field && (
                      <span className="bg-amber-50 text-amber-700 border border-amber-100 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase flex items-center gap-1 shadow-sm">
                        <Target size={10} /> {item.field}
                      </span>
                    )}
                    {item.attachmentName && (
                      <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase flex items-center gap-1 shadow-sm">
                        <Paperclip size={10} /> PDF
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => handleEditInitiative(item)} className="p-2.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-xl transition-all"><Edit size={18} /></button>
                    <button onClick={() => { if(confirm('Xóa?')) deleteDoc(doc(db, "initiatives", item.id)); }} className="p-2.5 bg-rose-50 text-rose-400 hover:text-rose-600 rounded-xl transition-all"><Trash2 size={18} /></button>
                  </div>
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
            {filteredInitiatives.length === 0 && !loading && (
              <div className="col-span-full py-20 text-center">
                <FileWarning size={48} className="mx-auto text-slate-200 mb-4" />
                <p className="text-slate-400 font-bold">Không tìm thấy sáng kiến nào phù hợp.</p>
              </div>
            )}
          </div>
        ) : activeTab === 'stats' ? (
          <div className="space-y-10 animate-slide">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div 
                onClick={() => { setSelectedLevels([]); setSelectedUnit(null); setActiveTab('list'); }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors"><Zap size={24} /></div>
                <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">Tổng sáng kiến</p>
                <h4 className="text-4xl font-black text-slate-900">{dashboardStats.total}</h4>
                <div className="mt-2 text-xs font-bold text-emerald-500 flex items-center gap-1">
                  <TrendingUp size={12} /> {dashboardStats.growth}% so với năm trước
                </div>
              </div>
              <div 
                onClick={() => handleFilterByLevel('EVN')}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl mb-4 group-hover:bg-purple-800 group-hover:text-white transition-colors"><Award size={24} /></div>
                <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">Cấp Tập đoàn (EVN)</p>
                <h4 className="text-4xl font-black text-slate-900">{dashboardStats.levelDist['EVN'] || 0}</h4>
                <p className="text-xs text-slate-400 mt-2 font-medium">Bấm để lọc xem danh sách</p>
              </div>
              <div 
                onClick={() => handleFilterByLevel('NPC')}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl mb-4 group-hover:bg-indigo-700 group-hover:text-white transition-colors"><Building2 size={24} /></div>
                <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">Cấp Tổng công ty</p>
                <h4 className="text-4xl font-black text-slate-900">{dashboardStats.levelDist['NPC'] || 0}</h4>
                <p className="text-xs text-slate-400 mt-2 font-medium">Bấm để lọc xem danh sách</p>
              </div>
              <div 
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center"
              >
                <div className="p-4 bg-amber-50 text-amber-600 rounded-2xl mb-4"><Activity size={24} /></div>
                <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">Sáng kiến {new Date().getFullYear()}</p>
                <h4 className="text-4xl font-black text-slate-900">{dashboardStats.currentYearCount}</h4>
                <p className="text-xs text-slate-400 mt-2 font-medium">Sáng kiến mới nhất</p>
              </div>
            </div>

            {/* Main Insights Grid - DRILL DOWN & HEATMAP */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Unit Performance (Drill-down UX) */}
              <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-black text-slate-900 uppercase">Phân bổ theo Đơn vị</h3>
                    {drillDownUnit && (
                      <button 
                        onClick={() => setDrillDownUnit(null)}
                        className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black text-slate-500 hover:bg-slate-200"
                      >
                        <X size={10} /> Xóa drill-down
                      </button>
                    )}
                  </div>
                  <Focus size={20} className="text-slate-300" />
                </div>
                
                <div className="flex-1 space-y-6">
                  {!drillDownUnit ? (
                    dashboardStats.topUnits.map(([unit, count], idx) => (
                      <div 
                        key={unit} 
                        className="space-y-2 cursor-pointer group/unit"
                        onClick={() => setDrillDownUnit(unit)}
                      >
                        <div className="flex justify-between items-center text-sm font-bold">
                          <span className="text-slate-700 group-hover/unit:text-blue-600 transition-colors flex items-center gap-2">
                            {unit} <ChevronRight size={14} className="opacity-0 group-hover/unit:opacity-100 translate-x-[-4px] group-hover/unit:translate-x-0 transition-all"/>
                          </span>
                          <span className="text-blue-600">{count} sáng kiến</span>
                        </div>
                        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${idx === 0 ? 'from-blue-600 to-indigo-600' : 'from-slate-400 to-slate-500'} rounded-full group-hover/unit:from-blue-500 group-hover/unit:to-blue-600 transition-all`}
                            style={{ width: `${(count / (dashboardStats.topUnits[0][1] as number)) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="animate-slide space-y-8">
                      <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-black uppercase text-blue-400 mb-1">Đang xem chi tiết</p>
                          <h4 className="text-2xl font-black text-blue-900 uppercase tracking-tight">{drillDownUnit}</h4>
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-black text-blue-600">{unitDetailStats?.count}</p>
                          <p className="text-[10px] font-bold text-blue-400">Sáng kiến tổng cộng</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <p className="text-xs font-black uppercase text-slate-400 mb-4">Phân bổ cấp độ</p>
                          <div className="space-y-3">
                            {Object.entries(unitDetailStats?.levels || {}).map(([lvl, count]) => (
                              <div key={lvl} className="flex items-center gap-3">
                                <div className={`w-3 h-3 rounded-full ${LEVEL_COLORS[lvl as InitiativeLevel]}`}></div>
                                <span className="text-xs font-black text-slate-600 uppercase flex-1">{lvl}</span>
                                <span className="text-xs font-black text-slate-900">{count}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase text-slate-400 mb-4">Lịch sử năm</p>
                          <div className="flex items-end gap-2 h-20">
                            {Object.entries(unitDetailStats?.years || {}).sort().map(([year, count]) => (
                              <div key={year} className="flex-1 flex flex-col items-center gap-2 group/bar">
                                <div className="w-full bg-blue-200 group-hover/bar:bg-blue-600 rounded-md relative transition-all" style={{ height: `${(count / Math.max(...Object.values(unitDetailStats?.years || {1:1}))) * 100}%` }}>
                                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-black opacity-0 group-hover/bar:opacity-100 transition-opacity">{count}</div>
                                </div>
                                <span className="text-[8px] font-bold text-slate-400">{year}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <button 
                        onClick={() => handleFilterByUnit(drillDownUnit)}
                        className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:bg-blue-600 transition-all"
                      >
                        Xem danh sách sáng kiến {drillDownUnit} <ArrowRight size={16} />
                      </button>
                    </div>
                  )}
                  {dashboardStats.topUnits.length === 0 && !drillDownUnit && <p className="text-center py-10 text-slate-400 italic">Chưa có dữ liệu đơn vị</p>}
                </div>
              </div>

              {/* Innovation Heatmap (Field Distribution) */}
              <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-black text-slate-900 uppercase">Lĩnh vực Đổi mới</h3>
                  <Target size={20} className="text-slate-300" />
                </div>
                
                <div className="flex-1 flex flex-wrap gap-3 content-start">
                  {Object.entries(dashboardStats.fieldDist).sort((a,b) => b[1] - a[1]).map(([field, count]) => {
                    const intensity = (count / Math.max(...Object.values(dashboardStats.fieldDist))) * 100;
                    return (
                      <div 
                        key={field} 
                        className={`flex-1 min-w-[120px] p-4 rounded-2xl border transition-all hover:scale-105 cursor-default flex flex-col items-center text-center justify-center space-y-1 shadow-sm ${
                          intensity > 70 ? 'bg-indigo-600 text-white border-transparent' : 
                          intensity > 30 ? 'bg-indigo-50 text-indigo-700 border-indigo-100' : 
                          'bg-slate-50 text-slate-500 border-slate-100'
                        }`}
                      >
                        <span className="text-[10px] font-black uppercase tracking-tight line-clamp-1">{field}</span>
                        <span className={`text-xl font-black ${intensity > 70 ? 'text-white' : 'text-indigo-600'}`}>{count}</span>
                      </div>
                    )
                  })}
                  {Object.keys(dashboardStats.fieldDist).length === 0 && <p className="w-full text-center text-slate-400 py-10">Chưa phân loại lĩnh vực</p>}
                </div>

                <div className="mt-8 pt-8 border-t border-slate-50">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-3xl text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                      <Bot size={48} />
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-xs font-black uppercase mb-2">AI Strategic Advice</h4>
                      {aiInsight ? (
                        <p className="text-[10px] leading-relaxed italic text-slate-300 line-clamp-4">{aiInsight}</p>
                      ) : (
                        <p className="text-[10px] leading-relaxed text-slate-400">Bấm phân tích để nhận lời khuyên chiến lược từ AI dựa trên phân bổ lĩnh vực.</p>
                      )}
                      <button 
                        onClick={generateLeadershipInsight}
                        disabled={isGeneratingInsight}
                        className="mt-4 text-[10px] font-black text-blue-400 hover:text-blue-300 flex items-center gap-1"
                      >
                        {isGeneratingInsight ? <Loader2 size={10} className="animate-spin" /> : <Sparkles size={10} />}
                        {aiInsight ? 'Cập nhật phân tích' : 'Phân tích ngay'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Historical Trend - IMPROVED COMPARISON */}
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl"><TrendingUp size={20} /></div>
                   <h3 className="text-xl font-black text-slate-900 uppercase">Xu hướng Tăng trưởng Sáng kiến</h3>
                </div>
                <div className="flex gap-4">
                   <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400"><div className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-sm shadow-blue-500/50"></div> Số lượng đạt được</div>
                </div>
              </div>
              <div className="h-80 flex items-end gap-10 px-6 overflow-x-auto pb-4 custom-scrollbar">
                {Object.entries(dashboardStats.yearDist).sort().map(([year, count]) => {
                  const maxCount = Math.max(...Object.values(dashboardStats.yearDist), 1);
                  const heightPercentage = (count / maxCount) * 100;
                  return (
                    <div key={year} className="flex-1 min-w-[80px] flex flex-col items-center gap-6 group">
                      <div className="relative w-full flex justify-center h-60 items-end">
                        {/* Shadow Column */}
                        <div className="absolute inset-0 bg-slate-50/50 rounded-2xl -z-10 w-16 mx-auto"></div>
                        {/* Main Column */}
                        <div 
                          className="w-16 bg-gradient-to-t from-blue-700 to-blue-500 rounded-2xl group-hover:from-blue-600 group-hover:to-blue-400 transition-all duration-700 relative shadow-xl shadow-blue-500/20"
                          style={{ height: `${heightPercentage}%` }}
                        >
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all text-blue-700 font-black text-sm bg-white px-2 py-1 rounded-lg border border-slate-100 shadow-sm">
                            {count}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-sm font-black text-slate-900 uppercase tracking-tighter">{year}</span>
                        {parseInt(year) === new Date().getFullYear() && <span className="text-[8px] font-black text-emerald-500 uppercase">Hiện tại</span>}
                      </div>
                    </div>
                  );
                })}
                {Object.keys(dashboardStats.yearDist).length === 0 && <p className="w-full text-center text-slate-400 py-10">Chưa có dữ liệu lịch sử</p>}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col h-[70vh] overflow-hidden">
             <div className="p-8 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
                <div className="bg-blue-600 p-3 rounded-2xl"><Bot size={24} className="text-white" /></div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Trợ lý AI NPSC Hub</h3>
             </div>
             <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-6 rounded-[2rem] font-medium ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none shadow-lg' : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && <div className="text-blue-500 animate-pulse font-bold px-6 flex items-center gap-2"><Loader2 className="animate-spin" size={16}/> AI đang xử lý...</div>}
                <div ref={chatEndRef} />
             </div>
             <div className="p-8 border-t border-slate-100">
                <div className="relative">
                   <input 
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Hỏi về sáng kiến, sự trùng lặp hoặc tóm tắt..."
                    className="w-full pl-8 pr-16 py-5 bg-white border border-slate-200 rounded-3xl outline-none focus:border-blue-500 font-bold shadow-sm"
                   />
                   <button onClick={handleSendMessage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 p-3 rounded-2xl text-white shadow-lg hover:bg-blue-700 transition-colors"><Send size={20} /></button>
                </div>
             </div>
          </div>
        )}
      </main>

      {/* MODALS REMAINDERS (EDIT, BATCH, VIEW) */}
      {isEditModalOpen && editingInitiative && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
          <div className="bg-white rounded-[3rem] w-full max-w-2xl max-h-[95vh] shadow-2xl flex flex-col overflow-hidden animate-slide">
             <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{editingInitiative.id ? 'Cập nhật Sáng kiến' : 'Tạo mới Sáng kiến'}</h3>
                <button onClick={() => setIsEditModalOpen(false)} className="p-3 hover:bg-slate-100 rounded-xl transition-colors"><X size={24} /></button>
             </div>
             <div className="p-8 overflow-y-auto flex-1 space-y-6 custom-scrollbar">
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Tên sáng kiến</label>
                   <input className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold focus:border-blue-500 outline-none transition-all" value={editingInitiative.title} onChange={(e) => setEditingInitiative({...editingInitiative, title: e.target.value})} />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Năm</label>
                    <input type="number" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold" value={editingInitiative.year} onChange={(e) => setEditingInitiative({...editingInitiative, year: parseInt(e.target.value)})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Lĩnh vực</label>
                    <input className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold" placeholder="VD: Kỹ thuật, Kinh doanh..." value={editingInitiative.field} onChange={(e) => setEditingInitiative({...editingInitiative, field: e.target.value})} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Đơn vị công tác</label>
                  <input className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold" value={editingInitiative.unit} onChange={(e) => setEditingInitiative({...editingInitiative, unit: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Nhóm tác giả</label>
                  <input className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold" value={Array.isArray(editingInitiative.authors) ? editingInitiative.authors.join(', ') : ''} onChange={(e) => setEditingInitiative({...editingInitiative, authors: e.target.value.split(',').map(s => s.trim())})} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Cấp công nhận</label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {(['HLH', 'NPSC', 'NPC', 'EVN'] as InitiativeLevel[]).map(lvl => (
                      <button key={lvl} onClick={() => toggleLevelInEdit(lvl)} className={`px-5 py-2 rounded-xl text-xs font-black border-2 transition-all ${editingInitiative.level?.includes(lvl) ? `${LEVEL_COLORS[lvl]} text-white border-transparent shadow-md` : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'}`}>{lvl}</button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Mô tả chi tiết</label>
                   <textarea rows={6} className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold outline-none resize-none focus:border-blue-500 transition-all" value={editingInitiative.content} onChange={(e) => setEditingInitiative({...editingInitiative, content: e.target.value})} />
                </div>
             </div>
             <div className="p-8 border-t border-slate-100 bg-slate-50 flex gap-4">
                <button onClick={() => setIsEditModalOpen(false)} className="flex-1 py-4 border border-slate-200 rounded-2xl font-black text-slate-400 hover:bg-white transition-all">Đóng</button>
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
                    <div className="bg-blue-600 p-5 rounded-3xl shadow-lg shadow-blue-500/20"><Lightbulb size={36} className="text-white" /></div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-blue-500 tracking-widest mb-1">Hồ sơ sáng kiến</p>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tight">Chi tiết nội dung</h3>
                    </div>
                 </div>
                 <button onClick={() => setViewingInitiative(null)} className="p-4 bg-white rounded-2xl text-slate-400 hover:text-rose-500 shadow-sm border border-slate-100 transition-all"><X size={28} /></button>
              </div>
              <div className="p-12 overflow-y-auto flex-1 space-y-8 custom-scrollbar">
                 <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-900 text-white px-4 py-1.5 rounded-xl text-xs font-black uppercase">{viewingInitiative.year}</span>
                    {viewingInitiative.level?.map(lvl => (
                      <span key={lvl} className={`${LEVEL_COLORS[lvl as InitiativeLevel]} text-white px-4 py-1.5 rounded-xl text-xs font-black uppercase`}>{lvl}</span>
                    ))}
                    {viewingInitiative.unit && (
                      <span className="bg-indigo-50 text-indigo-700 border border-indigo-100 px-4 py-1.5 rounded-xl text-xs font-black uppercase flex items-center gap-2"><Building2 size={12}/> {viewingInitiative.unit}</span>
                    )}
                    {viewingInitiative.field && (
                      <span className="bg-amber-50 text-amber-700 border border-amber-100 px-4 py-1.5 rounded-xl text-xs font-black uppercase flex items-center gap-2"><Target size={12}/> {viewingInitiative.field}</span>
                    )}
                 </div>
                 <h1 className="text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">{viewingInitiative.title}</h1>
                 <div className="flex items-center gap-4 py-4 px-6 bg-slate-50 rounded-2xl w-fit">
                    <Users size={20} className="text-blue-500" />
                    <span className="font-black text-slate-700">{Array.isArray(viewingInitiative.authors) ? viewingInitiative.authors.join(', ') : viewingInitiative.authors}</span>
                 </div>
                 <div className="prose prose-slate max-w-none">
                    <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-inner">
                       <p className="text-xl text-slate-700 leading-relaxed font-medium whitespace-pre-wrap">{viewingInitiative.content}</p>
                    </div>
                 </div>
              </div>
              <div className="p-10 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
                 <p className="text-[10px] font-bold text-slate-400 italic">Dữ liệu được bảo mật bởi hệ thống NPSC Hub</p>
                 <button onClick={() => handleEditInitiative(viewingInitiative)} className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2">Chỉnh sửa hồ sơ <Edit size={16}/></button>
              </div>
           </div>
        </div>
      )}

      {/* BATCH MODAL */}
      {isBatchModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
          <div className="bg-white rounded-[3rem] w-full max-w-3xl max-h-[90vh] shadow-2xl flex flex-col overflow-hidden animate-slide">
             <div className="p-10 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="p-3 bg-blue-600 rounded-2xl text-white"><FileUp size={28}/></div>
                   <h3 className="text-2xl font-black uppercase tracking-tighter">Nhập dữ liệu hàng loạt AI</h3>
                </div>
                <button onClick={() => setIsBatchModalOpen(false)}><X size={28}/></button>
             </div>
             <div className="p-12 text-center">
                {isBatchProcessing ? (
                  <div className="flex flex-col items-center gap-6 py-10 animate-pulse">
                    <div className="relative">
                       <Loader2 className="animate-spin text-blue-600" size={64} />
                       <Bot className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-600" size={24}/>
                    </div>
                    <p className="font-black text-xl text-slate-900">AI đang quét & trích xuất nội dung từ PDF...</p>
                    <p className="text-slate-500 font-medium max-w-sm mx-auto">Vui lòng không đóng cửa sổ này cho đến khi quá trình hoàn tất.</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-10 p-10 border-4 border-dashed border-slate-100 rounded-[3rem] bg-slate-50/50 group hover:border-blue-200 hover:bg-blue-50 transition-all cursor-pointer relative">
                       <input type="file" id="batch-pdf" hidden accept="application/pdf" onChange={handleFileUpload} />
                       <label htmlFor="batch-pdf" className="cursor-pointer block">
                          <Upload size={56} className="mx-auto text-blue-500 mb-6 group-hover:-translate-y-2 transition-transform" />
                          <p className="text-xl font-black text-slate-900 mb-2">Tải lên tệp PDF danh sách</p>
                          <p className="text-slate-400 font-bold text-sm">Hệ thống AI sẽ tự động phân tích tên, nội dung, tác giả, đơn vị và năm công nhận.</p>
                       </label>
                    </div>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest italic">Hỗ trợ các tệp PDF văn bản chuẩn hóa của TCT/Tập đoàn</p>
                  </>
                )}
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
