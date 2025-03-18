import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import HeroImg2 from "../../components/Hero/HeroImg2.js";

const Project = () => {
  return (
    <div>
      {/* add NAVBAR component*/}
      <Navbar />

      <HeroImg2 heading="PROJECTS." text="Some of my recent works"/>
    </div>
  );
};

export default Project;
