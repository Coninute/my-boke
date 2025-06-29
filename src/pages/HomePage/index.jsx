import React from 'react';
import styles from './index.module.css';
import HeroSection from './components/HeroSection';
import Sidebar from './components/Sidebar';
import FeaturedContent from './components/FeaturedContent';
import ProjectSection from './components/ProjectSection';
import BlogSection from './components/BlogSection';
import NotesSection from './components/NotesSection';
import VantaBackground from '../../components/VantaBackground';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from '../../components/Footer';
import DarkVantaBackground from '@/components/DarkVantaBackground';

import { useEffect, useState } from 'react';

function HomePage() {
  // 读取html标签的data-theme属性，判断当前主题
  const [isDark, setIsDark] = useState(() => document.documentElement.getAttribute('data-theme') === 'dark');

  useEffect(() => {
    // 监听data-theme属性变化，自动切换背景
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.homePage}>
      {/* 根据主题动态切换背景组件 */}
      {isDark ? <DarkVantaBackground /> : <VantaBackground />}
      <div className={styles.topSection}>
        <main className={styles.mainContent}>
          <HeroSection />
          <Sidebar />
        </main>
      </div>
      <div className={styles.otherContent}>
        <FeaturedContent />
        <NotesSection />
        <BlogSection />
        <ProjectSection />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default HomePage;
