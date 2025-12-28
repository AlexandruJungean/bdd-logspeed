'use client';

import { useState } from 'react';
import Image from 'next/image';

const allFleetImages = [
  { src: '/images/verde 3.jpg', alt: 'BDD Logspeed Truck Front View' },
  { src: '/images/_hPd4bwkBsbUmNp4-pbKQ4TdxMzn-5Z7NNPFaxdONRE=_plaintext_638292343263419842.jpg', alt: 'BDD Logspeed Fleet' },
  { src: '/images/33e2RLcBfLpHP2xjScpjTY6DQb14sM2ww531wW1Yyik=_plaintext_638292343263088919.jpg', alt: 'BDD Logspeed Truck' },
  { src: '/images/dj6KzUfNojE-kOoccYjxIoD537lg3A04y1dwjWYJOMg=_plaintext_638292343263229609.jpg', alt: 'BDD Logspeed Fleet' },
  { src: '/images/fx1D8O9B_CWf-TEoV7gaH9AtYhu38t04BhNwwIOa4VU=_plaintext_638292343263705579.jpg', alt: 'BDD Logspeed Truck' },
  { src: '/images/yvACU8GX82wLDoESsJat11GGedWhV7_9FwqZu8SyU4g=_plaintext_638292343263018944.jpg', alt: 'BDD Logspeed Fleet' },
  { src: '/images/k5-K0BbuojZrri7UrSGeRmj_fvCHZhRfyfS2k5W3LDU=_plaintext_638292343263565086.jpg', alt: 'BDD Logspeed Truck' },
  { src: '/images/lZeHAus5Fw8cUQFwCQyxnA0lmIJE4R7mp8-115yOJ-4=_plaintext_638292343264369025.jpg', alt: 'BDD Logspeed Fleet' },
  { src: '/images/VTnXAnriNHtMzh6Z_LFAGzyjXgu0hPkYIngPv5VQPFM=_plaintext_638292343263640479.jpg', alt: 'BDD Logspeed Truck' },
  { src: '/images/yOnksyZT6Ow3zxHgZC5TyXaJk3jWLbx2UwIJGNKbqEg=_plaintext_638292343262847087.jpg', alt: 'BDD Logspeed Truck' },
  { src: '/images/I_D3rdU_xboj5yqa7tTV1DNkkp2ZGQwSbdBp3Pl1uQI=_plaintext_638292343263514982.jpg', alt: 'BDD Logspeed Fleet' },
];

const INITIAL_VISIBLE = 6;

export default function FleetGallery() {
  const [showAll, setShowAll] = useState(false);
  
  const visibleImages = showAll ? allFleetImages : allFleetImages.slice(0, INITIAL_VISIBLE);
  const hasMore = allFleetImages.length > INITIAL_VISIBLE;

  return (
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
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              {showAll ? (
                <>
                  Show Less
                  <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              ) : (
                <>
                  View More ({allFleetImages.length - INITIAL_VISIBLE} more)
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

