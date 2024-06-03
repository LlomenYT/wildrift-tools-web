// LanguageContext.js
import React, { createContext, useState, useContext } from 'react';
import enData from '../lang/en.json';
import esData from '../lang/es.json';

const languages = {
    en: enData,
    es: esData,
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');
    const languageData = languages[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, languageData }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
