// "use client";
// import { useEffect, useState } from "react";

// export default function FlipCardComponent({ items = [] }) {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Thiết lập hiệu ứng xuất hiện sau khi component được mount
//     const timeout = setTimeout(() => {
//       setIsVisible(true);
//     }, 100);

//     return () => clearTimeout(timeout);
//   }, []);

//   const defaultItems = [
//     {
//       name: "Gói 100 Tym",
//       price: "99.000",
//       features: [
//         "Loại Global",
//         "Chất Lượng Cao",
//         "Tốc Độ Nhanh",
//         "Tăng 1 Lần Dùng Cả Đời",
//         "Bảo Hành Trọn Đời"
//       ]
//     },
//     {
//       name: "Gói 500 Tym",
//       price: "249.000",
//       features: [
//         "Loại Global",
//         "Chất Lượng Cao",
//         "Tốc Độ Nhanh",
//         "Tăng 1 Lần Dùng Cả Đời",
//         "Bảo Hành Trọn Đời"
//       ]
//     },
//     {
//       name: "Gói 1.000 Tym",
//       price: "499.000",
//       features: [
//         "Loại Global",
//         "Chất Lượng Cao",
//         "Tốc Độ Nhanh",
//         "Tăng 1 Lần Dùng Cả Đời",
//         "Bảo Hành Trọn Đời"
//       ]
//     }
//   ];

//   const displayItems = items.length > 0 ? items : defaultItems;

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-auto h-full w-full max-w-7xl px-4 py-6">
//       {displayItems.map((item, index) => (
//         <div
//           key={index}
//           className={`react-card-flip w-full max-w-xs mx-auto md:h-[44rem] max-h-screen transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//           style={{
//             perspective: "1000px",
//             zIndex: "auto",
//             transitionDelay: `${index * 200}ms`
//           }}
//         >
//           <div
//             className="react-card-flipper"
//             style={{ height: "100%", position: "relative", width: "100%" }}
//           >
//             <div
//               className="react-card-front"
//               style={{
//                 backfaceVisibility: "hidden",
//                 height: "100%",
//                 left: "0px",
//                 position: "absolute",
//                 top: "0px",
//                 transform: "rotateY(180deg)",
//                 transformStyle: "preserve-3d",
//                 transition: "0.6s",
//                 width: "100%",
//                 zIndex: 2
//               }}
//             >
//               <div className="h-full bg-zinc-100 w-full rounded-2xl"></div>
//             </div>
//             <div
//               className="react-card-back"
//               style={{
//                 backfaceVisibility: "hidden",
//                 height: "100%",
//                 left: "0px",
//                 position: "relative",
//                 top: "0px",
//                 transform: "rotateY(0deg)",
//                 transformStyle: "preserve-3d",
//                 transition: "0.6s",
//                 width: "100%"
//               }}
//             >
//               <div className="group flex flex-col p-4 text-center h-full w-full border-2 border-white rounded-2xl shadow-2xl">
//                 <div className="w-33 h-33 mx-auto mb-4 p-1 relative">
//                   <div className="group-hover:rotate-90 transition-transform duration-500 rounded-full border-4 border-orange-300 w-[8.5rem] h-[8.5rem] absolute left-1/2 -translate-x-1/2">
//                     <div className="absolute w-5 h-5 rounded-full top-1 left-1 bg-gradient-to-tl from-orange-500 to-orange-400"></div>
//                     <div className="absolute w-7 h-7 rounded-full bottom-1 right-1 bg-gradient-to-tl from-orange-400 to-orange-300"></div>
//                   </div>
//                   <div className="flex bg-gradient-to-tl m-2 from-orange-500 to-orange-300 rounded-full items-center justify-center w-[7.5rem] h-[7.5rem] text-white mx-auto">
//                     <p className="text-[1rem] font-bold">{item.price}</p>
//                     <sup className="text-[0.5rem] font-semibold ml-1 -top-2">VNĐ</sup>
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-bold text-center">{item.name}</h3>
//                 <ol className="list-none flex flex-col gap-4 h-full my-4 flex-1 text-[1rem] text-zinc-600 justify-evenly">
//                   {item.features && item.features.map((feature, featureIndex) => (
//                     <li
//                       key={featureIndex}
//                       className="relative transition-all duration-500 ease-in-out"
//                       style={{
//                         transitionDelay: isVisible ? `${(index * 100) + (featureIndex * 100) + 300}ms` : '0ms',
//                         opacity: isVisible ? 1 : 0,
//                         transform: isVisible ? 'translateX(0)' : 'translateX(20px)'
//                       }}
//                     >
//                       <svg
//                         stroke="currentColor"
//                         fill="currentColor"
//                         strokeWidth="0"
//                         viewBox="0 0 24 24"
//                         className="text-orange-500 absolute left-0"
//                         height="24"
//                         width="24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
//                       </svg>
//                       <div className="ml-6">
//                         <p>{feature}</p>
//                       </div>
//                     </li>
//                   ))}
//                 </ol>
//                 <a
//                   className="transition-all duration-500 hover:text-orange-400 hover:bg-none border-orange-400 border-2 bg-gradient-to-tl from-orange-500 to-orange-300 rounded-xl px-4 py-2 text-white font-bold text-md"
//                   href={item.contactLink || "https://www.messenger.com/t/106313722503403"}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{
//                     transitionDelay: `${(index * 100) + 800}ms`,
//                     opacity: isVisible ? 1 : 0,
//                     transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
//                   }}
//                 >
//                   Liên hệ tư vấn
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


