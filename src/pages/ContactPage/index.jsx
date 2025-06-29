import React from 'react';
import styles from './index.module.css';

// 导入所有组件
import ProfileCard from './components/ProfileCard';
import BioCard from './components/BioCard';
import HobbiesCard from './components/HobbiesCard';
import BlogPurposeCard from './components/BlogPurposeCard';
import ChatCard from './components/ChatCard';
import SkillsCard from './components/SkillsCard';
import ContactCard from './components/ContactCard';
import StatsCard from './components/StatsCard';
import VantaBackground from '../../components/VantaBackground';
import DarkVantaBackground from '@/components/DarkVantaBackground';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';

const ContactPage = () => {
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
    <div>
      <div className={styles.vantaBackground}>
        {isDark ? <DarkVantaBackground /> : <VantaBackground />}
      </div>
      <div className={styles.pageWrapper}>
        <main className={styles.mainContainer}>
          <section>
            <ProfileCard />

            <div className={styles.contentGrid}>
              {/* 左侧内容区 */}
              <div className={styles.leftColumn}>
                <BioCard />
                <HobbiesCard />
                <BlogPurposeCard />
                <ChatCard />
              </div>

              {/* 右侧边栏 */}
              <div className={styles.rightColumn}>
                <SkillsCard />
                <ContactCard />
                <StatsCard />
              </div>
            </div>
          </section>
        </main>
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
