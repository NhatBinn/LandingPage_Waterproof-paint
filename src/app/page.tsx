// main page
import { ButtonCm } from "@/components/common/buttonCm";
import FlashCardRender from "@/components/common/flashCardRender";
import ItemRender from "@/components/common/itemRender";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import { flashCardItems, ProductItems, ProductItems2 } from "./Constant";

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
          <div className="flex flex-row justify-end text-justify me-12">
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
            <p className="text-gray-400 text-xl font-base w-[62%] text-justify leading-8">
              Sơn chống thấm SIRA là thương hiệu dẫn đầu về công nghệ chống thấm
              tại thị trường Việt Nam: tính tiện lợi, dễ sử dụng, an toàn và độ
              bền lên đến 20 năm. Cung cấp các sản phẩm sơn chống thấm chất
              lượng cho từng loại bề mặt, được người tiêu dùng tin tưởng và lựa
              chọn.
            </p>
          </div>

          <div className="flex justify-end mt-5">
            <p className="text-gray-400 text-xl font-base w-[62%] text-justify leading-8">
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

      {/* gioi thieu son chong tham */}
      <div className="w-full flex justify-center mt-20">
        <div className="w-full max-w-[1280px] text-left">
          <div className="flex items-center">
            <Image
              src="/logo-single-opacity50-75x75px.png"
              alt="son-chong-tham-sira-logo"
              width={50}
              height={100}
            />
            <h1 className="text-blue-950 font-bold text-3xl ms-5">
              SƠN CHỐNG THẤM
            </h1>
          </div>

          <div className="border-t border-gray-300 mt-6"></div>
          {/* item render */}
          <div className="flex items-center justify-center">
            <ItemRender
              imgPath={ProductItems[0].imgPath}
              imgPathHover={ProductItems[0].imgPathHover}
              productName={ProductItems[0].productName}
              productPriceTo={ProductItems[0].productPriceTo}
              productPriceFrom={ProductItems[0].productPriceFrom}
            />
            <ItemRender
              imgPath={ProductItems[0].imgPath}
              imgPathHover={ProductItems[0].imgPathHover}
              productName={ProductItems[0].productName}
              productPriceTo={ProductItems[0].productPriceTo}
              productPriceFrom={ProductItems[0].productPriceFrom}
            />
            <ItemRender
              imgPath={ProductItems[0].imgPath}
              imgPathHover={ProductItems[0].imgPathHover}
              productName={ProductItems[0].productName}
              productPriceTo={ProductItems[0].productPriceTo}
              productPriceFrom={ProductItems[0].productPriceFrom}
            />
            <ItemRender
              imgPath={ProductItems[0].imgPath}
              imgPathHover={ProductItems[0].imgPathHover}
              productName={ProductItems[0].productName}
              productPriceTo={ProductItems[0].productPriceTo}
              productPriceFrom={ProductItems[0].productPriceFrom}
            />
          </div>
        </div>
      </div>

      {/* gioi thieu son chong tham NGOÀI TRỜI */}
      <div className="w-full flex justify-center mt-20">
        <div className="w-full max-w-[1280px] text-left">
          <div className="flex items-center">
            <Image
              src="/logo-single-opacity50-75x75px.png"
              alt="son-chong-tham-sira-logo"
              width={50}
              height={100}
            />
            <h1 className="text-blue-950 font-bold text-3xl ms-5">
              SƠN CHỐNG THẤM NGOÀI TRỜI
            </h1>
          </div>

          <div className="border-t border-gray-300 mt-6"></div>
          {/* item render */}
          <div className="flex items-center justify-center">
            <ItemRender
              imgPath={ProductItems[0].imgPath}
              imgPathHover={ProductItems[0].imgPathHover}
              productName={ProductItems[0].productName}
              productPriceTo={ProductItems[0].productPriceTo}
              productPriceFrom={ProductItems[0].productPriceFrom}
            />
            <ItemRender
              imgPath={ProductItems[0].imgPath}
              imgPathHover={ProductItems[0].imgPathHover}
              productName={ProductItems[0].productName}
              productPriceTo={ProductItems[0].productPriceTo}
              productPriceFrom={ProductItems[0].productPriceFrom}
            />
            <ItemRender
              imgPath={ProductItems[0].imgPath}
              imgPathHover={ProductItems[0].imgPathHover}
              productName={ProductItems[0].productName}
              productPriceTo={ProductItems[0].productPriceTo}
              productPriceFrom={ProductItems[0].productPriceFrom}
            />
            <ItemRender
              imgPath={ProductItems[0].imgPath}
              imgPathHover={ProductItems[0].imgPathHover}
              productName={ProductItems[0].productName}
              productPriceTo={ProductItems[0].productPriceTo}
              productPriceFrom={ProductItems[0].productPriceFrom}
            />
          </div>
          <div className="flex justify-center">
            <ButtonCm classCSS="text-xl text-white bg-blue-950 w-48 h-12 rounded-full me-4">
              XEM THÊM <ChevronsRight className="mt-1" />
            </ButtonCm>
          </div>
        </div>
      </div>

      {/* gioi thieu son chong tham TRONG NHÀ */}
      <div className="w-full flex justify-center mt-20">
        <div className="w-full max-w-[1280px] text-left">
          <div className="flex items-center">
            <Image
              src="/logo-single-opacity50-75x75px.png"
              alt="son-chong-tham-sira-logo"
              width={50}
              height={100}
            />
            <h1 className="text-blue-950 font-bold text-3xl ms-5">
              SƠN CHỐNG THẤM TRONG NHÀ
            </h1>
          </div>

          <div className="border-t border-gray-300 mt-6"></div>
          {/* item render */}
          <div className="flex items-center justify-center">
            <ItemRender
              imgPath={ProductItems2[0].imgPath}
              imgPathHover={ProductItems2[0].imgPathHover}
              productName={ProductItems2[0].productName}
              productPriceTo={ProductItems2[0].productPriceTo}
              productPriceFrom={ProductItems2[0].productPriceFrom}
            />
            <ItemRender
              imgPath={ProductItems2[0].imgPath}
              imgPathHover={ProductItems2[0].imgPathHover}
              productName={ProductItems2[0].productName}
              productPriceTo={ProductItems2[0].productPriceTo}
              productPriceFrom={ProductItems2[0].productPriceFrom}
            />
            <ItemRender
              imgPath={ProductItems2[0].imgPath}
              imgPathHover={ProductItems2[0].imgPathHover}
              productName={ProductItems2[0].productName}
              productPriceTo={ProductItems2[0].productPriceTo}
              productPriceFrom={ProductItems2[0].productPriceFrom}
            />
            <ItemRender
              imgPath={ProductItems2[0].imgPath}
              imgPathHover={ProductItems2[0].imgPathHover}
              productName={ProductItems2[0].productName}
              productPriceTo={ProductItems2[0].productPriceTo}
              productPriceFrom={ProductItems2[0].productPriceFrom}
            />
          </div>
          <div className="flex justify-center">
            <ButtonCm classCSS="text-xl text-white bg-blue-950 w-48 h-12 rounded-full me-4">
              XEM THÊM <ChevronsRight className="mt-1" />
            </ButtonCm>
          </div>
        </div>
      </div>

      {/* gioi thieu son chong tham SÂN THƯỢNG */}
      <div className="w-full flex justify-center mt-20">
        <div className="w-full max-w-[1280px] text-left">
          <div className="flex items-center">
            <Image
              src="/logo-single-opacity50-75x75px.png"
              alt="son-chong-tham-sira-logo"
              width={50}
              height={100}
            />
            <h1 className="text-blue-950 font-bold text-3xl ms-5">
              SƠN CHỐNG THẤM SÂN THƯỢNG
            </h1>
          </div>

          <div className="border-t border-gray-300 mt-6"></div>
          {/* item render */}
          <div className="flex items-center justify-center">
            <ItemRender
              imgPath={ProductItems2[0].imgPath}
              imgPathHover={ProductItems2[0].imgPathHover}
              productName={ProductItems2[0].productName}
              productPriceTo={ProductItems2[0].productPriceTo}
              productPriceFrom={ProductItems2[0].productPriceFrom}
            />
            <ItemRender
              imgPath={ProductItems2[0].imgPath}
              imgPathHover={ProductItems2[0].imgPathHover}
              productName={ProductItems2[0].productName}
              productPriceTo={ProductItems2[0].productPriceTo}
              productPriceFrom={ProductItems2[0].productPriceFrom}
            />
            <ItemRender
              imgPath={ProductItems2[0].imgPath}
              imgPathHover={ProductItems2[0].imgPathHover}
              productName={ProductItems2[0].productName}
              productPriceTo={ProductItems2[0].productPriceTo}
              productPriceFrom={ProductItems2[0].productPriceFrom}
            />
          </div>
          <div className="flex justify-center">
            <ButtonCm classCSS="text-xl text-white bg-blue-950 w-48 h-12 rounded-full me-4">
              XEM THÊM <ChevronsRight className="mt-1" />
            </ButtonCm>
          </div>
        </div>
      </div>

      {/* gioi thieu son chong tham MÁI TÔN */}
      <div className="w-full flex justify-center mt-20">
        <div className="w-full max-w-[1280px] text-left">
          <div className="flex items-center">
            <Image
              src="/logo-single-opacity50-75x75px.png"
              alt="son-chong-tham-sira-logo"
              width={50}
              height={100}
            />
            <h1 className="text-blue-950 font-bold text-3xl ms-5">
              SƠN CHỐNG THẤM MÁI TÔN
            </h1>
          </div>

          <div className="border-t border-gray-300 mt-6"></div>
          {/* item render */}
          <div className="flex items-center justify-center">
            <ItemRender
              imgPath={ProductItems2[0].imgPath}
              imgPathHover={ProductItems2[0].imgPathHover}
              productName={ProductItems2[0].productName}
              productPriceTo={ProductItems2[0].productPriceTo}
              productPriceFrom={ProductItems2[0].productPriceFrom}
            />
            <ItemRender
              imgPath={ProductItems2[0].imgPath}
              imgPathHover={ProductItems2[0].imgPathHover}
              productName={ProductItems2[0].productName}
              productPriceTo={ProductItems2[0].productPriceTo}
              productPriceFrom={ProductItems2[0].productPriceFrom}
            />
            <ItemRender
              imgPath={ProductItems2[0].imgPath}
              imgPathHover={ProductItems2[0].imgPathHover}
              productName={ProductItems2[0].productName}
              productPriceTo={ProductItems2[0].productPriceTo}
              productPriceFrom={ProductItems2[0].productPriceFrom}
            />
          </div>
          <div className="flex justify-center">
            <ButtonCm classCSS="text-xl text-white bg-blue-950 w-48 h-12 rounded-full me-4">
              XEM THÊM <ChevronsRight className="mt-1" />
            </ButtonCm>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-20">
        <div className="w-full max-w-[1280px] text-center flex flex-col">
          <div className="">
            <h1 className="text-blue-950 font-bold text-3xl ms-5">
              DỊCH VỤ CHỐNG THẤM
            </h1>
          </div>
          <div>
            <FlashCardRender items={flashCardItems} />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-20">
        <div className="w-full max-w-[1280px] text-center flex flex-col">
          <div className="mb-12">
            <h1 className="text-blue-950 font-bold text-3xl ms-5">
              Chứng nhận hợp quy
            </h1>
          </div>
          <div className="flex flex-row justify-center">
            <div className="mx-4 my-2">
              <Image
                src="/TCVN-90132011-600x826.png"
                alt="chung-nhan-img"
                width={420}
                height={100}
              />
            </div>
            <div className="mx-4 my-2">
              <Image
                src="/TCVN-90132011-600x826.png"
                alt="chung-nhan-img"
                width={420}
                height={100}
              />
            </div>
            <div className="mx-4 my-2">
              <Image
                src="/TCVN-90132011-600x826.png"
                alt="chung-nhan-img"
                width={420}
                height={100}
              />
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="mx-4 my-2">
              <Image
                src="/TCVN-90132011-600x826.png"
                alt="chung-nhan-img"
                width={420}
                height={100}
              />
            </div>
            <div className="mx-4 my-2">
              <Image
                src="/TCVN-90132011-600x826.png"
                alt="chung-nhan-img"
                width={420}
                height={100}
              />
            </div>
            <div className="mx-4 my-2">
              <Image
                src="/TCVN-90132011-600x826.png"
                alt="chung-nhan-img"
                width={420}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-20">
        <div className="w-full max-w-[1280px] text-center flex flex-col">
          <div className="mb-12">
            <h1 className="text-blue-950 font-bold text-3xl ms-5">
              Kết quả thí nghiệm sơn Sira
            </h1>
          </div>
          <div className="flex flex-row justify-center">
            <div className="mx-4 my-2">
              <Image
                src="/Chong-nong-600x858.png"
                alt="chung-nhan-img"
                width={420}
                height={100}
              />
            </div>
            <div className="mx-4 my-2">
              <Image
                src="/Chong-nong-600x858.png"
                alt="chung-nhan-img"
                width={420}
                height={100}
              />
            </div>
            <div className="mx-4 my-2">
              <Image
                src="/Chong-nong-600x858.png"
                alt="chung-nhan-img"
                width={420}
                height={100}
              />
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="mx-4 my-2">
              <Image
                src="/Chong-nong-600x858.png"
                alt="chung-nhan-img"
                width={420}
                height={100}
              />
            </div>
            <div className="mx-4 my-2">
              <Image
                src="/Chong-nong-600x858.png"
                alt="chung-nhan-img"
                width={420}
                height={100}
              />
            </div>
            <div className="mx-4 my-2">
              <Image
                src="/Chong-nong-600x858.png"
                alt="chung-nhan-img"
                width={420}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
