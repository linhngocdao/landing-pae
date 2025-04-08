import FlipCardComponent from "@/component/CardFlip";

export default function HomePage() {
  const servicePackages = [
    {
      name: "Tym Tháng V1",
      price: "499.000",
      features: [
        "1 Ngày 5 Bài Đăng",
        "Mỗi Bài Đăng 50 Tym",
        "Tym Việt Thật",
        "Chất Lượng Cao",
        "+2K Điểm Tích Lũy"
      ]
    },
    {
      name: "Tym Tháng V2",
      price: "999.000",
      features: [
        "1 Ngày 5 Bài Đăng",
        "Mỗi Bài Đăng 100 Tym",
        "Tym Việt Thật",
        "Chất Lượng Cao",
        "+4K Điểm Tích Lũy"
      ]
    },
    {
      name: "Tym Tháng V3",
      price: "1.499.000",
      features: [
        "1 Ngày 5 Bài Đăng",
        "Mỗi Bài Đăng 150 Tym",
        "Tym Việt Thật",
        "Chất Lượng Cao",
        "+6K Điểm Tích Lũy"
      ]
    }
  ];

  return (
    <FlipCardComponent items={servicePackages} />
  );
}
