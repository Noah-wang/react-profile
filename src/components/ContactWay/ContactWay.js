import React, { useState } from "react";
import "./ContactWayStyle.css"
import { IoLogoWechat, IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { useLanguage } from "../../context/LanguageContext";

const ContactWay = ({ content, icon }) => {
    const { language } = useLanguage();
    const [showCopied, setShowCopied] = useState(false);

    // 创建图标组件映射
    const IconComponents = {
        IoLogoWechat,
        MdOutlineMailOutline,
        IoPhonePortraitOutline
    };

    // 获取对应的图标组件
    const IconComponent = IconComponents[icon];

    // 点击处理函数
    const handleClick = () => {
        navigator.clipboard.writeText(content)
            .then(() => {
                setShowCopied(true);
                setTimeout(() => setShowCopied(false), 1000); // 1秒后隐藏提示
            })
    };

    return (
        <div className="contactway-container" onClick={handleClick}>
            {IconComponent && <IconComponent size={40} style={{ color: "#cdd117" }} />}
            {/* 复制成功提示 */}
            <div className={`copy-tooltip ${showCopied ? 'show' : ''}`}>
                {language === 'zh' ? '已复制: ' : 'Copied: '}{content}
            </div>
        </div>
    )
}

export default ContactWay;