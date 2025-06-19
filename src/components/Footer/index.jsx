import React from 'react';
import styles from './index.module.css';

/**
 * 通用页脚组件
 */
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} 你的名字. All Rights Reserved.</p>
        <p>由 React 和 Vite 强力驱动</p>
      </div>
    </footer>
  );
};

export default Footer;
