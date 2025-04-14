"use client";
import { useEffect, useState } from "react";

export default function FlipCardComponent({ items }) {
  const [animationState, setAnimationState] = useState(0);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setAnimationState(1);

      const completeTimeout = setTimeout(() => {
        setAnimationState(2);
      }, 2500);

      return () => clearTimeout(completeTimeout);
    }, 300);

    return () => clearTimeout(initialTimeout);
  }, []);

  const defaultItems = [
    {
      name: "Gói 1.000 Follow",
      price: "299.000",
      features: [
        "Follow Việt Thật",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời",
        "+1K Điểm Tích Lũy"
      ]
    },
    {
      name: "Gói 5.000 Follow",
      price: "1.499.000",
      features: [
        "Follow Việt Thật",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời",
        "+1.000 Follow",
        "+5K Điểm Tích Lũy"
      ]
    },
    {
      name: "Gói 10.000 Follow",
      price: "2.999.000",
      features: [
        "Follow Việt Thật",
        "Chất Lượng Cao",
        "Tốc Độ Nhanh",
        "Tăng 1 Lần Dùng Cả Đời",
        "Bảo Hành Trọn Đời",
        "Để Xuất Tìm Kiếm",
        "+3.000 Follow",
        "+10K Điểm Tích Lũy"
      ]
    }
  ];

  const displayItems = items.length > 0 ? items : defaultItems;

  const getGradientColors = () => {
    return { from: "from-orange-500", to: "to-orange-300", border: "border-orange-300" };
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 m-auto w-full max-w-7xl px-4 py-6 overflow-hidden h-full items-center justify-center">
      <div className="flex flex-nowrap overflow-x-auto sm:contents w-full snap-x snap-mandatory hide-scrollbar touch-pan-x pb-8 px-2">
        {displayItems.map((item, index) => {
          const gradientColors = getGradientColors();

          return (
            <div
              key={index}
              className={`flex-shrink-0 w-[85%] xs:w-[80%] sm:w-full max-w-[320px] sm:max-w-full first:ml-0 last:mr-0 sm:mx-auto h-[40rem] sm:h-auto md:h-[45rem] transition-all duration-1000 ease-out snap-center
                        ${animationState >= 1 ? 'opacity-100' : 'opacity-0'}
                        ${animationState >= 1 ? 'scale-100' : 'scale-90'}`}
              style={{
                perspective: "1000px",
                zIndex: "auto",
                transitionDelay: `${index * 200}ms`,
                transformOrigin: "center center",
                WebkitOverflowScrolling: "touch"
              }}
            >
              <div
                className="mx-auto"
                style={{
                  height: "100%",
                  position: "relative",
                  width: "85%",
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
                  <div className={`h-full bg-zinc-100 w-full rounded-2xl shadow-2xl`}></div>
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
                  <div className={`group flex flex-col p-4 text-center h-full w-full border-2 border-white rounded-2xl shadow-2xl`}>
                    <div className="w-33 h-33 mx-auto mb-4 p-1 relative">
                      <div
                        className={`group-hover:rotate-90 transition-transform duration-500 rounded-full border-4 ${gradientColors.border} w-[8.5rem] h-[8.5rem] absolute`}
                      >
                        <div className={`absolute w-5 h-5 rounded-full top-1 left-1 bg-gradient-to-tl from-orange-500 to-orange-400`}></div>
                        <div className={`absolute w-7 h-7 rounded-full bottom-1 right-1 bg-gradient-to-tl from-orange-400 to-orange-300`}></div>
                      </div>
                      <div
                        className={`flex bg-gradient-to-tl m-2 from-orange-500 to-orange-300 rounded-full items-center justify-center w-[7.5rem] h-[7.5rem] text-white`}
                      >
                        <p className="text-[1rem] font-bold">{item.price}</p>
                        <sup className="text-[0.5rem] font-semibold ml-1 -top-2">VNĐ</sup>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center">{item.name}</h3>
                    <ol className="list-none flex flex-col gap-4 h-full my-2 md:my-4 flex-1 text-[1rem] text-zinc-600 justify-evenly">
                      {item.features && item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="relative">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            className="text-orange-500 absolute left-0"
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
                      className="transition-all hover:text-orange-400 hover:bg-none border-orange-400 border-2 bg-gradient-to-tl from-orange-500 to-orange-300 rounded-xl px-4 py-2 text-white font-bold text-md"
                      href={item.contactLink || "https://www.messenger.com/t/106313722503403"}
                      target="_blank"
                      rel="noopener noreferrer"
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
    </div>
  );
}
