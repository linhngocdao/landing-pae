import FlipCardComponent from "@/component/CardFlip";

export default function HomePage() {
  const servicePackages = [
    {
      name: "Like Tháng V1",
      price: "499.000",
      features: [
        "1 Ngày 5 Bài Đăng",
        "Mỗi Bài Đăng 50 like",
        "Like Việt Thật",
        "Chất Lượng Cao",
        "+2K Điểm Tích Lũy"
      ]
    },
    {
      name: "Like Tháng V2",
      price: "999.000",
      features: [
        "1 Ngày 5 Bài Đăng",
        "Mỗi Bài Đăng 100 Like",
        "Like Việt Thật",
        "Chất Lượng Cao",
        "+4K Điểm Tích Lũy"
      ]
    },
    {
      name: "Like Tháng V3",
      price: "1.499.000",
      features: [
        "1 Ngày 5 Bài Đăng",
        "Mỗi Bài Đăng 150 Like",
        "Like Việt Thật",
        "Chất Lượng Cao",
        "+6K Điểm Tích Lũy"
      ]
    }
  ];

  return (
    <FlipCardComponent items={servicePackages} />
  );
}
