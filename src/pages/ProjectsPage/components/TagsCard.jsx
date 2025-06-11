import React from 'react';
import styles from './MainContent.module.css';

const tags = ['koa', 'typescript', 'echarts', 'vue', 'node', '博客搭建'];

function TagsCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.tagsTitle}>标签</h3>
      <div className={styles.tagsContainer}>
        {tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default TagsCard;
