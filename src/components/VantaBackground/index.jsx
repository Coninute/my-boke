import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import styles from './VantaBackground.module.css';

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    const effect = CLOUDS({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      backgroundColor: 0xffffff,
      skyColor: 0x78caeb,
      cloudColor: 0xD0E0F0,
      cloudShadowColor: 0x5f84ac,
      sunColor: 0xff9919,
      sunGlareColor: 0xff6633,
      sunlightColor: 0xff9933,
      speed: 1.00
    });

    return () => {
      if (effect) {
        effect.destroy();
      }
    };
  }, []);

  return <div className={styles.vantaContainer} ref={vantaRef}></div>;
};

export default VantaBackground;
