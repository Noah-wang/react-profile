import React, { useState, useEffect, useRef } from "react";
import "./PhotoStyle.css";
import { PHOTO } from "../../Constant/index";

const Photo = () => {
    const [scrollY, setScrollY] = useState(0);
    const containerRef = useRef(null);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        // 页面加载时设置初始状态，让所有图片叠在一起
        setTimeout(() => {
            setIsInitialized(true);
        }, 100);

        const handleScroll = () => {
            if (containerRef.current) {
                const container = containerRef.current;
                const rect = container.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                
                // 添加滚动延迟阈值 (0.3 = 需要滚动30%后才开始)
                const scrollThreshold = 0.3;
                
                // 计算滚动进度，但添加延迟启动
                const rawProgress = (viewportHeight - rect.top) / viewportHeight;
                
                // 基于阈值计算实际进度
                let adjustedProgress = 0;
                if (rawProgress > scrollThreshold) {
                    // 将进度重新映射到0-1范围
                    adjustedProgress = (rawProgress - scrollThreshold) / (1 - scrollThreshold);
                }
                
                // 限制进度范围
                const progress = Math.max(0, Math.min(1, adjustedProgress));
                setScrollY(progress);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // 初始调用

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 计算照片展开的样式
    const getPhotoExpandStyle = (index) => {
        const totalPhotos = PHOTO.length;
        const scrollProgress = Math.min(scrollY * 1.2, 1);

        // 调整角度范围和展开半径
        const angle = -75 + (150 / (totalPhotos - 1)) * index; // 角度范围从-75°到75°
        const radius = 400 * scrollProgress; // 增加展开半径
        
        const radian = angle * (Math.PI / 180);
        const x = Math.sin(radian) * radius;
        const y = -Math.cos(radian) * radius * 0.7; // 增加Y轴缩放系数

        return {
            transform: `translate3d(${x}px, ${y}px, ${-index * 15}px) 
                       rotate(${angle * scrollProgress}deg)`, // 增加Z轴偏移
            zIndex: totalPhotos - index,
            opacity: 0.8 + (scrollProgress * 0.2),
            boxShadow: `${x/15}px ${y/15}px 40px rgba(0, 0, 0, ${0.2 + scrollProgress*0.4})`, // 增强阴影
            transition: 'none'
        };
    };

    return (
        <div className="photo-parallax-container" ref={containerRef}>
            <div className="photo-stack-container">
                <div className="photo-stack">
                    {PHOTO.map((item, index) => (
                        <div
                            className="photo-item"
                            key={`photo-${index}`}
                            style={getPhotoExpandStyle(index)}
                        >
                            <div className="photo-card">
                                <img src={item.image} alt={`Photo ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Photo;