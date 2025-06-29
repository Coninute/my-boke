import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import VantaBackground from '../../components/VantaBackground';
import DarkVantaBackground from '@/components/DarkVantaBackground';
import MainContent from './components/MainContent';
import { projects } from './projectsData';
import Footer from '../../components/Footer';

function ProjectsPage() {
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
    <div className={styles.projectsPage}>
      <div className={styles.vantaBox}>
        {isDark ? <DarkVantaBackground /> : <VantaBackground />}
      </div>
      <div className={styles.scrollBox}>
        <MainContent projects={projects} />
        <Footer />
      </div>
    </div>
  );
}

export default ProjectsPage;
