import React from "react";
import "./AboutContentStyles.css";
import EarthBeijing from "../Canvas/EarthBeijing";
import EarthMadison from "../Canvas/EarthMadison";
import EarthLA from "../Canvas/EarthLA";
const AboutContent = () => {
  return (
    <div>
      <div className="transition-section">
        <div className="transition-overlay"></div>
        <h2 className="transition-title">My Journey Around The World</h2>
        <p className="transition-subtitle">Explore the places that shaped me</p>
      <div className="about-content">
        <h1>Beijing Is My Home</h1>
        <EarthBeijing />

        <h1>Madison Is My BA School </h1>
        <EarthMadison />

        <h1>LA Is My MS School</h1>
        <EarthLA />
      </div>
      </div>

      <div></div>
    </div>
  );
};

export default AboutContent;
