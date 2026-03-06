import React, { Suspense, lazy } from 'react';
import { useModal } from '../contexts/ModalContext';
import { useApp } from '../contexts/AppContext';
import LoginModal from './modals/LoginModal';
import EditInitiativeModal from './modals/EditInitiativeModal';
import ViewInitiativeModal from './modals/ViewInitiativeModal';
import EditResearchModal from './modals/EditResearchModal';

const BatchImportModal = lazy(() => import('./BatchImportModal'));
const SecurityAuditModal = lazy(() => import('./SecurityAuditModal'));

const GlobalModals: React.FC = () => {
    const { isBatchOpen, closeBatch, isSecurityOpen, closeSecurity } = useModal();
    const { activeTheme, user } = useApp();

    return (
        <>
            <LoginModal />
            <Suspense fallback={null}>
                {isBatchOpen && <BatchImportModal isOpen={isBatchOpen} onClose={closeBatch} activeTheme={activeTheme} />}
                {isSecurityOpen && <SecurityAuditModal isOpen={isSecurityOpen} onClose={closeSecurity} activeTheme={activeTheme} user={user} />}
            </Suspense>
            <EditInitiativeModal />
            <ViewInitiativeModal />
            <EditResearchModal />
        </>
    );
};

export default GlobalModals;
