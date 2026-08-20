import { useState } from 'react';
import pricingPageData from '../data/pricingPageData.json';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const toggleCycle = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="h-16 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex items-center sticky top-0 z-50">
        <div className="max-w-[1080px] mx-auto w-full px-6 flex justify-between items-center">
          <img
            alt="Duolingo"
            className="w-[140px] h-[33px]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-PflZvFABahe6Qhmh0hIuiO8jK5JrWMkjueUql3FJKB9ekT90Lq9HltvuoJJM19YZxE0S3gMNBx9VQRJwtULX6gm-rdD57K9W2uvbfGxQvbM_ZMxF8FY8NN6Vmr12hS6qh7EwDx5jOO6MByTqLqGShATgnRznP1gOCXucj72n-Wum00UaoyqOmU2Y7hQjLbvHfvIjRtTlzL2TbVgb0qpbQz_QbJhCBOeks3JPuMj2LQnMan9C8YdrNQ"
          />
          <a
            className="text-[13px] font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            href="#"
          >
            Masuk
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center pt-16 pb-8 px-6 bg-gradient-to-b from-purple-50 to-white dark:from-gray-800 dark:to-gray-900">
        <span className="inline-block text-[12px] font-extrabold uppercase tracking-[1.5px] text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900 px-[14px] py-[6px] rounded-[20px] mb-4">
          Super Duolingo
        </span>
        <h1 className="font-feather text-[32px] md:text-[42px] text-gray-800 dark:text-gray-200 leading-[1.1] mb-4">
          Belajar lebih cepat,<br />tanpa gangguan
        </h1>
        <p className="text-[18px] font-medium text-gray-600 dark:text-gray-400 max-w-[520px] mx-auto leading-relaxed">
          Buka hati tak terbatas, bebas iklan, dan latihan personal yang mempercepat kemajuanmu.
        </p>

        {/* Cycle Toggle */}
        <div className="flex justify-center mt-8 mb-2">
          <div className="relative inline-flex bg-gray-100 dark:bg-gray-800 rounded-[14px] p-[5px]" id="cycle-container">
            <span
              className={`absolute top-0.5 bottom-0.5 w-1/2 bg-white dark:bg-gray-700 rounded-[10px] transition-transform duration-300 ease-in-out ${isAnnual ? 'translate-x-full' : ''}`}
            ></span>
            <button
              className={`relative z-10 border-none bg-transparent font-bold text-[14px] uppercase tracking-wider ${!isAnnual ? 'text-gray-800 dark:text-gray-200' : 'text-gray-600 dark:text-gray-400'} px-[22px] py-[10px] rounded-[10px] transition-colors cursor-pointer`}
              onClick={toggleCycle}
            >
              Bulanan
            </button>
            <button
              className={`relative z-10 border-none bg-transparent font-bold text-[14px] uppercase tracking-wider ${isAnnual ? 'text-gray-800 dark:text-gray-200' : 'text-gray-600 dark:text-gray-400'} px-[22px] py-[10px] rounded-[10px] transition-colors cursor-pointer flex items-center gap-2`}
              onClick={toggleCycle}
            >
              Tahunan <span className="text-[10px] font-extrabold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900 px-1.5 py-0.5 rounded-md">−40%</span>
            </button>
          </div>
        </div>
      </header>

      {/* Pricing Plans Grid */}
      <section className="max-w-[1000px] mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {pricingPageData.plans.map((plan) => (
          <div
            key={plan.id}
            className={`border-2 ${plan.isFeatured ? 'border-purple-600 dark:border-purple-400' : 'border-gray-200 dark:border-gray-700'} rounded-[20px] p-7 flex flex-col ${plan.isFeatured ? 'shadow-[0_12px_32px_rgba(125,60,255,0.14)] dark:shadow-[0_12px_32px_rgba(156,163,175,0.14)]' : ''}`}
            data-purpose="plan-card"
          >
            {plan.popularBadge && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-purple-600 dark:bg-purple-400 text-white dark:text-gray-900 text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full whitespace-nowrap">
                {plan.popularBadge}
              </span>
            )}
            <div className={`text-[14px] font-extrabold uppercase tracking-widest ${plan.isFeatured ? 'text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-400'} mb-3.5`}>
              {plan.name}
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="font-feather text-[38px] text-gray-800 dark:text-gray-200">
                {isAnnual ? plan.price.annual : plan.price.monthly}
              </span>
              <span className="text-[14px] font-bold text-gray-600 dark:text-gray-400">
                {typeof plan.billing === 'object' ? (isAnnual ? plan.billing.annual : plan.billing.monthly) : plan.billing}
              </span>
            </div>
            <div className="text-[13px] font-semibold text-gray-600 dark:text-gray-400 min-h-[34px] leading-relaxed">
              {typeof plan.description === 'object' ? (isAnnual ? plan.description.annual : plan.description.monthly) : plan.description}
            </div>
            <ul className="my-5 flex-grow">
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className={`flex gap-2.5 text-[14px] font-semibold ${feature.included ? 'text-gray-800 dark:text-gray-200' : 'text-gray-600 dark:text-gray-400'} py-1.5 leading-relaxed`}
                >
                  <span className={`${feature.included ? 'text-green-600 dark:text-green-400' : 'text-gray-300 dark:text-gray-600'} font-black`}>✓</span>
                  {feature.text}
                </li>
              ))}
            </ul>
            <button
              className={`btn-duo ${plan.isFeatured ? 'btn-super-duo' : 'btn-ghost-duo'}`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
