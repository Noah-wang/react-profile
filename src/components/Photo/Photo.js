import React, { useState, useEffect, useRef } from "react";
import "./PhotoStyle.css";
import { PHOTO } from "../../Constant/index";

const Photo = () => {
    //滚动进度
    const [scrollY, setScrollY] = useState(0);
    //容器
    const containerRef = useRef(null);
    //初始化标记
    const [isInitialized, setIsInitialized] = useState(false);

    //滚动监听
    useEffect(() => {
        // 页面加载时设置初始状态，让所有图片叠在一起
        setTimeout(() => {
            setIsInitialized(true);
        }, 100);

        //滚动监听
        const handleScroll = () => {
            if (containerRef.current) {
                const container = containerRef.current;
                const rect = container.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                // 需要滚动30%后才开始变化
                const scrollThreshold = 0.3;

                // 计算滚动进度
                const rawProgress = (viewportHeight - rect.top) / viewportHeight;

                // 基于阈值计算实际进度
                let adjustedProgress = 0;
                if (rawProgress > scrollThreshold) {
                    //开始进入进度
                    adjustedProgress = (rawProgress - scrollThreshold) / (1 - scrollThreshold);
                }

                // 限制从0到1的范围
                const progress = Math.max(0, Math.min(1, adjustedProgress));
                setScrollY(progress);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 计算照片展开的样式
    const getPhotoExpandStyle = (index) => {
        const totalPhotos = PHOTO.length;
        const scrollProgress = Math.min(scrollY, 1);


        // 角度范围从-75°到75°
        const angle = -75 + (150 / (totalPhotos - 1)) * index;
        // 增加展开半径
        const radius = 400 * scrollProgress;

        // 转换为弧度
        const radian = angle * (Math.PI / 180);

        // x方向的横移
        const x = Math.sin(radian) * radius;
        console.log(x)
        //-向下拉  0.7椭圆
        const y = -Math.cos(radian) * radius * 0.7;
        console.log(y)
        return {
            transform: `translate3d(${x}px, ${y}px, ${-index * 15}px) 
                       rotate(${angle * scrollProgress}deg)`,
            //层叠关系
            zIndex: totalPhotos - index,
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