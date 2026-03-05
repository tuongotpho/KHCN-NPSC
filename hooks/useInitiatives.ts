import { useState, useEffect } from 'react';
import { db } from "../services/firebase";
import { Initiative } from "../types";
import { useApp } from "../contexts/AppContext";

export const useInitiatives = () => {
  const [initiatives, setInitiatives] = useState<Initiative[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { companyId } = useApp();

  useEffect(() => {
    if (!companyId) {
      setInitiatives([]);
      setLoading(false);
      return;
    }

    // Using compat API for Firestore query
    const unsubscribe = db.collection("initiatives")
      .where("companyId", "==", companyId)
      .orderBy("year", "desc")
      .onSnapshot(
        (snapshot) => {
          const items = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Initiative));
          setInitiatives(items);
          setLoading(false);
        },
        (err) => {
          console.error(err);
          setError("Lỗi kết nối dữ liệu.");
          setLoading(false);
        }
      );
    return unsubscribe;
  }, [companyId]);

  return { initiatives, loading, error };
};