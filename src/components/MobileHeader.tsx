"use client";
import { BookMarked, CircleUserRound, House } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const headerData = [
  {
    text: "Home",
    path: "/",
    icon: <House size={20} />,
  },
  {
    text: "About",
    path: "/about",
    icon: <CircleUserRound size={20} />,
  },
  {
    text: "Work",
    path: "/work",
    icon: <BookMarked size={20} />,
  },
];

export function MobileHeader() {
  const pathname = usePathname();

  return (
    <div className="relative z-50 flex items-center justify-center lg:hidden">
      <nav className="fixed top-[90vh] flex h-[44px] w-fit items-center justify-center rounded-2xl border border-headerBorder bg-[#1a1824] px-2">
        {headerData.map((header, index) => (
          <Link
            href={header.path}
            className={`${
              pathname === header.path && "border-headerBorder bg-headerBg"
            } mx-[8px] rounded-xl border px-[12px] py-[4px] text-[white] hover:cursor-pointer hover:border hover:border-headerBg hover:bg-[#282828]`}
            key={index}
          >
            {header.icon}
          </Link>
        ))}
      </nav>
    </div>
  );
}
