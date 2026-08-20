import React from 'react';

export default function LandingPage() {
  const languages = [
    { name: 'Spanyol', flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzYzx43JAUhRrKJAU4LCejjm2a-DXINw9LvJWow_wt7_Vw97nZ7Xok3VzF9AWzTmE8KCvKZQtafroBsxY4IVyUauzMipHMFnYpvtI228l2DwJNm_GrTz2DW828jCpUDm2jBs1E35crG0X5lsqscTcFOnr95rPcWtXZDV-vXDZlrEGg9mwyKymogY7gEIGuME2nsexbJXy_qvJGjtNKVmbulyZoEsG_iPB6vX7hEo8J4XBiD1Fv1QCk9A' },
    { name: 'Prancis', flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3ktH_aOEauLiqJjwzZjyeWmspyGQLmy4Up6pIG9Q7nAI6jUYrz6RBqo_uXdPpCr8MiZzjdkRxnUgu-Exh-0cVt_i_DHntrPfRD_1mkPY5BelSJ1occJQXV2qw75hZT9L5yhQ3E81J4r2SqoNl_0_1aZmAqsQdr0iP3P_9JhuHlU-UkGg2FnXRjfuu17OnZvFVvoBLX7taRZhq284CK5QqPnLE4mbrMPKrO-kXV7lVdV7ssN3tE60_HA' },
    { name: 'Jerman', flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA0o6irV_eWeaWj-qiTMqNA9MfNivclHwR-noFJmio02b1sPJGaIAtb0w-0iEFsyTJb-1mdTrBZZZGPWpXN5lfHvyXRRFmFia8RWHfXr2hj-KtWq1ad3JSw00VOutfsSTAK_bBGJsLl4IpQzpAhnmM0UoS6ucPlCDcjMLxqY2xhWial9eDUcDNHZXu2o9MNu02Od-Aje0WEvtQlunTGZZQhk8WOIlaBzcq-vb0cB1uay1c2LLx2-_gJg' },
    { name: 'Jepang', flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBucSuZu_GjzP55FInnUNfdHJGVWQDBjtJEmsHG9wcTmoqcPk_L7fPo0sGZqQVQodLvA7kWmUxFxbg9FWr3aKwyhEacBLKuAxbxFYK7yX_jjMw3xfC2IXhZekH24XA0lxQ7uHOmSJ9d2ZLWtrXFMxSHX1NKHYqiF4LtIWxhjkgJFPqq4VnqziceXa0kEbIF8SajsaXeyTccVMAvsP1BTlBgGdhTrrFsXvtpB6O6INv3mKCAdrvOtkZqMQ' }
  ];

  const features = [
    { icon: '🎮', title: 'Seru dan bebas biaya', description: 'Belajar terasa seperti main game. Raih poin, buka level baru, dan kuasai keterampilan praktis.' },
    { icon: '🔬', title: 'Didukung sains', description: 'Metode kami memadukan riset bahasa dan data dari jutaan pelajar untuk materi yang efektif.' },
    { icon: '🔥', title: 'Bangun kebiasaan', description: 'Sistem streak dan tantangan menarik menjaga semangatmu agar belajar jadi rutinitas harian.' }
  ];

  const stats = [
    { value: '100Jt+', label: 'Pelajar aktif' },
    { value: '40+', label: 'Bahasa tersedia' },
    { value: '5 mnt', label: 'Per pelajaran' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* MainHeader */}
      <nav className="fixed top-0 left-0 right-0 h-[64px] bg-white border-b border-[rgb(229,229,229)] z-50">
        <div className="max-w-[1100px] mx-auto h-full px-6 flex items-center justify-between">
          <img alt="Duolingo logo" className="w-[140px] h-[33px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaL20lh38drA9uY21-dXUi0vJKBlfrPnTNdwlh_nsVWez6iqfFlh6UAx6s6MlUNZYOq7cNRx9wjAvau0kWdO4r2yXSvw_TGnlCvoe6lap5J09LyoICRc6H7VtWTKobh7vf4LoG2kq3URfUr5rEZhUGwe-Iku5QFuJ1LXyfSt37zqVgpw-3pTOXLOSaIX_8ktncvsL9oRKLmKdh5FaGPFiR6WtacIvjsIOiM6zSHQLAwgmTyPKDNhIboQ" />
          <div className="flex items-center gap-[18px]">
            <a className="text-[13px] font-bold uppercase tracking-[0.5px] text-[rgb(175,175,175)] hover:text-[rgb(88,204,2)] hidden md:block" href="#">Situs untuk sekolah</a>
            <a className="text-[13px] font-bold uppercase tracking-[0.5px] text-[rgb(175,175,175)] hover:text-[rgb(88,204,2)]" href="#">Masuk</a>
          </div>
        </div>
      </nav>

      {/* HeroSection */}
      <header className="mt-[64px] bg-[linear-gradient(180deg,rgba(88,204,2,0.1),#fff_80%)] py-[60px] md:py-[100px] px-6">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="font-feather text-[36px] md:text-[52px] text-[rgb(75,75,75)] leading-[1.1] mb-6">
              Cara <span className="text-[rgb(88,204,2)]">gratis, seru, dan efektif</span> untuk belajar bahasa!
            </h1>
            <p className="text-[18px] font-medium text-[rgb(119,119,119)] mb-8 leading-[1.5] max-w-[500px] mx-auto md:mx-0">
              Belajar lewat pelajaran singkat yang terasa seperti main game. Terbukti membuat kebiasaan belajar yang bertahan lama.
            </p>
            <div className="flex flex-col gap-4 max-w-[320px] mx-auto md:mx-0">
              <button className="btn btn-primary">Mulai sekarang</button>
              <button className="btn btn-secondary">Saya sudah punya akun</button>
            </div>
          </div>
          <div className="flex items-center justify-center order-1 md:order-2">
            <div className="owl-container">
              <div className="owl">
                <span className="eye l"></span><span className="eye r"></span><span className="beak"></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* LanguagePills */}
      <div className="border-y border-[rgb(229,229,229)] py-6 px-6 bg-white overflow-hidden">
        <div className="max-w-[1000px] mx-auto flex items-center gap-4 overflow-x-auto no-scrollbar justify-center">
          <span className="text-[11px] font-extrabold uppercase tracking-[1.5px] text-[rgb(175,175,175)] mr-2 whitespace-nowrap">Pilih bahasa:</span>
          {languages.map((language, index) => (
            <div key={index} className="pill">
              <img className="w-[24px] h-[18px] object-contain" src={language.flag} alt={language.name} />
              {language.name}
            </div>
          ))}
        </div>
      </div>

      {/* WhySection */}
      <section className="max-w-[1000px] mx-auto py-[80px] px-6">
        <div className="text-center mb-12">
          <span className="text-[12px] font-extrabold uppercase tracking-[2px] text-[rgb(88,204,2)] block mb-2">Kenapa Duolingo</span>
          <h2 className="font-feather text-[32px] md:text-[40px] text-[rgb(75,75,75)]">Dirancang biar kamu nagih belajar</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className={`w-[100px] h-[100px] bg-[rgba(${index === 0 ? '88,204,2' : index === 1 ? '28,176,246' : '255,150,0'},0.1)] rounded-[24px] flex items-center justify-center mx-auto mb-6 text-[44px]`}>
                {feature.icon}
              </div>
              <h3 className="text-[19px] font-extrabold text-[rgb(75,75,75)] mb-3">{feature.title}</h3>
              <p className="text-[15px] font-medium text-[rgb(119,119,119)] leading-[1.6]">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* StatsBand */}
      <section className="bg-[rgb(16,15,62)] py-[64px] px-6">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="font-feather text-[48px] text-[rgb(255,200,0)] leading-none">{stat.value}</div>
              <div className="text-[12px] font-extrabold uppercase tracking-[1.5px] text-[rgba(255,255,255,0.4)] mt-3">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CoursesSection */}
      <section className="max-w-[1000px] mx-auto py-[80px] px-6">
        <div className="text-center mb-12">
          <span className="text-[12px] font-extrabold uppercase tracking-[2px] text-[rgb(88,204,2)] block mb-2">Kursus populer</span>
          <h2 className="font-feather text-[32px] md:text-[40px] text-[rgb(75,75,75)]">Belajar bahasa dengan cara yang menyenangkan</h2>
        </div>
        {/* Courses content would go here */}
      </section>
    </div>
  );
}
