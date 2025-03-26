// import Image from 'next/image';

// export default function Home() {
//   return (
//     <div className="font-inter bg-zinc-100 p-4">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//         {/* Cột 1-2: Các card thống kê */}
//         <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Card 1 */}
//           <div className="bg-white rounded-lg shadow-md">
//             <div className="flex">
//               <div className="p-4 flex-1">
//                 <div className="text-2xl font-bold">13,000+</div>
//                 <div className="text-gray-500 text-sm">Khách hàng</div>
//               </div>
//               <div className="w-px bg-gray-200 h-full"></div>
//               <div className="p-4 flex items-center justify-center min-w-[160px]">
//                 <div className="text-lg font-medium">Tăng Follow</div>
//               </div>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white rounded-lg shadow-md">
//             <div className="flex">
//               <div className="p-4 flex-1">
//                 <div className="text-2xl font-bold">8,500+</div>
//                 <div className="text-gray-500 text-sm">Khách hàng</div>
//               </div>
//               <div className="w-px bg-gray-200 h-full"></div>
//               <div className="p-4 flex items-center justify-center min-w-[160px]">
//                 <div className="text-lg font-medium">Dùng Seeding</div>
//               </div>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white rounded-lg shadow-md">
//             <div className="flex">
//               <div className="p-4 flex-1">
//                 <div className="text-2xl font-bold">5,800+</div>
//                 <div className="text-gray-500 text-sm">Khách hàng</div>
//               </div>
//               <div className="w-px bg-gray-200 h-full"></div>
//               <div className="p-4 flex items-center justify-center min-w-[160px]">
//                 <div className="text-lg font-medium">Mua Fanpage, Group, TikTok</div>
//               </div>
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div className="bg-white rounded-lg shadow-md">
//             <div className="flex">
//               <div className="p-4 flex-1">
//                 <div className="text-2xl font-bold">97%</div>
//                 <div className="text-gray-500 text-sm">Khách hàng</div>
//               </div>
//               <div className="w-px bg-gray-200 h-full"></div>
//               <div className="p-4 flex items-center justify-center min-w-[160px]">
//                 <div className="text-lg font-medium">Hài lòng dịch vụ của TAB</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Cột 3: Fanpage hỗ trợ */}
//         <div className="bg-white rounded-lg shadow-md p-4">
//           <h2 className="text-xl font-medium mb-2">Fanpage hỗ trợ</h2>
//           <div className="flex items-center justify-between mt-4">
//             <div className="flex items-center">
//               <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-3 p-1">
//                 <img
//                   src="/tab-media-logo.png"
//                   alt="TAB Media"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-blue-600 font-medium">TAB Media</h3>
//               </div>
//             </div>
//             <button className="bg-blue-100 text-blue-600 rounded-full flex items-center gap-2 px-4 py-2 hover:bg-blue-200 transition-colors">
//               <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M0 11.64C0 4.95 5.24 0 12 0s12 4.95 12 11.64c0 6.69-5.24 11.64-12 11.64-1.21 0-2.38-.16-3.47-.46a.96.96 0 00-.64.05l-2.39 1.05a.96.96 0 01-1.35-.85l-.07-2.14a.97.97 0 00-.32-.68A11.39 11.39 0 010 11.64zm8.32-2.19l-3.52 5.6c-.35.53.32 1.14.82.75l3.79-2.87c.26-.2.6-.2.87 0l2.8 2.1c.84.63 2.04.4 2.6-.48l3.52-5.6c.35-.53-.32-1.13-.82-.75l-3.79 2.87c-.25.2-.6.2-.86 0l-2.8-2.1a1.8 1.8 0 00-2.61.48z"></path>
//               </svg>
//               <span className="text-sm font-medium">Nhắn tin</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Post section */}
//       <div className="mt-4 bg-white rounded-lg shadow-md">
//         <div className="p-4">
//           <div className="flex items-start">
//             <div className="mr-3 flex-shrink-0">
//               <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                 <img
//                   src="/tab-media-logo.png"
//                   alt="TAB Media"
//                   className="w-6 h-6 object-contain"
//                 />
//               </div>
//             </div>
//             <div>
//               <div>
//                 <h4 className="text-blue-600 font-medium">TAB Media</h4>
//                 <p className="text-xs text-gray-500">20 tháng 6 lúc 17:03</p>
//               </div>

