'use client';
import React, { useCallback } from 'react';
import Link from "next/link";
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import ColorableIcon from './ColorableIcon';

const MenuItem = ({
  item,
  activeSubmenu,
  setActiveSubmenu,
  handleMenuItemClick,
  customActiveColor = 'blue-700',
  customDefaultColor = 'zinc-600',
  customHoverColor = 'blue-800'
}) => {
  const pathname = usePathname();

  const toggleSubmenu = useCallback((name) => {
    setActiveSubmenu(prev => prev === name ? null : name);
  }, [setActiveSubmenu]);

  const isMenuActive = (path) => {
    return pathname === path;
  };

  const isSubmenuActive = (path) => {
    return pathname === path || pathname.startsWith(path + '/');
  };

  // Xử lý menu tiêu đề
  if (item.type === 'header') {
    return (
      <div className="px-4 py-2 mt-4 text-zinc-600 text-sm font-medium uppercase tracking-wider">
        {item.name}
      </div>
    );
  }

  // Xử lý menu thường (không có submenu)
  if (!item.hasSubmenu) {
    // Xử lý menu có external URL
    if (item.externalUrl) {
      return (
        <li className={cn("my-1 px-2 cursor-pointer", item.isSupport ? 'mt-4 pt-2 border-t border-gray-200' : '')}>
          <a
            href={item.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center py-2 px-3 rounded-md text-zinc-600 hover:bg-blue-100 hover:text-blue-800 transition-all group",
              isMenuActive(item.path) ? 'bg-blue-100 text-blue-800 font-medium' : ''
            )}
            onClick={handleMenuItemClick}
          >
            <div className="mr-3 flex items-center justify-center">
              <ColorableIcon
                iconPath={item.icon}
                isActive={isMenuActive(item.path)}
                activeColor={`text-${customActiveColor}`}
                defaultColor={`text-${customDefaultColor}`}
                hoverColor={`text-${customHoverColor}`}
                width={18}
                height={18}
              />
            </div>
            <span className={cn("text-[15px] font-medium", isMenuActive(item.path) ? `text-${customActiveColor}` : `text-${customDefaultColor}`)}>
              {item.name}
            </span>
          </a>
        </li>
      );
    }

    // Xử lý menu thường không có external URL
    return (
      <li className={cn("my-1 px-2 cursor-pointer", item.isSupport ? 'mt-4 pt-2 border-t border-gray-200' : '')}>
        <Link
          href={item.path}
          className={cn(
            "flex items-center py-2 px-3 rounded-md text-zinc-600 hover:bg-blue-100 hover:text-blue-800 transition-all group",
            isMenuActive(item.path) ? 'bg-blue-100 text-blue-800 font-medium' : ''
          )}
          onClick={handleMenuItemClick}
        >
          <div className="mr-3 flex items-center justify-center">
            <ColorableIcon
              iconPath={item.icon}
              isActive={isMenuActive(item.path)}
              activeColor={`text-${customActiveColor}`}
              defaultColor={`text-${customDefaultColor}`}
              hoverColor={`text-${customHoverColor}`}
              width={18}
              height={18}
            />
          </div>
          <span className={cn("text-[15px] font-medium", isMenuActive(item.path) ? `text-${customActiveColor}` : `text-${customDefaultColor}`)}>
            {item.name}
          </span>
        </Link>
      </li>
    );
  }

  // Xử lý menu có submenu
  return (
    <li className="my-1 px-2">
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
              <ColorableIcon
                iconPath={item.icon}
                isActive={activeSubmenu === item.name}
                activeColor={`text-${customActiveColor}`}
                defaultColor={`text-${customDefaultColor}`}
                hoverColor={`text-${customHoverColor}`}
                width={18}
                height={18}
              />
            </div>
            <span className={cn("text-[15px] font-medium", activeSubmenu === item.name ? `text-${customActiveColor}` : `text-${customDefaultColor}`)}>
              {item.name}
            </span>
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
                  <span className={cn("text-[15px] font-medium", isSubmenuActive(subItem.path) ? `text-${customActiveColor}` : `text-${customDefaultColor}`)}>
                    {subItem.name}
                  </span>
                  {subItem.icon && (
                    <ColorableIcon
                      iconPath={subItem.icon}
                      isActive={isSubmenuActive(subItem.path)}
                      activeColor={`text-${customActiveColor}`}
                      defaultColor={`text-${customDefaultColor}`}
                      hoverColor={`text-${customHoverColor}`}
                      width={18}
                      height={18}
                    />
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

export default MenuItem;
