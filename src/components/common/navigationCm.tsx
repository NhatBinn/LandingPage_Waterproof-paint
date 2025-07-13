"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// thanh menu điều hướng
export function NavigationCm() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">TRANG CHỦ</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">VỀ SIRA</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>SƠN CHỐNG THẤM</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/son-chong-tham/danh-muc-san-pham">
                    Sơn chống thấm ngoài trời
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/son-chong-tham/danh-muc-san-pham">
                    Sơn chống thấm trong nhà
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/son-chong-tham/danh-muc-san-pham">
                    Sơn chống thấm hồ cá
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/son-chong-tham/danh-muc-san-pham">
                    Sơn chống thấm trần nhà
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/son-chong-tham/danh-muc-san-pham">
                    Sơn chống gỉ
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/son-chong-tham/danh-muc-san-pham">
                    Keo chống thấm trong suốt
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/son-chong-tham/danh-muc-san-pham">
                    Dụng cụ chống thấm
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>DỊCH VỤ</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Chống thấm sàn nhà</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Chống thấm tường</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Chống thấm sân thượng</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Chống thấm ngược</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Chống thấm sàn nhà vệ sinh</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Chống thấm bể nước</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>TIN TỨC</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Kinh nghiệm chống thấm</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Kiến thức về sơn</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Kinh nghiệm và hoạt động</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="#">LIÊN HỆ</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
