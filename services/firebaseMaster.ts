import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const masterFirebaseConfig = {
  // Replace with your Master Project config
  apiKey: "AIzaSyDERgiwirtioj4YRDVA341ASvHWkC4spRs",
  authDomain: "app-aistudio.firebaseapp.com",
  projectId: "app-aistudio",
  storageBucket: "app-aistudio.firebasestorage.app",
  messagingSenderId: "887684384968",
  appId: "1:887684384968:web:e7bacbf3dc71688286fdfd",
  measurementId: "G-VGSVC5QEY3"
};

const masterApp = !firebase.apps.find(app => app.name === 'master') 
  ? firebase.initializeApp(masterFirebaseConfig, 'master') 
  : firebase.app('master');

export const masterDb = masterApp.firestore();
export const masterAuth = masterApp.auth();
export const masterStorage = masterApp.storage();
