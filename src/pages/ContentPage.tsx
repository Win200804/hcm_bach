// ============================================
// ContentPage - Trang nội dung chi tiết
// ============================================

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Clock } from 'lucide-react';
import Sidebar from '../components/common/Sidebar';
import ContentSection from '../components/content/ContentSection';
import Timeline from '../components/content/Timeline';
import MindMap from '../components/content/MindMap';
import { getAllSections, getSectionById } from '../services/contentService';
import { useProgress } from '../hooks/useProgress';

// Tab type
type TabType = 'content' | 'timeline' | 'mindmap';

export default function ContentPage() {
  // URL params
  const [searchParams, setSearchParams] = useSearchParams();
  // Lấy danh sách sections
  const sections = getAllSections();
  // State cho section đang active
  const [activeSection, setActiveSection] = useState(
    searchParams.get('section') || sections[0]?.id || ''
  );
  // State cho tab đang active
  const [activeTab, setActiveTab] = useState<TabType>('content');
  // Progress hook
  const { refreshProgress } = useProgress();

  // Sync URL với state
  useEffect(() => {
    const sectionParam = searchParams.get('section');
    if (sectionParam && sectionParam !== activeSection) {
      setActiveSection(sectionParam);
    }
  }, [searchParams, activeSection]);

  // Xử lý chuyển section
  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setSearchParams({ section: sectionId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Lấy section hiện tại
  const currentSection = getSectionById(activeSection);
  const currentIndex = sections.findIndex(s => s.id === activeSection);

  // Navigation functions
  const goToPrevSection = () => {
    if (currentIndex > 0) {
      handleSectionChange(sections[currentIndex - 1].id);
    }
  };

  const goToNextSection = () => {
    if (currentIndex < sections.length - 1) {
      handleSectionChange(sections[currentIndex + 1].id);
    }
  };

  // Tabs config
  const tabs = [
    { id: 'content', label: 'Nội dung', icon: '📖' },
    { id: 'timeline', label: 'Timeline', icon: '🕐' },
    { id: 'mindmap', label: 'Mind Map', icon: '🧠' }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="section-container">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-3xl md:text-4xl font-bold text-vn-cream mb-2">
            Nội dung bài học
          </h1>
          <p className="text-vn-cream/60">
            Tư tưởng Hồ Chí Minh về CNXH và Con đường Quá độ
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg font-medium
                transition-all duration-300 whitespace-nowrap
                ${activeTab === tab.id
                  ? 'bg-vn-yellow text-vn-dark'
                  : 'bg-vn-dark-light text-vn-cream/70 hover:text-vn-cream hover:bg-vn-red/10'
                }
              `}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - chỉ hiện khi tab content */}
          {activeTab === 'content' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-80 flex-shrink-0"
            >
              <Sidebar
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
              />
            </motion.div>
          )}

          {/* Content area */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {activeTab === 'content' && currentSection && (
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Section content */}
                  <ContentSection
                    section={currentSection}
                    onReadComplete={refreshProgress}
                  />

                  {/* Navigation buttons */}
                  <div className="flex items-center justify-between mt-8 pt-8 border-t border-vn-red/20">
                    <button
                      onClick={goToPrevSection}
                      disabled={currentIndex === 0}
                      className={`
                        flex items-center gap-2 px-4 py-3 rounded-lg
                        transition-all duration-300
                        ${currentIndex === 0
                          ? 'opacity-50 cursor-not-allowed text-vn-cream/50'
                          : 'text-vn-cream hover:bg-vn-red/10'
                        }
                      `}
                    >
                      <ChevronLeft size={20} />
                      <span className="hidden sm:inline">Phần trước</span>
                    </button>

                    <div className="text-center text-sm text-vn-cream/60">
                      <span className="text-vn-yellow font-medium">
                        {currentIndex + 1}
                      </span>
                      <span> / {sections.length}</span>
                    </div>

                    <button
                      onClick={goToNextSection}
                      disabled={currentIndex === sections.length - 1}
                      className={`
                        flex items-center gap-2 px-4 py-3 rounded-lg
                        transition-all duration-300
                        ${currentIndex === sections.length - 1
                          ? 'opacity-50 cursor-not-allowed text-vn-cream/50'
                          : 'text-vn-cream hover:bg-vn-red/10'
                        }
                      `}
                    >
                      <span className="hidden sm:inline">Phần tiếp</span>
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </motion.div>
              )}

              {activeTab === 'timeline' && (
                <motion.div
                  key="timeline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-vn-dark-light rounded-2xl p-6 md:p-8 border border-vn-red/20"
                >
                  <div className="flex items-center gap-3 mb-6 text-vn-cream/60">
                    <MapPin size={20} className="text-vn-yellow" />
                    <span>Theo dõi các mốc tư tưởng quan trọng</span>
                  </div>
                  <Timeline />
                </motion.div>
              )}

              {activeTab === 'mindmap' && (
                <motion.div
                  key="mindmap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-vn-dark-light rounded-2xl p-6 md:p-8 border border-vn-red/20"
                >
                  <div className="flex items-center gap-3 mb-6 text-vn-cream/60">
                    <Clock size={20} className="text-vn-yellow" />
                    <span>Trực quan hóa mối quan hệ giữa các khái niệm</span>
                  </div>
                  <MindMap />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

