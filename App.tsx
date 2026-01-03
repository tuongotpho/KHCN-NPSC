
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
  Edit, Paperclip, FileText, CheckCircle2
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

  const toBase64 = (file: File): Promise<string> => 
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = error => reject(error);
    });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || file.type !== 'application/pdf') {
      alert("Vui lòng tải lên file PDF.");
      return;
    }
    setIsBatchProcessing(true);
    try {
      const base64Data = await toBase64(file);
      await processPdfWithAI(base64Data);
    } catch (error) {
      alert("Lỗi đọc file.");
    } finally {
      setIsBatchProcessing(false);
    }
  };

  const processPdfWithAI = async (base64Data: string) => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = `Phân tích tệp PDF này và trích xuất danh sách các sáng kiến/cải tiến.
    Yêu cầu các trường:
    1. title: Tên sáng kiến.
    2. content: Mô tả chi tiết.
    3. authors: Mảng tên tác giả.
    4. unit: Đơn vị.
    5. year: Năm (số).
    6. level: Mảng các cấp độ phù hợp. Chỉ chọn từ: ['HLH', 'NPSC', 'NPC', 'EVN'].
    Trả về JSON array.`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: { parts: [{ text: prompt }, { inlineData: { mimeType: 'application/pdf', data: base64Data } }] },
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
                level: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ['title', 'content', 'year', 'level']
            }
          }
        }
      });
      setBatchResults(JSON.parse(response.text || '[]'));
    } catch (error) {
      alert("AI không thể xử lý PDF này.");
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
      level: ['HLH']
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

  const handleSingleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const base64 = await toBase64(file);
    setEditingInitiative(prev => ({
      ...prev,
      attachmentName: file.name,
      attachmentData: base64
    }));
  };

  const toggleLevelInEdit = (lvl: InitiativeLevel) => {
    setEditingInitiative(prev => {
      if (!prev) return null;
      const current = prev.level || [];
      const updated = current.includes(lvl) 
        ? current.filter(l => l !== lvl) 
        : [...current, lvl];
      return { ...prev, level: updated };
    });
  };

  const toggleLevelFilter = (lvl: InitiativeLevel) => {
    setSelectedLevels(prev => prev.includes(lvl) ? prev.filter(l => l !== lvl) : [...prev, lvl]);
  };

  const filteredInitiatives = useMemo(() => {
    return initiatives.filter(i => {
      const matchesSearch = i.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           (i.authors?.some(a => a.toLowerCase().includes(searchTerm.toLowerCase())));
      const matchesLevel = selectedLevels.length === 0 || 
                          (i.level && i.level.some(l => selectedLevels.includes(l as InitiativeLevel)));
      return matchesSearch && matchesLevel;
    });
  }, [searchTerm, selectedLevels, initiatives]);

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
          <div className="bg-gradient-to-br from-blue-400 to-indigo-600 p-3 rounded-2xl">
            <BrainCircuit size={28} className="text-white" />
          </div>
          <div>
            <h1 className="font-extrabold text-2xl tracking-tighter">NPSC Hub</h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Management Suite</p>
          </div>
        </div>
        <nav className="space-y-2 flex-1">
          <button onClick={() => setActiveTab('list')} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold ${activeTab === 'list' ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
            <LayoutDashboard size={22} /> Danh mục
          </button>
          <button onClick={() => setActiveTab('stats')} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold ${activeTab === 'stats' ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
            <TrendingUp size={22} /> Thống kê
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
              {activeTab === 'list' ? 'Kho sáng kiến' : activeTab === 'stats' ? 'Thống kê' : 'Hỏi đáp AI'}
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
              {selectedLevels.length > 0 && (
                <button onClick={() => setSelectedLevels([])} className="ml-auto text-xs font-bold text-rose-500 hover:underline">Xóa lọc</button>
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
                    <span className="bg-slate-900 text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase">{item.year}</span>
                    {item.level?.map(lvl => (
                      <span key={lvl} className={`${LEVEL_COLORS[lvl as InitiativeLevel] || 'bg-slate-400'} text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase`}>
                        {lvl}
                      </span>
                    ))}
                    {item.attachmentName && (
                      <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase flex items-center gap-1">
                        <Paperclip size={10} /> PDF
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => handleEditInitiative(item)} className="p-2.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-xl transition-all"><Edit size={18} /></button>
                    <button onClick={() => { if(confirm('Xóa?')) deleteDoc(doc(db, "initiatives", item.id)); }} className="p-2.5 bg-rose-50 text-rose-400 hover:text-rose-600 rounded-xl transition-all"><Trash2 size={18} /></button>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight line-clamp-2">{item.title}</h3>
                <div className="flex items-center gap-2 mb-6 text-slate-500 font-bold text-sm">
                  <Users size={16} /> {Array.isArray(item.authors) ? item.authors.join(', ') : item.authors}
                </div>
                <button onClick={() => setViewingInitiative(item)} className="text-blue-600 font-black text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Xem chi tiết <ArrowRight size={16} />
                </button>
              </div>
            ))}
            {filteredInitiatives.length === 0 && !loading && (
              <div className="col-span-full flex flex-col items-center justify-center py-20 opacity-30">
                <FileWarning size={64} />
                <p className="font-black mt-4 text-xl">KHÔNG TÌM THẤY SÁNG KIẾN</p>
              </div>
            )}
          </div>
        ) : activeTab === 'stats' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center">
              <p className="text-slate-400 font-bold uppercase text-xs mb-2">Tổng sáng kiến</p>
              <h4 className="text-5xl font-black text-slate-900">{initiatives.length}</h4>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col h-[70vh] overflow-hidden">
             <div className="p-8 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
                <div className="bg-blue-600 p-3 rounded-2xl"><Bot size={24} className="text-white" /></div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Trợ lý AI NPSC Hub</h3>
             </div>
             <div className="flex-1 overflow-y-auto p-8 space-y-6">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-6 rounded-[2rem] font-medium ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none shadow-lg' : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && <div className="text-blue-500 animate-pulse font-bold px-6">AI đang xử lý...</div>}
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
                    className="w-full pl-8 pr-16 py-5 bg-white border border-slate-200 rounded-3xl outline-none focus:border-blue-500 font-bold"
                   />
                   <button onClick={handleSendMessage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 p-3 rounded-2xl text-white shadow-lg"><Send size={20} /></button>
                </div>
             </div>
          </div>
        )}
      </main>

      {/* EDIT/ADD MODAL */}
      {isEditModalOpen && editingInitiative && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
          <div className="bg-white rounded-[3rem] w-full max-w-2xl max-h-[95vh] shadow-2xl flex flex-col overflow-hidden animate-slide">
             <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-2xl font-black text-slate-900 uppercase">{editingInitiative.id ? 'Chỉnh sửa sáng kiến' : 'Thêm mới sáng kiến'}</h3>
                <button onClick={() => setIsEditModalOpen(false)} className="p-3 hover:bg-slate-100 rounded-xl"><X size={24} /></button>
             </div>
             <div className="p-8 overflow-y-auto flex-1 space-y-6">
                <div className="space-y-2">
                   <label className="text-xs font-black uppercase text-slate-400">Tên sáng kiến</label>
                   <input 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold focus:border-blue-500 outline-none"
                    value={editingInitiative.title}
                    onChange={(e) => setEditingInitiative({...editingInitiative, title: e.target.value})}
                   />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400">Năm</label>
                    <input 
                      type="number"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold"
                      value={editingInitiative.year}
                      onChange={(e) => setEditingInitiative({...editingInitiative, year: parseInt(e.target.value)})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400">Đơn vị</label>
                    <input 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold"
                      value={editingInitiative.unit}
                      onChange={(e) => setEditingInitiative({...editingInitiative, unit: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400">Tác giả (Cách nhau bằng dấu phẩy)</label>
                  <input 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold"
                    placeholder="VD: Nguyễn Văn A, Trần Thị B"
                    value={Array.isArray(editingInitiative.authors) ? editingInitiative.authors.join(', ') : ''}
                    onChange={(e) => setEditingInitiative({...editingInitiative, authors: e.target.value.split(',').map(s => s.trim())})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400">Gán thẻ cấp độ</label>
                  <div className="flex flex-wrap gap-2">
                    {(['HLH', 'NPSC', 'NPC', 'EVN'] as InitiativeLevel[]).map(lvl => (
                      <button
                        key={lvl}
                        onClick={() => toggleLevelInEdit(lvl)}
                        className={`px-4 py-2 rounded-xl text-xs font-black border-2 transition-all ${
                          editingInitiative.level?.includes(lvl)
                            ? `${LEVEL_COLORS[lvl]} text-white border-transparent`
                            : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-black uppercase text-slate-400">Nội dung sáng kiến</label>
                   <textarea 
                    rows={5}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold focus:border-blue-500 outline-none resize-none"
                    value={editingInitiative.content}
                    onChange={(e) => setEditingInitiative({...editingInitiative, content: e.target.value})}
                   />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400">Tài liệu đính kèm (PDF)</label>
                  <div className="flex items-center gap-4 p-4 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50">
                    <input type="file" id="single-pdf" hidden accept="application/pdf" onChange={handleSingleFileUpload} />
                    <label htmlFor="single-pdf" className="cursor-pointer p-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 transition-all">
                      <Paperclip size={20} className="text-slate-400" />
                    </label>
                    <div className="flex-1 overflow-hidden">
                      <p className="text-sm font-bold truncate text-slate-600">
                        {editingInitiative.attachmentName || "Chưa có tài liệu đính kèm"}
                      </p>
                    </div>
                    {editingInitiative.attachmentName && (
                      <button onClick={() => setEditingInitiative({...editingInitiative, attachmentName: undefined, attachmentData: undefined})} className="text-rose-500 hover:text-rose-700">
                        <X size={18} />
                      </button>
                    )}
                  </div>
                </div>
             </div>
             <div className="p-8 border-t border-slate-100 bg-slate-50 flex gap-4">
                <button onClick={() => setIsEditModalOpen(false)} className="flex-1 py-4 border border-slate-200 rounded-2xl font-black text-slate-400 hover:bg-white transition-all">Hủy</button>
                <button onClick={saveInitiative} className="flex-[2] py-4 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2">
                  <Save size={20} /> Lưu thay đổi
                </button>
             </div>
          </div>
        </div>
      )}

      {/* BATCH MODAL */}
      {isBatchModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
          <div className="bg-white rounded-[3rem] w-full max-w-5xl max-h-[90vh] shadow-2xl flex flex-col overflow-hidden">
            <div className="p-8 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-2xl"><FileUp size={24} className="text-white" /></div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">AI Extraction</h3>
              </div>
              <button onClick={() => setIsBatchModalOpen(false)} className="p-3 hover:bg-slate-100 rounded-xl"><X size={28} /></button>
            </div>
            <div className="p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 overflow-y-auto">
              <div className="space-y-6">
                <div className="border-4 border-dashed border-slate-100 rounded-[2.5rem] p-12 text-center bg-slate-50 group hover:border-blue-200 transition-all">
                  <Upload size={48} className="text-blue-600 mx-auto mb-6" />
                  <h4 className="text-xl font-black text-slate-900 mb-2">Tải PDF danh sách</h4>
                  <input type="file" id="batch-pdf" hidden accept="application/pdf" onChange={handleFileUpload} />
                  <label htmlFor="batch-pdf" className="cursor-pointer bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-blue-600 transition-all inline-block mt-4">Chọn File</label>
                </div>
                {isBatchProcessing && <div className="p-4 bg-blue-50 rounded-xl text-blue-700 font-bold flex items-center gap-3"><Loader2 className="animate-spin" /> AI đang trích xuất...</div>}
              </div>
              <div className="flex flex-col min-h-[400px]">
                <h4 className="font-black text-slate-900 uppercase mb-6">Kết quả ({batchResults.length})</h4>
                <div className="flex-1 space-y-4 overflow-y-auto pr-2">
                  {batchResults.map((item, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                       <h5 className="font-black text-slate-900 text-sm mb-3 leading-snug">{item.title}</h5>
                       <div className="flex gap-2">
                          {item.level?.map((l: string) => (
                            <span key={l} className={`${LEVEL_COLORS[l as InitiativeLevel] || 'bg-slate-400'} text-white px-2 py-0.5 rounded text-[8px] font-black uppercase`}>{l}</span>
                          ))}
                          <span className="text-[8px] font-black bg-slate-100 text-slate-500 px-2 py-0.5 rounded uppercase ml-auto">{item.year}</span>
                       </div>
                    </div>
                  ))}
                </div>
                {batchResults.length > 0 && (
                  <button onClick={async () => {
                    const batch = writeBatch(db);
                    batchResults.forEach(item => batch.set(doc(collection(db, "initiatives")), item));
                    await batch.commit();
                    setIsBatchModalOpen(false);
                    setBatchResults([]);
                  }} className="mt-8 w-full py-5 bg-emerald-600 text-white rounded-2xl font-black shadow-xl">Nhập tất cả</button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW DETAILS */}
      {viewingInitiative && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-xl animate-in zoom-in">
           <div className="bg-white rounded-[3rem] w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
              <div className="p-10 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                 <div className="flex items-center gap-5">
                    <div className="bg-blue-600 p-4 rounded-3xl"><Lightbulb size={32} className="text-white" /></div>
                    <h3 className="text-3xl font-black text-slate-900">Chi tiết sáng kiến</h3>
                 </div>
                 <div className="flex gap-4">
                    <button onClick={() => { setViewingInitiative(null); handleEditInitiative(viewingInitiative); }} className="p-4 bg-white border border-slate-200 rounded-2xl text-blue-600 font-bold hover:shadow-lg transition-all flex items-center gap-2"><Edit size={20}/> Sửa</button>
                    <button onClick={() => setViewingInitiative(null)} className="p-4 hover:bg-white rounded-2xl text-slate-400 transition-all"><X size={32} /></button>
                 </div>
              </div>
              <div className="p-10 overflow-y-auto flex-1 space-y-8">
                 <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-900 text-white px-4 py-1 rounded-xl text-xs font-black uppercase">{viewingInitiative.year}</span>
                    {viewingInitiative.level?.map(lvl => (
                      <span key={lvl} className={`${LEVEL_COLORS[lvl as InitiativeLevel]} text-white px-4 py-1 rounded-xl text-xs font-black uppercase`}>{lvl}</span>
                    ))}
                 </div>
                 <h1 className="text-4xl font-black text-slate-900 leading-tight">{viewingInitiative.title}</h1>
                 <div className="flex items-center gap-3 text-slate-600 font-bold"><Users size={20} className="text-blue-500" /> {Array.isArray(viewingInitiative.authors) ? viewingInitiative.authors.join(', ') : viewingInitiative.authors}</div>
                 
                 {viewingInitiative.attachmentName && (
                   <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl">
                      <FileText size={24} className="text-emerald-600" />
                      <div>
                        <p className="text-xs font-black uppercase text-emerald-400">Tài liệu đính kèm</p>
                        <p className="text-sm font-black text-emerald-700">{viewingInitiative.attachmentName}</p>
                      </div>
                      <button 
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = `data:application/pdf;base64,${viewingInitiative.attachmentData}`;
                          link.download = viewingInitiative.attachmentName!;
                          link.click();
                        }}
                        className="ml-auto bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-black hover:bg-emerald-700"
                      >
                        Tải xuống
                      </button>
                   </div>
                 )}

                 <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                    <p className="text-xl text-slate-700 leading-relaxed font-medium whitespace-pre-wrap">{viewingInitiative.content}</p>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default App;
