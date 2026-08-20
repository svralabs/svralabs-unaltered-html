import React from 'react';
import Sidebar from '../components/Sidebar';
import StatsCard from '../components/StatsCard';
import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
  const statsData = [
    {
      icon: { name: 'shopping_cart', bgColor: 'bg-primary-container', textColor: 'text-on-primary-container' },
      title: 'Order Masuk',
      value: '124',
      change: '+12%',
      changeType: 'positive'
    },
    {
      icon: { name: 'sync_alt', bgColor: 'bg-secondary-container', textColor: 'text-on-secondary-container' },
      title: 'Transaksi Berjalan',
      value: '45',
      change: '-2%',
      changeType: 'negative'
    },
    {
      icon: { name: 'pending_actions', bgColor: 'bg-surface-container-high', textColor: 'text-primary' },
      title: 'Menunggu Pembayaran',
      value: '18'
    },
    {
      icon: { name: 'payments', bgColor: 'bg-tertiary-container', textColor: 'text-on-tertiary-container' },
      title: 'Pembayaran Berhasil',
      value: '87'
    }
  ];

  return (
    <div className="flex">
      <Sidebar />
      <main className={styles.mainContent}>
        <header className={styles.topNav}>
          <div className="flex items-center gap-md w-1/3">
            <div className="relative w-full group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary">search</span>
              <input
                className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm"
                placeholder="Cari pesanan atau pelanggan..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-lg">
            <div className="flex items-center gap-md">
              <button className="relative p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
              </button>
              <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
                <span className="material-symbols-outlined">help_outline</span>
              </button>
            </div>
            <div className="h-8 w-px bg-outline-variant"></div>
            <div className="flex items-center gap-sm">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold">Admin Dashboard</p>
                <p className="text-xs text-on-surface-variant">Online</p>
              </div>
            </div>
          </div>
        </header>
        <div className={styles.pageContent}>
          <div className={styles.statsGrid}>
            {statsData.map((stat, index) => (
              <StatsCard
                key={index}
                icon={stat.icon}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                changeType={stat.changeType}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
