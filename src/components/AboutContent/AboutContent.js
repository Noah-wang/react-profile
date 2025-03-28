import React, { useState } from "react";
import "./AboutContentStyles.css";
import Earth from "../../Canvas/Earth/Earth";
import Experience from "../Experience/Experience";
import Project from "../Project/Project";
import Card from "../../components/Card/Card";
import MyLife from "../MyLife/myLife";
import { useLanguage } from "../../context/LanguageContext";
import { translations, locations } from "../../locales/translations";

const AboutContent = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const loc = locations[language];

  return (
    <>
      <div className="about-container">
        {/* 个人简介部分 */}
        <section className="about-section">
          <h2 className="about-title">{t.aboutMe}</h2>
          <p className="about-text">
            {language === 'zh'
              ? "你好！我叫王瑞泽，你可以叫我Noah"
              : "Hello! My name is Ruize Wang, you can call me Noah"}
          </p>
        </section>

        {/* 卡片部分 */}
        <section className="card-section">
          {/* 北京卡片 */}
          <div>
            <Card
              frontContent={
                <div>
                  <h3>{loc.beijing.title}</h3>
                  <p>{loc.beijing.desc}</p>
                </div>
              }
              backContent={
                <div style={{ width: "100%", height: "100%" }}>
                  <Earth location="beijing" />
                </div>
              }
            />
          </div>

          {/* 麦迪逊卡片 */}
          <div>
            <Card
              frontContent={
                <div>
                  <h3>{loc.madison.title}</h3>
                  <p>{loc.madison.desc}</p>
                </div>
              }
              backContent={
                <div style={{ width: "100%", height: "100%" }}>
                  <Earth location="madison" />
                </div>
              }
            />
          </div>

          {/* 洛杉矶卡片 */}
          <div>
            <Card
              frontContent={
                <div>
                  <h3>{loc.la.title}</h3>
                  <p>{loc.la.desc}</p>
                </div>
              }
              backContent={
                <div style={{ width: "100%", height: "100%" }}>
                  <Earth location="la" />
                </div>
              }
            />
          </div>
        </section>

        {/* 经验部分 */}
        <section className="experience-section">
          <Experience />
        </section>

        {/* 项目部分 */}
        <section className="project-section">
          <Project />
        </section>

        {/* 生活部分 */}
        <section className="my-life-section">
          <MyLife />
        </section>
      </div>
    </>
  );
};

export default AboutContent;
