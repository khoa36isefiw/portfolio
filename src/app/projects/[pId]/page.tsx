"use client";
import Container from "@/components/Container";
import HeadingH1 from "@/components/HeadingH1";
import { projectsData } from "@/data/projectsData";
import Image from "next/image";
import { useParams } from "next/navigation";

import React from "react";

function ProjectDetail() {
  const { pId } = useParams<{ pId: string | undefined }>();
  const rId = pId ? parseInt(pId, 10) : NaN; // convert string to number
  // check if rId is not a number
  if (isNaN(rId)) {
    return <div>Invalid Project ID</div>; // Handle invalid or undefined ID
  }

  console.log("pId: ", pId);
  console.log(typeof rId);

  // get project details
  const data = projectsData.find((project) => project.projectId === rId);
  console.log("data: ", data);

  return (
    <Container className="mt-4">
      <HeadingH1 text={data?.projectName} className="text-center" />
      <div>
        {data?.projectImage.map((image, index) => (
          <Image
            src={image}
            key={index}
            alt={"Project Image Detail"}
            quality={100}
            width={100}
            height={100}
          />
        ))}
      </div>
    </Container>
  );
}

export default ProjectDetail;
