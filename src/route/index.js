export const menuItems = [
  { name: 'Trang chủ', path: '/', icon: '/globe.svg' },
  { name: 'Kho Page, Group, TikTok', path: '/store', icon: '/file.svg' },
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
      { name: 'Follow Cá Nhân', path: '/facebook/follow-personal' },
      { name: 'Follow Fanpage', path: '/facebook/follow-fanpage' },
      { name: 'Member Group', path: '/facebook/member-group' },
      { name: 'Seeding', path: '/facebook/seeding' },
      { name: 'Tăng Tương Tác ', path: '/facebook/increase-interaction', icon: '/hot.gif' },
      { name: 'VIP Like Tháng', path: '/facebook/vip-like' },
    ]
  },
  {
    name: 'Instagram',
    path: '/instagram',
    icon: '/instagram.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Follow', path: '/instagram/follow', icon: '/instagram.svg' },
      { name: 'Like', path: '/instagram/like', icon: '/instagram.svg' },
    ]
  },
  {
    name: 'TikTok',
    path: '/tiktok',
    icon: '/tiktok.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Follow', path: '/tiktok/follow', icon: '/tiktok.svg' },
      { name: 'Tim', path: '/tiktok/heart', icon: '/tiktok.svg' },
    ]
  },
  {
    name: 'YouTube',
    path: '/youtube',
    icon: '/youtube.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Subscribe', path: '/youtube/subscribe', icon: '/youtube.svg' },
      { name: 'Like Video', path: '/youtube/like', icon: '/youtube.svg' },
    ]
  },
  {
    name: 'Zalo',
    path: '/zalo',
    icon: '/zalo.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Follow', path: '/zalo/follow', icon: '/zalo.svg' },
      { name: 'Tương tác', path: '/zalo/interaction', icon: '/zalo.svg' },
    ]
  },
  {
    name: 'Telegram',
    path: '/telegram',
    icon: '/telegram.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Member', path: '/telegram/member', icon: '/telegram.svg' },
      { name: 'View', path: '/telegram/view', icon: '/telegram.svg' },
    ]
  },
  {
    name: 'Twitter',
    path: '/twitter',
    icon: '/twitter.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Follow', path: '/twitter/follow', icon: '/twitter.svg' },
      { name: 'Like', path: '/twitter/like', icon: '/twitter.svg' },
    ]
  },
  {
    name: 'Shopee',
    path: '/shopee',
    icon: '/shopee.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Follow Shop', path: '/shopee/follow', icon: '/shopee.svg' },
      { name: 'Đánh giá', path: '/shopee/review', icon: '/shopee.svg' },
    ]
  },
  {
    name: 'LIÊN HỆ HỖ TRỢ',
    path: '/support',
    icon: '/globe.svg',
    isSupport: true
  },
];
