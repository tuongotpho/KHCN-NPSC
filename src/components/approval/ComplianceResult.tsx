import React from 'react';
import { FileSearch, CheckCircle2, XCircle } from 'lucide-react';
import { ComplianceCheck } from '../../types';

interface ComplianceResultProps {
    complianceCheck: ComplianceCheck;
}

const ComplianceResult: React.FC<ComplianceResultProps> = ({ complianceCheck }) => {
    return (
        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-3">
                <h4 className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-1">
                    <FileSearch size={12} /> Thẩm định mẫu đơn
                </h4>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded text-white ${complianceCheck.score >= 80 ? 'bg-emerald-500' : complianceCheck.score >= 50 ? 'bg-amber-500' : 'bg-rose-500'}`}>
                    Điểm: {complianceCheck.score}/100
                </span>
            </div>
            <div className="space-y-1.5">
                {complianceCheck.items.map((criterion, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                        <div className={`mt-0.5 ${criterion.isMet ? 'text-emerald-500' : 'text-rose-500'}`}>
                            {criterion.isMet ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                        </div>
                        <div className="flex-1">
                            <p className="text-[10px] font-bold text-slate-700 dark:text-slate-300">{criterion.criteria}</p>
                            {!criterion.isMet && <p className="text-[9px] text-rose-500 italic">{criterion.comment}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComplianceResult;
