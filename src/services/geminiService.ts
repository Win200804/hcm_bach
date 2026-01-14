// ============================================
// Service kết nối với Google Gemini AI
// Model: gemini-2.5-flash
// ============================================

import { GoogleGenerativeAI } from '@google/generative-ai';

// Lấy API key từ environment variable
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Tên model sử dụng
const MODEL_NAME = 'gemini-2.5-flash';

// Khởi tạo Gemini AI client
const genAI = new GoogleGenerativeAI(API_KEY || '');

// System prompt cho AI về Tư tưởng Hồ Chí Minh
const SYSTEM_PROMPT = `Bạn là một trợ lý AI chuyên về Tư tưởng Hồ Chí Minh, đặc biệt là về Chủ nghĩa Xã hội và Con đường Quá độ tại Việt Nam.

Kiến thức cốt lõi của bạn bao gồm:

1. QUAN NIỆM TỔNG QUÁT VỀ CNXH:
- Mục tiêu cốt lõi: "Làm sao cho dân giàu, nước mạnh", mang lại ấm no, tự do, hạnh phúc cho nhân dân
- CNXH là chế độ do nhân dân lao động làm chủ, không có bóc lột
- CNXH và Cộng sản chủ nghĩa là các giai đoạn khác nhau của cùng một hình thái xã hội

2. ĐẶC TRƯNG CƠ BẢN CỦA XÃ HỘI XHCN:
- Chính trị: Dân chủ thực sự, nhân dân là chủ và làm chủ
- Kinh tế: Lực lượng sản xuất hiện đại, công hữu về tư liệu sản xuất
- Văn hóa: Xóa bỏ bóc lột, công bằng, các dân tộc đoàn kết
- Chủ thể: Nhân dân xây dựng dưới sự lãnh đạo của Đảng

3. MỤC TIÊU VÀ ĐỘNG LỰC:
- Chính trị: Dân làm chủ, tự do ngôn luận, bầu cử
- Kinh tế: Công nghiệp, nông nghiệp hiện đại, hợp tác xã
- Động lực: Đoàn kết toàn dân là lực lượng mạnh nhất
- Con người XHCN: Có đạo đức, ý thức làm chủ, tinh thần tập thể

4. THỜI KỲ QUÁ ĐỘ:
- Tính chất: Phức tạp, lâu dài, gian khổ nhất
- Đặc điểm: Việt Nam đi thẳng lên CNXH từ nước nông nghiệp lạc hậu
- Nguyên tắc: Dựa trên Mác-Lênin, giữ vững độc lập, vận dụng sáng tạo
- Xây đi đôi với Chống

5. MỐI QUAN HỆ ĐỘC LẬP DÂN TỘC - CNXH:
- Sợi chỉ đỏ xuyên suốt tư tưởng HCM
- Độc lập dân tộc là tiền đề
- CNXH là bảo chứng bền vững cho độc lập

6. VẬN DỤNG TRONG ĐỔI MỚI:
- "Dân biết, dân bàn, dân làm, dân kiểm tra"
- Chỉnh đốn Đảng, chống suy thoái
- Đào tạo con người mới có tri thức và đạo đức

Hướng dẫn trả lời:
- Trả lời bằng tiếng Việt
- Ngắn gọn, súc tích nhưng đầy đủ thông tin
- Trích dẫn câu nói của Hồ Chí Minh khi phù hợp
- Nếu câu hỏi ngoài phạm vi, hướng dẫn người dùng về các nội dung liên quan
- Thân thiện và dễ hiểu`;

// Interface cho tin nhắn trong chat history
interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

// Lưu trữ lịch sử chat
let chatHistory: ChatMessage[] = [];

// Hàm gửi tin nhắn đến Gemini
export async function sendMessageToGemini(userMessage: string): Promise<string> {
  try {
    // Kiểm tra API key
    if (!API_KEY) {
      return 'Lỗi: Chưa cấu hình VITE_GEMINI_API_KEY trong file .env. Vui lòng thêm API key để sử dụng tính năng AI Chat.';
    }

    // Lấy model
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    // Tạo chat với system instruction
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: SYSTEM_PROMPT }]
        },
        {
          role: 'model',
          parts: [{ text: 'Tôi đã hiểu. Tôi sẽ đóng vai trò là trợ lý AI chuyên về Tư tưởng Hồ Chí Minh về Chủ nghĩa Xã hội và Con đường Quá độ tại Việt Nam. Tôi sẽ trả lời bằng tiếng Việt, ngắn gọn và chính xác.' }]
        },
        ...chatHistory
      ],
      generationConfig: {
        maxOutputTokens: 4096,
        temperature: 0.7,
      }
    });

    // Gửi tin nhắn
    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    const text = response.text();

    // Lưu vào history
    chatHistory.push(
      { role: 'user', parts: [{ text: userMessage }] },
      { role: 'model', parts: [{ text }] }
    );

    // Giới hạn history để không quá dài
    if (chatHistory.length > 20) {
      chatHistory = chatHistory.slice(-20);
    }

    return text;
  } catch (error) {
    console.error('Gemini API Error:', error);
    
    // Xử lý các loại lỗi khác nhau
    if (error instanceof Error) {
      if (error.message.includes('API_KEY')) {
        return 'Lỗi: API key không hợp lệ. Vui lòng kiểm tra lại VITE_GEMINI_API_KEY trong file .env.';
      }
      if (error.message.includes('quota') || error.message.includes('limit')) {
        return 'Lỗi: Đã vượt quá giới hạn sử dụng API. Vui lòng thử lại sau.';
      }
      if (error.message.includes('network') || error.message.includes('fetch')) {
        return 'Lỗi kết nối mạng. Vui lòng kiểm tra kết nối internet và thử lại.';
      }
    }
    
    return 'Xin lỗi, đã xảy ra lỗi khi xử lý yêu cầu của bạn. Vui lòng thử lại sau.';
  }
}

// Hàm reset chat history
export function resetChatHistory(): void {
  chatHistory = [];
}

// Hàm kiểm tra API key đã được cấu hình chưa
export function isApiKeyConfigured(): boolean {
  return !!API_KEY && API_KEY.length > 0;
}

