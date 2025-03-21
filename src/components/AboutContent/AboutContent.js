import React, { useState } from "react";
import "./AboutContentStyles.css";
import Earth from "../../Canvas/Earth/Earth";
import Experience from "../../components/Experience/Experience";
import Project from "../../components/Project/Project";
import Card from "../Card/Card";

const AboutContent = () => {
  return (
    <>
      <div className="about-container">
        {/* 个人简介部分 */}
        <section className="about-section">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">你好！我叫王瑞泽，你可以叫我Noah</p>
        </section>

        {/* 卡片部分 */}
        <section className="card-section">
          {/* 北京卡片 */}
          <div>
            <Card
              frontContent={
                <div>
                  <h3>北京</h3>
                  <p>我的家乡</p>
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
                  <h3>麦迪逊</h3>
                  <p>我的大学</p>
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
                  <h3>洛杉矶</h3>
                  <p>未来...?</p>
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
      </div>
    </>
  );
};

export default AboutContent;
