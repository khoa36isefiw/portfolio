"use client";
import Link from "next/link";

import Container from "./Container";
import RealTimeClock from "./RealTimeClock";

export function HeaderNormal() {
  return (
    <Container className="relative z-50 h-[60px] py-2">
      <nav
        className={`fixed left-0 right-0 flex items-center justify-between bg-gradient-to-b from-[#0a0a0a] to-[#00000] px-[20px] md:px-[50px] lg:px-[80px] xl:px-[140px]`}
      >
        <Link href="/" className="text-[32px] font-bold text-white">
          K
        </Link>

        <RealTimeClock />
      </nav>
    </Container>
  );
}
