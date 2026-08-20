import React from 'react';

const FeatureNarrativePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-[64px] bg-white border-b border-[rgb(229,229,229)] z-50">
        <div className="max-w-[1200px] mx-auto h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              alt="Duolingo"
              className="w-[140px] h-[33px]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaL20lh38drA9uY21-dXUi0vJKBlfrPnTNdwlh_nsVWez6iqfFlh6UAx6s6MlUNZYOq7cNRx9wjAvau0kWdO4r2yXSvw_TGnlCvoe6lap5J09LyoICRc6H7VtWTKobh7vf4LoG2kq3URfUr5rEZhUGwe-Iku5QFuJ1LXyfSt37zqVgpw-3pTOXLOSaIX_8ktncvsL9oRKLmKdh5FaGPFiR6WtacIvjsIOiM6zSHQLAwgmTyPKDNhIboQ"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-[13px] font-bold uppercase tracking-[0.5px] text-[rgb(175,175,175)] hover:text-[rgb(88,204,2)]"
              href="#"
            >
              Bahasa
            </a>
            <a
              className="text-[13px] font-bold uppercase tracking-[0.5px] text-[rgb(175,175,175)] hover:text-[rgb(88,204,2)]"
              href="#"
            >
              Sekolah
            </a>
            <a
              className="text-[13px] font-bold uppercase tracking-[0.5px] text-[rgb(175,175,175)] hover:text-[rgb(88,204,2)]"
              href="#"
            >
              Masuk
            </a>
            <button className="btn btn-primary h-[38px] px-5 text-[13px]">Mulai</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="mt-[64px] bg-[linear-gradient(180deg,rgba(88,204,2,0.1),#fff_80%)] py-20 px-6 overflow-hidden">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="t-display mb-6">Belajar bahasa dengan cara paling seru.</h1>
            <p className="t-body mb-8">Gabung dengan jutaan orang yang belajar bahasa baru setiap hari dengan Duolingo. Gratis, efektif, dan berbasis sains.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary w-full sm:w-auto">Mulai Sekarang</button>
              <button className="btn btn-secondary w-full sm:w-auto">Saya Sudah Punya Akun</button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-[300px] h-[300px] bg-[rgb(88,204,2)] rounded-full floating-mascot flex items-center justify-center relative shadow-[0_20px_50px_rgba(88,204,2,0.3)]">
                {/* Simplified Owl Mascot Shape */}
                <div className="absolute w-[180px] h-[160px] bg-white rounded-[50%_50%_45%_45%] top-[50px] shadow-inner">
                  <div className="absolute left-[30px] top-[40px] w-[50px] h-[50px] bg-white border-[6px] border-[rgb(88,204,2)] rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-[rgb(16,15,62)] rounded-full"></div>
                  </div>
                  <div className="absolute right-[30px] top-[40px] w-[50px] h-[50px] bg-white border-[6px] border-[rgb(88,204,2)] rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-[rgb(16,15,62)] rounded-full"></div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-[85px] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-[rgb(255,150,0)]"></div>
                </div>
              </div>
              {/* Decorative shapes */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[rgb(28,176,246)] rounded-xl rotate-12 opacity-50"></div>
              <div className="absolute -bottom-8 left-0 w-16 h-16 bg-[rgb(255,200,0)] rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Why Duolingo */}
      <section className="max-w-[1100px] mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <span className="t-caption text-[rgb(88,204,2)] mb-4 block">Kenapa Duolingo</span>
          <h2 className="t-h1">Didesain untuk hasil nyata</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-[rgba(88,204,2,0.1)] rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6">🎮</div>
            <h3 className="t-h2 mb-4">Sangat Seru</h3>
            <p className="text-[16px] font-medium text-[rgb(119,119,119)] leading-relaxed">Belajar tidak harus membosankan. Kami membuat pelajaran seperti game agar kamu tetap termotivasi setiap hari.</p>
          </div>
          {/* Feature 2 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-[rgba(28,176,246,0.1)] rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6">🔬</div>
            <h3 className="t-h2 mb-4">Berbasis Sains</h3>
            <p className="text-[16px] font-medium text-[rgb(119,119,119)] leading-relaxed">Metode pengajaran kami terbukti secara ilmiah membantu ingatan jangka panjang melalui sistem repetisi berjarak.</p>
          </div>
          {/* Feature 3 */}
          <div className="text-center">
            <div className="w-20 h-20 bg-[rgba(255,150,0,0.12)] rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6">🔥</div>
            <h3 className="t-h2 mb-4">Membangun Kebiasaan</h3>
            <p className="text-[16px] font-medium text-[rgb(119,119,119)] leading-relaxed">Dengan sistem streak dan pengingat yang ramah, kami membantumu menjadikan belajar bahasa sebagai rutinitas harian.</p>
          </div>
        </div>
      </section>

      {/* Super Duolingo Section */}
      <section className="bg-[rgb(16,15,62)] py-24 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="tag tag-gold !bg-[rgb(255,200,0)] !text-[rgb(16,15,62)] mb-4">Premium</span>
            <h2 className="t-display !text-white mb-6">Tingkatkan ke Super Duolingo</h2>
            <p className="t-body !text-white/70 mb-8 text-[20px]">Hilangkan gangguan dan percepat kemajuanmu dengan fitur-fitur eksklusif yang dirancang untuk pelajar serius.</p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-white font-bold">
                <span className="text-[rgb(88,204,2)]">✓</span> Tanpa iklan yang mengganggu
              </li>
              <li className="flex items-center gap-3 text-white font-bold">
                <span className="text-[rgb(88,204,2)]">✓</span> Nyawa tak terbatas
              </li>
              <li className="flex items-center gap-3 text-white font-bold">
                <span className="text-[rgb(88,204,2)]">✓</span> Tes penguasaan materi khusus
              </li>
            </ul>
            <button className="btn btn-white w-full sm:w-auto">Coba Gratis 1 Minggu</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Feature Card 1 */}
            <div className="card card-dark p-6 border-white/10">
              <span className="tag tag-gold">Super</span>
              <h4 className="text-white font-extrabold text-lg mb-2">Nyawa Tak Terbatas</h4>
              <p className="text-white/50 text-sm">Belajar sepuasnya tanpa khawatir salah dan harus menunggu nyawa terisi kembali.</p>
            </div>
            {/* Feature Card 2 */}
            <div className="card card-dark p-6 border-white/10">
              <span className="tag tag-blue">Pro</span>
              <h4 className="text-white font-extrabold text-lg mb-2">Latihan Kesalahan</h4>
              <p className="text-white/50 text-sm">Tinjau kembali soal-soal yang sulit bagimu dengan sesi latihan yang dipersonalisasi.</p>
            </div>
            {/* Feature Card 3 */}
            <div className="card card-dark p-6 border-white/10 sm:col-span-2">
              <div className="flex justify-between items-start">
                <div>
                  <span className="tag tag-gold">Eksklusif</span>
                  <h4 className="text-white font-extrabold text-lg mb-2">Laporan Progres Bulanan</h4>
                  <p className="text-white/50 text-sm">Lihat sejauh mana kamu telah berkembang dengan st</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureNarrativePage;
