import React from 'react';
import ProfileHeader from './profile/ProfileHeader';
import AchievementsGrid from './profile/AchievementsGrid';
import SettingsPanel from './profile/SettingsPanel';

export default function Profile() {
  return (
    <div className="min-h-screen bg-[rgb(247,247,247)]">
      <nav className="h-16 bg-white border-b border-[rgb(229,229,229)] flex items-center sticky top-0 z-50">
        <div className="max-w-[920px] mx-auto w-full px-6 flex justify-between items-center">
          <img alt="Duolingo" className="w-[140px] h-[33px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLUcimJWX3w3Bxk5PRqpBM0vmOzXSdQiYkyODnrzRxd9Re8Bh3OFC0jrA0HhPL7Q1mzSnTo82AZpXvOTVC3Yo8APf_RLnVpnjEwokqNxaXB-F41MqmHWCapCNDY3MdGXZp7vqq3016v4Ojn3xQbNyLryOiuJsJhmdqxCcsFIDYlnNkX_hOBx1cEqzXhtv2hx0S4PTfChx1oGGLYsXPfMBW-dIh8kx0mvj-kRTs0L6NvnYLOqPzA28iuA" />
          <div className="flex gap-1.5" data-purpose="nav-links">
            <a className="text-[13px] font-bold uppercase tracking-wider text-[rgb(175,175,175)] px-3 py-2 rounded-lg" href="#">Belajar</a>
            <a className="text-[13px] font-bold uppercase tracking-wider text-[rgb(88,204,2)] bg-[rgba(88,204,2,0.08)] px-3 py-2 rounded-lg" href="#">Profil</a>
            <a className="text-[13px] font-bold uppercase tracking-wider text-[rgb(175,175,175)] px-3 py-2 rounded-lg" href="#">Lainnya</a>
          </div>
        </div>
      </nav>

      <div className="banner"></div>

      <div className="max-w-[920px] mx-auto px-6">
        <ProfileHeader />

        <h2 className="section-title">Statistik</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          <div className="border-2 border-[rgb(229,229,229)] rounded-2xl p-4 flex items-center gap-3">
            <span className="text-[26px] w-8 text-center">🔥</span>
            <div>
              <div className="text-xl font-extrabold text-[rgb(75,75,75)] leading-tight">42</div>
              <div className="text-[12px] font-bold uppercase tracking-wider text-[rgb(175,175,175)] mt-0.5">Hari streak</div>
            </div>
          </div>
          <div className="border-2 border-[rgb(229,229,229)] rounded-2xl p-4 flex items-center gap-3">
            <span className="text-[26px] w-8 text-center">⚡</span>
            <div>
              <div className="text-xl font-extrabold text-[rgb(75,75,75)] leading-tight">12.480</div>
              <div className="text-[12px] font-bold uppercase tracking-wider text-[rgb(175,175,175)] mt-0.5">Total XP</div>
            </div>
          </div>
          <div className="border-2 border-[rgb(229,229,229)] rounded-2xl p-4 flex items-center gap-3">
            <span className="text-[26px] w-8 text-center">🏆</span>
            <div>
              <div className="text-xl font-extrabold text-[rgb(75,75,75)] leading-tight">Emerald</div>
              <div className="text-[12px] font-bold uppercase tracking-wider text-[rgb(175,175,175)] mt-0.5">Liga saat ini</div>
            </div>
          </div>
          <div className="border-2 border-[rgb(229,229,229)] rounded-2xl p-4 flex items-center gap-3">
            <span className="text-[26px] w-8 text-center">🥇</span>
            <div>
              <div className="text-xl font-extrabold text-[rgb(75,75,75)] leading-tight">7</div>
              <div className="text-[12px] font-bold uppercase tracking-wider text-[rgb(175,175,175)] mt-0.5">Finis teratas</div>
            </div>
          </div>
        </div>

        <AchievementsGrid />

        <SettingsPanel />
      </div>
    </div>
  );
}
