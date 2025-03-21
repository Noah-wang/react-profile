import React, { useState, useRef, useEffect } from "react";
import { EXPERIENCE } from "../../Constant/index";
import "./ExperienceStyle.css";

// 生成随机数
const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

// 生成随机颜色
const getRandomColor = () => {
  const colors = ['#ff7ac8', '#7acdff', '#fcf67a', '#7affc8', '#ff7a7a', '#d67aff'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Experience = () => {
  // 跟踪当前有特效的项目索引
  const [activeEffectIndex, setActiveEffectIndex] = useState(null);
  // 保存粒子的状态
  const [particles, setParticles] = useState([]);
  // 引用卡片元素，用于获取实际尺寸
  const cardRefs = useRef([]);

  // 创建hover效果
  const handleMouseEnter = (index) => {
    setActiveEffectIndex(index);

    // 获取当前卡片的实际尺寸
    if (cardRefs.current[index]) {
      const card = cardRefs.current[index];
      const { width, height } = card.getBoundingClientRect();
      createHoverEffects(width, height);
    }
  };

  // 移除hover效果
  const handleMouseLeave = () => {
    // 不立即清除粒子，而是只取消激活状态
    setActiveEffectIndex(null);

    // 粒子会在动画完成后自然消失
    // 不立即清除粒子数组
  };

  // 创建粒子效果，使用实际尺寸
  const createHoverEffects = (width, height) => {
    // 创建粒子
    const particleCount = 15;
    const newParticles = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: `exp-particle-${i}`,
        x: getRandomNumber(10, width - 10),
        y: getRandomNumber(10, height - 10),
        size: getRandomNumber(3, 8),
        color: getRandomColor(),
        duration: getRandomNumber(1.5, 3.0),
        delay: getRandomNumber(0, 0.5),
        driftX: getRandomNumber(-20, 20),
        driftY: getRandomNumber(-20, 20)
      });
    }

    setParticles(newParticles);
  };

  // 确保cardRefs数组与EXPERIENCE长度一致
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, EXPERIENCE.length);
  }, []);

  // 添加一个独立的清理逻辑
  useEffect(() => {
    // 当activeEffectIndex为null且有粒子时，设置一个延迟清理
    if (activeEffectIndex === null && particles.length > 0) {
      // 找出持续时间最长的粒子
      const maxDuration = Math.max(...particles.map(p => p.duration + p.delay));
      // 设置定时器，让粒子可以完成它们的动画
      const timer = setTimeout(() => {
        setParticles([]);
      }, maxDuration * 1000 + 500); // 转换为毫秒并添加额外缓冲

      return () => clearTimeout(timer);
    }
  }, [activeEffectIndex, particles]);

  return (
    <div className="experience">
      <h2>Experience</h2>

      <div>
        {/* 经验列表 */}
        {EXPERIENCE.map((experience, index) => (
          <div
            key={index}
            className="experience-item"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            ref={el => cardRefs.current[index] = el}
          >
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

            {/* 只在当前激活的项目上显示粒子效果 */}
            {activeEffectIndex === index && (
              <div className="experience-particles-container">
                {/* 粒子 */}
                {particles.map(particle => (
                  <div
                    key={particle.id}
                    className="experience-particle active"
                    style={{
                      left: `${particle.x}px`,
                      top: `${particle.y}px`,
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      backgroundColor: particle.color,
                      boxShadow: `0 0 10px 2px ${particle.color}`,
                      '--duration': `${particle.duration}s`,
                      animationDelay: `${particle.delay}s`,
                      '--drift-x': `${particle.driftX}px`,
                      '--drift-y': `${particle.driftY}px`
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
