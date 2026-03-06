import React, { useState, useMemo } from 'react';
import { Search, Award, Calendar, Lightbulb, Building2, LayoutGrid, List as ListIcon, FileDown, Loader2, TrendingUp, FilterX, Briefcase, Check } from 'lucide-react';
import { Initiative, InitiativeLevel } from '../types';
import InitiativeCard from '../components/InitiativeCard';
import FilterDropdown from '../components/list/FilterDropdown';
import TableView from '../components/list/TableView';
import { exportInitiativesToPDF } from '../utils/pdfExport';

interface ListPageProps {
  initiatives: Initiative[];
  activeTheme: any;
  user: any;
  onView: (item: Initiative) => void;
  onEdit: (item: Initiative) => void;
  onDelete: (id: string) => void;
}

const ITEMS_PER_PAGE = 20;

const ListPage: React.FC<ListPageProps> = ({ initiatives, activeTheme, user, onView, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter States
  const [selectedLevels, setSelectedLevels] = useState<InitiativeLevel[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [selectedUnits, setSelectedUnits] = useState<string[]>([]);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [showScalableOnly, setShowScalableOnly] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [isExporting, setIsExporting] = useState(false);

  // --- FILTER LOGIC ---
  const getMatches = (item: Initiative, levels: InitiativeLevel[], years: number[], units: string[], fields: string[]) => {
    const unitArray = Array.isArray(item.unit) ? item.unit : (item.unit ? [item.unit] : []);
    const fieldArray = Array.isArray(item.field) ? item.field : (item.field ? [item.field as string] : []);

    const matchesLevel = levels.length === 0 || (item.level && item.level.some(l => levels.includes(l as InitiativeLevel)));
    const matchesYear = years.length === 0 || years.includes(item.year);
    const matchesUnit = units.length === 0 || unitArray.some(u => units.includes(u));
    const matchesField = fields.length === 0 || fieldArray.some(f => fields.includes(f));

    return { matchesLevel, matchesYear, matchesUnit, matchesField };
  };

  const getFacetedCounts = (type: 'level' | 'year' | 'unit' | 'field') => {
    const counts: Record<string, number> = {};

    initiatives.forEach(i => {
      const { matchesLevel, matchesYear, matchesUnit, matchesField } = getMatches(
        i,
        type === 'level' ? [] : selectedLevels,
        type === 'year' ? [] : selectedYears,
        type === 'unit' ? [] : selectedUnits,
        type === 'field' ? [] : selectedFields
      );

      const matchesScalable = !showScalableOnly || i.isScalable;

      if (
        (type === 'level' && matchesYear && matchesUnit && matchesField && matchesScalable) ||
        (type === 'year' && matchesLevel && matchesUnit && matchesField && matchesScalable) ||
        (type === 'unit' && matchesLevel && matchesYear && matchesField && matchesScalable) ||
        (type === 'field' && matchesLevel && matchesYear && matchesUnit && matchesScalable)
      ) {
        if (type === 'level') i.level?.forEach(l => { counts[l] = (counts[l] || 0) + 1; });
        if (type === 'year') { counts[String(i.year)] = (counts[String(i.year)] || 0) + 1; }
        if (type === 'unit') {
          const us = Array.isArray(i.unit) ? i.unit : (i.unit ? [i.unit] : []);
          us.forEach(u => { counts[u] = (counts[u] || 0) + 1; });
        }
        if (type === 'field') {
          const fs = Array.isArray(i.field) ? i.field : (i.field ? [i.field as string] : []);
          fs.forEach(f => { counts[f] = (counts[f] || 0) + 1; });
        }
      }
    });
    return counts;
  };

  const levelOptions = useMemo(() => {
    const counts = getFacetedCounts('level');
    return (['HLH', 'NPSC', 'NPC', 'EVN'] as InitiativeLevel[])
      .map(l => ({ value: l, label: l, count: counts[l] || 0 }))
      .filter(opt => opt.count > 0 || selectedLevels.includes(opt.value));
  }, [initiatives, selectedYears, selectedUnits, selectedFields, showScalableOnly, selectedLevels]);

  const yearOptions = useMemo(() => {
    const counts = getFacetedCounts('year');
    const allYears = Array.from(new Set(initiatives.map(i => i.year))).sort((a, b) => (b as number) - (a as number));
    return allYears
      .map(y => ({ value: y, label: y.toString(), count: counts[String(y)] || 0 }))
      .filter(opt => opt.count > 0 || selectedYears.includes(opt.value));
  }, [initiatives, selectedLevels, selectedUnits, selectedFields, showScalableOnly, selectedYears]);

  const unitOptions = useMemo(() => {
    const counts = getFacetedCounts('unit');
    const allUnits = new Set<string>();
    initiatives.forEach(i => {
      const us = Array.isArray(i.unit) ? i.unit : (i.unit ? [i.unit] : []);
      us.forEach(u => allUnits.add(u));
    });
    return Array.from(allUnits).sort()
      .map(u => ({ value: u, label: u, count: counts[u] || 0 }))
      .filter(opt => opt.count > 0 || selectedUnits.includes(opt.value));
  }, [initiatives, selectedLevels, selectedYears, selectedFields, showScalableOnly, selectedUnits]);

  const fieldOptions = useMemo(() => {
    const counts = getFacetedCounts('field');
    const allFields = new Set<string>();
    initiatives.forEach(i => {
      const fs = Array.isArray(i.field) ? i.field : (i.field ? [i.field as string] : []);
      fs.forEach(f => allFields.add(f));
    });
    return Array.from(allFields).sort()
      .map(f => ({ value: f, label: f, count: counts[f] || 0 }))
      .filter(opt => opt.count > 0 || selectedFields.includes(opt.value));
  }, [initiatives, selectedLevels, selectedYears, selectedUnits, showScalableOnly, selectedFields]);

  const filtered = useMemo(() => {
    return initiatives.filter(i => {
      const unitArray = Array.isArray(i.unit) ? i.unit : (i.unit ? [i.unit] : []);
      const { matchesLevel, matchesYear, matchesUnit, matchesField } = getMatches(i, selectedLevels, selectedYears, selectedUnits, selectedFields);
      const matchesScalable = !showScalableOnly || i.isScalable;
      const unitStr = unitArray.join(' ');
      const matchesSearch = searchTerm === '' ||
        i.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (i.authors?.some(a => a.toLowerCase().includes(searchTerm.toLowerCase()))) ||
        unitStr.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesLevel && matchesYear && matchesUnit && matchesField && matchesScalable && matchesSearch;
    });
  }, [searchTerm, selectedLevels, selectedYears, selectedUnits, selectedFields, showScalableOnly, initiatives]);

  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const clearFilters = () => {
    setSelectedLevels([]); setSelectedYears([]); setSelectedUnits([]); setSelectedFields([]);
    setSearchTerm(''); setShowScalableOnly(false); setCurrentPage(1);
  };

  const toggleLevel = (val: string | number) => { const l = val as InitiativeLevel; setSelectedLevels(prev => prev.includes(l) ? prev.filter(item => item !== l) : [...prev, l]); setCurrentPage(1); };
  const toggleYear = (val: string | number) => { const y = val as number; setSelectedYears(prev => prev.includes(y) ? prev.filter(item => item !== y) : [...prev, y]); setCurrentPage(1); };
  const toggleUnit = (val: string | number) => { const u = val as string; setSelectedUnits(prev => prev.includes(u) ? prev.filter(item => item !== u) : [...prev, u]); setCurrentPage(1); };
  const toggleField = (val: string | number) => { const f = val as string; setSelectedFields(prev => prev.includes(f) ? prev.filter(item => item !== f) : [...prev, f]); setCurrentPage(1); };

  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      await exportInitiativesToPDF(filtered, user);
    } catch (err) {
      console.error(err);
      alert("Lỗi khi xuất báo cáo.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Kho sáng kiến</h2>
            <div className="flex items-center gap-2 bg-white dark:bg-slate-900 p-1.5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 ml-4">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-xl transition-all ${viewMode === 'grid' ? `${activeTheme.primary} text-white shadow-lg` : 'text-slate-400 hover:text-slate-600'}`} title="Dạng lưới"><LayoutGrid size={20} /></button>
              <button onClick={() => setViewMode('table')} className={`p-2 rounded-xl transition-all ${viewMode === 'table' ? `${activeTheme.primary} text-white shadow-lg` : 'text-slate-400 hover:text-slate-600'}`} title="Dạng bảng"><ListIcon size={20} /></button>
            </div>
            {user && (
              <button onClick={handleExportPDF} disabled={isExporting} className="flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800 rounded-xl text-[10px] font-black uppercase hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
                {isExporting ? <Loader2 size={16} className="animate-spin" /> : <FileDown size={16} />}
                {isExporting ? 'Đang tạo...' : 'Xuất PDF'}
              </button>
            )}
            {(selectedLevels.length > 0 || selectedYears.length > 0 || selectedUnits.length > 0 || selectedFields.length > 0 || showScalableOnly) && (
              <button onClick={clearFilters} className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-xl text-[10px] font-black uppercase hover:bg-rose-50 hover:text-rose-600 transition-all shadow-sm">
                <FilterX size={14} /> Xóa lọc
              </button>
            )}
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input type="text" placeholder="Tìm kiếm theo tiêu đề, tác giả..." className={`w-full pl-12 pr-6 py-4 bg-white dark:bg-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm font-medium outline-none transition-all focus:ring-4 focus:ring-orange-500/10`} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm relative z-50">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
            <FilterDropdown label="Cấp công nhận" icon={Award} options={levelOptions} selected={selectedLevels} onToggle={toggleLevel} searchable={false} activeTheme={activeTheme} />
            <FilterDropdown label="Đơn vị áp dụng" icon={Building2} options={unitOptions} selected={selectedUnits} onToggle={toggleUnit} placeholder="Tìm đơn vị..." activeTheme={activeTheme} />
            <FilterDropdown label="Lĩnh vực" icon={Briefcase} options={fieldOptions} selected={selectedFields} onToggle={toggleField} placeholder="Tìm lĩnh vực..." activeTheme={activeTheme} />
            <FilterDropdown label="Năm công nhận" icon={Calendar} options={yearOptions} selected={selectedYears} onToggle={toggleYear} searchable={false} activeTheme={activeTheme} />
            <div className="space-y-2 relative">
              <p className="text-[9px] font-black text-slate-400 uppercase ml-2 flex items-center gap-1.5"><TrendingUp size={10} /> Chất lượng</p>
              <button onClick={() => { setShowScalableOnly(!showScalableOnly); setCurrentPage(1); }} className={`w-full flex items-center justify-between px-5 py-3.5 border rounded-2xl text-xs font-bold transition-all shadow-sm ${showScalableOnly ? 'bg-emerald-500 text-white border-transparent shadow-emerald-500/30' : 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-orange-200'}`}>
                <span className="truncate">Khả năng nhân rộng</span>
                {showScalableOnly && <Check size={16} strokeWidth={3} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 animate-slide">
          {paginated.map(item => <InitiativeCard key={item.id} item={item} activeTheme={activeTheme} user={user} onView={onView} onEdit={onEdit} onDelete={onDelete} />)}
        </div>
      ) : (
        <TableView paginated={paginated} activeTheme={activeTheme} user={user} onView={onView} onEdit={onEdit} onDelete={onDelete} />
      )}

      {paginated.length === 0 && (
        <div className="py-20 text-center text-slate-400">
          <div className="bg-slate-100 dark:bg-slate-900 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"><Lightbulb size={48} /></div>
          <p className="font-black uppercase tracking-widest text-xs">Không có sáng kiến nào khớp với bộ lọc</p>
          <button onClick={clearFilters} className="mt-4 text-orange-600 font-black text-[10px] uppercase underline">Đặt lại bộ lọc</button>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} onClick={() => { setCurrentPage(i + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`w-10 h-10 rounded-xl font-black text-xs transition-all ${currentPage === i + 1 ? `${activeTheme.primary} text-white shadow-lg` : 'bg-white dark:bg-slate-800 text-slate-400 hover:bg-slate-50'}`}>
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListPage;
