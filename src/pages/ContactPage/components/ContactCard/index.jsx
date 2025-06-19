import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

/**
 * 联系方式卡片
 */
const ContactCard = () => (
  <div className={styles.card}>
    <h2 className={styles.title}>
      <i className="fa fa-comments"></i>
      联系我
    </h2>
    <p className={styles.description}>
      想和我交流？对我的分享感兴趣？请随时联系我。
    </p>
    <div className={styles.contactList}>
      <div className={styles.contactItem}>
        <div className={styles.iconWrapper}>
          <i className="fa fa-envelope"></i>
        </div>
        <a href="mailto:contact@example.com" className={styles.link}>contact@example.com</a>
      </div>
      <div className={styles.contactItem}>
        <div className={styles.iconWrapper}>
          <i className="fa fa-weixin"></i>
        </div>
        <span>MyWeChatID</span>
      </div>
    </div>
    <div className={styles.buttonWrapper}>
      <Link to="/contact" className={styles.button}>
        发送消息
      </Link>
    </div>
  </div>
);

export default ContactCard;
