import React, { useState, useRef, useEffect } from "react";
import { EXPERIENCE } from "../../Constant/index";
import "./ExperienceStyle.css";
import ParticleEffect from "../../effect/particleEffect";

const Experience = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  
  return (
    <div className="experience">
      <h2>Experience</h2>

      <div>
        {/* 经验列表 */}
        {EXPERIENCE.map((experience, index) => (
          <div
            key={index}
            className="experience-item"
            onMouseEnter={() => setHoveredCardIndex(index)}
            onMouseLeave={() => setHoveredCardIndex(null)}
          >
            <ParticleEffect
              isActive={hoveredCardIndex === index}
              count={100}
              containerWidth={1072}
              containerHeight={223}
              maxDuration={2.5}
              minDuration={1.0}
            />

            <div>
              {/* 项目标题 */}
              <h3>{experience.title}</h3>
              {/* 项目时间和地点 */}
              <h4>
                {experience.location} {experience.date}
              </h4>
              {/* 项目描述 */}
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
