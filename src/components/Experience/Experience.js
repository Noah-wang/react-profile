import React from "react";
import { EXPERIENCE } from "../../Constant/index";
import "./ExperienceStyle.css";

const Experience = () => {
  return (
    <div className="experience">
      <h2>Experience</h2>

      <div>
        {/* 经验列表 */}
        {EXPERIENCE.map((experience, index) => (
          <div key={index} className="experience-item">
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
