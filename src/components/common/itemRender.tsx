import Image from "next/image";

interface itemProps {
  imgPath: string;
  imgPathHover: string;
  productName: string;
  productPriceTo: string;
  productPriceFrom: string;
}

export default function ItemRender({
  imgPath,
  imgPathHover,
  productName,
  productPriceTo,
  productPriceFrom,
}: itemProps) {
  return (
    <div className="group flex flex-col w-[280px] h-[400px] bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-3 my-6 mx-3 text-center">
      <div className="relative flex justify-center items-center mb-3">
        <div className="absolute top-1 left-1 z-10 bg-gradient-to-r from-red-600 to-red-400 text-white text-xs font-extrabold px-3 py-2 rounded-full shadow-lg uppercase tracking-wide">
          SALE
        </div>

        {imgPathHover === "" && (
          <Image
            src={imgPath}
            alt="product-logo"
            width={250}
            height={250}
            className="object-contain transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1.5"
          />
        )}

        {imgPathHover !== "" && (
          <>
            <Image
              src={imgPath}
              alt="product-logo"
              width={250}
              height={250}
              className="object-contain opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1.5 group-hover:opacity-0"
            />
            <Image
              src={imgPathHover}
              alt="product-hover"
              fill
              className="object-contain opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1.5 group-hover:opacity-100"
            />
          </>
        )}
      </div>

      <div className="mt-2 text-base font-bold text-gray-800 min-h-[48px]">
        {productName}
      </div>

      <div className="border-t border-gray-200 my-2" />

      <div className="text-base text-gray-600">
        <span className="font-semibold text-red-600">{productPriceTo}₫</span> -{" "}
        <span>{productPriceFrom}₫</span>
      </div>
    </div>
  );
}
