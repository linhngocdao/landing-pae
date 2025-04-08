import FlipCardComponent from "@/component/CardFlip";

export default function HomePage() {
  const servicePackages = [
    {
      name: "Buff Mắt Live V1",
      price: "249.000",
      features: [
        "Thời Gian Livestream 30p",
        "Số Mắt Xem 100",
        "View Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Duy Trì Mắt Xem Ổn Định",
        "+1K Điểm Tích Lũy"
      ]
    },
    {
      name: "Buff Mắt Live V2",
      price: "499.000",
      features: [
        "Thời Gian Livestream 60p",
        "Số Mắt Xem 100",
        "View Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Duy Trì Mắt Xem Ổn Định",
        "+2K Điểm Tích Lũy"
      ]
    },
    {
      name: "Buff Mắt Live V3",
      price: "749.000",
      features: [
        "Thời Gian Livestream 90p",
        "Số Mắt Xem 100",
        "View Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Duy Trì Mắt Xem Ổn Định",
        "+3K Điểm Tích Lũy"
      ]
    }
  ];

  return (
    <FlipCardComponent items={servicePackages} />
  );
}
