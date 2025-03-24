'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import useViewport from '@/hooks/useViewport';

const SidebarContext = createContext();

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}

export function SidebarProvider({ children }) {
  const { isMobile } = useViewport();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}
