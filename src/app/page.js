import Image from 'next/image';

export default function Home() {
  return (
    <div className="mx-2 md:mx-10 min-h-screen font-inter  ">
      <div className="max-w-full  mx-auto border-white w-full shadow-2xl rounded-xl border-2 p-5">
        <div className="flex gap-4 flex-col md:flex-row">
          {/* section1 */}
          <div className="grid sm:grid-cols-1 2xl:grid-cols-2 gap-4 flex-1">
            {/* card1 */}
            <div className="inline-flex border-white w-full shadow-2xl rounded-xl px-4 py-2 border-2 gap-4">
              <div className="self-center">
                <span className="text-2xl font-bold">13,000+</span>
                <p className="font-medium text-lg">Khách hàng</p>
              </div>
              <div className="bg-zinc-500 inline-block w-0.5 rounded"></div>
              <h2 className="text-xl font-bold self-center">Tăng Follow</h2>
            </div>
            {/* card2 */}
            <div className="inline-flex border-white w-full shadow-2xl rounded-xl px-4 py-2 border-2 gap-4">
              <div className="self-center">
                <span className="text-2xl font-bold">8,500+</span>
                <p className="font-medium text-lg">Khách hàng</p>
              </div>
              <div className="bg-zinc-500 inline-block w-0.5 rounded"></div>
              <h2 className="text-xl font-bold self-center">Dùng Seeding</h2>
            </div>
            {/* card3 */}
            <div className="inline-flex border-white w-full shadow-2xl rounded-xl px-4 py-2 border-2 gap-4">
              <div className="self-center">
                <span className="text-2xl font-bold">5,800+</span>
                <p className="font-medium text-lg">Khách hàng</p>
              </div>
              <div className="bg-zinc-500 inline-block w-0.5 rounded"></div>
              <h2 className="text-xl font-bold self-center">Mua Fanpage, Group, TikTok</h2>
            </div>

            {/* card 4 */}
            <div className="inline-flex border-white w-full shadow-2xl rounded-xl px-4 py-2 border-2 gap-4">
              <div className="self-center">
                <span className="text-2xl font-bold">97%</span>
                <p className="font-medium text-lg">Khách hàng</p>
              </div>
              <div className="bg-zinc-500 inline-block w-0.5 rounded"></div>
              <h2 className="text-xl font-bold self-center">Hài lòng dịch vụ của TAB</h2>
            </div>
          </div>
          {/* section2 */}
          <div className="border-white shadow-2xl rounded-xl px-4 py-2 border-2 gap-4 h-max">
            <h1 className="text-xl font-bold">Fanpage hỗ trợ</h1>
            <div className="h-[0.75px] w-full mx-auto bg-zinc-300 my-2"></div>
            <div className="flex gap-4 items-center">
              <img src="https://demo-dashboard-taupe.vercel.app/logo2.png" className="w-16" alt="TAB Media" />
              <div className="flex-1">
                <h3 className="font-bold text-[16px] mb-2">TAB Media</h3>
                <a
                  href="https://www.facebook.com/messages/t/106313722503403"
                  target="_blank"
                  className="justify-center bg-blue-200 px-4 py-1 font-medium text-sm rounded-lg flex gap-2 items-center hover:bg-blue-300 active:bg-blue-400 transition-[background]"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    role="img"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title></title>
                    <path d="M.001 11.639C.001 4.949 5.241 0 12.001 0S24 4.95 24 11.639c0 6.689-5.24 11.638-12 11.638-1.21 0-2.38-.16-3.47-.46a.96.96 0 00-.64.05l-2.39 1.05a.96.96 0 01-1.35-.85l-.07-2.14a.97.97 0 00-.32-.68A11.39 11.389 0 01.002 11.64zm8.32-2.19l-3.52 5.6c-.35.53.32 1.139.82.75l3.79-2.87c.26-.2.6-.2.87 0l2.8 2.1c.84.63 2.04.4 2.6-.48l3.52-5.6c.35-.53-.32-1.13-.82-.75l-3.79 2.87c-.25.2-.6.2-.86 0l-2.8-2.1a1.8 1.8 0 00-2.61.48z"></path>
                  </svg>
                  <p>Nhắn tin</p>
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Post section */}
        <div className="mt-6 flex flex-col max-w-[70vw] min-w-full mx-auto border-2 border-white rounded-2xl shadow-2xl px-8 py-4">
          {/* Post header */}
          <div className="p-4">
            <div className="flex items-start">
              <img
                src="https://demo-dashboard-taupe.vercel.app/logo2.png"
                alt="TAB Media"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <div className="flex items-center">
                  <h4 className="text-sm font-semibold text-blue-600">TAB Media</h4>
                </div>
                <p className="text-xs text-gray-500">20 tháng 6 lúc 17:03</p>
              </div>
              <div className="ml-auto">
                <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>


          {/* Post content */}
          <div className="px-4 pb-3">
            <p className="text-[17px]">
              Điểm tích lũy được tạo ra nhằm tri ân những quý khách hàng đã luôn ủng hộ TAB Media ^^ Khi sử dụng bất kì dịch vụ nào khách hàng cũng sẽ nhận được điểm tích lũy được note ở phần cuối mỗi dịch vụ. Khi đã đủ 10.000 điểm tích lũy quý khách hãy liên hệ trực tiếp cho Fanpage hỗ trợ hoặc Zalo : 0369.264.999 để nhận thưởng. Trân thành cảm ơn!
            </p>

            <div className="mt-3">
              <img
                src="https://demo-dashboard-taupe.vercel.app/trian.png"
                alt="BUY 1 GET 1 Promotion"
                className="w-full rounded-md"
              />
            </div>
          </div>

          {/* Reactions */}
          <div className="px-4 py-1 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex -space-x-1">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 ring-2 ring-white">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </span>
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 ring-2 ring-white">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 24 24">
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
          <div className="flex h-8 mb-4 [&>button]:basis-1/3 [&>button]:flex [&>button]:gap-1.5 [&>button]:items-center [&>button]:justify-center [&>button]:rounded-lg [&>button]:transition-[background] text-sm font-semibold text-zinc-600">
            <button className="hover:bg-zinc-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"></path>
              </svg>
              Thích
            </button>
            <button className="hover:bg-zinc-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path>
              </svg>
              Bình luận
            </button>
            <button className="hover:bg-zinc-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 7.05V4a1 1 0 0 0-1-1 1 1 0 0 0-.7.29l-7 7a1 1 0 0 0 0 1.42l7 7A1 1 0 0 0 11 18v-3.1h.85a10.89 10.89 0 0 1 8.36 3.72 1 1 0 0 0 1.11.35A1 1 0 0 0 22 18c0-9.12-8.08-10.68-11-10.95zm.85 5.83a14.74 14.74 0 0 0-2 .13A1 1 0 0 0 9 14v1.59L4.42 11 9 6.41V8a1 1 0 0 0 1 1c.91 0 8.11.2 9.67 6.43a13.07 13.07 0 0 0-7.82-2.55z"></path>
              </svg>
              Chia sẻ
            </button>
          </div>

          {/* Comment input */}
          <div className="flex gap-2 items-center">
            <img src="https://demo-dashboard-taupe.vercel.app/logo2.png" alt="Avatar" className="w-8 h-8 rounded-full" />
            <div className="relative h-8 flex-1">
              <input
                placeholder="Viết bình luận..."
                className="px-4 py-1.5 rounded-full w-full bg-zinc-200 text-xs absolute inset-0"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-zinc-300 p-1 rounded-full transition-[background]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-zinc-600"
                  height="18"
                  width="18"
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

        <div className="mt-6 flex flex-col max-w-[70vw] min-w-full mx-auto border-2 border-white rounded-2xl shadow-2xl px-8 py-4">
          {/* Post header */}
          <div className="p-4">
            <div className="flex items-start">
              <img
                src="https://demo-dashboard-taupe.vercel.app/logo2.png"
                alt="TAB Media"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <div className="flex items-center">
                  <h4 className="text-sm font-semibold text-blue-600">TAB Media</h4>
                </div>
                <p className="text-xs text-gray-500">20 tháng 6 lúc 17:03</p>
              </div>
              <div className="ml-auto">
                <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>


          {/* Post content */}
          <div className="px-4 pb-3">
            <p className="text-[17px]">
              Có thể bạn chưa biết?
              Khi mua Follow Fanpage của TAB Media thì không đơn thuần chỉ nhận được Follow mà nhận được cả Like đi kèm không khác là bao so với việc mua 1 mà được 2 nên quý khách hàng tranh thủ nhé ạ ^^
            </p>

            <div className="mt-3">
              <img
                src="https://demo-dashboard-taupe.vercel.app/mua1tang1.png"
                alt="BUY 1 GET 1 Promotion"
                className="w-full rounded-md"
              />
            </div>
          </div>

          {/* Reactions */}
          <div className="px-4 py-1 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex -space-x-1">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 ring-2 ring-white">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 12h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm7-7a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1z" />
                    </svg>
                  </span>
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 ring-2 ring-white">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 24 24">
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
          <div className="flex h-8 mb-4 [&>button]:basis-1/3 [&>button]:flex [&>button]:gap-1.5 [&>button]:items-center [&>button]:justify-center [&>button]:rounded-lg [&>button]:transition-[background] text-sm font-semibold text-zinc-600">
            <button className="hover:bg-zinc-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"></path>
              </svg>
              Thích
            </button>
            <button className="hover:bg-zinc-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path>
              </svg>
              Bình luận
            </button>
            <button className="hover:bg-zinc-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 7.05V4a1 1 0 0 0-1-1 1 1 0 0 0-.7.29l-7 7a1 1 0 0 0 0 1.42l7 7A1 1 0 0 0 11 18v-3.1h.85a10.89 10.89 0 0 1 8.36 3.72 1 1 0 0 0 1.11.35A1 1 0 0 0 22 18c0-9.12-8.08-10.68-11-10.95zm.85 5.83a14.74 14.74 0 0 0-2 .13A1 1 0 0 0 9 14v1.59L4.42 11 9 6.41V8a1 1 0 0 0 1 1c.91 0 8.11.2 9.67 6.43a13.07 13.07 0 0 0-7.82-2.55z"></path>
              </svg>
              Chia sẻ
            </button>
          </div>

          {/* Comment input */}
          <div className="flex gap-2 items-center">
            <img src="https://demo-dashboard-taupe.vercel.app/logo2.png" alt="Avatar" className="w-8 h-8 rounded-full" />
            <div className="relative h-8 flex-1">
              <input
                placeholder="Viết bình luận..."
                className="px-4 py-1.5 rounded-full w-full bg-zinc-200 text-xs absolute inset-0"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-zinc-300 p-1 rounded-full transition-[background]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-zinc-600"
                  height="18"
                  width="18"
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




        {/* Liên hệ & Footer section */}
        <div className="mt-10 p-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative px-6 py-8 md:py-10 z-10">
              <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white"></div>
                <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-white"></div>
              </div>

              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Bạn cần hỗ trợ?</h2>
                <p className="mb-8 max-w-xl mx-auto text-center text-white/90 font-light">
                  Hãy liên hệ với chúng tôi qua Fanpage hoặc Zalo để được tư vấn và hỗ trợ tốt nhất
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="#"
                    className="flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg group"
                  >
                    <span className="w-8 h-8 mr-2 flex items-center justify-center bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1877F2">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </span>
                    Nhắn tin Facebook
                  </a>

                  <a
                    href="#"
                    className="flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg group"
                  >
                    <span className="w-8 h-8 mr-2 flex items-center justify-center bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#0068FF">
                        <path d="M12.49 10.272v3.456h-1.05v-2.904L9.2 13.572l-.48-.816 2.673-1.92h1.097zm5.3 2.736c0-.72-.564-1.096-1.488-1.096-.504 0-.96.136-1.344.36-.264-.2-.384-.424-.384-.704 0-.4.36-.656.888-.656.384 0 .792.136 1.224.472l.672-.84c-.528-.472-1.176-.672-1.896-.672-1.12 0-1.832.576-1.832 1.464 0 .576.248 1.016.752 1.336-.336.224-.568.528-.568.904 0 .464.36.76.936.76.312 0 .616-.096.904-.232.08.504.544.8 1.208.8 1.048 0 1.648-.544 1.648-1.4v-.496h-.72zm-1.096.632c0 .304-.2.464-.504.464-.288 0-.416-.144-.416-.368 0-.328.304-.568.736-.704.12.072.184.176.184.328v.28zM1.164 8.33V15.67c0 2.456 1.992 4.448 4.448 4.448h12.776c2.456 0 4.448-1.992 4.448-4.448V8.33c0-2.456-1.992-4.448-4.448-4.448H5.612c-2.456 0-4.448 1.992-4.448 4.448zm20.143 11.556H2.693c-1.252 0-2.268-1.016-2.268-2.268v-18.68c0-1.252 1.016-2.268 2.268-2.268h18.614c1.252 0 2.268 1.016 2.268 2.268v18.68c0 1.252-1.016 2.268-2.268 2.268z" />
                      </svg>
                    </span>
                    Zalo: 0369.264.999
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
