import React, { useState } from 'react';
import './myLifeStyle.css';
import { MY_LIFE } from '../../Constant/index';

const MyLife = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <div className="my-life-container">
            <h1>My Life</h1>
            <h3>我是一个跑者，欢迎访问我的<a href="https://noah-wang.github.io/" target="_blank" >博客</a>，了解更多我的跑步故事</h3>
            <div className="accordion-container">
                {MY_LIFE.map((item, index) => (
                    <div
                        // 选中就采用active的css
                        className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                        key={index}
                        // 鼠标悬停就选中
                        onMouseEnter={() => setActiveIndex(index)}
                    >
                        <img src={item.image} alt={item.description} />
                        {/* 为文字加上阴影-增加可读 */}
                        <div className="shadow">
                            <h3>{item.description}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyLife;