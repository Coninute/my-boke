import React from 'react';
import InfoCard from '../InfoCard';
import styles from '../BioCard/index.module.css'; // Reusing styles from BioCard

/**
 * 博客目的卡片
 */
const BlogPurposeCard = () => (
  <InfoCard icon="fa-pencil" title="博客的目的">
    <p className={styles.paragraph}>
      创建这个博客的初衷，是为了记录自己的学习过程和思考。在技术的道路上，我发现很多知识需要不断复习和总结，而写作是一种很好的学习方法。通过将自己的理解写成文字，可以加深记忆，也能发现自己理解上的不足。
    </p>
    <p className={styles.paragraph}>
      同时，我也希望这个博客能成为一个分享和交流的平台。互联网上有很多优秀的资源和教程，但每个人的学习路径和理解方式都不尽相同。我希望通过分享自己的经验和见解，能帮助到有需要的人，也能从读者的反馈中获得启发和成长。
    </p>
    <p className={styles.paragraph}>
      最后，我希望这个博客能成为我与世界连接的桥梁。通过文字，我可以结识更多志同道合的朋友，一起探讨技术，分享生活。这对我来说，是一种莫大的荣幸和快乐。
    </p>
  </InfoCard>
);

export default BlogPurposeCard;
