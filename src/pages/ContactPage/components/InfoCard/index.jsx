import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

/**
 * 通用信息卡片组件
 * @param {{icon: string, title: string, children: React.ReactNode}} props
 */
const InfoCard = ({ icon, title, children }) => (
  <div className={styles.card}>
    <h2 className={styles.title}>
      <i className={`fa ${icon} ${styles.icon}`}></i>
      {title}
    </h2>
    {children}
  </div>
);

InfoCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default InfoCard;
