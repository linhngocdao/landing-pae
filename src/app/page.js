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
            {/* Reactions */}
            <div className="px-2 sm:px-4 py-1 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex -space-x-1">
                    <span className="inline-flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-blue-600 ring-2 ring-white">
                      <svg className="h-2 w-2 sm:h-3 sm:w-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </span>
                    <span className="inline-flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-red-500 ring-2 ring-white">
                      <svg className="h-2 w-2 sm:h-3 sm:w-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">59K</span>
                </div>
                <div className="flex gap-2 text-gray-500 text-xs">
                  <span>46 bình luận</span>
                  <span>12 lượt chia sẻ</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex h-6 sm:h-8 mb-4 [&>button]:basis-1/3 [&>button]:flex [&>button]:gap-1 sm:[&>button]:gap-1.5 [&>button]:items-center [&>button]:justify-center [&>button]:rounded-lg [&>button]:transition-[background] text-xs sm:text-sm font-semibold text-zinc-600">
              <button className="hover:bg-zinc-200">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="16" width="16" className="sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"></path>
                </svg>
                <span className="hidden xs:inline">Thích</span>
              </button>
              <button className="hover:bg-zinc-200">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="16" width="16" className="sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path>
                </svg>
                <span className="hidden xs:inline">Bình luận</span>
              </button>
              <button className="hover:bg-zinc-200">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="16" width="16" className="sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 7.05V4a1 1 0 0 0-1-1 1 1 0 0 0-.7.29l-7 7a1 1 0 0 0 0 1.42l7 7A1 1 0 0 0 11 18v-3.1h.85a10.89 10.89 0 0 1 8.36 3.72 1 1 0 0 0 1.11.35A1 1 0 0 0 22 18c0-9.12-8.08-10.68-11-10.95zm.85 5.83a14.74 14.74 0 0 0-2 .13A1 1 0 0 0 9 14v1.59L4.42 11 9 6.41V8a1 1 0 0 0 1 1c.91 0 8.11.2 9.67 6.43a13.07 13.07 0 0 0-7.82-2.55z"></path>
                </svg>
                <span className="hidden xs:inline">Chia sẻ</span>
              </button>
            </div>

            {/* Comment input */}
            <div className="flex gap-2 items-center">
              <div className="relative w-6 h-6 sm:w-8 sm:h-8">
                <Image
                  src="https://demo-dashboard-taupe.vercel.app/logo2.png"
                  alt="Avatar"
                  fill
                  sizes="(max-width: 640px) 1.5rem, 2rem"
                  className="rounded-full"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="relative h-6 sm:h-8 flex-1">
                <input
                  placeholder="Viết bình luận..."
                  className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full w-full bg-zinc-200 text-xs absolute inset-0"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-zinc-300 p-0.5 sm:p-1 rounded-full transition-[background]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-zinc-600"
                    height="14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                    <path d="M14.829 14.828a4.055 4.055 0 0 1-1.272.858 4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62 5.963 5.963 0 0 0 2.148.903 6.042 6.042 0 0 0 2.415 0 5.972 5.972 0 0 0 2.148-.903c.313-.212.612-.458.886-.731.272-.271.52-.571.734-.889l-1.658-1.119a4.017 4.017 0 0 1-.489.592z"></path>
                    <circle cx="8.5" cy="10.5" r="1.5"></circle>
                    <circle cx="15.493" cy="10.493" r="1.493"></circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
