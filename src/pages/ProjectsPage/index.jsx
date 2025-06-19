import React from 'react';
import styles from './index.module.css';
import VantaBackground from '../../components/VantaBackground';
import MainContent from './components/MainContent';
import { projects } from './projectsData';
import Footer from '../../components/Footer';

function ProjectsPage() {
  return (
    <div className={styles.projectsPage}>
      <div className={styles.vantaBox}>
        <VantaBackground />
      </div>
      <div className={styles.scrollBox}>
        <MainContent projects={projects} />
        <Footer />
      </div>
    </div>
  );
}

export default ProjectsPage;
