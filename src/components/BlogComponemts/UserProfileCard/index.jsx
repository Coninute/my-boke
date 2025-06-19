import React from 'react';
import styles from './MainContent.module.css';
import { FaGithub, FaBook, FaEnvelope, FaWeibo } from 'react-icons/fa'; // 假设使用react-icons

function UserProfileCard() {
  return (
    <div className={styles.card}>
      <div className={styles.profileHeader}>
        <img src="/logo.png" alt="庆" className={styles.avatar} />
        <div className={styles.profileInfo}>
          <h3 className={styles.profileName}>庆</h3>
          <p className={styles.profileBio}>世界等同于你</p>
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <strong>7</strong>
          <span>文章</span>
        </div>
        <div className={styles.statItem}>
          <strong>6</strong>
          <span>项目</span>
        </div>
        <div className={styles.statItem}>
          <strong>6</strong>
          <span>标签</span>
        </div>
      </div>
      <button className={styles.profileButton}>个人主页</button>
      <div className={styles.socialLinks}>
        <a href="#"><FaGithub /></a>
        <a href="#"><FaBook /></a>
        <a href="#"><FaEnvelope /></a>
        <a href="#"><FaWeibo /></a>
      </div>
    </div>
  );
}

export default UserProfileCard;
