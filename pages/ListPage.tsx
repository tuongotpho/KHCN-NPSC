
import React, { useState, useMemo } from 'react';
import { Search, Award, Calendar, Lightbulb } from 'lucide-react';
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
  const [currentPage, setCurrentPage] = useState(1);

  const availableYears = useMemo(() => {
    const years = Array.from(new Set(initiatives.map(i => i.year))).sort((a, b) => b - a);
    return years;
  }, [initiatives]);

  const filtered = useMemo(() => {
    return initiatives.filter(i => {
      const matchesSearch = i.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           (i.authors?.some(a => a.toLowerCase().includes(searchTerm.toLowerCase())));
      const matchesLevel = selectedLevels.length === 0 || (i.level && i.level.some(l => selectedLevels.includes(l as InitiativeLevel)));
      const matchesYear = selectedYears.length === 0 || selectedYears.includes(i.year);
      return matchesSearch && matchesLevel && matchesYear;
    });
  }, [searchTerm, selectedLevels, selectedYears, initiatives]);

  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Kho sáng kiến</h2>
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

        <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <p className="text-[9px] font-black text-slate-400 uppercase ml-2 flex items-center gap-1.5"><Award size={10}/> Cấp công nhận</p>
              <div className="flex flex-wrap gap-2">
                {(['HLH', 'NPSC', 'NPC', 'EVN'] as InitiativeLevel[]).map(lvl => (
                  <button 
                    key={lvl} 
                    onClick={() => setSelectedLevels(prev => prev.includes(lvl) ? prev.filter(l => l !== lvl) : [...prev, lvl])}
                    className={`px-4 py-2 rounded-xl text-[10px] font-black border-2 transition-all ${selectedLevels.includes(lvl) ? `${activeTheme.primary} text-white border-transparent` : 'bg-white dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700'}`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-[9px] font-black text-slate-400 uppercase ml-2 flex items-center gap-1.5"><Calendar size={10}/> Năm công nhận</p>
              <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto custom-scrollbar pr-2">
                {availableYears.map(year => (
                  <button 
                    key={year} 
                    onClick={() => setSelectedYears(prev => prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year])}
                    className={`px-4 py-2 rounded-xl text-[10px] font-black border-2 transition-all ${selectedYears.includes(year) ? `${activeTheme.primary} text-white border-transparent` : 'bg-white dark:bg-slate-800 text-slate-400 border-slate-100 dark:border-slate-700'}`}
                  >
                    {year}
                  </button>
                ))}
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
            <p className="font-black uppercase tracking-widest text-xs">Không tìm thấy kết quả nào</p>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-xl font-black text-xs transition-all ${currentPage === i + 1 ? `${activeTheme.primary} text-white` : 'bg-white dark:bg-slate-800 text-slate-400'}`}
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
