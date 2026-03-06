import React from 'react';
import { AlertTriangle, Check, Zap, ChevronUp, ExternalLink, Info } from 'lucide-react';
import { AnalysisResult, Initiative } from '../../types';

interface SimilarityResultProps {
    scanResult: AnalysisResult;
    item: any;
    isReferenceOpen: boolean;
    viewingReferenceItem: Initiative | null;
    onToggleReference: (refTitle: string, pendingId: string) => void;
}

const SimilarityResult: React.FC<SimilarityResultProps> = ({ scanResult, item, isReferenceOpen, viewingReferenceItem, onToggleReference }) => {
    return (
        <div className={`rounded-2xl border overflow-hidden animate-in fade-in zoom-in duration-300 ${scanResult.isDuplicate ? 'bg-rose-50 border-rose-100 dark:bg-rose-900/20 dark:border-rose-900' : 'bg-emerald-50 border-emerald-100 dark:bg-emerald-900/20 dark:border-emerald-900'}`}>
            <div className="p-4 flex gap-4">
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
                                <Zap size={10} className="text-amber-500" /> Check bởi User
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
                                onClick={() => onToggleReference(scanResult.mostSimilarId || scanResult.mostSimilarTitle!, item.id)}
                                className={`flex items-center gap-1 text-[10px] font-black uppercase underline decoration-2 underline-offset-2 ${scanResult.isDuplicate ? 'text-rose-700 hover:text-rose-900' : 'text-emerald-700 hover:text-emerald-900'} transition-colors`}
                            >
                                {isReferenceOpen ? <ChevronUp size={12} /> : <ExternalLink size={10} />}
                                {isReferenceOpen ? "Thu gọn so sánh" : (scanResult.mostSimilarTitle || "Xem chi tiết")}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {isReferenceOpen && viewingReferenceItem && (
                <div className="border-t border-dashed border-orange-200 dark:border-orange-900 bg-orange-50 dark:bg-orange-900/10 p-5 animate-in slide-in-from-top-4 duration-300">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="bg-orange-200 text-orange-700 p-1.5 rounded-lg"><Info size={14} /></div>
                        <h4 className="text-xs font-black uppercase text-orange-700 dark:text-orange-400">Dữ liệu sáng kiến gốc (Tham chiếu)</h4>
                    </div>
                    <div className="space-y-3 pl-2 border-l-2 border-orange-300 dark:border-orange-800 ml-2">
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase">Tên sáng kiến</p>
                            <p className="text-sm font-black text-slate-800 dark:text-white leading-tight">{viewingReferenceItem.title}</p>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase">Năm</p>
                                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{viewingReferenceItem.year}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase">Tác giả</p>
                                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{Array.isArray(viewingReferenceItem.authors) ? viewingReferenceItem.authors.join(', ') : viewingReferenceItem.authors}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase">Nội dung</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-6">{viewingReferenceItem.content}</p>
                        </div>
                        <button
                            onClick={() => onToggleReference("", item.id)}
                            className="w-full py-2 bg-white dark:bg-slate-800 border border-orange-200 dark:border-orange-900/30 rounded-xl text-[10px] font-black uppercase text-orange-600 hover:bg-orange-50 transition-colors"
                        >
                            Đóng so sánh
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SimilarityResult;
