import React, { useEffect, useRef } from 'react';

const CanvasBackground = ({ style = 'gradient' }) => {
    const canvasRef = useRef(null);
    const animationFrameRef = useRef(null);
    const particlesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // 设置canvas尺寸
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // 创建粒子
        const createParticles = () => {
            const particles = [];
            const particleCount = 100;

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 1,
                    speedX: Math.random() * 0.5 - 0.25,
                    speedY: Math.random() * 0.5 - 0.25,
                    opacity: Math.random() * 0.5 + 0.2
                });
            }

            return particles;
        };

        // 动画函数
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 绘制渐变背景
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#0a192f');
            gradient.addColorStop(1, '#112240');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // 更新和绘制粒子
            particlesRef.current.forEach(particle => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // 边界检查
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // 绘制粒子
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(100, 255, 218, ${particle.opacity})`;
                ctx.fill();
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        // 初始化粒子
        particlesRef.current = createParticles();

        // 开始动画
        animate();

        // 清理函数
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [style]);

    return (
        <canvas
            ref={canvasRef}
            className="canvas-background"
            style={{

                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -2,
                opacity: 0.7,
                pointerEvents: 'none'
            }}
        />
    );
};

export default CanvasBackground; 