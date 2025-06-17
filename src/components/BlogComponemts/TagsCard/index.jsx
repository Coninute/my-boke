import React from 'react';
import styles from '../MainContent.module.css';

const tags = ['koa', 'typescript', 'echarts', 'vue', 'node', '博客搭建'];

function TagsCard() {
  return (
    <div className={styles.card}>
      <h4 className={styles.cardTitle}>标签</h4>
      <div className={styles.tagsCloud}>
        {tags.map(tag => (
          <span key={tag} className={styles.tagItem}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default TagsCard;
