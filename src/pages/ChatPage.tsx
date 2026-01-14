// ============================================
// ChatPage - Trang AI Chat (Placeholder)
// ============================================

import { motion } from 'framer-motion';
import { Sparkles, BookOpen, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ChatBox from '../components/chat/ChatBox';

export default function ChatPage() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="section-container">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 text-vn-yellow mb-4">
            <Sparkles size={24} />
            <span className="text-sm font-medium uppercase tracking-wide">Tính năng mới</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-vn-cream mb-2">
            Trợ lý AI Tư Tưởng HCM
          </h1>
          <p className="text-vn-cream/60 max-w-xl mx-auto">
            Đặt câu hỏi và nhận câu trả lời về Tư tưởng Hồ Chí Minh về CNXH
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chat box - main */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <ChatBox />
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Suggestions */}
            <div className="bg-vn-dark-light rounded-xl p-6 border border-vn-red/20">
              <h3 className="font-semibold text-vn-yellow mb-4">Gợi ý câu hỏi</h3>
              <div className="space-y-2">
                {[
                  'CNXH là gì theo Hồ Chí Minh?',
                  '4 đặc trưng của xã hội XHCN?',
                  'Thời kỳ quá độ có gì đặc biệt?',
                  'Mối quan hệ ĐLDT - CNXH?'
                ].map((suggestion, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-3 rounded-lg bg-vn-dark text-vn-cream/70 
                             hover:text-vn-cream hover:bg-vn-red/10 transition-colors text-sm"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="bg-vn-dark-light rounded-xl p-6 border border-vn-red/20">
              <h3 className="font-semibold text-vn-yellow mb-4">Tài nguyên học tập</h3>
              <div className="space-y-3">
                <Link
                  to="/content"
                  className="flex items-center gap-3 p-3 rounded-lg bg-vn-dark 
                           hover:bg-vn-red/10 transition-colors"
                >
                  <BookOpen size={20} className="text-vn-yellow" />
                  <div>
                    <div className="text-vn-cream text-sm font-medium">Nội dung bài học</div>
                    <div className="text-vn-cream/50 text-xs">6 phần nội dung chi tiết</div>
                  </div>
                </Link>
                <Link
                  to="/quiz"
                  className="flex items-center gap-3 p-3 rounded-lg bg-vn-dark 
                           hover:bg-vn-red/10 transition-colors"
                >
                  <HelpCircle size={20} className="text-vn-yellow" />
                  <div>
                    <div className="text-vn-cream text-sm font-medium">Kiểm tra kiến thức</div>
                    <div className="text-vn-cream/50 text-xs">25 câu hỏi trắc nghiệm</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Info */}
            <div className="bg-gradient-to-br from-vn-red/20 to-transparent rounded-xl p-6 border border-vn-red/20">
              <h3 className="font-semibold text-vn-yellow mb-2">Lưu ý</h3>
              <p className="text-sm text-vn-cream/70 leading-relaxed">
                AI Chat đang trong giai đoạn phát triển. Các câu trả lời hiện tại 
                là placeholder và sẽ được cải thiện trong các phiên bản tiếp theo.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

