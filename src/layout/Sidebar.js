'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useSidebar } from '@/context/SidebarContext';
import useViewport from '@/hooks/useViewport';
import { useCallback, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { menuItems } from '@/route';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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

  // Không render gì cả cho đến khi component được mount
  if (!mounted) {
    return null;
  }

  // Chỉ hide sidebar sau khi đã mount
  if (mounted && !isOpen) {
    return null;
  }

  const sidebarClasses = cn(
    "bg-white/95 shadow-lg overflow-hidden font-inter transition-all duration-300 fixed",
    "w-[280px] z-30 flex flex-col h-screen rounded-xl border border-gray-200",
    "backdrop-blur-sm"
  );

  const renderMenuItem = (item) => {
    if (item.type === 'header') {
      return (
        <div key={item.name} className="px-4 py-2 mt-4 text-gray-500 font-medium text-sm uppercase tracking-wider">
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
              "flex items-center py-2 px-3 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-all",
              isMenuActive(item.path) ? 'bg-blue-100 text-blue-700 font-medium' : ''
            )}
            onClick={handleMenuItemClick}
          >
            <div className="mr-3 flex items-center justify-center">
              <Image
                src={item.icon}
                alt=""
                width={18}
                height={18}
                className="transition-colors duration-300"
              />
            </div>
            <span>{item.name}</span>
          </Link>
        </li>
      );
    }

    // For items with submenu, use Accordion
    return (
      <Accordion
        type="single"
        collapsible
        key={item.path}
        defaultValue={activeSubmenu === item.name ? item.name : undefined}
        className="px-2 my-1"
      >
        <AccordionItem value={item.name} className="border-none">
          <AccordionTrigger
            onClick={() => toggleSubmenu(item.name)}
            className={cn(
              "py-2 px-3 rounded-md hover:bg-blue-100 hover:text-blue-700 hover:no-underline",
              activeSubmenu === item.name ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-700'
            )}
          >
            <div className="flex items-center">
              <div className="mr-3 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt=""
                  width={18}
                  height={18}
                  className="transition-colors duration-300"
                />
              </div>
              <span>{item.name}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-0 pt-1">
            <ul className="pl-7 space-y-1">
              {item.submenu.map((subItem) => (
                <li key={subItem.path}>
                  <Link
                    href={subItem.path}
                    className={cn(
                      "flex items-center justify-between py-2 px-3 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-all text-sm",
                      isSubmenuActive(subItem.path) ? 'bg-blue-100 text-blue-700 font-medium' : ''
                    )}
                    onClick={handleMenuItemClick}
                  >
                    <span>{subItem.name}</span>
                    {subItem.icon && (
                      <div className="flex items-center justify-center">
                        <Image
                          src={subItem.icon}
                          alt=""
                          unoptimized
                          width={16}
                          height={16}
                        />
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  };

  return (
    <div className={sidebarClasses}>
      <div className="flex-none py-4 px-5 border-b border-gray-100">
        <Link href="/" onClick={handleMenuItemClick}>
          <div className="flex items-center justify-center">
            <Image src="/logo.png" alt="TAB Media" width={180} height={40} className="h-10 w-auto" />
          </div>
        </Link>
      </div>

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
          <span>© 2024 TAB Media</span>
          <Link href="/support" className="text-blue-600 hover:underline">Hỗ trợ</Link>
        </div>
      </div>
    </div>
  );
}
