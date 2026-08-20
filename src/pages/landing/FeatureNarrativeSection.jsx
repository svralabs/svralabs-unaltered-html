import React from 'react';
import styles from './FeatureNarrativeSection.module.css';

export default function FeatureNarrativeSection() {
  const features = [
    {
      title: 'Belajar dengan Metode Terbaik',
      description: 'Kami menggunakan metode pengajaran yang terbukti efektif untuk membantu kamu mengingat kata-kata dan frasa dengan lebih baik.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Latihan Harian yang Menyenangkan',
      description: 'Dengan latihan harian yang disesuaikan dengan tingkat kemampuanmu, kamu akan terus berkembang setiap hari.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Komunitas Pembelajaran yang Mendukung',
      description: 'Gabung dengan jutaan orang di seluruh dunia yang belajar bahasa bersama-sama.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  return (
    <section className={styles.featureNarrativeSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.caption}>Fitur Unggulan</span>
          <h2 className={styles.title}>Mengapa Duolingo Berbeda</h2>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureImage}>
                <img src={feature.image} alt={feature.title} />
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
