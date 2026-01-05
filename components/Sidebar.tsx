
import React from 'react';
import { LayoutDashboard, BarChart3, Bot, LogOut, BrainCircuit, Sun, Moon, Palette, Plus, FileUp, LogIn, Disc, LayoutGrid } from 'lucide-react';
import { InitiativeLevel } from '../types';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
  isDarkMode: boolean;
  setIsDarkMode: (dark: boolean) => void;
  activeTheme: any;
  setTheme: (theme: any) => void;
  user: any;
  onLogout: () => void;
  onLogin: () => void;
  onAdd: () => void;
  onBatch: () => void;
}

const THEME_OPTIONS = ['red', 'blue', 'emerald', 'indigo'];

const Sidebar: React.FC<SidebarProps> = ({ 
  activeTab, setActiveTab, isDarkMode, setIsDarkMode, 
  activeTheme, setTheme, user, onLogout, onLogin, onAdd, onBatch 
}) => {
  return (
    <aside className="w-full lg:w-72 bg-slate-900 text-white lg:sticky lg:top-0 lg:h-screen flex flex-col p-5 z-[60] shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <div onClick={!user ? onLogin : undefined} className="flex items-center gap-3 group cursor-pointer">
          <div className={`bg-gradient-to-br ${activeTheme.gradient} p-2.5 rounded-xl`}><BrainCircuit size={24} /></div>
          <div><h1 className="font-extrabold text-xl tracking-tighter">NPSC Hub</h1><p className="text-[9px] text-slate-500 font-bold uppercase">Sáng kiến - KHCN</p></div>
        </div>
      </div>

      {user && (
        <div className="mb-4 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg ${activeTheme.primary} flex items-center justify-center font-black text-white text-sm`}>{user.email?.charAt(0).toUpperCase()}</div>
            <div className="flex-1 overflow-hidden"><p className="text-[10px] font-black truncate">{user.email}</p></div>
            <button onClick={onLogout} className="p-1.5 text-slate-500 hover:text-rose-400"><LogOut size={14}/></button>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-700/50 flex items-center justify-between">
            <div className="flex gap-1.5">
              {THEME_OPTIONS.map(t => (
                <button key={t} onClick={() => setTheme(t)} className={`w-3.5 h-3.5 rounded-full ${t === 'red' ? 'bg-orange-600' : t === 'blue' ? 'bg-blue-600' : t === 'emerald' ? 'bg-emerald-600' : 'bg-indigo-600'}`} />
              ))}
            </div>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-slate-500">{isDarkMode ? <Sun size={12} /> : <Moon size={12} />}</button>
          </div>
        </div>
      )}

      <nav className="space-y-1.5 flex-1 mt-4">
        {[
          { id: 'list', label: 'Danh mục', icon: LayoutDashboard },
          { id: 'bubble', label: 'Bản đồ bóng', icon: Disc },
          { id: 'treemap', label: 'Bản đồ nhiệt', icon: LayoutGrid },
          { id: 'stats', label: 'Thống kê', icon: BarChart3 },
          { id: 'chat', label: 'Trợ lý AI', icon: Bot },
        ].map(nav => (
          <button 
            key={nav.id}
            onClick={() => setActiveTab(nav.id)}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all font-bold text-sm ${activeTab === nav.id ? `${activeTheme.primary} text-white shadow-xl` : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
          >
            <nav.icon size={18} /> {nav.label}
          </button>
        ))}
      </nav>

      {user && (
        <div className="mt-auto pt-4 border-t border-slate-800 space-y-2.5">
          <button onClick={onAdd} className="w-full flex items-center justify-center gap-2 bg-white text-slate-900 py-3.5 rounded-xl font-bold text-sm hover:bg-slate-100 shadow-lg"><Plus size={18} /> Thêm mới</button>
          <button onClick={onBatch} className={`w-full flex items-center justify-center gap-2 ${activeTheme.primary} text-white py-3.5 rounded-xl font-bold text-sm shadow-lg`}><FileUp size={18} /> Nhập PDF (AI)</button>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
