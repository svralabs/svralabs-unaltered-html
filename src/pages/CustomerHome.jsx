import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import styles from './CustomerHome.module.css';

const products = [
  {
    id: 1,
    name: 'Milk Bun After You',
    price: 'Rp 85.000',
    feeText: '+ Fee Rp 20.000',
    feeColor: 'bg-[#F472B6]',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF9EA8Jf8j-RFegKXs7noay6Ec8aajI1kL0yKNMMwnf-jEY_U3eyRV5QhU4TUCryPQdVWWOdK0vgltseY1plG_N5gd-BOoKeTeStvnyKFXuDxVknj2ch74k6PuBwzfXDLvOVBL49zNwR37fhy4nfQUzIV8C-n2iu6LayO8QFoh2UuanBwiugddTEQvq9NwvbNJnC8E6U1C0j-DPr4YXGpEeAcZqpb5Og0ABFinnsBv51F6W92Uu88I',
    imageAlt: 'Close up high-quality photograph of a famous Thai Milk Bun with fluffy powdered sugar topping, soft lighting, vibrant pastel aesthetic, crisp studio photography, jastip app marketing style.'
  },
  {
    id: 2,
    name: 'Care Bears Keychain',
    price: 'Rp 150.000',
    feeText: '+ Fee Rp 35.000',
    feeColor: 'bg-[#4ADE80]',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZKs8tfpyF1JL9lsHVqLcFes4H_1F_S1i1pfJwgaRt3oO2vzlgNb40p54v4U6ysAybrNuxQDldNCPaEd1WaaQ8rzykW36H5KMQPkelC5LIqfRFL28XIjt8_QVz6k83srucJztsP6Aw2GxQlhaSl1KxwGINhvbYB4vByKLBHVNDFoucPDm8oUGdB9KRSiXrbiGbU2VWRA5yjg4y4PbXqN5uSqFEKl37g4i6GR4qXfI_KBBG5vFvj3vc',
    imageAlt: 'A colorful Care Bears plush keychain with detailed fur texture and vibrant colors, hanging in a trendy urban setting, high-saturation pastel Neubrutalist aesthetic, 4k crisp detail.'
  },
  {
    id: 3,
    name: 'Goyard Mini Anjou Handbag',
    price: 'Rp 2.500.000',
    feeText: '+ Fee Rp 100.000',
    feeColor: 'bg-[#F472B6]',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBejTkh9vJF6Jen2wLsJF_LSOCKz-H4OAY3zPS0wBZglc8Ynkeus36A9s8bYghLoqlHDsU0YyT1WlvAC63UBDIjjvXKZV8ClrsFrfrk70nbSrOUShQSPR6kb_WjjFtUBOfARmNbLSxR6BfOpE_gSSi64whh8ozxU1F2XAiZH7zPN4_qCmHOht-7_9vn_D0OHnjIZBsbcQm8FRfF2nq30hu9n4VhVQr08-m94GLVI_dLsJBnxGHEBhQj',
    imageAlt: 'A luxury Goyard Mini Anjou handbag in a classic green pattern, presented on a minimalist platform, high contrast lighting, premium aesthetic, 1px black border details, vibrant neon accents.'
  }
];

export default function CustomerHome() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="px-lg py-lg space-y-2xl">
        <section className={styles.heroBanner}>
          <div className="flex flex-col relative z-10 space-y-md">
            <div className="flex justify-between items-start">
              <span className="bg-border-black text-white px-md py-xs rounded-full font-label-caps text-label-caps flex items-center gap-xs">
                <span className="material-symbols-outlined text-[14px]" data-icon="timer" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                CLOSES IN 02D : 14H : 30M
              </span>
            </div>
            <div className="space-y-xs">
              <h2 className="font-headline-lg text-headline-lg text-border-black uppercase italic">Bangkok Snacks & Fashion</h2>
              <p className="font-body-md text-border-black/80 font-bold">15 - 20 Aug 2026</p>
            </div>
            <button className="bg-border-black text-white px-lg py-sm rounded-lg font-label-bold flex items-center justify-center self-start gap-sm transition-transform active:scale-95">
              Explore Trip
              <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-20 transform -rotate-12 pointer-events-none">
            <span className="material-symbols-outlined text-[160px]" data-icon="flight_takeoff">flight_takeoff</span>
          </div>
        </section>
        <nav className={styles.categoriesNav}>
          <button className={styles.categoryButton}>Semua</button>
          <button className={`${styles.categoryButton} bg-surface text-border-black`}>Makanan</button>
          <button className={`${styles.categoryButton} bg-surface text-border-black`}>Fashion</button>
          <button className={`${styles.categoryButton} bg-surface text-border-black`}>Skincare</button>
          <button className={`${styles.categoryButton} bg-surface text-border-black`}>Gadgets</button>
        </nav>
        <div className={styles.productGrid}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
