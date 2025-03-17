import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Earth from "../Canvas/Earth";

const About = () => {
  return (
    <div>
      {/* add NAVBAR component */}
      <Navbar />
      <HeroImg2 heading="ABOUT ME" text="This is my story" />

      {/* 优化地球部分的容器 */}
      <div className="about-earth-section">
        <Earth />

        <div className="earth-description"></div>
      </div>
    </div>
  );
};

export default About;
