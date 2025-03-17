import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
import Earth from "../Canvas/EarthBeijing";

const About = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <Navbar />
        <HeroImg2 heading="ABOUT." text="Get to know me" />
      </div>
      
      <div>
        <AboutContent />
      </div>
    </div>
  );
};

export default About;
