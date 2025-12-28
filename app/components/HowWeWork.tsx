'use client';

import { useLanguage } from '../i18n/LanguageContext';

export default function HowWeWork() {
  const { t } = useLanguage();

  const questions = [
    { letter: 'A', key: 'a' },
    { letter: 'B', key: 'b' },
    { letter: 'C', key: 'c' },
    { letter: 'D', key: 'd', subItems: ['d1', 'd2'] },
    { letter: 'E', key: 'e' },
    { letter: 'F', key: 'f' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t.howWeWork.title}
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {t.howWeWork.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {questions.map((question, index) => (
            <div
              key={question.key}
              className="bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500 text-white font-bold flex items-center justify-center text-lg">
                  {question.letter}
                </div>
                <div className="flex-1">
                  <p className="text-slate-800 font-medium">
                    {t.howWeWork.questions[question.key as keyof typeof t.howWeWork.questions]}
                  </p>
                  {question.subItems && (
                    <ul className="mt-3 space-y-2">
                      {question.subItems.map((subKey, subIndex) => (
                        <li key={subKey} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="text-emerald-500 font-medium">{String.fromCharCode(97 + subIndex)}.</span>
                          {t.howWeWork.questions[subKey as keyof typeof t.howWeWork.questions]}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

