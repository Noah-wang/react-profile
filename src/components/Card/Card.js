import React, { useState, useRef, useEffect } from 'react';
import "./CardStyle.css";
import ParticleEffect from "../../effect/particleEffect";

// Card组件
const Card = ({ frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // 卡片翻转处理
    const handleFlip = () => {
        if (!isFlipped) {
            setIsFlipped(true);
        }
    };


    return (
        <div className="card-container">
            {/* 卡片样式 */}
            <div className={`card ${isFlipped ? 'flipped' : ''}`}>
                {/* 正面 */}
                <div
                    className="card-front"
                    onClick={handleFlip}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <ParticleEffect
                        isActive={isHovering}
                        count={40}
                        containerWidth={300}
                        containerHeight={300}
                        maxDuration={3.0}
                        minDuration={1.5}
                    />
                    {frontContent}
                </div>

                {/* 背面 */}
                <div className="card-back">
                    {backContent}
                </div>
            </div>

        </div>
    );
};

export default Card;