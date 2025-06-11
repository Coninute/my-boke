import React from 'react';
import styles from './MainContent.module.css';
import { FaHeart } from 'react-icons/fa';

function ProjectCard({ project }) {
  const tags = project.category ? project.category.split('/') : [];

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImageContainer}>
        <img src={project.imageUrl || '/logo.png'} alt={project.title} className={styles.projectImage} />
      </div>
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDate}>{project.date}</p>
        <div className={styles.projectTags}>
          {tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className={styles.projectFooter}>
        <div className={styles.projectLikes}>
          <FaHeart />
          <span>{project.likes}</span>
        </div>
        <a href={project.url} className={styles.projectButton} target="_blank" rel="noopener noreferrer">
          瞧一瞧
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
