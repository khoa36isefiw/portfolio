"use client";
import {
  BookMarked,
  BriefcaseBusiness,
  CircleUserRound,
  FolderGit,
  House,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./Container";
import RealTimeClock from "./RealTimeClock";
import { usePathname } from "next/navigation";

const headerData = [
  { text: "Home", path: "/", refKey: "homeRef", icon: <House size={20} /> },
  {
    text: "About",
    path: "/about",
    refKey: "aboutRef",
    icon: <CircleUserRound size={20} />,
  },
  {
    text: "Skills",
    path: "/skills",
    refKey: "skillsRef",
    icon: <BookMarked size={20} />,
  },
  {
    text: "Experiences",
    path: "/experiences",
    refKey: "expRef",

    icon: <BriefcaseBusiness size={20} />,
  },
  {
    text: "Projects",
    path: "/projects",
    refKey: "projectsRef",
    icon: <FolderGit size={20} />,
  },
];

export type SectionRefs = {
  [key: string]: React.RefObject<HTMLDivElement | null>;
};

export function Header({ sectionRefs }: { sectionRefs: SectionRefs }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [currentPath, setCurrentPath] = useState("");

  const handleScroll = () => {
    const positions = Object.keys(sectionRefs).map((key) => {
      const ref = sectionRefs[key];
      return { key, top: ref.current?.getBoundingClientRect().top || Infinity };
    });

    const activeSection = positions.reduce((prev, curr) =>
      Math.abs(curr.top - 100) < Math.abs(prev.top - 100) ? curr : prev,
    );

    setCurrentPath(activeSection.key);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  const handleNavigation = (refKey: string) => {
    const targetRef = sectionRefs[refKey];
    if (targetRef?.current) {
      const offsetTop = targetRef.current.offsetTop;
      const targetPosition = offsetTop - 100;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      setCurrentPath(refKey);
    }
  };

  return (
    <Container className="relative z-50 h-[60px] py-2">
      <nav
        className={`fixed left-0 right-0 flex items-center justify-between bg-gradient-to-b from-[#0a0a0a] to-[#00000] px-[20px] ${isHomePage ? "backdrop-blur-sm" : "none"} md:px-[50px] lg:px-[80px] xl:px-[140px]`}
      >
        <Link href="/" className="text-[32px] font-bold text-white">
          K
        </Link>
        {pathname === "/" && (
          <div className="hidden h-[44px] w-auto items-center rounded-2xl border border-headerBorder lg:flex">
            {headerData.map((header, index) => (
              <button
                onClick={() => handleNavigation(header.refKey)}
                className={`${
                  currentPath === header.path &&
                  "border-headerBorder bg-headerBg"
                } mx-[16px] flex w-full items-center rounded-xl border px-[16px] py-[2px] text-[white] hover:cursor-pointer hover:border hover:border-headerBg hover:bg-[#1a1824]`}
                key={index}
              >
                <div className="mr-2">{header.icon}</div>
                <div>{header.text}</div>
              </button>
            ))}
          </div>
        )}

        <RealTimeClock />
      </nav>
    </Container>
  );
}
