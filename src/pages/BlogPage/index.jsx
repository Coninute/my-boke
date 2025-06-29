import React, { useEffect, useState } from 'react';
import MainContent from './components/MainContent';
import { articles } from './blogData';
import styles from './index.module.css';
import VantaBackground from '../../components/VantaBackground';
import DarkVantaBackground from '@/components/DarkVantaBackground';
import Footer from '../../components/Footer';

function BlogPage() {
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
    <div className={styles.blogPage}>
      <div className={styles.vantaBox}>
       {/* 根据主题动态切换背景组件 */}
      {isDark ? <DarkVantaBackground /> : <VantaBackground />}
      </div>
      <div className={styles.scrollBox}>
        <MainContent articles={articles} />
        <Footer />
      </div>
    </div>
  );
}

export default BlogPage;

