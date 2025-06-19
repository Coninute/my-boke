import React from 'react';
import styles from '../../index.module.css';

const SubscribeSection = () => {
  return (
    <div className={styles.subscribeSection}>
      <h2>获取更多精选资源</h2>
      <p>订阅我的资源推荐，每周获取最新、最实用的工具和应用推荐</p>
      
      <form className={styles.subscribeForm}>
        <input type="email" placeholder="输入你的邮箱地址" />
        <button type="submit">立即订阅</button>
      </form>
      
      <p>我们尊重你的隐私，绝不会分享你的邮箱地址</p>
    </div>
  );
};

export default SubscribeSection;
