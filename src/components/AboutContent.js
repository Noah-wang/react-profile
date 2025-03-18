import React, { useState } from 'react';
import "./AboutContentStyles.css";
import Earth from "../Canvas/Earth/Earth";



import Card from "./Card/Card";
const AboutContent = () => {
  return (
    <>
      <div className="about-container">
        {/* 个人简介部分 */}
        <section className="about-section">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">你好！我叫王瑞泽，你可以叫我Noah</p>
        </section>

        <section className="card-section">
          <div>
            <Card
              frontContent={
                <div>
                  <h3>北京</h3>
                  <p>我的家乡</p>
                </div>
              }
              backContent={
                <div>
                  <Earth location='beijing' />
                  <p>在这里，我开始了我的编程之旅</p>
                </div>
              }
            />
          </div>

          <div>
            <Card
              frontContent={
                <div>
                  <h3>麦迪逊</h3>
                  <p>我的大学</p>
                </div>
              }
              backContent={
                <div>
                  <Earth location='madison' />
                  <p>在这里，我开始了我的编程之旅</p>
                </div>
              }
            />
          </div>

          <div>
            <Card
              frontContent={
                <div>
                  <h3>洛杉矶</h3>
                  <p>未来...?</p>
                </div>
              }
              backContent={
                <div>
                  <Earth location='la' />
                  <p>在这里，我开始了我的编程之旅</p>
                </div>
              }
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutContent;
