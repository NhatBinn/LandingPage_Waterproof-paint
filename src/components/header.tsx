"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import { NavigationCm } from "./common/navigationCm";

// Header
const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex flex-row items-center p-4">
        <div className="flex w-3/12 justify-end">
          <Image
            src="/sira-logo.png"
            alt="logo-header"
            width={150}
            height={75}
          />
        </div>

        <div className="flex w-6/12 justify-start ms-2.5">
          <NavigationCm />
        </div>

        <div className="flex w-3/12 justify-start mx-2.5">
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
