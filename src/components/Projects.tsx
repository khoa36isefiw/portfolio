import React from "react";
import Dots from "./Dots";
import Container from "./Container";
import HeadingH1 from "./HeadingH1";

function Projects() {
  return (
    <Container className="my-4">
      <Dots />
      <HeadingH1 text={"Projects"} className="text-center" />
    </Container>
  );
}

export default Projects;
