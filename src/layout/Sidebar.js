'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useSidebar } from '@/context/SidebarContext';
import useViewport from '@/hooks/useViewport';
import { useCallback, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { menuItems } from '@/route';
import { cn } from '@/lib/utils';

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
          // Kiểm tra xem pathname có bắt đầu bằng đường dẫn chính của menu không
          if (pathname.startsWith(item.path + '/')) {
            setActiveSubmenu(item.name);
            foundActive = true;
            return;
          }

          // Kiểm tra từng submenu
          const matchingSubmenu = item.submenu?.find(subItem =>
            pathname === subItem.path || pathname.startsWith(subItem.path + '/')
          );

          if (matchingSubmenu) {
            setActiveSubmenu(item.name);
            foundActive = true;
            return;
          }

          // Kiểm tra nếu đúng là trang chính của menu
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
    return pathname === path || pathname.startsWith(path + '/');
  };

  if (!mounted) {
    return null;
  }

  if (mounted && !isOpen) {
    return null;
  }

  const sidebarClasses = cn(
    "bg-zinc-100 shadow-lg overflow-hidden font-inter transition-all duration-300 fixed",
    "w-[280px] z-30 flex flex-col h-screen rounded-tr-[20px] rounded-br-[20px] border border-2 border-white",
    "backdrop-blur-sm"
  );

  const renderMenuItem = (item) => {
    if (item.type === 'header') {
      return (
        <div key={item.name} className="px-4 py-2 mt-4 text-zinc-600 text-sm font-medium uppercase tracking-wider">
          {item.name}
        </div>
      );
    }

    if (!item.hasSubmenu) {
      return (
        <li key={item.path} className={cn("my-1 px-2", item.isSupport ? 'mt-4 pt-2 border-t border-gray-200' : '')}>
          <Link
            href={item.path}
            className={cn(
              "flex items-center py-2 px-3 rounded-md text-zinc-600 hover:bg-blue-100 hover:text-blue-800 transition-all group",
              isMenuActive(item.path) ? 'bg-blue-100 text-blue-800 font-medium' : ''
            )}
            onClick={handleMenuItemClick}
          >
            <div className="mr-3 flex items-center justify-center text-zinc-600">
              <Image
                src={item.icon}
                alt=""
                width={18}
                height={18}
                className={cn(
                  "transition-colors duration-300 text-zinc-600",
                  isMenuActive(item.path) ? 'text-blue-800 filter brightness-75' : '',
                  "group-hover:filter group-hover:brightness-75 hover:text-blue-800"
                )}
              />
            </div>
            <span className="text-[15px] font-medium text-zinc-600">{item.name}</span>
          </Link>
        </li>
      );
    }

    return (
      <li key={item.path} className="my-1 px-2">
        <div>
          <button
            className={cn(
              "w-full text-left flex items-center justify-between py-2 px-3 rounded-md text-zinc-600 hover:bg-blue-300 hover:text-blue-700 transition-all group",
              activeSubmenu === item.name ? 'bg-blue-100 text-blue-700 font-medium' : ''
            )}
            onClick={() => {
              if (activeSubmenu && activeSubmenu !== item.name) {
                setActiveSubmenu(null);
                setTimeout(() => {
                  setActiveSubmenu(item.name);
                }, 50);
              } else {
                toggleSubmenu(item.name);
              }
            }}
          >
            <div className="flex items-center">
              <div className="mr-3 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt=""
                  width={18}
                  height={18}
                  className={cn(
                    "transition-colors duration-300 text-zinc-600",
                    activeSubmenu === item.name ? 'text-blue-800 filter brightness-75' : '',
                    "group-hover:filter group-hover:brightness-75"
                  )}
                />
              </div>
              <span className="text-[15px] font-medium text-zinc-600">{item.name}</span>
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
            <ul className="pl-7 space-y-1 py-1">
              {item.submenu.map((subItem) => (
                <li key={subItem.path}>
                  <Link
                    href={subItem.path}
                    className={cn(
                      "items-center rounded-lg max-h-6 px-2 h-6 flex gap-2 transition-colors hover:bg-blue-300 text-zinc-600 hover:text-blue-800 aria-selected:bg-blue-100 aria-selected:text-blue-800 cursor-pointer w-max",
                      isSubmenuActive(subItem.path) ? 'bg-blue-100 text-blue-700 font-medium' : ''
                    )}
                    onClick={handleMenuItemClick}
                  >
                    <span className="text-[15px] font-medium">{subItem.name}</span>
                    {subItem.icon && (
                      <div className="flex items-center justify-center">
                        <Image
                          src={subItem.icon}
                          alt=""
                          unoptimized
                          width={26}
                          height={26}
                          className={cn(
                            "transition-colors duration-300",
                            isSubmenuActive(subItem.path) ? 'text-blue-700 filter brightness-75' : '',
                            "group-hover:filter group-hover:brightness-75"
                          )}
                        />
                      </div>
                    )}
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
      <div className="flex-none py-4 px-5 border-b border-gray-100">
        <Link href="/" onClick={handleMenuItemClick}>
          <div className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="TAB Media"
              width={130}
              height={40}
              quality={100}
              priority
              className="pt-2 h-full w-auto object-contain"
            />
          </div>
        </Link>
      </div>
      <div class="w-[90%] mx-auto rounded-full h-[0.75px] bg-zinc-300 my-4"></div>

      <div className="overflow-auto flex-grow scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        <nav className="py-3">
          <ul className='text-[15px]'>
            {menuItems.map(item =>
              renderMenuItem(item)
            )}
          </ul>
        </nav>
      </div>

      <div className="flex-none p-4 border-t border-gray-100 mt-auto">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="text-zinc-600">© 2025 TAB Media</span>
          <Link href="/support" className="text-blue-600 hover:underline">Hỗ trợ</Link>
        </div>
      </div>
    </div>
  );
}
