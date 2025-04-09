'use client';
import { useSidebar } from '@/context/SidebarContext';

export default function ToggleSidebarButton() {
  const { isOpen, toggleSidebar } = useSidebar();
  const buttonClasses = `
    ${isOpen ? " p-1  top-[2px]" : " p-4  top-4"}
    ${isOpen ? "bg-zinc-200  rounded-br-none rounded-tr-[20px] rounded-bl-lg" : "bg-gray-300"}
    hover:bg-zinc-300
    transition-colors
    z-50
    fixed
    ${isOpen ? 'left-[250px]' : 'left-0'}
    cursor-pointer
    ${isOpen ? '' : 'rounded-r-md'}
  `;

  return (
    <button
      onClick={toggleSidebar}
      className={buttonClasses}
      aria-label={isOpen ? "Đóng sidebar" : "Mở sidebar"}
    >
      {isOpen ? (
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>
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

