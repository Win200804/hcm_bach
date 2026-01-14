// ============================================
// Component QuoteCard - Card hiển thị trích dẫn
// ============================================

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

// Props interface
interface QuoteCardProps {
  quote: string;
  author?: string;
  source?: string;
  variant?: 'default' | 'featured' | 'compact';
}

export default function QuoteCard({
  quote,
  author = 'Hồ Chí Minh',
  source,
  variant = 'default'
}: QuoteCardProps) {
  // Variants cho animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  // Style theo variant
  if (variant === 'featured') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-vn-red via-vn-red-dark to-vn-dark 
                   rounded-2xl p-8 md:p-12 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-vn-yellow rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-vn-gold rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Star decorations */}
        <Star 
          className="absolute top-6 left-6 text-vn-yellow/30" 
          size={32} 
          fill="currentColor" 
        />
        <Star 
          className="absolute bottom-6 right-6 text-vn-yellow/30" 
          size={24} 
          fill="currentColor" 
        />

        {/* Quote icon */}
        <Quote className="text-vn-yellow/40 mb-6" size={48} />

        {/* Quote text */}
        <blockquote className="relative z-10">
          <p className="font-display text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed italic mb-6">
            "{quote}"
          </p>
          
          {/* Author */}
          <footer className="flex items-center gap-4">
            <div className="w-12 h-0.5 bg-vn-yellow" />
            <div>
              <cite className="font-semibold text-vn-yellow not-italic text-lg">
                {author}
              </cite>
              {source && (
                <p className="text-white/60 text-sm mt-1">{source}</p>
              )}
            </div>
          </footer>
        </blockquote>
      </motion.div>
    );
  }

  if (variant === 'compact') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-start gap-4 p-4 bg-vn-dark-light rounded-xl border-l-4 border-vn-yellow"
      >
        <Quote className="text-vn-yellow flex-shrink-0 mt-1" size={20} />
        <div>
          <p className="text-vn-cream/90 italic leading-relaxed">"{quote}"</p>
          <p className="text-vn-yellow text-sm mt-2 font-medium">— {author}</p>
        </div>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative bg-vn-dark-light rounded-2xl p-6 md:p-8 
                 border border-vn-red/20 hover:border-vn-yellow/30
                 transition-all duration-300"
    >
      {/* Quote icon */}
      <Quote className="absolute top-4 right-4 text-vn-yellow/20" size={40} />

      {/* Quote text */}
      <blockquote className="relative z-10">
        <p className="font-display text-xl md:text-2xl text-vn-cream leading-relaxed italic mb-4">
          "{quote}"
        </p>
        
        {/* Divider */}
        <div className="w-16 h-0.5 bg-gradient-to-r from-vn-red to-vn-yellow mb-4" />
        
        {/* Author */}
        <footer>
          <cite className="font-semibold text-vn-yellow not-italic">
            {author}
          </cite>
          {source && (
            <p className="text-vn-cream/60 text-sm mt-1">{source}</p>
          )}
        </footer>
      </blockquote>
    </motion.div>
  );
}

// Component QuoteCarousel - Carousel các trích dẫn nổi bật
export function QuoteCarousel() {
  const quotes = [
    {
      quote: "Làm sao cho dân giàu, nước mạnh",
      source: "Về mục tiêu xây dựng CNXH"
    },
    {
      quote: "Sức mạnh đoàn kết toàn dân là lực lượng mạnh nhất trong mọi lực lượng",
      source: "Về động lực phát triển CNXH"
    },
    {
      quote: "Dân biết, dân bàn, dân làm, dân kiểm tra",
      source: "Về phát huy dân chủ"
    }
  ];

  return (
    <div className="space-y-6">
      {quotes.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <QuoteCard 
            quote={item.quote} 
            source={item.source}
            variant={index === 0 ? 'featured' : 'default'}
          />
        </motion.div>
      ))}
    </div>
  );
}

