'use client';
import { useSidebar } from '@/context/SidebarContext';
import useViewport from '@/hooks/useViewport';

export default function SidebarOverlay() {
  const { isOpen, toggleSidebar } = useSidebar();
  const { isMobile } = useViewport();

  if (!isMobile || !isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-20"
      onClick={toggleSidebar}
      aria-hidden="true"
    />
  );
}
