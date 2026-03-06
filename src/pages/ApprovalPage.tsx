import React, { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { checkApprovalSimilarity, generateEmbedding } from '../services/aiService';
import { PendingInitiative, InitiativeLevel, Initiative, AnalysisResult } from '../types';
import { ClipboardList, Loader2 } from 'lucide-react';

import PendingItemCard from '../components/approval/PendingItemCard';
import Lightbox, { LightboxState } from '../components/shared/Lightbox';

interface ApprovalPageProps {
  activeTheme: any;
}

const ApprovalPage: React.FC<ApprovalPageProps> = ({ activeTheme }) => {
  const [pendingItems, setPendingItems] = useState<PendingInitiative[]>([]);
  const [approvedItems, setApprovedItems] = useState<Initiative[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);

  const [scanningId, setScanningId] = useState<string | null>(null);
  const [scanResults, setScanResults] = useState<Record<string, AnalysisResult>>({});

  const [lightboxData, setLightboxData] = useState<LightboxState | null>(null);

  const [expandedReferenceId, setExpandedReferenceId] = useState<string | null>(null);
  const [viewingReferenceItem, setViewingReferenceItem] = useState<Initiative | null>(null);

  const [confirmAction, setConfirmAction] = useState<{ id: string, type: 'approve' | 'reject' } | null>(null);

  useEffect(() => {
    const unsubscribe = db.collection('pending_initiatives')
      .where('status', '==', 'pending')
      .onSnapshot(
        snapshot => {
          const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as PendingInitiative));
          items.sort((a, b) => (b.submittedAt || 0) - (a.submittedAt || 0));

          setPendingItems(items);

          const preCalculatedResults: Record<string, AnalysisResult> = {};
          items.forEach(item => {
            if (item.publicAnalysis) {
              preCalculatedResults[item.id] = {
                score: item.publicAnalysis.score,
                isDuplicate: item.publicAnalysis.score >= 50,
                reason: item.publicAnalysis.advice,
                mostSimilarTitle: item.publicAnalysis.similarTitle,
                mostSimilarId: item.publicAnalysis.similarId,
                fromUser: true
              };
            }
          });
          setScanResults(prev => ({ ...prev, ...preCalculatedResults }));
          setLoading(false);
        },
        error => {
          console.error("Error fetching pending:", error);
          setLoading(false);
        }
      );
    return unsubscribe;
  }, []);

  useEffect(() => {
    const fetchApproved = async () => {
      try {
        const snapshot = await db.collection('initiatives').get();
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Initiative));
        setApprovedItems(items);
      } catch (err) {
        console.error("Error fetching approved initiatives for AI context:", err);
      }
    };
    fetchApproved();
  }, []);

  const handleProcessItem = async (item: PendingInitiative, type: 'approve' | 'reject') => {
    setConfirmAction(null);
    setProcessingId(item.id);

    try {
      if (type === 'approve') {
        let vector = null;
        try {
          const textToEmbed = `${item.title} ${item.content || ''}`;
          vector = await generateEmbedding(textToEmbed);
        } catch (e) {
          console.warn(`Could not generate vector for ${item.title}`, e);
        }

        const officialData = {
          title: item.title,
          authors: item.authors,
          unit: item.unit,
          year: item.year,
          content: item.content,
          field: item.field,
          driveLink: item.driveLink || (item.attachmentUrls && item.attachmentUrls[0]) || '',
          attachmentUrls: item.attachmentUrls || (item.driveLink ? [item.driveLink] : []),
          imageUrl: item.imageUrl || (item.imageUrls && item.imageUrls[0]) || '',
          imageUrls: item.imageUrls || (item.imageUrl ? [item.imageUrl] : []),
          monthsApplied: item.monthsApplied || 0,
          level: ['HLH'] as InitiativeLevel[],
          phase: 'Hoàn thành',
          result: 'Đạt',
          reward: '',
          isScalable: false,
          embedding_field: vector
        };

        await db.collection('initiatives').add(officialData);
        await db.collection('pending_initiatives').doc(item.id).delete();
      } else {
        await db.collection('pending_initiatives').doc(item.id).delete();
      }
    } catch (error: any) {
      console.error(error);
      alert("Đã xảy ra lỗi: " + error.message);
    } finally {
      setProcessingId(null);
    }
  };

  const handleAIScan = async (item: PendingInitiative) => {
    if (scanningId) return;
    setScanningId(item.id);

    try {
      if (approvedItems.length === 0) {
        alert("Kho dữ liệu trống, không thể so sánh.");
        setScanningId(null);
        return;
      }

      const result = await checkApprovalSimilarity(
        { title: item.title, content: item.content },
        approvedItems
      );

      if (result) {
        setScanResults(prev => ({ ...prev, [item.id]: result }));
      }
    } catch (error: any) {
      console.error("AI Scan Error:", error);
      alert("Lỗi khi rà soát: " + error.message);
    } finally {
      setScanningId(null);
    }
  };

  const handleToggleReference = (refTitle: string, pendingId: string) => {
    if (expandedReferenceId === pendingId) {
      setExpandedReferenceId(null);
      setViewingReferenceItem(null);
      return;
    }

    const refItem = approvedItems.find(i => i.title.trim().toLowerCase() === refTitle.trim().toLowerCase() || i.id === refTitle);
    if (refItem) {
      setViewingReferenceItem(refItem);
      setExpandedReferenceId(pendingId);
    } else {
      alert("Không tìm thấy dữ liệu sáng kiến gốc.");
    }
  };

  if (loading) return <div className="flex justify-center py-20"><Loader2 className="animate-spin text-orange-600" size={48} /></div>;

  return (
    <div className="space-y-8 animate-slide pb-20 relative">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Phê duyệt sáng kiến</h2>
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-black">{pendingItems.length} chờ duyệt</span>
        </div>
      </div>

      {pendingItems.length === 0 ? (
        <div className="py-20 text-center bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800">
          <div className="bg-slate-50 dark:bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
            <ClipboardList size={40} />
          </div>
          <p className="font-black uppercase text-slate-400 tracking-widest text-xs">Hiện không có đơn đăng ký nào</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {pendingItems.map(item => (
            <PendingItemCard
              key={item.id}
              item={item}
              activeTheme={activeTheme}
              scanResult={scanResults[item.id]}
              scanningId={scanningId}
              isConfirming={confirmAction?.id === item.id}
              confirmType={confirmAction?.id === item.id ? confirmAction.type : undefined}
              processingId={processingId}
              isReferenceOpen={expandedReferenceId === item.id}
              viewingReferenceItem={viewingReferenceItem}
              onAIScan={handleAIScan}
              onToggleReference={handleToggleReference}
              onConfirmAction={setConfirmAction}
              onProcessItem={handleProcessItem}
              onOpenLightbox={(images, index) => setLightboxData({ images, index })}
            />
          ))}
        </div>
      )}

      {lightboxData && (
        <Lightbox
          data={lightboxData}
          onClose={() => setLightboxData(null)}
          onNext={(e) => {
            e.stopPropagation();
            setLightboxData(prev => prev ? { ...prev, index: prev.index < prev.images.length - 1 ? prev.index + 1 : prev.index } : null);
          }}
          onPrev={(e) => {
            e.stopPropagation();
            setLightboxData(prev => prev ? { ...prev, index: prev.index > 0 ? prev.index - 1 : prev.index } : null);
          }}
        />
      )}
    </div>
  );
};

export default ApprovalPage;
