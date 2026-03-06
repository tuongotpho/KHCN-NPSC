import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxState {
    images: string[];
    index: number;
}

interface LightboxProps {
    data: LightboxState;
    onClose: () => void;
    onNext: (e: React.MouseEvent) => void;
    onPrev: (e: React.MouseEvent) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ data, onClose, onNext, onPrev }) => {
    return (
        <div
            className="fixed inset-0 z-[2500] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={onClose}
        >
            <button
                className="absolute top-6 right-6 p-3 bg-white/10 text-white hover:bg-white/20 hover:text-red-400 rounded-full transition-all z-50"
                onClick={onClose}
            >
                <X size={32} strokeWidth={2.5} />
            </button>

            {data.index > 0 && (
                <button
                    className="absolute left-4 lg:left-10 p-4 bg-white/10 text-white hover:bg-white/20 rounded-full transition-all z-50"
                    onClick={onPrev}
                >
                    <ChevronLeft size={40} />
                </button>
            )}

            <div className="relative max-w-full max-h-full flex flex-col items-center">
                <img
                    src={data.images[data.index]}
                    alt={`Preview ${data.index + 1}`}
                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-90 duration-300"
                    onClick={(e) => e.stopPropagation()}
                />
                <p className="mt-4 text-white/70 font-bold uppercase tracking-widest text-sm">
                    {data.index + 1} / {data.images.length}
                </p>
            </div>

            {data.index < data.images.length - 1 && (
                <button
                    className="absolute right-4 lg:right-10 p-4 bg-white/10 text-white hover:bg-white/20 rounded-full transition-all z-50"
                    onClick={onNext}
                >
                    <ChevronRight size={40} />
                </button>
            )}
        </div>
    );
};

export default Lightbox;
