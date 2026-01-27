
import React, { useState, useRef } from 'react';
import { Send, FileText, User, Building2, Layers, CheckCircle2, Loader2, Sparkles, Lightbulb, Wand2, UploadCloud, AlertTriangle, Paperclip, FileIcon, X, Image as ImageIcon, Phone, CalendarClock, ScanSearch, Check, Globe, Trash2, ExternalLink, Eye } from 'lucide-react';
import { db, storage } from '../services/firebase';
import { autoFillRegisterForm, checkPublicSimilarity, validateInitiativeCompliance } from '../services/aiService';
import { ComplianceCheck, InitiativeScope, Initiative } from '../types';
import { useModal } from '../contexts/ModalContext';
import imageCompression from 'browser-image-compression';
import heic2any from 'heic2any';

// --- CẤU HÌNH TELEGRAM (Điền thông tin của bạn vào đây) ---
const TELEGRAM_BOT_TOKEN = "7775700636:AAGUPRIS3TIhuJLxy8tqbEmTRhqSWM4QXOc"; // Ví dụ: 789123456:AAF...
const TELEGRAM_CHAT_ID = "-5058192283";     // Ví dụ: -100123456789
// --------------------------------------------------------

interface RegisterPageProps {
  activeTheme: any;
}

const INITIATIVE_FIELDS = [
  'Thiết bị điện',
  'Thí nghiệm điện',
  'Tư vấn',
  'CNTT',
  'SC MBA',
  'Giải pháp',
  'Hành chính',
  'An toàn',
  'Kinh doanh'
];

