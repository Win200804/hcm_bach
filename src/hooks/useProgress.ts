// ============================================
// Custom hook quản lý tiến độ học tập
// ============================================

import { useState, useEffect, useCallback } from 'react';
import { LearningProgress, QuizResult } from '../types';
import {
  getProgress,
  saveProgress,
  markSectionAsRead,
  getQuizResults,
  calculateCompletionPercentage,
  getHighestQuizScore
} from '../services/storageService';

// Hook chính quản lý tiến độ
export function useProgress() {
  // State lưu tiến độ
  const [progress, setProgress] = useState<LearningProgress>(getProgress);
  // State lưu phần trăm hoàn thành
  const [completionPercentage, setCompletionPercentage] = useState(0);
  // State lưu điểm cao nhất
  const [highestScore, setHighestScore] = useState(0);

  // Cập nhật state khi component mount
  useEffect(() => {
    const currentProgress = getProgress();
    setProgress(currentProgress);
    setCompletionPercentage(calculateCompletionPercentage());
    setHighestScore(getHighestQuizScore());
  }, []);

  // Hàm đánh dấu section đã đọc
  const markAsRead = useCallback((sectionId: string) => {
    markSectionAsRead(sectionId);
    const updatedProgress = getProgress();
    setProgress(updatedProgress);
    setCompletionPercentage(calculateCompletionPercentage());
  }, []);

  // Hàm kiểm tra section đã đọc chưa
  const isSectionRead = useCallback((sectionId: string): boolean => {
    return progress.sectionsRead.includes(sectionId);
  }, [progress.sectionsRead]);

  // Hàm lấy số section đã đọc
  const getReadCount = useCallback((): number => {
    return progress.sectionsRead.length;
  }, [progress.sectionsRead]);

  // Hàm lấy danh sách kết quả quiz
  const getResults = useCallback((): QuizResult[] => {
    return getQuizResults();
  }, []);

  // Hàm refresh tiến độ
  const refreshProgress = useCallback(() => {
    const currentProgress = getProgress();
    setProgress(currentProgress);
    setCompletionPercentage(calculateCompletionPercentage());
    setHighestScore(getHighestQuizScore());
  }, []);

  // Hàm cập nhật tiến độ
  const updateProgress = useCallback((newProgress: Partial<LearningProgress>) => {
    const currentProgress = getProgress();
    const updatedProgress = { ...currentProgress, ...newProgress };
    saveProgress(updatedProgress);
    setProgress(updatedProgress);
  }, []);

  return {
    progress,
    completionPercentage,
    highestScore,
    markAsRead,
    isSectionRead,
    getReadCount,
    getResults,
    refreshProgress,
    updateProgress
  };
}

// Hook đơn giản chỉ lấy completion percentage
export function useCompletionPercentage(): number {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(calculateCompletionPercentage());
  }, []);

  return percentage;
}

