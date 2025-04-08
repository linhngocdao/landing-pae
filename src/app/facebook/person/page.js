"use client";

import FlipCardComponent from "@/component/CardFlip";

export default function HomePage() {
  const servicePackages = [
    {
      name: "Gói 1.000 Follow",
      price: "249.000",
      features: [
        "Follow Việt Thật",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời",
        "+1K Điểm Tích Lũy"
      ]
    },
    {
      name: "Gói 500 Tym",
      price: "249.000",
      features: [
        "Loại Global",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời"
      ]
    },
    {
      name: "Gói 1.000 Tym",
      price: "499.000",
      features: [
        "Loại Global",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời"
      ]
    }
  ];

  return (
    <FlipCardComponent items={servicePackages} />
  );
}
