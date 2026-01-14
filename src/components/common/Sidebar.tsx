// ============================================
// Component Sidebar - Navigation bên trái cho trang Content
// ============================================

import { motion } from 'framer-motion';
import { CheckCircle, Circle, ChevronRight } from 'lucide-react';
import { getNavigationItems } from '../../services/contentService';

// Props interface
interface SidebarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  // Lấy danh sách navigation items
  const navItems = getNavigationItems();

  return (
    <aside className="w-full lg:w-80 bg-vn-dark-light rounded-xl border border-vn-red/20 p-4 h-fit sticky top-20">
      {/* Header */}
      <div className="mb-4 pb-4 border-b border-vn-red/20">
        <h2 className="font-display text-lg font-bold text-vn-yellow">
          Mục lục
        </h2>
        <p className="text-sm text-vn-cream/60 mt-1">
          {navItems.filter(item => item.isRead).length}/{navItems.length} phần đã đọc
        </p>
      </div>

      {/* Navigation list */}
      <nav className="space-y-2">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`
                w-full text-left p-3 rounded-lg flex items-start gap-3
                transition-all duration-300 group
                ${isActive
                  ? 'bg-vn-red/20 border-l-4 border-vn-yellow'
                  : 'hover:bg-vn-red/10 border-l-4 border-transparent'
                }
              `}
            >
              {/* Icon trạng thái */}
              <div className="mt-0.5 flex-shrink-0">
                {item.isRead ? (
                  <CheckCircle 
                    size={18} 
                    className="text-green-400" 
                  />
                ) : (
                  <Circle 
                    size={18} 
                    className={isActive ? 'text-vn-yellow' : 'text-vn-cream/40'}
                  />
                )}
              </div>

              {/* Nội dung */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span>
                  <span className={`
                    text-sm font-medium leading-tight
                    ${isActive ? 'text-vn-yellow' : 'text-vn-cream/80'}
                    group-hover:text-vn-cream
                  `}>
                    {item.title}
                  </span>
                </div>
              </div>

              {/* Arrow indicator */}
              <ChevronRight 
                size={16} 
                className={`
                  flex-shrink-0 mt-0.5 transition-transform duration-300
                  ${isActive 
                    ? 'text-vn-yellow rotate-90' 
                    : 'text-vn-cream/30 group-hover:text-vn-cream/60'
                  }
                `}
              />
            </motion.button>
          );
        })}
      </nav>

      {/* Progress indicator */}
      <div className="mt-6 pt-4 border-t border-vn-red/20">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-vn-cream/60">Tiến độ</span>
          <span className="text-vn-yellow font-medium">
            {Math.round((navItems.filter(item => item.isRead).length / navItems.length) * 100)}%
          </span>
        </div>
        <div className="h-2 bg-vn-dark rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-vn-red to-vn-yellow"
            initial={{ width: 0 }}
            animate={{ 
              width: `${(navItems.filter(item => item.isRead).length / navItems.length) * 100}%` 
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>
    </aside>
  );
}

