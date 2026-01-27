
import React, { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { checkApprovalSimilarity, validateInitiativeCompliance, generateEmbedding } from '../services/aiService';
import { PendingInitiative, InitiativeLevel, Initiative } from '../types';
import { Check, X, ClipboardList, Calendar, Users, Building2, ExternalLink, Loader2, AlertTriangle, Layers, AlertCircle, FileText, Image as ImageIcon, ZoomIn, ChevronLeft, ChevronRight, Wand2, ShieldAlert, CheckCircle2, TrendingUp, Award, Briefcase, Paperclip, Info, Zap, Phone, CalendarClock, FileSearch, XCircle } from 'lucide-react';

interface ApprovalPageProps {
  activeTheme: any;
}

interface ConfirmModalState {
  isOpen: boolean;
  type: 'approve' | 'reject';
  item: PendingInitiative | null;
}

interface LightboxState {
  images: string[];
  index: number;
}

interface AIAnalysisResult {
  score: number;
  isDuplicate: boolean;
  reason: string;
  mostSimilarTitle?: string;
  mostSimilarId?: string;
  fromUser?: boolean;
}

const LEVEL_COLORS: Record<string, string> = {
  'HLH': 'bg-slate-500',
  'NPSC': 'bg-red-600',
  'NPC': 'bg-orange-600',
  'EVN': 'bg-rose-700'
};

const ApprovalPage: React.FC<ApprovalPageProps> = ({ activeTheme }) => {
  const [pendingItems, setPendingItems] = useState<PendingInitiative[]>([]);
  const [approvedItems, setApprovedItems] = useState<Initiative[]>([]); // Dữ liệu tham chiếu
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);
  
  // State cho AI Scan
  const [scanningId, setScanningId] = useState<string | null>(null);
  const [scanResults, setScanResults] = useState<Record<string, AIAnalysisResult>>({});

  // Lightbox state: Lưu danh sách ảnh và index hiện tại
  const [lightboxData, setLightboxData] = useState<LightboxState | null>(null);
  
  // State xem chi tiết sáng kiến tham chiếu (trùng lặp)
  const [viewingReferenceItem, setViewingReferenceItem] = useState<Initiative | null>(null);

  // State quản lý Modal xác nhận
  const [confirmModal, setConfirmModal] = useState<ConfirmModalState>({
    isOpen: false,
    type: 'approve',
    item: null
  });

  // Lấy danh sách chờ duyệt & tự động map kết quả AI từ người dùng (nếu có)
  useEffect(() => {
    const unsubscribe = db.collection('pending_initiatives')
      .where('status', '==', 'pending')
      .onSnapshot(
        snapshot => {
          const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as PendingInitiative));
          // Sắp xếp client-side để tránh lỗi index
          items.sort((a, b) => (b.submittedAt || 0) - (a.submittedAt || 0));
          
          setPendingItems(items);

          // Tự động load kết quả AI check trùng từ người dùng
          const preCalculatedResults: Record<string, AIAnalysisResult> = {};
          items.forEach(item => {
             if (item.publicAnalysis) {
                preCalculatedResults[item.id] = {
                   score: item.publicAnalysis.score,
                   isDuplicate: item.publicAnalysis.score >= 50,
                   reason: item.publicAnalysis.advice,
                   mostSimilarTitle: item.publicAnalysis.similarTitle,
                   fromUser: true
                };
             }
          });
          setScanResults(prev => ({ ...prev, ...preCalculatedResults }));

          setLoading(false);
        },
        error => {
          console.error("Error fetching pending:", error);
          setLoading(false);
        }
      );
    return unsubscribe;
  }, []);

  // Lấy danh sách đã duyệt (để làm cơ sở so sánh AI)
  useEffect(() => {
    const fetchApproved = async () => {
      try {
        const snapshot = await db.collection('initiatives').get();
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Initiative));
        setApprovedItems(items);
      } catch (err) {
        console.error("Error fetching approved initiatives for AI context:", err);
      }
    };
    fetchApproved();
  }, []);

  // Hàm mở modal xác nhận
  const triggerAction = (type: 'approve' | 'reject', item: PendingInitiative) => {
    setConfirmModal({ isOpen: true, type, item });
  };

  // Hàm thực thi hành động sau khi người dùng bấm "Đồng ý" trong Modal
  const handleConfirmProcess = async () => {
    const { type, item } = confirmModal;
    if (!item) return;

    // Đóng modal ngay lập tức
    setConfirmModal(prev => ({ ...prev, isOpen: false }));
    // Hiển thị loading trên card tương ứng
    setProcessingId(item.id);

    try {
      if (type === 'approve') {
        
        // --- TẠO VECTOR CHO RAG ---
        let vector = null;
        try {
            const textToEmbed = `${item.title} ${item.content || ''}`;
            vector = await generateEmbedding(textToEmbed);
        } catch (e) {
            console.warn(`Could not generate vector for ${item.title}`, e);
        }
        // ---------------------------

        // Logic phê duyệt
        const officialData = {
          title: item.title,
          authors: item.authors,
          unit: item.unit,
          year: item.year,
          content: item.content,
          field: item.field,
          // Support multiple files + legacy
          driveLink: item.driveLink || (item.attachmentUrls && item.attachmentUrls[0]) || '',
          attachmentUrls: item.attachmentUrls || (item.driveLink ? [item.driveLink] : []),
          imageUrl: item.imageUrl || (item.imageUrls && item.imageUrls[0]) || '',
          imageUrls: item.imageUrls || (item.imageUrl ? [item.imageUrl] : []),
          // Thêm số tháng đã áp dụng
          monthsApplied: item.monthsApplied || 0,
          level: ['HLH'] as InitiativeLevel[],
          phase: 'Hoàn thành',
          result: 'Đạt',
          reward: '',
          isScalable: false,
          embedding_field: vector // Lưu vector
        };

        await db.collection('initiatives').add(officialData);
        await db.collection('pending_initiatives').doc(item.id).delete();
      } else {
        // Logic từ chối (Xóa)
        await db.collection('pending_initiatives').doc(item.id).delete();
      }
    } catch (error: any) {
      console.error(error);
      alert("Đã xảy ra lỗi: " + error.message);
    } finally {
      setProcessingId(null);
    }
  };

  // Xử lý AI Rà soát (Admin chạy thủ công)
  const handleAIScan = async (item: PendingInitiative) => {
    if (scanningId) return; // Prevent double click
    setScanningId(item.id);
    
    try {
      if (approvedItems.length === 0) {
        alert("Kho dữ liệu trống, không thể so sánh.");
        setScanningId(null);
        return;
      }

      // Check trùng lặp
      const result = await checkApprovalSimilarity(
        { title: item.title, content: item.content },
        approvedItems
      );

      if (result) {
        setScanResults(prev => ({ ...prev, [item.id]: result }));
      }
    } catch (error: any) {
      console.error("AI Scan Error:", error);
      alert("Lỗi khi rà soát: " + error.message);
    } finally {
      setScanningId(null);
    }
  };

  // Mở modal xem chi tiết sáng kiến tham chiếu
  const handleViewReference = (refTitle: string) => {
     // Vì Public check ko trả về ID, ta tìm theo Title
    const refItem = approvedItems.find(i => i.title.trim().toLowerCase() === refTitle.trim().toLowerCase() || i.id === refTitle); // Hỗ trợ cả tìm theo ID nếu có
    if (refItem) {
      setViewingReferenceItem(refItem);
    } else {
      alert("Không tìm thấy dữ liệu sáng kiến gốc (có thể tên đã thay đổi hoặc đã bị xóa).");
    }
  };

  // Handlers cho Lightbox navigation
  const openLightbox = (images: string[], index: number) => {
    setLightboxData({ images, index });
  };

  const closeLightbox = () => {
    setLightboxData(null);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxData(prev => {
      if (!prev) return null;
      return { ...prev, index: prev.index < prev.images.length - 1 ? prev.index + 1 : prev.index };
    });
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxData(prev => {
      if (!prev) return null;
      return { ...prev, index: prev.index > 0 ? prev.index - 1 : prev.index };
    });
  };

  if (loading) return <div className="flex justify-center py-20"><Loader2 className="animate-spin text-orange-600" size={48} /></div>;

  return (
    <div className="space-y-8 animate-slide pb-20 relative">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Phê duyệt sáng kiến</h2>
        <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-black">{pendingItems.length} chờ duyệt</span>
      </div>

      {pendingItems.length === 0 ? (
        <div className="py-20 text-center bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800">
          <div className="bg-slate-50 dark:bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
            <ClipboardList size={40} />
          </div>
          <p className="font-black uppercase text-slate-400 tracking-widest text-xs">Hiện không có đơn đăng ký nào</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {pendingItems.map(item => {
            const scanResult = scanResults[item.id];
            
            return (
              <div key={item.id} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
                
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 px-3 py-1 rounded-lg text-[10px] font-black uppercase flex items-center gap-1">
                            <Calendar size={12}/> {new Date(item.submittedAt).toLocaleDateString('vi-VN')}
                        </span>
                        <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 px-3 py-1 rounded-lg text-[10px] font-black uppercase flex items-center gap-1">
                            <Users size={12}/> {item.authors.length} Tác giả
                        </span>
                        <span className={`bg-slate-100 dark:bg-slate-800 ${item.monthsApplied && item.monthsApplied >= 3 ? 'text-emerald-500' : 'text-rose-500'} px-3 py-1 rounded-lg text-[10px] font-black uppercase flex items-center gap-1`}>
                            <CalendarClock size={12}/> {item.monthsApplied || 0} Tháng áp dụng
                        </span>
                      </div>
                      
                      {/* Nút AI Scan */}
                      <button 
                        onClick={() => handleAIScan(item)}
                        disabled={!!scanningId}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all shadow-sm 
                          ${scanResult 
                            ? (scanResult.isDuplicate ? 'bg-rose-100 text-rose-600 border border-rose-200' : 'bg-emerald-100 text-emerald-600 border border-emerald-200')
                            : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'}`}
                      >
                        {scanningId === item.id ? (
                          <Loader2 className="animate-spin" size={14} />
                        ) : scanResult ? (
                          scanResult.isDuplicate ? <ShieldAlert size={14} /> : <CheckCircle2 size={14} />
                        ) : (
                          <Wand2 size={14} />
                        )}
                        {scanningId === item.id ? 'Đang rà soát...' : scanResult ? (scanResult.fromUser ? 'Kết quả từ người dùng' : 'Đã rà soát') : 'AI Rà soát lại'}
                      </button>
                    </div>
                    
                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase leading-tight">{item.title}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase text-slate-400">Đơn vị</p>
                        <p className="font-bold flex items-center gap-2"><Building2 size={14} className="text-slate-400"/> {item.unit.join(', ')}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase text-slate-400">Lĩnh vực</p>
                        <p className="font-bold flex items-center gap-2"><Layers size={14} className="text-slate-400"/> {item.field.join(', ') || '---'}</p>
                      </div>
                    </div>

                    {/* HIỂN THỊ SỐ ZALO LIÊN HỆ CHO ADMIN */}
                    {item.contactZalo && (
                        <div className="flex items-center gap-2 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900/30">
                           <Phone size={16} className="text-blue-500" />
                           <span className="text-xs font-bold text-blue-700 dark:text-blue-300">
                              Zalo/SĐT liên hệ: <span className="font-black">{item.contactZalo}</span>
                           </span>
                        </div>
                    )}

                    {/* AI Scan Result Box (TRÙNG LẶP) */}
                    {scanResult && (
                      <div className={`p-4 rounded-2xl border flex gap-4 animate-in fade-in zoom-in duration-300 ${scanResult.isDuplicate ? 'bg-rose-50 border-rose-100 dark:bg-rose-900/20 dark:border-rose-900' : 'bg-emerald-50 border-emerald-100 dark:bg-emerald-900/20 dark:border-emerald-900'}`}>
                        <div className={`p-2.5 rounded-full h-fit shrink-0 ${scanResult.isDuplicate ? 'bg-rose-100 text-rose-500' : 'bg-emerald-100 text-emerald-500'}`}>
                          {scanResult.isDuplicate ? <AlertTriangle size={18} /> : <Check size={18} />}
                        </div>
                        <div className="space-y-1 w-full">
                          <div className="flex items-center justify-between">
                             <div className="flex items-center gap-2">
                                <span className={`text-[10px] font-black uppercase tracking-widest ${scanResult.isDuplicate ? 'text-rose-600' : 'text-emerald-600'}`}>
                                  {scanResult.isDuplicate ? 'Cảnh báo trùng lặp' : 'Nội dung hợp lệ'}
                                </span>
                                <span className={`px-2 py-0.5 rounded-md text-[9px] font-black text-white ${scanResult.isDuplicate ? 'bg-rose-500' : 'bg-emerald-500'}`}>
                                  {Math.round(scanResult.score)}% giống
                                </span>
                             </div>
                             {scanResult.fromUser && (
                                <span className="flex items-center gap-1 text-[9px] font-bold text-slate-400 uppercase bg-white dark:bg-slate-800 px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
                                   <Zap size={10} className="text-amber-500"/> Check bởi User
                                </span>
                             )}
                          </div>
                          
                          <div className={`text-xs font-medium leading-relaxed whitespace-pre-wrap ${scanResult.isDuplicate ? 'text-rose-800 dark:text-rose-200' : 'text-emerald-800 dark:text-emerald-200'}`}>
                            {scanResult.reason}
                          </div>

                          {(scanResult.mostSimilarTitle || scanResult.mostSimilarId) && (
                            <div className={`mt-3 pt-3 border-t flex flex-wrap items-center gap-2 ${scanResult.isDuplicate ? 'border-rose-200' : 'border-emerald-200'}`}>
                               <span className={`text-[10px] font-bold uppercase ${scanResult.isDuplicate ? 'text-rose-500' : 'text-emerald-500'}`}>Giống nhất với:</span>
                               <button 
                                 onClick={() => handleViewReference(scanResult.mostSimilarId || scanResult.mostSimilarTitle!)}
                                 className={`flex items-center gap-1 text-[10px] font-black uppercase underline decoration-2 underline-offset-2 ${scanResult.isDuplicate ? 'text-rose-700 hover:text-rose-900' : 'text-emerald-700 hover:text-emerald-900'} transition-colors`}
                               >
                                 <ExternalLink size={10} /> {scanResult.mostSimilarTitle || "Xem chi tiết"}
                               </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* AI COMPLIANCE RESULT (CHECK FORM) */}
                    {item.complianceCheck && (
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-1"><FileSearch size={12}/> Thẩm định mẫu đơn</h4>
                                <span className={`text-[9px] font-bold px-2 py-0.5 rounded text-white ${item.complianceCheck.score >= 80 ? 'bg-emerald-500' : item.complianceCheck.score >= 50 ? 'bg-amber-500' : 'bg-rose-500'}`}>
                                    Điểm: {item.complianceCheck.score}/100
                                </span>
                            </div>
                            <div className="space-y-1.5">
                                {item.complianceCheck.items.map((criterion, idx) => (
                                    <div key={idx} className="flex items-start gap-2">
                                        <div className={`mt-0.5 ${criterion.isMet ? 'text-emerald-500' : 'text-rose-500'}`}>
                                            {criterion.isMet ? <CheckCircle2 size={12}/> : <XCircle size={12}/>}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[10px] font-bold text-slate-700 dark:text-slate-300">{criterion.criteria}</p>
                                            {!criterion.isMet && <p className="text-[9px] text-rose-500 italic">{criterion.comment}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                      <p className="text-[10px] font-black uppercase text-slate-400 mb-2">Nội dung tóm tắt</p>
                      <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">{item.content}</div>
                    </div>

                    <div className="flex flex-col gap-2">
                      {/* Hiển thị danh sách file */}
                      {(item.attachmentUrls && item.attachmentUrls.length > 0) ? (
                          <div className="flex flex-wrap gap-2">
                            {item.attachmentUrls.map((url, idx) => (
                                <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-bold uppercase hover:bg-blue-100">
                                  <FileText size={12}/> Tài liệu {idx + 1}
                                </a>
                            ))}
                          </div>
                      ) : item.driveLink && (
                          <a href={item.driveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[10px] font-black uppercase text-blue-500 hover:underline">
                            <ExternalLink size={12}/> Xem tài liệu đính kèm
                          </a>
                      )}

                      {/* Hiển thị danh sách ảnh - Updated with Lightbox */}
                      {(item.imageUrls && item.imageUrls.length > 0) && (
                          <div className="flex gap-2 overflow-x-auto pb-2">
                            {item.imageUrls.map((url, idx) => (
                                <button 
                                  key={idx} 
                                  onClick={() => openLightbox(item.imageUrls!, idx)} 
                                  className="relative block w-16 h-16 rounded-lg overflow-hidden border border-slate-200 hover:border-orange-500 transition-colors group/img"
                                >
                                  <img src={url} alt={`img-${idx}`} className="w-full h-full object-cover"/>
                                  <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center">
                                      <ZoomIn size={12} className="text-white opacity-0 group-hover/img:opacity-100"/>
                                  </div>
                                </button>
                            ))}
                          </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-row lg:flex-col items-center justify-center gap-4 lg:w-48 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-800 pt-6 lg:pt-0 lg:pl-6">
                    <button 
                      onClick={() => triggerAction('approve', item)}
                      disabled={!!processingId}
                      className={`w-full py-3 ${activeTheme.primary} text-white rounded-xl font-black uppercase text-xs shadow-lg hover:brightness-110 flex items-center justify-center gap-2 disabled:opacity-50`}
                    >
                      {processingId === item.id ? <Loader2 className="animate-spin" size={16}/> : <Check size={16}/>}
                      Phê duyệt
                    </button>
                    <button 
                      onClick={() => triggerAction('reject', item)}
                      disabled={!!processingId}
                      className="w-full py-3 bg-white border-2 border-slate-200 text-slate-400 hover:border-rose-200 hover:text-rose-500 hover:bg-rose-50 rounded-xl font-black uppercase text-xs transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <X size={16}/> Từ chối
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* CONFIRMATION MODAL */}
      {confirmModal.isOpen && confirmModal.item && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] w-full max-w-md p-8 shadow-2xl border-4 border-white dark:border-slate-800 flex flex-col items-center text-center space-y-6">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center ${confirmModal.type === 'approve' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
              {confirmModal.type === 'approve' ? <Check size={40} strokeWidth={3} /> : <AlertTriangle size={40} strokeWidth={3} />}
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
                {confirmModal.type === 'approve' ? 'Xác nhận phê duyệt?' : 'Xác nhận từ chối?'}
              </h3>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {confirmModal.type === 'approve' 
                  ? `Sáng kiến "${confirmModal.item.title}" sẽ được chuyển sang danh sách chính thức.` 
                  : `Sáng kiến "${confirmModal.item.title}" sẽ bị xóa vĩnh viễn khỏi hệ thống.`}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full pt-4">
              <button 
                onClick={() => setConfirmModal(prev => ({ ...prev, isOpen: false }))}
                className="py-4 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-2xl font-black uppercase text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Hủy bỏ
              </button>
              <button 
                onClick={handleConfirmProcess}
                className={`py-4 text-white rounded-2xl font-black uppercase text-xs shadow-xl hover:scale-105 transition-transform ${confirmModal.type === 'approve' ? activeTheme.primary : 'bg-rose-600'}`}
              >
                {confirmModal.type === 'approve' ? 'Đồng ý duyệt' : 'Xóa đơn này'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW REFERENCE DETAIL MODAL (MODAL XEM SÁNG KIẾN TRÙNG LẶP) */}
      {viewingReferenceItem && (
        <div className="fixed inset-0 z-[2200] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
           <div className="bg-white dark:bg-slate-900 rounded-[3rem] w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border-4 border-orange-500 dark:border-orange-600">
              <div className="p-8 border-b dark:border-slate-800 flex items-center justify-between bg-orange-50 dark:bg-orange-900/20">
                 <div className="flex items-center gap-4">
                    <div className="bg-orange-500 p-4 rounded-2xl text-white shadow-lg"><Info size={24} /></div>
                    <div>
                       <h3 className="text-2xl font-black uppercase tracking-tighter dark:text-white">Sáng kiến tham chiếu</h3>
                       <p className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">Đang so sánh với dữ liệu gốc</p>
                    </div>
                 </div>
                 <button onClick={() => setViewingReferenceItem(null)} className="p-4 hover:bg-white dark:hover:bg-slate-800 rounded-2xl transition-all shadow-sm text-slate-400"><X size={28} /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-8 lg:p-12 space-y-8 custom-scrollbar">
                 <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                       <span className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest"><Calendar size={14}/> Năm {viewingReferenceItem.year}</span>
                       {viewingReferenceItem.level?.map(l => (
                          <span key={l} className={`flex items-center gap-2 ${LEVEL_COLORS[l] || 'bg-slate-500'} text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest`}><Award size={14}/> {l}</span>
                       ))}
                       {viewingReferenceItem.isScalable && (
                          <span className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest"><TrendingUp size={14}/> Nhân rộng</span>
                       )}
                       {Array.isArray(viewingReferenceItem.field) ? (
                          viewingReferenceItem.field.map(f => (
                              <span key={f} className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest"><Briefcase size={14}/> {f}</span>
                          ))
                       ) : viewingReferenceItem.field && (
                           <span className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest"><Briefcase size={14}/> {viewingReferenceItem.field}</span>
                       )}
                    </div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase leading-tight tracking-tight">{viewingReferenceItem.title}</h1>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 dark:bg-slate-800/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                    <div className="space-y-4">
                       <div className="space-y-1">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><Users size={12}/> Tác giả</p>
                          <p className="text-base font-bold text-slate-800 dark:text-white">{Array.isArray(viewingReferenceItem.authors) ? viewingReferenceItem.authors.join(', ') : viewingReferenceItem.authors}</p>
                       </div>
                    </div>
                    <div className="space-y-4">
                       <div className="space-y-1">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><Building2 size={12}/> Đơn vị áp dụng</p>
                          <p className="text-base font-bold text-slate-800 dark:text-white">{Array.isArray(viewingReferenceItem.unit) ? viewingReferenceItem.unit.join(', ') : viewingReferenceItem.unit}</p>
                       </div>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b dark:border-slate-800 pb-2"><FileText size={14}/> Nội dung giải pháp</p>
                    <div className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium whitespace-pre-wrap">{viewingReferenceItem.content}</div>
                 </div>

                 {/* Tài liệu tham khảo (nếu có) */}
                 {((viewingReferenceItem.attachmentUrls && viewingReferenceItem.attachmentUrls.length > 0) || viewingReferenceItem.driveLink) && (
                     <div className="space-y-4">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 border-b dark:border-slate-800 pb-2">
                          <Paperclip size={14}/> Tài liệu gốc
                        </p>
                        <div className="flex flex-wrap gap-3">
                           {viewingReferenceItem.attachmentUrls?.map((url, idx) => (
                             <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group">
                                <FileText size={18} className="text-slate-400 group-hover:text-blue-500"/>
                                <span className="text-xs font-bold text-slate-600 dark:text-slate-300 group-hover:text-blue-600">Tài liệu {idx + 1}</span>
                             </a>
                           ))}
                           {viewingReferenceItem.driveLink && (
                              <a href={viewingReferenceItem.driveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl hover:bg-blue-100 transition-all">
                                 <ExternalLink size={18} className="text-blue-500"/>
                                 <span className="text-xs font-bold text-blue-600">Link Drive gốc</span>
                              </a>
                           )}
                        </div>
                     </div>
                 )}
              </div>
           </div>
        </div>
      )}

      {/* LIGHTBOX / IMAGE PREVIEW MODAL */}
      {lightboxData && (
        <div 
          className="fixed inset-0 z-[2500] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 text-white hover:bg-white/20 hover:text-red-400 rounded-full transition-all z-50"
            onClick={closeLightbox}
          >
            <X size={32} strokeWidth={2.5}/>
          </button>

          {/* Prev Button */}
          {lightboxData.index > 0 && (
            <button 
              className="absolute left-4 lg:left-10 p-4 bg-white/10 text-white hover:bg-white/20 rounded-full transition-all z-50"
              onClick={handlePrevImage}
            >
              <ChevronLeft size={40} />
            </button>
          )}

          {/* Main Image */}
          <div className="relative max-w-full max-h-full flex flex-col items-center">
            <img 
              src={lightboxData.images[lightboxData.index]} 
              alt={`Preview ${lightboxData.index + 1}`} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-90 duration-300"
              onClick={(e) => e.stopPropagation()} 
            />
            <p className="mt-4 text-white/70 font-bold uppercase tracking-widest text-sm">
              {lightboxData.index + 1} / {lightboxData.images.length}
            </p>
          </div>

          {/* Next Button */}
          {lightboxData.index < lightboxData.images.length - 1 && (
            <button 
              className="absolute right-4 lg:right-10 p-4 bg-white/10 text-white hover:bg-white/20 rounded-full transition-all z-50"
              onClick={handleNextImage}
            >
              <ChevronRight size={40} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ApprovalPage;
