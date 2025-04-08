'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useSidebar } from '@/context/SidebarContext';
import useViewport from '@/hooks/useViewport';
import { useCallback, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { menuItems } from '@/route';

export default function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar();
  const { isMobile } = useViewport();
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Chỉ render component khi đã mount trên client
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const findActiveMenu = () => {
      let foundActive = false;
      for (const item of menuItems) {
        if (item.hasSubmenu) {
          const matchingSubmenu = item.submenu?.find(subItem =>
            pathname.startsWith(subItem.path)
          );
          if (matchingSubmenu) {
            setActiveSubmenu(item.name);
            foundActive = true;
            return;
          }
          if (pathname === item.path) {
            setActiveSubmenu(item.name);
            foundActive = true;
            return;
          }
        }
      }
      if (!foundActive) {
        setActiveSubmenu(null);
      }
    };
    findActiveMenu();
  }, [pathname, mounted]);

  const handleMenuItemClick = useCallback(() => {
    if (isMobile) {
      toggleSidebar();
    }
  }, [isMobile, toggleSidebar]);

  const toggleSubmenu = useCallback((name) => {
    setActiveSubmenu(prev => prev === name ? null : name);
  }, []);

  const isMenuActive = (path) => {
    return pathname === path;
  };

  const isSubmenuActive = (path) => {
    return pathname.startsWith(path);
  };

  // Không render gì cả cho đến khi component được mount
  if (!mounted) {
    return null;
  }

  // Chỉ hide sidebar sau khi đã mount
  if (mounted && !isOpen) {
    return null;
  }

  const sidebarClasses = `
    bg-zinc-100 shadow-md overflow-hidden font-inter transition-all duration-300 fixed
    w-[250px] z-30 flex flex-col h-screen rounded-xl border-2 border-white
  `;

  const renderMenuItem = (item) => {
    if (item.type === 'header') {
      return (
        <div key={item.name} className="px-4 py-2 mt-4 text-gray-500 font-medium text-sm">
          {item.name}
        </div>
      );
    }

    if (!item.hasSubmenu) {
      return (
        <li key={item.path} className={`my-1 ${item.isSupport ? 'mt-4 pt-2 border-t border-gray-200' : ''}`}>
          <Link
            href={item.path}
            className={`text-gray-700 hover:bg-[rgb(147,197,253)] hover:text-[rgb(30,64,175)] hover:font-semibold rounded-md block
              ${isMenuActive(item.path) ? 'bg-[rgb(147,197,253)] text-[rgb(30,64,175)] font-semibold' : ''}
            `}
            onClick={handleMenuItemClick}
          >
            <div className="flex items-center py-2 px-4">
              <div className="mr-3 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt=""
                  width={17}
                  height={17}
                  className="transition-colors duration-300 hover:text-[rgb(30,64,175)]"
                />
              </div>
              <span className={`transition-colors duration-300 hover:text-[rgb(30,64,175)] ${isMenuActive(item.path) ? 'font-semibold' : ''}`}>{item.name}</span>
            </div>
          </Link>
        </li>
      );
    }

    return (
      <li key={item.path} className="my-1">
        <div>
          <button
            className={`w-full text-left text-gray-700 cursor-pointer hover:bg-[rgb(147,197,253)] hover:text-[rgb(30,64,175)] hover:font-semibold rounded-md block
              ${activeSubmenu === item.name ? 'bg-[rgb(147,197,253)] text-[rgb(30,64,175)] font-semibold' : ''}
              ${pathname === item.path ? 'bg-[rgb(147,197,253)] text-[rgb(30,64,175)] font-semibold' : ''}
            `}
            onClick={() => toggleSubmenu(item.name)}
          >
            <div className={`flex items-center justify-between py-2 px-4 ${activeSubmenu === item.name ? 'bg-[rgb(147,197,253)] text-[rgb(30,64,175)] font-semibold' : ''}`}>
              <div className="flex items-center">
                <div className="mr-3 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt="hot"
                    width={17}
                    height={17}
                    className="transition-colors duration-300 text-[rgb(30,64,175)]"
                  />
                </div>
                <span>{item.name}</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${activeSubmenu === item.name ? 'rotate-90' : ''}`}
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${activeSubmenu === item.name
              ? 'max-h-[500px] opacity-100'
              : 'max-h-0 opacity-0'
              }`}
          >
            <ul className="pl-10 py-1">
              {item.submenu.map((subItem) => (
                <li key={subItem.path}>
                  <Link
                    href={subItem.path}
                    className={`text-gray-700 cursor-pointer hover:bg-[rgb(147,197,253)] hover:text-[rgb(30,64,175)] hover:font-semibold rounded-md block py-2 px-2
                      ${isSubmenuActive(subItem.path) ? 'bg-[rgb(147,197,253)] text-[rgb(30,64,175)] font-semibold' : ''}
                    `}
                    onClick={handleMenuItemClick}
                  >
                    <div className="flex cursor-pointer items-center justify-between">
                      <span>{subItem.name}</span>
                      {subItem.icon && (
                        <div className="flex items-center justify-center">
                          <Image
                            src={subItem.icon}
                            alt=""
                            unoptimized
                            width={17}
                            height={17}
                            className="transition-colors duration-300 hover:text-[rgb(30,64,175)]"
                          />
                        </div>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    );
  };

  return (
    <div className={sidebarClasses}>
      <div className="flex-none py-3 px-4 border-b border-gray-200">
        <Link href="/" onClick={handleMenuItemClick}>
          <div className="flex items-center">
            <Image src="/logo.png" alt="TAB Media" width={180} height={40} />
          </div>
        </Link>
      </div>

      <div className="overflow-auto">
        <nav className="py-2">
          <ul className='text-[16px]'>
            {menuItems.map(item =>
              renderMenuItem(item)
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
