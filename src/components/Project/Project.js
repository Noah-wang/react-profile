import React, { useState, useRef, useEffect } from "react";
import "./ProjectStyle.css";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../locales/translations";
import ParticleEffect from "../../effect/particleEffect";

const Project = () => {
    const { language } = useLanguage();
    const t = translations[language];

    // 添加状态管理悬停卡片
    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
    // 获取卡片尺寸的ref
    const cardRefs = useRef([]);

    // 初始化refs
    useEffect(() => {
        cardRefs.current = cardRefs.current.slice(0, t.projects.length);
    }, [t.projects.length]);

    return (
        <div className="project-container" id="projects">
            <h1 className="project-heading">{t.projectHeading}</h1>
            <div className="project-list">
                {/* 项目列表 */}
                {t.projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        ref={el => cardRefs.current[index] = el}
                        onMouseEnter={() => setHoveredCardIndex(index)}
                        onMouseLeave={() => setHoveredCardIndex(null)}
                    >
                        <ParticleEffect
                            isActive={hoveredCardIndex === index}
                            count={50}
                            containerWidth={cardRefs.current[index]?.offsetWidth || 300}
                            containerHeight={cardRefs.current[index]?.offsetHeight || 500}
                            maxDuration={2.5}
                            minDuration={1.0}
                            persistOnLeave={true}
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
                                {t.viewProject}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project;