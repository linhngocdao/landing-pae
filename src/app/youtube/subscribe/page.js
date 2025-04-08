import FlipCardComponent from "@/component/CardFlip";

export default function HomePage() {
  const servicePackages = [
    {
      name: "Gói 1.000 Sub",
      price: "799.000",
      features: [
        "Subscribe Global",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời",
        "+3K Điểm Tích Lũy"
      ]
    },
    {
      name: "Gói 5.000 Sub",
      price: "3.999.000",
      features: [
        "Subscribe Global",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời",
        "+1.000 Subscribe",
        "+15K Điểm Tích Lũy"
      ]
    },
    {
      name: "Gói 10.000 Sub",
      price: "7.999.000",
      features: [
        "Subscribe Global",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời",
        "+1.000 Subscribe",
        "+30K Điểm Tích Lũy"
      ]
    }
  ];

  return (
    <FlipCardComponent items={servicePackages} />
  );
}
