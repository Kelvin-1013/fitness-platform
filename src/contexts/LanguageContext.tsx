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
  dashboard: {
    en: 'Dashboard',
    es: 'Panel de control',
    fr: 'Tableau de bord'
  },
  equipment: {
    en: 'Connected Equipment',
    es: 'Equipamiento Conectado',
    fr: 'Équipement Connecté'
  },
  trainingMetrics: {
    en: 'Training Metrics',
    es: 'Métricas de Entrenamiento',
    fr: 'Métriques d\'entraînement'
  },
  activeUsers: {
    en: 'Active Users',
    es: 'Usuarios Activos',
    fr: 'Utilisateurs Actifs'
  },
  status: {
    en: 'Status',
    es: 'Estado',
    fr: 'Statut'
  },
  active: {
    en: 'Active',
    es: 'Activo',
    fr: 'Actif'
  },
  maintenance: {
    en: 'Maintenance',
    es: 'Mantenimiento',
    fr: 'Maintenance'
  }
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