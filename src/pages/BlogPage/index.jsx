import React from 'react';
import MainContent from './components/MainContent';
import { articles } from './blogData';
import styles from './index.module.css';
import VantaBackground from '../../components/VantaBackground';

function BlogPage() {
  return (
    <div className={styles.blogPage}>
      <div className={styles.vantaBox}>
        <VantaBackground />
      </div>
      <div className={styles.scrollBox}>
        <MainContent articles={articles} />
      </div>
    </div>
  );
}

export default BlogPage;

