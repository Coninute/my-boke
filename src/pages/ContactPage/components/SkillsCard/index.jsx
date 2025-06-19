import React from 'react';
import styles from './index.module.css';
import InfoCard from '../InfoCard';

const skillsData = [
  { name: 'Web开发', percentage: 85 },
  { name: '移动开发', percentage: 75 },
  { name: 'UI设计', percentage: 70 },
  { name: '数据分析', percentage: 65 },
];

const techStack = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Node.js'];

/**
 * 技能进度条
 * @param {{name: string, percentage: number}} props
 */
const SkillBar = ({ name, percentage }) => (
  <div>
    <div className={styles.skillLabel}>
      <span className={styles.skillName}>{name}</span>
      <span className={styles.skillPercentage}>{percentage}%</span>
    </div>
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar} style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

/**
 * 技术技能卡片
 */
const SkillsCard = () => (
  <InfoCard icon="fa-code" title="技术技能">
    <div className={styles.skillsContainer}>
      {skillsData.map(skill => (
        <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
      ))}
    </div>
    <div className={styles.techStackContainer}>
      <h3 className={styles.techStackTitle}>技术栈</h3>
      <div className={styles.techStackBadges}>
        {techStack.map(tech => (
          <span key={tech} className={styles.badge}>{tech}</span>
        ))}
      </div>
    </div>
  </InfoCard>
);

export default SkillsCard;
