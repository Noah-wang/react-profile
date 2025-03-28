import "./NavbarStyles.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../locales/translations";
import LanguageToggle from "../LanguageToggle/LanguageToggle";

const Navbar = () => {
  // 获取当前语言
  const { language } = useLanguage();
  const t = translations[language];

  // 导航栏组件变量
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);

  // 导航栏滚动变化
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  // 监听滚动事件
  window.addEventListener("scroll", changeColor);

  return (
    // 导航栏样式
    <div className={color ? "header header-bg" : "header"}>
      {/* 左侧标题和语言切换 */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Link to="/">
          <h1 className="bannerLogo">Noah's Portfolio</h1>
        </Link>
        <span style={{ marginLeft: '15px' }}>
          <LanguageToggle />
        </span>
      </div>

      {/* 右侧导航菜单 */}
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">{t.home}</Link>
        </li>

        <li>
          <Link to="/about">{t.about}</Link>
        </li>
        <li>
          <Link to="/contact">{t.contact}</Link>
        </li>
      </ul>

      {/* Hamburger menu */}
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#cdd117" }} />
        ) : (
          <FaBars size={20} style={{ color: "#cdd117" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
