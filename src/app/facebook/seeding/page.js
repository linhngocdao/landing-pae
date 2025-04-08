import FlipCardComponent from "@/component/CardFlip";

export default function HomePage() {
  const servicePackages = [
    {
      name: "Gói 100 Like",
      price: "10.000",
      features: [
        "Like Việt Thật",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
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
        "Bảo Hành Trọn Đời"
      ]
    }
  ];

  return (
    <FlipCardComponent items={servicePackages} />
  );
}
