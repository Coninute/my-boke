import React from 'react';
import styles from './index.module.css';
import VantaBackground from '../../components/VantaBackground'; // 导入新的背景组件

function AIQueryPage() {
  return (
    <div className={styles.container}>
      <VantaBackground />
      <h1>AI智问</h1>
      <p>在这里与AI进行智能问答。</p>
    </div>
  );
}

export default AIQueryPage;
