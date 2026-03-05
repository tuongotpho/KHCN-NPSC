import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { initClientApp, getClientConfig } from "./firebaseClient";

export { getClientConfig };
export let db: firebase.firestore.Firestore;
export let auth: firebase.auth.Auth;
export let storage: firebase.storage.Storage;

// Callback để thông báo khi Firebase được khởi tạo lại
let onInitCallbacks: (() => void)[] = [];
export const onFirebaseInit = (cb: () => void) => {
  onInitCallbacks.push(cb);
  return () => {
    onInitCallbacks = onInitCallbacks.filter(c => c !== cb);
  };
};

export const initFirebase = async (companyId: string) => {
  const clientApp = await initClientApp(companyId);
  const newDb = clientApp.firestore();
  const newAuth = clientApp.auth();
  const newStorage = clientApp.storage();

  // Only update and notify if the app instance actually changed
  if (db === newDb && auth === newAuth) {
    return;
  }

  db = newDb;
  auth = newAuth;
  storage = newStorage;
  
  // Thông báo cho các listener
  onInitCallbacks.forEach(cb => cb());
};

export default firebase;
