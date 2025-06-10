import React from 'react';
import styles from './index.module.css';

function FeaturedContent() {
  return (
    <div className={styles.featuredContainer}>
      {/* Left Column - Stats */}
      <div className={styles.statsColumn}>
        <div className={`${styles.card} ${styles.statsCard}`}>
          <span className={styles.statsNumber}>92303</span>
          <span className={styles.statsLabel}>总访问量</span>
        </div>
        <div className={`${styles.card} ${styles.statsCard}`}>
          <span className={styles.statsNumber}>115</span>
          <span className={styles.statsLabel}>今日访问</span>
        </div>
      </div>

      {/* Center Column - Message Wall Intro */}
      <div className={`${styles.card} ${styles.introCard}`}>
        <h2>一刻时光留言墙, 留下你的足迹</h2>
        <p>当下的心情, 就让它留在当下吧~</p>
        <p className={styles.smallText}>如您对留言墙感兴趣, 欢迎来留言。需要查看设计稿和下图的同学, 点击下方设计稿入口查阅。详细视频请访问B站。</p>
        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton}>去留言~</button>
          <button className={styles.secondaryButton}>访问设计稿</button>
        </div>
      </div>

      {/* Right Column - Message Wall Preview */}
      <div className={`${styles.card} ${styles.previewCard}`}>
        <div className={styles.previewHeader}>留言墙</div>
        <div className={styles.previewBody}>
          等你来
          <br />
          留言...
        </div>
      </div>
    </div>
  );
}

export default FeaturedContent;
