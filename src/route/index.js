export const menuItems = [
  { name: 'Trang chủ', path: '/', icon: '/home.svg' },
  { name: 'Kho Page, Group, TikTok', path: '/kho-page', icon: '/flag.svg' },
  {
    name: 'DỊCH VỤ',
    type: 'header'
  },
  {
    name: 'Facebook',
    path: '/facebook',
    icon: '/facebook.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Follow Cá Nhân', path: '/facebook/person' },
      { name: 'Follow Fanpage', path: '/facebook/followPage' },
      { name: 'Member Group', path: '/facebook/memberGroup' },
      { name: 'Seeding', path: '/facebook/seeding' },
      { name: 'Tăng Tương Tác ', path: '/facebook/interaction', icon: '/hot.gif' },
      { name: 'VIP Like Tháng', path: '/facebook/vipLike' },
    ]
  },
  {
    name: 'Instagram',
    path: '/instagram',
    icon: '/instagram.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Follow Cá Nhân', path: '/instagram/follow' },
      { name: 'Seeding', path: '/instagram/seeding' },
      { name: 'VIP Tym Tháng', path: '/instagram/vipLike' }
    ]
  },
  {
    name: 'TikTok',
    path: '/tiktok',
    icon: '/tiktok.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Follow Cá Nhân V1', path: '/tiktok/personv1' },
      { name: 'Follow Cá Nhân V2', path: '/tiktok/personv2' },
      { name: 'Seeding', path: '/tiktok/seeding' },
      { name: 'Mắt Livestream', path: '/tiktok/livestream' }
    ]
  },
  {
    name: 'YouTube',
    path: '/youtube',
    icon: '/youtube.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Subscribe', path: '/youtube/subscribe' },
      { name: 'Seeding', path: '/youtube/seeding' },
    ]
  },
  {
    name: 'Zalo',
    path: '/zalo',
    icon: '/zalo.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Tăng Thành Viên', path: '/zalo' },
    ]
  },
  {
    name: 'Telegram',
    path: '/telegram',
    icon: '/telegram.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Tăng Thành Viên', path: '/telegram' },
    ]
  },
  {
    name: 'Twitter',
    path: '/twitter',
    icon: '/twitter.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Follow Cá nhân', path: '/twitter/follow' },
      { name: 'Buff Tym', path: '/twitter/like' },
    ]
  },
  {
    name: 'Shopee',
    path: '/shopee',
    icon: '/shopee.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Follow Cá nhân', path: '/shopee/follow' },
      { name: 'Buff Tym', path: '/shopee/tym' },
    ]
  },
  {
    name: 'LIÊN HỆ HỖ TRỢ',
    path: '/support',
    icon: '/globe.svg',
    isSupport: true,
    externalUrl: 'https://zalo.me/0369264999'
  },

];
