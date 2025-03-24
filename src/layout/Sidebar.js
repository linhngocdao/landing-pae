'use client';
import Link from 'next/link';

const pages = [
  { name: 'Trang chủ', path: '/' },
  { name: 'Giới thiệu', path: '/about' },
  { name: 'Liên hệ', path: '/contact' }
];

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        {pages.map((page) => (
          <li key={page.path}>
            <Link href={page.path}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
