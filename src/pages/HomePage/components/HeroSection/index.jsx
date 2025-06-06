import React from 'react';
import QuickLinkCard from '../QuickLinkCard'; // 调整了导入路径
import styles from './index.module.css';
// 假设图标文件放在 public/icons/ 目录下，或者根据你的项目结构调整
// 例如: import MessageWallIcon from '/icons/message-wall.svg'; 

const HeroSection = () => {
  const quickLinksData = [
    { 
      icon: '/icons/message-wall.svg', // 确保这些图标路径在 public 文件夹下是可访问的
      title: '留言墙',
      link: '/message-wall' 
    },
    { 
      icon: '/icons/tetris.svg', 
      title: '俄罗斯方块',
      link: '/projects/tetris' 
    },
    { 
      icon: '/icons/yike-design.svg', 
      title: 'Yike Design',
      link: 'https://yike.design' 
    },
  ];

  return (
    <div className={styles.heroContainer}>
      <div className={styles.leftContent}>
        <h1 className={styles.title}>
          YIKE <span className={styles.titleOutline}>时光</span>
        </h1>
        <p className={styles.subtitle}>慢下脚步</p>
        <p className={styles.subtitle}>让心灵照亮前行的路</p>
        <div className={styles.scrollIndicatorContainer}> {/* Renamed for clarity */}
          <div className={styles.mouseOutline}>
            <div className={styles.mouseScrollDot}></div>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <span>相关地址:</span>
          <a href="https://discord.gg/yourserver" target="_blank" rel="noopener noreferrer" aria-label="Discord" className={styles.socialIcon}>D</a> 
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialIcon}>G</a>
        </div>
      </div>

      <div className={styles.rightContent}>
        <div className={styles.characterImageContainer}>
          <img src="/images/hero-character.png" alt="Character" className={styles.characterImage} />
        </div>
        <div className={styles.quickLinks}>
          {quickLinksData.map((item, index) => (
            <QuickLinkCard 
              key={index} 
              icon={item.icon} 
              title={item.title} 
              link={item.link} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
