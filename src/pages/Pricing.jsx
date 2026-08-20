import { useState } from 'react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const toggleCycle = () => {
    setIsAnnual(!isAnnual);
  };

  const pricingTiers = [
    {
      name: 'Gratis',
      price: 'Rp0',
      billingCycle: '/selamanya',
      description: 'Semua yang kamu butuhkan untuk mulai belajar.',
      features: [
        { name: 'Semua pelajaran inti', available: true },
        { name: 'Sistem streak & XP', available: true },
        { name: 'Ikut liga mingguan', available: true },
        { name: '5 hati per hari', available: false },
        { name: 'Ada iklan', available: false }
      ],
      buttonText: 'Paket saat ini',
      buttonClass: 'btn-duo btn-ghost-duo'
    },
    {
      name: 'Super',
      price: isAnnual ? 'Rp47rb' : 'Rp79rb',
      billingCycle: '/bulan',
      description: isAnnual ? 'Ditagih Rp569rb per tahun. Hemat 40%.' : 'Ditagih bulanan, batal kapan saja.',
      features: [
        { name: 'Hati tak terbatas', available: true },
        { name: 'Tanpa iklan sama sekali', available: true },
        { name: 'Latihan kesalahan personal', available: true },
        { name: 'Tantangan kuis penguasaan', available: true },
        { name: 'Pelacak kemajuan terperinci', available: true }
      ],
      buttonText: 'Coba 1 minggu gratis',
      buttonClass: 'btn-duo btn-super-duo',
      isFeatured: true
    },
    {
      name: 'Super Family',
      price: isAnnual ? 'Rp77rb' : 'Rp129rb',
      billingCycle: '/bulan',
      description: 'Semua manfaat Super untuk hingga 6 anggota.',
      features: [
        { name: 'Hati tak terbatas', available: true },
        { name: 'Tanpa iklan sama sekali', available: true },
        { name: 'Latihan kesalahan personal', available: true },
        { name: 'Tantangan kuis penguasaan', available: true },
        { name: 'Pelacak kemajuan terperinci', available: true }
      ],
      buttonText: 'Coba 1 minggu gratis',
      buttonClass: 'btn-duo btn-ghost-duo'
    }
  ];

  return (
    <div>
      {/* Navigation */}
      <nav className="h-16 border-b border-[var(--border-color)] bg-white flex items-center sticky top-0 z-50">
        <div className="max-w-[1080px] mx-auto w-full px-6 flex justify-between items-center">
          <img alt="Duolingo" className="w-[140px] h-[33px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-PflZvFABahe6Qhmh0hIuiO8jK5JrWMkjueUql3FJKB9ekT90Lq9HltvuoJJM19YZxE0S3gMNBx9VQRJwtULX6gm-rdD57K9W2uvbfGxQvbM_ZMxF8FY8NN6Vmr12hS6qh7EwDx5jOO6MByTqLqGShATgnRznP1gOCXucj72n-Wum00UaoyqOmU2Y7hQjLbvHfvIjRtTlzL2TbVgb0qpbQz_QbJhCBOeks3JPuMj2LQnMan9C8YdrNQ" />
          <a className="text-[13px] font-bold uppercase tracking-wider text-[var(--nav-text)] hover:text-[var(--gray-text)] transition-colors" href="#">Masuk</a>
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
              onClick={toggleCycle}
            >
              Bulanan
            </button>
            <button
              className={`relative z-10 border-none bg-transparent font-bold text-[14px] uppercase tracking-wider ${isAnnual ? 'text-[var(--gray-text)]' : 'text-[var(--gray-light)]'} px-[22px] py-[10px] rounded-[10px] transition-colors cursor-pointer flex items-center gap-2`}
              onClick={toggleCycle}
            >
              Tahunan <span className="text-[10px] font-extrabold text-[var(--green)] bg-[rgba(88,204,2,0.14)] px-1.5 py-0.5 rounded-md">−40%</span>
            </button>
          </div>
        </div>
      </header>

      {/* Pricing Plans Grid */}
      <section className="max-w-[1000px] mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {pricingTiers.map((tier, index) => (
          <div
            key={index}
            className={`border-2 ${tier.isFeatured ? 'border-[var(--super)] shadow-[0_12px_32px_rgba(125,60,255,0.14)]' : 'border-[var(--border-color)]'} rounded-[20px] p-7 flex flex-col relative`}
            data-purpose="plan-card"
          >
            {tier.isFeatured && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--super)] text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full whitespace-nowrap">
                Paling populer
              </span>
            )}
            <div className={`text-[14px] font-extrabold uppercase tracking-widest ${tier.isFeatured ? 'text-[var(--super)]' : 'text-[var(--gray-light)]'} mb-3.5`}>
              {tier.name}
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="font-feather text-[38px] text-[var(--gray-text)]">{tier.price}</span>
              <span className="text-[14px] font-bold text-[var(--nav-text)]">{tier.billingCycle}</span>
            </div>
            <div className="text-[13px] font-semibold text-[var(--gray-light)] min-h-[34px] leading-relaxed">
              {tier.description}
            </div>
            <ul className="my-5 flex-grow">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className={`flex gap-2.5 text-[14px] font-semibold ${feature.available ? 'text-[var(--gray-text)]' : 'text-[var(--nav-text)]'} py-1.5 leading-relaxed`}>
                  <span className={`${feature.available ? 'text-[var(--green)]' : 'text-[var(--border-color)]'} font-black`}>✓</span>
                  {feature.name}
                </li>
              ))}
            </ul>
            <button className={tier.buttonClass}>{tier.buttonText}</button>
          </div>
        ))}
      </section>
    </div>
  );
}
