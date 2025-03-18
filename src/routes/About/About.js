import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AboutContent from "../../components/AboutContent";
import "./About.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about">

        <AboutContent />
      </div>

    </div>
  );
};

export default About;
