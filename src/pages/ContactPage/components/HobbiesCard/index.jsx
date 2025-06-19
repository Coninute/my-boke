import React from 'react';
import InfoCard from '../InfoCard';
import styles from './index.module.css';

const hobbies = [
  { icon: 'fa-code', title: '编程', description: '探索各种编程语言和框架' },
  { icon: 'fa-book', title: '阅读', description: '喜欢各种类型的书籍' },
  { icon: 'fa-camera', title: '摄影', description: '用镜头记录生活中的美好' },
  { icon: 'fa-plane', title: '旅行', description: '探索不同的城市和文化' },
];

const HobbyItem = ({ icon, title, description }) => (
  <div className={styles.hobbyItem}>
    <div className={styles.iconWrapper}>
      <i className={`fa ${icon} ${styles.icon}`}></i>
    </div>
    <div>
      <h3 className={styles.hobbyTitle}>{title}</h3>
      <p className={styles.hobbyDescription}>{description}</p>
    </div>
  </div>
);

/**
 * 兴趣爱好卡片
 */
const HobbiesCard = () => (
  <InfoCard icon="fa-heart" title="兴趣爱好">
    <div className={styles.hobbiesGrid}>
      {hobbies.map(hobby => (
        <HobbyItem key={hobby.title} {...hobby} />
      ))}
    </div>
  </InfoCard>
);

export default HobbiesCard;
