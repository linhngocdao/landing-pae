"use client";

import FlipCardComponent from "@/component/CardFlip";

export default function HomePage() {
  const servicePackages = [
    {
      name: "Gói 1.000 Mem",
      price: "199.000",
      features: [
        "Member Việt Thật",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời",
        "+1K Điểm Tích Lũy"
      ]
    },
    {
      name: "Gói 5.000 Mem",
      price: "999.000",
      features: [
        "Member Việt Thật",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời",
        "+1.000 Member",
        "+4K Điểm Tích Lũy"
      ]
    },
    {
      name: "Gói 10.000 Mem",
      price: "1.999.000",
      features: [
        "Member Việt Thật",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời",
        "Đề Xuất Tìm Kiếm",
        "+3.000 Member",
        "+8K Điểm Tích Lũy"
      ]
    }
  ];

  return (
    <FlipCardComponent items={servicePackages} />
  );
}
