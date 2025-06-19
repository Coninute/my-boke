import React, { useState } from 'react';
import styles from './index.module.css';
import PropTypes from 'prop-types';

// 搜索图标组件
const SearchIcon = () => (
  <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);


/**
 * 资源筛选组件
 * @param {Object} props - 组件属性
 * @param {Function} props.onSearch - 搜索回调函数
 * @param {Function} props.onCategoryChange - 分类变化回调函数
 */
const FilterSection = ({ onSearch, onCategoryChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { key: 'all', name: '全部资源' },
    { key: 'design', name: '设计资源' },
    { key: 'development', name: '开发资源' },
    { key: 'marketing', name: '营销资源' },
  ];

  /**
   * 处理搜索输入变化
   * @param {Object} e - 事件对象
   */
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  /**
   * 处理分类点击
   * @param {string} category - 分类键
   */
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className={styles.filterSection}>
      <div className={styles.searchContainer}>
        <SearchIcon />
        <input
          type="text"
          placeholder="搜索资源、教程、工具..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>
      
      <div className={styles.categorySelector}>
        {categories.map((category) => (
          <button
            key={category.key}
            className={`${styles.categoryButton} ${activeCategory === category.key ? styles.active : ''}`}
            onClick={() => handleCategoryClick(category.key)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

FilterSection.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default FilterSection;
