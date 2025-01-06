import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, PhoneCall } from "lucide-react";

// Home Page ("/")
export default function Home() {
  return (
    <div>
      <div className="mt-10 flex justify-between px-[20px] text-white shadow-inner md:px-[50px] lg:px-[80px] xl:px-[140px]">
        <div className="">
          <h1 className="text-[24px] lg:text-[48px]">Hello There,</h1>
          <h1 className="text-[24px] lg:text-[48px]">
            I am <span className="font-bold text-[#ffc86a]">Khoa</span>
          </h1>
          <h1 className="text-[24px] lg:text-[64px]">Front-end Developer</h1>
          <Button className="border-primary-color text-primary-color rounded-md border bg-transparent py-6 text-[20px] font-bold hover:bg-transparent">
            Contact Me
          </Button>
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
      <Container className="bg-[#191919] py-8">
        <h1 className="text-[46px] font-bold">About</h1>
        <div className="flex items-center">
          <div className="bg-primary-color h-[2px] w-[220px] rounded-sm" />
          <div className="ml-4 text-[20px]">
            I am a fourth-year student with a strong passion for web
            development, particularly{" "}
            <span className="text-primary-color font-bold">
              front-end development
            </span>
            . I am eager to secure an internship opportunity where I can learn
            and gain practical experience, and enhance my skills in building
            user-friendly and visually appealing website interfaces. I am highly
            motivated to learn and contribute, with the goal of becoming a
            proficient{" "}
            <span className="text-primary-color font-bold">
              front-end developer
            </span>{" "}
            in the near future.
          </div>
        </div>
      </Container>
    </div>
  );
}
