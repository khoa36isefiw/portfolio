"use client";
import { BookMarked, CircleUserRound, House } from "lucide-react";
import { EB_Garamond } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
});

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
    <div className="relative flex h-screen items-center justify-center">
      <nav className="border-headerBorder fixed top-[90vh] flex h-[44px] w-[50%] items-center justify-center rounded-2xl border bg-[#1a1824]">
        {headerData.map((header, index) => (
          <Link
            href={header.path}
            className={`${
              pathname === header.path && "bg-headerBg border-headerBorder"
            } hover:border-headerBg mx-[8px] rounded-xl border px-[12px] py-[4px] text-[white] hover:cursor-pointer hover:border hover:bg-[#282828]`}
            key={index}
          >
            {header.icon}
          </Link>
        ))}
      </nav>
    </div>
  );
}
