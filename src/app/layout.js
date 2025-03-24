import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Sidebar from '@/layout/Sidebar';
import { SidebarProvider } from '@/context/SidebarContext';
import ToggleSidebarButton from '@/component/ToggleSidebarButton';
import SidebarOverlay from '@/component/SidebarOverlay';
import MainContent from '@/component/MainContent';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata = {
  title: {
    template: '%s | Next.js App',
    default: 'Next.js App - Trang chủ',
  },
  description: 'Ứng dụng Next.js đầy đủ với các thành phần và cấu hình',
  keywords: ['next.js', 'react', 'javascript', 'typescript', 'tailwindcss'],
  authors: [{ name: 'Frontend Developer' }],
  colorScheme: 'light dark',
  creator: 'Developer',
  publisher: 'Vercel',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Next.js App',
    description: 'Ứng dụng Next.js đầy đủ',
    url: 'https://next-app.vercel.app',
    siteName: 'Next.js App',
    images: [
      {
        url: 'https://next-app.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Next.js App',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js App',
    description: 'Ứng dụng Next.js đầy đủ',
    images: ['https://next-app.vercel.app/twitter-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="max-h-screen bg-zinc-100 antialiased">
        <SidebarProvider>
          <div className="flex relative">
            <div className="relative">
              <Sidebar />
            </div>
            <SidebarOverlay />
            <div className="flex flex-col w-full min-h-screen">

              <ToggleSidebarButton />
              <MainContent>{children}</MainContent>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
