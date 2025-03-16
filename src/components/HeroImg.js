import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../asset/2023.7.24西藏13.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">

      <div className="mask">
        {/* add front Img */}
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>

      <div className="content">
        <p>Hi, I'm Noah Wang</p>
        <h1>This is My Profile</h1>

        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>

          <Link to="/Contact" className="btn">
            Contact
          </Link>
        </div>

      </div>

    </div>
  );
};

export default HeroImg;
