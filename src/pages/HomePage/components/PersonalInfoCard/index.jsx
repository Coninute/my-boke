import React from 'react';
import styles from './index.module.css';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const PersonalInfoCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.profileHeader}>
        <img src="/logo.png" alt="QYN" className={styles.avatar} />
        <div className={styles.profileInfo}>
          <h3 className={styles.name}>QYN</h3>
          <p className={styles.title}>全栈开发者 | 设计师</p>
        </div>
      </div>
      <p className={styles.bio}>
        热爱技术与设计的自由开发者，专注于前端架构、UI/UX设计与AI应用
      </p>
      <div className={styles.socialLinks}>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
        <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
        <a href="mailto:your-email@example.com"><Mail size={20} /></a>
      </div>
    </div>
  );
};

export default PersonalInfoCard;
