import { Initiative, SimilarityInfo, InitiativeScope } from "../types";

// --- CLIENT-SIDE RATE LIMITING CONFIG (Optional fallback) ---
const RATE_LIMIT_WINDOW = 60000;
const MAX_REQUESTS_PER_MINUTE = 20;
let requestTimestamps: number[] = [];

const checkRateLimit = () => {
  const now = Date.now();
  requestTimestamps = requestTimestamps.filter(t => now - t < RATE_LIMIT_WINDOW);
  if (requestTimestamps.length >= MAX_REQUESTS_PER_MINUTE) {
    throw new Error(`Hệ thống đang bận. Vui lòng thử lại sau ${Math.ceil((RATE_LIMIT_WINDOW - (now - requestTimestamps[0])) / 1000)} giây.`);
  }
  requestTimestamps.push(now);
};

// Common fetch wrapper to Vercel Serverless Function
const callGeminiAPI = async (action: string, payload: any) => {
  checkRateLimit();
  try {
    const res = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, payload })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `Lỗi máy chủ (${res.status})`);
    }
    return await res.json();
  } catch (error: any) {
    console.error("AI API Call Error:", error);
    throw error;
  }
};

export const generateEmbedding = async (text: string) => {
  return await callGeminiAPI('generateEmbedding', { text });
};

// --- Cosine Similarity (Client Side Vector Math) ---
export const cosineSimilarity = (vecA: number[], vecB: number[]) => {
  if (!vecA || !vecB || vecA.length !== vecB.length) return 0;
  let dotProduct = 0, magnitudeA = 0, magnitudeB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    magnitudeA += vecA[i] * vecA[i];
    magnitudeB += vecB[i] * vecB[i];
  }
  return dotProduct / (Math.sqrt(magnitudeA) * Math.sqrt(magnitudeB));
};

export const extractInitiativesFromPDF = async (base64Data: string, mimeType: string = "application/pdf") => {
  return await callGeminiAPI('extractInitiativesFromPDF', { base64Data, mimeType });
};

export const checkSimilarityBatch = async (newItems: any[], existingInitiatives: Initiative[]) => {
  const catalog = existingInitiatives.map(i => ({ id: i.id, title: i.title, content: i.content?.substring(0, 100) }));
  return await callGeminiAPI('checkSimilarityBatch', { newItems, catalog });
};

export const autoFillRegisterForm = async (data: string, isText: boolean = false) => {
  const today = new Date();
  const currentDateStr = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
  return await callGeminiAPI('autoFillRegisterForm', { data, isText, currentDateStr });
};

export const checkApprovalSimilarity = async (newItem: { title: string, content: string }, existingInitiatives: Initiative[]) => {
  const catalog = existingInitiatives.map(i => ({ id: i.id, title: i.title, content: i.content ? i.content.substring(0, 300) : "" }));
  return await callGeminiAPI('checkApprovalSimilarity', { newItem, catalog });
};

export const checkPublicSimilarity = async (draft: { title: string, content: string }, existingInitiatives: Initiative[]) => {
  const catalog = existingInitiatives.map(i => ({
    id: i.id, title: i.title, content: i.content ? i.content.substring(0, 200) : "", scope: i.scope || 'Company'
  }));
  return await callGeminiAPI('checkPublicSimilarity', { draft, catalog });
};

export const validateInitiativeCompliance = async (data: { title: string, content: string, monthsApplied: number }) => {
  try {
    return await callGeminiAPI('validateInitiativeCompliance', { data });
  } catch (error) {
    return {
      overallStatus: 'warning' as const,
      score: 0, items: [],
      missingSections: ["Lỗi kết nối AI, không thể thẩm định."],
      suggestion: "Vui lòng thử lại sau."
    };
  }
};

export const chatAssistant = async (context: string, input: string) => {
  return await callGeminiAPI('chatAssistant', { context, input });
};

export const generateInsight = async (statsString: string) => {
  return await callGeminiAPI('generateInsight', { statsString });
};
