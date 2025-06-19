import React from 'react';
import styles from './index.module.css';
import InfoCard from '../InfoCard';

const statsData = [
  { value: '28', label: '文章总数' },
  { value: '12', label: '分类数目' },
  { value: '5.2k', label: '总阅读量' },
  { value: '156', label: '评论数量' },
];

/**
 * 博客统计项
 * @param {{value: string, label: string}} props
 */
const StatItem = ({ value, label }) => (
  <div className={styles.statItem}>
    <div className={styles.statValue}>{value}</div>
    <div className={styles.statLabel}>{label}</div>
  </div>
);

/**
 * 博客统计卡片
 */
const StatsCard = () => (
  <InfoCard icon="fa-bar-chart" title="博客统计">
    <div className={styles.statsGrid}>
      {statsData.map(stat => (
        <StatItem key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </div>
  </InfoCard>
);

export default StatsCard;
