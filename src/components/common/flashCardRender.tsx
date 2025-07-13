"use client";

import { ChevronsLeft, ChevronsRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useRef } from "react";

const ButtonCm = ({
  classCSS,
  children,
}: {
  classCSS: string;
  children: React.ReactNode;
}) => <button className={`rounded-lg ${classCSS}`}>{children}</button>;

interface FlashCardItem {
  imgPath: string;
  header: string;
  description: string;
}

interface FlashCardProps {
  items: FlashCardItem[];
}

export default function FlashCardRender({ items }: FlashCardProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback((direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const firstItem = sliderRef.current.children[0] as HTMLElement;
    if (!firstItem) return;

    // Thêm khoảng cách (gap) vào chiều rộng của item để cuộn chính xác hơn
    const itemWidth = firstItem.offsetWidth;
    const scrollAmount = itemWidth + 24; // 24px là giá trị của space-x-6

    if (direction === "right") {
      if (scrollWidth - scrollLeft - clientWidth < scrollAmount) {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }

    if (direction === "left") {
      if (scrollLeft < 10) {
        sliderRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
      } else {
        sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="w-full to-white py-12">
      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-12 w-12 rounded-full bg-white/60 border border-slate-200/80 shadow-xl backdrop-blur-sm hover:bg-white/80 group transition-all duration-300 ease-in-out focus:outline-none"
          onClick={() => scrollTo("left")}
          aria-label="Scroll Left"
        >
          <ChevronsLeft className="h-7 w-7 text-blue-900 group-hover:-translate-x-1 transition-transform duration-300 ease-in-out" />
        </button>

        <div
          ref={sliderRef}
          className="flex overflow-x-hidden overflow-y-hidden scroll-smooth space-x-6 py-8 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 flex flex-col w-[388px] bg-white rounded-2xl border border-transparent hover:border-blue-500/50 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out p-6 text-center"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative flex justify-center items-center h-60 mb-5">
                <Image
                  src={item.imgPath}
                  alt={item.header}
                  width={260}
                  height={260}
                  className="object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-900 transition-colors duration-300 min-h-[56px] mb-3">
                  {item.header}
                </h3>
                <p className="text-base text-gray-500 flex-grow mb-6">
                  {item.description}
                </p>
                <div className="mt-auto">
                  <ButtonCm classCSS="text-base font-semibold text-white bg-blue-900 bg-gradient-to-r from-blue-700 to-blue-900 hover:shadow-lg hover:shadow-blue-800/20 hover:scale-105 transition-all duration-300 h-12 w-full flex items-center justify-center">
                    Xem chi tiết{" "}
                    <ChevronsRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </ButtonCm>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-12 w-12 rounded-full bg-white/60 border border-slate-200/80 shadow-xl backdrop-blur-sm hover:bg-white/80 group transition-all duration-300 ease-in-out focus:outline-none"
          onClick={() => scrollTo("right")}
          aria-label="Scroll Right"
        >
          <ChevronsRight className="h-7 w-7 text-blue-900 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
        </button>
      </div>
    </div>
  );
}
