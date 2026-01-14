// ============================================
// Component QuizProgress - Hiển thị tiến độ làm quiz
// ============================================

import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Circle } from 'lucide-react';
import { QuestionStatus } from '../../types';

// Props interface
interface QuizProgressProps {
  totalQuestions: number;
  currentIndex: number;
  getQuestionStatus: (questionId: number) => QuestionStatus;
  questionIds: number[];
  onGoToQuestion: (index: number) => void;
}

export default function QuizProgress({
  totalQuestions,
  currentIndex,
  getQuestionStatus,
  questionIds,
  onGoToQuestion
}: QuizProgressProps) {
  return (
    <div className="bg-vn-dark-light rounded-xl p-4 border border-vn-red/20">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-vn-cream">Tiến độ</h3>
        <span className="text-sm text-vn-cream/60">
          {questionIds.filter(id => getQuestionStatus(id) !== 'unanswered').length}/{totalQuestions}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-vn-dark rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full bg-gradient-to-r from-vn-red to-vn-yellow"
          initial={{ width: 0 }}
          animate={{
            width: `${(questionIds.filter(id => getQuestionStatus(id) !== 'unanswered').length / totalQuestions) * 100}%`
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Question indicators */}
      <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
        {questionIds.map((questionId, index) => {
          const status = getQuestionStatus(questionId);
          const isCurrent = index === currentIndex;

          return (
            <motion.button
              key={questionId}
              onClick={() => onGoToQuestion(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`
                relative w-full aspect-square rounded-lg flex items-center justify-center
                text-sm font-medium transition-all duration-200
                ${isCurrent 
                  ? 'ring-2 ring-vn-yellow ring-offset-2 ring-offset-vn-dark-light' 
                  : ''
                }
                ${status === 'correct' 
                  ? 'bg-green-400/20 text-green-400' 
                  : status === 'incorrect'
                    ? 'bg-red-400/20 text-red-400'
                    : 'bg-vn-dark text-vn-cream/60 hover:bg-vn-red/10'
                }
              `}
            >
              {status === 'correct' ? (
                <CheckCircle size={16} />
              ) : status === 'incorrect' ? (
                <XCircle size={16} />
              ) : (
                index + 1
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-vn-red/20">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-4 h-4 rounded bg-green-400/20 flex items-center justify-center">
            <CheckCircle size={10} className="text-green-400" />
          </div>
          <span className="text-vn-cream/60">Đúng</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-4 h-4 rounded bg-red-400/20 flex items-center justify-center">
            <XCircle size={10} className="text-red-400" />
          </div>
          <span className="text-vn-cream/60">Sai</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-4 h-4 rounded bg-vn-dark flex items-center justify-center">
            <Circle size={10} className="text-vn-cream/40" />
          </div>
          <span className="text-vn-cream/60">Chưa làm</span>
        </div>
      </div>
    </div>
  );
}

// Component nhỏ gọn hơn cho mobile
export function QuizProgressCompact({
  answered,
  correct,
  total
}: {
  answered: number;
  correct: number;
  total: number;
}) {
  const percentage = Math.round((answered / total) * 100);
  
  return (
    <div className="flex items-center gap-4">
      {/* Progress ring */}
      <div className="relative w-16 h-16">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-vn-dark"
          />
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="url(#quizGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={28 * 2 * Math.PI}
            strokeDashoffset={28 * 2 * Math.PI * (1 - percentage / 100)}
            className="transition-all duration-500"
          />
          <defs>
            <linearGradient id="quizGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DA251D" />
              <stop offset="100%" stopColor="#FFCD00" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-vn-yellow">{percentage}%</span>
        </div>
      </div>

      {/* Stats */}
      <div className="text-sm">
        <div className="flex items-center gap-2 text-green-400">
          <CheckCircle size={14} />
          <span>{correct} đúng</span>
        </div>
        <div className="flex items-center gap-2 text-red-400">
          <XCircle size={14} />
          <span>{answered - correct} sai</span>
        </div>
        <div className="text-vn-cream/60">
          {total - answered} chưa làm
        </div>
      </div>
    </div>
  );
}

