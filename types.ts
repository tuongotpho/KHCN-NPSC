
export type InitiativeLevel = 'HLH' | 'NPSC' | 'NPC' | 'EVN';

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
  attachmentUrl?: string; // Chuyển từ attachmentData (base64) sang attachmentUrl (Firebase Storage URL)
  driveLink?: string; 
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
  fileType: string; // MIME type hoặc extension
  size: number;
  uploadDate: number;
  uploadedBy: string;
}
