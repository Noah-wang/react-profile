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
    //是否是小屏幕
    const [isMobileView, setIsMobileView] = useState(false);

    // 检测屏幕尺寸
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobileView(window.innerWidth <= 480);
        };

        // 初始检测
        checkScreenSize();

        // 监听窗口大小变化
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

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

    // 计算小屏幕下照片展开的样式（垂直展开）
    const getMobilePhotoStyle = (index) => {
        const totalPhotos = PHOTO.length;
        const scrollProgress = Math.min(scrollY, 1);
        
        // 计算照片间的垂直间隔（从上到下展开）
        const verticalGap = 80; // 照片之间的垂直距离
        const verticalOffset = index * verticalGap * scrollProgress;
        
        // 计算水平轻微偏移（左右交错）
        const horizontalOffset = index % 2 === 0 ? -20 * scrollProgress : 20 * scrollProgress;
        
        // 添加轻微随机旋转，使照片看起来更自然
        const rotation = ((index % 3) - 1) * 8 * scrollProgress;
        
        return {
            transform: `translate3d(${horizontalOffset}px, ${verticalOffset}px, ${-index * 5}px) 
                       rotate(${rotation}deg)`,
            opacity: isInitialized ? 1 : 0,
            zIndex: totalPhotos - index,
            transition: isInitialized ? "transform 0.5s ease, opacity 0.5s ease" : "none"
        };
    };

    // 计算桌面版照片展开的样式（扇形展开）
    const getDesktopPhotoStyle = (index) => {
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
        //-向下拉  0.7椭圆
        const y = -Math.cos(radian) * radius * 0.7;
        
        return {
            transform: `translate3d(${x}px, ${y}px, ${-index * 15}px) 
                       rotate(${angle * scrollProgress}deg)`,
            opacity: isInitialized ? 1 : 0,
            zIndex: totalPhotos - index,
            transition: isInitialized ? "transform 0.5s ease, opacity 0.5s ease" : "none"
        };
    };

    // 根据屏幕尺寸选择合适的样式
    const getPhotoExpandStyle = (index) => {
        return isMobileView ? getMobilePhotoStyle(index) : getDesktopPhotoStyle(index);
    };

    return (
        <div className="photo-parallax-container" ref={containerRef}>
            <div className="photo-stack-container">
                <div className={`photo-stack ${isMobileView ? 'mobile-view' : ''}`}>
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