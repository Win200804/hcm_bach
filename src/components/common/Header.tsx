// ============================================
// Component Header - Thanh navigation chính
// ============================================

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Star, BookOpen, HelpCircle, MessageCircle, Home } from 'lucide-react';

// Interface cho nav item
interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

// Danh sách navigation items
const navItems: NavItem[] = [
  { path: '/', label: 'Trang chủ', icon: <Home size={20} /> },
  { path: '/content', label: 'Nội dung', icon: <BookOpen size={20} /> },
  { path: '/quiz', label: 'Kiểm tra', icon: <HelpCircle size={20} /> },
  { path: '/chat', label: 'AI Chat', icon: <MessageCircle size={20} /> }
];

export default function Header() {
  // State cho mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Lấy location hiện tại
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-vn-dark/95 backdrop-blur-md border-b border-vn-red/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="text-vn-yellow"
            >
              <Star size={32} fill="currentColor" />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="font-display text-lg font-bold text-vn-cream">
                Tư Tưởng HCM
              </h1>
              <p className="text-xs text-vn-yellow/70">
                CNXH & Con Đường Quá Độ
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    relative px-4 py-2 rounded-lg flex items-center gap-2
                    transition-all duration-300 font-medium
                    ${isActive 
                      ? 'text-vn-yellow' 
                      : 'text-vn-cream/70 hover:text-vn-cream hover:bg-vn-red/10'
                    }
                  `}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-vn-yellow"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-vn-cream hover:text-vn-yellow transition-colors"
            aria-label={isMenuOpen ? 'Đóng menu' : 'Mở menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-vn-dark-light border-t border-vn-red/20 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg
                      transition-all duration-300
                      ${isActive
                        ? 'bg-vn-red/20 text-vn-yellow border-l-4 border-vn-yellow'
                        : 'text-vn-cream/70 hover:bg-vn-red/10 hover:text-vn-cream'
                      }
                    `}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

