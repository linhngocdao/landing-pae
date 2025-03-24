'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useSidebar } from '@/context/SidebarContext';
import useViewport from '@/hooks/useViewport';

const menuItems = [
  { name: 'Trang chủ', path: '/', icon: '/globe.svg' },
  { name: 'Kho Page, Group, TikTok', path: '/store', icon: '/file.svg' },
];

const serviceItems = [
  { name: 'Facebook', path: '/facebook', icon: '/globe.svg' },
  { name: 'Instagram', path: '/instagram', icon: '/globe.svg' },
  { name: 'TikTok', path: '/tiktok', icon: '/globe.svg' },
  { name: 'Google', path: '/google', icon: '/globe.svg' },
  { name: 'YouTube', path: '/youtube', icon: '/globe.svg' },
  { name: 'Zalo', path: '/zalo', icon: '/globe.svg' },
  { name: 'Telegram', path: '/telegram', icon: '/globe.svg' },
  { name: 'Twitter', path: '/twitter', icon: '/globe.svg' },
  { name: 'Shopee', path: '/shopee', icon: '/globe.svg' },
];

export default function Sidebar() {
  const { isOpen } = useSidebar();
  const { isMobile } = useViewport();

  // Tính toán các class dựa trên trạng thái
  const sidebarClasses = `
    bg-white shadow-md h-screen z-30 overflow-y-auto font-inter transition-all duration-300
    ${isOpen ? 'w-[280px]' : 'w-0 md:w-[70px]'}
    ${isMobile && !isOpen ? 'translate-x-[-100%]' : 'translate-x-0'}
    ${isMobile ? 'fixed' : 'sticky top-0'}
  `;

  const contentClasses = `
    transition-opacity duration-300
    ${isOpen ? 'opacity-100' : 'opacity-0 md:opacity-100'}
    ${isMobile && !isOpen ? 'hidden' : 'block'}
  `;

  const iconOnlyClasses = `
    transition-opacity duration-300
    ${!isOpen ? 'opacity-100' : 'opacity-0'}
    ${isOpen ? 'hidden' : 'md:flex'}
    md:flex-col md:items-center md:py-4 md:space-y-6
  `;

  return (
    <div className={sidebarClasses}>
      {/* Sidebar đầy đủ */}
      <div className={contentClasses}>
        <div className="py-4 border-b border-gray-200">
          <Link href="/">
            <div className="flex items-center p-4">
              <Image src="/next.svg" alt="TAB Media" width={150} height={40} />
            </div>
          </Link>
        </div>

        <nav className="py-2">
          <ul>
            {menuItems.map((item) => (
              <li key={item.path} className="my-1">
                <Link href={item.path} className="text-gray-700 hover:bg-gray-100 rounded-md block">
                  <div className="flex items-center py-2 px-4">
                    <div className="mr-3 flex items-center justify-center">
                      <Image src={item.icon} alt="" width={20} height={20} />
                    </div>
                    <span>{item.name}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <div className="px-4 py-2 text-gray-500 font-medium text-sm">
              DỊCH VỤ
            </div>
            <ul>
              {serviceItems.map((item) => (
                <li key={item.path} className="my-1">
                  <Link href={item.path} className="text-gray-700 hover:bg-gray-100 rounded-md block">
                    <div className="flex items-center py-2 px-4">
                      <div className="mr-3 flex items-center justify-center">
                        <Image src={item.icon} alt="" width={20} height={20} />
                      </div>
                      <span>{item.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 pt-2 border-t border-gray-200">
            <Link href="/support" className="text-gray-700 hover:bg-gray-100 rounded-md block">
              <div className="flex items-center py-2 px-4">
                <div className="mr-3 flex items-center justify-center">
                  <Image src="/globe.svg" alt="" width={20} height={20} />
                </div>
                <span className="font-medium tracking-wide">LIÊN HỆ HỖ TRỢ</span>
              </div>
            </Link>
          </div>
        </nav>
      </div>

      {/* Icon-only sidebar cho chế độ thu gọn trên desktop */}
      <div className={iconOnlyClasses}>
        {menuItems.map((item) => (
          <Link key={item.path} href={item.path} className="hidden md:block">
            <div className="p-2 rounded-md hover:bg-gray-100">
              <Image src={item.icon} alt={item.name} width={24} height={24} />
            </div>
          </Link>
        ))}

        <div className="hidden md:block pt-2 border-t border-gray-200 w-full mx-auto"></div>

        {serviceItems.slice(0, 5).map((item) => (
          <Link key={item.path} href={item.path} className="hidden md:block">
            <div className="p-2 rounded-md hover:bg-gray-100">
              <Image src={item.icon} alt={item.name} width={24} height={24} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
