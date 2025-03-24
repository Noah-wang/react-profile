import React from "react";
import "./HeroImg2styles.css";

const HeroImg2 = (props) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <img src={props.image} alt="hero" />
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default HeroImg2;
