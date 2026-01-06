
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Microscope, Users, UserCheck, GraduationCap, DollarSign, 
  CheckCircle2, Plus, Search, Trash2, Edit2, ExternalLink, Loader2
} from 'lucide-react';
import { db } from '../services/firebase';
import { ResearchProject, SettlementStatus, ProjectStatus } from '../types';

interface ResearchPageProps {
  activeTheme: any;
  user: any;
  onEdit: (project: ResearchProject) => void;
  onAdd: () => void;
}

const SETTLEMENT_LABELS: Record<SettlementStatus, { label: string, color: string }> = {
  'chua_thanh_toan': { label: 'Chưa thanh toán', color: 'text-slate-400 bg-slate-100 dark:bg-slate-800' },
  'dang_thanh_toan': { label: 'Đang thanh toán', color: 'text-amber-500 bg-amber-50 dark:bg-amber-900/20' },
  'da_quyet_toan': { label: 'Đã quyết toán', color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' }
};

const PROJECT_STATUS_LABELS: Record<ProjectStatus, { label: string, color: string }> = {
  'dang_thuc_hien': { label: 'Đang thực hiện', color: 'bg-blue-500' },
  'da_nghiem_thu': { label: 'Đã nghiệm thu', color: 'bg-emerald-500' },
  'da_huy': { label: 'Đã hủy', color: 'bg-rose-500' }
};

const ResearchPage: React.FC<ResearchPageProps> = ({ activeTheme, user, onEdit, onAdd }) => {
  const [projects, setProjects] = useState<ResearchProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const unsubscribe = db.collection('research_projects').orderBy('year', 'desc').onSnapshot(
      snapshot => {
        const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ResearchProject));
        setProjects(docs);
        setLoading(false);
      },
      err => {
        console.error(err);
        setLoading(false);
      }
    );
    return unsubscribe;
  }, []);

  const stats = useMemo(() => {
    const total = projects.length;
    const totalBudget = projects.reduce((acc, p) => acc + (p.budget || 0), 0);
    const completed = projects.filter(p => p.status === 'da_nghiem_thu').length;
    return { total, totalBudget, completed };
  }, [projects]);

  const filteredProjects = projects.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Xác nhận xóa đề tài nghiên cứu này?')) return;
    try {
      await db.collection('research_projects').doc(id).delete();
    } catch (e) {
      alert("Lỗi khi xóa dữ liệu.");
    }
  };

  return (
    <div className="space-y-10 animate-slide pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Nghiên cứu KHCN</h2>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Quản trị danh mục đề tài khoa học công nghệ</p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Tìm đề tài..." 
            className="w-full pl-12 pr-6 py-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm font-bold text-sm outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Tổng số đề tài', value: stats.total, icon: Microscope, color: 'blue' },
          { label: 'Tổng kinh phí', value: formatCurrency(stats.totalBudget), icon: DollarSign, color: 'emerald' },
          { label: 'Đã nghiệm thu', value: stats.completed, icon: CheckCircle2, color: 'amber' }
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-6">
             <div className="p-4 bg-slate-50 dark:bg-slate-800 text-slate-400 rounded-2xl"><stat.icon size={24}/></div>
             <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">{stat.value}</h4>
             </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        {loading ? (
          <div className="flex justify-center py-20"><Loader2 className="animate-spin text-orange-600" size={48} /></div>
        ) : filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <div key={project.id} className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 lg:p-12 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
              <div className="flex flex-col lg:flex-row gap-10 relative z-10">
                <div className="flex-1 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-slate-900 text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest">Năm {project.year}</span>
                    <span className={`${activeTheme.primary} text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest`}>Cấp {project.level}</span>
                    <div className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${SETTLEMENT_LABELS[project.settlementStatus]?.color || ''}`}>
                       {SETTLEMENT_LABELS[project.settlementStatus]?.label || ''}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase leading-tight group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                         <div className="p-2 bg-blue-50 dark:bg-blue-900/20 text-blue-500 rounded-lg shrink-0"><Users size={16}/></div>
                         <div>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Nhóm tác giả</p>
                            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{project.authors?.join(', ')}</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-3">
                         <div className="p-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 rounded-lg shrink-0"><UserCheck size={16}/></div>
                         <div>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Thành viên chính</p>
                            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{project.mainMembers?.join(', ')}</p>
                         </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                         <div className="p-2 bg-amber-50 dark:bg-amber-900/20 text-amber-500 rounded-lg shrink-0"><GraduationCap size={16}/></div>
                         <div>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Chuyên gia</p>
                            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{project.experts?.join(', ')}</p>
                         </div>
                      </div>
                      <div className="flex items-start gap-3">
                         <div className="p-2 bg-rose-50 dark:bg-rose-900/20 text-rose-500 rounded-lg shrink-0"><DollarSign size={16}/></div>
                         <div>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Kinh phí</p>
                            <p className="text-sm font-black text-slate-900 dark:text-white">{formatCurrency(project.budget || 0)}</p>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-80 space-y-8 bg-slate-50 dark:bg-slate-800/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tiến độ</p>
                       <span className="text-lg font-black text-orange-600">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-white dark:bg-slate-900 h-3 rounded-full overflow-hidden border border-slate-100 dark:border-slate-800">
                       <div className={`h-full ${activeTheme.primary} transition-all duration-1000`} style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                       <div className={`w-3 h-3 rounded-full ${PROJECT_STATUS_LABELS[project.status || 'dang_thuc_hien'].color}`}></div>
                       <span className="text-[10px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">
                          {PROJECT_STATUS_LABELS[project.status || 'dang_thuc_hien'].label}
                       </span>
                    </div>
                    {project.attachmentUrl && (
                      <a href={project.attachmentUrl} target="_blank" className="flex items-center justify-center gap-2 w-full py-4 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 rounded-2xl font-black text-[10px] uppercase border border-slate-100 dark:border-slate-800 hover:bg-orange-50 hover:text-orange-600 transition-all shadow-sm">
                         <ExternalLink size={14}/> Xem thuyết minh
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {user && (
                <div className="absolute top-8 right-8 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button onClick={() => onEdit(project)} className="p-3 bg-white dark:bg-slate-800 text-slate-400 hover:text-blue-500 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 transition-all"><Edit2 size={16}/></button>
                   <button onClick={() => handleDelete(project.id)} className="p-3 bg-white dark:bg-slate-800 text-slate-400 hover:text-rose-500 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 transition-all"><Trash2 size={16}/></button>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="py-32 text-center space-y-6 bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-dashed border-slate-100 dark:border-slate-800">
             <div className="bg-slate-50 dark:bg-slate-800 p-10 rounded-full w-fit mx-auto text-slate-300"><Microscope size={64}/></div>
             <p className="font-black text-slate-400 uppercase tracking-widest">Chưa có đề tài KHCN nào</p>
             {user && <button onClick={onAdd} className="px-8 py-4 bg-orange-600 text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl flex items-center gap-2 mx-auto"><Plus size={18}/> Thêm đề tài mới</button>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResearchPage;
