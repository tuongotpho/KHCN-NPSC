import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_0AkyF0VHWWjqiX_ZE1KapQ72kgbM--Q",
  authDomain: "dashboard-8787.firebaseapp.com",
  projectId: "dashboard-8787",
  storageBucket: "dashboard-8787.firebasestorage.app",
  messagingSenderId: "544276859484",
  appId: "1:544276859484:web:973ad657ff87044349b499",
  measurementId: "G-GS3R89R7ZY"
};

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const storage = firebaseApp.storage();

export default firebase;