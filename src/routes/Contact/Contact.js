import React, { useRef, useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroImg2 from "../../components/Hero/HeroImg2";
import IconGif from "../../asset/frogjump.gif";
import "./ContactStyle.css"
import ContactWay from "../../components/ContactWay/ContactWay"

const Contact = () => {
  const contactRef = useRef(null);
  const [showContacts, setShowContacts] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // 检测是否是移动设备
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth <= 480);
    };
    
    // 初始检测
    checkMobile();
    
    // 窗口大小变化时重新检测
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleImageClick = () => {
    setShowContacts(!showContacts);
  };

  return (
    <div>
      <Navbar />

      <div className="heroimg-container">
        <HeroImg2
          heading="Contact"
          text="Get in touch with me"
          onImageClick={handleImageClick}
          image={IconGif}
        />
      </div>

      <div className={`contact-container ${isMobileView ? 'mobile-view' : ''}`} ref={contactRef}>
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
