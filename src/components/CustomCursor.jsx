import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const isMobileOrTabletDevice = () => {
  if (typeof window === 'undefined') return true;

  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  const isMobileUA =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  const isIPadDesktopMode =
    navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

  const isTouchDevice =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(hover: none)').matches ||
    window.matchMedia('(pointer: coarse)').matches;

  const isTabletWidth = window.innerWidth <= 1180;

  return isMobileUA || isIPadDesktopMode || isTouchDevice || isTabletWidth;
};

const CustomCursor = () => {
  const [disabled, setDisabled] = useState(true);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setDisabled(isMobileOrTabletDevice());
    };

    checkDevice();

    window.addEventListener('resize', checkDevice);
    window.addEventListener('orientationchange', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
    };
  }, []);

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const target = e.target;

      const isClickable =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('[role="button"]');

      setIsPointer(Boolean(isClickable));
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [disabled]);

  if (disabled) return null;

  return (
    <div
      className={`custom-cursor ${isPointer ? 'custom-cursor--pointer' : ''} ${
        isHidden ? 'custom-cursor--hidden' : ''
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;