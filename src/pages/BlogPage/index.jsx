import React from 'react';
import styles from './index.module.css';
import VantaBackground from '../../components/VantaBackground'; // 导入新的背景组件

function BlogPage() {
  return (
    <div className={styles.container}>
      <VantaBackground />
      <h1>个人博客</h1>
      <p>这里是我的博客文章。</p>
    </div>
  );
}

export default BlogPage;
