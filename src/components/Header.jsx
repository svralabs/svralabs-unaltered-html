import React from 'react';

export default function Header() {
  return (
    <header className="w-full sticky top-0 bg-surface z-50 border-b border-border-black flex items-center justify-between px-lg py-md h-16">
      <div className="flex items-center gap-sm">
        <span className="material-symbols-outlined text-primary" data-icon="shopping_bag">shopping_bag</span>
        <h1 className="font-headline-lg text-headline-lg font-black text-primary tracking-tight">JastipHub</h1>
      </div>
      <button className="w-10 h-10 border border-border-black rounded-lg flex items-center justify-center hover:bg-surface-container transition-colors active:translate-x-0.5 active:translate-y-0.5">
        <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
    </header>
  );
}
