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
import Footer from '../../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <div className={styles.vantaBackground}>
        <VantaBackground />
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
