
import { GoogleGenAI, Type } from "@google/genai";
import { Initiative, SimilarityInfo } from "../types";

export const getAIInstance = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const AI_SYSTEM_INSTRUCTION = `Bạn là chuyên gia cố vấn chiến lược và quản lý sáng kiến tại NPSC Hub. 

QUY TẮC TRẢ LỜI:
1. Chỉ sử dụng thông tin trong "Dữ liệu hệ thống" được cung cấp bên dưới. Nếu không có thông tin, hãy trả lời "Dữ liệu hiện tại không có thông tin này".
2. Phải trả lời chính xác số lượng, tên đơn vị, cấp công nhận và tác giả nếu có trong dữ liệu.
3. KHÔNG tự bịa đặt thông tin ngoài kho dữ liệu.

QUY TẮC TRÌNH BÀY:
1. KHÔNG sử dụng các ký tự Markdown như dấu sao (*), dấu thăng (#) để định dạng văn bản.
2. Sử dụng dấu gạch đầu dòng (-) cho danh sách.
3. Tiêu đề viết hoa, xuống dòng rõ ràng giữa các ý.
4. Ngôn ngữ hành chính, chuyên nghiệp, súc tích.`;

const initiativeSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      title: { type: Type.STRING, description: "Tên đầy đủ của sáng kiến" },
      authors: { 
        type: Type.ARRAY, 
        items: { type: Type.STRING },
        description: "Danh sách tên các tác giả"
      },
      unit: { 
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "Tên các đơn vị áp dụng/thực hiện"
      },
      year: { type: Type.INTEGER, description: "Năm công nhận" },
      content: { type: Type.STRING, description: "Tóm tắt ngắn gọn nội dung giải pháp" },
      field: { type: Type.STRING, description: "Lĩnh vực chuyên môn" },
      level: { 
        type: Type.ARRAY,
        items: { type: Type.STRING, enum: ["HLH", "NPSC", "NPC", "EVN"] },
        description: "Các cấp công nhận"
      }
    },
    required: ["title", "year"]
  }
};

const similaritySchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      tempId: { type: Type.STRING },
      score: { type: Type.NUMBER, description: "Điểm trùng lặp từ 0-100" },
      status: { type: Type.STRING, enum: ["new", "similar", "duplicate"] },
      reason: { type: Type.STRING, description: "Lý do đánh giá mức độ trùng lặp" },
      referenceTitle: { type: Type.STRING, description: "Tiêu đề sáng kiến cũ bị trùng (nếu có)" }
    },
    required: ["tempId", "score", "status", "reason"]
  }
};

export const extractInitiativesFromPDF = async (base64Data: string, mimeType: string = "application/pdf") => {
  const ai = getAIInstance();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: {
        parts: [
          { inlineData: { mimeType, data: base64Data } },
          { text: "Hãy phân tích tài liệu đính kèm và trích xuất danh sách các sáng kiến. Trả về định dạng JSON chính xác theo schema." }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: initiativeSchema,
        temperature: 0.1
      }
    });
    return response.text ? JSON.parse(response.text) : [];
  } catch (error) {
    console.error("Error extracting PDF data:", error);
    throw error;
  }
};

export const checkSimilarityBatch = async (newItems: any[], existingInitiatives: Initiative[]) => {
  const ai = getAIInstance();
  
  // Tối ưu hóa context: Chỉ gửi Tiêu đề và Tóm tắt để tiết kiệm token
  const catalog = existingInitiatives.map(i => ({
    id: i.id,
    title: i.title,
    content: i.content?.substring(0, 100)
  }));

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `KHO DỮ LIỆU CŨ:\n${JSON.stringify(catalog)}\n\nDANH SÁCH MỚI CẦN KIỂM TRA:\n${JSON.stringify(newItems)}`,
      config: {
        systemInstruction: "Bạn là chuyên gia kiểm soát trùng lặp sáng kiến. Hãy so sánh danh sách mới với kho dữ liệu cũ. 'duplicate' nếu giống >80%, 'similar' nếu giống 40-80%, 'new' nếu dưới 40%. Trả về JSON.",
        responseMimeType: "application/json",
        responseSchema: similaritySchema,
        temperature: 0.1
      }
    });

    return response.text ? JSON.parse(response.text) : [];
  } catch (error) {
    console.error("Similarity Check Error:", error);
    return [];
  }
};
