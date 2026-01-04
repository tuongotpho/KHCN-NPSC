
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Loader2, Sparkles } from 'lucide-react';
import { getAIInstance, AI_SYSTEM_INSTRUCTION } from '../services/aiService';
import { ChatMessage, Initiative } from '../types';

interface ChatPageProps {
  initiatives: Initiative[];
  activeTheme: any;
}

const ChatPage: React.FC<ChatPageProps> = ({ initiatives, activeTheme }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Chào mừng bạn đến với NPSC Hub.\nTôi đã sẵn sàng tra cứu dữ liệu từ ' + initiatives.length + ' hồ sơ sáng kiến.\nBạn cần tìm hiểu thông tin gì?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    const newMsgs: ChatMessage[] = [...messages, { role: 'user', text: input }];
    setMessages(newMsgs);
    setInput('');
    setIsTyping(true);

    try {
      const ai = getAIInstance();
      
      // Xây dựng ngữ cảnh giàu thông tin hơn
      const context = initiatives.map(i => {
        const units = Array.isArray(i.unit) ? i.unit.join(', ') : i.unit;
        const levels = Array.isArray(i.level) ? i.level.join(', ') : i.level;
        const authors = Array.isArray(i.authors) ? i.authors.join(', ') : i.authors;
        const contentPreview = i.content ? i.content.substring(0, 150) + '...' : 'Không có tóm tắt';
        
        return `[Năm: ${i.year}] [Cấp: ${levels}] [Đơn vị: ${units}] [Tác giả: ${authors}] Tiêu đề: ${i.title}. Nội dung: ${contentPreview}`;
      }).join('\n\n').substring(0, 8000); // Tăng giới hạn context lên 8000 ký tự cho Gemini 3 Flash

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `DỮ LIỆU HỆ THỐNG HIỆN CÓ:\n${context}\n\nCÂU HỎI NGƯỜI DÙNG: ${input}`,
        config: { 
          systemInstruction: AI_SYSTEM_INSTRUCTION,
          temperature: 0.2 // Giảm temperature để AI trả lời chính xác, ít "sáng tạo" sai lệch
        }
      });
      
      setMessages([...newMsgs, { role: 'model', text: response.text || "Xin lỗi, tôi không thể tìm thấy thông tin phù hợp." }]);
    } catch (e) {
      console.error("AI Error:", e);
      setMessages([...newMsgs, { role: 'model', text: "Lỗi kết nối AI hoặc dữ liệu quá lớn. Vui lòng thử hỏi cụ thể hơn." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl flex flex-col h-[75vh] overflow-hidden">
      <div className="p-6 lg:p-10 border-b border-slate-100 dark:border-slate-800 flex items-center gap-5 bg-slate-50/50 dark:bg-slate-800/30">
        <div className={`${activeTheme.primary} p-4 rounded-2xl text-white shadow-lg`}><Bot size={28} /></div>
        <div>
          <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Trợ lý AI NPSC</h3>
          <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-1.5"><Sparkles size={10}/> Dữ liệu thời gian thực</p>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-8 custom-scrollbar">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide`}>
            <div className={`max-w-[85%] lg:max-w-[75%] p-5 lg:p-7 rounded-[2.5rem] font-medium whitespace-pre-wrap shadow-sm ${msg.role === 'user' ? `${activeTheme.primary} text-white rounded-tr-none` : 'bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-700'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className={`${activeTheme.text} animate-pulse font-black px-6 flex items-center gap-3 text-[10px] uppercase tracking-widest`}>
            <Loader2 className="animate-spin" size={14}/> Trợ lý đang kiểm tra kho dữ liệu...
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="p-6 lg:p-8 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="relative max-w-4xl mx-auto flex gap-3">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyPress={(e) => e.key === 'Enter' && handleSend()} 
            placeholder="Hỏi về đơn vị, tác giả hoặc tóm tắt sáng kiến..." 
            className="w-full pl-8 pr-14 py-5 bg-slate-50 dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-[2.5rem] outline-none font-bold"
          />
          <button onClick={handleSend} className={`absolute right-2 top-1/2 -translate-y-1/2 ${activeTheme.primary} p-3 rounded-full text-white shadow-lg`}><Send size={20} /></button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
