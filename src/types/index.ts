// ============================================
// Type definitions cho toàn bộ ứng dụng
// ============================================

// Interface cho một phần nội dung
export interface ContentSection {
  id: string;                    // ID duy nhất
  title: string;                 // Tiêu đề phần
  subtitle?: string;             // Tiêu đề phụ (tùy chọn)
  content: ContentItem[];        // Danh sách các mục nội dung
  icon?: string;                 // Icon đại diện
}

// Interface cho một mục nội dung con
export interface ContentItem {
  id: string;                    // ID duy nhất
  heading: string;               // Tiêu đề mục
  paragraphs: string[];          // Các đoạn văn
  bulletPoints?: string[];       // Các điểm bullet (tùy chọn)
  quote?: string;                // Trích dẫn (tùy chọn)
}

// Interface cho câu hỏi quiz
export interface QuizQuestion {
  id: number;                    // ID câu hỏi
  question: string;              // Nội dung câu hỏi
  options: string[];             // 4 lựa chọn đáp án
  correctAnswer: number;         // Index đáp án đúng (0-3)
  explanation: string;           // Giải thích đáp án
  section: string;               // Thuộc phần nào
}

// Interface cho kết quả quiz
export interface QuizResult {
  totalQuestions: number;        // Tổng số câu hỏi
  correctAnswers: number;        // Số câu đúng
  wrongAnswers: number;          // Số câu sai
  score: number;                 // Điểm phần trăm
  timestamp: Date;               // Thời gian làm bài
  answers: AnswerRecord[];       // Chi tiết từng câu
}

// Interface cho record câu trả lời
export interface AnswerRecord {
  questionId: number;            // ID câu hỏi
  selectedAnswer: number;        // Đáp án đã chọn
  isCorrect: boolean;            // Có đúng không
}

// Interface cho tin nhắn chat
export interface ChatMessage {
  id: string;                    // ID tin nhắn
  role: 'user' | 'assistant';    // Vai trò
  content: string;               // Nội dung
  timestamp: Date;               // Thời gian
}

// Interface cho tiến độ học tập
export interface LearningProgress {
  sectionsRead: string[];        // Các phần đã đọc
  quizScores: QuizResult[];      // Lịch sử điểm quiz
  lastVisited: Date;             // Lần truy cập cuối
  totalTimeSpent: number;        // Tổng thời gian (phút)
}

// Interface cho node trong Mind Map
export interface MindMapNode {
  id: string;                    // ID node
  label: string;                 // Nhãn hiển thị
  description: string;           // Mô tả chi tiết
  children?: MindMapNode[];      // Node con
  color?: string;                // Màu sắc
}

// Interface cho sự kiện Timeline
export interface TimelineEvent {
  id: string;                    // ID sự kiện
  title: string;                 // Tiêu đề
  description: string;           // Mô tả
  detail?: string;               // Chi tiết thêm
}

// Type cho trạng thái câu hỏi
export type QuestionStatus = 'unanswered' | 'correct' | 'incorrect';

// Type cho các tab navigation
export type NavTab = 'home' | 'content' | 'quiz' | 'chat';

