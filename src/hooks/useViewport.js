'use client';
import { useEffect, useState } from 'react';

export default function useViewport(innerWidth = 767) {
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    setIsMobile(window.innerWidth <= innerWidth);

    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setIsMobile(window.innerWidth <= innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [innerWidth]);

  return { isMobile, width };
}
