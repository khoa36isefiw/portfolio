import React from "react";
import Dots from "./Dots";
import Container from "./Container";
import HeadingH1 from "./HeadingH1";
import { GitFork, Github } from "lucide-react";
import { projectsData } from "@/data/projectsData";

function Projects() {
  return (
    <Container className="my-4">
      <Dots className="w-[100px] gap-20" />
      <HeadingH1 text={"Projects"} className="text-center" />
      <div className="mt-5 grid grid-cols-4 gap-10">
        {/* <GitFork />
        <Github /> */}
        {projectsData.map((project) => (
          <>
            <img
              src={project?.projectImage}
              alt={project?.projectName}
              className="h-64 w-64 rounded-lg bg-lime-400 transition-all hover:translate-y-[-12px] hover:cursor-pointer"
            />
          </>
        ))}
      </div>
      <div className="flex items-end justify-end">
        <Dots className="gap-20" />
      </div>
    </Container>
  );
}

export default Projects;
