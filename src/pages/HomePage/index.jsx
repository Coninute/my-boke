import React, { useRef } from 'react'; // 只保留需要的 hooks
import styles from './index.module.css';
import HeroSection from './components/HeroSection'; // 导入 HeroSection
import FeaturedContent from './components/FeaturedContent'; // 导入新加的特色内容组件
import ProjectSection from './components/ProjectSection'; // 导入项目产品组件
import BlogSection from './components/BlogSection'; // 导入博客文章组件
import NotesSection from './components/NotesSection'; // 导入随笔随记组件
import VantaBackground from '../../components/VantaBackground'; // 导入新的背景组件
import ScrollToTopButton from './components/ScrollToTopButton'; // 导入返回顶部按钮


function HomePage() {
  const homePageRef = useRef(null); // 主滚动容器的引用

  return (
    <div ref={homePageRef} className={styles.homePage}>
      <VantaBackground />
      <div className={styles.scrollBox}>
        <HeroSection />
        <FeaturedContent />
        <ProjectSection />
        <BlogSection />
        <NotesSection />
      </div>
      <ScrollToTopButton />
    </div>

  );
}

export default HomePage;
