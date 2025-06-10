import React from 'react';
import styles from './index.module.css';

function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>探索、分享、成长</h1>
        <p className={styles.heroSubtitle}>一个记录学习与思考的技术空间</p>
        <button onClick={scrollToContent} className={styles.scrollButton}>
          探索更多
          <span className={styles.arrow}>&darr;</span>
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
