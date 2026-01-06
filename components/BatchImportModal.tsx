
import React, { useState, useRef } from 'react';
import { X, UploadCloud, FileText, Check, AlertTriangle, Loader2, Save, Wand2 } from 'lucide-react';
import { extractInitiativesFromPDF } from '../services/aiService';
import { db } from '../services/firebase';
import { BatchItem, InitiativeLevel } from '../types';

interface BatchImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTheme: any;
}

const BatchImportModal: React.FC<BatchImportModalProps> = ({ isOpen, onClose, activeTheme }) => {
  const [step, setStep] = useState<'upload' | 'review'>('upload');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [extractedItems, setExtractedItems] = useState<BatchItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setError("Vui lòng chỉ chọn file PDF.");
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      // Convert file to Base64
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = async () => {
        const base64String = (reader.result as string).split(',')[1];
        
        try {
          const rawData = await extractInitiativesFromPDF(base64String);
          
          // Map to BatchItem type with temporary IDs
          const mappedItems: BatchItem[] = rawData.map((item: any, index: number) => ({
            tempId: `temp_${Date.now()}_${index}`,
            selected: true,
            title: item.title || "Chưa xác định",
            authors: item.authors || [],
            unit: item.unit || [],
            year: item.year || new Date().getFullYear(),
            content: item.content || "",
            field: item.field || "Khác",
            level: item.level || ["HLH"]
          }));

          setExtractedItems(mappedItems);
          setStep('review');
        } catch (aiError) {
          console.error(aiError);
          setError("Không thể trích xuất dữ liệu. Vui lòng thử lại hoặc kiểm tra file.");
        } finally {
          setIsProcessing(false);
        }
      };

      reader.onerror = () => {
        setError("Lỗi khi đọc file.");
        setIsProcessing(false);
      };

    } catch (err) {
      setError("Đã có lỗi xảy ra.");
      setIsProcessing(false);
    }
  };

  const handleToggleSelect = (id: string) => {
    setExtractedItems(prev => prev.map(item => 
      item.tempId === id ? { ...item, selected: !item.selected } : item
    ));
  };

  const handleSaveToDatabase = async () => {
    const selectedItems = extractedItems.filter(i => i.selected);
    if (selectedItems.length === 0) {
      setError("Vui lòng chọn ít nhất một sáng kiến để lưu.");
      return;
    }

    setIsSaving(true);
    try {
      const batch = db.batch();
      
      selectedItems.forEach(item => {
        const docRef = db.collection('initiatives').doc();
        batch.set(docRef, {
          title: item.title,
          authors: item.authors,
          unit: item.unit,
          year: item.year,
          content: item.content,
          field: item.field,
          level: item.level,
          phase: 'Hoàn thành', // Default
          result: 'Đạt', // Default
          reward: '',
          attachmentUrl: '',
          driveLink: ''
        });
      });

      await batch.commit();
      onClose();
      // Reset state
      setStep('upload');
      setExtractedItems([]);
    } catch (err) {
      console.error(err);
      setError("Lỗi khi lưu vào cơ sở dữ liệu.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
        
        {/* Header */}
        <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900">
          <div className="flex items-center gap-4">
            <div className={`${activeTheme.primary} p-4 rounded-2xl text-white shadow-lg`}>
              <Wand2 size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Nhập liệu thông minh</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">AI trích xuất dữ liệu từ văn bản/PDF</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 bg-white dark:bg-slate-800 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <X size={20} className="text-slate-400" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#f8fafc] dark:bg-slate-950">
          {error && (
            <div className="mb-6 p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900 rounded-2xl flex items-center gap-3 text-rose-600 dark:text-rose-400">
              <AlertTriangle size={20} />
              <p className="font-bold text-sm">{error}</p>
            </div>
          )}

          {step === 'upload' && (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px] border-4 border-dashed border-slate-200 dark:border-slate-800 rounded-[3rem] bg-white dark:bg-slate-900/50 hover:border-orange-300 transition-all group relative">
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileSelect} 
                accept="application/pdf"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                disabled={isProcessing}
              />
              <div className={`transition-all duration-500 ${isProcessing ? 'scale-110' : 'group-hover:scale-110'}`}>
                {isProcessing ? (
                  <div className={`${activeTheme.text} animate-spin`}><Loader2 size={64} /></div>
                ) : (
                  <div className="text-slate-300 group-hover:text-orange-500 transition-colors"><UploadCloud size={64} /></div>
                )}
              </div>
              <h4 className="mt-6 text-xl font-black text-slate-700 dark:text-slate-300 uppercase tracking-tight">
                {isProcessing ? 'AI Đang phân tích...' : 'Kéo thả hoặc chọn file PDF'}
              </h4>
              <p className="mt-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
                {isProcessing ? 'Vui lòng đợi trong giây lát' : 'Hỗ trợ Quyết định công nhận, Bảng tổng hợp'}
              </p>
            </div>
          )}

          {step === 'review' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                 <p className="font-bold text-slate-500 uppercase text-xs">Tìm thấy {extractedItems.length} sáng kiến</p>
                 <button onClick={() => setStep('upload')} className="text-xs font-bold text-orange-600 hover:underline uppercase">Chọn file khác</button>
              </div>
              
              <div className="space-y-4">
                {extractedItems.map((item) => (
                  <div 
                    key={item.tempId} 
                    onClick={() => handleToggleSelect(item.tempId)}
                    className={`relative p-6 rounded-3xl border-2 transition-all cursor-pointer group ${item.selected ? `bg-white dark:bg-slate-900 ${activeTheme.border} shadow-lg` : 'bg-slate-50 dark:bg-slate-900/50 border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <div className={`absolute top-6 right-6 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${item.selected ? `${activeTheme.primary} border-transparent text-white` : 'border-slate-300'}`}>
                      {item.selected && <Check size={14} strokeWidth={3} />}
                    </div>

                    <div className="pr-10">
                      <div className="flex flex-wrap gap-2 mb-3">
                         <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-lg text-[10px] font-black uppercase">{item.year}</span>
                         {item.level.map(l => (
                           <span key={l} className="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-lg text-[10px] font-black uppercase">{l}</span>
                         ))}
                      </div>
                      <h4 className="text-lg font-black text-slate-800 dark:text-white uppercase leading-tight mb-2">{item.title}</h4>
                      <p className="text-xs font-bold text-slate-500 flex items-center gap-2 mb-1"><FileText size={12}/> {item.authors.join(', ')}</p>
                      <p className="text-xs text-slate-400 line-clamp-2">{item.content || "Chưa có nội dung tóm tắt"}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {step === 'review' && (
          <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-4">
            <button 
              onClick={() => setStep('upload')}
              className="flex-1 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-2xl font-black text-slate-400 uppercase text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            >
              Hủy bỏ
            </button>
            <button 
              onClick={handleSaveToDatabase}
              disabled={isSaving}
              className={`flex-[2] py-4 ${activeTheme.primary} text-white rounded-2xl font-black shadow-lg uppercase text-xs flex items-center justify-center gap-2 hover:brightness-110 transition-all disabled:opacity-50`}
            >
              {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
              {isSaving ? 'Đang lưu dữ liệu...' : `Lưu ${extractedItems.filter(i => i.selected).length} sáng kiến`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BatchImportModal;
