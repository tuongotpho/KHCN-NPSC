import React, { useState, useEffect } from 'react';
import { masterDb } from '../services/firebaseMaster';
import { CompanyConfig } from '../types';
import { Building2, Save, Plus, Trash2, Loader2, ShieldCheck, Key, Globe, Database, HardDrive, MessageSquare, Smartphone, BrainCircuit, AlertTriangle, Eye, EyeOff } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const AdminConfigPage: React.FC<{ activeTheme: any }> = ({ activeTheme }) => {
  const { companyId, user, userProfile } = useApp();
  const [configs, setConfigs] = useState<CompanyConfig[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMaster, setIsMaster] = useState(false);
  const [showGeminiKey, setShowGeminiKey] = useState(false);
  
  const [editingConfig, setEditingConfig] = useState<CompanyConfig>({
    id: '',
    name: '',
    adminEmail: '',
    firebaseConfig: {
      apiKey: '',
      authDomain: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: '',
      appId: ''
    },
    geminiApiKey: ''
  });

  useEffect(() => {
    if (!user || !userProfile) return;
    
    const masterStatus = userProfile.role === 'master_admin';
    setIsMaster(masterStatus);

    if (masterStatus) {
      const unsubscribe = masterDb.collection('company_configs').onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as CompanyConfig));
        setConfigs(data);
        setLoading(false);
      });
      return unsubscribe;
    } else {
      // Nếu là admin công ty, tìm config theo email của họ (dùng ID đã sanitize)
      const userEmail = user.email || '';
      const sanitizedId = userEmail.replace(/[@.]/g, '_');
      
      masterDb.collection('company_configs').doc(sanitizedId).get().then(doc => {
        if (doc.exists) {
          const data = doc.data() as CompanyConfig;
          setEditingConfig(prev => ({
            ...prev,
            ...data,
            id: doc.id,
            firebaseConfig: {
              ...prev.firebaseConfig,
              ...(data.firebaseConfig || {})
            }
          }));
        } else {
          // Nếu chưa có config, khởi tạo với email hiện tại
          setEditingConfig(prev => ({ ...prev, adminEmail: userEmail, id: sanitizedId }));
        }
        setLoading(false);
      });
    }
  }, [user, userProfile]);

  const handleSave = async (config: CompanyConfig, type: 'firebase' | 'gemini' | 'all' = 'all') => {
    if (!config.adminEmail || !config.name) return alert('Vui lòng nhập Email Admin và Tên đơn vị');
    try {
      // Dùng adminEmail làm ID document để dễ quản lý
      const docId = config.adminEmail.replace(/[@.]/g, '_');
      
      let dataToSave: any = { 
        id: docId,
        adminEmail: config.adminEmail,
        name: config.name
      };

      if (type === 'firebase' || type === 'all') {
        dataToSave.firebaseConfig = config.firebaseConfig;
      }
      if (type === 'gemini' || type === 'all') {
        // Đảm bảo không lưu chuỗi trống nếu không muốn
        dataToSave.geminiApiKey = config.geminiApiKey?.trim() || '';
      }

      await masterDb.collection('company_configs').doc(docId).set(dataToSave, { merge: true });
      
      let message = 'Đã lưu cấu hình thành công.';
      if (type === 'firebase') message = 'Đã lưu cấu hình Firebase thành công. Vui lòng đăng nhập lại để áp dụng thay đổi.';
      if (type === 'gemini') message = 'Đã lưu Gemini API Key thành công.';
      
      alert(message);
      if (isMaster && type === 'all') {
        setEditingConfig({
          id: '',
          name: '',
          adminEmail: '',
          firebaseConfig: {
            apiKey: '',
            authDomain: '',
            projectId: '',
            storageBucket: '',
            messagingSenderId: '',
            appId: ''
          },
          geminiApiKey: ''
        });
      }
    } catch (e: any) {
      alert("Lỗi khi lưu: " + e.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Chắc chắn xóa cấu hình này?')) {
      await masterDb.collection('company_configs').doc(id).delete();
    }
  };

  if (loading) return <div className="flex justify-center py-20"><Loader2 className="animate-spin text-orange-600" size={48} /></div>;

  return (
    <div className="space-y-10 animate-slide pb-20">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            {isMaster ? 'Quản trị Hệ thống (Master)' : 'Cấu hình Firebase Công ty'}
          </h2>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
            {isMaster ? 'Quản lý danh sách cấu hình các đơn vị thành viên' : 'Thiết lập tài khoản Firebase riêng cho đơn vị của bạn'}
          </p>
        </div>
        <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 rounded-2xl border border-emerald-100 dark:border-emerald-800 flex items-center gap-3">
          <ShieldCheck size={24} />
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">Trạng thái</p>
            <p className="text-sm font-black uppercase tracking-tighter leading-none">{isMaster ? 'Master Admin' : 'Company Admin'}</p>
          </div>
        </div>
      </div>
      
      {/* Form chỉnh sửa/thêm mới */}
      <div className="bg-white dark:bg-slate-900 p-8 lg:p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm space-y-8">
        <div className="flex items-center gap-4 border-b dark:border-slate-800 pb-6">
          <div className={`p-4 rounded-2xl ${activeTheme.primary} text-white shadow-lg`}><Database size={24} /></div>
          <div>
            <h3 className="text-xl font-black uppercase tracking-tighter dark:text-white">Thông tin kết nối Firebase</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Vui lòng nhập chính xác các thông số từ Firebase Console</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase ml-4 tracking-widest">Email Admin (Tài khoản đăng nhập)</label>
            <input 
              disabled={!isMaster}
              placeholder="Ví dụ: admin@pcnamdinh.vn" 
              className="w-full p-5 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold text-sm outline-none focus:ring-4 focus:ring-orange-500/10 transition-all dark:text-white disabled:opacity-50" 
              value={editingConfig.adminEmail} 
              onChange={e => setEditingConfig({...editingConfig, adminEmail: e.target.value})} 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase ml-4 tracking-widest">Tên đơn vị</label>
            <input 
              placeholder="Ví dụ: Công ty Điện lực Nam Định" 
              className="w-full p-5 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold text-sm outline-none focus:ring-4 focus:ring-orange-500/10 transition-all dark:text-white" 
              value={editingConfig.name} 
              onChange={e => setEditingConfig({...editingConfig, name: e.target.value})} 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase ml-4 tracking-widest">Mã đơn vị (ID)</label>
            <input 
              disabled={!isMaster}
              placeholder="pcnamdinh" 
              className="w-full p-5 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold text-sm outline-none focus:ring-4 focus:ring-orange-500/10 transition-all dark:text-white disabled:opacity-50" 
              value={editingConfig.id} 
              onChange={e => setEditingConfig({...editingConfig, id: e.target.value})} 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: 'API Key', key: 'apiKey', icon: Key },
            { label: 'Auth Domain', key: 'authDomain', icon: Globe },
            { label: 'Project ID', key: 'projectId', icon: Database },
            { label: 'Storage Bucket', key: 'storageBucket', icon: HardDrive },
            { label: 'Messaging Sender ID', key: 'messagingSenderId', icon: MessageSquare },
            { label: 'App ID', key: 'appId', icon: Smartphone },
          ].map((field) => (
            <div key={field.key} className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase ml-4 tracking-widest flex items-center gap-2">
                <field.icon size={12} /> {field.label}
              </label>
              <input 
                placeholder={`Nhập ${field.label}...`} 
                className="w-full p-5 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold text-sm outline-none focus:ring-4 focus:ring-orange-500/10 transition-all dark:text-white" 
                value={(editingConfig.firebaseConfig as any)[field.key]} 
                onChange={e => setEditingConfig({
                  ...editingConfig, 
                  firebaseConfig: { ...editingConfig.firebaseConfig, [field.key]: e.target.value }
                })} 
              />
            </div>
          ))}
        </div>

        <div className="pt-6 border-t dark:border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className={`p-4 rounded-2xl bg-violet-500 text-white shadow-lg`}><BrainCircuit size={24} /></div>
              <div>
                <h3 className="text-xl font-black uppercase tracking-tighter dark:text-white">Cấu hình Gemini AI</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Thiết lập API Key riêng để sử dụng các tính năng AI của đơn vị</p>
              </div>
            </div>
            <button 
              onClick={() => handleSave(editingConfig, 'gemini')}
              className="px-6 py-3 bg-violet-600 text-white rounded-xl font-black uppercase text-[10px] shadow-lg shadow-violet-600/20 flex items-center gap-2 hover:bg-violet-700 transition-all"
            >
              <Save size={16}/> Lưu riêng API Key
            </button>
          </div>
          <div className="space-y-2 max-w-2xl">
            <label className="text-[10px] font-black text-slate-400 uppercase ml-4 tracking-widest flex items-center gap-2">
              <Key size={12} /> Gemini API Key
            </label>
            <div className="relative">
              <input 
                type={showGeminiKey ? "text" : "password"}
                placeholder="Dán Gemini API Key của bạn vào đây..."
                className="w-full p-5 pr-24 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold text-sm outline-none focus:ring-4 focus:ring-violet-500/10 transition-all dark:text-white" 
                value={editingConfig.geminiApiKey || ''} 
                onPaste={(e) => {
                  // Đảm bảo paste hoạt động bình thường
                  const pastedText = e.clipboardData.getData('text');
                  if (pastedText) {
                    setEditingConfig({ ...editingConfig, geminiApiKey: pastedText });
                  }
                }}
                onChange={e => setEditingConfig({ ...editingConfig, geminiApiKey: e.target.value })} 
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <button 
                  type="button"
                  onClick={async () => {
                    try {
                      // Thử dùng Clipboard API trước
                      const text = await navigator.clipboard.readText();
                      if (text) {
                        setEditingConfig({ ...editingConfig, geminiApiKey: text });
                        return;
                      }
                    } catch (err) {
                      // Fallback nếu trình duyệt chặn
                      console.warn("Clipboard API failed, falling back to manual paste prompt");
                    }
                    
                    const manualText = prompt("Vui lòng dán Gemini API Key vào đây:");
                    if (manualText) {
                      setEditingConfig({ ...editingConfig, geminiApiKey: manualText });
                    }
                  }}
                  className="p-2 text-slate-400 hover:text-violet-500 transition-colors text-[10px] font-black uppercase"
                  title="Dán từ Clipboard"
                >
                  Dán
                </button>
                <button 
                  type="button"
                  onClick={() => setShowGeminiKey(!showGeminiKey)}
                  className="p-2 text-slate-400 hover:text-violet-500 transition-colors"
                >
                  {showGeminiKey ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <p className="text-[10px] text-rose-500 ml-4 font-black uppercase tracking-widest flex items-center gap-1">
              <AlertTriangle size={10} /> Bắt buộc: Phải có API Key riêng để sử dụng các tính năng AI.
            </p>
          </div>
        </div>

        <div className="pt-6 flex justify-end gap-4">
          <button 
            onClick={() => handleSave(editingConfig, 'firebase')} 
            className="px-8 py-5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-2xl font-black uppercase text-xs tracking-widest border border-slate-200 dark:border-slate-700 hover:bg-slate-200 transition-all"
          >
            Lưu Firebase
          </button>
          <button 
            onClick={() => handleSave(editingConfig, 'all')} 
            className={`px-10 py-5 ${activeTheme.primary} text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl flex items-center gap-3 hover:scale-105 transition-all active:scale-95`}
          >
            <Save size={20}/> Lưu tất cả cấu hình
          </button>
        </div>
      </div>

      {isMaster && configs.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-xl font-black uppercase tracking-tighter ml-4">Danh sách đơn vị đã cấu hình</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {configs.map(config => (
              <div key={config.id} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 flex items-center justify-between group hover:shadow-xl transition-all">
                <div className="flex items-center gap-5">
                  <div className={`p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 ${activeTheme.text} group-hover:scale-110 transition-transform`}>
                    <Building2 size={24}/>
                  </div>
                  <div>
                    <p className="font-black text-lg text-slate-900 dark:text-white tracking-tighter leading-tight">{config.name}</p>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">{config.id}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => setEditingConfig(config)} className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors" title="Sửa"><Save size={18}/></button>
                  <button onClick={() => handleDelete(config.id)} className="p-3 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-100 transition-colors" title="Xóa"><Trash2 size={18}/></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminConfigPage;
