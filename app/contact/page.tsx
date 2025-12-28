'use client';

import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import { useLanguage } from '../i18n/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={t.contactPage.heroTitle}
        subtitle={t.contactPage.heroSubtitle}
        backgroundImage="/images/browser-pexels-unsplash/hero - mercedes.jpg"
      />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-50 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-emerald-700 font-medium text-sm">Get In Touch</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {t.contact.sendMessage}
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                {t.contact.messageDescription}
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold mb-1">{t.contact.phone}</h3>
                    <a href="tel:+40755297614" className="text-emerald-600 hover:text-emerald-700 font-medium text-lg">
                      +40 755 297 614
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold mb-1">{t.contact.email}</h3>
                    <a href="mailto:office@bddlogspeed.ro" className="text-emerald-600 hover:text-emerald-700 font-medium text-lg">
                      office@bddlogspeed.ro
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold mb-1">{t.contact.address}</h3>
                    <p className="text-slate-600">
                      Romania, City Arad<br />
                      Str. Slatinei, Nr. 2
                    </p>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group">
                  <div className="w-12 h-12 bg-[#1877F2] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold mb-1">Facebook</h3>
                    <a 
                      href="https://www.facebook.com/bdd.logspeed" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#1877F2] hover:text-[#1565d8] font-medium"
                    >
                      @bdd.logspeed
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-10 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100">
                <h3 className="text-slate-900 font-bold text-lg mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Working Hours
                </h3>
                <div className="space-y-2 text-slate-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-slate-900">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-slate-900">09:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-slate-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Find Us
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-600">
              Visit our office in Arad, Romania
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.7799789692584!2d21.3047!3d46.1866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDExJzExLjgiTiAyMcKwMTgnMTcuMCJF!5e0!3m2!1sen!2sro!4v1640000000000!5m2!1sen!2sro"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            {/* Map Overlay Card */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl p-5 shadow-lg max-w-xs hidden md:block">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">BDD Logspeed</h4>
                  <p className="text-slate-600 text-sm">Str. Slatinei, Nr. 2<br />Arad, Romania</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fiscal Information Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/50 rounded-2xl p-8 md:p-10 border border-slate-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-2">{t.footer.fiscalInfo}</h3>
                <p className="text-slate-400">Official company registration details</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">{t.footer.companyName}</p>
                <p className="text-white font-semibold">S.C. BE DOUBLE D LOGSPEED S.R.L.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-400 text-sm mb-1">{t.footer.cui}</p>
                  <p className="text-white font-semibold">35422580</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">{t.footer.regNumber}</p>
                  <p className="text-white font-semibold">J02/58/2016</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

