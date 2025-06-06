import React from 'react';
import styles from './index.module.css';

const QuickLinkCard = ({ icon, title, link }) => {
  const isExternalLink = link && (link.startsWith('http://') || link.startsWith('https://'));

  const cardContent = (
    <>
      {icon && <img src={icon} alt={`${title} icon`} className={styles.icon} />}
      <span className={styles.title}>{title}</span>
    </>
  );

  if (isExternalLink) {
    return (
      <a href={link} className={styles.card} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }
  // For internal links, you might use React Router's Link component in a real app
  // For now, using <a> for simplicity, assuming appropriate routing setup elsewhere
  return (
    <a href={link} className={styles.card}>
      {cardContent}
    </a>
  );
};

export default QuickLinkCard;
