import React from 'react';
import { Link } from 'react-router-dom';
import learningDashboardData from '../data/learningDashboardData.json';

export default function LearningDashboard() {
  const { courses, learningPath, dailyQuests, stats } = learningDashboardData;

  return (
    <div className="app-container" data-purpose="main-application-shell">
      {/* BEGIN: Left Sidebar Navigation */}
      <aside className="side-nav">
        <img
          alt="Duolingo"
          className="logo w-[130px] mb-7 mx-3"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS31gsBf83s2hqTeS9fZ1yspLpfqk4NBWRKb3opGg9KbI2SZGH5mgWzPs0ga6vl9_bBpk9uap6SOj5raf7SW9Ei4bvMfK62EPs48TLqnGt7n7iHsgjZcXN0eOwhI7sWq3lEaNTDcwkhBrQ9jEDW_2kh_Ia9jmxvUjaE0S6K9qxl7V14zGzT4iwFHamlSGPHp53B8Dw8p2Dk4vLFJDsYfVCC0ZOu3kNnYxmFxTLTsMUDdLET0yD0rA-VA"
        />
        <nav data-purpose="sidebar-links">
          <div className="nav-item active">
            <span className="text-[22px] w-[26px] text-center">🏠</span>
            <span className="txt">Belajar</span>
          </div>
          <div className="nav-item">
            <span className="text-[22px] w-[26px] text-center">🔤</span>
            <span className="txt">Latihan</span>
          </div>
          <div className="nav-item">
            <span className="text-[22px] w-[26px] text-center">🏆</span>
            <span className="txt">Liga</span>
          </div>
          <div className="nav-item">
            <span className="text-[22px] w-[26px] text-center">🎯</span>
            <span className="txt">Misi</span>
          </div>
          <div className="nav-item">
            <span className="text-[22px] w-[26px] text-center">🛒</span>
            <span className="txt">Toko</span>
          </div>
          <div className="nav-item">
            <span className="text-[22px] w-[26px] text-center">👤</span>
            <span className="txt">Profil</span>
          </div>
        </nav>
      </aside>
      {/* END: Left Sidebar Navigation */}
      {/* BEGIN: Main Content Area */}
      <main className="main-content">
        {/* Top Status Bar */}
        <header className="sticky top-0 bg-white flex justify-end gap-[18px] p-[14px_24px] border-b-2 border-[rgb(229,229,229)] z-10" data-purpose="status-bar">
          <div className="flex items-center gap-1.5 text-base font-extrabold">
            <img
              alt="Spanish Flag"
              className="w-[26px] h-5 object-contain rounded-[3px]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb_N8VHqXVy97kS9koNq3ir5ikLqQTJ7c_otXP5nxyyzn0lYwV3-MinTN0XLsANID0ijjW3sdYz8m29jUiItjYYVlAfrBGyTqigo5llUIFsvrdeJKHkV44WLoqRKRFLA2PPeRdpurIM2anQL0c2iogPKnA3S2T40UhMuVb3pfishrcDBztuiw8HOhRxoVcSbt2iZ9yokoNGD7w2p5-N2gnCHa41kUOi8T8T-DlYWGUxbiSqU6-PYSOMA"
            />
            <span>{stats.language}</span>
          </div>
          <div className="flex items-center gap-1.5 text-base font-extrabold text-[#FF9600]">
            🔥 {stats.streak}
          </div>
          <div className="flex items-center gap-1.5 text-base font-extrabold text-[#1CB0F6]">
            💎 {stats.gems}
          </div>
          <div className="flex items-center gap-1.5 text-base font-extrabold text-[#FF4B4B]">
            ❤️ {stats.hearts}
          </div>
        </header>
        {/* Unit Banner */}
        <section className="bg-[rgb(88,204,2)] text-white rounded-2xl p-[18px_22px] m-6 flex justify-between items-center shadow-[0_4px_0_#61B800]" data-purpose="unit-header">
          <div className="meta">
            <div className="text-[12px] font-extrabold uppercase tracking-widest opacity-85">
              {courses[0].level}
            </div>
            <h2 className="font-['Feather_Bold','Nunito',sans-serif] text-[22px] mt-1">
              {courses[0].title}
            </h2>
          </div>
          <button className="bg-[rgba(0,0,0,0.12)] border-none text-white font-extrabold uppercase text-[12px] tracking-[0.5px] p-[10px_14px] rounded-xl cursor-pointer flex items-center gap-2 hover:bg-[rgba(0,0,0,0.2)] transition-colors">
            📘 Panduan
          </button>
        </section>
        {/* Learning Path Progression */}
        <section className="path-container" data-purpose="learning-path">
          {learningPath.map((node, index) => (
            <div key={node.id} className="node-wrap" style={{ marginLeft: index === 1 ? '-60px' : index === 2 ? '-90px' : index === 3 ? '-50px' : index === 4 ? '30px' : index === 5 ? '80px' : index === 6 ? '20px' : index === 7 ? '-60px' : '0' }}>
              {node.status === 'current' && <div className="ring"></div>}
              {node.status === 'current' && (
                <div className="info-bubble">
                  <div className="text-[11px] font-extrabold uppercase tracking-[0.5px] text-[rgb(88,204,2)]">Lanjutkan</div>
                  <div className="text-[13px] font-bold text-[rgb(75,75,75)] my-1 mb-2.5">{node.title}</div>
                  <button className="btn-duo btn-duo-primary w-full">Mulai +{node.xp} XP</button>
                </div>
              )}
              <button className={`node ${node.status}`}>
                {node.icon}
              </button>
            </div>
          ))}
        </section>
      </main>
      {/* END: Main Content Area */}
      {/* BEGIN: Right Sidebar Widgets */}
      <aside className="right-rail p-[24px_20px] flex flex-col gap-5 border-l-2 border-[rgb(229,229,229)]">
        {/* Super Duolingo Promotion */}
        <div className="bg-gradient-to-br from-[#9b6bff] to-[#7d3cff] text-white rounded-2xl p-[18px]" data-purpose="super-promo">
          <h3 className="text-white text-[15px] font-extrabold uppercase tracking-[0.5px] mb-3.5">Super Duolingo</h3>
          <p className="text-[13px] font-semibold text-[rgba(255,255,255,0.85)] mb-3.5 leading-[1.45]">Belajar tanpa batas dengan hati tak terbatas dan bebas iklan. Coba gratis 1 minggu.</p>
          <button className="btn-duo w-full bg-white text-[#7d3cff] shadow-[0_4px_0_rgba(0,0,0,0.18)]">Coba 1 minggu gratis</button>
        </div>
        {/* Daily Quests */}
        <div className="border-2 border-[rgb(229,229,229)] rounded-2xl p-[18px]" data-purpose="daily-quests">
          <h3 className="text-[15px] font-extrabold uppercase tracking-[0.5px] text-[rgb(75,75,75)] mb-3.5 flex justify-between items-center">
            Misi Harian <a className="text-[12px] text-[#1CB0F6]" href="#">Lihat semua</a>
          </h3>
          {dailyQuests.map((quest) => (
            <div key={quest.id} className="flex items-center gap-3 mb-3.5">
              <span className="text-2xl w-[34px] text-center">{quest.icon}</span>
              <div className="flex-1">
                <div className="text-[13px] font-bold mb-1.5 text-[rgb(75,75,75)]">{quest.title}</div>
                <div className="h-3.5 bg-[rgb(229,229,229)] rounded-full overflow-hidden relative">
                  <div className="h-full rounded-full" style={{ width: `${quest.progress}%`, backgroundColor: quest.color }}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] font-extrabold text-white">{quest.current} / {quest.total}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
