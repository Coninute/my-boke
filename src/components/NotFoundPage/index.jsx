import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>哎呀！页面似乎飞到宇宙深处去了...</p>
        <p className={styles.subMessage}>我们找不到你想要的页面。</p>
        <Link to="/" className={styles.homeLink}>返回首页</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
