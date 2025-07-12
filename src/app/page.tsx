// main page

import { ButtonCm } from "@/components/common/buttonCm";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* feature logo */}
      <div className="w-full relative">
        <Image
          src="/featured-banner.jpg"
          alt="feature-img"
          width={1920}
          height={500}
          style={{
            borderRadius: "15px",
          }}
          layout="responsive"
          priority
        />
      </div>

      <div className="flex flex-row justify-center items-start gap-10 mt-22">
        <div className="flex flex-col flex-1/2 justify-end mt-10">
          <div className="flex flex-row justify-end me-12">
            <Image
              src="/sira-logo.png"
              alt="banner-logo"
              width={120}
              height={40}
            />
            <h1 className="text-blue-950 font-bold text-3xl ms-5">
              SƠN CHỐNG THẤM SIRA
            </h1>
          </div>

          <div className="flex justify-end mt-8">
            <p className="text-gray-400 text-xl font-medium w-[62%] text-justify leading-8">
              Sơn chống thấm SIRA là thương hiệu dẫn đầu về công nghệ chống thấm
              tại thị trường Việt Nam: tính tiện lợi, dễ sử dụng, an toàn và độ
              bền lên đến 20 năm. Cung cấp các sản phẩm sơn chống thấm chất
              lượng cho từng loại bề mặt, được người tiêu dùng tin tưởng và lựa
              chọn.
            </p>
          </div>

          <div className="flex justify-end mt-5">
            <p className="text-gray-400 text-xl font-medium w-[62%] text-justify leading-8">
              Sơn chống thấm SIRA là lựa chọn hàng đầu để bảo vệ mọi công trình
              khỏi tác động của nước và độ ẩm. Với công thức tiên tiến, chất
              lượng vượt trội, Sơn chống thấm SIRA giúp kéo dài tuổi thọ công
              trình hiệu quả và bền vững.
            </p>
          </div>

          <div className="flex justify-center-safe mt-8">
            <ButtonCm classCSS="text-xl text-white bg-blue-950 w-48 h-12 rounded-full me-4">
              XEM THÊM <ChevronsRight className="mt-1" />
            </ButtonCm>
          </div>
        </div>

        <div className="flex flex-1/2 justify-start">
          <div className="flex flex-row justify-center-safe">
            <Image
              src="/son-chong-tham-sira.jpg"
              alt="son-chong-tham-sira-logo"
              style={{
                borderRadius: "20px",
              }}
              width={550}
              height={900}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
