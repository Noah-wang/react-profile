import React, { useState, useEffect, useRef } from 'react';
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
    // 是否激活
    isActive = false,
    // 粒子数量
    count = 100,
    // 容器宽度
    containerWidth = 300,
    // 容器高度
    containerHeight = 300,
    // 最大持续时间
    maxDuration = 3.0,
    // 最小持续时间
    minDuration = 1.5,
    // 粒子效果的className
    className = 'particle-effect',
    // 是否在鼠标移开时保持粒子效果
    persistOnLeave = true 
}) => {
    const [particles, setParticles] = useState([]);
    const activeRef = useRef(isActive);
    const timerRef = useRef(null);
    const particlesRef = useRef([]); 

    // 创建粒子
    useEffect(() => {
        // 保存当前状态到ref
        activeRef.current = isActive;
        
        if (isActive) {
            // 立即清除定时器
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
            
            // 当开始悬停时，创建新粒子（短暂延迟确保DOM更新）
            setTimeout(() => {
                if (!activeRef.current) return; // 如果状态已改变，不创建新粒子
                
                const newParticles = [];
                const timestamp = Date.now();
                
                for (let i = 0; i < count; i++) {
                    const duration = getRandomNumber(minDuration, maxDuration);
                    const delay = getRandomNumber(0, 0.2);
                    
                    // 创建粒子并计算其生命周期
                    const particle = {
                        id: `particle-${i}-${timestamp}`, // 添加时间戳确保id唯一
                        x: getRandomNumber(10, containerWidth - 10),
                        y: getRandomNumber(10, containerHeight - 10),
                        size: getRandomNumber(3, 8),
                        color:  getRandomColor(),
                        duration: duration,
                        delay: delay,
                        driftX: getRandomNumber(-20, 20),
                        driftY: getRandomNumber(-20, 20),
                        // 添加生命周期信息
                        createdAt: timestamp,
                        expiresAt: timestamp + ((duration + delay) * 1000)
                    };
                    
                    newParticles.push(particle);
                }
                
                // 将新粒子添加到现有粒子列表，而不是替换
                setParticles(prevParticles => {
                    const combinedParticles = [...prevParticles, ...newParticles];
                    particlesRef.current = combinedParticles;
                    return combinedParticles;
                });
            }, 10);

        } else if (!persistOnLeave) {
            // 如果不保持粒子效果，则清理粒子
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            
            timerRef.current = setTimeout(() => {
                setParticles([]);
                timerRef.current = null;
            }, 1000);
        }
        
        // 清理函数
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [isActive, count, containerWidth, containerHeight, maxDuration, minDuration, persistOnLeave]);

    // 自动清理过期粒子的效果
    useEffect(() => {
        // 创建定时器，定期检查并移除已过期的粒子
        const cleanupInterval = setInterval(() => {
            const now = Date.now();
            
            // 筛选出尚未过期的粒子
            setParticles(prevParticles => {
                const stillActiveParticles = prevParticles.filter(p => p.expiresAt > now);
                
                // 只有当有粒子被移除时才更新状态
                if (stillActiveParticles.length < prevParticles.length) {
                    particlesRef.current = stillActiveParticles;
                    return stillActiveParticles;
                }
                
                return prevParticles;
            });
        }, 1000); // 每秒检查一次
        
        return () => clearInterval(cleanupInterval);
    }, []);

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