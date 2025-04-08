"use client";
import { useState, useEffect, useRef } from 'react';

export const useCounter = ({
  start = 0,
  end,
  duration = 2000,
  separator = ",",
  decimals = 0,
  decimal = "."
}) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const frameRef = useRef(0);
  const startTimeRef = useRef(0);

  // Format số với dấu phân cách và số thập phân
  const formatNumber = (num) => {
    return new Intl.NumberFormat('vi-VN', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
      useGrouping: true
    }).format(num).replace(/\./g, separator).replace(/,/g, decimal);
  };

  useEffect(() => {
    setCount(start);
    countRef.current = start;

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    startTimeRef.current = performance.now();

    const animate = (timestamp) => {
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);

      const easedProgress = easeOutQuad(progress);
      const currentValue = start + (end - start) * easedProgress;

      if (currentValue !== countRef.current) {
        setCount(currentValue);
        countRef.current = currentValue;
      }

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [start, end, duration]);

  function easeOutQuad(t) {
    return t * (2 - t);
  }

  return formatNumber(count);
};
