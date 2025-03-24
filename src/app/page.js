import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-inter">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex-1 p-6">
            <div className="text-2xl font-bold mb-1">13,000+</div>
            <div className="text-gray-500 text-sm">Khách hàng</div>
          </div>
          <div className="w-px bg-gray-200"></div>
          <div className="p-6 flex items-center justify-center min-w-[150px]">
            <div className="text-lg font-medium">Tăng Follow</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex-1 p-6">
            <div className="text-2xl font-bold mb-1">8,500+</div>
            <div className="text-gray-500 text-sm">Khách hàng</div>
          </div>
          <div className="w-px bg-gray-200"></div>
          <div className="p-6 flex items-center justify-center min-w-[150px]">
            <div className="text-lg font-medium">Dùng Seeding</div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex-1 p-6">
            <div className="text-2xl font-bold mb-1">5,800+</div>
            <div className="text-gray-500 text-sm">Khách hàng</div>
          </div>
          <div className="w-px bg-gray-200"></div>
          <div className="p-6 flex items-center justify-center min-w-[150px]">
            <div className="text-lg font-medium">Mua Fanpage, Group, TikTok</div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex-1 p-6">
            <div className="text-2xl font-bold mb-1">97%</div>
            <div className="text-gray-500 text-sm">Khách hàng</div>
          </div>
          <div className="w-px bg-gray-200"></div>
          <div className="p-6 flex items-center justify-center min-w-[150px]">
            <div className="text-lg font-medium">Hài lòng dịch vụ của TAB</div>
          </div>
        </div>
      </div>

      {/* Fanpage Support */}
      <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">Fanpage hỗ trợ</h2>
        <div className="flex items-center mb-4">
          <div className="mr-4">
            <Image
              src="/next.svg"
              alt="TAB Media"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-medium">TAB Media</h3>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded font-medium hover:bg-blue-600 transition-colors">
            Nhắn tin
          </button>
        </div>

        {/* Recent Post */}
        <div className="mt-6">
          <div className="flex items-center mb-3">
            <div className="mr-2">
              <Image
                src="/next.svg"
                alt="TAB Media"
                width={36}
                height={36}
                className="rounded-full"
              />
            </div>
            <div>
              <h4 className="font-medium">TAB Media</h4>
              <p className="text-sm text-gray-500">20 tháng 6 lúc 17:03</p>
            </div>
          </div>

          <div>
            <p className="mb-4">
              Điểm tích lũy được tạo ra nhằm tri ân những quý khách hàng đã luôn ủng hộ TAB Media ^^ Khi sử dụng bất kì dịch vụ nào khách hàng cũng sẽ nhận được điểm tích lũy được note ở phần cuối mỗi dịch vụ. Khi đã đủ 10.000 điểm tích lũy quý khách hãy liên hệ trực tiếp cho Fanpage hỗ trợ hoặc Zalo : 0369.264.999 để nhận thưởng. Trân thành cảm ơn!
            </p>

            <div className="mt-4">
              <Image
                src="/vercel.svg"
                alt="Promotion"
                width={600}
                height={400}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
