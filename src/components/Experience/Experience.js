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
              <h3>{experience.title}</h3>
              <h4>{experience.location}</h4>
              <p>{experience.date}</p>
              <p>{experience.description}</p>
            </div>

          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Experience;
