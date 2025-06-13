import React from 'react';
import styles from './index.module.css';
import HeroSection from './components/HeroSection';
import Sidebar from './components/Sidebar';
import FeaturedContent from './components/FeaturedContent';
import ProjectSection from './components/ProjectSection';
import BlogSection from './components/BlogSection';
import NotesSection from './components/NotesSection';
import VantaBackground from '../../components/VantaBackground';
import ScrollToTopButton from './components/ScrollToTopButton';

function HomePage() {
  return (
    <div className={styles.homePage}>
      <VantaBackground />
      <div className={styles.topSection}>
        <main className={styles.mainContent}>
          <HeroSection />
          <Sidebar />
        </main>
      </div>
      <div className={styles.otherContent}>
        <FeaturedContent />
        <NotesSection />
        <BlogSection />
        <ProjectSection />
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default HomePage;
