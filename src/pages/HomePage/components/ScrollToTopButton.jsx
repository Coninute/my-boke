import React, { useState, useEffect } from 'react';
import styles from '../index.module.css';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // 监听滚动事件，控制按钮的显示和隐藏
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // 平滑滚动到页面顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`${styles.scrollToTopButton} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="返回顶部"
      title="返回顶部"
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTopButton;
