import React from 'react';
import styles from './index.module.css';
import VantaBackground from '../../components/VantaBackground'; // 导入新的背景组件

function ContactPage() {
  return (
    <div className={styles.container}>
      <VantaBackground />
      <h1>联系博主</h1>
      <p>通过以下方式联系我。</p>
    </div>
  );
}

export default ContactPage;
