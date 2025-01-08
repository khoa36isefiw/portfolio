"use client";
import React from "react";
import Container from "./Container";
import { Github, Linkedin, Mail, PhoneCall } from "lucide-react";

function Contact() {
  return (
    <div className="z-1 relative mt-[60px] min-h-[300px] bg-[#3d3e42]">
      <div className="absolute left-0 top-0 w-full -translate-y-1/2 translate-x-0 text-center text-[36px] font-bold text-white">
        <div className="relative">
          <div className="absolute left-0 top-[50%] h-[3px] w-[35%] -translate-y-1/2 bg-primary-color"></div>
          <div className="absolute right-0 top-[50%] h-[3px] w-[35%] -translate-y-1/2 bg-primary-color"></div>
          Contact Me
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full translate-x-0 translate-y-1/2 text-[36px] text-white">
        <div className="relative flex items-center justify-center gap-4">
          <div className="absolute left-0 top-1/2 h-[3px] w-[40%] -translate-y-1/2 bg-primary-color"></div>
          <div className="absolute right-0 top-1/2 h-[3px] w-[40%] -translate-y-1/2 bg-primary-color"></div>
          <Linkedin />
          <Github />
          <PhoneCall />
          <Mail />
        </div>
      </div>
    </div>
  );
}

export default Contact;
