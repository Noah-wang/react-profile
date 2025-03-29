import React, { useState } from 'react';
import './myLifeStyle.css';
import { MY_LIFE } from '../../Constant/index';
import Photo from '../Photo/Photo';
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../locales/translations";

const MyLife = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <div className="my-life-container">
            <h1>{t.myLifeTitle}</h1>
            <h3>
                {t.runnerDesc}
                <a href="https://noah-wang.github.io/" target="_blank" rel="noopener noreferrer">
                    {t.blogLink}
                </a>
                {t.runningStory}
            </h3>
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

            <h3 style={{ marginTop: '4rem' }}>
                {t.photographyDesc}
                <a href="https://500px.com.cn/noahwang/" target="_blank" rel="noopener noreferrer">
                    {t.photoLink}
                </a>
            </h3>

            <div className="photo-container">
                <Photo />
            </div>
        </div>
    );
};

export default MyLife;