//               <div className="mt-3 text-sm">
//                 <p>Điểm tích lũy được tạo ra nhằm tri ân những quý khách hàng đã luôn ủng hộ TAB Media ^^ Khi sử dụng bất kì dịch vụ nào khách hàng cũng sẽ nhận được điểm tích lũy được note ở phần cuối mỗi dịch vụ. Khi đã đủ 10.000 điểm tích lũy quý khách hãy liên hệ trực tiếp cho Fanpage hỗ trợ hoặc Zalo : 0369.264.999 để nhận thưởng. Trân thành cảm ơn!</p>
//               </div>

//               <div className="mt-4">
//                 <img
//                   src="https://demo-dashboard-taupe.vercel.app/mua1tang1.png"
//                   alt="BUY 1 GET 1 Promotion"
//                   className="w-[50%] flex justify-center rounded-md"
//                 />
//               </div>

//               {/* Like counts */}
//               <div className="mt-3 flex items-center">
//                 <div className="flex -space-x-1">
//                   <span className="inline-block h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center">
//                     <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"></path>
//                     </svg>
//                   </span>
//                 </div>
//                 <span className="text-xs text-gray-500 ml-2">59K</span>
//               </div>

//               {/* Action buttons */}
//               <div className="mt-1 flex justify-between border-t border-b py-1 border-gray-100">
//                 <button className="flex items-center text-gray-500 px-2 py-1">
//                   <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"></path>
//                   </svg>
//                   <span className="text-sm">Thích</span>
//                 </button>
//                 <button className="flex items-center text-gray-500 px-2 py-1">
//                   <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path>
//                   </svg>
//                   <span className="text-sm">Bình luận</span>
//                 </button>
//                 <button className="flex items-center text-gray-500 px-2 py-1">
//                   <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M11 7.05V4a1 1 0 0 0-1-1 1 1 0 0 0-.7.29l-7 7a1 1 0 0 0 0 1.42l7 7A1 1 0 0 0 11 18v-3.1h.85a10.89 10.89 0 0 1 8.36 3.72 1 1 0 0 0 1.11.35A1 1 0 0 0 22 18c0-9.12-8.08-10.68-11-10.95zm.85 5.83a14.74 14.74 0 0 0-2 .13A1 1 0 0 0 9 14v1.59L4.42 11 9 6.41V8a1 1 0 0 0 1 1c.91 0 8.11.2 9.67 6.43a13.07 13.07 0 0 0-7.82-2.55z"></path>
//                   </svg>
//                   <span className="text-sm">Chia sẻ</span>
//                 </button>
//               </div>

