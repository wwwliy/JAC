import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { languages, translations } from './translations';

const LanguageContext = createContext();

const STORAGE_KEY = 'jac-language';

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Check URL parameter first
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    // Check localStorage
    const stored = localStorage.getItem(STORAGE_KEY);
    
    if (urlLang && languages[urlLang]) {
      setLang(urlLang);
      localStorage.setItem(STORAGE_KEY, urlLang);
    } else if (stored && languages[stored]) {
      setLang(stored);
    } else {
      // Default to English, no overlay
      localStorage.setItem(STORAGE_KEY, 'en');
    }
  }, []);

  useEffect(() => {
    const langConfig = languages[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = langConfig.dir;
    if (langConfig.dir === 'rtl') {
      document.body.classList.add('font-arabic');
      document.body.classList.remove('font-chinese');
    } else if (lang === 'zh') {
      document.body.classList.add('font-chinese');
      document.body.classList.remove('font-arabic');
    } else {
      document.body.classList.remove('font-arabic', 'font-chinese');
    }
  }, [lang]);

  const changeLanguage = useCallback((newLang) => {
    if (languages[newLang]) {
      setLang(newLang);
      localStorage.setItem(STORAGE_KEY, newLang);
      // Update URL without reload
      const url = new URL(window.location);
      url.searchParams.set('lang', newLang);
      window.history.replaceState({}, '', url);
    }
  }, []);

  const t = useCallback((key) => {
    const keys = key.split('.');
    let result = translations[lang];
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key;
      }
    }
    return result;
  }, [lang]);

  const closeOverlay = useCallback(() => {
    setShowOverlay(false);
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t, showOverlay, closeOverlay, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}