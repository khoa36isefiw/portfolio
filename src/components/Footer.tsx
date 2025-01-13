import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Footer() {
  return (
    <footer className="sticky top-[100vh] w-full p-4 text-center font-bold text-white">
      <p className="mt-8 text-[18px]"> &#169; 2025 / Khoa Nek / NextJS </p>
      <div className="mt-1 flex items-center justify-center md:mt-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <Github />
            </TooltipTrigger>
            <TooltipContent>My Repository</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Linkedin className="mx-4" />
            </TooltipTrigger>
            <TooltipContent>My Linkedin</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <Mail />
            </TooltipTrigger>
            <TooltipContent>My Email</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </footer>
  );
}

export default Footer;
