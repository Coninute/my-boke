import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationBar.module.css';
import './font/iconfont.css'; // 引入字体图标 CSS - 检查是否有太阳/月亮图标

const navItemsData = [
  { path: "/", label: "个人主页", icon: "icon-shouye" },
  { path: "/blog", label: "个人博客", icon: "icon-boke" },
  { path: "/projects", label: "个人项目", icon: "icon-xiangmu" },
  { path: "/resource-sharing", label: "资源分享", icon: "icon-resource" },
  { path: "/contact", label: "联系博主", icon: "icon-lianxi" },
  { path: "/message-wall", label: "留言墙", icon: "icon-liuyanqiang" }
];

function NavigationBar({ theme, toggleTheme }) { // 接收主题和切换主题的 props
  const [searchQuery, setSearchQuery] = useState('');


  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      const url = `https://www.baidu.com/s?wd=${encodeURIComponent(searchQuery.trim())}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  
  return (
    <nav className={styles.navbar}> {/* 应用动态计算的 className */}
      <div className={styles.navLeft}>
        <NavLink to="/" className={styles.logo}>
          <span className={styles.logoQ}>Q</span>YN
        </NavLink>
      </div>

      <ul className={styles.navList}>
        {navItemsData.map((item) => (
          <li key={item.path} className={styles.navItem}>
            <NavLink 
              to={item.path} 
              className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
            >
              {item.icon && <span className={`iconfont ${item.icon} ${styles.navIcon}`}></span>}
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className={styles.navRight}>
        <div className={styles.searchContainer}>
          <input
            type="search"
            placeholder="百度一下..."
            className={styles.searchInput}
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <span
            className={`iconfont icon-sousuo ${styles.searchIcon}`}
            onClick={handleSearch}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSearch(); }}
          ></span> 
        </div>
        <button 
          onClick={toggleTheme} 
          className={`${styles.themeSwitch} ${theme === 'dark' ? styles.darkModeActive : ''}`}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          <div className={styles.iconSlider}>
            {theme === 'light' ? '🌙' : '☀️'}
          </div>
          <span className={styles.themeText}>
            {theme === 'light' ? 'LIGHT' : 'DARK'}
          </span>
        </button>
      </div>
    </nav>
  );
}

export default NavigationBar;
