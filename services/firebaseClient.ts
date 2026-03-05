import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { masterDb } from "./firebaseMaster";

let clientApp: firebase.app.App | null = null;
let currentConfig: any = null;

export const initClientApp = async (identifier: string) => {
  if (identifier === 'master') {
    currentConfig = null;
    return masterDb.app;
  }

  // 1. Fetch config from Master Project (identifier can be companyId or email)
  let configDoc;
  try {
    // Thử tìm trực tiếp theo ID (email đã được sanitize)
    const sanitizedId = identifier.replace(/[@.]/g, '_');
    configDoc = await masterDb.collection('company_configs').doc(sanitizedId).get();
  } catch (e: any) {
    if (e.message?.includes('permissions')) {
      throw new Error('Lỗi phân quyền: Tài khoản của bạn không có quyền đọc cấu hình từ dự án Master. Vui lòng kiểm tra Firestore Rules.');
    }
    throw e;
  }

  if (!configDoc.exists) {
    throw new Error('Cấu hình Firebase cho tài khoản này chưa được thiết lập');
  }
  const config = configDoc.data();
  currentConfig = config;
  const companyId = configDoc.id;

  // 2. Check if firebaseConfig is valid. If not, fallback to master but keep currentConfig (for geminiApiKey)
  const fbConfig = config?.firebaseConfig;
  const isFbConfigValid = fbConfig && fbConfig.apiKey && fbConfig.projectId;

  if (!isFbConfigValid) {
    console.log("Company has no valid Firebase config, falling back to master for storage/auth but keeping company AI key.");
    clientApp = masterDb.app;
    return masterDb.app;
  }

  // 3. Initialize or get client app
  const appName = `client-${companyId}`;
  let app = firebase.apps.find(a => a.name === appName);
  
  if (!app) {
    app = firebase.initializeApp(fbConfig as any, appName);
  }
  
  clientApp = app;
  return clientApp;
};

export const getClientConfig = () => currentConfig;

export const getClientDb = () => {
  if (!clientApp) throw new Error('Client app not initialized');
  return clientApp.firestore();
};

export const getClientAuth = () => {
  if (!clientApp) throw new Error('Client app not initialized');
  return clientApp.auth();
};

export const getClientStorage = () => {
  if (!clientApp) throw new Error('Client app not initialized');
  return clientApp.storage();
};
