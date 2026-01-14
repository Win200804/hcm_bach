// ============================================
// Component QuizCard - Card hiển thị câu hỏi
// ============================================

import { motion } from 'framer-motion';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import { QuizQuestion } from '../../types';

// Props interface
interface QuizCardProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | undefined;
  showExplanation: boolean;
  onSelectAnswer: (index: number) => void;
}

export default function QuizCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  showExplanation,
  onSelectAnswer
}: QuizCardProps) {
  // Kiểm tra đáp án đúng/sai
  const isCorrect = selectedAnswer === question.correctAnswer;
  const isAnswered = selectedAnswer !== undefined;

  // Labels cho các option (A, B, C, D)
  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-vn-dark-light rounded-2xl p-6 md:p-8 border border-vn-red/20"
    >
      {/* Question header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-vn-red/20 flex items-center justify-center">
          <span className="text-vn-yellow font-bold text-lg">
            {questionNumber}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-vn-cream/60 mb-2">
            <HelpCircle size={14} />
            <span>Câu {questionNumber}/{totalQuestions}</span>
            <span className="mx-2">•</span>
            <span className="text-vn-yellow">{question.section}</span>
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-vn-cream leading-relaxed">
            {question.question}
          </h3>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectOption = index === question.correctAnswer;
          
          // Xác định trạng thái của option
          let optionState: 'default' | 'selected' | 'correct' | 'incorrect' = 'default';
          if (isAnswered) {
            if (isCorrectOption) optionState = 'correct';
            else if (isSelected && !isCorrect) optionState = 'incorrect';
          } else if (isSelected) {
            optionState = 'selected';
          }

          // Style theo trạng thái
          const stateStyles = {
            default: 'border-vn-red/20 hover:border-vn-yellow/50 hover:bg-vn-red/5 cursor-pointer',
            selected: 'border-vn-yellow bg-vn-yellow/10',
            correct: 'border-green-400 bg-green-400/10',
            incorrect: 'border-red-400 bg-red-400/10'
          };

          return (
            <motion.button
              key={index}
              onClick={() => !isAnswered && onSelectAnswer(index)}
              disabled={isAnswered}
              whileHover={!isAnswered ? { scale: 1.01 } : {}}
              whileTap={!isAnswered ? { scale: 0.99 } : {}}
              className={`
                w-full text-left p-4 rounded-xl border-2 
                transition-all duration-300 flex items-start gap-4
                ${stateStyles[optionState]}
                ${isAnswered ? 'cursor-default' : ''}
              `}
            >
              {/* Option label */}
              <div className={`
                flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center
                font-bold text-sm transition-colors duration-300
                ${optionState === 'correct' 
                  ? 'bg-green-400 text-vn-dark' 
                  : optionState === 'incorrect'
                    ? 'bg-red-400 text-white'
                    : optionState === 'selected'
                      ? 'bg-vn-yellow text-vn-dark'
                      : 'bg-vn-dark text-vn-cream/70'
                }
              `}>
                {isAnswered && isCorrectOption ? (
                  <CheckCircle size={20} />
                ) : isAnswered && isSelected && !isCorrect ? (
                  <XCircle size={20} />
                ) : (
                  optionLabels[index]
                )}
              </div>

              {/* Option text */}
              <span className={`
                flex-1 leading-relaxed pt-2
                ${optionState === 'correct' 
                  ? 'text-green-400' 
                  : optionState === 'incorrect'
                    ? 'text-red-400'
                    : 'text-vn-cream/90'
                }
              `}>
                {option}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Explanation */}
      {showExplanation && isAnswered && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="mt-6 overflow-hidden"
        >
          <div className={`
            p-5 rounded-xl border-l-4
            ${isCorrect 
              ? 'bg-green-400/10 border-green-400' 
              : 'bg-red-400/10 border-red-400'
            }
          `}>
            {/* Result header */}
            <div className="flex items-center gap-2 mb-3">
              {isCorrect ? (
                <>
                  <CheckCircle className="text-green-400" size={24} />
                  <span className="font-bold text-green-400">Chính xác!</span>
                </>
              ) : (
                <>
                  <XCircle className="text-red-400" size={24} />
                  <span className="font-bold text-red-400">Chưa đúng!</span>
                </>
              )}
            </div>

            {/* Correct answer indicator (if wrong) */}
            {!isCorrect && (
              <p className="text-vn-cream/80 text-sm mb-3">
                Đáp án đúng: <span className="text-green-400 font-semibold">
                  {optionLabels[question.correctAnswer]}. {question.options[question.correctAnswer]}
                </span>
              </p>
            )}

            {/* Explanation text */}
            <div className="border-t border-vn-cream/10 pt-3 mt-3">
              <h4 className="text-vn-yellow font-semibold mb-2 text-sm uppercase tracking-wide">
                Giải thích
              </h4>
              <p className="text-vn-cream/80 leading-relaxed">
                {question.explanation}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

