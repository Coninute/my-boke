import React, { useRef } from 'react'; // 只保留需要的 hooks
import styles from './index.module.css';
import additionalStyles from './AdditionalSections.module.css';
import HeroSection from './components/HeroSection'; // 导入 HeroSection
import VantaBackground from '../../components/VantaBackground'; // 导入新的背景组件


function HomePage() {
  const homePageRef = useRef(null); // 主滚动容器的引用

  return (
    <div ref={homePageRef} className={styles.homePage}>
      <VantaBackground />
      <div className={styles.scrollBox}>
        <HeroSection />
        <div className={additionalStyles.sectionsContainer}>
          {/* 最新文章区域 */}
          <section id="latest-posts" className={additionalStyles.latestPostsSection}>
            <h2>最新动态</h2>
            <div className={additionalStyles.postsGrid}>
              {/* 示例文章卡片 1 */}
              <div className={additionalStyles.postCard}>
                <img src="/assets/placeholder-image-1.jpg" alt="深入理解 React Hooks" className={additionalStyles.postCardImage} />
                <div className={additionalStyles.postCardContent}>
                  <h3>深入理解 React Hooks</h3>
                  <p>探索 React Hooks 的核心概念、使用场景以及如何避免常见陷阱，提升你的组件开发效率，让函数组件也能拥有强大的状态管理和副作用处理能力。</p>
                  <span className={additionalStyles.postDate}>2025年06月08日</span>
                  <a href="/blog/react-hooks-deep-dive" className={additionalStyles.readMoreLink}>阅读全文 &rarr;</a>
                </div>
              </div>
              {/* 示例文章卡片 2 */}
              <div className={additionalStyles.postCard}>
                <img src="/assets/placeholder-image-2.jpg" alt="现代 CSS 布局技巧" className={additionalStyles.postCardImage} />
                <div className={additionalStyles.postCardContent}>
                  <h3>现代 CSS 布局技巧</h3>
                  <p>从 Flexbox 的一维布局到 Grid 的二维布局，全面掌握现代 CSS 提供的强大工具，轻松构建复杂且响应式的用户界面，告别浮动布局的烦恼。</p>
                  <span className={additionalStyles.postDate}>2025年06月05日</span>
                  <a href="/blog/modern-css-layout" className={additionalStyles.readMoreLink}>阅读全文 &rarr;</a>
                </div>
              </div>
              {/* 示例文章卡片 3 */}
              <div className={additionalStyles.postCard}>
                <img src="/assets/placeholder-image-3.jpg" alt="个人项目：智能家居控制台" className={additionalStyles.postCardImage} />
                <div className={additionalStyles.postCardContent}>
                  <h3>个人项目：智能家居控制台</h3>
                  <p>分享我使用 Raspberry Pi 和 Node.js 从零开始构建智能家居控制台的完整过程，包括硬件选型、传感器集成、API 设计以及前端界面实现。</p>
                  <span className={additionalStyles.postDate}>2025年05月28日</span>
                  <a href="/projects/smart-home-console" className={additionalStyles.readMoreLink}>阅读全文 &rarr;</a>
                </div>
              </div>
            </div>
          </section>

          {/* 关于我区域 */}
          <section className={additionalStyles.aboutMeSection}>
            <h2>关于博主</h2>
            <div className={additionalStyles.aboutMeContent}>
              <img src="/assets/profile-placeholder.jpg" alt="博主头像" className={additionalStyles.profileImage} />
              <div className={additionalStyles.aboutMeText}>
                <p>我是一名热衷于探索新技术、乐于分享知识的前端开发者，目前坐标[你的城市/地区]。专注于 React、Node.js、TypeScript 及相关生态。我坚信持续学习和动手实践是技术人成长的唯一途径。</p>
                <p>创建这个博客的初衷是记录自己的成长轨迹，分享在技术探索道路上的所思所想，同时也希望能结识更多志同道合的朋友，共同交流，一起进步。</p>
                {/* <a href="/about" className={styles.aboutLink}>了解更多关于我</a> */}
              </div>
            </div>
          </section>

          {/* 页脚 */}
          <footer className={additionalStyles.footer}>
            <p>&copy; {new Date().getFullYear()} [Q]的博客. 保留所有权利.</p>
            <div className={additionalStyles.socialLinks}>
              <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://x.com/your-twitter" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
            </div>
          </footer>
        </div>
      </div>
    </div>

  );
}

export default HomePage;
