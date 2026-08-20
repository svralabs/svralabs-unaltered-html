import React from 'react';
import styles from '../pages/AdminDashboard.module.css';

const Sidebar = () => {
  const navItems = [
    { icon: 'dashboard', text: 'Dashboard', active: true },
    { icon: 'group', text: 'Customer' },
    { icon: 'event', text: 'Event' },
    { icon: 'menu_book', text: 'Katalog' },
    { icon: 'receipt_long', text: 'Transaksi' },
    { icon: 'description', text: 'Invoice' },
    { icon: 'calculate', text: 'Kalkulator AI' },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className="mb-xl px-sm">
        <h1 className="font-display text-heading-md font-bold text-primary">JastipPro</h1>
        <p className="text-xs text-on-surface-variant">Admin Console</p>
      </div>
      <nav className="flex-1 space-y-sm">
        {navItems.map((item, index) => (
          <a
            key={index}
            className={`flex items-center gap-md p-md ${item.active ? 'bg-secondary-container text-on-secondary-container font-semibold' : 'text-on-surface-variant hover:bg-surface-container-high hover:text-primary'} rounded-lg cursor-pointer active:scale-95 transition-colors duration-200`}
            href="#"
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.text}</span>
          </a>
        ))}
      </nav>
      <div className="mt-auto border-t border-outline-variant pt-md">
        <a className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-container-high hover:text-primary rounded-lg cursor-pointer active:scale-95 transition-colors duration-200" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span>Pengaturan</span>
        </a>
        <div className="mt-md flex items-center gap-md p-sm">
          <img
            className="w-10 h-10 rounded-full border border-outline-variant object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsUetNI6x_X2DbXUeeYsN3B136jo2HpmO-PF9diMzPvI46qTST8XKS2OhrmZyynkFXVhtYDxNRAflKNfaxXGKrYzq-FWqT3j7XUJyOKApu-GSOweWS5n5lYNolD-q7lNmKerGhENIvisXpIvKsTOpV7yZjxy2XngFxX9V9LMv18NB_JHT67eSdCFE_GazgnIs2rw3ocENgwNz6WXN4xliQH2fYib2txYkqCJh8qX0xdtLyEYQlQiqR"
            alt="Admin profile"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-semibold truncate">Admin Utama</p>
            <p className="text-xs text-on-surface-variant truncate">admin@jastippro.id</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
