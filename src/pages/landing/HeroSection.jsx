import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Cara <span className={styles.highlight}>gratis, seru, dan efektif</span> untuk belajar bahasa!
            </h1>
            <p className={styles.description}>
              Belajar lewat pelajaran singkat yang terasa seperti main game. Terbukti membuat kebiasaan belajar yang bertahan lama.
            </p>
            <div className={styles.buttons}>
              <Link to="/signup" className={`${styles.btn} ${styles.btnPrimary}`}>Mulai sekarang</Link>
              <Link to="/login" className={`${styles.btn} ${styles.btnSecondary}`}>Saya sudah punya akun</Link>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.owlContainer}>
              <div className={styles.owl}>
                <span className={`${styles.eye} ${styles.l}`}></span>
                <span className={`${styles.eye} ${styles.r}`}></span>
                <span className={styles.beak}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
