import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

// 语言提供者组件
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('zh'); // 默认中文

  // 切换语言的函数
  const toggleLanguage = () => {
    //改为函数声明
    setLanguage(preLanguage => preLanguage === 'zh' ? 'en' : 'zh');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 自定义hook，便于在组件中使用语言上下文
export const useLanguage = () => useContext(LanguageContext); 