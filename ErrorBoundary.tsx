import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  // Use arrow function to ensure 'this' refers to the ErrorBoundary instance,
  // allowing access to the inherited setState method.
  private handleReset = () => {
    // Fix: Accessing setState from the correctly bound 'this' context
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl p-12 text-center border border-slate-100 animate-slide">
            <div className="w-24 h-24 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <AlertCircle size={48} />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Đã có lỗi xảy ra</h2>
            <p className="text-slate-500 font-medium mb-10 leading-relaxed">
              Hệ thống gặp sự cố không mong muốn. Vui lòng thử làm mới trang hoặc liên hệ quản trị viên nếu sự cố tiếp diễn.
            </p>
            <div className="space-y-4">
              <button
                onClick={this.handleReset}
                className="w-full py-5 bg-orange-600 text-white rounded-2xl font-black shadow-xl shadow-orange-600/20 flex items-center justify-center gap-3 hover:bg-orange-700 transition-all uppercase tracking-widest text-xs"
              >
                <RefreshCcw size={18} /> Làm mới ứng dụng
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="w-full py-5 bg-slate-100 text-slate-600 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-slate-200 transition-all uppercase tracking-widest text-xs"
              >
                <Home size={18} /> Quay lại trang chủ
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mt-8 p-4 bg-slate-50 rounded-xl text-left overflow-auto max-h-40">
                <p className="text-[10px] font-mono text-rose-600 whitespace-pre-wrap">
                  {this.state.error.toString()}
                </p>
              </div>
            )}
          </div>
        </div>
      );
    }

    // Fix: Access children from props correctly using this.props.children
    return this.props.children;
  }
}

export default ErrorBoundary;