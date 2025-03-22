import React, { useState, useRef, useEffect } from "react";
import "./ProjectStyle.css";
import { PROJECT } from "../../Constant/index";
import ParticleEffect from "../../effect/particleEffect";


const Project = () => {
    // 添加状态管理悬停卡片
    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
    // 添加一个状态用于重置粒子效果




    return (
        <div className="project-container">
            <h1 className="project-heading">Project</h1>
            <div className="project-list">
                {/* 项目列表 */}
                {PROJECT.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        onMouseEnter={() => setHoveredCardIndex(index)}
                        onMouseLeave={() => setHoveredCardIndex(null)}
                    >
                        <ParticleEffect
                            isActive={hoveredCardIndex === index}
                            count={50}
                            containerWidth={350}
                            containerHeight={500}
                            maxDuration={2.5}
                            minDuration={1.0}
                        />
                        {/* 项目图片，点击跳转到项目链接 */}
                        <div className="project-image-container">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                            </a>
                        </div>
                        <div className="project-content">
                            {/* 项目标题 */}
                            <h3 className="project-title">{project.title}</h3>
                            {/* 项目描述 */}
                            <p className="project-description">{project.description}</p>
                            {/* 项目链接按钮 */}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link-btn"
                            >
                                查看项目
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}


export default Project;