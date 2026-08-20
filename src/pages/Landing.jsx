import React from 'react';
import styles from './Landing.module.css';

const Landing = () => {
  const features = [
    {
      icon: '🎮',
      bgColor: 'rgba(88,204,2,.1)',
      title: 'Seru dan bebas biaya',
      description: 'Belajar terasa seperti main game. Raih poin, buka level baru, dan kuasai keterampilan praktis tanpa bayar sepeser pun.'
    },
    {
      icon: '🔬',
      bgColor: 'rgba(28,176,246,.1)',
      title: 'Didukung sains',
      description: 'Metode kami memadukan riset bahasa dan data dari jutaan pelajar untuk membuat materi yang benar-benar melekat.'
    },
    {
      icon: '🔥',
      bgColor: 'rgba(255,150,0,.12)',
      title: 'Bangun kebiasaan',
      description: 'Pengingat ramah, tantangan menarik, dan sistem streak menjaga semangatmu agar belajar jadi rutinitas harian.'
    }
  ];

  const languages = [
    { name: 'Spanyol', flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOuSwa8pSGdS9pwZqaF_vcCEY80r_4PERcc2QN2ZD6uScMIzSJOnRCQAvWx9lhz1YHfwlxmfOGp61V4iNkj0U66mkU0LQcn7jKhm5RHWhYKyCliI6YeE3B-oJ7_gFtf22TJrK_msENfDZGCRoI_5zzqqO4-ClPBf5tiXYEMgcfNZGONN4oDdcH3GIdSrzDNuPtnK0qAaSkPo0-7TVI-XY1NubbUw1mhPvG9xbp2p9vFiR_HVl0GxXQ3g' },
    { name: 'Prancis', flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeyStPD9_3q9hz5TQCixfzodz8NufVhlHB5_gz0eOnlu4-IDQxuZ_91-yRiyFFyZQAw8GyZa6p2V4JVh4kXDxefJnzNrraUJ1k5aI4JssYLi5BHfFqDoMcPb51t2lPy0HhZ_RXdDzxL0tebeFmjEpYRpXF0Oo97dn_klOjIfvCvtRIHNuTP9y0QpVMgJhiQ2o0qoRNZ1MgMUs7-QKRw8gWgwSyzSmagagEjagealjtD-GH3PUkXNBIrQ' },
    { name: 'Jerman', flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ8G_8DJQjkmIiaPYSDD6CMi-k76lNdfjNThcPon5DHJZpHgwjuliihcEeuQnpk7mJgQK1hfKHtH9U5B27z6jrVK2hPSvgZu7sJsD8nvTUdZi8U2w34vpH7UOkZIvd4lCOqq4zGkGiQNxeJbkYWFX3BAgRFfiBZwgocTf3gOuQXwjrEyc_-tBvKAd_EP0JmvWcIByvu0S-gI76DM1w_BymDEKKsZFB0VAMjltUAxwCJfcqapr4CkZ5wQ' },
    { name: 'Jepang', flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQfgShxrWEPRYn4sFSTTHVEvKfpbmKzyaNxwnSIsbpDhBQaKAP7juk11v9Fnaf1E4inooQzFIHrZDIPP64FFZ8CdPKFFSwFJPCcqFNr9tvpuP0nl_oATFsyOhUqDSjUuz4znkx_RIBGFAI7vm8ith_EcWxQ5Bd1xWROPfG-5Cx-_wRp7KM9nzV0BmNsvFGmiYC9QB4wvSYvLReNqW9s3GO9xAsvDzWrtduYDXrx7OAH8ccv_CWEsTgAQ' }
  ];

  return (
    <div className={styles.landing}>
      {/* MainHeader */}
      <nav className="fixed top-0 left-0 right-0 h-[64px] bg-white border-b border-[rgb(229,229,229)] z-50">
        <div className="max-w-[1100px] mx-auto h-full px-6 flex items-center justify-between">
          <img alt="Duolingo logo" className="w-[140px] h-[33px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvG78PeAXkRWat7usOlzKnVSGBQ9vXNhjxtq8CmCV2F8VShEmZ1ESAPW8pxzyb1DO3lZUJNwnp2pi3-zW5fEqHcGMit1YhRRLdDfq8Ny-wX07RQbw-mntB34YgB0p8atzyDS5QfatF8GSLfVByHx7hlACGTqBhEPB4jO6hahEgMkosMzj62pmD6NM5Tji0JL4FdWlUFC-V1NGEGoR3LIt2GUX6nG0qC-g4_F-YpKYNIMqOksKW-7_OLA" />
          <div className="flex items-center gap-[18px]">
            <a className="text-[13px] font-bold uppercase tracking-[0.5px] text-[rgb(175,175,175)] hover:text-[rgb(88,204,2)]" href="#">Situs untuk sekolah</a>
            <a className="text-[13px] font-bold uppercase tracking-[0.5px] text-[rgb(175,175,175)] hover:text-[rgb(88,204,2)]" href="#">Masuk</a>
          </div>
        </div>
      </nav>

      {/* HeroSection */}
      <header className="mt-[64px] bg-[linear-gradient(180deg,rgba(88,204,2,0.1),#fff_80%)] py-[72px] px-6">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="hero-text order-2 md:order-1 text-center md:text-left">
            <h1 className="text-[30px] md:text-[38px] text-[rgb(75,75,75)] leading-[1.15]">Cara <span className="text-[rgb(88,204,2)]">gratis, seru, dan efektif</span> untuk belajar bahasa!</h1>
            <p className="text-[18px] font-medium text-[rgb(119,119,119)] my-[18px] md:my-[28px] leading-[1.5]">Belajar lewat pelajaran singkat yang terasa seperti main game. Terbukti membuat kebiasaan belajar yang bertahan lama.</p>
            <div className="flex flex-col gap-[14px] max-w-[320px] mx-auto md:mx-0">
              <button className="btn btn-primary">Mulai sekarang</button>
              <button className="btn btn-secondary">Saya sudah punya akun</button>
            </div>
          </div>
          <div className="flex items-center justify-center order-1 md:order-2">
            <div className="owl">
              <span className="eye l"></span><span className="eye r"></span><span className="beak"></span>
            </div>
          </div>
        </div>
      </header>

      {/* LanguageSelectionStrip */}
      <div className="border-y-2 border-[rgb(229,229,229)] py-[18px] px-6 bg-white">
        <div className="max-w-[1000px] mx-auto flex items-center gap-6 overflow-x-auto no-scrollbar">
          <span className="text-[12px] font-extrabold uppercase tracking-[1px] text-[rgb(175,175,175)] whitespace-nowrap">Pilih bahasa</span>
          {languages.map((language, index) => (
            <a key={index} className="lang-pill inline-flex items-center gap-2 text-[14px] font-bold text-[rgb(75,75,75)] whitespace-nowrap cursor-pointer py-[6px] px-1">
              <img className="w-[28px] h-[21px] object-contain" src={language.flag} alt={language.name} />
              {language.name}
            </a>
          ))}
        </div>
      </div>

      {/* ValuePropositionSection */}
      <section className="max-w-[1000px] mx-auto py-[72px] px-6">
        <div className="text-[12px] font-extrabold uppercase tracking-[2px] text-[rgb(88,204,2)] text-center mb-[10px]">Kenapa Duolingo</div>
        <h2 className="sec-title text-[32px] text-[rgb(75,75,75)] text-center mb-[48px]">Dirancang biar kamu nagih belajar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-3">
              <div className="w-[88px] h-[88px] mx-auto mb-[18px] rounded-[24px] flex items-center justify-center text-[42px]" style={{ background: feature.bgColor }}>{feature.icon}</div>
              <h3 className="text-[19px] font-extrabold text-[rgb(75,75,75)] mb-[10px]">{feature.title}</h3>
              <p className="text-[15px] font-medium text-[rgb(119,119,119)] leading-[1.55]">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* StatsBand */}
      <section className="bg-[rgb(16,15,62)] py-[56px] px-6">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="stat">
            <div className="num text-[44px] text-[rgb(255,200,0)] leading-none">100Jt+</div>
            <div className="cap text-[14px] font-bold uppercase tracking-[1px] text-[rgba(255,255,255,0.5)] mt-2">Pelajar aktif</div>
          </div>
          <div className="stat">
            <div className="num text-[44px] text-[rgb(255,200,0)] leading-none">40+</div>
            <div className="cap text-[14px] font-bold uppercase tracking-[1px] text-[rgba(255,255,255,0.5)] mt-2">Bahasa</div>
          </div>
          <div className="stat">
            <div className="num text-[44px] text-[rgb(255,200,0)] leading-none">100M+</div>
            <div className="cap text-[14px] font-bold uppercase tracking-[1px] text-[rgba(255,255,255,0.5)] mt-2">Unduhan</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
