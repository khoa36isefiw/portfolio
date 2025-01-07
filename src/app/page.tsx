import Container from "@/components/Container";
import Experiences from "@/components/Experiences";
import HeadingH1 from "@/components/HeadingH1";
import { Button } from "@/components/ui/button";
import { skils } from "@/data/skillsData";
import { Github, Linkedin, Mail, PhoneCall } from "lucide-react";
import Image from "next/image";

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
        <HeadingH1 text={"About"} />

        <div className="bg-primary-color mb-2 h-[2px] w-[100px] rounded-sm" />
        <div className="ml-4 text-[20px]">
          I am a fourth-year student with a strong passion for web development,
          particularly{" "}
          <span className="text-primary-color font-bold">
            front-end development
          </span>
          . I am eager to secure an internship opportunity where I can learn and
          gain practical experience, and enhance my skills in building
          user-friendly and visually appealing website interfaces. I am highly
          motivated to learn and contribute, with the goal of becoming a
          proficient{" "}
          <span className="text-primary-color font-bold">
            front-end developer
          </span>{" "}
          in the near future.
        </div>
      </Container>

      {/* My Skills */}
      <Container className="mt-8">
        <HeadingH1 text={"My Skills"} className="text-center" />
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {skils.map((skill, index) => (
            <div
              className="flex h-[280px] flex-col items-center justify-center rounded-xl bg-[#3d3e42] shadow-2xl hover:cursor-pointer hover:bg-[#f0bf6c]"
              key={index}
            >
              <Image
                src={skill.image}
                alt={skill.text}
                quality={100}
                width={80}
                height={80}
                className="mb-4 h-[80px] w-[80px] object-contain"
              />
              <p className="mt-8 text-[24px] font-semibold">{skill.text}</p>
            </div>
          ))}
        </div>
      </Container>
      <Experiences />
    </div>
  );
}
