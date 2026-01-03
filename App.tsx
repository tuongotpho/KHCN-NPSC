
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
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
  orderBy
} from "firebase/firestore";
import { Initiative, ChatMessage, AnalysisResult, InitiativeLevel } from './types';
import { 
  Search, Filter, BrainCircuit, MessageSquare, Plus, Send, 
  BarChart3, Lightbulb, Clock, LayoutDashboard, X, Sparkles, 
  Edit3, Trash2, Eye, Save, User, Building2, Trophy, 
  FileText, Upload, PieChart, Target, FileCheck, Check, Loader2 
} from 'lucide-react';

// FIREBASE CONFIGURATION
const firebaseConfig = {
  apiKey: "AIzaSyD_0AkyF0VHWWjqiX_ZE1KapQ72kgbM--Q",
  authDomain: "dashboard-8787.firebaseapp.com",
  projectId: "dashboard-8787",
  storageBucket: "dashboard-8787.firebasestorage.app",
  messagingSenderId: "544276859484",
  appId: "1:544276859484:web:973ad657ff87044349b499",
  measurementId: "G-GS3R89R7ZY"
};

// Singleton pattern for Firebase initialization
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(firebaseApp);

const App: React.FC = () => {
  const [initiatives, setInitiatives] = useState<Initiative[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'list' | 'stats'>('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedUnit, setSelectedUnit] = useState<string>('All');
  const [selectedLevels, setSelectedLevels] = useState<InitiativeLevel[]>([]);
  
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const [analyzingId, setAnalyzingId] = useState<string | null>(null);
  const [analysisResults, setAnalysisResults] = useState<Record<string, AnalysisResult>>({});
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingInitiative, setEditingInitiative] = useState<any | null>(null);
  const [viewingInitiative, setViewingInitiative] = useState<Initiative | null>(null);
  const [isProcessingFile, setIsProcessingFile] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // REAL-TIME DATA FETCHING FROM FIRESTORE
  useEffect(() => {
    try {
      const q = query(collection(db, "initiatives"), orderBy("year", "desc"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const items: Initiative[] = [];
        querySnapshot.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id } as Initiative);
        });
        setInitiatives(items);
        setLoading(false);
      }, (error) => {
        console.error("Firestore error:", error);
        setLoading(false);
      });
      return () => unsubscribe();
    } catch (e) {
      console.error("Failed to connect to Firestore:", e);
      setLoading(false);
    }
  }, []);

  const years = useMemo(() => {
    const yearStrings = initiatives.map(i => i.year.toString());
    const uniqueYears = Array.from(new Set(yearStrings));
    return ['All', ...uniqueYears].sort((a, b) => b.localeCompare(a));
  }, [initiatives]);

  const units = useMemo(() => {
    const unitStrings = initiatives.map(i => i.unit);
    const uniqueUnits = Array.from(new Set(unitStrings));
    return ['All', ...uniqueUnits].sort();
  }, [initiatives]);

  const openAdd = () => {
    setEditingInitiative({
      title: '',
      content: '',
      year: new Date().getFullYear(),
      authors: '',
      unit: '',
      field: '',
      level: ['NPSC']
    });
    setIsModalOpen(true);
  };

  const openEdit = (initiative: Initiative) => {
    setEditingInitiative({
      ...initiative,
      authors: Array.isArray(initiative.authors) ? initiative.authors.join(', ') : initiative.authors
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Xóa sáng kiến này khỏi hệ thống Cloud?')) {
      try {
        await deleteDoc(doc(db, "initiatives", id));
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
  };

  const filteredInitiatives = useMemo(() => {
    return initiatives.filter(i => {
      const matchesSearch = 
        i.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        i.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (Array.isArray(i.authors) && i.authors.some(a => a.toLowerCase().includes(searchTerm.toLowerCase())));
      const matchesYear = selectedYear === 'All' || i.year.toString() === selectedYear;
      const matchesUnit = selectedUnit === 'All' || i.unit === selectedUnit;
      const matchesLevel = selectedLevels.length === 0 || i.level.some(l => selectedLevels.includes(l));
      return matchesSearch && matchesYear && matchesUnit && matchesLevel;
    });
  }, [searchTerm, selectedYear, selectedUnit, selectedLevels, initiatives]);

  const getAiInstance = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsProcessingFile(true);
    const ai = getAiInstance();
    const prompt = `Trích xuất thông tin sáng kiến từ tệp: ${file.name}. Trả về JSON: {title, content, authors:[], field, unit, suggestedLevels:[]}`;
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: { responseMimeType: "application/json" }
      });
      const result = JSON.parse(response.text || '{}');
      if (editingInitiative) {
        setEditingInitiative({
          ...editingInitiative,
          title: result.title || '',
          content: result.content || '',
          authors: Array.isArray(result.authors) ? result.authors.join(', ') : result.authors || '',
          field: result.field || '',
          unit: result.unit || '',
          level: result.suggestedLevels || ['NPSC']
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsProcessingFile(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const toggleLevelFilter = (level: InitiativeLevel) => {
    setSelectedLevels(prev => prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]);
  };

  const analyzeInitiative = async (initiative: Initiative) => {
    setAnalyzingId(initiative.id);
    const ai = getAiInstance();
    const prompt = `Phân tích sáng kiến "${initiative.title}". So sánh với kho dữ liệu. Trả về JSON: { evaluation, similarity: { isDuplicate, score, reason } }`;
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: { responseMimeType: "application/json" }
      });
      const result = JSON.parse(response.text || '{}');
      setAnalysisResults(prev => ({ ...prev, [initiative.id]: result }));
    } catch (error) {
      console.error(error);
    } finally {
      setAnalyzingId(null);
    }
  };

  const handleSaveInitiative = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingInitiative) return;
    const authorsArr = typeof editingInitiative.authors === 'string' 
      ? editingInitiative.authors.split(',').map((s: string) => s.trim()).filter((s: string) => s) 
      : editingInitiative.authors || [];

    const finalData = {
      ...editingInitiative,
      year: Number(editingInitiative.year),
      authors: authorsArr,
      level: editingInitiative.level || ['NPSC']
    };
    delete finalData.id;

    try {
      if (editingInitiative.id) {
        await updateDoc(doc(db, "initiatives", editingInitiative.id), finalData);
      } else {
        await addDoc(collection(db, "initiatives"), finalData);
      }
      setIsModalOpen(false);
      setEditingInitiative(null);
    } catch (error) {
      console.error("Save error:", error);
      alert("Lỗi khi kết nối Cloud Firestore. Hãy kiểm tra lại cấu hình Firebase của bạn.");
    }
  };

  const statsData = useMemo(() => {
    const levelCounts: Record<InitiativeLevel, number> = { NPSC: 0, NPC: 0, EVN: 0 };
    const yearCounts: Record<number, number> = {};
    const unitCounts: Record<string, number> = {};
    initiatives.forEach(i => {
      if (Array.isArray(i.level)) i.level.forEach(lvl => { if (levelCounts[lvl] !== undefined) levelCounts[lvl]++; });
      yearCounts[i.year] = (yearCounts[i.year] || 0) + 1;
      unitCounts[i.unit] = (unitCounts[i.unit] || 0) + 1;
    });
    return { levelCounts, yearCounts, unitCounts };
  }, [initiatives]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center gap-6 text-white font-inter">
        <Loader2 className="w-16 h-16 text-blue-500 animate-spin" />
        <p className="text-slate-400 font-bold tracking-widest uppercase text-xs">Đang đồng bộ Cloud Firestore...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#f8fafc] text-slate-900 font-inter">
      {/* SIDEBAR */}
      <aside className="w-full lg:w-72 bg-[#0f172a] text-white p-6 flex-shrink-0 flex flex-col shadow-2xl z-20">
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-blue-600 p-3 rounded-2xl shadow-lg"><Lightbulb className="w-6 h-6" /></div>
          <h1 className="font-black text-xl tracking-tight">NPSC<span className="text-blue-400">Hub</span></h1>
        </div>
        <nav className="space-y-2 flex-1">
          <button onClick={() => setActiveTab('list')} className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl font-bold transition-all ${activeTab === 'list' ? 'bg-blue-600/10 text-blue-400' : 'text-slate-400 hover:text-white'}`}>
            <LayoutDashboard className="w-5 h-5" /> Danh mục
          </button>
          <button onClick={() => setActiveTab('stats')} className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl font-bold transition-all ${activeTab === 'stats' ? 'bg-blue-600/10 text-blue-400' : 'text-slate-400 hover:text-white'}`}>
            <BarChart3 className="w-5 h-5" /> Thống kê
          </button>
        </nav>
        <div className="mt-auto bg-slate-800/30 p-5 rounded-3xl border border-slate-700/50">
          <p className="text-[10px] text-emerald-400 font-black uppercase mb-1">Live Connected</p>
          <p className="text-[10px] text-slate-500 leading-relaxed font-medium">Dữ liệu được lưu trữ an toàn trên Cloud Firestore.</p>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto max-h-screen custom-scrollbar">
        {activeTab === 'list' ? (
          <>
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div>
                <h2 className="text-4xl font-black text-slate-800 tracking-tight">Kho Sáng Kiến</h2>
                <p className="text-slate-500 font-medium mt-1">Tìm thấy {filteredInitiatives.length} sáng kiến trên hệ thống</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-full sm:w-72">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input type="text" placeholder="Tìm kiếm..." className="pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl w-full shadow-sm outline-none font-medium text-sm focus:border-blue-500" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <button onClick={openAdd} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 shadow-xl shadow-blue-500/30 transition-all w-full sm:w-auto justify-center">
                  <Plus className="w-6 h-6" /> THÊM MỚI
                </button>
              </div>
            </header>

            {/* FILTERS */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <div className="flex bg-white p-1 rounded-2xl border border-slate-200 shadow-sm">
                {(['NPSC', 'NPC', 'EVN'] as InitiativeLevel[]).map(lvl => (
                  <button key={lvl} onClick={() => toggleLevelFilter(lvl)} className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${selectedLevels.includes(lvl) ? 'bg-slate-900 text-white' : 'text-slate-400 hover:bg-slate-50'}`}>
                    {lvl}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl border border-slate-200 shadow-sm">
                <Clock className="w-4 h-4 text-slate-400" />
                <select className="bg-transparent border-none outline-none text-xs font-bold text-slate-700 cursor-pointer" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                  {years.map(y => <option key={y} value={y}>{y === 'All' ? 'Tất cả năm' : `Năm ${y}`}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {filteredInitiatives.map((item) => (
                <div key={item.id} className="bg-white rounded-[40px] border border-slate-200 shadow-sm hover:shadow-2xl transition-all group overflow-hidden flex flex-col">
                  <div className="p-8 pb-4 flex-1">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-2">
                        {item.level.map(lvl => <span key={lvl} className="text-[10px] font-black px-3 py-1.5 rounded-xl uppercase border bg-blue-50 text-blue-600 border-blue-100">{lvl}</span>)}
                        <span className="bg-slate-50 text-slate-500 text-[10px] font-black px-3 py-1.5 rounded-xl border border-slate-200">{item.year}</span>
                      </div>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
                        <button onClick={() => setViewingInitiative(item)} className="p-2 text-slate-400 hover:text-blue-600"><Eye className="w-5 h-5" /></button>
                        <button onClick={() => openEdit(item)} className="p-2 text-slate-400 hover:text-amber-600"><Edit3 className="w-5 h-5" /></button>
                        <button onClick={() => handleDelete(item.id)} className="p-2 text-slate-400 hover:text-red-600"><Trash2 className="w-5 h-5" /></button>
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-blue-600 leading-tight line-clamp-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm mb-8 line-clamp-3 leading-relaxed">{item.content}</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-blue-500 shrink-0"><User className="w-4 h-4" /></div>
                      <p className="text-xs text-slate-700 font-bold truncate">{Array.isArray(item.authors) ? item.authors.join(', ') : item.authors}</p>
                    </div>
                  </div>
                  <div className="px-8 py-6 bg-slate-50/50 border-t border-slate-100 flex justify-end">
                    <button onClick={() => analyzeInitiative(item)} disabled={analyzingId === item.id} className="bg-slate-900 text-white px-6 py-2.5 rounded-2xl text-[10px] font-black tracking-widest hover:bg-blue-600 transition-all flex items-center gap-2">
                      {analyzingId === item.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <BrainCircuit className="w-4 h-4" />} KIỂM TRÙNG AI
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>
            <h2 className="text-4xl font-black text-slate-800 tracking-tight mb-8">Thống kê & Báo cáo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Tổng sáng kiến</p>
                <h4 className="text-6xl font-black text-slate-800">{initiatives.length}</h4>
              </div>
              <div className="bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Cấp EVN/NPC</p>
                <h4 className="text-6xl font-black text-slate-800">{statsData.levelCounts.EVN + statsData.levelCounts.NPC}</h4>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FORM MODAL */}
      {isModalOpen && editingInitiative && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-[48px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-10 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h2 className="text-3xl font-black text-slate-800">Cập nhật Sáng kiến</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-3 text-slate-400"><X className="w-7 h-7" /></button>
            </div>
            <form onSubmit={handleSaveInitiative} className="p-10 overflow-y-auto space-y-6">
              <div className="space-y-4">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Tiêu đề sáng kiến</label>
                <input required className="w-full px-7 py-5 rounded-2xl bg-slate-50 border border-slate-200 outline-none font-bold" value={editingInitiative.title} onChange={e => setEditingInitiative({...editingInitiative, title: e.target.value})} />
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Nội dung giải pháp</label>
                <textarea required rows={5} className="w-full px-7 py-5 rounded-3xl bg-slate-50 border border-slate-200 outline-none" value={editingInitiative.content} onChange={e => setEditingInitiative({...editingInitiative, content: e.target.value})} />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Năm</label>
                  <input type="number" required className="w-full px-7 py-4 rounded-2xl bg-slate-50 border border-slate-200" value={editingInitiative.year} onChange={e => setEditingInitiative({...editingInitiative, year: e.target.value})} />
                </div>
                <div className="space-y-4">
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Đơn vị</label>
                  <input required className="w-full px-7 py-4 rounded-2xl bg-slate-50 border border-slate-200" value={editingInitiative.unit} onChange={e => setEditingInitiative({...editingInitiative, unit: e.target.value})} />
                </div>
              </div>
              <div className="pt-8 flex justify-end gap-5">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-10 py-5 font-black text-sm text-slate-500">HỦY</button>
                <button type="submit" className="px-12 py-5 rounded-3xl bg-blue-600 text-white font-black text-sm shadow-xl shadow-blue-500/30">LƯU CLOUD</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
      `}} />
    </div>
  );
};

export default App;
