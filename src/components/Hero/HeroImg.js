import "./HeroImgStyles.css";
import React, { useState, useEffect } from "react";
import IntroImg from "../../asset/2023.7.24西藏13.jpg";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../locales/translations";

const HeroImg = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // 根据当前语言选择旋转文本
  const rotateTextZh = ["嗨，我是王瑞泽", "欢迎访问我的个人网站"];
  const rotateTextEn = ["Hi, I'm Noah Wang", "Welcome to My Profile"];
  
  //defile the text
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const rotateText = language === 'zh' ? rotateTextZh : rotateTextEn;
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(100);

  useEffect(() => {
    // 语言切换时重置文本
    setText("");
    setCurrentIndex(0);
    setIsDeleting(false);
    setTypeSpeed(100);
  }, [language]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, typeSpeed);

    return () => clearInterval(ticker);
  }, [text, currentIndex, isDeleting, typeSpeed, language]);

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
            {t.about}
          </Link>

          <Link to="/Contact" className="btn">
            {t.contact}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
