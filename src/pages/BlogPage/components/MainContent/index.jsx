import React from 'react';
import styles from './MainContent.module.css';
import UserProfileCard from '@/components/BlogComponemts/UserProfileCard';
import TagsCard from '@/components/BlogComponemts/TagsCard';
import ArticleCard from '../ArticleCard';
import { articles } from '../../blogData'; // 从 blogData.js 导入文章数据

function MainContent({ articles }) {
  return (
    <div className={styles.mainContentContainer}>
      <div className={styles.leftColumn}>
        <UserProfileCard />
        <TagsCard />
      </div>
      <div className={styles.rightColumn}>
        {articles && articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

export default MainContent;
