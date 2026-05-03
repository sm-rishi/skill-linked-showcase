
import { useEffect, useRef, useState } from 'react';

export const useScrollCardAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationState, setAnimationState] = useState<'left' | 'right' | 'center'>('left');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const elementCenter = elementTop + elementHeight / 2;
        const windowCenter = windowHeight / 2;
        
        // Check if element is visible
        const visible = elementTop < windowHeight && (elementTop + elementHeight) > 0;
        setIsVisible(visible);
        
        if (visible) {
          // Determine animation state based on position relative to screen center
          const distanceFromCenter = Math.abs(elementCenter - windowCenter);
          const threshold = windowHeight * 0.3; // 30% of screen height
          
          if (distanceFromCenter < threshold) {
            setAnimationState('center');
          } else if (elementCenter < windowCenter) {
            setAnimationState('right');
          } else {
            setAnimationState('left');
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTransform = () => {
    if (!isVisible) return 'translateX(-100px)';

    switch (animationState) {
      case 'center':
        return 'translateX(0) scale(1.02)';
      case 'left':
        return 'translateX(-50px)';
      case 'right':
        return 'translateX(50px)';
      default:
        return 'translateX(0)';
    }
  };

  const getOpacity = () => {
    if (!isVisible) return 0;
    return animationState === 'center' ? 1 : 0.7;
  };

  return {
    elementRef,
    isVisible,
    animationState,
    transform: getTransform(),
    opacity: getOpacity(),
    scrollY,
  };
};