"use client";
import { useEffect, useState } from "react";

export default function FlipCardComponent({ items = [] }) {
  const [animationState, setAnimationState] = useState(0); // 0: chưa bắt đầu, 1: đang hiện, 2: hoàn thành

  useEffect(() => {
    // Kích hoạt hiệu ứng theo tuần tự sau khi component được mount
    const initialTimeout = setTimeout(() => {
      setAnimationState(1); // Bắt đầu animation

      // Chuyển sang trạng thái hoàn thành sau khi tất cả animation kết thúc
      const completeTimeout = setTimeout(() => {
        setAnimationState(2);
      }, 2500);

      return () => clearTimeout(completeTimeout);
    }, 300);

    return () => clearTimeout(initialTimeout);
  }, []);

  const defaultItems = [
    {
      name: "Gói 100 Tym",
      price: "99.000",
      features: [
        "Loại Global",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời"
      ]
    },
    {
      name: "Gói 500 Tym",
      price: "249.000",
      features: [
        "Loại Global",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời"
      ]
    },
    {
      name: "Gói 1.000 Tym",
      price: "499.000",
      features: [
        "Loại Global",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời"
      ]
    }
  ];

  const displayItems = items.length > 0 ? items : defaultItems;

  // Xác định màu gradient theo index
  const getGradientColors = (index) => {
    const gradients = [
      { from: "from-orange-500", to: "to-orange-300", border: "border-orange-300" },
    ];

    return gradients[index % gradients.length];
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-auto h-full w-full max-w-7xl px-4 py-6 overflow-hidden">
      {displayItems.map((item, index) => {
        const gradientColors = getGradientColors(index);

        return (
          <div
            key={index}
            className={`react-card-flip w-full max-w-xs mx-auto md:h-[44rem] max-h-screen transition-all duration-1000 ease-out
                        ${animationState >= 1 ? 'opacity-100' : 'opacity-0'}
                        ${animationState >= 1 ? 'scale-100' : 'scale-90'}`}
            style={{
              perspective: "1000px",
              zIndex: "auto",
              transitionDelay: `${index * 200}ms`,
              transformOrigin: "center center"
            }}
          >
            <div
              className="react-card-flipper"
              style={{
                height: "100%",
                position: "relative",
                width: "100%",
                transform: animationState >= 1 ? `rotateY(${360}deg)` : "rotateY(0deg)",
                transition: "transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transitionDelay: `${index * 200 + 300}ms`,
                transformStyle: "preserve-3d"
              }}
            >
              <div
                className="react-card-front"
                style={{
                  backfaceVisibility: "hidden",
                  height: "100%",
                  left: "0px",
                  position: "absolute",
                  top: "0px",
                  transform: "rotateY(180deg)",
                  transformStyle: "preserve-3d",
                  transition: "0.6s",
                  width: "100%",
                  zIndex: 2
                }}
              >
                <div className={`h-full bg-zinc-100 w-full rounded-2xl shadow-lg`}></div>
              </div>
              <div
                className="react-card-back"
                style={{
                  backfaceVisibility: "hidden",
                  height: "100%",
                  left: "0px",
                  position: "relative",
                  top: "0px",
                  transform: "rotateY(0deg)",
                  transformStyle: "preserve-3d",
                  transition: "0.6s",
                  width: "100%"
                }}
              >
                <div className={`group flex flex-col p-4 text-center h-full w-full border-2 border-white rounded-2xl shadow-2xl bg-gradient-to-br from-white to-gray-50`}>
                  <div className="w-33 h-33 mx-auto mb-4 p-1 relative">
                    <div
                      className={`group-hover:rotate-90 transition-transform duration-500 rounded-full border-4 ${gradientColors.border} w-[8.5rem] h-[8.5rem] absolute left-1/2 -translate-x-1/2 ${animationState >= 1 ? 'animate-wheel-spin' : ''}`}
                    >
                      <div className={`absolute w-5 h-5 rounded-full top-1 left-1 bg-gradient-to-tl ${gradientColors.from} ${gradientColors.to}`}></div>
                      <div className={`absolute w-7 h-7 rounded-full bottom-1 right-1 bg-gradient-to-tl ${gradientColors.from} ${gradientColors.to}`}></div>
                    </div>
                    <div
                      className={`flex bg-gradient-to-tl m-2 ${gradientColors.from} ${gradientColors.to} rounded-full items-center justify-center w-[7.5rem] h-[7.5rem] text-white mx-auto ${animationState >= 2 ? 'animate-pulse-subtle' : ''}`}
                    >
                      <p
                        className="text-[1rem] font-bold transform transition-all duration-700"
                        style={{
                          opacity: animationState >= 1 ? 1 : 0,
                          transform: animationState >= 1 ? 'scale(1)' : 'scale(0.7)',
                          transitionDelay: `${index * 200 + 800}ms`
                        }}
                      >
                        {item.price}
                      </p>
                      <sup
                        className="text-[0.5rem] font-semibold ml-1 -top-2"
                        style={{
                          opacity: animationState >= 1 ? 1 : 0,
                          transitionDelay: `${index * 200 + 900}ms`,
                          transition: "opacity 0.5s ease-out"
                        }}
                      >
                        VNĐ
                      </sup>
                    </div>
                  </div>
                  <h3
                    className="text-xl font-bold text-center transform transition-all duration-700"
                    style={{
                      opacity: animationState >= 1 ? 1 : 0,
                      transform: animationState >= 1 ? 'translateY(0)' : 'translateY(20px)',
                      transitionDelay: `${index * 200 + 1000}ms`
                    }}
                  >
                    {item.name}
                  </h3>
                  <ol className="list-none flex flex-col gap-4 h-full my-4 flex-1 text-[17px] font-medium text-zinc-600 justify-evenly">
                    {item.features && item.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="relative"
                        style={{
                          opacity: animationState >= 1 ? 1 : 0,
                          transform: animationState >= 1 ? 'translateX(0)' : 'translateX(30px)',
                          transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
                          transitionDelay: `${index * 100 + featureIndex * 150 + 1200}ms`
                        }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          className={`text-${gradientColors.from.split('-')[1]} absolute left-0`}
                          height="24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
                        </svg>
                        <div className="ml-6">
                          <p>{feature}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <a
                    className={`transition-all duration-500 hover:text-white hover:shadow-lg border-2 bg-gradient-to-br ${gradientColors.from} ${gradientColors.to} rounded-xl px-4 py-2 text-white font-bold text-md transform`}
                    href={item.contactLink || "https://www.messenger.com/t/106313722503403"}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      opacity: animationState >= 1 ? 1 : 0,
                      transform: animationState >= 1 ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                      transition: "all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      transitionDelay: `${index * 200 + 1800}ms`,
                      borderColor: `var(--${gradientColors.border.split('-')[1]})`
                    }}
                  >
                    Liên hệ tư vấn
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
