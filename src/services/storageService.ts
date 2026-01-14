// ============================================
// Service quản lý localStorage
// Lưu trữ tiến độ học tập và điểm quiz
// ============================================

import { LearningProgress, QuizResult } from '../types';

// Key lưu trữ trong localStorage
const STORAGE_KEYS = {
  PROGRESS: 'hcm_learning_progress',
  QUIZ_RESULTS: 'hcm_quiz_results',
  THEME: 'hcm_theme_preference'
};

// Khởi tạo tiến độ mặc định
const defaultProgress: LearningProgress = {
  sectionsRead: [],
  quizScores: [],
  lastVisited: new Date(),
  totalTimeSpent: 0
};

// Lấy tiến độ học tập từ localStorage
export const getProgress = (): LearningProgress => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        ...parsed,
        lastVisited: new Date(parsed.lastVisited)
      };
    }
    return defaultProgress;
  } catch {
    return defaultProgress;
  }
};

// Lưu tiến độ học tập vào localStorage
export const saveProgress = (progress: LearningProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

// Đánh dấu một section đã đọc
export const markSectionAsRead = (sectionId: string): void => {
  const progress = getProgress();
  if (!progress.sectionsRead.includes(sectionId)) {
    progress.sectionsRead.push(sectionId);
    progress.lastVisited = new Date();
    saveProgress(progress);
  }
};

// Lấy danh sách quiz results
export const getQuizResults = (): QuizResult[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.QUIZ_RESULTS);
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed.map((r: QuizResult) => ({
        ...r,
        timestamp: new Date(r.timestamp)
      }));
    }
    return [];
  } catch {
    return [];
  }
};

// Lưu kết quả quiz mới
export const saveQuizResult = (result: QuizResult): void => {
  try {
    const results = getQuizResults();
    results.push(result);
    // Chỉ giữ 10 kết quả gần nhất
    const recentResults = results.slice(-10);
    localStorage.setItem(STORAGE_KEYS.QUIZ_RESULTS, JSON.stringify(recentResults));
    
    // Cập nhật tiến độ
    const progress = getProgress();
    progress.quizScores = recentResults;
    saveProgress(progress);
  } catch (error) {
    console.error('Error saving quiz result:', error);
  }
};

// Tính phần trăm hoàn thành
export const calculateCompletionPercentage = (): number => {
  const progress = getProgress();
  const totalSections = 6; // 6 phần nội dung
  const readPercentage = (progress.sectionsRead.length / totalSections) * 100;
  return Math.round(readPercentage);
};

// Lấy điểm quiz cao nhất
export const getHighestQuizScore = (): number => {
  const results = getQuizResults();
  if (results.length === 0) return 0;
  return Math.max(...results.map(r => r.score));
};

// Xóa tất cả dữ liệu
export const clearAllData = (): void => {
  localStorage.removeItem(STORAGE_KEYS.PROGRESS);
  localStorage.removeItem(STORAGE_KEYS.QUIZ_RESULTS);
};

// Cập nhật thời gian học tập
export const updateTimeSpent = (minutes: number): void => {
  const progress = getProgress();
  progress.totalTimeSpent += minutes;
  progress.lastVisited = new Date();
  saveProgress(progress);
};

