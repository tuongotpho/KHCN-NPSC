import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Check, X } from 'lucide-react';

export interface FilterOption {
    value: string | number;
    label: string;
    count: number;
}

interface FilterDropdownProps {
    label: string;
    icon: React.ElementType;
    options: FilterOption[];
    selected: (string | number)[];
    onToggle: (value: string | number) => void;
    searchable?: boolean;
    placeholder?: string;
    activeTheme: any;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
    label, icon: Icon, options, selected, onToggle, searchable = true, placeholder = "Tìm kiếm...", activeTheme
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredOptions = options.filter(opt =>
        String(opt.label).toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-2 relative" ref={dropdownRef}>
            <p className="text-[9px] font-black text-slate-400 uppercase ml-2 flex items-center gap-1.5">
                <Icon size={10} /> {label}
            </p>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between px-5 py-3.5 border rounded-2xl text-xs font-bold transition-all shadow-sm
          ${selected.length > 0
                        ? `bg-white dark:bg-slate-800 ${activeTheme.border} ${activeTheme.text}`
                        : 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-orange-200'}`}
            >
                <span className="truncate">
                    {selected.length > 0 ? `Đã chọn (${selected.length})` : `Tất cả ${label}`}
                </span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[1.5rem] shadow-2xl p-4 space-y-3 animate-slide z-[100] min-w-[240px]">
                    {searchable && (
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                            <input
                                type="text"
                                placeholder={placeholder}
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-xs font-bold outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                autoFocus
                            />
                        </div>
                    )}
                    <div className="max-h-60 overflow-y-auto custom-scrollbar pr-1 space-y-1">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map(opt => {
                                const isSelected = selected.includes(opt.value);
                                return (
                                    <button
                                        key={opt.value}
                                        onClick={() => onToggle(opt.value)}
                                        className={`w-full text-left px-4 py-2.5 rounded-xl text-[11px] font-bold uppercase transition-all flex items-center justify-between 
                      ${isSelected ? `${activeTheme.accent} ${activeTheme.text}` : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500'}`}
                                    >
                                        <span className="truncate pr-2">{opt.label}</span>
                                        <div className="flex items-center gap-2 shrink-0">
                                            <span className={`text-[9px] font-black px-2 py-0.5 rounded-md min-w-[24px] text-center ${isSelected ? 'bg-white/30 text-slate-700' : 'bg-slate-100 dark:bg-slate-700 text-slate-400'}`}>
                                                {opt.count}
                                            </span>
                                            {isSelected && <Check size={14} />}
                                        </div>
                                    </button>
                                );
                            })
                        ) : (
                            <p className="text-[10px] text-center text-slate-400 py-4 uppercase font-bold tracking-widest">Không tìm thấy dữ liệu</p>
                        )}
                    </div>
                </div>
            )}

            {selected.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                    {selected.map(val => (
                        <div key={val} className={`${activeTheme.primary} text-white px-3 py-1.5 rounded-lg text-[9px] font-black uppercase flex items-center gap-1.5 animate-in fade-in zoom-in shadow-sm`}>
                            <span className="max-w-[100px] truncate">{val}</span>
                            <button onClick={() => onToggle(val)} className="hover:text-red-200 transition-colors">
                                <X size={12} strokeWidth={3} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilterDropdown;
