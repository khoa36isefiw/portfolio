"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

function ProjectDetail() {
  const { pId } = useParams();

  return <div>page {pId}</div>;
}

export default ProjectDetail;
