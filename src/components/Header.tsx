"use client";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
});

function Header() {
  return (
    <div>
      <h1
        className={`${garamond.className} text-[32px] font-bold text-[#03045E]`}
      >
        K
      </h1>
    </div>
  );
}

export default Header;
