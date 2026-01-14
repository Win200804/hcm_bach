// ============================================
// App.tsx - Root component của ứng dụng
// ============================================

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import ContentPage from './pages/ContentPage';
import QuizPage from './pages/QuizPage';
import ChatPage from './pages/ChatPage';

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.3
};

// Animated page wrapper
function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}

// Layout component
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-vn-dark">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

// Main App component
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route 
              path="/" 
              element={
                <AnimatedPage>
                  <HomePage />
                </AnimatedPage>
              } 
            />
            <Route 
              path="/content" 
              element={
                <AnimatedPage>
                  <ContentPage />
                </AnimatedPage>
              } 
            />
            <Route 
              path="/quiz" 
              element={
                <AnimatedPage>
                  <QuizPage />
                </AnimatedPage>
              } 
            />
            <Route 
              path="/chat" 
              element={
                <AnimatedPage>
                  <ChatPage />
                </AnimatedPage>
              } 
            />
          </Routes>
        </AnimatePresence>
      </Layout>
    </BrowserRouter>
  );
}

