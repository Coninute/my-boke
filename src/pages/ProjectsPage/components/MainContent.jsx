import React from 'react';
import styles from './MainContent.module.css';
import UserProfileCard from './UserProfileCard';
import WeatherCard from './WeatherCard';
import TagsCard from './TagsCard';
import ProjectCard from './ProjectCard';

function MainContent({ projects }) {
  return (
    <div className={styles.mainContentContainer}>
      <div className={styles.leftColumn}>
        <UserProfileCard />
        <WeatherCard />
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
