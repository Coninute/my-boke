import React from 'react';
import styles from './LatestArticlesCard.module.css';
import { FaRegNewspaper } from 'react-icons/fa';

/**
 * 最新文章卡片组件
 * @param {Array} articles 文章数组，每项包含 title、date 字段
 */
const LatestArticlesCard = ({
  articles = [
    { title: 'Node.js 性能优化实战指南', date: '2025-06-10' },
    { title: 'Vue3 + TypeScript 项目实战', date: '2025-06-05' },
    { title: 'ECharts 数据可视化技巧分享', date: '2025-05-28' }
  ]
}) => {
  return (
    <div className={styles.card}>
      {/* 卡片标题 */}
      <div className={styles.header}>
        <FaRegNewspaper className={styles.icon} />
        <span className={styles.title}>最新文章</span>
      </div>
      {/* 文章列表 */}
      <ul className={styles.articleList}>
        {articles.map((item, idx) => (
          <li key={idx} className={styles.articleItem}>
            <div className={styles.articleTitle}>{item.title}</div>
            <div className={styles.articleDate}>{item.date}</div>
            {idx !== articles.length - 1 && <div className={styles.divider}></div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestArticlesCard;
