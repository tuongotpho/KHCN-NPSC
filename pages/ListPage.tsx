
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Award, Calendar, Lightbulb, Building2, ChevronDown, X, Check, FilterX } from 'lucide-react';
import { Initiative, InitiativeLevel } from '../types';
import InitiativeCard from '../components/InitiativeCard';

interface ListPageProps {
  initiatives: Initiative[];
  activeTheme: any;
  user: any;
  onView: (item: Initiative) => void;
  onEdit: (item: Initiative) => void;
  onDelete: (id: string) => void;
}

const ITEMS_PER_PAGE = 12;

const ListPage: React.FC<ListPageProps> = ({ initiatives, activeTheme, user, onView, onEdit, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevels, setSelectedLevels] = useState<InitiativeLevel[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [selectedUnits, setSelectedUnits] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Dropdown states
  const [isUnitDropdownOpen, setIsUnitDropdownOpen] = useState(false);
  const [unitSearchQuery, setUnitSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsUnitDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // --- LOGIC LỌC ĐA CHIỀU (FACETED SEARCH) ---

  const getMatches = (item: Initiative, levels: InitiativeLevel[], years: number[], units: string[]) => {
    const unitArray = Array.isArray(item.unit) ? item.unit : (item.unit ? [item.unit] : []);
    const matchesLevel = levels.length === 0 || (item.level && item.level.some(l => levels.includes(l as InitiativeLevel)));
    const matchesYear = years.length === 0 || years.includes(item.year);
    const matchesUnit = units.length === 0 || unitArray.some(u => units.includes(u));
    return { matchesLevel, matchesYear, matchesUnit };
  };

  // 1. Tính toán số lượng sáng kiến của mỗi đơn vị dựa trên các bộ lọc Cấp và Năm hiện tại
  const unitCountsMap = useMemo(() => {
    const counts: Record<string, number> = {};
    
    initiatives.forEach(i => {
      // Chỉ kiểm tra khớp với các bộ lọc KHÁC bộ lọc đơn vị (Cấp và Năm)
      const matchesLevel = selectedLevels.length === 0 || (i.level && i.level.some(l => selectedLevels.includes(l as InitiativeLevel)));
      const matchesYear = selectedYears.length === 0 || selectedYears.includes(i.year);
      
      if (matchesLevel && matchesYear) {
        const itemUnits = Array.isArray(i.unit) ? i.unit : (i.unit ? [i.unit] : []);
        itemUnits.forEach(u => {
          counts[u] = (counts[u] || 0) + 1;
        });
      }
    });
    return counts;
  }, [initiatives, selectedLevels, selectedYears]);

  // 2. Danh sách tất cả đơn vị có dữ liệu trong hệ thống
  const allAvailableUnits = useMemo(() => {
    const units = new Set<string>();
    initiatives.forEach(i => {
      const unitArray = Array.isArray(i.unit) ? i.unit : (i.unit ? [i.unit] : []);
      unitArray.forEach(u => units.add(u));
    });
    return Array.from(units);
  }, [initiatives]);

  // 3. Lọc và sắp xếp đơn vị hiển thị trong dropdown
  const displayUnits = useMemo(() => {
    return allAvailableUnits
      .filter(unit => {
        const matchesSearch = unit.toLowerCase().includes(unitSearchQuery.toLowerCase());
        const count = unitCountsMap[unit] || 0;
        const isSelected = selectedUnits.includes(unit);
        
        // Ẩn đơn vị nếu không có sáng kiến (count === 0) dựa trên bộ lọc hiện tại
        // Tuy nhiên, nếu đơn vị đó đang được CHỌN thì vẫn hiển thị để người dùng có thể bỏ chọn
        return matchesSearch && (count > 0 || isSelected);
      })
      .sort((a, b) => {
        const countA = unitCountsMap[a] || 0;
        const countB = unitCountsMap[b] || 0;
        // Ưu tiên đơn vị có số lượng nhiều hơn lên trên
        if (countB !== countA) return countB - countA;
        // Nếu số lượng bằng nhau thì sắp xếp theo tên
        return a.localeCompare(b);
      });
  }, [allAvailableUnits, unitSearchQuery, unitCountsMap, selectedUnits]);

  // Các bộ lọc khả dụng khác để UI không bị "chết"
  const validLevels = useMemo(() => {
    const levels = new Set<InitiativeLevel>();
    initiatives.forEach(i => {
      const { matchesYear, matchesUnit } = getMatches(i, [], selectedYears, selectedUnits);
      if (matchesYear && matchesUnit) {
        i.level?.forEach(l => levels.add(l as InitiativeLevel));
      }
    });
    return levels;
  }, [initiatives, selectedYears, selectedUnits]);

  const validYears = useMemo(() => {
    const years = new Set<number>();
    initiatives.forEach(i => {
      const { matchesLevel, matchesUnit } = getMatches(i, selectedLevels, [], selectedUnits);
      if (matchesLevel && matchesUnit) {
        years.add(i.year);
      }
    });
    return years;
  }, [initiatives, selectedLevels, selectedUnits]);

  const allAvailableYears = useMemo(() => Array.from(new Set(initiatives.map(i => i.year))).sort((a: number, b: number) => b - a), [initiatives]);

  // Kết quả cuối cùng hiển thị sáng kiến
  const filtered = useMemo(() => {
    return initiatives.filter(i => {
      const unitArray = Array.isArray(i.unit) ? i.unit : (i.unit ? [i.unit] : []);
      const { matchesLevel, matchesYear, matchesUnit } = getMatches(i, selectedLevels, selectedYears, selectedUnits);
      
      const unitStr = unitArray.join(' ');
      const matchesSearch = searchTerm === '' || 
                           i.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           (i.authors?.some(a => a.toLowerCase().includes(searchTerm.toLowerCase()))) ||
                           unitStr.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesLevel && matchesYear && matchesUnit && matchesSearch;
    });
  }, [searchTerm, selectedLevels, selectedYears, selectedUnits, initiatives]);

  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const toggleUnitSelection = (unit: string) => {
    setSelectedUnits(prev => 
      prev.includes(unit) ? prev.filter(u => u !== unit) : [...prev, unit]
    );
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedLevels([]);
    setSelectedYears([]);
    setSelectedUnits([]);
    setSearchTerm('');
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Kho sáng kiến</h2>
            {(selectedLevels.length > 0 || selectedYears.length > 0 || selectedUnits.length > 0) && (
              <button 
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-xl text-[10px] font-black uppercase hover:bg-rose-50 hover:text-rose-600 transition-all shadow-sm"
              >
                <FilterX size={14} /> Xóa lọc
              </button>
            )}
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Tìm kiếm theo tiêu đề, tác giả..." 
              className={`w-full pl-12 pr-6 py-4 bg-white dark:bg-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm font-medium outline-none transition-all focus:ring-4 focus:ring-orange-500/10`} 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm relative z-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bộ lọc Cấp công nhận */}
            <div className="space-y-3">
              <p className="text-[9px] font-black text-slate-400 uppercase ml-2 flex items-center gap-1.5"><Award size={10}/> Cấp công nhận</p>
              <div className="flex flex-wrap gap-2">
                {(['HLH', 'NPSC', 'NPC', 'EVN'] as InitiativeLevel[]).map(lvl => {
                  const isAvailable = validLevels.has(lvl);
                  const isSelected = selectedLevels.includes(lvl);
                  return (
                    <button 
                      key={lvl} 
                      disabled={!isAvailable && !isSelected}
                      onClick={() => {
                        setSelectedLevels(prev => prev.includes(lvl) ? prev.filter(l => l !== lvl) : [...prev, lvl]);
                        setCurrentPage(1);
                      }}
                      className={`px-4 py-2 rounded-xl text-[10px] font-black border-2 transition-all 
                        ${isSelected ? `${activeTheme.primary} text-white border-transparent` : 
                          isAvailable ? 'bg-white dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700 hover:border-orange-200' : 
                          'bg-slate-50 dark:bg-slate-900 text-slate-200 dark:text-slate-800 border-slate-50 dark:border-slate-900 opacity-40 cursor-not-allowed'}`}
                    >
                      {lvl}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bộ lọc Đơn vị (Dropdown) */}
            <div className="space-y-3" ref={dropdownRef}>
              <p className="text-[9px] font-black text-slate-400 uppercase ml-2 flex items-center gap-1.5"><Building2 size={10}/> Đơn vị</p>
              
              <div className="relative">
                <button 
                  onClick={() => setIsUnitDropdownOpen(!isUnitDropdownOpen)}
                  className="w-full flex items-center justify-between px-5 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:border-orange-200 transition-all shadow-sm"
                >
                  <span className="truncate">
                    {selectedUnits.length > 0 ? `Đã chọn ${selectedUnits.length} đơn vị` : 'Tất cả đơn vị'}
                  </span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${isUnitDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isUnitDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] shadow-2xl p-4 space-y-3 animate-slide z-[100]">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                      <input 
                        type="text" 
                        placeholder="Tìm đơn vị..." 
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-xs font-bold outline-none"
                        value={unitSearchQuery}
                        onChange={(e) => setUnitSearchQuery(e.target.value)}
                        autoFocus
                      />
                    </div>
                    <div className="max-h-64 overflow-y-auto custom-scrollbar pr-1 space-y-1">
                      {displayUnits.length > 0 ? (
                        displayUnits.map(unit => {
                          const isSelected = selectedUnits.includes(unit);
                          const count = unitCountsMap[unit] || 0;
                          return (
                            <button 
                              key={unit} 
                              onClick={() => toggleUnitSelection(unit)}
                              className={`w-full text-left px-4 py-3 rounded-xl text-[11px] font-bold uppercase transition-all flex items-center justify-between 
                                ${isSelected ? `${activeTheme.accent} ${activeTheme.text}` : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500'}`}
                            >
                              <span className="truncate pr-2">{unit}</span>
                              <div className="flex items-center gap-2 shrink-0">
                                <span className={`text-[9px] font-black px-2 py-0.5 rounded-md min-w-[24px] text-center ${isSelected ? 'bg-white/30 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-400'}`}>
                                  {count}
                                </span>
                                {isSelected && <Check size={14} />}
                              </div>
                            </button>
                          );
                        })
                      ) : (
                        <p className="text-[10px] text-center text-slate-400 py-4 uppercase font-bold tracking-widest">Không có đơn vị phù hợp</p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Selected Units Tags */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {selectedUnits.map(unit => (
                  <div key={unit} className={`${activeTheme.primary} text-white px-3 py-1.5 rounded-lg text-[9px] font-black uppercase flex items-center gap-1.5 animate-in fade-in zoom-in`}>
                    <span className="max-w-[120px] truncate">{unit}</span>
                    <button onClick={() => toggleUnitSelection(unit)} className="hover:text-red-200 transition-colors">
                      <X size={12} strokeWidth={3} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Bộ lọc Năm */}
            <div className="space-y-3">
              <p className="text-[9px] font-black text-slate-400 uppercase ml-2 flex items-center gap-1.5"><Calendar size={10}/> Năm công nhận</p>
              <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto custom-scrollbar pr-2">
                {allAvailableYears.map(year => {
                  const isAvailable = validYears.has(year);
                  const isSelected = selectedYears.includes(year);
                  return (
                    <button 
                      key={year} 
                      disabled={!isAvailable && !isSelected}
                      onClick={() => {
                        setSelectedYears(prev => prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]);
                        setCurrentPage(1);
                      }}
                      className={`px-4 py-2 rounded-xl text-[10px] font-black border-2 transition-all 
                        ${isSelected ? `${activeTheme.primary} text-white border-transparent` : 
                          isAvailable ? 'bg-white dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700 hover:border-orange-200' : 
                          'bg-slate-50 dark:bg-slate-900 text-slate-200 dark:text-slate-800 border-slate-50 dark:border-slate-900 opacity-40 cursor-not-allowed'}`}
                    >
                      {year}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {paginated.map(item => (
          <InitiativeCard 
            key={item.id} 
            item={item} 
            activeTheme={activeTheme} 
            user={user} 
            onView={onView} 
            onEdit={onEdit} 
            onDelete={onDelete} 
          />
        ))}
        {paginated.length === 0 && (
          <div className="col-span-full py-20 text-center text-slate-400">
            <div className="bg-slate-100 dark:bg-slate-900 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"><Lightbulb size={48} /></div>
            <p className="font-black uppercase tracking-widest text-xs">Không có sáng kiến nào khớp với bộ lọc</p>
            <button onClick={clearFilters} className="mt-4 text-orange-600 font-black text-[10px] uppercase underline">Đặt lại bộ lọc</button>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button 
              key={i} 
              onClick={() => {
                setCurrentPage(i + 1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-10 h-10 rounded-xl font-black text-xs transition-all ${currentPage === i + 1 ? `${activeTheme.primary} text-white shadow-lg` : 'bg-white dark:bg-slate-800 text-slate-400 hover:bg-slate-50'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListPage;
