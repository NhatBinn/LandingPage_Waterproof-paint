"use client";

import { Mails, Map, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ButtonCm } from "./common/buttonCm";
import { InputCm } from "./common/inputCm";
import { SelectCm } from "./common/selectCm";
import { TooltipCm } from "./common/tooltipCm";

// NOTE thẻ footer
const Footer = () => {
  const [Sel_val, setSel_val] = useState<string>("");
  const [inp1_val, setInp1_val] = useState<string>("");

  const [inp2_val, setInp2_val] = useState<string>("");

  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (Sel_val !== "" && inp1_val === "" && inp2_val === "") {
      setShowTooltip(true);

      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [Sel_val, inp1_val, inp2_val]);

  const optionSelect = [
    { key: 0, value: "1", option: "Sân thượng, sàn mái" },
    { key: 1, value: "2", option: "Tường ngoài" },
    { key: 2, value: "3", option: "Bể cá, bể nước" },
    { key: 3, value: "4", option: "Khác" },
  ];

  const selectHandle = (value: string) => {
    console.log("select value ", value);
    setSel_val(value);
  };

  const inputHandle1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("inputHandle1 text1 ", e.target.value);
    setInp1_val(e.target.value);
  };

  const inputHandle2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("inputHandle2 text2 ", e.target.value);
    setInp2_val(e.target.value);
  };

  return (
    <footer>
      <div className="flex flex-row my-4">
        <div className="flex-1/6"></div>

        <div className="flex-1/6 p-5">
          {/* NOTE giới thiệu */}
          <div className="flex flex-col">
            <Image
              src="/sira-logo.png"
              alt="footer-logo"
              width={125}
              height={75}
              className=" my-3 mx-2"
            />

            <p className="text-lg leading-relaxed my-3 mx-2">
              Sơn chống thấm SIRA - Đơn vị cung cấp sơn chống thấm chất lượng SỐ
              1 Việt Nam.
            </p>

            <div className="flex flex-row my-3 mx-2">
              <Mails className="w-5 h-5" />
              <p className="text-base ms-2">Sonchongtham@gmail.com</p>
            </div>

            <div className="flex flex-row my-3 mx-2">
              <Phone className="w-5 h-5" />
              <p className="text-base ms-2">0123456789</p>
            </div>

            <div className="flex flex-row my-3 mx-2">
              <Phone className="w-5 h-5" />
              <p className="text-base ms-2">Dĩ An, Bình Dương</p>
            </div>

            <div className="flex flex-row my-3 mx-2">
              <Map className="w-5 h-5" />
              <p className="text-base ms-2">Dĩ An, Tp Hồ Chí Minh</p>
            </div>
          </div>
        </div>

        {/* NOTE danh mục sản phẩm */}
        <div className="flex-1/6 p-5">
          <label className="text-2xl text-blue-950 font-semibold ">
            DANH MỤC
          </label>

          <div className="border-t border-gray-300 mt-6"></div>

          <div className="flex flex-row mb-3 mx-2 mt-5">
            <Link href="#" className="text-base font-medium">
              Sơn chống thấm
            </Link>
          </div>

          <div className="flex flex-row my-3 mx-2">
            <Link href="#" className="text-base font-medium">
              Sơn chống thấm ngoài trời
            </Link>
          </div>

          <div className="flex flex-row my-3 mx-2">
            <Link href="#" className="text-base font-medium">
              Sơn chống thấm trong nhà
            </Link>
          </div>

          <div className="flex flex-row my-3 mx-2">
            <Link href="#" className="text-base font-medium">
              Sơn chống thấm sân thượng
            </Link>
          </div>

          <div className="flex flex-row my-3 mx-2">
            <Link href="#" className="text-base font-medium">
              Sơn chống thấm mái tôn
            </Link>
          </div>

          <div className="flex flex-row my-3 mx-2">
            <Link href="#" className="text-base font-medium">
              Sơn chống thấm hồ cá
            </Link>
          </div>

          <div className="flex flex-row my-3 mx-2">
            <Link href="#" className="text-base font-medium">
              Sơn chống thấm sàn
            </Link>
          </div>

          <div className="flex flex-row my-3 mx-2">
            <Link href="#" className="text-base font-medium">
              Sơn chống thấm tường
            </Link>
          </div>
        </div>

        {/* NOTE danh mục thông tin */}
        <div className="flex-1/6 p-5">
          <label className="text-2xl text-blue-950 font-semibold ">
            THÔNG TIN
          </label>

          <div className="border-t border-gray-300 mt-6"></div>

          <div className="flex flex-row mb-3 mx-2 mt-5">
            <Link href="#" className="text-base font-medium">
              Chính sách bảo hành
            </Link>
          </div>

          <div className="flex flex-row my-3 mx-2">
            <Link href="#" className="text-base font-medium">
              Chính sách bảo mật
            </Link>
          </div>

          <div className="flex flex-row my-3 mx-2">
            <Link href="#" className="text-base font-medium">
              Chính sách vận chuyển
            </Link>
          </div>

          <div className="flex flex-row my-3 mx-2">
            <Link href="#" className="text-base font-medium">
              Chính sách đổi trả hàng
            </Link>
          </div>

          <div className="flex flex-row my-3 mx-2">
            <Link href="#" className="text-base font-medium">
              Chính sách thanh toán
            </Link>
          </div>
        </div>

        {/* NOTE form đăng ký tư vấn */}
        <div className="flex-1/6 p-5">
          <label className="text-2xl text-blue-950 font-semibold ">
            ĐĂNG KÝ TƯ VẤN
          </label>

          <div className="border-t border-gray-300 mt-6"></div>

          <div className="flex flex-row mb-3 mx-2 mt-5">
            <p className="text-lg text-gray-500 font-medium">
              Để lại số điện thoại của bạn Sơn chống thấm SIRA sẽ liên hệ tư vấn
              ngay!
            </p>
          </div>

          <div className="flex flex-row my-3">
            <TooltipCm
              text="Vui lòng nhập họ và tên"
              open={showTooltip}
              side="right"
            >
              <InputCm
                classCSS="w-64 h-14 border border-gray-300 mx-1 focus:border-gray-500 rounded-sm p-3"
                placeHolder="Họ và tên"
                onChg={inputHandle1}
              />
            </TooltipCm>
          </div>

          <div className="flex flex-row my-3">
            <TooltipCm
              text="Vui lòng nhập số điện thoại"
              open={showTooltip}
              side="right"
            >
              <InputCm
                classCSS="w-64 h-14 border border-gray-300 mx-1 focus:border-gray-500 rounded-sm p-3"
                placeHolder="Số điện thoại"
                onChg={inputHandle2}
              />
            </TooltipCm>
          </div>

          <div className="flex flex-row my-5 mx-1">
            <SelectCm
              onChg={selectHandle}
              classCSS={"w-[256px]"}
              placeHolder={"--Vị trí chống thấm--"}
              label={"--Vị trí chống thấm--"}
              option={optionSelect}
            ></SelectCm>
          </div>

          <div className="flex flex-row my-5 mx-1 ">
            <ButtonCm
              onClk={() => {
                console.log("click handle");
              }}
              classCSS="bg-blue-950"
              text="GỬI"
            />
          </div>
        </div>

        <div className="flex-1/6"></div>
      </div>
      <div className="flex flex-row bg-black text-white">
        <p>dc lam boi hoang nhat</p>
      </div>
    </footer>
  );
};

export default Footer;
