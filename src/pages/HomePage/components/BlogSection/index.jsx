import React from 'react';
import styles from './index.module.css';
import { articles } from '../../../BlogPage/blogData'; // 复用博客数据
import { FaRegComment, FaRegEye } from 'react-icons/fa';

// 只显示最新的4篇文章作为预览
const articlesPreview = articles.slice(0, 4);

function BlogArticleCard({ article }) {
  return (
    <div className={styles.articleCard}>
      <div className={styles.imageContainer}>
        <img src={article.image} alt={article.title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <div>
          <h3 className={styles.articleTitle}>{article.title}</h3>
          <p className={styles.date}>{article.date}</p>
          <p className={styles.summary}>{article.summary}</p>
        </div>
        <div className={styles.footer}>
          <span className={styles.category}>{article.tags.join(' / ')}</span>
          <div className={styles.stats}>
            <span><FaRegComment /> {article.comments || 0}</span>
            <span><FaRegEye /> {article.views || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogSection() {
  return (
    <div className={styles.blogSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>博客文章</h2>
        <p className={styles.subtitle}>我的所思、所想, 像模像样的文章...</p>
      </div>
      <div className={styles.grid}>
        {articlesPreview.map(article => (
          <BlogArticleCard key={article.id} article={article} />
        ))}
      </div>
      <div className={styles.moreButtonContainer}>
        <button className={styles.moreButton}>更多</button>
      </div>
    </div>
  );
}

export default BlogSection;
