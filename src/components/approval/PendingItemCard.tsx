import React from 'react';
import { Calendar, Users, CalendarClock, ShieldAlert, CheckCircle2, Wand2, Loader2, Building2, Layers, Phone, ExternalLink, FileText, ZoomIn, Check, Trash2 } from 'lucide-react';
import { PendingInitiative, AnalysisResult, Initiative } from '../../types';
import SimilarityResult from './SimilarityResult';
import ComplianceResult from './ComplianceResult';

interface PendingItemCardProps {
    item: PendingInitiative;
    activeTheme: any;
    scanResult?: AnalysisResult;
    scanningId: string | null;
    isConfirming: boolean;
    confirmType?: 'approve' | 'reject';
    processingId: string | null;
    isReferenceOpen: boolean;
    viewingReferenceItem: Initiative | null;
    onAIScan: (item: PendingInitiative) => void;
    onToggleReference: (refTitle: string, pendingId: string) => void;
    onConfirmAction: (action: { id: string, type: 'approve' | 'reject' } | null) => void;
    onProcessItem: (item: PendingInitiative, type: 'approve' | 'reject') => void;
    onOpenLightbox: (images: string[], index: number) => void;
}

const PendingItemCard: React.FC<PendingItemCardProps> = ({
    item, activeTheme, scanResult, scanningId, isConfirming, confirmType, processingId,
    isReferenceOpen, viewingReferenceItem, onAIScan, onToggleReference, onConfirmAction, onProcessItem, onOpenLightbox
}) => {
    return (
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 px-3 py-1 rounded-lg text-[10px] font-black uppercase flex items-center gap-1">
                                <Calendar size={12} /> {new Date(item.submittedAt).toLocaleDateString('vi-VN')}
                            </span>
                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 px-3 py-1 rounded-lg text-[10px] font-black uppercase flex items-center gap-1">
                                <Users size={12} /> {item.authors.length} Tác giả
                            </span>
                            <span className={`bg-slate-100 dark:bg-slate-800 ${item.monthsApplied && item.monthsApplied >= 3 ? 'text-emerald-500' : 'text-rose-500'} px-3 py-1 rounded-lg text-[10px] font-black uppercase flex items-center gap-1`}>
                                <CalendarClock size={12} /> {item.monthsApplied || 0} Tháng áp dụng
                            </span>
                        </div>

                        <button
                            onClick={() => onAIScan(item)}
                            disabled={!!scanningId}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all shadow-sm 
                ${scanResult
                                    ? (scanResult.isDuplicate ? 'bg-rose-100 text-rose-600 border border-rose-200' : 'bg-emerald-100 text-emerald-600 border border-emerald-200')
                                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'}`}
                        >
                            {scanningId === item.id ? (
                                <Loader2 className="animate-spin" size={14} />
                            ) : scanResult ? (
                                scanResult.isDuplicate ? <ShieldAlert size={14} /> : <CheckCircle2 size={14} />
                            ) : (
                                <Wand2 size={14} />
                            )}
                            {scanningId === item.id ? 'Đang rà soát...' : scanResult ? (scanResult.fromUser ? 'Kết quả từ người dùng' : 'Đã rà soát') : 'AI Rà soát lại'}
                        </button>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase leading-tight">{item.title}</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase text-slate-400">Đơn vị</p>
                            <p className="font-bold flex items-center gap-2"><Building2 size={14} className="text-slate-400" /> {item.unit.join(', ')}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase text-slate-400">Lĩnh vực</p>
                            <p className="font-bold flex items-center gap-2"><Layers size={14} className="text-slate-400" /> {item.field.join(', ') || '---'}</p>
                        </div>
                    </div>

                    {item.contactZalo && (
                        <div className="flex items-center gap-2 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900/30">
                            <Phone size={16} className="text-blue-500" />
                            <span className="text-xs font-bold text-blue-700 dark:text-blue-300">
                                Zalo/SĐT liên hệ: <span className="font-black">{item.contactZalo}</span>
                            </span>
                        </div>
                    )}

                    {scanResult && (
                        <SimilarityResult
                            scanResult={scanResult}
                            item={item}
                            isReferenceOpen={isReferenceOpen}
                            viewingReferenceItem={viewingReferenceItem}
                            onToggleReference={onToggleReference}
                        />
                    )}

                    {item.complianceCheck && (
                        <ComplianceResult complianceCheck={item.complianceCheck} />
                    )}

                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <p className="text-[10px] font-black uppercase text-slate-400 mb-2">Nội dung tóm tắt</p>
                        <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">{item.content}</div>
                    </div>

                    <div className="flex flex-col gap-2">
                        {(item.attachmentUrls && item.attachmentUrls.length > 0) ? (
                            <div className="flex flex-wrap gap-2">
                                {item.attachmentUrls.map((url, idx) => (
                                    <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-[10px] font-bold uppercase hover:bg-blue-100">
                                        <FileText size={12} /> Tài liệu {idx + 1}
                                    </a>
                                ))}
                            </div>
                        ) : item.driveLink && (
                            <a href={item.driveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[10px] font-black uppercase text-blue-500 hover:underline">
                                <ExternalLink size={12} /> Xem tài liệu đính kèm
                            </a>
                        )}

                        {(item.imageUrls && item.imageUrls.length > 0) && (
                            <div className="flex gap-2 overflow-x-auto pb-2">
                                {item.imageUrls.map((url, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => onOpenLightbox(item.imageUrls!, idx)}
                                        className="relative block w-16 h-16 rounded-lg overflow-hidden border border-slate-200 hover:border-orange-500 transition-colors group/img"
                                    >
                                        <img src={url} alt={`img-${idx}`} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center">
                                            <ZoomIn size={12} className="text-white opacity-0 group-hover/img:opacity-100" />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Action Column */}
                <div className="flex flex-row lg:flex-col items-center justify-center gap-4 lg:w-48 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-800 pt-6 lg:pt-0 lg:pl-6 transition-all">
                    {isConfirming ? (
                        <div className="flex flex-col gap-3 w-full animate-in fade-in zoom-in duration-200 p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner">
                            <p className={`text-[11px] font-black uppercase text-center ${confirmType === 'approve' ? 'text-emerald-600' : 'text-rose-500'}`}>
                                {confirmType === 'approve' ? 'Xác nhận duyệt?' : 'Chắc chắn xóa?'}
                            </p>
                            <div className="grid grid-cols-2 gap-2 w-full">
                                <button
                                    onClick={() => onProcessItem(item, confirmType!)}
                                    className={`py-2.5 ${confirmType === 'approve' ? 'bg-emerald-500' : 'bg-rose-500'} text-white rounded-xl font-black uppercase text-[10px] shadow-sm hover:scale-105 transition-all`}
                                >
                                    Có
                                </button>
                                <button
                                    onClick={() => onConfirmAction(null)}
                                    className="py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 rounded-xl font-black uppercase text-[10px] hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                                >
                                    Hủy
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <button
                                onClick={() => onConfirmAction({ id: item.id, type: 'approve' })}
                                disabled={!!processingId}
                                className={`w-full py-3 ${activeTheme.primary} text-white rounded-xl font-black uppercase text-xs shadow-lg hover:brightness-110 flex items-center justify-center gap-2 disabled:opacity-50`}
                            >
                                {processingId === item.id ? <Loader2 className="animate-spin" size={16} /> : <Check size={16} />}
                                Phê duyệt
                            </button>
                            <button
                                onClick={() => onConfirmAction({ id: item.id, type: 'reject' })}
                                disabled={!!processingId}
                                className="w-full py-3 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-400 hover:border-rose-200 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/10 rounded-xl font-black uppercase text-xs transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                <Trash2 size={16} /> Từ chối
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PendingItemCard;
