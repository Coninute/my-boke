import React, { useState, useEffect } from 'react';
import VantaBackground from '../../components/VantaBackground';
import DarkVantaBackground from '@/components/DarkVantaBackground';
import styles from './index.module.css';
import ResourceCard from './components/ResourceCard';
import FilterSection from './components/FilterSection';
import SubscribeSection from './components/SubscribeSection';
import { resources } from './data';

/**
 * 资源分享页面
 * @returns {JSX.Element} 页面组件
 */
const ResourceSharingPage = () => {
  const [filteredResources, setFilteredResources] = useState(resources);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  /**
   * 处理搜索
   * @param {string} term - 搜索关键词
   */
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  /**
   * 处理分类变化
   * @param {string} category - 选择的分类
   */
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // 根据搜索词和分类过滤资源
  useEffect(() => {
    const filtered = resources.filter(resource => {
      const matchesSearch = searchTerm === '' || 
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
        resource.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredResources(filtered);
  }, [searchTerm, selectedCategory]);

  // 读取html标签的data-theme属性，判断当前主题
  const [isDark, setIsDark] = useState(() => document.documentElement.getAttribute('data-theme') === 'dark');
  useEffect(() => {
    // 监听data-theme属性变化，自动切换背景
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.resourceSharingPage}>
      <div className={styles.vantaBox}>
        {isDark ? <DarkVantaBackground /> : <VantaBackground />}
      </div>
      <main className={styles.main}>
        {/* 页面标题区域 */}
        <div className={styles.pageTitle}>
          <h1><span>精选</span>资源分享</h1>
          <p>分享高质量的工具、应用和项目，帮助你提升效率、扩展技能、激发创意</p>
        </div>
        
        <FilterSection 
          onSearch={handleSearch} 
          onCategoryChange={handleCategoryChange} 
        />
        
        {/* 资源展示区域 */}
        <div className={styles.resourcesGrid}>
          {filteredResources.map(resource => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
        
        {/* 加载更多按钮 */}
        <div className={styles.loadMore}>
          <button>
            加载更多资源 <i className="fa fa-refresh"></i>
          </button>
        </div>
        
        <SubscribeSection />
      </main>
    </div>
  );
};

export default ResourceSharingPage;