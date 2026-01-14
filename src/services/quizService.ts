// ============================================
// Service xử lý logic Quiz
// ============================================

import { QuizQuestion, QuizResult, AnswerRecord } from '../types';
import { quizQuestions, shuffleQuestions } from '../data/quizData';
import { saveQuizResult } from './storageService';

// Lấy tất cả câu hỏi
export const getAllQuestions = (): QuizQuestion[] => {
  return quizQuestions;
};

// Lấy câu hỏi đã xáo trộn
export const getShuffledQuestions = (): QuizQuestion[] => {
  return shuffleQuestions([...quizQuestions]);
};

// Lấy câu hỏi theo số lượng
export const getQuestionsByCount = (count: number): QuizQuestion[] => {
  const shuffled = shuffleQuestions([...quizQuestions]);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

// Kiểm tra đáp án
export const checkAnswer = (
  question: QuizQuestion, 
  selectedAnswer: number
): boolean => {
  return question.correctAnswer === selectedAnswer;
};

// Tính điểm quiz
export const calculateScore = (
  questions: QuizQuestion[], 
  answers: Map<number, number>
): QuizResult => {
  let correctCount = 0;
  const answerRecords: AnswerRecord[] = [];

  questions.forEach(question => {
    const selectedAnswer = answers.get(question.id);
    const isCorrect = selectedAnswer !== undefined && 
                     checkAnswer(question, selectedAnswer);
    
    if (isCorrect) correctCount++;
    
    answerRecords.push({
      questionId: question.id,
      selectedAnswer: selectedAnswer ?? -1,
      isCorrect
    });
  });

  const result: QuizResult = {
    totalQuestions: questions.length,
    correctAnswers: correctCount,
    wrongAnswers: questions.length - correctCount,
    score: Math.round((correctCount / questions.length) * 100),
    timestamp: new Date(),
    answers: answerRecords
  };

  // Lưu kết quả
  saveQuizResult(result);

  return result;
};

// Đánh giá kết quả
export const evaluateResult = (score: number): {
  grade: string;
  message: string;
  color: string;
} => {
  if (score >= 90) {
    return {
      grade: 'Xuất sắc',
      message: 'Bạn đã nắm vững tư tưởng Hồ Chí Minh về CNXH!',
      color: 'text-green-400'
    };
  } else if (score >= 80) {
    return {
      grade: 'Giỏi',
      message: 'Bạn có hiểu biết tốt về nội dung bài học!',
      color: 'text-blue-400'
    };
  } else if (score >= 70) {
    return {
      grade: 'Khá',
      message: 'Bạn cần ôn tập thêm một số nội dung.',
      color: 'text-yellow-400'
    };
  } else if (score >= 50) {
    return {
      grade: 'Trung bình',
      message: 'Hãy đọc lại nội dung bài học để hiểu sâu hơn.',
      color: 'text-orange-400'
    };
  } else {
    return {
      grade: 'Cần cố gắng',
      message: 'Bạn cần học lại toàn bộ nội dung bài học.',
      color: 'text-red-400'
    };
  }
};

// Lấy giải thích cho câu hỏi
export const getExplanation = (questionId: number): string => {
  const question = quizQuestions.find(q => q.id === questionId);
  return question?.explanation || 'Không có giải thích.';
};

