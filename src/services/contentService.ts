// ============================================
// Service xử lý nội dung học tập
// ============================================

import { ContentSection, TimelineEvent, MindMapNode } from '../types';
import { contentSections, timelineEvents, mindMapData } from '../data/contentData';
import { markSectionAsRead, getProgress } from './storageService';

// Lấy tất cả các phần nội dung
export const getAllSections = (): ContentSection[] => {
  return contentSections;
};

// Lấy một phần nội dung theo ID
export const getSectionById = (sectionId: string): ContentSection | undefined => {
  return contentSections.find(section => section.id === sectionId);
};

// Lấy phần nội dung theo index
export const getSectionByIndex = (index: number): ContentSection | undefined => {
  return contentSections[index];
};

// Lấy tổng số phần
export const getTotalSections = (): number => {
  return contentSections.length;
};

// Đánh dấu phần đã đọc
export const markAsRead = (sectionId: string): void => {
  markSectionAsRead(sectionId);
};

// Kiểm tra phần đã đọc chưa
export const isSectionRead = (sectionId: string): boolean => {
  const progress = getProgress();
  return progress.sectionsRead.includes(sectionId);
};

// Lấy danh sách phần đã đọc
export const getReadSections = (): string[] => {
  const progress = getProgress();
  return progress.sectionsRead;
};

// Lấy timeline events
export const getTimelineEvents = (): TimelineEvent[] => {
  return timelineEvents;
};

// Lấy mind map data
export const getMindMapData = (): MindMapNode => {
  return mindMapData;
};

// Tìm kiếm nội dung
export const searchContent = (query: string): ContentSection[] => {
  const lowercaseQuery = query.toLowerCase();
  return contentSections.filter(section => {
    // Tìm trong title
    if (section.title.toLowerCase().includes(lowercaseQuery)) return true;
    // Tìm trong subtitle
    if (section.subtitle?.toLowerCase().includes(lowercaseQuery)) return true;
    // Tìm trong content
    return section.content.some(item => {
      if (item.heading.toLowerCase().includes(lowercaseQuery)) return true;
      if (item.paragraphs.some(p => p.toLowerCase().includes(lowercaseQuery))) return true;
      if (item.bulletPoints?.some(b => b.toLowerCase().includes(lowercaseQuery))) return true;
      return false;
    });
  });
};

// Lấy navigation items cho sidebar
export const getNavigationItems = () => {
  return contentSections.map(section => ({
    id: section.id,
    title: section.title,
    icon: section.icon,
    isRead: isSectionRead(section.id)
  }));
};

