import "./HeroImgStyles.css";
import React, { useState, useEffect } from "react";
import IntroImg from "../../asset/2023.7.24西藏13.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  // 定义要展示的文字和当前状态
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // 要循环展示的文字数组
  const toRotate = ["Hi, I'm Noah Wang", "Welcome to My Profile"];
  const period = 2000; // 展示文字的时间

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => { clearInterval(ticker) };
    // eslint-disable-next-line
  }, [text, isDeleting, loopNum, typingSpeed]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 1.2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  }

  return (
    <div className="hero">

      <div className="mask">
        {/* 背景图片 */}
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>

      {/* 内容 add 3D words*/}
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
