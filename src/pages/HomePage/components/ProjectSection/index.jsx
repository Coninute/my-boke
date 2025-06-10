import React, { useState, useMemo } from 'react';
import styles from './index.module.css';
import { projects } from './projectData';
import { FaHeart, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ITEMS_PER_PAGE = 3;

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={project.imageUrl} alt={project.title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.date}>{project.date}</p>
        <p className={styles.category}>{project.category}</p>
      </div>
      <div className={styles.footer}>
        <button className={styles.likeButton}>
          <FaHeart /> <span className={styles.likeCount}>{project.likes}</span>
        </button>
        <button className={styles.viewButton}>瞧一瞧</button>
      </div>
    </div>
  );
}

function ProjectSection() {
  const [filter, setFilter] = useState('全部');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = useMemo(() => {
    if (filter === '全部') {
      return projects;
    }
    return projects.filter(p => p.tags.includes(filter));
  }, [filter]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const getTagCount = (tag) => projects.filter(p => p.tags.includes(tag)).length;

  return (
    <div className={styles.projectSection}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>项目产品</h2>
          <p className={styles.subtitle}>设计及开发项目总结, 不限于开发完成的项目, 包括一些产品概念...</p>
        </div>
        <div className={styles.filters}>
          <button onClick={() => setFilter('全部')} className={filter === '全部' ? styles.activeFilter : ''}>全部 {projects.length}</button>
          <button onClick={() => setFilter('产品')} className={filter === '产品' ? styles.activeFilter : ''}>产品 {getTagCount('产品')}</button>
          <button onClick={() => setFilter('练习')} className={filter === '练习' ? styles.activeFilter : ''}>练习 {getTagCount('练习')}</button>
        </div>
      </div>
      <div className={styles.grid}>
        {paginatedProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}><FaArrowLeft /></button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}><FaArrowRight /></button>
      </div>
    </div>
  );
}

export default ProjectSection;
