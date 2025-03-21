// src/components/Effects/ParticleEffect.js
import React, { useState, useEffect } from 'react';
import './particleEffectStyle.css';

// 生成随机数
const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
};

// 生成随机颜色
const getRandomColor = () => {
    const colors = ['#ff7ac8', '#7acdff', '#fcf67a', '#7affc8', '#ff7a7a', '#d67aff'];
    return colors[Math.floor(Math.random() * colors.length)];
};

/**
 * 粒子效果组件
 */
const ParticleEffect = ({
    isActive = false,
    count = 15,
    containerWidth = 300,
    containerHeight = 300,
    customColors = null,
    maxDuration = 3.0,
    minDuration = 1.5,
    className = 'particle-effect'
}) => {
    const [particles, setParticles] = useState([]);

    // 创建粒子
    useEffect(() => {
        if (isActive) {
            const newParticles = [];
            for (let i = 0; i < count; i++) {
                newParticles.push({
                    id: `particle-${i}`,
                    x: getRandomNumber(10, containerWidth - 10),
                    y: getRandomNumber(10, containerHeight - 10),
                    size: getRandomNumber(3, 8),
                    color: customColors ? customColors[Math.floor(Math.random() * customColors.length)] : getRandomColor(),
                    duration: getRandomNumber(minDuration, maxDuration),
                    delay: getRandomNumber(0, 0.5),
                    driftX: getRandomNumber(-20, 20),
                    driftY: getRandomNumber(-20, 20)
                });
            }
            setParticles(newParticles);
        }
    }, [isActive, count, containerWidth, containerHeight, customColors, maxDuration, minDuration]);

    // 清理粒子
    useEffect(() => {
        if (!isActive && particles.length > 0) {
            const maxDurationMs = Math.max(...particles.map(p => p.duration + p.delay)) * 1000 + 500;
            const timer = setTimeout(() => {
                setParticles([]);
            }, maxDurationMs);

            return () => clearTimeout(timer);
        }
    }, [isActive, particles]);

    // 如果没有粒子，不渲染任何内容
    if (particles.length === 0) {
        return null;
    }

    return (
        <div className={`${className}-container`}>
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className={`${className} active`}
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
    );
};

export default ParticleEffect;