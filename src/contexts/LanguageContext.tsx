import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, Record<Language, string>>;
}

const translations = {
  welcome: {
    en: 'Welcome to Smart Fitness Hub',
    es: 'Bienvenido a Smart Fitness Hub',
    fr: 'Bienvenue sur Smart Fitness Hub'
  },
  login: {
    en: 'Login',
    es: 'Iniciar sesión',
    fr: 'Se connecter'
  },
  // Add more translations as needed
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};