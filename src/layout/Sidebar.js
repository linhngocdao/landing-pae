'use client';
import Link from "next/link";
import Image from "next/image";
import { useSidebar } from '@/context/SidebarContext';
import useViewport from '@/hooks/useViewport';
import { useCallback, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { menuItems } from '@/route';
import { cn } from '@/lib/utils';
import "./style.css";
import MenuItem from "@/component/SVG/MenuItem";

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

  return (
    <div className={sidebarClasses}>
      <div className="px-4 pt-3 mx-4 mb-1 self-center justify-self-center">
        <Link href="/" onClick={handleMenuItemClick}>
          <Image
            src="/logo.png"
            alt="TAB Media"
            width={150}
            height={60}
            quality={100}
            priority
            className=" h-full w-[100%] object-contain"
          />
        </Link>
      </div>
      <div className="w-[90%] mx-auto rounded-full h-[0.75px] bg-zinc-300 my-2"></div>

      <div className="overflow-auto flex-grow scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        <nav className="py-3">
          <ul className="text-[15px]">
            {menuItems.map(item => (
              <MenuItem
                key={item.path || item.name}
                item={item}
                activeSubmenu={activeSubmenu}
                setActiveSubmenu={setActiveSubmenu}
                handleMenuItemClick={handleMenuItemClick}
                customActiveColor="blue-700"
                customDefaultColor="zinc-600"
                customHoverColor="blue-800"
              />
            ))}
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
