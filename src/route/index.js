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
      { name: 'Follow Cá Nhân', path: '/facebook/follow-personal', icon: '/facebook.svg' },
      { name: 'Follow Fanpage', path: '/facebook/follow-fanpage' },
      { name: 'Member Group', path: '/facebook/member-group' },
      { name: 'Seeding', path: '/facebook/seeding' },
      { name: 'Tăng Tương Tác ', path: '/facebook/increase-interaction' },
      { name: 'VIP Like Tháng', path: '/facebook/vip-like' },
    ]
  },
  {
    name: 'Instagram',
    path: '/instagram',
    icon: '/instagram.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Follow', path: '/instagram/follow' },
      { name: 'Like', path: '/instagram/like' },
    ]
  },
  {
    name: 'TikTok',
    path: '/tiktok',
    icon: '/tiktok.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Follow', path: '/tiktok/follow' },
      { name: 'Tim', path: '/tiktok/heart' },
    ]
  },
  {
    name: 'YouTube',
    path: '/youtube',
    icon: '/youtube.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Subscribe', path: '/youtube/subscribe' },
      { name: 'Like Video', path: '/youtube/like' },
    ]
  },
  {
    name: 'Zalo',
    path: '/zalo',
    icon: '/zalo.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Follow', path: '/zalo/follow' },
      { name: 'Tương tác', path: '/zalo/interaction' },
    ]
  },
  {
    name: 'Telegram',
    path: '/telegram',
    icon: '/telegram.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Member', path: '/telegram/member' },
      { name: 'View', path: '/telegram/view' },
    ]
  },
  {
    name: 'Twitter',
    path: '/twitter',
    icon: '/twitter.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Follow', path: '/twitter/follow' },
      { name: 'Like', path: '/twitter/like' },
    ]
  },
  {
    name: 'Shopee',
    path: '/shopee',
    icon: '/shopee.svg',
    hasSubmenu: true,
    submenu: [
      { name: 'Follow Shop', path: '/shopee/follow' },
      { name: 'Đánh giá', path: '/shopee/review' },
    ]
  },
  {
    name: 'LIÊN HỆ HỖ TRỢ',
    path: '/support',
    icon: '/globe.svg',
    isSupport: true
  },
];
