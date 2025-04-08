import FlipCardComponent from "@/component/CardFlip";

export default function HomePage() {
  const servicePackages = [
    {
      name: "Gói 1.000 Follow",
      price: "349.000",
      features: [
        "Follow Global",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời",
        "+2K Điểm Tích Lũy"
      ]
    },
    {
      name: "Gói 5.000 Follow",
      price: "1.749.000",
      features: [
        "Follow Global",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời",
        "+1.000 Follow",
        "+10K Điểm Tích Lũy"
      ]
    },
    {
      name: "Gói 10.000 Follow",
      price: "3.499.000",
      features: [
        "Follow Global",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời",
        "+2.000 Follow",
        "+20K Điểm Tích Lũy"
      ]
    }
  ];

  return (
    <FlipCardComponent items={servicePackages} />
  );
}
