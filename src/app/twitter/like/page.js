import FlipCardComponent from "@/component/CardFlip";

export default function HomePage() {
  const servicePackages = [
    {
      name: "Gói 100 Tym",
      price: "99.000",
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
