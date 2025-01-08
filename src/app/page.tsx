"use client";
import Contact from "@/components/Contact";
import Container from "@/components/Container";

import Experiences from "@/components/Experience";
import HeadingH1 from "@/components/HeadingH1";
import Projects from "@/components/Projects";
import { Button } from "@/components/ui/button";
import { skils } from "@/data/skillsData";
import { Github, Linkedin, Mail, PhoneCall } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

// Home Page ("/")
export default function Home() {
  const handleContact = () => {
    toast.success("Email was sent.");
  };
  return (
    <div>
      <div className="mt-10 flex justify-between px-[20px] text-white shadow-inner md:px-[50px] lg:px-[80px] xl:px-[140px]">
        <div className="">
          <h1 className="text-[24px] lg:text-[48px]">Hello There,</h1>
          <h1 className="text-[24px] lg:text-[48px]">
            I am <span className="font-bold text-[#ffc86a]">Khoa</span>
          </h1>
          <h1 className="text-[24px] lg:text-[64px]">Front-end Developer</h1>
          <Button
            onClick={handleContact}
            className="mt-4 rounded-md border border-primary-color bg-transparent py-6 text-[20px] font-bold text-primary-color hover:bg-transparent xl:mt-0"
          >
            Contact Me
          </Button>
        </div>
        {/* contact icon information */}
        <div className="mt-[90px] flex flex-col items-center gap-4">
          <div className="h-[150px] w-[2px] bg-primary-color" />
          <Linkedin />
          <Github />
          <PhoneCall />
          <Mail />
        </div>
      </div>
      <Container className="bg-[#191919] py-8">
        <HeadingH1 text={"About"} />

        <div className="mb-2 h-[2px] w-[100px] rounded-sm bg-primary-color" />
        <div className="ml-4 text-justify text-[20px]">
          I am a fourth-year student with a strong passion for web development,
          particularly{" "}
          <span className="font-bold text-primary-color">
            front-end development
          </span>
          . I am eager to secure an internship opportunity where I can learn and
          gain practical experience, and enhance my skills in building
          user-friendly and visually appealing website interfaces. I am highly
          motivated to learn and contribute, with the goal of becoming a
          proficient{" "}
          <span className="font-bold text-primary-color">
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
              className="z-40 flex h-[280px] flex-col items-center justify-center rounded-xl bg-[#3d3e42] shadow-2xl hover:cursor-pointer hover:bg-[#f0bf6c]"
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
        <div className="flex items-end justify-end">
          <div className="grid grid-cols-3 gap-10">
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="m-4 h-5 w-5 rounded-full bg-[#6a5d4a]"
                ></div>
              ))}
          </div>
        </div>
      </Container>
      <Experiences />
      <Projects />
      <Contact />
    </div>
  );
}
