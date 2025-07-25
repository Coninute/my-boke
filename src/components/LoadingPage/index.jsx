import React from 'react';
import styles from './index.module.css';

const LoadingPage = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingPage;
