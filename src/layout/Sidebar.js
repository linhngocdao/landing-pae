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
  const pathname = usePathname();

  useEffect(() => {
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
  }, [pathname]);

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

  if (!isOpen) {
    return null;
  }

  // z-10 w-0 h-screen overflow-x-hidden aria-expanded:overflow-x-auto aria-expanded:absolute transition-allaria-expanded:lg:relative flex-col bg-zinc-100 aria-expanded:w-[288px] rounded-r-xl aria-expanded:border-2 border-white shadow-2xl gap-2 py-4
  const sidebarClasses = `
    bg-zinc-100 shadow-md overflow-hidden font-inter transition-all duration-300 fixed
    w-[300px] z-30 flex flex-col h-screen rounded-xl border-2 border-white
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
            className={`text-gray-700 hover:bg-blue-50 rounded-md block
              ${isMenuActive(item.path) ? 'bg-blue-200 font-medium' : ''}
            `}
            onClick={handleMenuItemClick}
          >
            <div className="flex items-center py-2 px-4">
              <div className="mr-3 flex items-center justify-center">
                <Image src={item.icon} alt="" width={20} height={20} />
              </div>
              <span className={item.isSupport ? "font-medium tracking-wide" : ""}>{item.name}</span>
            </div>
          </Link>
        </li>
      );
    }

    return (
      <li key={item.path} className="my-1">
        <div>
          <button
            className={`w-full text-left text-gray-700 hover:bg-blue-50 rounded-md block
              ${activeSubmenu === item.name ? 'bg-blue-50' : ''}
              ${pathname === item.path ? 'bg-blue-100 font-medium' : ''}
            `}
            onClick={() => toggleSubmenu(item.name)}
          >
            <div className="flex items-center justify-between py-2 px-4">
              <div className="flex items-center">
                <div className="mr-3 flex items-center justify-center">
                  <Image src={item.icon} alt="hot" width={20} height={20} unoptimized />
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
            style={{
              maxHeight: activeSubmenu === item.name ? `${item.submenu.length * 40}px` : '0',
            }}
          >
            <ul className="pl-10 py-1">
              {item.submenu.map((subItem) => (
                <li key={subItem.path}>
                  <Link
                    href={subItem.path}
                    className={`text-gray-700 hover:bg-blue-50 rounded-md block py-2 px-2
                      ${isSubmenuActive(subItem.path) ? 'bg-blue-100 font-medium' : ''}
                    `}
                    onClick={handleMenuItemClick}
                  >
                    <div className="flex items-center justify-between">
                      <span>{subItem.name}</span>
                      {subItem.icon && (
                        <div className="flex items-center justify-center">
                          <Image
                            src={subItem.icon}
                            alt=""
                            width={30}
                            height={30}
                            unoptimized
                            className="text-gray-500"
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
      <div className="flex-none py-4 border-b border-gray-200">
        <Link href="/" onClick={handleMenuItemClick}>
          <div className="flex items-center p-4">
            <Image src="/logo.png" alt="TAB Media" width={150} height={40} />
          </div>
        </Link>
      </div>

      <div className="">
        <nav className="py-2">
          <ul className='text-[17px]'>
            {menuItems.map(item =>
              renderMenuItem(item)
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
