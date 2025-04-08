import FlipCardComponent from "@/component/CardFlip";

export default function HomePage() {
  const servicePackages = [
    {
      name: "Goi 100 Like",
      price: "15.000",
      features: [
        "Tym Việt Thật",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời"
      ]

    },
    {

      name: "Gói 10 Comment",
      price: "30.000",
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
      price: "49.000",
      features: [
        "View Việt Thật",
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
