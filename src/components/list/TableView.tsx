import React from 'react';
import { Eye, Edit2, Trash2, Building2, Users, Briefcase, TrendingUp } from 'lucide-react';
import { Initiative, InitiativeLevel } from '../../types';

interface TableViewProps {
    paginated: Initiative[];
    activeTheme: any;
    user: any;
    onView: (item: Initiative) => void;
    onEdit: (item: Initiative) => void;
    onDelete: (id: string) => void;
}

const LEVEL_COLORS: Record<InitiativeLevel, string> = {
    'HLH': 'bg-slate-500',
    'NPSC': 'bg-red-600',
    'NPC': 'bg-orange-600',
    'EVN': 'bg-rose-700'
};

const TableView: React.FC<TableViewProps> = ({ paginated, activeTheme, user, onView, onEdit, onDelete }) => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden animate-slide">
            <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left border-collapse min-w-[1000px]">
                    <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50">
                            <th className="px-6 py-5 text-[10px] font-black uppercase text-slate-400 tracking-widest border-b dark:border-slate-700">Năm/Cấp</th>
                            <th className="px-6 py-5 text-[10px] font-black uppercase text-slate-400 tracking-widest border-b dark:border-slate-700">Tên sáng kiến</th>
                            <th className="px-6 py-5 text-[10px] font-black uppercase text-slate-400 tracking-widest border-b dark:border-slate-700">Đơn vị</th>
                            <th className="px-6 py-5 text-[10px] font-black uppercase text-slate-400 tracking-widest border-b dark:border-slate-700">Tác giả</th>
                            <th className="px-6 py-5 text-[10px] font-black uppercase text-slate-400 tracking-widest border-b dark:border-slate-700">Lĩnh vực</th>
                            <th className="px-6 py-5 text-[10px] font-black uppercase text-slate-400 tracking-widest border-b dark:border-slate-700 text-center">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {paginated.map(item => {
                            const fieldDisplay = Array.isArray(item.field) ? item.field.join(', ') : (item.field || '---');

                            return (
                                <tr key={item.id} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col gap-1.5">
                                            <span className="text-xs font-black text-slate-900 dark:text-white">{item.year}</span>
                                            <div className="flex flex-wrap gap-1">
                                                {item.level?.map(lvl => (
                                                    <span key={lvl} className={`${LEVEL_COLORS[lvl as InitiativeLevel]} text-white text-[8px] font-black px-2 py-0.5 rounded-md`}>{lvl}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 max-w-md">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm font-black text-slate-900 dark:text-white line-clamp-2 uppercase tracking-tight leading-tight group-hover:text-orange-600 transition-colors">{item.title}</p>
                                            {item.isScalable && (
                                                <span className="w-fit flex items-center gap-1 bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-md text-[8px] font-black uppercase">
                                                    <TrendingUp size={10} /> Nhân rộng
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                                            <Building2 size={14} className={activeTheme.text} />
                                            <span className="truncate max-w-[150px]">{Array.isArray(item.unit) ? item.unit.join(', ') : item.unit}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                                            <Users size={14} className={activeTheme.text} />
                                            <span className="truncate max-w-[120px]">{Array.isArray(item.authors) ? item.authors.join(', ') : item.authors}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                                            <Briefcase size={14} />
                                            <span className="truncate max-w-[100px]">{fieldDisplay}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center justify-center gap-2">
                                            <button onClick={() => onView(item)} className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-xl transition-all" title="Xem chi tiết"><Eye size={18} /></button>
                                            {user && (
                                                <>
                                                    <button onClick={() => onEdit(item)} className={`p-2.5 text-slate-400 hover:${activeTheme.text} hover:${activeTheme.accent} dark:hover:bg-slate-800 rounded-xl transition-all`} title="Chỉnh sửa"><Edit2 size={18} /></button>
                                                    <button onClick={() => onDelete(item.id)} className="p-2.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-xl transition-all" title="Xóa"><Trash2 size={18} /></button>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableView;
