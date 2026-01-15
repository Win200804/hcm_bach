// ============================================
// Component ContentSection - Hiển thị nội dung một phần
// ============================================

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Quote } from 'lucide-react';
import { ContentSection as ContentSectionType } from '../../types';
import { markAsRead, isSectionRead } from '../../services/contentService';

// Props interface
interface ContentSectionProps {
  section: ContentSectionType;
  onReadComplete?: () => void;
}

export default function ContentSection({ section, onReadComplete }: ContentSectionProps) {
  // Kiểm tra section đã đọc chưa
  const isRead = isSectionRead(section.id);

  // Đánh dấu đã đọc khi scroll đến cuối
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(`section-${section.id}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.bottom <= window.innerHeight + 100;
        if (isVisible && !isRead) {
          markAsRead(section.id);
          onReadComplete?.();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [section.id, isRead, onReadComplete]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.article
      id={`section-${section.id}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-vn-dark-light rounded-2xl p-6 md:p-8 border border-vn-red/20"
    >
      {/* Section header */}
      <motion.header variants={itemVariants} className="mb-8">
        <div className="flex items-start gap-4">
          {/* Icon và trạng thái */}
          <div className="flex-shrink-0 mt-1">
            {isRead ? (
              <CheckCircle className="text-green-400" size={28} />
            ) : (
              <Circle className="text-vn-yellow/50" size={28} />
            )}
          </div>

          {/* Title */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{section.icon}</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-vn-yellow leading-tight">
                {section.title}
              </h2>
            </div>
            {section.subtitle && (
              <p className="text-vn-cream/70 text-lg ml-12">
                {section.subtitle}
              </p>
            )}
          </div>
        </div>
      </motion.header>

      {/* Section image - Ảnh minh họa */}
      {section.image && (
        <motion.figure
          variants={itemVariants}
          className="mb-8 overflow-hidden rounded-xl border border-vn-red/30 shadow-lg"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden"
          >
            <img
              src={section.image}
              alt={section.imageCaption || section.title}
              className="w-full h-auto object-cover max-h-[400px]"
              loading="lazy"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-vn-dark/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>
          {section.imageCaption && (
            <figcaption className="bg-vn-dark/80 backdrop-blur-sm px-4 py-3 text-sm text-vn-cream/80 italic text-center border-t border-vn-red/20">
              {section.imageCaption}
            </figcaption>
          )}
        </motion.figure>
      )}

      {/* Section content */}
      <div className="space-y-8 ml-0 md:ml-12">
        {section.content.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="relative"
          >
            {/* Content item heading */}
            <h3 className="font-display text-xl font-semibold text-vn-cream mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-vn-red/20 flex items-center justify-center text-sm text-vn-yellow font-bold">
                {index + 1}
              </span>
              {item.heading}
            </h3>

            {/* Paragraphs */}
            {item.paragraphs.map((paragraph, pIndex) => (
              <p 
                key={pIndex}
                className="text-vn-cream/80 leading-relaxed mb-4 text-justify"
              >
                {paragraph}
              </p>
            ))}

            {/* Bullet points */}
            {item.bulletPoints && item.bulletPoints.length > 0 && (
              <ul className="space-y-3 mb-4">
                {item.bulletPoints.map((point, bIndex) => (
                  <motion.li
                    key={bIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: bIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-vn-cream/80"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-vn-yellow flex-shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>
            )}

            {/* Quote */}
            {item.quote && (
              <motion.blockquote
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-r from-vn-red/10 to-transparent 
                           border-l-4 border-vn-yellow rounded-r-xl p-6 mt-6"
              >
                <Quote className="absolute top-4 right-4 text-vn-yellow/20" size={40} />
                <p className="font-display text-xl text-vn-yellow italic relative z-10">
                  {item.quote}
                </p>
                <p className="text-sm text-vn-cream/60 mt-2">— Hồ Chí Minh</p>
              </motion.blockquote>
            )}
          </motion.div>
        ))}
      </div>

      {/* Read status indicator */}
      {isRead && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 pt-6 border-t border-vn-red/20 flex items-center justify-center gap-2 text-green-400"
        >
          <CheckCircle size={20} />
          <span className="font-medium">Đã hoàn thành phần này</span>
        </motion.div>
      )}
    </motion.article>
  );
}

