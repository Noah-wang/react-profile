import React, { useRef, useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroImg2 from "../../components/Hero/HeroImg2";
import IconGif from "../../asset/frogjump.gif";
import "./ContactStyle.css"
import ContactWay from "../../components/ContactWay/ContactWay"
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../locales/translations";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const contactRef = useRef(null);
  const [showContacts, setShowContacts] = useState(false);

  const handleImageClick = () => {
    setShowContacts(!showContacts);
    
    // 滚动到适当的位置以查看联系方式
    if (!showContacts) {
      setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight * 0.5,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="heroimg-container">
        <HeroImg2
          heading={t.contact}
          text={t.getInTouch}
          onImageClick={handleImageClick}
          image={IconGif}
        />
      </div>

      <div className="contact-container" ref={contactRef}>
        <div className={`contact-way-Email ${showContacts ? 'show' : ''}`} style={{ animationDelay: "0.3s" }}>
          <ContactWay
            icon="MdOutlineMailOutline"
            content="893898956wrz@gmail.com"
          />
        </div>

        <div className={`contact-way-Phone ${showContacts ? 'show' : ''}`} style={{ animationDelay: "0.6s" }}>
          <ContactWay
            icon="IoPhonePortraitOutline"
            content="+86 15110203401"
          />
        </div>

        <div className={`contact-way-WeChat ${showContacts ? 'show' : ''}`} style={{ animationDelay: "0.9s" }}>
          <ContactWay
            icon="IoLogoWechat"
            content="NoahWang2003"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
