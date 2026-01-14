// ============================================
// Component Footer - Chân trang
// ============================================

import { Star, BookOpen } from 'lucide-react';

export default function Footer() {
  // Năm hiện tại
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vn-dark-light border-t border-vn-red/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Thông tin dự án */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <Star className="text-vn-yellow" size={24} fill="currentColor" />
              <h3 className="font-display text-lg font-bold text-vn-cream">
                Tư Tưởng Hồ Chí Minh
              </h3>
            </div>
            <p className="text-vn-cream/60 text-sm leading-relaxed">
              Trang web học tập về Tư tưởng Hồ Chí Minh 
              về Chủ nghĩa Xã hội và Con đường Quá độ tại Việt Nam.
            </p>
          </div>

          {/* Nội dung chính */}
          <div className="text-center">
            <h4 className="font-semibold text-vn-yellow mb-3 flex items-center justify-center gap-2">
              <BookOpen size={18} />
              Nội dung chính
            </h4>
            <ul className="text-vn-cream/60 text-sm space-y-2">
              <li>Quan niệm tổng quát về CNXH</li>
              <li>Đặc trưng cơ bản của xã hội XHCN</li>
              <li>Mục tiêu và động lực phát triển</li>
              <li>Thời kỳ quá độ tại Việt Nam</li>
              <li>Mối quan hệ ĐLDT - CNXH</li>
              <li>Vận dụng trong đổi mới</li>
            </ul>
          </div>

          {/* Thông tin thêm */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-vn-yellow mb-3">
              Môn học
            </h4>
            <p className="text-vn-cream/60 text-sm mb-2">
              HCM202 - Tư tưởng Hồ Chí Minh
            </p>
            <p className="text-vn-cream/60 text-sm mb-4">
              Sản phẩm sáng tạo - Spring 2026
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-vn-red/20 my-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-vn-cream/50 text-sm">
            © {currentYear} Tư Tưởng Hồ Chí Minh - CNXH. 
            Được xây dựng cho mục đích học tập.
          </p>
        </div>
      </div>
    </footer>
  );
}

