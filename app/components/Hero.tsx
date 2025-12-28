'use client';

import Link from 'next/link';
import { useLanguage } from '../i18n/LanguageContext';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  showCta?: boolean;
  backgroundImage?: string;
}

export default function Hero({ 
  title, 
  subtitle, 
  description, 
  showCta = false,
  backgroundImage = '/images/browser-pexels-unsplash/hero - mercedes.jpg'
}: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 font-medium text-sm tracking-wide">
              {subtitle}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          {showCta && (
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30"
              >
                {t.hero.cta}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all duration-300 hover:scale-105"
              >
                {t.about.readMore}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showCta && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll" />
          </div>
        </div>
      )}
    </section>
  );
}

