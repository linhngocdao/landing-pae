import Image from 'next/image';

export default function Home() {
  return (
    <div className="mx-2 md:mx-20 min-h-screen font-inter  ">
      <div className="max-w-full  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl duration-300 overflow-hidden transform hover:-translate-y-1 transition-transform">
              <div className="flex h-full">
                <div className="p-5 flex-1">
                  <div className="text-3xl font-bold text-blue-600">13,000+</div>
                  <div className="text-gray-500 text-sm mt-1">Khách hàng</div>
                </div>
                <div className="w-px bg-gray-200 h-full"></div>
                <div className="p-5 flex items-center justify-center w-48 bg-blue-50">
                  <div className="text-lg font-medium text-blue-800">Tăng Follow</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl duration-300 overflow-hidden transform hover:-translate-y-1 transition-transform">
              <div className="flex h-full">
                <div className="p-5 flex-1">
                  <div className="text-3xl font-bold text-blue-600">8,500+</div>
                  <div className="text-gray-500 text-sm mt-1">Khách hàng</div>
                </div>
                <div className="w-px bg-gray-200 h-full"></div>
                <div className="p-5 flex items-center justify-center w-48 bg-blue-50">
                  <div className="text-lg font-medium text-blue-800">Dùng Seeding</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl duration-300 overflow-hidden transform hover:-translate-y-1 transition-transform">
              <div className="flex h-full">
                <div className="p-5 flex-1">
                  <div className="text-3xl font-bold text-blue-600">5,800+</div>
                  <div className="text-gray-500 text-sm mt-1">Khách hàng</div>
                </div>
                <div className="w-px bg-gray-200 h-full"></div>
                <div className="p-5 flex items-center justify-center w-48 bg-blue-50">
                  <div className="text-lg font-medium text-blue-800">Mua Fanpage, Group, TikTok</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl duration-300 overflow-hidden transform hover:-translate-y-1 transition-transform">
              <div className="flex h-full">
                <div className="p-5 flex-1">
                  <div className="text-3xl font-bold text-blue-600">97%</div>
                  <div className="text-gray-500 text-sm mt-1">Khách hàng</div>
                </div>
                <div className="w-px bg-gray-200 h-full"></div>
                <div className="p-5 flex items-center justify-center w-48 bg-blue-50">
                  <div className="text-lg font-medium text-blue-800">Hài lòng dịch vụ của TAB</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Fanpage hỗ trợ</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 overflow-hidden">
                  <img src="/tab-media-logo.png" alt="TAB Media" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <h3 className="text-blue-600 font-medium">TAB Media</h3>
                </div>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center gap-2 px-4 py-2 transition-colors shadow-md hover:shadow-lg">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 11.64C0 4.95 5.24 0 12 0s12 4.95 12 11.64c0 6.69-5.24 11.64-12 11.64-1.21 0-2.38-.16-3.47-.46a.96.96 0 00-.64.05l-2.39 1.05a.96.96 0 01-1.35-.85l-.07-2.14a.97.97 0 00-.32-.68A11.39 11.39 0 010 11.64zm8.32-2.19l-3.52 5.6c-.35.53.32 1.14.82.75l3.79-2.87c.26-.2.6-.2.87 0l2.8 2.1c.84.63 2.04.4 2.6-.48l3.52-5.6c.35-.53-.32-1.13-.82-.75l-3.79 2.87c-.25.2-.6.2-.86 0l-2.8-2.1a1.8 1.8 0 00-2.61.48z" />
                </svg>
                <span className="text-sm font-medium">Nhắn tin</span>
              </button>
            </div>
          </div>
        </div>


        {/* Post section */}
        <div className="mt-3 bg-white rounded-lg shadow overflow-hidden">
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
            <p className="text-[16px]">
              Điểm tích lũy được tạo ra nhằm tri ân những quý khách hàng đã luôn ủng hộ TAB Media ^^ Khi sử dụng bất kì dịch vụ nào khách hàng cũng sẽ nhận được điểm tích lũy được note ở phần cuối mỗi dịch vụ. Khi đã đủ 10.000 điểm tích lũy quý khách hãy liên hệ trực tiếp cho Fanpage hỗ trợ hoặc Zalo: 0369.264.999 để nhận thưởng. Trân thành cảm ơn!
            </p>

            <div className="mt-3">
              <img
                src="https://demo-dashboard-taupe.vercel.app/mua1tang1.png"
                alt="BUY 1 GET 1 Promotion"
                className="w-full rounded-md"
              />
            </div>
          </div>

          {/* Reactions - Giống Facebook */}
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

          {/* Action buttons - Giống Facebook */}
          <div className="flex border-t border-gray-200 ">
            <button className="flex-1 flex items-center cursor-pointer justify-center py-2 text-gray-500 hover:bg-gray-100 text-sm">
              <i
                style={{
                  backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v4/yh/r/uTpIqvVELDZ.png?_nc_eui2=AeFA3V9U7illd-tDg4KmSZrtbkLXyC48hZtuQtfILjyFm9hAKDPiSZOnU_c3CA1d9iktGt9zCheIyFtEPZJbNsHU")',
                  backgroundPosition: '0px -798px',
                  backgroundSize: 'auto',
                  width: '20px',
                  height: '20px',
                  backgroundRepeat: 'no-repeat',
                  display: 'inline-block'
                }}
              />
              Thích
            </button>
            <button className="flex-1 flex items-center cursor-pointer justify-center py-2 text-gray-500 hover:bg-gray-100 text-sm">
              <i
                style={{
                  backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v4/yh/r/uTpIqvVELDZ.png?_nc_eui2=AeFA3V9U7illd-tDg4KmSZrtbkLXyC48hZtuQtfILjyFm9hAKDPiSZOnU_c3CA1d9iktGt9zCheIyFtEPZJbNsHU")',
                  backgroundPosition: '0px -588px',
                  backgroundSize: 'auto',
                  width: '20px',
                  height: '20px',
                  backgroundRepeat: 'no-repeat',
                  display: 'inline-block'
                }}
              ></i>
              Bình luận
            </button>
            <button className="flex-1 flex items-center cursor-pointer justify-center py-2 text-gray-500 hover:bg-gray-100 text-sm">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
              </svg>
              Chia sẻ
            </button>
          </div>

          {/* Comment input - Giống Facebook */}
          <div className="p-3 border-t border-gray-200 flex">
            <img
              src="https://demo-dashboard-taupe.vercel.app/logo2.png"
              alt="Avatar"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Viết bình luận..."
                className="w-full rounded-full bg-gray-100 text-sm px-3 py-1.5 focus:outline-none"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
                <button className="text-gray-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm2-1a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                  </svg>
                </button>
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
