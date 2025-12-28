'use client';

import Image from 'next/image';
import Link from 'next/link';
import Hero from '../components/Hero';
import Values from '../components/Values';
import { useLanguage } from '../i18n/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={t.aboutPage.heroTitle}
        subtitle={t.aboutPage.heroSubtitle}
        backgroundImage="/images/browser-pexels-unsplash/hero - mercedes.jpg"
      />

      {/* About Company Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/verde 3.jpg"
                  alt="BDD Logspeed Team"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-emerald-600 rounded-2xl p-6 text-white shadow-xl hidden md:block">
                <div className="text-center">
                  <p className="text-4xl font-bold">2016</p>
                  <p className="text-emerald-100 text-sm mt-1">Founded</p>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-500/20 rounded-2xl -z-10" />
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-emerald-50 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-emerald-700 font-medium text-sm">Who We Are</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {t.about.title}
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {t.about.description}
              </p>

              <p className="text-slate-600 leading-relaxed mb-8">
                With a fleet of modern trucks and a team of experienced professionals, we ensure that your goods reach their destination safely and on time. Our commitment to excellence has made us a preferred choice for businesses across Europe.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-slate-700">8+ Years Experience</span>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-slate-700">12 Countries</span>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-slate-700">10 Modern Trucks</span>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-slate-700">110+ Monthly Shipments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 font-medium text-sm">Our Purpose</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {t.mission.title}
              </h2>
              
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {t.mission.description}
              </p>

              {/* Mission Points */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Operational Excellence</h4>
                    <p className="text-slate-400 text-sm">We strive for perfection in every delivery</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Maximum Safety</h4>
                    <p className="text-slate-400 text-sm">Your goods are in safe hands</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Customer Satisfaction</h4>
                    <p className="text-slate-400 text-sm">Your success is our priority</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/browser-pexels-unsplash/marcin-jozwiak-kGoPcmpPT7c-unsplash.jpg"
                  alt="Road Transport"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>
              {/* Decorative border */}
              <div className="absolute inset-0 border-2 border-emerald-500/30 rounded-2xl transform translate-x-4 translate-y-4 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <Values />

      {/* Team/Fleet Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Fleet
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto">
              Modern Mercedes-Benz trucks equipped with the latest technology for safe and efficient transportation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-lg">
              <Image
                src="/images/verde 2.jpg"
                alt="Green BDD Logspeed Truck"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold">Mercedes-Benz Actros</p>
                <p className="text-emerald-400 text-sm">AR-77-BDD</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-lg">
              <Image
                src="/images/verde 3.jpg"
                alt="BDD Logspeed Truck Front View"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold">Mercedes-Benz Actros</p>
                <p className="text-emerald-400 text-sm">AR-77-BDD</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-lg">
              <Image
                src="/images/alb.jpg"
                alt="White BDD Logspeed Truck"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold">Mercedes-Benz Actros</p>
                <p className="text-emerald-400 text-sm">AR-73-BDD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Get in touch with our team and let us handle your transportation needs with care and professionalism.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30"
          >
            {t.howWeWork.cta}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

