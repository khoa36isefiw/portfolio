"use client";
import { BookMarked, CircleUserRound, House } from "lucide-react";
import { EB_Garamond } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ModeToggle } from "./ModeToggle";

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

export function Header() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Cập nhật currentPath khi pathname thay đổi
  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // scroll y direction > 50px
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 flex items-center justify-between scroll-smooth px-4 duration-300 ${
        scrolled ? "top-1 shadow-lg transition-all" : "top-4"
      } xl:px-8`}
    >
      <Link href="/" className="text-[32px] font-bold text-white">
        K
      </Link>

      {/* home, about, skills, exp */}
      <div className="border-headerBorder hidden h-[44px] w-auto items-center rounded-2xl border lg:flex">
        {headerData.map((header, index) => (
          <Link
            href={header.path}
            className={`${
              currentPath === header.path && "bg-headerBg border-headerBorder"
            } hover:border-headerBg mx-[16px] flex w-full items-center rounded-xl border px-[16px] py-[2px] text-[white] hover:cursor-pointer hover:border hover:bg-[#1a1824]`}
            key={index}
          >
            <div className="mr-2">{header.icon}</div>
            <div>{header.text}</div>
          </Link>
        ))}
      </div>

      {/* toggle dark/light mode */}
      <ModeToggle />
    </nav>
  );
}
