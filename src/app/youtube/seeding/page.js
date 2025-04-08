import FlipCardComponent from "@/component/CardFlip";

export default function HomePage() {
  const servicePackages = [
    {
      name: "100 Like - Dislike",
      price: "49.000",
      features: [
        "Like Và Dislike Loại Global",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời"
      ]
    },
    {
      name: "Gói 10 Comment",
      price: "49.000",
      features: [
        "Comment Việt Thật",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời"
      ]
    },
    {
      name: "Gói 1.000 View",
      price: "149.000",
      features: [
        "View Việt Thật",
        "View Chất Lượng Cao",
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
