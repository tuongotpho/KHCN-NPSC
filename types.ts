
export type InitiativeLevel = 'HLH' | 'NPSC' | 'NPC' | 'EVN';

export interface PointConfig {
  HLH: number;
  NPSC: number;
  NPC: number;
  EVN: number;
}

export interface Initiative {
  id: string;
  phase: string;
  year: number;
  type: string;
  title: string;
  content: string;
  authors: string[];
  unit: string[];
  result: string;
  field: string;
  reward: string;
  level: InitiativeLevel[];
  attachmentName?: string;
  attachmentUrl?: string;
  driveLink?: string; 
}

export type SettlementStatus = 'chua_thanh_toan' | 'dang_thanh_toan' | 'da_quyet_toan';
export type ProjectStatus = 'dang_thuc_hien' | 'da_nghiem_thu' | 'da_huy';

export interface ResearchProject {
  id: string;
  title: string;
  authors: string[];
  mainMembers: string[];
  experts: string[];
  budget: number;
  progress: number; // 0-100
  settlementStatus: SettlementStatus;
  content: string;
  level: 'NPSC' | 'NPC' | 'EVN';
  year: number;
  status: ProjectStatus;
  attachmentUrl?: string;
}

export interface SimilarityInfo {
  score: number; // 0-100
  status: 'new' | 'similar' | 'duplicate';
  reason: string;
  referenceTitle?: string;
}

export interface BatchItem {
  tempId: string;
  selected: boolean;
  title: string;
  authors: string[];
  unit: string[];
  year: number;
  content: string;
  field: string;
  level: InitiativeLevel[];
  similarity?: SimilarityInfo; // Thông tin trùng lặp
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  thinking?: string;
}

export interface AnalysisResult {
  evaluation: string;
  similarity: {
    isDuplicate: boolean;
    score: number;
    reason: string;
    similarToId?: string;
  };
}

export interface ReferenceDocument {
  id: string;
  title: string;
  description: string;
  fileName: string;
  fileUrl: string;
  fileType: string;
  size: number;
  uploadDate: number;
  uploadedBy: string;
}
