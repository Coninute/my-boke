import React from 'react';
import styles from './MainContent.module.css';

function WeatherCard() {
  return (
    <div className={`${styles.card} ${styles.weatherCard}`}>
      <div className={styles.weatherInfo}>
        <div className={styles.temperature}>20°</div>
        <div className={styles.dateLocation}>
          <span>03-17 周五</span>
          <span>20°/22° 晴</span>
        </div>
      </div>
      <div className={styles.weatherExtra}>
        <img src="/logo.png" alt="Weather icon" className={styles.weatherIcon} />
        <div className={styles.weatherLocation}>
          <strong>深圳市</strong>
          <span>明天就周末啦</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
