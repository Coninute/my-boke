import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import BlogDetail from '../pages/BlogPage/components/BlogDetail';
import ProjectsPage from '../pages/ProjectsPage';
import ResourceSharingPage from '@/pages/ResourceSharingPage';
import ContactPage from '../pages/ContactPage';
import MessageWallPage from '../pages/MessageWallPage';
import NotFoundPage from '../components/NotFoundPage';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const AnimatedPage = ({ children }) => (
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

function AppRouter() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
        <Route path="/blog" element={<AnimatedPage><BlogPage /></AnimatedPage>} />
        <Route path="/projects" element={<AnimatedPage><ProjectsPage /></AnimatedPage>} />
        <Route path="/resource-sharing" element={<AnimatedPage><ResourceSharingPage /></AnimatedPage>} />
        <Route path="/contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
        <Route path="/message-wall" element={<AnimatedPage><MessageWallPage /></AnimatedPage>} />
        <Route path="/blog/:id" element={<AnimatedPage><BlogDetail /></AnimatedPage>} />
        <Route path="*" element={<AnimatedPage><NotFoundPage /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRouter;
