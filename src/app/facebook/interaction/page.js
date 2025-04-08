import FlipCardComponent from "@/component/CardFlip";

export default function HomePage() {
  const servicePackages = [
    {
      name: "Gói lọc bạn bè",
      price: "299.000",
      features: [
        "Bạn Bè Không Tương Tác",
        "Tài Khoản Bị Khóa",
        "Tài Khoản Bị Vô Hiệu Hóa",
        "Bạn Bè Có Ít Bạn Chung",
        "Add Thêm Nhiều Khách",
        "6 Tháng Lọc 1 Lần",
        "+1K Điểm Tích Lũy"
      ]
    },
    {
      name: "Gói Bot Comment",
      price: "799.000",
      features: [
        "Tự Động Like Các Bài Viết Trên Newfeed",
        "Tự Động Comment Nội Dung Mong Muốn",
        "Kéo Lại Và Duy Trì Tương Tác",
        "Quảng Bá Sản Phẩm/Dịch Vụ",
        "Rộng Rãi",
        "+3K Điểm Tích Lũy"
      ]

    },
    {
      name: "Gói Tạo Thương Hiệu",
      price: "3.499.000",
      features: [
        "10.000 Follow Cá Nhân",
        "Tăng Độ Nhận Diện",
        "Setup Profile: Ấn Tượng",
        "Kích Nút Theo Dõi",
        "Đề Xuất Tìm Kiếm",
        "Tạo Banner ( Ảnh Bìa )",
        "Đề Xuất Giải Pháp",
        "Bán Hàng Hiệu Quả",
        "+14K Điểm Tích Lũy"
      ]

    }
  ];

  return (
    <FlipCardComponent items={servicePackages} />
  );
}
