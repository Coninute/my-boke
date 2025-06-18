import React from 'react';
import styles from './ProfileCard.module.css';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

/**
 * 个人卡片组件
 * @param {string} avatar 头像图片地址
 * @param {string} name 昵称
 * @param {string} bio 个性签名
 * @param {object} socialLinks 社交链接对象，包含 github、twitter、linkedin
 */
const ProfileCard = ({
  avatar = '/logo.png',
  name = '庆',
  bio = '世界等同于你',
  socialLinks = {
    github: '#',
    twitter: '#',
    linkedin: '#',
  },
}) => {
  return (
    <div className={styles.card}>
      {/* 头像 */}
      <img src={avatar} alt={name} className={styles.avatar} />
      {/* 昵称 */}
      <div className={styles.name}>{name}</div>
      {/* 签名 */}
      <div className={styles.bio}>{bio}</div>
      {/* 社交图标 */}
      <div className={styles.socialLinks}>
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      </div>
    </div>
  );
};

export default ProfileCard;
