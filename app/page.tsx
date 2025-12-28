'use client';

import Image from 'next/image';
import Link from 'next/link';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhyUs from './components/WhyUs';
import HowWeWork from './components/HowWeWork';
import { useLanguage } from './i18n/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        description={t.hero.description}
        showCta={true}
      />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/verde 3.jpg"
                  alt="BDD Logspeed Truck"
                  fill
                  className="object-cover"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-slate-900 font-bold">Since 2016</p>
                      <p className="text-slate-500 text-sm">Trusted Partner</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl -z-10" />
            </div>

            {/* Content Side */}
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-50 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-emerald-700 font-medium text-sm">About Us</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {t.about.title}
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {t.about.description}
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                {t.about.readMore}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 font-medium text-sm">Our Services</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {t.services.title}
              </h2>
              
              <p className="text-lg text-slate-300 leading-relaxed mb-10">
                {t.services.description}
              </p>

              {/* Stats Grid */}
              <Stats />
            </div>

            {/* Image */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/verde 2.jpg"
                  alt="BDD Logspeed Fleet"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-emerald-500/30 rounded-2xl transform translate-x-4 translate-y-4 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <WhyUs />

      {/* How We Work Section */}
      <HowWeWork />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-700 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            {t.hero.description}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {t.howWeWork.cta}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Fleet
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <Image
                src="/images/verde 2.jpg"
                alt="BDD Logspeed Fleet"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <Image
                src="/images/verde 3.jpg"
                alt="BDD Logspeed Truck"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <Image
                src="/images/alb.jpg"
                alt="BDD Logspeed White Truck"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
