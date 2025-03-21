import React, { useState, useRef, useEffect } from 'react';
import "./CardStyle.css";

// 生成随机数
const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
};

// 生成随机颜色
const getRandomColor = () => {
    const colors = ['#ff7ac8', '#7acdff', '#fcf67a', '#7affc8', '#ff7a7a', '#d67aff'];
    return colors[Math.floor(Math.random() * colors.length)];
};

// Card组件
const Card = ({ frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [particles, setParticles] = useState([]);

    const [isHovering, setIsHovering] = useState(false);

    const containerRef = useRef(null);
    const cardFrontRef = useRef(null);

    // 卡片翻转处理
    const handleFlip = () => {
        if (!isFlipped) {
            setIsFlipped(true);
            createParticles();

        }
    };

    // 创建粒子效果
    const createParticles = () => {
        const particleCount = 30; // 粒子数量
        const newParticles = [];

        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                id: i,
                x: getRandomNumber(0, 300), // 随机x位置
                y: getRandomNumber(0, 300), // 随机y位置
                size: getRandomNumber(5, 10), // 随机大小
                color: getRandomColor(), // 随机颜色
                duration: getRandomNumber(0.8, 1.2), // 随机动画持续时间
                delay: getRandomNumber(0, 0.5) // 随机延迟
            });
        }

        setParticles(newParticles);
    };

    // 创建彩带效果


    // Hover事件处理
    const handleMouseEnter = () => {
        if (!isFlipped) {
            setIsHovering(true);
            createHoverEffects();
        }
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    // 创建hover效果
    const createHoverEffects = () => {
        const particleCount = 10;

        const newParticles = [];

        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                id: `hover-${i}`,
                x: getRandomNumber(0, 300),
                y: getRandomNumber(0, 300),
                size: getRandomNumber(3, 8),
                color: getRandomColor(),
                duration: getRandomNumber(0.6, 1.0),
                delay: getRandomNumber(0, 0.3)
            });
        }

        setParticles(newParticles);
    };

    // 清理效果
    useEffect(() => {
        if ((particles.length > 0) && !isHovering) {
            const timer = setTimeout(() => {
                if (!isHovering) {
                    setParticles([]);

                }
            }, 2000); // 2秒后清理

            return () => clearTimeout(timer);
        }
    }, [particles, isHovering]);

    return (
        <div className="card-container" ref={containerRef}>
            {/* 卡片样式 */}
            <div className={`card ${isFlipped ? 'flipped' : ''}`}>
                {/* 正面 */}
                <div
                    className="card-front"
                    onClick={handleFlip}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    ref={cardFrontRef}
                >
                    {frontContent}
                </div>

                {/* 背面 */}
                <div className="card-back">
                    {backContent}
                </div>
            </div>

            {/* 粒子容器 */}
            <div className={`particles-container ${isHovering ? 'hover-active' : ''}`}>
                {/* 生成粒子 */}
                {particles.map(particle => (
                    <div
                        key={`particle-${particle.id}`}
                        className="particle active"
                        style={{
                            left: `${particle.x}px`,
                            top: `${particle.y}px`,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            backgroundColor: particle.color,
                            boxShadow: `0 0 10px 2px ${particle.color}`,
                            '--duration': `${particle.duration}s`,
                            animationDelay: `${particle.delay}s`
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Card;