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
    template: '%s | Tab Media',
    default: 'Tab Media',
  },
  description: 'Tab Media - truyền thông agency',
  keywords: ['next.js', 'react', 'javascript', 'typescript', 'tailwindcss'],
  authors: [{ name: 'Frontend Developer' }],
  creator: 'Developer',
  publisher: 'Vercel',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Tab Media',
    description: 'Tab Media - truyền thông agency',
    url: 'https://next-app.vercel.app',
    siteName: 'Tab Media',
    images: [
      {
        url: '../../public/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Tab Media',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tab Media',
    description: 'Tab Media - truyền thông agency',
    images: ['https://next-app.vercel.app/twitter-image.jpg'],
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark'
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${inter.variable} ${robotoMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
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
