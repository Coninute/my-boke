import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

/**
 * 个人资料卡片组件
 */
const ProfileCard = () => (
  <div className={styles.card}>
    <div className={styles.grid}>
      {/* 个人照片 */}
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img src="https://picsum.photos/400/400" alt="个人照片" className={styles.profileImage} />
          <div className={styles.iconBadge}>
            <i className="fa fa-coffee" style={{fontSize: '1.25rem'}}></i>
          </div>
        </div>
      </div>
      
      {/* 个人信息 */}
      <div className={styles.infoContainer}>
        <h2 className={styles.greeting}>你好，我是 <span className={styles.name}>小明</span></h2>
        <p className={styles.bio}>
          一名热爱生活的技术爱好者，喜欢探索新事物，分享生活中的美好瞬间。
        </p>
        
        {/* 个人详情 */}
        <div className={styles.detailsGrid}>
          <div className={styles.detailItem}>
            <i className="fa fa-map-marker"></i>
            <span>中国</span>
          </div>
          <div className={styles.detailItem}>
            <i className="fa fa-envelope"></i>
            <a href="mailto:contact@example.com" className={styles.link}>contact@example.com</a>
          </div>
        </div>
        
        {/* 社交媒体链接 */}
        <div className={styles.socialLinks}>
          <a href="#" aria-label="GitHub" className={styles.socialLink}><i className="fa fa-github"></i></a>
          <a href="#" aria-label="Twitter" className={styles.socialLink}><i className="fa fa-twitter"></i></a>
          <a href="#" aria-label="Weibo" className={styles.socialLink}><i className="fa fa-weibo"></i></a>
        </div>
        
        {/* 联系按钮 */}
        <div className={styles.contactButtonWrapper}>
          <Link to="/contact" className={styles.contactButton}>
            <i className="fa fa-paper-plane"></i>
            <span>联系我</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileCard;
