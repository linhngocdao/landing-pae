"use client";
import React, { useState } from 'react';

export default function GroupPage() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row gap-4 m-auto h-full items-center w-max lg:w-full lg:justify-evenly">
      <div
        className={`relative w-[32rem] h-full transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''
          }`}
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ perspective: '1000px' }}
      >
        {/* Front Side of the Card */}
        <div
          className="absolute w-full h-full backface-hidden bg-zinc-100 p-4 rounded-2xl shadow-2xl border-2 border-white flex flex-col items-center"
          style={{ transform: 'rotateY(0deg)' }}
        >
          <div className="text-center">
            <div className="w-33 h-33 mx-auto mb-4 p-1 relative">
              <div className="group-hover:rotate-90 transition-transform duration-500 rounded-full border-4 border-orange-300 w-[8.5rem] h-[8.5rem] absolute">
                <div className="absolute w-5 h-5 rounded-full top-1 left-1 bg-gradient-to-tl from-orange-500 to-orange-400"></div>
                <div className="absolute w-7 h-7 rounded-full bottom-1 right-1 bg-gradient-to-tl from-orange-400 to-orange-300"></div>
              </div>
              <div className="flex bg-gradient-to-tl m-2 from-orange-500 to-orange-300 rounded-full items-center justify-center w-[7.5rem] h-[7.5rem] text-white">
                <p className="text-[1rem] font-bold">199.000</p>
                <sup className="text-[0.5rem] font-semibold ml-1 -top-2">VNĐ</sup>
              </div>
            </div>
            <h2 className="text-2xl font-bold">Gói 1.000 Follow</h2>

            <div className="mt-4">
              <ul className="list-none text-lg text-zinc-600">
                <li>✔ Follow Việt Thật</li>
                <li>✔ Chất Lượng Cao</li>
                <li>✔ Tốc Độ Nhanh</li>
                <li>✔ Tăng 1 Lần Dùng Cả Đời</li>
                <li>✔ Bảo Hành Trọn Đời</li>
                <li>✔ + 1K Điểm Tích Lũy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Back Side of the Card */}
        <div
          className="absolute w-full h-full backface-hidden bg-gradient-to-tl from-orange-500 to-orange-300 p-4 rounded-2xl shadow-2xl text-center"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="text-white">
            <h2 className="text-xl font-bold">Liên Hệ Tư Vấn</h2>
            <p className="text-lg mt-2">
              Để biết thêm thông tin chi tiết về gói, vui lòng liên hệ với chúng tôi!
            </p>
            <a
              href="https://www.messenger.com/t/106313722503403"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:bg-none border-2 bg-orange-400 text-white font-bold py-2 px-4 mt-4 rounded-xl"
            >
              Nhắn Tin Tư Vấn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
