import React from 'react';
import styles from './MainContent.module.css';
import { FaThumbtack, FaClock } from 'react-icons/fa';

function ArticleCard({ article }) {
  return (
    <div className={`${styles.card} ${styles.articleCard}`}>
      {article.imageUrl && (
        <img src="/logo.png" alt={article.title} className={styles.articleImage} />
      )}
      <div className={styles.articleContent}>
        <h3 className={styles.articleTitle}>{article.title}</h3>
        <div className={styles.articleMeta}>
          {article.pinned && <span className={`${styles.tag} ${styles.pinnedTag}`}><FaThumbtack /> 置顶</span>}
          {article.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <p className={styles.articleSummary}>{article.summary}</p>
        <div className={styles.articleFooter}>
          <FaClock />
          <span>发布于 {article.date}</span>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
