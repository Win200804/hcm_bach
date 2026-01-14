// ============================================
// Component ProgressBar - Thanh tiến độ
// ============================================

import { motion } from 'framer-motion';

// Props interface
interface ProgressBarProps {
  value: number;           // Giá trị phần trăm (0-100)
  label?: string;          // Nhãn hiển thị
  showPercentage?: boolean; // Hiển thị số phần trăm
  size?: 'sm' | 'md' | 'lg'; // Kích thước
  variant?: 'default' | 'gradient' | 'striped'; // Kiểu hiển thị
  className?: string;      // Class bổ sung
}

export default function ProgressBar({
  value,
  label,
  showPercentage = true,
  size = 'md',
  variant = 'gradient',
  className = ''
}: ProgressBarProps) {
  // Đảm bảo value trong khoảng 0-100
  const clampedValue = Math.min(100, Math.max(0, value));

  // Xác định height dựa trên size
  const heightClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4'
  };

  // Xác định variant styles
  const variantClasses = {
    default: 'bg-vn-yellow',
    gradient: 'bg-gradient-to-r from-vn-red via-vn-yellow to-vn-gold',
    striped: 'bg-vn-yellow bg-stripes'
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Label và Percentage */}
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className="text-sm font-medium text-vn-cream/80">
              {label}
            </span>
          )}
          {showPercentage && (
            <span className="text-sm font-bold text-vn-yellow">
              {Math.round(clampedValue)}%
            </span>
          )}
        </div>
      )}

      {/* Progress track */}
      <div 
        className={`
          w-full bg-vn-dark-light rounded-full overflow-hidden
          border border-vn-red/20
          ${heightClasses[size]}
        `}
      >
        {/* Progress fill */}
        <motion.div
          className={`
            h-full rounded-full
            ${variantClasses[variant]}
          `}
          initial={{ width: 0 }}
          animate={{ width: `${clampedValue}%` }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
        />
      </div>

      {/* Optional: Milestones */}
      {size === 'lg' && (
        <div className="flex justify-between mt-1 px-1">
          {[0, 25, 50, 75, 100].map((milestone) => (
            <div
              key={milestone}
              className={`
                text-xs transition-colors duration-300
                ${clampedValue >= milestone 
                  ? 'text-vn-yellow' 
                  : 'text-vn-cream/30'
                }
              `}
            >
              {milestone}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Component ProgressRing - Vòng tròn tiến độ
interface ProgressRingProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  showPercentage?: boolean;
}

export function ProgressRing({
  value,
  size = 120,
  strokeWidth = 8,
  showPercentage = true
}: ProgressRingProps) {
  const clampedValue = Math.min(100, Math.max(0, value));
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (clampedValue / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-vn-dark-light"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            strokeDasharray: circumference
          }}
        />
        {/* Gradient definition */}
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DA251D" />
            <stop offset="50%" stopColor="#FFCD00" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Center text */}
      {showPercentage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-vn-yellow">
            {Math.round(clampedValue)}%
          </span>
        </div>
      )}
    </div>
  );
}

