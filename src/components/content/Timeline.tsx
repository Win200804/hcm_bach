// ============================================
// Component Timeline - Dòng thời gian tương tác
// ============================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';
import { getTimelineEvents } from '../../services/contentService';

export default function Timeline() {
  // Lấy dữ liệu timeline
  const events = getTimelineEvents();
  // State cho event đang mở rộng
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Toggle expand
  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="relative py-8">
      {/* Title */}
      <h3 className="font-display text-2xl font-bold text-vn-yellow mb-8 text-center">
        Dòng Tư Tưởng Hồ Chí Minh về CNXH
      </h3>

      {/* Timeline container */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-vn-red via-vn-yellow to-vn-red transform md:-translate-x-1/2" />

        {/* Events */}
        {events.map((event, index) => {
          const isExpanded = expandedId === event.id;
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                relative flex items-start mb-8
                ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
              `}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    ${isExpanded 
                      ? 'bg-vn-yellow text-vn-dark' 
                      : 'bg-vn-red text-vn-cream'
                    }
                    border-4 border-vn-dark shadow-lg cursor-pointer
                  `}
                  onClick={() => toggleExpand(event.id)}
                >
                  <Star size={14} fill="currentColor" />
                </motion.div>
              </div>

              {/* Content card */}
              <div 
                className={`
                  ml-16 md:ml-0 md:w-5/12 
                  ${isLeft ? 'md:pr-12' : 'md:pl-12'}
                `}
              >
                <motion.div
                  layout
                  className={`
                    bg-vn-dark-light rounded-xl p-5 border cursor-pointer
                    transition-all duration-300
                    ${isExpanded 
                      ? 'border-vn-yellow shadow-lg shadow-vn-yellow/10' 
                      : 'border-vn-red/20 hover:border-vn-red/40'
                    }
                  `}
                  onClick={() => toggleExpand(event.id)}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="font-display text-lg font-bold text-vn-yellow mb-1">
                        {event.title}
                      </h4>
                      <p className="text-vn-cream/80 text-sm">
                        {event.description}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-vn-yellow flex-shrink-0"
                    >
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </motion.div>
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-vn-red/20">
                          <p className="text-vn-cream/70 text-sm leading-relaxed">
                            {event.detail}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

