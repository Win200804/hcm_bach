// ============================================
// Component QuizResult - Hiển thị kết quả quiz
// ============================================

import { motion } from 'framer-motion';
import { Trophy, Star, RefreshCw, Home, CheckCircle, XCircle, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { QuizResult as QuizResultType } from '../../types';
import { ProgressRing } from '../common/ProgressBar';

// Props interface
interface QuizResultProps {
  result: QuizResultType;
  evaluation: {
    grade: string;
    message: string;
    color: string;
  } | null;
  onRetry: () => void;
}

export default function QuizResult({ result, evaluation, onRetry }: QuizResultProps) {
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

  // Confetti effect cho điểm cao
  const showConfetti = result.score >= 80;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-2xl mx-auto"
    >
      {/* Result card */}
      <motion.div
        variants={itemVariants}
        className="bg-vn-dark-light rounded-2xl p-8 md:p-12 border border-vn-red/20 text-center relative overflow-hidden"
      >
        {/* Background decoration */}
        {showConfetti && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  y: -20, 
                  x: Math.random() * 100 + '%',
                  opacity: 1,
                  rotate: 0
                }}
                animate={{ 
                  y: '100vh', 
                  rotate: 360,
                  opacity: 0
                }}
                transition={{ 
                  duration: 3 + Math.random() * 2,
                  delay: Math.random() * 2,
                  repeat: Infinity
                }}
                className="absolute w-3 h-3"
                style={{
                  backgroundColor: i % 2 === 0 ? '#FFCD00' : '#DA251D',
                }}
              />
            ))}
          </div>
        )}

        {/* Trophy icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-vn-yellow to-vn-gold mb-6"
        >
          <Trophy className="text-vn-dark" size={48} />
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="font-display text-3xl md:text-4xl font-bold text-vn-cream mb-2"
        >
          Hoàn thành bài kiểm tra!
        </motion.h2>

        {/* Grade */}
        {evaluation && (
          <motion.p
            variants={itemVariants}
            className={`text-2xl font-bold mb-6 ${evaluation.color}`}
          >
            {evaluation.grade}
          </motion.p>
        )}

        {/* Score ring */}
        <motion.div variants={itemVariants} className="mb-8">
          <ProgressRing value={result.score} size={160} strokeWidth={12} />
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          {/* Total questions */}
          <div className="bg-vn-dark rounded-xl p-4">
            <Target className="mx-auto text-vn-yellow mb-2" size={24} />
            <p className="text-2xl font-bold text-vn-cream">{result.totalQuestions}</p>
            <p className="text-xs text-vn-cream/60">Tổng câu</p>
          </div>

          {/* Correct answers */}
          <div className="bg-vn-dark rounded-xl p-4">
            <CheckCircle className="mx-auto text-green-400 mb-2" size={24} />
            <p className="text-2xl font-bold text-green-400">{result.correctAnswers}</p>
            <p className="text-xs text-vn-cream/60">Đúng</p>
          </div>

          {/* Wrong answers */}
          <div className="bg-vn-dark rounded-xl p-4">
            <XCircle className="mx-auto text-red-400 mb-2" size={24} />
            <p className="text-2xl font-bold text-red-400">{result.wrongAnswers}</p>
            <p className="text-xs text-vn-cream/60">Sai</p>
          </div>
        </motion.div>

        {/* Message */}
        {evaluation && (
          <motion.p
            variants={itemVariants}
            className="text-vn-cream/80 mb-8 text-lg"
          >
            {evaluation.message}
          </motion.p>
        )}

        {/* Stars rating */}
        <motion.div variants={itemVariants} className="flex justify-center gap-2 mb-8">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.div
              key={star}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5 + star * 0.1 }}
            >
              <Star
                size={32}
                className={
                  result.score >= star * 20
                    ? 'text-vn-yellow fill-vn-yellow'
                    : 'text-vn-cream/20'
                }
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Action buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button
            onClick={onRetry}
            className="btn-primary flex items-center justify-center gap-2"
          >
            <RefreshCw size={20} />
            <span>Làm lại</span>
          </button>

          <Link
            to="/content"
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <Home size={20} />
            <span>Về nội dung</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Tips based on score */}
      <motion.div
        variants={itemVariants}
        className="mt-6 bg-vn-dark-light rounded-xl p-6 border border-vn-red/20"
      >
        <h3 className="font-semibold text-vn-yellow mb-3">
          {result.score >= 80 ? 'Xuất sắc!' : result.score >= 50 ? 'Gợi ý học tập' : 'Cần cải thiện'}
        </h3>
        <ul className="space-y-2 text-sm text-vn-cream/80">
          {result.score < 80 && (
            <>
              <li className="flex items-start gap-2">
                <span className="text-vn-yellow mt-1">•</span>
                <span>Đọc kỹ lại các phần nội dung về những câu bạn trả lời sai</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vn-yellow mt-1">•</span>
                <span>Sử dụng Mind Map và Timeline để nhớ các mốc quan trọng</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vn-yellow mt-1">•</span>
                <span>Thử làm lại bài kiểm tra sau khi ôn tập</span>
              </li>
            </>
          )}
          {result.score >= 80 && (
            <>
              <li className="flex items-start gap-2">
                <span className="text-vn-yellow mt-1">•</span>
                <span>Bạn đã nắm vững kiến thức về tư tưởng Hồ Chí Minh!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-vn-yellow mt-1">•</span>
                <span>Hãy chia sẻ kiến thức với bạn bè và cùng nhau học tập</span>
              </li>
            </>
          )}
        </ul>
      </motion.div>
    </motion.div>
  );
}

