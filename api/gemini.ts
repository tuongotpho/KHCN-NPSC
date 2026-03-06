import { GoogleGenAI, Type } from "@google/genai";

// --- SECURITY: Allowed origins (tighten for production) ---
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['*']; // Default: open. Set ALLOWED_ORIGINS=https://your-domain.vercel.app in Vercel env.

const getCorsOrigin = (requestOrigin?: string) => {
  if (ALLOWED_ORIGINS.includes('*')) return '*';
  if (requestOrigin && ALLOWED_ORIGINS.includes(requestOrigin)) return requestOrigin;
  return ALLOWED_ORIGINS[0];
};

// --- SECURITY: Firebase Admin token verification ---
// Optional: If firebase-admin is installed, verify tokens.
// Otherwise, requests are allowed but logged.
let firebaseAdmin: any = null;
try {
  firebaseAdmin = require('firebase-admin');
  if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      })
    });
  }
} catch {
  // firebase-admin not installed — auth verification will be skipped
  firebaseAdmin = null;
}

const verifyAuth = async (authHeader?: string): Promise<{ uid: string } | null> => {
  if (!firebaseAdmin || !authHeader?.startsWith('Bearer ')) return null;
  try {
    const token = authHeader.split('Bearer ')[1];
    const decoded = await firebaseAdmin.auth().verifyIdToken(token);
    return { uid: decoded.uid };
  } catch {
    return null;
  }
};

const getAIInstance = () => {
  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set on the server.");
  }
  return new GoogleGenAI({ apiKey });
};

// --- SCHEMAS ---
const initiativeSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      title: { type: Type.STRING, description: "Tên đầy đủ của sáng kiến" },
      authors: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Danh sách tên các tác giả" },
      unit: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Tên các đơn vị áp dụng/thực hiện" },
      year: { type: Type.INTEGER, description: "Năm công nhận" },
      content: { type: Type.STRING, description: "Tóm tắt ngắn gọn nội dung giải pháp" },
      field: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Lĩnh vực chuyên môn" },
      level: { type: Type.ARRAY, items: { type: Type.STRING, enum: ["HLH", "NPSC", "NPC", "EVN"] }, description: "Các cấp công nhận" }
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

const registerFormSchema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "Tên sáng kiến viết hoa" },
    authors: { type: Type.STRING, description: "Chuỗi tên các tác giả, phân cách bằng dấu phẩy" },
    unit: { type: Type.STRING, description: "Chuỗi tên các đơn vị, phân cách bằng dấu phẩy" },
    content: { type: Type.STRING, description: "Tóm tắt nội dung giải pháp. QUAN TRỌNG: Trả về chuỗi văn bản có chứa ký tự xuống dòng (\\n) giữa các ý. Bắt đầu mỗi ý bằng gạch đầu dòng (-)." },
    field: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Danh sách lĩnh vực liên quan nhất" },
    year: { type: Type.INTEGER, description: "Năm viết đơn" },
    monthsApplied: { type: Type.INTEGER, description: "Số tháng đã áp dụng thực tế tính đến thời điểm hiện tại." }
  },
  required: ["title", "authors", "unit", "content", "field", "monthsApplied"]
};

const approvalReviewSchema = {
  type: Type.OBJECT,
  properties: {
    score: { type: Type.NUMBER, description: "Phần trăm trùng lặp (0-100)" },
    isDuplicate: { type: Type.BOOLEAN, description: "True nếu điểm trùng lặp >= 70" },
    mostSimilarTitle: { type: Type.STRING, description: "Tên của sáng kiến cũ giống nhất trong kho" },
    mostSimilarId: { type: Type.STRING, description: "ID của sáng kiến cũ giống nhất" },
    reason: { type: Type.STRING, description: "Giải thích ngắn gọn tại sao lại giống hoặc khác nhau." }
  },
  required: ["score", "isDuplicate", "reason"]
};

const publicCheckSchema = {
  type: Type.OBJECT,
  properties: {
    score: { type: Type.NUMBER, description: "Phần trăm trùng lặp (0-100)" },
    verdict: { type: Type.STRING, enum: ["Thấp", "Trung bình", "Cao"], description: "Đánh giá mức độ trùng lặp" },
    similarTitle: { type: Type.STRING, description: "Tên sáng kiến cũ có nội dung tương tự nhất (nếu có)" },
    similarId: { type: Type.STRING, description: "ID của sáng kiến cũ tương tự" },
    similarScope: { type: Type.STRING, enum: ["Company", "NPC"], description: "Nguồn gốc của sáng kiến bị trùng" },
    advice: { type: Type.STRING, description: "Lời khuyên chi tiết. BẮT BUỘC: Sử dụng ký tự xuống dòng (\\n) giữa các đoạn và gạch đầu dòng (-) cho các ý. KHÔNG dùng Markdown." }
  },
  required: ["score", "verdict", "advice"]
};

