'use client';
import { useSidebar } from '@/context/SidebarContext';

export default function ToggleSidebarButton() {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className="absolute right-2 top-2 p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors z-50"
      aria-label="Toggle sidebar"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>
  );
}
