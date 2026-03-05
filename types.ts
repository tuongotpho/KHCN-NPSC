
export type InitiativeLevel = 'HLH' | 'NPSC' | 'NPC' | 'EVN';
export type InitiativeScope = 'Company' | 'NPC'; 

export interface PointConfig {
  HLH: number;
  NPSC: number;
  NPC: number;
  EVN: number;
}

export interface Initiative {
  id: string;
  companyId: string; // MỚI: Định danh công ty
  scope?: InitiativeScope; 
  phase: string;
  year: number;
  type: string;
  title: string;
  content: string;
  authors: string[];
  unit: string[];
  result: string;
  field: string[]; 
  reward: string;
  level: InitiativeLevel[];
  isScalable?: boolean;
  attachmentName?: string;
  attachmentUrl?: string; 
  attachmentUrls?: string[]; 
  driveLink?: string; 
  imageUrl?: string; 
  imageUrls?: string[]; 
  approvalDocUrls?: string[]; 
  monthsApplied?: number; 
  embedding_field?: number[]; // MỚI: Vector dữ liệu cho RAG
}

export interface ComplianceCheck {
  overallStatus: 'pass' | 'fail' | 'warning';
  score: number; 
  items: {
    criteria: string; 
    isMet: boolean; 
    comment: string; 
  }[];
  missingSections: string[]; 
  suggestion: string; 
}

export interface PendingInitiative {
  id: string;
  companyId: string; // MỚI: Định danh công ty
  title: string;
  authors: string[];
  unit: string[];
  year: number;
  content: string;
  field: string[];
  status: 'pending';
  submittedAt: number;
  driveLink?: string; 
  attachmentUrls?: string[]; 
  imageUrl?: string; 
  imageUrls?: string[]; 
  registrationFormUrl?: string;
  contactZalo?: string; 
  monthsApplied?: number; 
  
  publicAnalysis?: {
    score: number;
    verdict: string;
    advice: string;
    similarTitle?: string;
    similarId?: string; 
    similarScope?: InitiativeScope; 
  };

  complianceCheck?: ComplianceCheck;
}

export type SettlementStatus = 'chua_thanh_toan' | 'dang_thanh_toan' | 'da_quyet_toan';
export type ProjectStatus = 'dang_thuc_hien' | 'da_nghiem_thu' | 'da_huy';

export interface ResearchProject {
  id: string;
  companyId: string; // MỚI: Định danh công ty
  title: string;
  authors: string[];
  mainMembers: string[];
  experts: string[];
  budget: number;
  progress: number; 
  settlementStatus: SettlementStatus;
  content: string;
  level: 'NPSC' | 'NPC' | 'EVN';
  year: number;
  status: ProjectStatus;
  attachmentUrl?: string;
}

export interface SimilarityInfo {
  score: number; 
  status: 'new' | 'similar' | 'duplicate';
  reason: string;
  referenceTitle?: string;
}

export interface BatchItem {
  tempId: string;
  companyId: string; // MỚI: Định danh công ty
  selected: boolean;
  title: string;
  authors: string[];
  unit: string[];
  year: number;
  content: string;
  field: string[]; 
  level: InitiativeLevel[];
  similarity?: SimilarityInfo;
  scope?: InitiativeScope; 
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  thinking?: string;
  isRag?: boolean; // Đánh dấu tin nhắn dùng RAG
}

export interface AnalysisResult {
  score: number;
  isDuplicate: boolean;
  reason: string;
  mostSimilarTitle?: string;
  mostSimilarId?: string;
  fromUser?: boolean;
}

export interface ReferenceDocument {
  id: string;
  companyId: string; // MỚI: Định danh công ty
  title: string;
  description: string;
  fileName: string;
  fileUrl: string;
  fileType: string;
  size: number;
  uploadDate: number;
  uploadedBy: string;
}

export type UserRole = 'master_admin' | 'company_admin' | 'user';

export interface UserProfile {
  uid: string;
  email: string;
  role: UserRole;
  companyId?: string;
  displayName?: string;
}

export interface CompanyConfig {
  id: string;
  name: string;
  adminEmail: string; // Email của admin công ty
  firebaseConfig: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  };
  geminiApiKey?: string;
}
