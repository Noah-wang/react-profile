import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";

const About = () => {
  return (
    <div>
      {/* add NAVBAR component */}
      <Navbar />
      <HeroImg2 heading="ABOUT ME" text="This is my story" />
      
    </div>
  );
};

export default About;
