import { Github, Linkedin, Mail, PhoneCall } from "lucide-react";

// Home Page ("/")
export default function Home() {
  return (
    <div className="mt-10 flex justify-between px-[20px] text-white md:px-[50px] lg:px-[80px] xl:px-[140px]">
      <div className="">
        <h1 className="text-[24px] lg:text-[48px]">Hello There,</h1>
        <h1 className="text-[24px] lg:text-[48px]">
          I am <span className="font-bold text-[#ffc86a]">Khoa</span>
        </h1>
        <h1 className="text-[24px] lg:text-[64px]">Front-end Developer</h1>
      </div>
      {/* contact icon information */}
      <div className="mt-[90px] flex flex-col items-center gap-4">
        <div className="bg-primary-color h-[150px] w-[2px]" />
        <Linkedin />
        <Github />
        <PhoneCall />
        <Mail />
      </div>
    </div>
  );
}
