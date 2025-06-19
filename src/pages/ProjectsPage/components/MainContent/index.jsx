import React from 'react';
import styles from './MainContent.module.css';
import UserProfileCard from '@/components/BlogComponemts/UserProfileCard';
import TagsCard from '@/components/BlogComponemts/TagsCard';
import ProjectCard from '../ProjectCard';

function MainContent({ projects }) {
  return (
    <div className={styles.mainContentContainer}>
      <div className={styles.leftColumn}>
        <UserProfileCard />
        <TagsCard />
      </div>
      <div className={styles.rightColumn}>
        {projects && projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default MainContent;
