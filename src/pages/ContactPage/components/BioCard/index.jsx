import React from 'react';
import InfoCard from '../InfoCard';
import styles from './index.module.css';

/**
 * 个人简介卡片
 */
const BioCard = () => (
  <InfoCard icon="fa-user-circle" title="个人简介">
    <p className={styles.paragraph}>
      我是一名技术爱好者，热衷于探索各种新技术和创意项目。我相信技术可以改变生活，让世界变得更加美好。
    </p>
    <p className={styles.paragraph}>
      除了技术，我还喜欢阅读、旅行和摄影。我认为生活是丰富多彩的，我们应该尽可能地去体验和感受。
    </p>
    <p className={styles.paragraph}>
      在这个个人空间里，我会分享我的学习心得、项目经验以及生活中的点滴。希望能通过这个平台，结识更多志同道合的朋友。
    </p>
  </InfoCard>
);

export default BioCard;
