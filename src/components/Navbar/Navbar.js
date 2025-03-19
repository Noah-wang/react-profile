import "./NavbarStyles.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
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
      {/* Link to the HOME page */}
      <Link to="/">
        <h1 className="bannerLogo">Noah's Portfolio</h1>
      </Link>

      {/* Link to the other pages as NAVBAR */}
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
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
