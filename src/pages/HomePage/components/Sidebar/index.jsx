import React from 'react';
import styles from './index.module.css';
import ProgrammerFortune from '../ProgrammerFortune';
import PersonalInfoCard from '../PersonalInfoCard';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <PersonalInfoCard />
      <ProgrammerFortune />
    </aside>
  );
};

export default Sidebar;
