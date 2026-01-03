
import { GoogleGenAI } from "@google/genai";

export const getAIInstance = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const AI_SYSTEM_INSTRUCTION = `Bạn là chuyên gia cố vấn chiến lược và quản lý sáng kiến tại NPSC Hub. 
Nhiệm vụ của bạn là cung cấp thông tin chính xác, chuyên nghiệp.
QUY TẮC TRÌNH BÀY:
1. KHÔNG sử dụng ký tự Markdown (sao, thăng).
2. Tiêu đề viết hoa, xuống dòng rõ ràng.
3. Ngôn ngữ hành chính chuyên nghiệp.`;
