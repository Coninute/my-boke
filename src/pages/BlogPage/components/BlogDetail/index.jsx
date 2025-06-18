import React from 'react';
import styles from './BlogDetail.module.css';
import VantaBackground from '@/components/VantaBackground';
import ProfileCard from '@/components/BlogComponemts/ProfileCard';
import LatestArticlesCard from '@/components/BlogComponemts/LatestArticlesCard';
import TagsCard from '@/components/BlogComponemts/TagsCard';
import ReactMarkdown from 'react-markdown';
import { markdownContent } from './mock-article.js'; // 导入模拟文章内容

function BlogDetail() {
    return (
        <div className={styles.blogDetail}>
            {/* 动态背景 */}
            <div className={styles.vantaBox}>
                <VantaBackground />
            </div>
            {/* 可滚动内容区 */}
            <div className={styles.scrollBox}>
                {/* 左侧边栏 */}
                <div className={styles.left}>
                    <ProfileCard />
                    <LatestArticlesCard />
                    <TagsCard />
                </div>
                {/* 右侧文章区 */}
                <div className={styles.right}>
                    <div className={styles.articleWrapper}>
                        {/* 文章标题 */}
                        <h1 className={styles.articleTitle}>探索 React Hooks：useState 与 useEffect 深度解析</h1>
                        {/* 文章元信息 */}
                        <div className={styles.articleMeta}>
                            <span>作者: 庆</span>
                            <span>日期: 2025-06-18</span>
                            <div className={styles.tags}>
                                <span className={styles.tag}>React</span>
                                <span className={styles.tag}>Hooks</span>
                            </div>
                        </div>
                        {/* 文章内容 (Markdown 渲染) */}
                        <div className={styles.articleContent}>
                            <ReactMarkdown>{markdownContent}</ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;

