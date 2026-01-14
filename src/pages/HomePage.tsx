// ============================================
// HomePage - Trang chủ
// ============================================

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, BookOpen, HelpCircle, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { ProgressRing } from '../components/common/ProgressBar';
import { getAllSections } from '../services/contentService';

export default function HomePage() {
  // Lấy progress
  const { completionPercentage, highestScore, isSectionRead } = useProgress();
  // Lấy danh sách sections
  const sections = getAllSections();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-vn-dark/50 to-vn-dark" />
        
        {/* Animated stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.3 }}
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity
              }}
              className="absolute text-vn-yellow"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`
              }}
            >
              <Star size={24 + i * 8} fill="currentColor" />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          {/* Main star */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Star 
                size={80} 
                className="text-vn-yellow drop-shadow-[0_0_30px_rgba(255,205,0,0.5)]" 
                fill="currentColor" 
              />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
          >
            Tư Tưởng
            <span className="block gradient-text">Hồ Chí Minh</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-vn-cream/80 mb-4"
          >
            Về Chủ Nghĩa Xã Hội và Con Đường Quá Độ tại Việt Nam
          </motion.p>

          {/* Quote */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-vn-yellow italic mb-8"
          >
            "Làm sao cho dân giàu, nước mạnh"
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/content" className="btn-primary flex items-center justify-center gap-2">
              <BookOpen size={20} />
              <span>Bắt đầu học</span>
            </Link>
            <Link to="/quiz" className="btn-secondary flex items-center justify-center gap-2">
              <HelpCircle size={20} />
              <span>Làm bài kiểm tra</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-vn-yellow/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-vn-yellow rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Progress Section */}
      <section className="py-16 bg-vn-dark-light">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Reading progress */}
            <div className="card text-center">
              <ProgressRing value={completionPercentage} size={100} />
              <h3 className="font-semibold text-vn-cream mt-4 mb-1">Tiến độ đọc</h3>
              <p className="text-sm text-vn-cream/60">
                {sections.filter(s => isSectionRead(s.id)).length}/{sections.length} phần đã đọc
              </p>
            </div>

            {/* Quiz score */}
            <div className="card text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-vn-red to-vn-red-dark flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{highestScore}%</span>
              </div>
              <h3 className="font-semibold text-vn-cream mt-4 mb-1">Điểm cao nhất</h3>
              <p className="text-sm text-vn-cream/60">Bài kiểm tra 25 câu</p>
            </div>

            {/* Quick actions */}
            <div className="card">
              <h3 className="font-semibold text-vn-yellow mb-4">Truy cập nhanh</h3>
              <div className="space-y-3">
                <Link 
                  to="/content" 
                  className="flex items-center gap-3 p-3 rounded-lg bg-vn-dark hover:bg-vn-red/10 transition-colors"
                >
                  <BookOpen size={20} className="text-vn-yellow" />
                  <span className="text-vn-cream/80">Nội dung bài học</span>
                  <ArrowRight size={16} className="text-vn-cream/40 ml-auto" />
                </Link>
                <Link 
                  to="/quiz" 
                  className="flex items-center gap-3 p-3 rounded-lg bg-vn-dark hover:bg-vn-red/10 transition-colors"
                >
                  <HelpCircle size={20} className="text-vn-yellow" />
                  <span className="text-vn-cream/80">Kiểm tra kiến thức</span>
                  <ArrowRight size={16} className="text-vn-cream/40 ml-auto" />
                </Link>
                <Link 
                  to="/chat" 
                  className="flex items-center gap-3 p-3 rounded-lg bg-vn-dark hover:bg-vn-red/10 transition-colors"
                >
                  <MessageCircle size={20} className="text-vn-yellow" />
                  <span className="text-vn-cream/80">Hỏi đáp AI</span>
                  <ArrowRight size={16} className="text-vn-cream/40 ml-auto" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Overview */}
      <section className="py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-vn-cream mb-4">
              Nội dung bài học
            </h2>
            <p className="text-vn-cream/60 max-w-2xl mx-auto">
              6 phần nội dung chính về Tư tưởng Hồ Chí Minh về Chủ nghĩa Xã hội
              và Con đường Quá độ tại Việt Nam
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => {
              const isRead = isSectionRead(section.id);
              
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={`/content?section=${section.id}`}
                    className="card block h-full group hover:border-vn-yellow/40"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{section.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-display text-lg font-semibold text-vn-cream group-hover:text-vn-yellow transition-colors line-clamp-2">
                            {section.title}
                          </h3>
                          {isRead && (
                            <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                          )}
                        </div>
                        {section.subtitle && (
                          <p className="text-sm text-vn-cream/60 line-clamp-2">
                            {section.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-vn-red/20 flex items-center justify-between">
                      <span className="text-sm text-vn-cream/50">
                        {section.content.length} mục nội dung
                      </span>
                      <ArrowRight 
                        size={16} 
                        className="text-vn-yellow opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" 
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

