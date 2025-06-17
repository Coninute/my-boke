import React from 'react';
import styles from '../MainContent.module.css';

function WeatherCard() {
  return (
    <div className={`${styles.card} ${styles.weatherCard}`}>
      <div className={styles.weatherInfo}>
        <span className={styles.temperature}>20°</span>
        <div className={styles.dateLocation}>
          <span>03-17 周五</span>
          <span>20°/22° 晴</span>
        </div>
      </div>
      <div className={styles.weatherExtra}>
        <img src="/logo.png" alt="weather icon" className={styles.weatherIcon} />
        <div className={styles.weatherLocation}>
          <span>深圳市</span>
          <span>明天就是周末啦</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
