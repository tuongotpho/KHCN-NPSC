
export type InitiativeLevel = 'HLH' | 'NPSC' | 'NPC' | 'EVN';

export interface Initiative {
  id: string;
  phase: string;
  year: number;
  type: string;
  title: string;
  content: string;
  authors: string[];
  unit: string[]; // Thay đổi từ string sang string[]
  result: string;
  field: string;
  reward: string;
  level: InitiativeLevel[];
  attachmentName?: string;
  attachmentData?: string; // Lưu base64 cho demo đơn giản
  driveLink?: string; // Đường dẫn Google Drive hoặc tài liệu trực tuyến
}

/**
 * Interface representing a item extracted from a PDF before being saved to the database.
 */
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
    score: number; // 0-100
    reason: string;
    similarToId?: string;
  };
}