interface PublicCheckResult {
  score: number;
  verdict: string;
  similarTitle?: string;
  similarId?: string;
  similarScope?: InitiativeScope;
  advice: string;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ activeTheme }) => {
  const { openViewInitiative } = useModal();
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    unit: '',
    contactZalo: '', 
    field: [] as string[],
    content: '',
    year: new Date().getFullYear(),
    monthsApplied: 0
  });

  // File States
  const [registrationFile, setRegistrationFile] = useState<File | null>(null);
  const [attachmentFiles, setAttachmentFiles] = useState<File[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  // Processing States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isCompressing, setIsCompressing] = useState(false);
  
  // AI Check States
  const [isCheckingSim, setIsCheckingSim] = useState(false);
  const [isFetchingRef, setIsFetchingRef] = useState(false); // State loading khi lấy dữ liệu tham chiếu
  const [checkResult, setCheckResult] = useState<PublicCheckResult | null>(null);
  const [complianceResult, setComplianceResult] = useState<ComplianceCheck | null>(null);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const attachmentInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleFieldToggle = (field: string) => {
    setFormData(prev => {
      if (prev.field.includes(field)) {
        return { ...prev, field: prev.field.filter(f => f !== field) };
      }
      return { ...prev, field: [...prev.field, field] };
    });
  };

  const uploadToStorage = async (file: File, path: string): Promise<string> => {
    const storageRef = storage.ref(path);
    const uploadTask = storageRef.put(file);

    return new Promise((resolve, reject) => {
       uploadTask.on(
         'state_changed',
         (snapshot) => {},
         (error) => reject(error),
         async () => {
            const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
            resolve(downloadURL);
         }
       );
    });
  };

  // --- HÀM GỬI TELEGRAM TRỰC TIẾP ---
  const sendTelegramNotification = async (data: any) => {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID || TELEGRAM_BOT_TOKEN.includes("YOUR_")) {
        console.warn("Chưa cấu hình Telegram Token hoặc Chat ID");
        return;
    }

    const message = `
🚀 <b>CÓ SÁNG KIẾN MỚI!</b>

📌 <b>Tiêu đề:</b> ${data.title.toUpperCase()}
👤 <b>Tác giả:</b> ${Array.isArray(data.authors) ? data.authors.join(", ") : data.authors}
🏢 <b>Đơn vị:</b> ${Array.isArray(data.unit) ? data.unit.join(", ") : data.unit}
📅 <b>Năm:</b> ${data.year}

📝 <b>Nội dung tóm tắt:</b>
${data.content.substring(0, 200)}...

🔗 <a href="${data.driveLink || '#'}">Xem tài liệu đính kèm</a>
    `;

    try {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML',
                disable_web_page_preview: true
            })
        });
        console.log("Đã gửi thông báo Telegram thành công");
    } catch (err) {
        console.error("Lỗi gửi Telegram:", err);
    }
  };

  const handleAutoFillUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setRegistrationFile(file);
    setIsAnalyzing(true);
    setError('');

    const fileType = file.name.split('.').pop()?.toLowerCase();

    try {
      if (fileType === 'pdf') {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
          const base64String = (reader.result as string).split(',')[1];
          try {
            const aiData = await autoFillRegisterForm(base64String, false);
            applyAiData(aiData);
          } catch (aiErr) {
            console.error(aiErr);
            setError('Không thể phân tích file PDF.');
          } finally {
            setIsAnalyzing(false);
          }
        };
      } 
      else if (fileType === 'docx') {
        const reader = new FileReader();
        reader.onload = async (event) => {
          try {
            const arrayBuffer = event.target?.result as ArrayBuffer;
            const mammoth = (window as any).mammoth;
            if (!mammoth) throw new Error("Thư viện đọc file Word chưa tải xong.");
            
            const result = await mammoth.extractRawText({ arrayBuffer: arrayBuffer });
            const text = result.value;
            const aiData = await autoFillRegisterForm(text, true);
            applyAiData(aiData);
          } catch (docxErr) {
             console.error(docxErr);
             setError('Lỗi khi đọc file Word (.docx).');
             setIsAnalyzing(false);
          }
        };
        reader.readAsArrayBuffer(file);
      }
      else {
         setIsAnalyzing(false);
         setError("Vui lòng chọn file .pdf hoặc .docx");
      }

    } catch (err) {
      console.error(err);
      setIsAnalyzing(false);
      setError("Có lỗi xảy ra khi xử lý file.");
    }
  };

  const applyAiData = (aiData: any) => {
    if (aiData) {
      let formattedContent = aiData.content || '';
      if (formattedContent) {
          formattedContent = formattedContent.replace(/([^\n])\s*-\s/g, "$1\n- ");
          formattedContent = formattedContent.replace(/\.\s*-/g, ".\n-");
          if (formattedContent.trim().length > 0 && !formattedContent.trim().startsWith('-')) {
             formattedContent = '- ' + formattedContent;
          }
      }

      setFormData(prev => ({
        ...prev,
        title: aiData.title || '',
        authors: aiData.authors || '',
        unit: aiData.unit || '',
        content: formattedContent,
        field: Array.isArray(aiData.field) ? aiData.field.filter((f: string) => INITIATIVE_FIELDS.includes(f)) : [],
        year: aiData.year || new Date().getFullYear(),
        contactZalo: prev.contactZalo || '',
        monthsApplied: aiData.monthsApplied || 0
      }));
      setIsAnalyzing(false);
    } else {
       setError('AI không tìm thấy thông tin hợp lệ trong file.');
       setIsAnalyzing(false);
    }
  };

  const handleCheckSimilarity = async () => {
    if (!formData.title || !formData.content) {
      alert("Vui lòng nhập Tiêu đề và Nội dung trước khi kiểm tra.");
      return;
    }

    setIsCheckingSim(true);
    setCheckResult(null);
    setComplianceResult(null);

    try {
      const snapshot = await db.collection('initiatives').get();
      const existingItems = snapshot.docs.map(doc => ({ 
        id: doc.id,
        title: doc.data().title,
        content: doc.data().content,
        scope: doc.data().scope
      } as any));

      const [simResult, compResult] = await Promise.all([
        checkPublicSimilarity({ title: formData.title, content: formData.content }, existingItems),
        validateInitiativeCompliance({ 
           title: formData.title, 
           content: formData.content, 
           monthsApplied: formData.monthsApplied 
        })
      ]);

      setCheckResult(simResult);
      setComplianceResult(compResult);

    } catch (err: any) {
      console.error(err);
      alert("Lỗi khi kiểm tra: " + err.message);
    } finally {
      setIsCheckingSim(false);
    }
  };

  // --- NEW: Handle View Reference Initiative ---
  const handleViewReference = async (id?: string) => {
    if (!id) return;
    setIsFetchingRef(true);
    try {
        const doc = await db.collection('initiatives').doc(id).get();
        if (doc.exists) {
            const data = { id: doc.id, ...doc.data() } as Initiative;
            openViewInitiative(data);
        } else {
            alert("Sáng kiến này không còn tồn tại hoặc đã bị xóa khỏi hệ thống.");
        }
    } catch (e) {
        console.error(e);
        alert("Không thể tải dữ liệu tham chiếu.");
    } finally {
        setIsFetchingRef(false);
    }
  };

  const handleAttachmentSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setAttachmentFiles(prev => [...prev, ...newFiles]);
    }
    if(attachmentInputRef.current) attachmentInputRef.current.value = '';
  };

  const removeAttachment = (index: number) => {
    setAttachmentFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    setIsCompressing(true);
    const newFiles: File[] = Array.from(e.target.files);
    
    try {
      const processedFiles: File[] = [];
      const newPreviews: string[] = [];
      const options = { maxSizeMB: 1, maxWidthOrHeight: 1920, useWebWorker: true, fileType: 'image/jpeg' };

      for (const file of newFiles) {
        let inputFile: File = file;
        if (file.type === 'image/heic' || file.name.toLowerCase().endsWith('.heic')) {
           try {
             const blob = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.8 });
             const finalBlob = Array.isArray(blob) ? blob[0] : blob;
             inputFile = new File([finalBlob as Blob], file.name.replace(/\.heic$/i, ".jpg"), { type: 'image/jpeg' });
           } catch (err) { continue; }
        }
        try {
          const compressed = await imageCompression(inputFile, options);
          processedFiles.push(compressed as File);
          newPreviews.push(URL.createObjectURL(compressed));
        } catch (compErr) {
          processedFiles.push(inputFile);
          newPreviews.push(URL.createObjectURL(inputFile));
        }
      }
      setImageFiles(prev => [...prev, ...processedFiles]);
      setImagePreviews(prev => [...prev, ...newPreviews]);
    } catch (err) {
      setError("Lỗi khi xử lý ảnh.");
    } finally {
      setIsCompressing(false);
      if(imageInputRef.current) imageInputRef.current.value = '';
    }
  };

  const removeImage = (index: number) => {
    setImageFiles(prev => prev.filter((_, i) => i !== index));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content || !formData.authors || !formData.unit || !formData.contactZalo) {
      setError('Vui lòng điền đầy đủ các thông tin bắt buộc (bao gồm Số Zalo liên hệ).');
      return;
    }
    
    if (formData.monthsApplied < 3) {
      setError('Hồ sơ KHÔNG HỢP LỆ: Giải pháp phải được áp dụng thực tế trên 3 tháng. Vui lòng bổ sung thông tin ngày áp dụng vào file đơn và tải lên lại.');
      return;
    }

    if (attachmentFiles.length === 0) {
      setShowWarningModal(true);
      return;
    }

    setIsSubmitting(true);
    setError('');
    setUploadProgress(10);

    try {
      const timestamp = Date.now();
      let registrationUrl = '';
      const attachmentUrls: string[] = [];
      const imageUrls: string[] = [];

      if (registrationFile) {
        const safeName = registrationFile.name.replace(/[^a-z0-9.]/gi, '_').toLowerCase();
        registrationUrl = await uploadToStorage(registrationFile, `pending_initiatives/forms/${timestamp}_${safeName}`);
      }
      setUploadProgress(30);

      if (attachmentFiles.length > 0) {
        const uploadPromises = attachmentFiles.map(file => {
          const safeName = file.name.replace(/[^a-z0-9.]/gi, '_').toLowerCase();
          return uploadToStorage(file, `pending_initiatives/attachments/${timestamp}_${safeName}`);
        });
        const urls = await Promise.all(uploadPromises);
        attachmentUrls.push(...urls);
      }
      setUploadProgress(60);

      if (imageFiles.length > 0) {
        const uploadPromises = imageFiles.map(file => {
          const safeName = file.name.replace(/[^a-z0-9.]/gi, '_').toLowerCase();
          return uploadToStorage(file, `pending_initiatives/images/${timestamp}_${safeName}`);
        });
        const urls = await Promise.all(uploadPromises);
        imageUrls.push(...urls);
      }
      setUploadProgress(90);

      const payload = {
        title: formData.title,
        authors: formData.authors.split(',').map(s => s.trim()).filter(Boolean),
        unit: formData.unit.split(',').map(s => s.trim()).filter(Boolean),
        contactZalo: formData.contactZalo,
        year: formData.year,
        monthsApplied: formData.monthsApplied,
        content: formData.content,
        field: formData.field,
        driveLink: attachmentUrls[0] || '',
        attachmentUrls: attachmentUrls,
        registrationFormUrl: registrationUrl,
        imageUrl: imageUrls[0] || '',
        imageUrls: imageUrls,
        status: 'pending',
        submittedAt: timestamp,
        publicAnalysis: checkResult ? {
          score: checkResult.score,
          verdict: checkResult.verdict,
          advice: checkResult.advice,
          similarTitle: checkResult.similarTitle,
          similarId: checkResult.similarId,
          similarScope: checkResult.similarScope
        } : null,
        complianceCheck: complianceResult
      };

      await db.collection('pending_initiatives').add(payload);
      
      // GỬI TELEGRAM SAU KHI LƯU DB
      await sendTelegramNotification(payload);

      setUploadProgress(100);
      setSuccess(true);
      setFormData({ title: '', authors: '', unit: '', contactZalo: '', field: [], content: '', year: new Date().getFullYear(), monthsApplied: 0 });
      setRegistrationFile(null);
      setAttachmentFiles([]);
      setImageFiles([]);
      setImagePreviews([]);
      setCheckResult(null);
      setComplianceResult(null);

    } catch (err: any) {
      console.error(err);
      setError('Lỗi khi gửi đơn đăng ký: ' + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center animate-slide text-center space-y-6 p-10">
        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-xl mb-4">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Đăng ký thành công!</h2>
        <p className="text-slate-500 max-w-md">Sáng kiến của bạn đã được gửi lên hệ thống và thông báo đến quản trị viên.</p>
        <button onClick={() => setSuccess(false)} className={`px-8 py-4 ${activeTheme.primary} text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl hover:scale-105 transition-all`}>Gửi sáng kiến khác</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-slide pb-20 relative">
      <div className="text-center space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 text-[10px] font-black uppercase tracking-widest">
           <Sparkles size={12} className="text-orange-500" /> Cổng thông tin mở
        </div>
        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Đăng ký Sáng kiến Mới</h2>
        <p className="text-slate-400 font-medium max-w-2xl mx-auto">Chia sẻ ý tưởng, giải pháp của bạn. Hệ thống hỗ trợ AI tự điền form và đánh giá trùng lặp.</p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 lg:p-12 border border-slate-100 dark:border-slate-800 shadow-xl space-y-8">
        
        {/* Upload Block */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-[2rem] border border-indigo-100 dark:border-indigo-800/30">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-sm text-indigo-500 shrink-0">
               {isAnalyzing ? <Loader2 className="animate-spin" size={32}/> : <Wand2 size={32} />}
            </div>
            <div className="flex-1 text-center md:text-left space-y-1">
              <h3 className="font-black text-indigo-900 dark:text-indigo-200 uppercase tracking-tight">Bước 1: Tải đơn đăng ký (Tự động điền)</h3>
              <p className="text-xs font-bold text-indigo-600 dark:text-indigo-300">Upload file (.pdf, .doc, .docx), AI sẽ tự động trích xuất thông tin.</p>
              {registrationFile && (
                 <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    <span className="text-[10px] font-bold text-slate-500">Đã nhận: {registrationFile.name}</span>
                 </div>
              )}
            </div>
            <div className="relative shrink-0">
               <input type="file" accept=".pdf,.doc,.docx" onChange={handleAutoFillUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" disabled={isAnalyzing} ref={fileInputRef} />
               <button className={`px-6 py-3 bg-indigo-600 text-white rounded-xl font-black uppercase text-[10px] shadow-lg shadow-indigo-600/20 flex items-center gap-2 hover:bg-indigo-700 transition-all ${isAnalyzing ? 'opacity-70 cursor-not-allowed' : ''}`}>
                  {isAnalyzing ? 'Đang đọc file...' : <><UploadCloud size={16}/> Chọn File Đơn</>}
               </button>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {error && <div className="p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-2xl text-sm font-bold text-center flex flex-col gap-1 items-center animate-in fade-in">
             <AlertTriangle size={24} className="mb-1"/>
             <span>{error}</span>
          </div>}

          <div className="space-y-2">
             <label className="text-xs font-black uppercase text-slate-400 ml-2 flex items-center gap-2"><Lightbulb size={12}/> Tên sáng kiến <span className="text-rose-500">*</span></label>
             <input type="text" required placeholder="Nhập tên đầy đủ của sáng kiến..." className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20 text-lg transition-all" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
               <label className="text-xs font-black uppercase text-slate-400 ml-2 flex items-center gap-2"><User size={12}/> Tác giả <span className="text-rose-500">*</span></label>
               <input type="text" required placeholder="Nguyễn Văn A, Trần Thị B..." className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20 transition-all" value={formData.authors} onChange={e => setFormData({...formData, authors: e.target.value})} />
               <p className="text-[10px] text-slate-400 ml-2 italic">Phân cách nhiều tác giả bằng dấu phẩy (,)</p>
            </div>
            <div className="space-y-2">
               <label className="text-xs font-black uppercase text-slate-400 ml-2 flex items-center gap-2"><Building2 size={12}/> Đơn vị áp dụng <span className="text-rose-500">*</span></label>
               <input type="text" required placeholder="Phòng Kỹ thuật, Đội 1..." className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20 transition-all" value={formData.unit} onChange={e => setFormData({...formData, unit: e.target.value})} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 ml-2 flex items-center gap-2"><Phone size={12}/> Zalo / SĐT liên hệ <span className="text-rose-500">*</span></label>
                <input type="text" required placeholder="Nhập số điện thoại Zalo của người đại diện..." className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-2xl font-bold dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20 transition-all" value={formData.contactZalo} onChange={e => setFormData({...formData, contactZalo: e.target.value})} />
                <p className="text-[10px] text-slate-400 ml-2 italic">Bắt buộc để Admin liên hệ nếu hồ sơ cần bổ sung/chỉnh sửa.</p>
             </div>

             <div className="space-y-2">
                <div className="flex items-center justify-between ml-2">
                   <label className="text-xs font-black uppercase text-slate-400 flex items-center gap-2"><CalendarClock size={12}/> Đã áp dụng thực tế (Tháng)</label>
                   {formData.monthsApplied < 3 && <span className="text-[9px] font-bold text-rose-500 bg-rose-50 px-2 py-0.5 rounded-full">Yêu cầu &gt; 3 tháng</span>}
                </div>
                <div className="relative">
                   <input 
                      type="number" 
                      readOnly 
                      className={`w-full px-6 py-4 border rounded-2xl font-black text-center outline-none transition-all cursor-not-allowed ${formData.monthsApplied < 3 ? 'bg-rose-50 border-rose-200 text-rose-600' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300'}`}
                      value={formData.monthsApplied} 
                   />
                   <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400 uppercase bg-white/50 dark:bg-slate-900/50 px-2 py-1 rounded-lg">Auto AI</span>
                </div>
                <p className="text-[10px] text-slate-400 ml-2 italic">Dữ liệu được AI trích xuất tự động. Nếu sai, vui lòng cập nhật trong file và tải lên lại.</p>
             </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-slate-400 ml-2 flex items-center gap-2"><Layers size={12}/> Lĩnh vực chuyên môn</label>
            <div className="flex flex-wrap gap-2 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
              {INITIATIVE_FIELDS.map(field => (
                <button key={field} type="button" onClick={() => handleFieldToggle(field)} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all border ${formData.field.includes(field) ? `${activeTheme.primary} text-white border-transparent shadow-md` : 'bg-white dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700 hover:border-orange-300'}`}>
                  {field}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
             <div className="flex justify-between items-center ml-2">
                <label className="text-xs font-black uppercase text-slate-400 flex items-center gap-2"><FileText size={12}/> Nội dung tóm tắt <span className="text-rose-500">*</span></label>
                {formData.content && <span className="text-[10px] font-bold text-emerald-500 flex items-center gap-1"><Sparkles size={10}/> AI Support</span>}
             </div>
             <textarea required rows={12} placeholder="Mô tả ngắn gọn về giải pháp, tính mới và hiệu quả áp dụng..." className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 rounded-[2rem] font-medium dark:text-white outline-none focus:ring-2 focus:ring-orange-500/20 resize-none transition-all leading-relaxed whitespace-pre-wrap" value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} />
             
             <div className="flex justify-end pt-2">
                <button 
                  type="button" 
                  onClick={handleCheckSimilarity}
                  disabled={isCheckingSim || !formData.title || !formData.content}
                  className="flex items-center gap-2 px-5 py-2.5 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-xl text-[11px] font-black uppercase transition-all disabled:opacity-50"
                >
                   {isCheckingSim ? <Loader2 size={14} className="animate-spin"/> : <ScanSearch size={14}/>}
                   {isCheckingSim ? 'Đang thẩm định toàn diện...' : 'AI Thẩm định & Tra cứu (Toàn NPC)'}
                </button>
             </div>
             
             {/* Check Results */}
             <div className="space-y-4">
               {checkResult && (
                 <div className={`mt-4 p-6 rounded-[2rem] border animate-in fade-in slide-in-from-top-4 duration-500 ${checkResult.score > 50 ? 'bg-rose-50 border-rose-100 dark:bg-rose-900/10 dark:border-rose-900/30' : 'bg-emerald-50 border-emerald-100 dark:bg-emerald-900/10 dark:border-emerald-900/30'}`}>
                    <div className="flex items-start gap-4">
                       <div className={`p-3 rounded-2xl shrink-0 ${checkResult.score > 50 ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'}`}>
                          {checkResult.score > 50 ? <AlertTriangle size={24}/> : <Check size={24}/>}
                       </div>
                       <div className="space-y-3 w-full">
                          <div className="flex items-center justify-between">
                             <h4 className={`text-sm font-black uppercase ${checkResult.score > 50 ? 'text-rose-700 dark:text-rose-400' : 'text-emerald-700 dark:text-emerald-400'}`}>
                                {checkResult.score > 50 ? 'Cảnh báo trùng lặp ý tưởng' : 'Ý tưởng mới & Tiềm năng'}
                             </h4>
                             <span className={`px-3 py-1 rounded-lg text-[10px] font-black text-white ${checkResult.score > 50 ? 'bg-rose-500' : 'bg-emerald-500'}`}>
                                {Math.round(checkResult.score)}% Giống
                             </span>
                          </div>
                          
                          {checkResult.similarTitle && (
                             <div className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-black/20 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                                <span className="font-bold uppercase text-slate-400 text-[10px] flex items-center gap-1.5 mb-1">
                                    Sáng kiến giống nhất:
                                    <span className={`px-1.5 py-0.5 rounded text-[8px] font-black uppercase text-white ${checkResult.similarScope === 'NPC' ? 'bg-indigo-500' : 'bg-slate-500'}`}>
                                       {checkResult.similarScope === 'NPC' ? <><Globe size={8} className="inline mr-0.5"/> Nguồn NPC</> : 'Nội bộ'}
                                    </span>
                                </span>
                                <div className="flex items-start justify-between gap-2">
                                    <span className="italic">"{checkResult.similarTitle}"</span>
                                    {checkResult.similarId && (
                                        <button 
                                            type="button"
                                            onClick={() => handleViewReference(checkResult.similarId)}
                                            disabled={isFetchingRef}
                                            className={`shrink-0 flex items-center gap-1.5 px-2 py-1 rounded-lg text-[9px] font-black uppercase transition-all bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm ${isFetchingRef ? 'text-slate-400 cursor-not-allowed' : 'text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-indigo-900/30'}`}
                                        >
                                            {isFetchingRef ? <Loader2 size={10} className="animate-spin"/> : <Eye size={10}/>}
                                            Xem để học tập
                                        </button>
                                    )}
                                </div>
                             </div>
                          )}

                          <div className="text-xs leading-relaxed font-medium text-slate-700 dark:text-slate-200 whitespace-pre-wrap">
                             {checkResult.advice}
                          </div>
                       </div>
                    </div>
                 </div>
               )}
             </div>
          </div>

          {/* Attachments Section */}
          <div className="space-y-3">
            <div className="flex justify-between items-center ml-2">
              <label className="text-xs font-black uppercase text-slate-400 flex items-center gap-2"><Paperclip size={12}/> Tài liệu đính kèm (Thuyết minh, Bản vẽ...)</label>
              <span className="text-[10px] font-bold text-slate-400">{attachmentFiles.length} file</span>
            </div>
            
            <div className="flex flex-col gap-3">
              {attachmentFiles.map((file, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 animate-in fade-in slide-in-from-bottom-2">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                    <FileText size={16}/>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300 truncate">{file.name}</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                  <button type="button" onClick={() => removeAttachment(idx)} className="p-2 hover:bg-rose-100 text-slate-400 hover:text-rose-500 rounded-lg transition-colors">
                    <X size={16}/>
                  </button>
                </div>
              ))}

              <label className="flex items-center justify-center gap-2 w-full py-4 bg-white dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl cursor-pointer hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all group">
                <UploadCloud size={20} className="text-slate-300 group-hover:text-blue-500 transition-colors"/>
                <span className="text-xs font-bold text-slate-400 group-hover:text-blue-600 uppercase">Thêm tài liệu (PDF, Word, Excel...)</span>
                <input type="file" multiple onChange={handleAttachmentSelect} className="hidden" ref={attachmentInputRef} accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx" />
              </label>
            </div>
          </div>

          {/* Images Section */}
          <div className="space-y-3">
            <div className="flex justify-between items-center ml-2">
              <label className="text-xs font-black uppercase text-slate-400 flex items-center gap-2"><ImageIcon size={12}/> Hình ảnh minh họa</label>
              <span className="text-[10px] font-bold text-slate-400">{imageFiles.length} ảnh</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {imagePreviews.map((src, idx) => (
                <div key={idx} className="aspect-square rounded-2xl overflow-hidden relative group border border-slate-200 dark:border-slate-700">
                  <img src={src} alt="preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button type="button" onClick={() => removeImage(idx)} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-rose-500 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}

              <label className={`aspect-square rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-all group ${isCompressing ? 'opacity-50 pointer-events-none' : ''}`}>
                {isCompressing ? <Loader2 className="animate-spin text-purple-500"/> : <ImageIcon size={24} className="text-slate-300 group-hover:text-purple-500 transition-colors"/>}
                <span className="text-[9px] font-bold text-slate-400 group-hover:text-purple-600 uppercase text-center px-2">
                  {isCompressing ? 'Đang xử lý...' : 'Thêm ảnh'}
                </span>
                <input type="file" multiple onChange={handleImageSelect} className="hidden" ref={imageInputRef} accept="image/*,.heic" />
              </label>
            </div>
          </div>
          
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
            {isSubmitting && <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden"><div className={`h-full ${activeTheme.primary} transition-all duration-300`} style={{ width: `${uploadProgress}%` }}></div></div>}
            <button 
               type="submit" 
               disabled={isSubmitting || isAnalyzing || isCompressing || formData.monthsApplied < 3} 
               className={`w-full py-5 ${formData.monthsApplied < 3 ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : `${activeTheme.primary} text-white shadow-xl hover:brightness-110`} rounded-[2rem] font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3 disabled:opacity-50`}
            >
              {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
              {isSubmitting ? 'Đang tải lên hồ sơ...' : 'Gửi đơn đăng ký'}
            </button>
          </div>
        </form>
      </div>
      
      {showWarningModal && (
         <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] w-full max-w-sm p-8 shadow-2xl border-4 border-white dark:border-slate-800 text-center space-y-6">
               <div className="w-20 h-20 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center mx-auto"><AlertTriangle size={40} strokeWidth={3}/></div>
               <div className="space-y-2">
                  <h3 className="text-xl font-black uppercase text-slate-900 dark:text-white">Thiếu tài liệu minh chứng!</h3>
                  <p className="text-sm text-slate-500 font-medium">Bạn cần tải lên ít nhất một file thuyết minh hoặc mô tả giải pháp để Hội đồng xem xét.</p>
               </div>
               <button onClick={() => setShowWarningModal(false)} className="w-full py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-2xl font-black uppercase text-xs transition-all">Đã hiểu, quay lại</button>
            </div>
         </div>
      )}
    </div>
  );
};

export default RegisterPage;
