// ============================================
// Custom hook quản lý Quiz
// ============================================

import { useState, useCallback, useMemo } from 'react';
import { QuizQuestion, QuizResult, QuestionStatus } from '../types';
import {
  getAllQuestions,
  getShuffledQuestions,
  checkAnswer,
  calculateScore,
  evaluateResult
} from '../services/quizService';

// Interface cho state quiz
interface QuizState {
  questions: QuizQuestion[];
  currentIndex: number;
  answers: Map<number, number>;
  showResult: boolean;
  result: QuizResult | null;
  showExplanation: boolean;
}

// Hook chính quản lý Quiz
export function useQuiz(shuffled: boolean = false) {
  // Khởi tạo state
  const [state, setState] = useState<QuizState>(() => ({
    questions: shuffled ? getShuffledQuestions() : getAllQuestions(),
    currentIndex: 0,
    answers: new Map(),
    showResult: false,
    result: null,
    showExplanation: false
  }));

  // Câu hỏi hiện tại
  const currentQuestion = useMemo(
    () => state.questions[state.currentIndex],
    [state.questions, state.currentIndex]
  );

  // Tổng số câu hỏi
  const totalQuestions = state.questions.length;

  // Số câu đã trả lời
  const answeredCount = state.answers.size;

  // Kiểm tra đã hoàn thành chưa
  const isCompleted = answeredCount === totalQuestions;

  // Lấy đáp án đã chọn cho câu hiện tại
  const selectedAnswer = state.answers.get(currentQuestion?.id ?? 0);

  // Kiểm tra câu hiện tại đã trả lời chưa
  const isCurrentAnswered = selectedAnswer !== undefined;

  // Chọn đáp án (không hiển thị explanation ngay)
  const selectAnswer = useCallback((answerIndex: number) => {
    setState(prev => {
      const newAnswers = new Map(prev.answers);
      newAnswers.set(currentQuestion.id, answerIndex);
      return {
        ...prev,
        answers: newAnswers,
        showExplanation: false // Không hiển thị explanation cho đến khi nộp bài
      };
    });
  }, [currentQuestion?.id]);

  // Chuyển câu tiếp theo
  const nextQuestion = useCallback(() => {
    setState(prev => {
      if (prev.currentIndex < prev.questions.length - 1) {
        return {
          ...prev,
          currentIndex: prev.currentIndex + 1,
          showExplanation: false
        };
      }
      return prev;
    });
  }, []);

  // Quay lại câu trước
  const prevQuestion = useCallback(() => {
    setState(prev => {
      if (prev.currentIndex > 0) {
        return {
          ...prev,
          currentIndex: prev.currentIndex - 1,
          showExplanation: prev.answers.has(prev.questions[prev.currentIndex - 1].id)
        };
      }
      return prev;
    });
  }, []);

  // Nhảy đến câu hỏi cụ thể
  const goToQuestion = useCallback((index: number) => {
    setState(prev => {
      if (index >= 0 && index < prev.questions.length) {
        return {
          ...prev,
          currentIndex: index,
          showExplanation: prev.answers.has(prev.questions[index].id)
        };
      }
      return prev;
    });
  }, []);

  // Nộp bài
  const submitQuiz = useCallback(() => {
    const result = calculateScore(state.questions, state.answers);
    setState(prev => ({
      ...prev,
      showResult: true,
      result
    }));
  }, [state.questions, state.answers]);

  // Reset quiz
  const resetQuiz = useCallback(() => {
    setState({
      questions: shuffled ? getShuffledQuestions() : getAllQuestions(),
      currentIndex: 0,
      answers: new Map(),
      showResult: false,
      result: null,
      showExplanation: false
    });
  }, [shuffled]);

  // Lấy trạng thái câu hỏi (chỉ cho biết đã trả lời hay chưa, không tiết lộ đúng/sai)
  const getQuestionStatus = useCallback((questionId: number): QuestionStatus => {
    const answer = state.answers.get(questionId);
    if (answer === undefined) return 'unanswered';
    
    // Nếu đã nộp bài thì mới hiển thị đúng/sai
    if (state.showResult) {
      const question = state.questions.find(q => q.id === questionId);
      if (!question) return 'unanswered';
      return checkAnswer(question, answer) ? 'correct' : 'incorrect';
    }
    
    // Chưa nộp bài thì chỉ hiển thị là đã chọn (dùng 'correct' làm trạng thái đã chọn)
    return 'correct'; // Sử dụng như trạng thái "answered"
  }, [state.answers, state.questions, state.showResult]);

  // Đánh giá kết quả
  const evaluation = useMemo(() => {
    if (!state.result) return null;
    return evaluateResult(state.result.score);
  }, [state.result]);

  return {
    // State
    questions: state.questions,
    currentQuestion,
    currentIndex: state.currentIndex,
    totalQuestions,
    answeredCount,
    isCompleted,
    selectedAnswer,
    isCurrentAnswered,
    showResult: state.showResult,
    showExplanation: state.showExplanation,
    result: state.result,
    evaluation,
    
    // Actions
    selectAnswer,
    nextQuestion,
    prevQuestion,
    goToQuestion,
    submitQuiz,
    resetQuiz,
    getQuestionStatus
  };
}

