import React from 'react';
import styles from './index.module.css';
import { Rocket, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.title}>
        探索、分享、<br />
        <span className={styles.highlight}>成长</span>
      </h1>
      <p className={styles.subtitle}>
        一个记录学习与思考的技术空间，分享前端开发、人工智能与创意设计的点滴
      </p>
      <div className={styles.buttonGroup}>
        <button className={styles.primaryButton}>
          <Rocket size={18} />
          <span>探索更多</span>
        </button>
        <button className={styles.secondaryButton}>
          <Download size={16} />
          <span>下载简历</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;