const complianceCheckSchema = {
  type: Type.OBJECT,
  properties: {
    overallStatus: { type: Type.STRING, enum: ['pass', 'fail', 'warning'], description: "Trạng thái tổng thể" },
    score: { type: Type.NUMBER, description: "Điểm chất lượng hồ sơ từ 0-100" },
    items: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          criteria: { type: Type.STRING, description: "Tên tiêu chí" },
          isMet: { type: Type.BOOLEAN, description: "True nếu tiêu chí được đáp ứng tốt" },
          comment: { type: Type.STRING, description: "Nhận xét chi tiết" }
        },
        required: ["criteria", "isMet", "comment"]
      }
    },
    missingSections: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Các mục bắt buộc bị thiếu" },
    suggestion: { type: Type.STRING, description: "Lời khuyên tổng quan" }
  },
  required: ["overallStatus", "score", "items", "missingSections", "suggestion"]
};

export default async function handler(req: any, res: any) {
  // CORS setup — uses ALLOWED_ORIGINS env var
  const origin = getCorsOrigin(req.headers?.origin);
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Optional auth check — logs but doesn't block (unless you want strict mode)
    const authUser = await verifyAuth(req.headers?.authorization);
    if (firebaseAdmin && !authUser) {
      console.warn("API call without valid Firebase token from origin:", req.headers?.origin);
      // Uncomment the next line to enforce auth:
      // return res.status(401).json({ error: 'Unauthorized: Invalid or missing token' });
    }

    const ai = getAIInstance();
    const { action, payload } = req.body;

    if (action === 'generateEmbedding') {
      const response = await ai.models.embedContent({
        model: 'text-embedding-004',
        contents: [{ parts: [{ text: payload.text }] }]
      });
      return res.status(200).json(response.embeddings?.[0]?.values);
    }

    if (action === 'extractInitiativesFromPDF') {
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: {
          parts: [
            { inlineData: { mimeType: payload.mimeType, data: payload.base64Data } },
            { text: "Hãy phân tích tài liệu đính kèm và trích xuất danh sách các sáng kiến. Trả về định dạng JSON chính xác theo schema." }
          ]
        },
        config: { responseMimeType: "application/json", responseSchema: initiativeSchema, temperature: 0.1 }
      });
      return res.status(200).json(response.text ? JSON.parse(response.text) : []);
    }

    if (action === 'checkSimilarityBatch') {
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: `KHO DỮ LIỆU CŨ:\n${JSON.stringify(payload.catalog)}\n\nDANH SÁCH MỚI CẦN KIỂM TRA:\n${JSON.stringify(payload.newItems)}`,
        config: {
          systemInstruction: "Bạn là chuyên gia kiểm soát trùng lặp sáng kiến. Hãy so sánh danh sách mới với kho dữ liệu cũ. 'duplicate' nếu giống >80%, 'similar' nếu giống 40-80%, 'new' nếu dưới 40%. Trả về JSON.",
          responseMimeType: "application/json", responseSchema: similaritySchema, temperature: 0.1
        }
      });
      return res.status(200).json(response.text ? JSON.parse(response.text) : []);
    }

    if (action === 'autoFillRegisterForm') {
      const parts = payload.isText
        ? [{ text: `Dữ liệu trích xuất từ file văn bản:\n${payload.data}` }]
        : [{ inlineData: { mimeType: 'application/pdf', data: payload.data } }];

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: {
          parts: [
            ...parts,
            {
              text: `Hãy đóng vai trò là thư ký nhập liệu. Phân tích dữ liệu được cung cấp và trích xuất thông tin để điền vào form đăng ký.
LƯU Ý QUAN TRỌNG: HÔM NAY LÀ NGÀY ${payload.currentDateStr}.
Yêu cầu:
1. Tên sáng kiến: Viết hoa chữ cái đầu.
2. Tác giả & Đơn vị: Liệt kê đầy đủ.
3. Nội dung: Tóm tắt giải pháp thành các ý gãy gọn. 
   - BẮT BUỘC: Mỗi ý chính phải nằm trên một dòng riêng biệt.
   - BẮT BUỘC: Sử dụng ký tự xuống dòng (\\n) trước mỗi gạch đầu dòng (-).
   - Cấm: Không sử dụng ký tự Markdown. 
4. Lĩnh vực: Chọn từ danh sách (Thiết bị điện, Thí nghiệm điện, Tư vấn, CNTT, SC MBA, Giải pháp, Hành chính, An toàn, Kinh doanh).
5. Thời gian áp dụng: Tính số tháng từ thời điểm bắt đầu đến HÔM NAY (${payload.currentDateStr}). Nếu KHÔNG tìm thấy, trả về 0.`
            }
          ]
        },
        config: { responseMimeType: "application/json", responseSchema: registerFormSchema, temperature: 0.1 }
      });
      return res.status(200).json(response.text ? JSON.parse(response.text) : null);
    }

    if (action === 'checkApprovalSimilarity') {
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: `KHO SÁNG KIẾN ĐÃ DUYỆT:\n${JSON.stringify(payload.catalog)}\n\nSÁNG KIẾN CẦN RÀ SOÁT:\nTiêu đề: ${payload.newItem.title}\nNội dung: ${payload.newItem.content}`,
        config: {
          systemInstruction: `Bạn là thẩm định viên sáng kiến. Nhiệm vụ:
          1. Tìm trong kho xem có sáng kiến nào có nội dung trùng lặp không.
          2. Đánh giá mức độ trùng lặp (score) từ 0-100%.
          3. Nếu score >= 70, đánh dấu isDuplicate = true.
          4. Đưa ra lý do ngắn gọn bằng tiếng Việt.`,
          responseMimeType: "application/json", responseSchema: approvalReviewSchema, temperature: 0.1
        }
      });
      return res.status(200).json(response.text ? JSON.parse(response.text) : null);
    }

    if (action === 'checkPublicSimilarity') {
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: `KHO SÁNG KIẾN HIỆN CÓ:\n${JSON.stringify(payload.catalog)}\n\nÝ TƯỞNG MỚI:\nTiêu đề: ${payload.draft.title}\nNội dung: ${payload.draft.content}`,
        config: {
          systemInstruction: `Bạn là Cố vấn Sáng kiến chuyên nghiệp.
          NHIỆM VỤ:
          1. So sánh "Ý TƯỞNG MỚI" với "KHO SÁNG KIẾN HIỆN CÓ".
          2. Đánh giá điểm trùng lặp (score).
          3. Nếu tìm thấy trùng lặp, TRẢ VỀ ID và Scope của sáng kiến gốc.
          QUY ĐỊNH ĐỊNH DẠNG:
          1. TRẢ VỀ VĂN BẢN THUẦN (PLAIN TEXT).
          2. KHÔNG sử dụng ký tự Markdown.
          3. Sử dụng gạch đầu dòng (-) và xuống dòng (\\n) để phân tách các ý.`,
          responseMimeType: "application/json", responseSchema: publicCheckSchema, temperature: 0.2
        }
      });
      return res.status(200).json(response.text ? JSON.parse(response.text) : null);
    }

    if (action === 'validateInitiativeCompliance') {
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: `NỘI DUNG SÁNG KIẾN:\nTiêu đề: ${payload.data.title}\nThời gian áp dụng: ${payload.data.monthsApplied} tháng\nNội dung chi tiết: ${payload.data.content}`,
        config: {
          systemInstruction: `Bạn là Cán bộ Thẩm định Sáng kiến tại EVNNPC. Kiểm tra nội dung sáng kiến theo các tiêu chí:
          1. [Mô tả hiện trạng]: Có nêu rõ tình trạng trước khi có sáng kiến?
          2. [Nội dung giải pháp]: Có mô tả chi tiết các bước thực hiện?
          3. [Tính mới/Sáng tạo]: Có nêu rõ điểm cải tiến?
          4. [Thời gian áp dụng]: Đã áp dụng ${payload.data.monthsApplied} tháng. Yêu cầu >= 3.
          5. [Hiệu quả]: Có so sánh lợi ích so với giải pháp cũ?
          6. [Khả năng nhân rộng]: Có đề cập khả năng áp dụng cho đơn vị khác?`,
          responseMimeType: "application/json", responseSchema: complianceCheckSchema, temperature: 0.1
        }
      });
      return res.status(200).json(response.text ? JSON.parse(response.text) : null);
    }

    if (action === 'chatAssistant') {
      const { context, input } = payload;
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: `CONTEXT DỮ LIỆU ĐÃ LỌC (HYBRID RAG RETRIEVED):\n${context}\n\nCÂU HỎI NGƯỜI DÙNG: "${input}"`,
        config: {
          systemInstruction: `Bạn là trợ lý AI chuyên nghiệp của Hệ thống Quản trị Sáng kiến (NPC-Innovation). Hôm nay bạn đóng vai trò tham vấn chuyên gia tự động.
LƯU Ý QUAN TRỌNG:
1. Dữ liệu trên là danh sách các sáng kiến có liên quan nhất.
2. Nếu người dùng hỏi về một người (Tác giả), hãy liệt kê các sáng kiến mà người đó tham gia.
3. Nếu phần dữ liệu context KHÔNG có thông tin để trả lời, dứt khoát bảo là "Chưa tìm thấy trong kho lưu trữ dữ liệu hiện tại".
4. Đảm bảo ngôn từ lịch sự, thân thiện và có ích.`,
          temperature: 0.2
        }
      });
      return res.status(200).json({ text: response.text });
    }

    if (action === 'generateInsight') {
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: `Phân tích dữ liệu: ${payload.statsString}. Hãy dự báo xu hướng và gợi ý định hướng sáng kiến cho năm tới để nâng cao hiệu quả sản xuất kinh doanh.`,
        config: {
          systemInstruction: "Bạn là chuyên gia phân tích dữ liệu chuyên nghiệp. Chỉ trả về một đoạn văn bản tóm tắt từ những insight độc đáo nhất. Đừng phân tích cơ bản.",
          temperature: 0.4
        }
      });
      return res.status(200).json({ text: response.text });
    }

    return res.status(400).json({ error: 'Unknown action' });

  } catch (error: any) {
    console.error("API Error:", error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
