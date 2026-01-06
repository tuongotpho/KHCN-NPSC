import { GoogleGenAI, Type } from "@google/genai";
import { InitiativeLevel } from "../types";

export const getAIInstance = () => {
  // Ensure API Key is available from process.env as per guidelines
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

// Schema definition for extracting initiatives
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
      content: { type: Type.STRING, description: "Tóm tắt ngắn gọn nội dung giải pháp (khoảng 50 từ)" },
      field: { type: Type.STRING, description: "Lĩnh vực chuyên môn (ví dụ: Kỹ thuật, Kinh doanh, ATVSLĐ...)" },
      level: { 
        type: Type.ARRAY,
        items: { type: Type.STRING, enum: ["HLH", "NPSC", "NPC", "EVN"] },
        description: "Các cấp công nhận"
      }
    },
    required: ["title", "year"]
  }
};

export const extractInitiativesFromPDF = async (base64Data: string, mimeType: string = "application/pdf") => {
  const ai = getAIInstance();
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: mimeType,
              data: base64Data
            }
          },
          {
            text: "Hãy phân tích tài liệu đính kèm và trích xuất danh sách các sáng kiến. Trả về định dạng JSON chính xác theo schema. Nếu không tìm thấy thông tin cụ thể (ví dụ: năm, cấp), hãy tự suy luận dựa trên ngữ cảnh hoặc để trống."
          }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: initiativeSchema,
        temperature: 0.1 // Low temperature for higher accuracy in extraction
      }
    });

    return response.text ? JSON.parse(response.text) : [];
  } catch (error) {
    console.error("Error extracting PDF data:", error);
    throw error;
  }
};