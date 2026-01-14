// ============================================
// Component ChatBox - AI Chat với Gemini
// ============================================

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, AlertCircle, Trash2, CheckCircle } from 'lucide-react';
import { ChatMessage } from '../../types';
import { sendMessageToGemini, resetChatHistory, isApiKeyConfigured } from '../../services/geminiService';
import MessageContent from './MessageContent';

export default function ChatBox() {
  // Kiểm tra API key
  const apiKeyConfigured = isApiKeyConfigured();
  
  // State cho messages
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: apiKeyConfigured 
        ? 'Xin chào! Tôi là trợ lý AI về Tư tưởng Hồ Chí Minh. Hãy đặt câu hỏi về Chủ nghĩa Xã hội và Con đường Quá độ tại Việt Nam, tôi sẽ giúp bạn!'
        : 'Xin chào! Tôi là trợ lý AI về Tư tưởng Hồ Chí Minh. Lưu ý: API key chưa được cấu hình. Vui lòng thêm VITE_GEMINI_API_KEY vào file .env để sử dụng đầy đủ tính năng.',
      timestamp: new Date()
    }
  ]);
  // State cho input
  const [input, setInput] = useState('');
  // State cho loading
  const [isLoading, setIsLoading] = useState(false);
  // Ref cho scroll
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll khi có tin nhắn mới
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Xử lý gửi tin nhắn
  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessageText = input.trim();
    
    // Thêm tin nhắn của user
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: userMessageText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Gọi Gemini API
      const response = await sendMessageToGemini(userMessageText);
      
      // Thêm phản hồi từ AI
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Thêm tin nhắn lỗi
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Xin lỗi, đã xảy ra lỗi khi xử lý yêu cầu của bạn. Vui lòng thử lại.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Xử lý Enter
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Xóa lịch sử chat
  const handleClearChat = () => {
    resetChatHistory();
    setMessages([
      {
        id: Date.now().toString(),
        role: 'assistant',
        content: 'Đã xóa lịch sử chat. Hãy bắt đầu cuộc trò chuyện mới!',
        timestamp: new Date()
      }
    ]);
  };

  return (
    <div className="flex flex-col h-[600px] max-h-[80vh] bg-vn-dark-light rounded-2xl border border-vn-red/20 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-vn-red/20 to-transparent border-b border-vn-red/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-vn-yellow flex items-center justify-center">
            <Bot className="text-vn-dark" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-vn-cream">Trợ lý AI Tư Tưởng HCM</h3>
            <p className="text-xs text-vn-cream/60 flex items-center gap-1">
              {apiKeyConfigured ? (
                <>
                  <CheckCircle size={12} className="text-green-400" />
                  <span>Gemini 2.5 Flash - Sẵn sàng</span>
                </>
              ) : (
                <>
                  <AlertCircle size={12} className="text-yellow-400" />
                  <span>Chưa cấu hình API key</span>
                </>
              )}
            </p>
          </div>
        </div>
        
        {/* Clear chat button */}
        <button
          onClick={handleClearChat}
          className="p-2 rounded-lg text-vn-cream/60 hover:text-vn-cream hover:bg-vn-red/10 transition-colors"
          title="Xóa lịch sử chat"
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* API key notice */}
      {!apiKeyConfigured && (
        <div className="mx-4 mt-4 p-3 bg-vn-yellow/10 rounded-lg border border-vn-yellow/20 flex items-start gap-2">
          <AlertCircle className="text-vn-yellow flex-shrink-0 mt-0.5" size={16} />
          <p className="text-xs text-vn-cream/80">
            Để sử dụng AI Chat, thêm <code className="bg-vn-dark px-1 rounded">VITE_GEMINI_API_KEY=your_api_key</code> vào file <code className="bg-vn-dark px-1 rounded">.env</code> và khởi động lại server.
          </p>
        </div>
      )}

      {/* Powered by badge */}
      <div className="mx-4 mt-2 flex items-center gap-2 text-xs text-vn-cream/40">
        <Sparkles size={12} />
        <span>Powered by Google Gemini 2.5 Flash</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`flex items-start gap-3 ${
                message.role === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Avatar */}
              <div className={`
                flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                ${message.role === 'user' 
                  ? 'bg-vn-red' 
                  : 'bg-vn-yellow'
                }
              `}>
                {message.role === 'user' 
                  ? <User size={16} className="text-white" />
                  : <Bot size={16} className="text-vn-dark" />
                }
              </div>

              {/* Message bubble */}
              <div className={`
                max-w-[80%] p-4 rounded-2xl
                ${message.role === 'user'
                  ? 'bg-vn-red/20 rounded-tr-sm'
                  : 'bg-vn-dark rounded-tl-sm'
                }
              `}>
                <div className="text-sm leading-relaxed">
                  {message.role === 'assistant' ? (
                    <MessageContent content={message.content} />
                  ) : (
                    <span className="text-vn-cream/90">{message.content}</span>
                  )}
                </div>
                <span className="text-xs text-vn-cream/40 mt-2 block">
                  {message.timestamp.toLocaleTimeString('vi-VN', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Loading indicator */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-start gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-vn-yellow flex items-center justify-center">
              <Bot size={16} className="text-vn-dark" />
            </div>
            <div className="bg-vn-dark rounded-2xl rounded-tl-sm p-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ 
                        duration: 0.5, 
                        repeat: Infinity, 
                        delay: i * 0.1 
                      }}
                      className="w-2 h-2 rounded-full bg-vn-yellow"
                    />
                  ))}
                </div>
                <span className="text-xs text-vn-cream/50 ml-2">Đang suy nghĩ...</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-vn-red/20">
        <div className="flex items-end gap-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={apiKeyConfigured 
              ? "Hỏi về Tư tưởng Hồ Chí Minh..." 
              : "Cấu hình API key để bắt đầu chat..."
            }
            disabled={isLoading}
            rows={1}
            className="flex-1 bg-vn-dark rounded-xl px-4 py-3 text-vn-cream 
                     placeholder-vn-cream/40 resize-none
                     border border-vn-red/20 focus:border-vn-yellow/50
                     focus:outline-none transition-colors
                     disabled:opacity-50"
            style={{ minHeight: '48px', maxHeight: '120px' }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="flex-shrink-0 w-12 h-12 rounded-xl bg-vn-yellow 
                     text-vn-dark flex items-center justify-center
                     hover:bg-vn-gold transition-colors
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
