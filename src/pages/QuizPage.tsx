// ============================================
// QuizPage - Trang kiểm tra kiến thức
// Timer 25 phút, hiển thị kết quả sau khi nộp bài
// ============================================

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, Send, RotateCcw, BookOpen, Info, Clock, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import QuizResult from '../components/quiz/QuizResult';

// Timer 25 phút = 1500 giây
const QUIZ_TIME_SECONDS = 25 * 60;

// Format time thành MM:SS
const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export default function QuizPage() {
  // State cho quiz đã bắt đầu chưa
  const [isStarted, setIsStarted] = useState(false);
  // State cho thời gian còn lại
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME_SECONDS);
  // State cho việc hết giờ
  const [isTimeUp, setIsTimeUp] = useState(false);
  
  // Quiz hook
  const {
    questions,
    currentQuestion,
    currentIndex,
    totalQuestions,
    answeredCount,
    selectedAnswer,
    showResult,
    result,
    evaluation,
    selectAnswer,
    nextQuestion,
    prevQuestion,
    goToQuestion,
    submitQuiz,
    resetQuiz,
    getQuestionStatus
  } = useQuiz(true);

  // Labels cho options
  const optionLabels = ['A', 'B', 'C', 'D'];

  // Timer effect
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    
    if (isStarted && !showResult && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsTimeUp(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isStarted, showResult, timeLeft]);

  // Auto submit khi hết giờ
  useEffect(() => {
    if (isTimeUp && !showResult) {
      submitQuiz();
    }
  }, [isTimeUp, showResult, submitQuiz]);

  // Bắt đầu quiz
  const handleStart = () => {
    resetQuiz();
    setTimeLeft(QUIZ_TIME_SECONDS);
    setIsTimeUp(false);
    setIsStarted(true);
  };

  // Làm lại quiz
  const handleRetry = () => {
    resetQuiz();
    setTimeLeft(QUIZ_TIME_SECONDS);
    setIsTimeUp(false);
  };

  // Reset về màn hình intro
  const handleBackToIntro = () => {
    setIsStarted(false);
    resetQuiz();
    setTimeLeft(QUIZ_TIME_SECONDS);
    setIsTimeUp(false);
  };

  // Xác định màu timer
  const getTimerColor = () => {
    if (timeLeft <= 60) return 'text-red-400 animate-pulse';
    if (timeLeft <= 300) return 'text-orange-400';
    return 'text-vn-yellow';
  };

  // Intro screen
  if (!isStarted) {
    return (
      <div className="min-h-screen pt-20 pb-12">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Icon */}
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-vn-red to-vn-red-dark flex items-center justify-center">
              <BookOpen size={48} className="text-white" />
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-4xl font-bold text-vn-cream mb-4">
              Kiểm tra kiến thức
            </h1>
            <p className="text-vn-cream/70 mb-8">
              25 câu hỏi trắc nghiệm về Tư tưởng Hồ Chí Minh về CNXH và Con đường Quá độ
            </p>

            {/* Info cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-vn-dark-light rounded-xl p-4 border border-vn-red/20">
                <div className="text-3xl font-bold text-vn-yellow mb-1">25</div>
                <div className="text-sm text-vn-cream/60">Câu hỏi</div>
              </div>
              <div className="bg-vn-dark-light rounded-xl p-4 border border-vn-red/20">
                <div className="text-3xl font-bold text-vn-yellow mb-1 flex items-center justify-center gap-2">
                  <Clock size={24} />
                  25:00
                </div>
                <div className="text-sm text-vn-cream/60">Thời gian</div>
              </div>
              <div className="bg-vn-dark-light rounded-xl p-4 border border-vn-red/20">
                <div className="text-3xl font-bold text-vn-yellow mb-1">6</div>
                <div className="text-sm text-vn-cream/60">Chủ đề</div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-vn-dark-light rounded-xl p-6 border border-vn-red/20 text-left mb-8">
              <h3 className="font-semibold text-vn-yellow mb-3 flex items-center gap-2">
                <Info size={18} />
                Hướng dẫn
              </h3>
              <ul className="space-y-2 text-sm text-vn-cream/80">
                <li className="flex items-start gap-2">
                  <span className="text-vn-yellow mt-1">•</span>
                  <span>Chọn đáp án đúng nhất cho mỗi câu hỏi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vn-yellow mt-1">•</span>
                  <span>Thời gian làm bài: <strong className="text-vn-yellow">25 phút</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vn-yellow mt-1">•</span>
                  <span>Bạn có thể di chuyển qua lại giữa các câu hỏi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vn-yellow mt-1">•</span>
                  <span>Nhấn "Nộp bài" khi hoàn thành hoặc bài sẽ tự động nộp khi hết giờ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vn-yellow mt-1">•</span>
                  <span>Kết quả và giải thích sẽ hiển thị sau khi nộp bài</span>
                </li>
              </ul>
            </div>

            {/* Start button */}
            <button
              onClick={handleStart}
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              <Play size={24} />
              <span>Bắt đầu làm bài</span>
            </button>

            {/* Link to content */}
            <p className="mt-6 text-sm text-vn-cream/60">
              Chưa sẵn sàng?{' '}
              <Link to="/content" className="text-vn-yellow hover:underline">
                Đọc lại nội dung bài học
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  // Result screen - CHỈ hiển thị điểm số, KHÔNG hiển thị đáp án chi tiết
  if (showResult && result) {
    return (
      <div className="min-h-screen pt-20 pb-12">
        <div className="section-container">
          {/* Result summary */}
          <QuizResult
            result={result}
            evaluation={evaluation}
            onRetry={handleRetry}
          />

          {/* Thống kê theo chủ đề */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-2xl mx-auto"
          >
            <h3 className="font-display text-xl font-bold text-vn-cream mb-4 text-center">
              Kết quả theo chủ đề
            </h3>

            <div className="bg-vn-dark-light rounded-xl p-6 border border-vn-red/20">
              {(() => {
                // Tính điểm theo từng section
                const sectionStats = new Map<string, { correct: number; total: number }>();
                
                questions.forEach(q => {
                  const userAnswer = result.answers.find(a => a.questionId === q.id);
                  const stats = sectionStats.get(q.section) || { correct: 0, total: 0 };
                  stats.total++;
                  if (userAnswer?.isCorrect) stats.correct++;
                  sectionStats.set(q.section, stats);
                });

                return Array.from(sectionStats.entries()).map(([section, stats], index) => (
                  <div 
                    key={section}
                    className={`flex items-center justify-between py-3 ${
                      index < sectionStats.size - 1 ? 'border-b border-vn-red/10' : ''
                    }`}
                  >
                    <span className="text-vn-cream/80 text-sm">{section}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-2 bg-vn-dark rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-vn-red to-vn-yellow"
                          style={{ width: `${(stats.correct / stats.total) * 100}%` }}
                        />
                      </div>
                      <span className={`text-sm font-medium ${
                        stats.correct === stats.total 
                          ? 'text-green-400' 
                          : stats.correct >= stats.total / 2 
                            ? 'text-vn-yellow' 
                            : 'text-red-400'
                      }`}>
                        {stats.correct}/{stats.total}
                      </span>
                    </div>
                  </div>
                ));
              })()}
            </div>

            {/* Gợi ý học tập */}
            <div className="mt-6 bg-vn-dark-light rounded-xl p-6 border border-vn-red/20">
              <h4 className="font-semibold text-vn-yellow mb-3">Gợi ý</h4>
              <ul className="space-y-2 text-sm text-vn-cream/70">
                {result.score < 50 && (
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Bạn cần đọc lại toàn bộ nội dung bài học để nắm vững kiến thức cơ bản.</span>
                  </li>
                )}
                {result.score >= 50 && result.score < 80 && (
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Hãy tập trung ôn lại các chủ đề có điểm thấp để cải thiện kết quả.</span>
                  </li>
                )}
                {result.score >= 80 && (
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Tuyệt vời! Bạn đã nắm vững kiến thức. Hãy thử làm lại để đạt điểm tuyệt đối!</span>
                  </li>
                )}
                <li className="flex items-start gap-2">
                  <span className="text-vn-yellow mt-1">•</span>
                  <span>Sử dụng Sơ đồ tư duy và Timeline để ghi nhớ các mốc quan trọng.</span>
                </li>
              </ul>
            </div>

            {/* Action buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={handleRetry}
                className="btn-primary flex items-center gap-2"
              >
                <RotateCcw size={18} />
                <span>Làm lại</span>
              </button>
              <Link to="/content" className="btn-secondary flex items-center gap-2">
                <BookOpen size={18} />
                <span>Ôn tập nội dung</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Quiz screen
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="section-container">
        {/* Header với Timer */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-6 bg-vn-dark-light rounded-xl p-4 border border-vn-red/20"
        >
          <button
            onClick={handleBackToIntro}
            className="text-vn-cream/60 hover:text-vn-cream flex items-center gap-2"
          >
            <RotateCcw size={18} />
            <span className="hidden sm:inline">Thoát</span>
          </button>

          {/* Timer */}
          <div className={`flex items-center gap-2 text-2xl font-bold ${getTimerColor()}`}>
            <Clock size={24} />
            <span>{formatTime(timeLeft)}</span>
            {timeLeft <= 60 && (
              <AlertTriangle size={20} className="animate-bounce" />
            )}
          </div>

          <div className="text-sm text-vn-cream/60">
            {answeredCount}/{totalQuestions} đã trả lời
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Quiz card - main content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {currentQuestion && (
                <motion.div
                  key={currentQuestion.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="bg-vn-dark-light rounded-2xl p-6 md:p-8 border border-vn-red/20"
                >
                  {/* Question header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-vn-red/20 flex items-center justify-center">
                      <span className="text-vn-yellow font-bold text-lg">
                        {currentIndex + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-vn-cream/60 mb-2">
                        <span>Câu {currentIndex + 1}/{totalQuestions}</span>
                        <span className="mx-2">•</span>
                        <span className="text-vn-yellow">{currentQuestion.section}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-vn-cream leading-relaxed">
                        {currentQuestion.question}
                      </h3>
                    </div>
                  </div>

                  {/* Options */}
                  <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => {
                      const isSelected = selectedAnswer === index;

                      return (
                        <motion.button
                          key={index}
                          onClick={() => selectAnswer(index)}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className={`
                            w-full text-left p-4 rounded-xl border-2 
                            transition-all duration-300 flex items-start gap-4
                            ${isSelected
                              ? 'border-vn-yellow bg-vn-yellow/10'
                              : 'border-vn-red/20 hover:border-vn-yellow/50 hover:bg-vn-red/5'
                            }
                          `}
                        >
                          <div className={`
                            flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center
                            font-bold text-sm transition-colors duration-300
                            ${isSelected
                              ? 'bg-vn-yellow text-vn-dark'
                              : 'bg-vn-dark text-vn-cream/70'
                            }
                          `}>
                            {optionLabels[index]}
                          </div>
                          <span className={`
                            flex-1 leading-relaxed pt-2
                            ${isSelected ? 'text-vn-cream' : 'text-vn-cream/90'}
                          `}>
                            {option}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevQuestion}
                disabled={currentIndex === 0}
                className={`
                  flex items-center gap-2 px-4 py-3 rounded-lg
                  transition-all duration-300
                  ${currentIndex === 0
                    ? 'opacity-50 cursor-not-allowed text-vn-cream/50'
                    : 'text-vn-cream hover:bg-vn-red/10'
                  }
                `}
              >
                <ChevronLeft size={20} />
                <span className="hidden sm:inline">Câu trước</span>
              </button>

              {/* Submit button */}
              <button
                onClick={submitQuiz}
                className="btn-primary flex items-center gap-2"
              >
                <Send size={18} />
                <span>Nộp bài ({answeredCount}/{totalQuestions})</span>
              </button>

              <button
                onClick={nextQuestion}
                disabled={currentIndex === totalQuestions - 1}
                className={`
                  flex items-center gap-2 px-4 py-3 rounded-lg
                  transition-all duration-300
                  ${currentIndex === totalQuestions - 1
                    ? 'opacity-50 cursor-not-allowed text-vn-cream/50'
                    : 'text-vn-cream hover:bg-vn-red/10'
                  }
                `}
              >
                <span className="hidden sm:inline">Câu sau</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Progress sidebar */}
          <div className="lg:col-span-1 order-first lg:order-last">
            <div className="bg-vn-dark-light rounded-xl p-4 border border-vn-red/20 sticky top-24">
              <h3 className="font-semibold text-vn-cream mb-4">Danh sách câu hỏi</h3>
              
              {/* Question grid */}
              <div className="grid grid-cols-5 gap-2">
                {questions.map((question, index) => {
                  const status = getQuestionStatus(question.id);
                  const isCurrent = index === currentIndex;

                  return (
                    <button
                      key={question.id}
                      onClick={() => goToQuestion(index)}
                      className={`
                        aspect-square rounded-lg flex items-center justify-center
                        text-sm font-medium transition-all duration-200
                        ${isCurrent 
                          ? 'ring-2 ring-vn-yellow ring-offset-2 ring-offset-vn-dark-light' 
                          : ''
                        }
                        ${status !== 'unanswered'
                          ? 'bg-vn-yellow/20 text-vn-yellow'
                          : 'bg-vn-dark text-vn-cream/60 hover:bg-vn-red/10'
                        }
                      `}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-vn-red/20 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-vn-yellow/20" />
                  <span className="text-vn-cream/60">Đã chọn</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-vn-dark border border-vn-cream/20" />
                  <span className="text-vn-cream/60">Chưa chọn</span>
                </div>
              </div>

              {/* Warning for incomplete */}
              {answeredCount < totalQuestions && (
                <div className="mt-4 p-3 rounded-lg bg-orange-400/10 border border-orange-400/20">
                  <p className="text-xs text-orange-400">
                    Còn {totalQuestions - answeredCount} câu chưa trả lời
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
