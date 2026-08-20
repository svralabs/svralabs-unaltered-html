import React from 'react';
import landingPageData from '../data/landingPageData.json';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* MainHeader */}
      <nav className="fixed top-0 left-0 right-0 h-[64px] bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50">
        <div className="max-w-[1100px] mx-auto h-full px-6 flex items-center justify-between">
          <img
            alt="Duolingo logo"
            className="w-[140px] h-[33px]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvG78PeAXkRWat7usOlzKnVSGBQ9vXNhjxtq8CmCV2F8VShEmZ1ESAPW8pxzyb1DO3lZUJNwnp2pi3-zW5fEqHcGMit1YhRRLdDfq8Ny-wX07RQbw-mntB34YgB0p8atzyDS5QfatF8GSLfVByHx7hlACGTqBhEPB4jO6hahEgMkosMzj62pmD6NM5Tji0JL4FdWlUFC-V1NGEGoR3LIt2GUX6nG0qC-g4_F-YpKYNIMqOksKW-7_OLA"
          />
          <div className="flex items-center gap-[18px]">
            <a
              className="text-[13px] font-bold uppercase tracking-[0.5px] text-gray-400 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400"
              href="#"
            >
              Situs untuk sekolah
            </a>
            <a
              className="text-[13px] font-bold uppercase tracking-[0.5px] text-gray-400 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400"
              href="#"
            >
              Masuk
            </a>
          </div>
        </div>
      </nav>

      {/* HeroSection */}
      <header className="mt-[64px] bg-[linear-gradient(180deg,rgba(88,204,2,0.1),#fff_80%)] dark:bg-[linear-gradient(180deg,rgba(88,204,2,0.1),#1a202c_80%)] py-[72px] px-6">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="hero-text order-2 md:order-1 text-center md:text-left">
            <h1 className="text-[30px] md:text-[38px] text-gray-700 dark:text-gray-200 leading-[1.15]">
              Cara <span className="text-green-500 dark:text-green-400">gratis, seru, dan efektif</span> untuk belajar bahasa!
            </h1>
            <p className="text-[18px] font-medium text-gray-500 dark:text-gray-400 my-[18px] md:my-[28px] leading-[1.5]">
              Belajar lewat pelajaran singkat yang terasa seperti main game. Terbukti membuat kebiasaan belajar yang bertahan lama.
            </p>
            <div className="flex flex-col gap-[14px] max-w-[320px] mx-auto md:mx-0">
              <button className="btn btn-primary bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full text-[14px] font-bold uppercase tracking-[1px] transition-colors">
                Mulai sekarang
              </button>
              <button className="btn btn-secondary border border-green-500 hover:bg-green-50 text-green-500 py-3 px-6 rounded-full text-[14px] font-bold uppercase tracking-[1px] transition-colors dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900">
                Saya sudah punya akun
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center order-1 md:order-2">
            <div className="owl">
              <span className="eye l"></span>
              <span className="eye r"></span>
              <span className="beak"></span>
            </div>
          </div>
        </div>
      </header>

      {/* LanguageSelectionStrip */}
      <div className="border-y-2 border-gray-200 dark:border-gray-700 py-[18px] px-6 bg-white dark:bg-gray-800">
        <div className="max-w-[1000px] mx-auto flex items-center gap-6 overflow-x-auto no-scrollbar">
          <span className="text-[12px] font-extrabold uppercase tracking-[1px] text-gray-400 dark:text-gray-500 whitespace-nowrap">
            Pilih bahasa
          </span>
          {landingPageData.languages.map((language, index) => (
            <a
              key={index}
              className="lang-pill inline-flex items-center gap-2 text-[14px] font-bold text-gray-700 dark:text-gray-200 whitespace-nowrap cursor-pointer py-[6px] px-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              href="#"
            >
              <img
                className="w-[28px] h-[21px] object-contain"
                src={language.flag}
                alt={`${language.name} flag`}
              />
              {language.name}
            </a>
          ))}
        </div>
      </div>

      {/* ValuePropositionSection */}
      <section className="max-w-[1000px] mx-auto py-[72px] px-6">
        <div className="text-[12px] font-extrabold uppercase tracking-[2px] text-green-500 dark:text-green-400 text-center mb-[10px]">
          Kenapa Duolingo
        </div>
        <h2 className="sec-title text-[32px] text-gray-700 dark:text-gray-200 text-center mb-[48px]">
          Dirancang biar kamu nagih belajar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {landingPageData.features.map((feature, index) => (
            <div key={index} className="text-center p-3">
              <div
                className="w-[88px] h-[88px] mx-auto mb-[18px] rounded-[24px] flex items-center justify-center text-[42px]"
                style={{ background: feature.bgColor }}
              >
                {feature.icon}
              </div>
              <h3 className="text-[19px] font-extrabold text-gray-700 dark:text-gray-200 mb-[10px]">
                {feature.title}
              </h3>
              <p className="text-[15px] font-medium text-gray-500 dark:text-gray-400 leading-[1.55]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* StatsBand */}
      <section className="bg-[rgb(16,15,62)] dark:bg-gray-900 py-[56px] px-6">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {landingPageData.stats.map((stat, index) => (
            <div key={index} className="stat">
              <div className="num text-[44px] text-[rgb(255,200,0)] dark:text-yellow-400 leading-none">
                {stat.number}
              </div>
              <div className="cap text-[14px] font-bold uppercase tracking-[1px] text-[rgba(255,255,255,0.5)] dark:text-gray-400 mt-2">
                {stat.caption}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
