import React, { useState } from 'react';
import "./CardStyle.css";


// In your Card component
const Card = ({ frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    // 卡片状态
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
                >
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