import React from 'react';
import styles from './index.module.css';
import VantaBackground from '../../components/VantaBackground'; // 导入新的背景组件

function ProjectsPage() {
  return (
    <div className={styles.container}>
      <VantaBackground />
      <h1>个人项目</h1>
      <p>这里展示我的个人项目。</p>
    </div>
  );
}

export default ProjectsPage;
