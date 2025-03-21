import "./HeroImgStyles.css";
import React, { useState, useEffect } from "react";
import IntroImg from "../../asset/2023.7.24西藏13.jpg";
import { Link } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";


const HeroImg = () => {
  //defile the text
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const rotateText = ["Hi, I'm Noah Wang", "Welcome to My Profile"];
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(100);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, typeSpeed);

    return () => clearInterval(ticker);
  }, [text, currentIndex, isDeleting, typeSpeed]);

  const tick = () => {
    const fullTxt = rotateText[currentIndex];

    // 文字单个减少或增加
    if (isDeleting) {
      setText(fullTxt.substring(0, text.length - 1));
    } else {
      setText(fullTxt.substring(0, text.length + 1));
    }

    // 删除时快一点
    if (isDeleting) {
      setTypeSpeed(typeSpeed / 1.5);
    }

    // 改变删除和增加状态
    if (!isDeleting && text === fullTxt) {
      setTypeSpeed(3000);
      setIsDeleting(true);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setCurrentIndex((currentIndex + 1) % rotateText.length);
      setTypeSpeed(500);
    }



  }

  return (
    <div className="hero">

      <div className="mask">
        {/* 背景图片 */}
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>

      {/* 内容 3D words*/}
      <div className="content">
        <h1>
          <span className="typing-text">{text}</span>
          <span className="cursor"></span>
        </h1>

        {/* 导航按钮 */}
        <div>
          <Link to="/About" className="btn">
            About Me
          </Link>

          <Link to="/Contact" className="btn">
            Contact Me
          </Link>
        </div>

      </div>

    </div>
  );
};

export default HeroImg;
