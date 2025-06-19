import React from 'react';
import InfoCard from '../InfoCard';
import styles from '../BioCard/index.module.css'; // Reusing styles from BioCard

/**
 * “和你谈谈心”卡片
 */
const ChatCard = () => (
  <InfoCard icon="fa-comments" title="和你谈谈心">
    <p className={styles.paragraph}>
      欢迎来到我的个人空间！无论你是偶然路过，还是特意前来，我都非常感谢你的关注。在这里，你可能会看到一些技术文章，一些生活感悟，或者一些关于未来的思考。这些内容可能不那么专业，也不那么系统，但都是我真实的想法和体验。
    </p>
    <p className={styles.paragraph}>
      我知道，在这个信息爆炸的时代，每个人的时间都很宝贵。所以，我会尽量让我的文章既有价值，又有趣味。如果你觉得某篇文章对你有帮助，欢迎分享给更多的人；如果你对某篇文章有不同的看法，也欢迎留言讨论。我相信，思想的碰撞才能产生火花。
    </p>
    <p className={styles.paragraph}>
      最后，我想说的是，无论你是技术大牛，还是初学者，无论你是来学习的，还是来交流的，这里都是你的家。希望你能在这里找到你想要的东西，也希望我们能成为朋友。
    </p>
  </InfoCard>
);

export default ChatCard;
