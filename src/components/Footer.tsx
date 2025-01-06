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
    <footer className="fixed bottom-0 left-0 right-0 w-full text-center text-white">
      <p>Footer &#169; 2025 / Khoa Nek </p>
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
