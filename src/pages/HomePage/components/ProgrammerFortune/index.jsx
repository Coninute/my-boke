import React, { useState } from 'react';
import styles from './index.module.css';

const fortunes = [
  "今天宜写新功能，bug 会自动消失。",
  "宜重构代码，思路如泉涌。",
  "忌提交代码，可能会有冲突。",
  "宜Code Review，能发现隐藏的bug。",
  "今天适合学习新框架，事半功倍。",
  "忌熬夜，身体是革命的本钱。",
  "宜与产品经理沟通，需求清晰明了。",
  "宜写文档，后人乘凉。",
  "忌用 `rm -rf /`，除非你想跑路。",
  "宜摸鱼，劳逸结合效率高。"
];

const ProgrammerFortune = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [fortune, setFortune] = useState('');

  const handleFortuneClick = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
    setIsFlipped(true);
  };

  const handleResetClick = () => {
    setIsFlipped(false);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
        {/* Card Front */}
        <div className={`${styles.cardFace} ${styles.cardFront}`}>
          <div className={styles.header}>
            <h3 className={styles.title}>程序员今日运势</h3>
          </div>
          <p className={styles.description}>点击按钮来获取今日运势</p>
          <button className={styles.button} onClick={handleFortuneClick}>
            <span role="img" aria-label="magic-wand">🪄</span> 占卜一下
          </button>
        </div>

        {/* Card Back */}
        <div className={`${styles.cardFace} ${styles.cardBack}`}>
          <p className={styles.fortuneResult}>{fortune}</p>
          <button className={styles.backButton} onClick={handleResetClick}>
            再占卜一次
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgrammerFortune;
