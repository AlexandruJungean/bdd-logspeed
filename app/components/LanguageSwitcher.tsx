'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { languages, Language } from '../i18n/translations';

// SVG Flag components for each country
const flags: Record<Language, ReactNode> = {
  en: (
    <svg className="w-5 h-4 rounded-sm" viewBox="0 0 60 30">
      <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
      <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
      <g clipPath="url(#s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  ),
  ro: (
    <svg className="w-5 h-4 rounded-sm" viewBox="0 0 30 20">
      <rect width="10" height="20" fill="#002B7F"/>
      <rect x="10" width="10" height="20" fill="#FCD116"/>
      <rect x="20" width="10" height="20" fill="#CE1126"/>
    </svg>
  ),
  hu: (
    <svg className="w-5 h-4 rounded-sm" viewBox="0 0 30 20">
      <rect width="30" height="6.67" fill="#CE2939"/>
      <rect y="6.67" width="30" height="6.67" fill="#fff"/>
      <rect y="13.34" width="30" height="6.67" fill="#477050"/>
    </svg>
  ),
  de: (
    <svg className="w-5 h-4 rounded-sm" viewBox="0 0 30 20">
      <rect width="30" height="6.67" fill="#000"/>
      <rect y="6.67" width="30" height="6.67" fill="#DD0000"/>
      <rect y="13.34" width="30" height="6.67" fill="#FFCE00"/>
    </svg>
  ),
  fr: (
    <svg className="w-5 h-4 rounded-sm" viewBox="0 0 30 20">
      <rect width="10" height="20" fill="#002395"/>
      <rect x="10" width="10" height="20" fill="#fff"/>
      <rect x="20" width="10" height="20" fill="#ED2939"/>
    </svg>
  ),
  it: (
    <svg className="w-5 h-4 rounded-sm" viewBox="0 0 30 20">
      <rect width="10" height="20" fill="#009246"/>
      <rect x="10" width="10" height="20" fill="#fff"/>
      <rect x="20" width="10" height="20" fill="#CE2B37"/>
    </svg>
  ),
  es: (
    <svg className="w-5 h-4 rounded-sm" viewBox="0 0 30 20">
      <rect width="30" height="20" fill="#AA151B"/>
      <rect y="5" width="30" height="10" fill="#F1BF00"/>
    </svg>
  ),
  pl: (
    <svg className="w-5 h-4 rounded-sm" viewBox="0 0 30 20">
      <rect width="30" height="10" fill="#fff"/>
      <rect y="10" width="30" height="10" fill="#DC143C"/>
    </svg>
  ),
  cs: (
    <svg className="w-5 h-4 rounded-sm" viewBox="0 0 30 20">
      <rect width="30" height="10" fill="#fff"/>
      <rect y="10" width="30" height="10" fill="#D7141A"/>
      <polygon points="0,0 15,10 0,20" fill="#11457E"/>
    </svg>
  ),
};

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages[language];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 text-white border border-white/20"
        aria-label="Select language"
      >
        {flags[language]}
        <span className="text-sm font-medium hidden sm:inline">{currentLang.name}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 overflow-hidden z-50 animate-fade-in">
          {(Object.keys(languages) as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 transition-colors duration-150 ${
                language === lang ? 'bg-emerald-600/30 text-emerald-400' : 'text-white'
              }`}
            >
              {flags[lang]}
              <span className="font-medium">{languages[lang].name}</span>
              {language === lang && (
                <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
