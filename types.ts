
export type InitiativeLevel = 'HLH' | 'NPSC' | 'NPC' | 'EVN';

export interface Initiative {
  id: string;
  phase: string;
  year: number;
  type: string;
  title: string;
  content: string;
  authors: string[];
  unit: string;
  result: string;
  field: string;
  reward: string;
  level: InitiativeLevel[];
  attachmentName?: string;
  attachmentData?: string; // Lưu base64 cho demo đơn giản
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
