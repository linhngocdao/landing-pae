import FlipCardComponent from "@/component/CardFlip";

export default function HomePage() {
  const servicePackages = [
    {
      name: "Gói 100 Mem",
      price: "349.000",
      features: [
        "Member Việt Thật",
        "Chất Lượng Cao",
        "Auto Chào Khi Join Nhóm",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời",
        "+1K Điểm Tích Lũy"
      ]
    },
    {
      name: "Gói 500 Mem",
      price: "1.749.000",
      features: [
        "Member Việt Thật",
        "Chất Lượng Cao",
        "Auto Chào Khi Join Nhóm",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời",
        "+5K Điểm Tích Lũy"
      ]
    },
    {
      name: "Gói 1.000 Mem",
      price: "3.499.000",
      features: [
        "Member Việt Thật",
        "Chất Lượng Cao",
        "Auto Chào Khi Join Nhóm",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời",
        "+10K Điểm Tích Lũy"
      ]
    }
  ];

  return (
    <FlipCardComponent items={servicePackages} />
  );
}
