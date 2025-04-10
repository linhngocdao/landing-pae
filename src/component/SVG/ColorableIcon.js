'use client';
import React, { useCallback, useState } from "react";
import { cn } from '@/lib/utils';

const ColorableIcon = ({
  iconPath,
  isActive = false,
  activeColor = 'text-blue-700',
  defaultColor = 'text-zinc-600',
  hoverColor = 'text-blue-800',
  width = 18,
  height = 18
}) => {
  const [iconLoaded, setIconLoaded] = useState(false);
  const [svgContent, setSvgContent] = useState(null);

  const fetchSvg = useCallback(async () => {
    try {
      const response = await fetch(iconPath);
      const svgText = await response.text();
      setSvgContent(svgText);
      setIconLoaded(true);
    } catch (error) {
      console.error("Failed to load SVG:", error);
      // Fallback to normal img tag if SVG fails to load
      setIconLoaded(false);
    }
  }, [iconPath]);

  // Gọi fetchSvg khi component mount
  React.useEffect(() => {
    if (iconPath && iconPath.endsWith('.svg')) {
      fetchSvg();
    } else {
      setIconLoaded(false);
    }
  }, [iconPath, fetchSvg]);

  // Nếu không phải file SVG hoặc không tải được SVG, sử dụng thẻ img
  if (!iconLoaded) {
    return (
      <img
        src={iconPath}
        alt="Icon"
        width={width}
        height={height}
        className={cn(
          "transition-all duration-300",
          isActive ? 'filter brightness-75' : '',
          "group-hover:filter group-hover:brightness-75"
        )}
      />
    );
  }

  // Chuyển đổi màu sắc của SVG bằng cách thêm các class Tailwind
  const coloredSvgContent = svgContent
    .replace(/<svg/, `<svg class="${cn(
      'transition-colors duration-300',
      isActive ? activeColor : defaultColor,
      `group-hover:${hoverColor}`
    )}"`)
    .replace(/fill="(?!none)[^"]*"/g, 'fill="currentColor"')
    .replace(/stroke="(?!none)[^"]*"/g, 'stroke="currentColor"');

  return (
    <div
      className="flex items-center justify-center"
      style={{ width, height }}
      dangerouslySetInnerHTML={{ __html: coloredSvgContent }}
    />
  );
};

export default ColorableIcon;
