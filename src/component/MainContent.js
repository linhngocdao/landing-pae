'use client';
import { useSidebar } from '@/context/SidebarContext';
import useViewport from '@/hooks/useViewport';

export default function MainContent({ children }) {
  const { isOpen } = useSidebar();
  const { isMobile } = useViewport();

  const mainClasses = `
    flex-grow
    p-6
    transition-all
    duration-300
    ${isOpen && !isMobile ? 'ml-[280px]' : ''}
  `;

  return (
    <main className={mainClasses}>
      {children}
    </main>
  );
}
