import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import styles from './index.module.css';

/**
 * 暗色 Vanta.net 动态背景组件
 * 采用本地依赖three.js和vanta.net，结构与VantaBackground一致
 * @param {React.ReactNode} children 需要在背景上展示的内容
 * @param {object} options 可选，Vanta.net 的自定义参数（如颜色等）
 */
const DarkVantaBackground = ({ children, options = {} }) => {
  const vantaRef = useRef(null); // 背景容器引用
  const vantaEffect = useRef(null); // Vanta 实例引用

  useEffect(() => {
    // 初始化 Vanta.net 效果
    if (!vantaRef.current) return;
    vantaEffect.current = NET({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x3a4152, // 略淡的深灰蓝色线条，适合暗色模式
      backgroundColor: 0x23272f, // 柔和深色背景，暗色但不死黑
      ...options, // 支持自定义参数
    });
    // 卸载时销毁效果
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [options]);

  // 窗口大小变化时，重新调整背景
  useEffect(() => {
    const handleResize = () => {
      if (vantaEffect.current) {
        vantaEffect.current.resize();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.vantaBg} ref={vantaRef}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default DarkVantaBackground;
