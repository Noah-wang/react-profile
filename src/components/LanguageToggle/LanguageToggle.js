import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../locales/translations';
import './LanguageToggleStyle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <button 
      className="language-toggle"
      onClick={toggleLanguage}
    >
      {translations[language].switchLanguage}
    </button>
  );
};

export default LanguageToggle; 