//               {/* Comment input */}
//               <div className="mt-3 flex items-center">
//                 <div className="mr-2 flex-shrink-0">
//                   <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
//                 </div>
//                 <div className="flex-1 relative">
//                   <input
//                     type="text"
//                     placeholder="Viết bình luận..."
//                     className="w-full rounded-full bg-gray-100 py-1.5 px-3 text-sm focus:outline-none"
//                   />
//                   <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
//                     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
//                       <path d="M14.829 14.828a4.055 4.055 0 0 1-1.272.858 4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62 5.963 5.963 0 0 0 2.148.903 6.042 6.042 0 0 0 2.415 0 5.972 5.972 0 0 0 2.148-.903c.313-.212.612-.458.886-.731.272-.271.52-.571.734-.889l-1.658-1.119a4.017 4.017 0 0 1-.489.592z"></path>
//                       <circle cx="8.5" cy="10.5" r="1.5"></circle>
//                       <circle cx="15.493" cy="10.493" r="1.493"></circle>
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen font-inter p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Thống kê cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1 transition-transform">
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

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1 transition-transform">
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

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1 transition-transform">
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

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1 transition-transform">
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

          {/* Fanpage hỗ trợ */}
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
        <div className="mt-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/tab-media-logo.png" alt="TAB Media" className="w-8 h-8 object-contain" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-baseline">
                  <h4 className="text-blue-600 font-semibold text-lg">TAB Media</h4>
                  <span className="ml-2 text-xs text-gray-500">20 tháng 6 lúc 17:03</span>
                </div>

                <div className="mt-3 text-gray-700">
                  <p>Điểm tích lũy được tạo ra nhằm tri ân những quý khách hàng đã luôn ủng hộ TAB Media ^^ Khi sử dụng bất kì dịch vụ nào khách hàng cũng sẽ nhận được điểm tích lũy được note ở phần cuối mỗi dịch vụ. Khi đã đủ 10.000 điểm tích lũy quý khách hãy liên hệ trực tiếp cho Fanpage hỗ trợ hoặc Zalo: 0369.264.999 để nhận thưởng. Trân thành cảm ơn!</p>
                </div>

                <div className="mt-4 overflow-hidden rounded-xl">
                  <img
                    src="/buy1get1.png"
                    alt="BUY 1 GET 1 Promotion"
                    className="w-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Reactions */}
                <div className="mt-4">
                  <div className="flex items-center">
                    <div className="flex -space-x-1">
                      <span className="inline-block h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center ring-2 ring-white">
                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z" />
                        </svg>
                      </span>
                      <span className="inline-block h-6 w-6 rounded-full bg-red-500 flex items-center justify-center ring-2 ring-white">
                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z" />
                        </svg>
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">59K người</span>
                  </div>

                  {/* Action buttons */}
                  <div className="mt-2 flex justify-between border-t border-b py-2 border-gray-100">
                    <button className="flex items-center text-gray-600 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z" />
                      </svg>
                      <span className="font-medium">Thích</span>
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z" />
                      </svg>
                      <span className="font-medium">Bình luận</span>
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11 7.05V4a1 1 0 0 0-1-1 1 1 0 0 0-.7.29l-7 7a1 1 0 0 0 0 1.42l7 7A1 1 0 0 0 11 18v-3.1h.85a10.89 10.89 0 0 1 8.36 3.72 1 1 0 0 0 1.11.35A1 1 0 0 0 22 18c0-9.12-8.08-10.68-11-10.95zm.85 5.83a14.74 14.74 0 0 0-2 .13A1 1 0 0 0 9 14v1.59L4.42 11 9 6.41V8a1 1 0 0 0 1 1c.91 0 8.11.2 9.67 6.43a13.07 13.07 0 0 0-7.82-2.55z" />
                      </svg>
                      <span className="font-medium">Chia sẻ</span>
                    </button>
                  </div>

                  {/* Comment input */}
                  <div className="mt-4 flex items-center">
                    <div className="mr-3 flex-shrink-0">
                      <div className="w-10 h-10 bg-gray-100 rounded-full overflow-hidden">
                        <img src="/avatar-default.png" alt="Avatar" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        placeholder="Viết bình luận..."
                        className="w-full rounded-full bg-gray-100 py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
                        <button className="text-gray-400 hover:text-blue-500 transition-colors">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                            <path d="M14.829 14.828a4.055 4.055 0 0 1-1.272.858 4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62 5.963 5.963 0 0 0 2.148.903 6.042 6.042 0 0 0 2.415 0 5.972 5.972 0 0 0 2.148-.903c.313-.212.612-.458.886-.731.272-.271.52-.571.734-.889l-1.658-1.119a4.017 4.017 0 0 1-.489.592z" />
                            <circle cx="8.5" cy="10.5" r="1.5" />
                            <circle cx="15.493" cy="10.493" r="1.493" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second post with buy1get1 promotion - Khuyến mãi chính */}
        <div className="mt-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/tab-media-logo.png" alt="TAB Media" className="w-8 h-8 object-contain" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-baseline">
                  <h4 className="text-blue-600 font-semibold text-lg">TAB Media</h4>
                  <span className="ml-2 text-xs text-gray-500">20 tháng 6 lúc 17:03</span>
                </div>

                <div className="mt-3 text-gray-700">
                  <p className="font-medium text-lg">Có thể bạn chưa biết?</p>
                  <p className="mt-2">Khi mua Follow Fanpage của TAB Media thì không đơn thuần chỉ nhận được Follow mà nhận được cả Like đi kèm không khác là bao so với việc mua 1 mà được 2 nên quý khách hàng tranh thủ nhé ạ ^^</p>
                </div>

                <div className="mt-4 overflow-hidden rounded-xl bg-gradient-to-r from-blue-900 to-indigo-900 p-1">
                  <img
                    src="/buy1get1.png"
                    alt="BUY 1 GET 1 Promotion"
                    className="w-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Call to Action */}
                <div className="mt-4 flex justify-center">
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11 6.914V2.586L6.293 7.293a.999.999 0 0 0 0 1.414L11 13.414v-4.5c3.5 0 6.5 1.324 9 4.5-1-5-4.5-6.5-9-6.5z" />
                      <path d="M11 8.5H2v7h9v-4.5c4 0 7.248 2 9 5 0-5-4-7.5-9-7.5z" />
                    </svg>
                    Đăng ký ngay
                  </a>
                </div>

                {/* Reactions */}
                <div className="mt-4">
                  <div className="flex items-center">
                    <div className="flex -space-x-1">
                      <span className="inline-block h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center ring-2 ring-white">
                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z" />
                        </svg>
                      </span>
                      <span className="inline-block h-6 w-6 rounded-full bg-red-500 flex items-center justify-center ring-2 ring-white">
                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z" />
                        </svg>
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">25K người</span>
                  </div>

                  {/* Action buttons */}
                  <div className="mt-2 flex justify-between border-t border-b py-2 border-gray-100">
                    <button className="flex items-center text-gray-600 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z" />
                      </svg>
                      <span className="font-medium">Thích</span>
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z" />
                      </svg>
                      <span className="font-medium">Bình luận</span>
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11 7.05V4a1 1 0 0 0-1-1 1 1 0 0 0-.7.29l-7 7a1 1 0 0 0 0 1.42l7 7A1 1 0 0 0 11 18v-3.1h.85a10.89 10.89 0 0 1 8.36 3.72 1 1 0 0 0 1.11.35A1 1 0 0 0 22 18c0-9.12-8.08-10.68-11-10.95zm.85 5.83a14.74 14.74 0 0 0-2 .13A1 1 0 0 0 9 14v1.59L4.42 11 9 6.41V8a1 1 0 0 0 1 1c.91 0 8.11.2 9.67 6.43a13.07 13.07 0 0 0-7.82-2.55z" />
                      </svg>
                      <span className="font-medium">Chia sẻ</span>
                    </button>
                  </div>

                  {/* Comment input */}
                  <div className="mt-4 flex items-center">
                    <div className="mr-3 flex-shrink-0">
                      <div className="w-10 h-10 bg-gray-100 rounded-full overflow-hidden">
                        <img src="/avatar-default.png" alt="Avatar" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        placeholder="Viết bình luận..."
                        className="w-full rounded-full bg-gray-100 py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
                        <button className="text-gray-400 hover:text-blue-500 transition-colors">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                            <path d="M14.829 14.828a4.055 4.055 0 0 1-1.272.858 4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62 5.963 5.963 0 0 0 2.148.903 6.042 6.042 0 0 0 2.415 0 5.972 5.972 0 0 0 2.148-.903c.313-.212.612-.458.886-.731.272-.271.52-.571.734-.889l-1.658-1.119a4.017 4.017 0 0 1-.489.592z" />
                            <circle cx="8.5" cy="10.5" r="1.5" />
                            <circle cx="15.493" cy="10.493" r="1.493" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Liên hệ & Footer section */}
        <div className="mt-10 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-8 px-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Bạn cần hỗ trợ?</h2>
            <p className="mb-6 max-w-xl mx-auto">Hãy liên hệ với chúng tôi qua Fanpage hoặc Zalo để được tư vấn và hỗ trợ tốt nhất</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.001 11.639C.001 4.949 5.241 0 12.001 0S24 4.95 24 11.639c0 6.689-5.24 11.638-12 11.638-1.21 0-2.38-.16-3.47-.46a.96.96 0 00-.64.05l-2.39 1.05a.96.96 0 01-1.35-.85l-.07-2.14a.97.97 0 00-.32-.68A11.39 11.389 0 01.002 11.64zm8.32-2.19l-3.52 5.6c-.35.53.32 1.139.82.75l3.79-2.87c.26-.2.6-.2.87 0l2.8 2.1c.84.63 2.04.4 2.6-.48l3.52-5.6c.35-.53-.32-1.13-.82-.75l-3.79 2.87c-.25.2-.6.2-.86 0l-2.8-2.1a1.8 1.8 0 00-2.61.48z" />
                </svg>
                Nhắn tin Facebook
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-6h2v6zm4 0h-2V7h2v9z" />
                </svg>
                Zalo: 0369.264.999
              </a>
            </div>
          </div>

          <div className="mt-8 mb-6 text-gray-600 text-sm">
            <p>© 2023 TAB Media. Tất cả các quyền được bảo lưu.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
