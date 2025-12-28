'use client';

import { useLanguage } from '../i18n/LanguageContext';
import { useEffect, useState, useRef } from 'react';

interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

export default function Stats() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const shipments = useCountUp(110, 2000, isVisible);
  const trucks = useCountUp(10, 1500, isVisible);
  const countries = useCountUp(12, 1500, isVisible);

  const stats: StatItem[] = [
    {
      value: `${shipments}+`,
      label: t.services.stats.shipmentsLabel,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      value: `${trucks}`,
      label: t.services.stats.trucksLabel,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h8M8 17a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 104 0 2 2 0 00-4 0zM1 9h3v8H1V9zm3 0V6a1 1 0 011-1h7a1 1 0 011 1v3m-9 0h9m0 0h3l3 4v4h-3m-3-8v8" />
        </svg>
      ),
    },
    {
      value: `${countries}`,
      label: t.services.stats.countriesLabel,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 text-center transform transition-all duration-500 hover:scale-105 hover:border-emerald-500/50 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-xl text-emerald-400 mb-4">
            {stat.icon}
          </div>
          <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
            {stat.value}
          </div>
          <div className="text-slate-400 text-sm uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

