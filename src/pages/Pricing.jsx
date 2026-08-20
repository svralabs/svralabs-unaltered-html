import { useState } from 'react';
import { Link } from 'react-router-dom';
import PricingTierCard from './pricing/PricingTierCard';
import FAQSection from './pricing/FAQSection';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingTiers = [
    {
      id: 'free',
      name: 'Gratis',
      price: 'Rp0',
      period: '/selamanya',
      description: 'Semua yang kamu butuhkan untuk mulai belajar.',
      features: [
        { name: 'Semua pelajaran inti', included: true },
        { name: 'Sistem streak & XP', included: true },
        { name: 'Ikut liga mingguan', included: true },
        { name: '5 hati per hari', included: false },
        { name: 'Ada iklan', included: false }
      ],
      ctaText: 'Paket saat ini',
      isCurrent: true
    },
    {
      id: 'super',
      name: 'Super',
      price: isAnnual ? 'Rp47rb' : 'Rp79rb',
      period: '/bulan',
      description: isAnnual ? 'Ditagih Rp569rb per tahun. Hemat 40%.' : 'Ditagih bulanan, batal kapan saja.',
      features: [
        { name: 'Hati tak terbatas', included: true },
        { name: 'Tanpa iklan sama sekali', included: true },
        { name: 'Latihan kesalahan personal', included: true },
        { name: 'Tantangan kuis penguasaan', included: true },
        { name: 'Pelacak kemajuan terperinci', included: true }
      ],
      ctaText: 'Coba 1 minggu gratis',
      isPopular: true
    },
    {
      id: 'super-family',
      name: 'Super Family',
      price: isAnnual ? 'Rp77rb' : 'Rp129rb',
      period: '/bulan',
      description: 'Semua manfaat Super untuk hingga 6 anggota.',
      features: [
        { name: 'Hati tak terbatas', included: true },
        { name: 'Tanpa iklan sama sekali', included: true },
        { name: 'Latihan kesalahan personal', included: true },
        { name: 'Tantangan kuis penguasaan', included: true },
        { name: 'Pelacak kemajuan terperinci', included: true },
        { name: 'Kelas bersama untuk keluarga', included: true }
      ],
      ctaText: 'Coba 1 minggu gratis'
    }
  ];

  const faqs = [
    {
      question: 'Apa yang akan saya dapatkan dengan paket Super?',
      answer: 'Paket Super memberikan akses ke semua fitur premium kami, termasuk hati tak terbatas, latihan personal, dan pelacak kemajuan terperinci. Anda juga akan mendapatkan pengalaman belajar yang bebas iklan.'
    },
    {
      question: 'Bagaimana cara membatalkan langganan?',
      answer: 'Anda dapat membatalkan langganan kapan saja melalui pengaturan akun Anda. Pembatalan akan berlaku pada akhir periode langganan saat ini.'
    },
    {
      question: 'Apakah ada pengembalian uang?',
      answer: 'Ya, kami menawarkan pengembalian uang dalam 7 hari pertama untuk semua langganan. Anda akan menerima pengembalian uang penuh jika membatalkan dalam periode ini.'
    },
    {
      question: 'Bagaimana cara mengatur akun keluarga?',
      answer: 'Anda dapat mengatur akun keluarga melalui pengaturan akun di aplikasi. Anda akan dapat menambahkan hingga 6 anggota keluarga ke paket Super Family Anda.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="h-16 border-b border-[var(--border-color)] bg-white flex items-center sticky top-0 z-50">
        <div className="max-w-[1080px] mx-auto w-full px-6 flex justify-between items-center">
          <img alt="Duolingo" className="w-[140px] h-[33px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-PflZvFABahe6Qhmh0hIuiO8jK5JrWMkjueUql3FJKB9ekT90Lq9HltvuoJJM19YZxE0S3gMNBx9VQRJwtULX6gm-rdD57K9W2uvbfGxQvbM_ZMxF8FY8NN6Vmr12hS6qh7EwDx5jOO6MByTqLqGShATgnRznP1gOCXucj72n-Wum00UaoyqOmU2Y7hQjLbvHfvIjRtTlzL2TbVgb0qpbQz_QbJhCBOeks3JPuMj2LQnMan9C8YdrNQ" />
          <Link to="#" className="text-[13px] font-bold uppercase tracking-wider text-[var(--nav-text)] hover:text-[var(--gray-text)] transition-colors">Masuk</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center pt-16 pb-8 px-6 bg-gradient-to-b from-[rgba(125,60,255,0.08)] to-white">
        <span className="inline-block text-[12px] font-extrabold uppercase tracking-[1.5px] text-[var(--super)] bg-[rgba(125,60,255,0.1)] px-[14px] py-[6px] rounded-[20px] mb-4">
          Super Duolingo
        </span>
        <h1 className="font-feather text-[32px] md:text-[42px] text-[var(--gray-text)] leading-[1.1] mb-4">
          Belajar lebih cepat,<br/>tanpa gangguan
        </h1>
        <p className="text-[18px] font-medium text-[var(--gray-light)] max-w-[520px] mx-auto leading-relaxed">
          Buka hati tak terbatas, bebas iklan, dan latihan personal yang mempercepat kemajuanmu.
        </p>

        {/* Cycle Toggle */}
        <div className="flex justify-center mt-8 mb-2">
          <div className="relative inline-flex bg-[#f1f1f1] rounded-[14px] p-[5px]" id="cycle-container">
            <span className="cycle-slider"></span>
            <button
              className={`relative z-10 border-none bg-transparent font-bold text-[14px] uppercase tracking-wider ${isAnnual ? 'text-[var(--gray-light)]' : 'text-[var(--gray-text)]'} px-[22px] py-[10px] rounded-[10px] transition-colors cursor-pointer`}
              onClick={() => setIsAnnual(false)}
            >
              Bulanan
            </button>
            <button
              className={`relative z-10 border-none bg-transparent font-bold text-[14px] uppercase tracking-wider ${isAnnual ? 'text-[var(--gray-text)]' : 'text-[var(--gray-light)]'} px-[22px] py-[10px] rounded-[10px] transition-colors cursor-pointer flex items-center gap-2`}
              onClick={() => setIsAnnual(true)}
            >
              Tahunan <span className="text-[10px] font-extrabold text-[var(--green)] bg-[rgba(88,204,2,0.14)] px-1.5 py-0.5 rounded-md">−40%</span>
            </button>
          </div>
        </div>
      </header>

      {/* Pricing Plans Grid */}
      <section className="max-w-[1000px] mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {pricingTiers.map((tier) => (
          <PricingTierCard
            key={tier.id}
            name={tier.name}
            price={tier.price}
            period={tier.period}
            description={tier.description}
            features={tier.features}
            ctaText={tier.ctaText}
            isPopular={tier.isPopular}
            isCurrent={tier.isCurrent}
          />
        ))}
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
    </div>
  );
}
