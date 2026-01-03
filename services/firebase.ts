
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_0AkyF0VHWWjqiX_ZE1KapQ72kgbM--Q",
  authDomain: "dashboard-8787.firebaseapp.com",
  projectId: "dashboard-8787",
  storageBucket: "dashboard-8787.firebasestorage.app",
  messagingSenderId: "544276859484",
  appId: "1:544276859484:web:973ad657ff87044349b499",
  measurementId: "G-GS3R89R7ZY"
};

const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
