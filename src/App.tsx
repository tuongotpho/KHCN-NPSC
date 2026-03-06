
import React, { useMemo, useCallback, Suspense, lazy } from 'react';
import { db } from "./services/firebase";
import { useInitiatives } from "./hooks/useInitiatives";
import Sidebar from "./components/Sidebar";
import ErrorBoundary from "./ErrorBoundary";

// Lazy-load all pages for code-splitting
const ListPage = lazy(() => import("./pages/ListPage"));
const ChatPage = lazy(() => import("./pages/ChatPage"));
const StatsPage = lazy(() => import("./pages/StatsPage"));
const BubblePage = lazy(() => import("./pages/BubblePage"));
const TreeMapPage = lazy(() => import("./pages/TreeMapPage"));
const ReferencePage = lazy(() => import("./pages/ReferencePage"));
const ResearchPage = lazy(() => import("./pages/ResearchPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ApprovalPage = lazy(() => import("./pages/ApprovalPage"));

import GlobalModals from "./components/GlobalModals";

import { useApp } from "./contexts/AppContext";
import { useModal } from "./contexts/ModalContext";
import { auth } from "./services/firebase";
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

const App: React.FC = () => {
  const {
    theme, setTheme, activeTheme,
    isDarkMode, setIsDarkMode,
    user,
    currentScope, setCurrentScope,
    pointConfig, savePointConfig
  } = useApp();

  const location = useLocation();
  const activeTab = location.pathname.split('/')[1] || 'list';

  const {
    openBatch, openSecurity,
    openLogin, openEditInitiative, openViewInitiative, openEditProject
  } = useModal();

  const { initiatives: allInitiatives } = useInitiatives();

  // Lọc dữ liệu hiển thị theo Scope
  const displayInitiatives = useMemo(() => {
    return allInitiatives.filter(i => {
      const scope = i.scope || 'Company';
      return scope === currentScope;
    });
  }, [allInitiatives, currentScope]);

  // Hàm xóa dùng chung cho tất cả các trang
  const handleDelete = useCallback(async (id: string) => {
    if (!confirm('Xác nhận xóa sáng kiến này?')) return;
    try {
      await db.collection("initiatives").doc(id).delete();
    } catch (err) {
      console.error("Delete error:", err);
      alert("Lỗi khi xóa. Bạn có thể không có quyền thực hiện thao tác này.");
    }
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col lg:flex-row bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300">
        <Sidebar
          isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}
          activeTheme={activeTheme} setTheme={setTheme}
          user={user} onLogout={() => auth.signOut()} onLogin={openLogin}
          onAdd={() => activeTab === 'research' ? openEditProject() : openEditInitiative()}
          onBatch={openBatch}
          onSecurity={openSecurity}
          currentScope={currentScope} setCurrentScope={setCurrentScope}
        />

        <main className="flex-1 p-4 lg:p-10 overflow-y-auto">
          <Suspense fallback={
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            </div>
          }>
            <div className="animate-slide">
              <Routes>
                <Route path="/" element={<Navigate to="/list" replace />} />
                <Route path="/register" element={<RegisterPage activeTheme={activeTheme} />} />
                <Route path="/approvals" element={<ApprovalPage activeTheme={activeTheme} />} />
                <Route path="/list" element={<ListPage initiatives={displayInitiatives} activeTheme={activeTheme} user={user} onView={openViewInitiative} onEdit={openEditInitiative} onDelete={handleDelete} />} />
                <Route path="/stats" element={<StatsPage initiatives={displayInitiatives} activeTheme={activeTheme} onViewItem={openViewInitiative} pointConfig={pointConfig} onUpdatePointConfig={savePointConfig} user={user} />} />
                <Route path="/chat" element={<ChatPage initiatives={displayInitiatives} activeTheme={activeTheme} />} />
                <Route path="/references" element={<ReferencePage activeTheme={activeTheme} user={user} />} />
                <Route path="/research" element={<ResearchPage activeTheme={activeTheme} user={user} onEdit={openEditProject} onAdd={openEditProject} />} />
                <Route path="/bubble" element={<BubblePage initiatives={displayInitiatives} activeTheme={activeTheme} user={user} onView={openViewInitiative} onEdit={openEditInitiative} onDelete={handleDelete} />} />
                <Route path="/treemap" element={<TreeMapPage initiatives={displayInitiatives} activeTheme={activeTheme} user={user} onView={openViewInitiative} onEdit={openEditInitiative} onDelete={handleDelete} />} />
                <Route path="*" element={<Navigate to="/list" replace />} />
              </Routes>
            </div>
          </Suspense>
        </main>

        <GlobalModals />
      </div>
    </ErrorBoundary>
  );
};

export default App;
