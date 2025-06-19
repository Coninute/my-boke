import React from 'react';
import styles from '../../index.module.css';

const ResourceCard = ({ resource }) => {
  return (
    <div className={styles.resourceCard}>
      <div className={styles.cardImage}>
        <img src={resource.image} alt={resource.title} />
        <div className={styles.resourceType}>{resource.type}</div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.tags}>
          {resource.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <h3>{resource.title}</h3>
        <p>{resource.description}</p>
        <div className={styles.cardFooter}>
          <div className={styles.userInfo}>
            <div className={styles.avatar}></div>
            <span>推荐于 {resource.date}</span>
          </div>
          <a href="#" className={styles.viewDetails}>
            查看详情 <i className="fa fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
