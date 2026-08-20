import React, { useState } from 'react';
import OrderCard from '../components/OrderCard';
import styles from './OrderHistory.module.css';

const OrderHistory = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const orders = [
    {
      id: '#JST-8821',
      date: '16 Aug 2026',
      shopper: 'Budi Pratama',
      status: 'active',
      currentStep: 3,
      product: {
        name: 'Milk Bun After You x2',
        variant: 'Variant: Original & Nutella',
        price: '฿ 450.00',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1IVHrIBcggABobIWTHHpQljEHU8gvVEbttOlzxY_FAuMDabnYvo-e8cG9F9BrAjs98p44TA7fBD3334qiYylXKyRoPzCj28Xn9E4-7Ln3QLFE55dV6D_nBeB4fMhH-HjuV-Zj3VW9CisqotqEADgky8053yUFv7IYctvceUbUZGIsGj0j6sO7SSQ_B3l9Cuw1w82ESt2diROZ-7wlKKLRcVd3JNT0NepxfzJWW1vOQmqicst7QqL_',
        alt: 'A professional studio product photograph of two fluffy Thai milk buns from "After You" bakery, soft texture visible, arranged on a vibrant pastel green plate. The lighting is bright and cheerful with high contrast, following a modern food photography aesthetic for a premium SaaS application.'
      }
    },
    {
      id: '#JST-8810',
      date: '12 Aug 2026',
      status: 'completed',
      product: {
        name: 'Gentle Woman Canvas Tote',
        variant: 'Color: Cream',
        price: '฿ 350.00',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1IVHrIBcggABobIWTHHpQljEHU8gvVEbttOlzxY_FAuMDabnYvo-e8cG9F9BrAjs98p44TA7fBD3334qiYylXKyRoPzCj28Xn9E4-7Ln3QLFE55dV6D_nBeB4fMhH-HjuV-Zj3VW9CisqotqEADgky8053yUFv7IYctvceUbUZGIsGj0j6sO7SSQ_B3l9Cuw1w82ESt2diROZ-7wlKKLRcVd3JNT0NepxfzJWW1vOQmqicst7QqL_',
        alt: 'A stylish flat-lay photo of a Gentle Woman branded canvas tote bag with bold black lettering on a cream-colored fabric. The bag is placed on a clean white surface with a minimalist aesthetic. Lighting is even and soft, following a modern product photography style for a premium SaaS application.'
      }
    }
  ];

  const filteredOrders = orders.filter(order => {
    if (activeFilter === 'all') return true;
    return order.status === activeFilter;
  });

  return (
    <main className={styles.orderHistoryContainer}>
      <section className={styles.headerSection}>
        <h2 className={styles.pageTitle}>Riwayat Pesanan</h2>
        <div className={styles.filterContainer}>
          <button
            className={`${styles.filterButton} ${styles.all} ${activeFilter === 'all' ? styles.active : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            Semua
          </button>
          <button
            className={`${styles.filterButton} ${styles.processed} ${activeFilter === 'processed' ? styles.active : ''}`}
            onClick={() => setActiveFilter('processed')}
          >
            Diproses
          </button>
          <button
            className={`${styles.filterButton} ${styles.waiting} ${activeFilter === 'waiting' ? styles.active : ''}`}
            onClick={() => setActiveFilter('waiting')}
          >
            Menunggu Bayar
          </button>
          <button
            className={`${styles.filterButton} ${styles.completed} ${activeFilter === 'completed' ? styles.active : ''}`}
            onClick={() => setActiveFilter('completed')}
          >
            Selesai
          </button>
        </div>
      </section>

      {filteredOrders.map((order, index) => (
        <OrderCard key={index} order={order} />
      ))}
    </main>
  );
};

export default OrderHistory;
