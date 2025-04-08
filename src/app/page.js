"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

const CountUp = dynamic(() => import("react-countup"), {
  ssr: false,
  loading: () => <span>0</span>
});

export default function Home() {
  return (
    <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-10 min-h-screen font-inter">
      <div className="max-w-1xl mx-auto border-white w-full shadow-2xl rounded-xl border-2 p-3 sm:p-5">
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* section1 */}
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 flex-1">
            {/* card1 */}
            <div className="inline-flex border-white w-full shadow-2xl rounded-xl px-2 sm:px-4 py-2 border-2 gap-2 sm:gap-4">
              <div className="self-center">
                <div className="text-xl sm:text-2xl font-bold">
                  <CountUp end={1300} duration={2.5} separator="," />+
                </div>
                <p className="font-medium text-sm sm:text-lg">Khách hàng</p>
              </div>
              <div className="bg-zinc-500 inline-block w-0.5 rounded"></div>
              <h2 className="text-lg sm:text-xl font-bold self-center">Tăng Follow</h2>
            </div>
            {/* card2 */}
            <div className="inline-flex border-white w-full shadow-2xl rounded-xl px-2 sm:px-4 py-2 border-2 gap-2 sm:gap-4">
              <div className="self-center">
                <span className="text-xl sm:text-2xl font-bold">
                  <CountUp end={8500} duration={2.5} separator="," />+
                </span>
                <p className="font-medium text-sm sm:text-lg">Khách hàng</p>
              </div>
              <div className="bg-zinc-500 inline-block w-0.5 rounded"></div>
              <h2 className="text-lg sm:text-xl font-bold self-center">Dùng Seeding</h2>
            </div>
            {/* card3 */}
            <div className="inline-flex border-white w-full shadow-2xl rounded-xl px-2 sm:px-4 py-2 border-2 gap-2 sm:gap-4">
              <div className="self-center">
                <span className="text-xl sm:text-2xl font-bold">
                  <CountUp end={8500} duration={2.5} separator="," />+
                </span>
                <p className="font-medium text-sm sm:text-lg">Khách hàng</p>
              </div>
              <div className="bg-zinc-500 inline-block w-0.5 rounded"></div>
              <h2 className="text-lg sm:text-xl font-bold self-center break-words">Mua Fanpage, Group, TikTok</h2>
            </div>

            {/* card 4 */}
            <div className="inline-flex border-white w-full shadow-2xl rounded-xl px-2 sm:px-4 py-2 border-2 gap-2 sm:gap-4">
              <div className="self-center">
                <span className="text-xl sm:text-2xl font-bold">
                  <CountUp end={97} duration={2.5} separator="," />%
                </span>
                <p className="font-medium text-sm sm:text-lg">Khách hàng</p>
              </div>
              <div className="bg-zinc-500 inline-block w-0.5 rounded"></div>
              <h2 className="text-lg sm:text-xl font-bold self-center">Hài lòng dịch vụ của TAB</h2>
            </div>
          </div>
          {/* section2 */}
          <div className="border-white shadow-2xl rounded-xl px-4 py-2 border-2 gap-4 h-max lg:w-64 xl:w-80">
            <h1 className="text-xl font-bold">Fanpage hỗ trợ</h1>
            <div className="h-[0.75px] w-full mx-auto bg-zinc-300 my-2"></div>
            <div className="flex gap-4 items-center">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                <Image
                  src="https://demo-dashboard-taupe.vercel.app/logo2.png"
                  alt="TAB Media"
                  fill
                  sizes="(max-width: 640px) 3rem, 4rem"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[14px] sm:text-[16px] mb-2">TAB Media</h3>
                <a
                  href="https://www.facebook.com/messages/t/106313722503403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="justify-center bg-blue-200 px-3 sm:px-4 py-1 font-medium text-xs sm:text-sm rounded-lg flex gap-2 items-center hover:bg-blue-300 active:bg-blue-400 transition-[background]"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.001 11.639C.001 4.949 5.241 0 12.001 0S24 4.95 24 11.639c0 6.689-5.24 11.638-12 11.638-1.21 0-2.38-.16-3.47-.46a.96.96 0 00-.64.05l-2.39 1.05a.96.96 0 01-1.35-.85l-.07-2.14a.97.97 0 00-.32-.68A11.39 11.389 0 01.002 11.64zm8.32-2.19l-3.52 5.6c-.35.53.32 1.139.82.75l3.79-2.87c.26-.2.6-.2.87 0l2.8 2.1c.84.63 2.04.4 2.6-.48l3.52-5.6c.35-.53-.32-1.13-.82-.75l-3.79 2.87c-.25.2-.6.2-.86 0l-2.8-2.1a1.8 1.8 0 00-2.61.48z" />
                  </svg>
                  <span>Nhắn tin</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Post section */}
        {[1, 2].map((postIndex) => (
          <div key={postIndex} className="mt-6 flex flex-col w-full mx-auto border-2 border-white rounded-2xl shadow-2xl px-3 sm:px-4 md:px-6 lg:px-8 py-4">
            {/* Post header */}
            <div className="p-2 sm:p-4">
              <div className="flex items-start">
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-3">
                  <Image
                    src="https://demo-dashboard-taupe.vercel.app/logo2.png"
                    alt="TAB Media"
                    fill
                    sizes="(max-width: 640px) 2rem, 2.5rem"
                    className="rounded-full"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="text-xs sm:text-sm font-semibold text-blue-600">TAB Media</h4>
                  </div>
                  <p className="text-xs text-gray-500">20 tháng 6 lúc 17:03</p>
                </div>
                <div className="ml-auto">
                  <button className="text-gray-500 hover:bg-gray-100 p-1 sm:p-2 rounded-full">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Post content */}
            <div className="px-2 sm:px-4 pb-3">
              <p className="text-sm sm:text-base md:text-[17px]">
                {postIndex === 1
                  ? "Điểm tích lũy được tạo ra nhằm tri ân những quý khách hàng đã luôn ủng hộ TAB Media ^^ Khi sử dụng bất kì dịch vụ nào khách hàng cũng sẽ nhận được điểm tích lũy được note ở phần cuối mỗi dịch vụ. Khi đã đủ 10.000 điểm tích lũy quý khách hãy liên hệ trực tiếp cho Fanpage hỗ trợ hoặc Zalo : 0369.264.999 để nhận thưởng. Trân thành cảm ơn!"
                  : "Có thể bạn chưa biết? Khi mua Follow Fanpage của TAB Media thì không đơn thuần chỉ nhận được Follow mà nhận được cả Like đi kèm không khác là bao so với việc mua 1 mà được 2 nên quý khách hàng tranh thủ nhé ạ ^^"}
              </p>

              <div className="mt-3 w-full flex justify-center items-center">
                <Image
                  src={postIndex === 1
                    ? "https://demo-dashboard-taupe.vercel.app/trian.png"
                    : "https://demo-dashboard-taupe.vercel.app/mua1tang1.png"}
                  alt="Promotion Image"
                  width={800}
                  height={600}
                  className="rounded-md"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Reactions */}
            <div className="px-2 sm:px-4 py-1 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex -space-x-1">
                    <span className="inline-flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-blue-600 ring-2 ring-white">
                      <svg
                        className="h-2 w-2 sm:h-3 sm:w-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d={postIndex === 1
                          ? "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                          : "M5 12h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm7-7a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1z"}
                        />
                      </svg>
                    </span>
                    <span className="inline-flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-red-500 ring-2 ring-white">
                      <svg
                        className="h-2 w-2 sm:h-3 sm:w-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
