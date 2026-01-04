
import React, { useState, useMemo } from 'react';
import { 
  Zap, Award, Building2, Activity, Calendar, Briefcase, 
  BarChart3, FileText, Loader2, Sparkles, Bot, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { Initiative, InitiativeLevel } from '../types';
import { getAIInstance, AI_SYSTEM_INSTRUCTION } from '../services/aiService';

interface StatsPageProps {
  initiatives: Initiative[];
  activeTheme: any;
  onViewItem: (item: Initiative) => void;
}

const ITEMS_PER_PAGE = 5;

const StatsPage: React.FC<StatsPageProps> = ({ initiatives, activeTheme, onViewItem }) => {
  const [statsView, setStatsView] = useState<'level' | 'year' | 'unit' | 'field'>('level');
  const [statsDetailValue, setStatsDetailValue] = useState<string | number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [aiInsight, setAiInsight] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const dashboardStats = useMemo(() => {
    const total = initiatives.length;
    const currentYear = new Date().getFullYear();
    const currentYearCount = initiatives.filter(i => i.year === currentYear).length;
    
    const dist = (key: keyof Initiative) => initiatives.reduce((acc, curr) => {
      const val = curr[key];
      if (Array.isArray(val)) {
        val.forEach(v => { acc[v] = (acc[v] || 0) + 1; });
      } else if (val) {
        acc[val as string] = (acc[val as string] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    return { 
      total, 
      currentYearCount, 
      levelDist: dist('level'), 
      yearDist: dist('year'), 
      unitDist: dist('unit'), 
      fieldDist: dist('field') 
    };
  }, [initiatives]);

  const drillDownList = useMemo(() => {
    if (!statsDetailValue) return [];
    return initiatives.filter(i => {
      if (statsView === 'level') return i.level?.includes(statsDetailValue as InitiativeLevel);
      if (statsView === 'year') return i.year === Number(statsDetailValue);
      if (statsView === 'unit') {
        return Array.isArray(i.unit) ? i.unit.includes(statsDetailValue as string) : i.unit === statsDetailValue;
      }
      if (statsView === 'field') return (i.field || 'Khác') === statsDetailValue;
      return false;
    });
  }, [initiatives, statsView, statsDetailValue]);

  const paginatedList = drillDownList.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const generateInsight = async () => {
    setIsGenerating(true);
    try {
      const ai = getAIInstance();
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Phân tích dữ liệu thống kê sau và đưa ra nhận xét chiến lược: ${JSON.stringify(dashboardStats)}`,
        config: { systemInstruction: AI_SYSTEM_INSTRUCTION }
      });
      setAiInsight(response.text || "");
    } catch (e) {
      setAiInsight("Không thể tạo phân tích lúc này.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-10 animate-slide">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Thống kê tổng thể</h2>
        <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
          <Activity size={14}/> Theo dõi dữ liệu thực
        </div>
      </div>
      
      {/* Top 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Tổng sáng kiến', value: dashboardStats.total, icon: Zap, color: 'blue' },
          { label: 'Cấp EVN', value: dashboardStats.levelDist['EVN'] || 0, icon: Award, color: 'rose' },
          { label: 'Cấp NPC', value: dashboardStats.levelDist['NPC'] || 0, icon: Building2, color: 'orange' },
          { label: 'Năm hiện tại', value: dashboardStats.currentYearCount, icon: Activity, color: 'emerald' }
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm text-center group hover:shadow-lg transition-all">
            <div className={`p-4 bg-${stat.color}-50 dark:bg-slate-800 text-${stat.color}-600 dark:text-white rounded-2xl mb-4 mx-auto w-fit group-hover:scale-110 transition-transform`}>
              <stat.icon size={24} />
            </div>
            <p className="text-slate-400 dark:text-slate-500 font-bold uppercase text-[10px] mb-1">{stat.label}</p>
            <h4 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">{stat.value}</h4>
          </div>
        ))}
      </div>

      {/* Main Analysis Section */}
      <div className="bg-white dark:bg-slate-900 p-6 lg:p-10 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-sm space-y-8">
        <div className="flex flex-wrap items-center gap-3 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-[2rem] border border-slate-100 dark:border-slate-700 w-fit">
          {[
            { id: 'level', label: 'Cấp độ', icon: Award },
            { id: 'year', label: 'Năm', icon: Calendar },
            { id: 'unit', label: 'Đơn vị', icon: Building2 },
            { id: 'field', label: 'Lĩnh vực', icon: Briefcase }
          ].map(v => (
            <button 
              key={v.id} 
              onClick={() => { setStatsView(v.id as any); setStatsDetailValue(null); setCurrentPage(1); }} 
              className={`px-8 py-4 rounded-[1.5rem] font-black text-sm flex items-center gap-2 transition-all ${statsView === v.id ? `${activeTheme.primary} text-white shadow-xl` : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
            >
              <v.icon size={16}/> {v.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Distribution Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between px-2">
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Phân bổ dữ liệu</p>
            </div>
            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-3 custom-scrollbar">
              {Object.entries(
                statsView === 'level' ? dashboardStats.levelDist :
                statsView === 'year' ? dashboardStats.yearDist :
                statsView === 'unit' ? dashboardStats.unitDist :
                dashboardStats.fieldDist
              ).sort((a, b) => (b[1] as number) - (a[1] as number)).map(([key, count]) => {
                const percentage = Math.round(((count as number) / (dashboardStats.total || 1)) * 100);
                return (
                  <button 
                    key={key} 
                    onClick={() => { setStatsDetailValue(key); setCurrentPage(1); }}
                    className={`w-full p-5 rounded-3xl border transition-all text-left ${statsDetailValue === key ? `${activeTheme.primary} border-transparent text-white shadow-xl` : 'bg-white dark:bg-slate-800/50 border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-300'}`}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-black text-sm uppercase tracking-tight truncate flex-1">{key}</span>
                      <span className={`text-[9px] font-black px-2.5 py-1 rounded-lg ${statsDetailValue === key ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-700'}`}>{count} Sáng kiến</span>
                    </div>
                    <div className={`w-full h-1.5 rounded-full ${statsDetailValue === key ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-700'} overflow-hidden`}>
                      <div className={`h-full ${statsDetailValue === key ? 'bg-white' : activeTheme.primary} transition-all duration-1000`} style={{ width: `${percentage}%` }} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* List Column */}
          <div className="lg:col-span-7 bg-slate-50/50 dark:bg-slate-800/20 rounded-[3rem] border border-slate-100 dark:border-slate-800 p-8 flex flex-col min-h-[500px] shadow-inner">
            {statsDetailValue ? (
              <>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className={`${activeTheme.primary} p-3 rounded-2xl text-white shadow-lg`}><FileText size={20}/></div>
                    <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-tighter">Danh sách {statsDetailValue}</h4>
                  </div>
                  <span className={`text-[10px] font-black ${activeTheme.text} px-4 py-2 bg-white dark:bg-slate-800 rounded-full uppercase border dark:border-slate-700`}>{drillDownList.length} Mục</span>
                </div>
                <div className="space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-2">
                  {paginatedList.map(item => (
                    <div 
                      key={item.id} 
                      onClick={() => onViewItem(item)}
                      className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-orange-200 transition-all cursor-pointer group"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className={`text-[10px] font-black ${activeTheme.text} uppercase`}>Năm {item.year}</span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase">{Array.isArray(item.unit) ? item.unit.join(', ') : item.unit}</span>
                      </div>
                      <p className="text-base font-bold text-slate-800 dark:text-white leading-tight uppercase group-hover:text-orange-600 transition-colors">{item.title}</p>
                    </div>
                  ))}
                </div>
                {drillDownList.length > ITEMS_PER_PAGE && (
                  <div className="flex justify-center gap-2 mt-6">
                    <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className="p-2 disabled:opacity-30"><ChevronLeft size={18}/></button>
                    <span className="text-xs font-black flex items-center">{currentPage} / {Math.ceil(drillDownList.length / ITEMS_PER_PAGE)}</span>
                    <button disabled={currentPage === Math.ceil(drillDownList.length / ITEMS_PER_PAGE)} onClick={() => setCurrentPage(p => p + 1)} className="p-2 disabled:opacity-30"><ChevronRight size={18}/></button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-10 opacity-50">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-full text-slate-200 dark:text-slate-700 mb-6"><BarChart3 size={64} /></div>
                <p className="text-slate-400 font-black text-xs uppercase tracking-widest">Chọn danh mục để xem chi tiết</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* AI Strategist Section */}
      <div className="bg-slate-900 p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-16 opacity-5 rotate-12 scale-150"><Sparkles size={150} /></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
            <div className="flex items-center gap-5">
              <div className={`${activeTheme.primary} p-4 rounded-3xl shadow-2xl animate-pulse`}><Bot size={32} /></div>
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tighter">AI Phân tích Chiến lược</h3>
                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Cố vấn chuyên sâu từ dữ liệu sáng kiến</p>
              </div>
            </div>
            <button 
              onClick={generateInsight} 
              disabled={isGenerating} 
              className="px-10 py-5 bg-white text-slate-900 rounded-[2rem] font-black flex items-center gap-3 hover:bg-orange-50 transition-all shadow-2xl active:scale-95 disabled:opacity-50 text-xs uppercase tracking-widest"
            >
              {isGenerating ? <Loader2 size={20} className="animate-spin" /> : <Activity size={20} />} 
              TỔNG HỢP DỮ LIỆU
            </button>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 p-12 min-h-[300px] flex items-center justify-center">
            {aiInsight ? (
              <div className="text-xl text-slate-100 leading-relaxed font-medium whitespace-pre-wrap w-full animate-slide">
                {aiInsight}
              </div>
            ) : (
              <div className="text-center space-y-6 opacity-40">
                <Sparkles size={48} className="mx-auto" />
                <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.3em]">AI sẵn sàng xử lý {initiatives.length} hồ sơ</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
