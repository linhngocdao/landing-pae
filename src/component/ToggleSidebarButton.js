'use client';
import { useSidebar } from '@/context/SidebarContext';
import useViewport from '@/hooks/useViewport';

export default function ToggleSidebarButton() {
  const { isOpen, toggleSidebar } = useSidebar();
  const { isMobile } = useViewport();

  const buttonClasses = `
    p-2
    bg-gray-100
    hover:bg-gray-200
    transition-colors
    z-50
    fixed
    ${isOpen ? 'left-[248px]' : 'left-0'}
    top-4
    rounded-r-md
  `;

  return (
    <button
      onClick={toggleSidebar}
      className={buttonClasses}
      aria-label={isOpen ? "Đóng sidebar" : "Mở sidebar"}
    >
      {isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      )}
    </button>
  );
}

