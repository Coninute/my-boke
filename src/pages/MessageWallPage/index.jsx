import React, { useEffect, useRef, useState } from 'react';
import { create } from 'danmu'; // Make sure 'danmu' is installed
import styles from './index.module.css';
import VantaBackground from '@/components/VantaBackground'; // 导入新的背景组件
import DarkVantaBackground from '@/components/DarkVantaBackground';

const MessageWallPage = () => {
  // 读取html标签的data-theme属性，判断当前主题
  const [isDark, setIsDark] = useState(() => document.documentElement.getAttribute('data-theme') === 'dark');
  useEffect(() => {
    // 监听data-theme属性变化，自动切换背景
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);
  const danmuContainerRef = useRef(null);
  const managerRef = useRef(null);
  const [newMessage, setNewMessage] = useState('');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    // 延迟初始化弹幕，确保DOM已完全渲染
    const initTimer = setTimeout(() => {
      if (danmuContainerRef.current) {
        console.log('开始初始化弹幕系统...');
        console.log('容器尺寸:', danmuContainerRef.current.offsetWidth, 'x', danmuContainerRef.current.offsetHeight);

        // Ensure danmu is available (e.g., after successful installation)
        if (typeof create !== 'function') {
          console.error("Danmu library 'create' function not found. Was 'danmu' installed correctly?");
          if (danmuContainerRef.current) {
            danmuContainerRef.current.textContent = "弹幕库加载失败，请检查依赖安装情况及网络。";
            danmuContainerRef.current.style.color = 'red';
            danmuContainerRef.current.style.textAlign = 'center';
            danmuContainerRef.current.style.padding = '20px';
          }
          return;
        }

        try {
          // 重要：弹幕配置修改，确保弹幕从右到左滚动
          const danmuManager = create({
            container: danmuContainerRef.current,
            speed: 0.1, // 进一步降低速度值 - 原为 5
            trackHeight: 30, // 轨道高度

            // 自定义弹幕节点创建函数
            plugin: {
              $createNode(danmaku) {
                console.log('创建弹幕节点, 接收到的弹幕对象:', danmaku);

                let textToDisplay = ''; // 默认为空字符串
                if (danmaku && danmaku.data && typeof danmaku.data.text === 'string') {
                  textToDisplay = danmaku.data.text;
                } else if (danmaku && typeof danmaku.text === 'string') { // 如果 data.text 不存在，尝试 danmaku.text
                  textToDisplay = danmaku.text;
                  if (danmaku.data && danmaku.data.text === undefined) {
                    console.warn('Danmaku.data.text was undefined, fell back to danmaku.text. Danmaku object:', danmaku);
                  }
                } else {
                  // 如果两种常见的文本路径都没有找到，记录警告
                  console.warn('Danmaku object does not have a recognizable text field (expected danmaku.data.text or danmaku.text). Danmaku object:', danmaku);
                }

                console.log('最终用于显示的文本内容:', JSON.stringify(textToDisplay)); // 打印将要显示的文本

                // 创建弹幕节点
                danmaku.node.textContent = textToDisplay;
                danmaku.node.style.color = getRandomColor();
                danmaku.node.style.fontSize = '18px';
                danmaku.node.style.fontWeight = 'bold';
                danmaku.node.style.padding = '3px 8px';
                danmaku.node.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';
                danmaku.node.style.borderRadius = '4px';
                danmaku.node.style.textShadow = '1px 1px 2px rgba(0,0,0,0.7)';
                danmaku.node.style.whiteSpace = 'nowrap';
                danmaku.node.style.boxSizing = 'border-box';
                danmaku.node.style.zIndex = '100';
                danmaku.node.style.userSelect = 'none';
                danmaku.node.style.display = 'inline-block';

                // 确保弹幕可见
                danmaku.node.style.opacity = '1';
                danmaku.node.style.visibility = 'visible';
              }
            },
          });

          console.log('弹幕管理器创建成功，开始挂载...');

          // 挂载弹幕管理器到容器
          danmuManager.mount(danmuContainerRef.current);

          // 开始播放弹幕
          danmuManager.startPlaying();

          // 保存管理器引用
          managerRef.current = danmuManager;

          console.log('弹幕系统初始化完成，开始播放');

          // 测试弹幕是否正常工作
          const initialMessages = [
            "欢迎来到弹幕留言墙！",
            "尝试发送一条弹幕吧~",
            "Danmaku.js 驱动",
            "这是一个动态的留言示例...",
            "React + Danmaku!",
            "CSS + DOM 渲染就是灵活！"
          ];

          // 逐个发送测试弹幕，间隔更长
          initialMessages.forEach((msg, index) => {
            setTimeout(() => {
              if (managerRef.current) {
                console.log(`发送测试弹幕 ${index + 1}:`, msg);

                // 发送弹幕，使用滚动模式
                managerRef.current.push({
                  text: msg,
                  mode: 'scroll', // 使用滚动模式
                  style: {
                    color: getRandomColor(),
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }
                });
              }
            }, index * 3000 + 1000); // 增加时间间隔
          });

          // 添加窗口大小变化监听器
          const handleResize = () => {
            if (managerRef.current) {
              console.log('窗口大小变化，更新弹幕容器');
              managerRef.current.resize();
            }
          };

          window.addEventListener('resize', handleResize);

          return () => {
            clearTimeout(initTimer);
            window.removeEventListener('resize', handleResize);

            if (managerRef.current) {
              console.log('组件卸载，停止弹幕系统');
              managerRef.current.stopPlaying();
              managerRef.current = null;
            }

            if (danmuContainerRef.current) {
              danmuContainerRef.current.innerHTML = '';
            }
          };
        } catch (error) {
          console.error("弹幕初始化错误:", error);
          console.error("错误详情:", error.stack);
          if (danmuContainerRef.current) {
            danmuContainerRef.current.textContent = `弹幕初始化失败: ${error.message}`;
            danmuContainerRef.current.style.color = 'red';
            danmuContainerRef.current.style.textAlign = 'center';
            danmuContainerRef.current.style.padding = '20px';
          }
        }
      }
    }, 500); // 延迟500ms初始化

    return () => clearTimeout(initTimer);
  }, []); // Empty dependency array: runs once on mount, cleans up on unmount

  const handleSendMessage = () => {
    if (newMessage.trim() && managerRef.current) {
      console.log('用户发送弹幕:', newMessage.trim());

      // 发送用户弹幕，使用滚动模式
      managerRef.current.push({
        text: newMessage.trim(),
        mode: 'scroll', // 使用滚动模式
        style: {
          color: getRandomColor(),
          fontSize: '18px',
          fontWeight: 'bold'
        }
      });

      setNewMessage('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className={styles.messageWallPageContainer}>
      <div className={styles.vantaBox}>
        {isDark ? <DarkVantaBackground /> : <VantaBackground />}
      </div>
      <div className={styles.scrollBox}>
        <div ref={danmuContainerRef} className={styles.danmuContainer}>
        </div>
        <div className={styles.inputArea}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="输入你的弹幕内容..."
            className={styles.danmuInput}
          />
          <button onClick={handleSendMessage} className={styles.sendButton}>
            发送弹幕
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageWallPage;
