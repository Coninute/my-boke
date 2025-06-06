import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import * as THREE from 'three';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import HeroSection from './components/HeroSection'; // 导入 HeroSection

// Helper function for easeOutCubic easing（弹性但无抖动）
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// Helper function for custom smooth scroll with cubic ease
const customSmoothScrollTo = (element, targetPosition, duration = 1000, onComplete) => {
  const startPosition = element.scrollTop;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animationStep(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);

    element.scrollTop = startPosition + distance * easedProgress;

    if (timeElapsed < duration) {
      requestAnimationFrame(animationStep);
    } else {
      if (onComplete) {
        onComplete();
      }
    }
  }
  requestAnimationFrame(animationStep);
};

function HomePage() {
  const homePageRef = useRef(null); // Ref for the main scroll container
  // vantaRef is already used for the first scrollBox
  const section2Ref = useRef(null); // Ref for the second scrollBox
  const section3Ref = useRef(null); // Ref for the third scrollBox
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  const lastScrollTopRef = useRef(0);
  const isSnappingRef = useRef(false);
  const isProgrammaticScrollRef = useRef(false);

  useEffect(() => {
    // Ensure vantaRef.current and CLOUDS are available before initializing
    if (!vantaRef.current || !CLOUDS) {
      return;
    }

    const effect = CLOUDS({
      el: vantaRef.current, // Target element
      THREE: THREE,         // Pass the THREE object
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      backgroundColor: 0xffffff,
      skyColor: 0x78caeb,
      cloudColor: 0xD0E0F0,     // Brighter, more white-ish blue
      cloudShadowColor: 0x5f84ac,
      sunColor: 0xff9919,
      sunGlareColor: 0xff6633,
      sunlightColor: 0xff9933,
      speed: 1.00
    });
    setVantaEffect(effect); // Store the effect instance

    // Cleanup function: destroy the Vanta effect when the component unmounts
    return () => {
      if (effect) { // Use the 'effect' instance from this closure
        effect.destroy();
        // setVantaEffect(null); // Optional: reset the state upon destruction if needed elsewhere
      }
    };
  }, []); // Empty dependency array: run once on mount, cleanup on unmount

  useEffect(() => {
    const scrollContainer = homePageRef.current;
    const section1 = vantaRef.current; // Hero section
    const section2 = section2Ref.current;
    // section3 is not part of the snapping logic anymore

    if (!scrollContainer || !section1 || !section2) {
      return;
    }

    let scrollTimeout = null;

    const handleScroll = () => {
      if (isProgrammaticScrollRef.current) {
        // If scroll is programmatic, don't trigger new snap, just update lastScrollTop
        lastScrollTopRef.current = scrollContainer.scrollTop;
        return;
      }
      if (isSnappingRef.current) return; // Already snapping

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const currentScrollTop = scrollContainer.scrollTop;
        const scrollDirection = currentScrollTop > lastScrollTopRef.current ? 'down' : 'up';

        const section1Top = section1.offsetTop;
        const section1Height = section1.offsetHeight;
        const section2Top = section2.offsetTop;

        let targetSnapPosition = null;
        const fixedThreshold = 250; // User set this threshold

        console.log(`--------------------------------`);
        console.log(`Scroll Stop: scrollTop=${currentScrollTop.toFixed(2)}, direction=${scrollDirection}, s1Top=${section1Top.toFixed(2)}, s2Top=${section2Top.toFixed(2)}`);

        if (scrollDirection === 'down') {
          if (currentScrollTop > section1Top && currentScrollTop < section2Top) {
            // In the transition zone from S1 towards S2
            const displacementFromS1Top = currentScrollTop - section1Top;
            console.log(`  DOWN (S1->S2): displacementFromS1Top=${displacementFromS1Top.toFixed(2)}, threshold=${fixedThreshold}`);
            if (displacementFromS1Top < fixedThreshold) {
              targetSnapPosition = section1Top;
              console.log(`    Action: Snap back to S1 (top: ${section1Top.toFixed(2)})`);
            } else {
              targetSnapPosition = section2Top;
              console.log(`    Action: Snap forward to S2 (top: ${section2Top.toFixed(2)})`);
            }
          } else if (currentScrollTop >= section2Top) {
            console.log(`  DOWN: Already in or past S2, no snap for further downward scroll.`);
          } else if (currentScrollTop <= section1Top && Math.abs(currentScrollTop - section1Top) < 10) {
            targetSnapPosition = section1Top;
            console.log(`  DOWN: At S1 top, ensure snap to S1 (top: ${section1Top.toFixed(2)})`);
          }
        } else if (scrollDirection === 'up') {
          if (currentScrollTop < section2Top && currentScrollTop > section1Top) {
            // In the transition zone from S2 towards S1
            const displacementFromS2TopWhenComingUp = section2Top - currentScrollTop;
            console.log(`  UP (S2->S1): displacementFromS2TopWhenComingUp=${displacementFromS2TopWhenComingUp.toFixed(2)}, threshold=${fixedThreshold}`);
            if (displacementFromS2TopWhenComingUp < fixedThreshold) {
              // If displacement is small and we are very close to section2Top already, 
              // avoid a jarring snap back to itself.
              if (currentScrollTop > section2Top - 30) { // Only snap back to S2 if we've moved at least 30px away from its top
                targetSnapPosition = section2Top;
                console.log(`    Action: Snap back to S2 (top: ${section2Top.toFixed(2)}) because displacement < threshold`);
              } else {
                console.log(`    Action: No snap back to S2, currentScrollTop is too close to section2Top or already above it.`);
                // Potentially do nothing, or let it be handled by other conditions if any.
                // If we are already at section2Top or slightly above, no action needed for this specific case.
              }
            } else {
              targetSnapPosition = section1Top;
              console.log(`    Action: Snap forward to S1 (top: ${section1Top.toFixed(2)})`);
            }
          } else if (currentScrollTop <= section1Top) {
            targetSnapPosition = section1Top;
            console.log(`  UP: In or above S1, snap to S1 (top: ${section1Top.toFixed(2)})`);
          }
        }

        if (targetSnapPosition !== null) {
          console.log(`  Final targetSnapPosition: ${targetSnapPosition.toFixed(2)}`);
        } else {
          console.log(`  No snap target determined.`);
        }

        if (targetSnapPosition !== null && Math.abs(currentScrollTop - targetSnapPosition) > 10) { // Min distance to snap
          isSnappingRef.current = true;
          isProgrammaticScrollRef.current = true; // Mark as programmatic scroll
          customSmoothScrollTo(scrollContainer, targetSnapPosition, 400, () => { // Animation duration 400ms
            isSnappingRef.current = false;
            isProgrammaticScrollRef.current = false; // Reset after scroll completes
            lastScrollTopRef.current = scrollContainer.scrollTop; // Update after snap
          });
        }
        // Always update lastScrollTop for next scroll event if not snapping
        if (!isSnappingRef.current) {
            lastScrollTopRef.current = currentScrollTop;
        }

      }, 150); // Debounce timeout for scroll stop detection
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
      clearTimeout(scrollTimeout);
    };
  }, [homePageRef, vantaRef, section2Ref]); // Dependencies updated

  return (
    <div ref={homePageRef} className={styles.homePage}>
      <div className={styles.vantaContainer} ref={vantaRef}>
        <HeroSection />
      </div>
      <div ref={section2Ref} className={styles.scrollBox}>
        {/* Placeholder content for testing */}
        <div style={{ height: '350vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255, 160, 122, 0.7)', fontSize: '2em' }}>Section 2</div>
      </div>
    </div>

  );
}

export default HomePage;
