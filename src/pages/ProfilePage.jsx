import React from 'react';
import profileData from '../data/profilePageData.json';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[rgb(245,245,245)] dark:bg-[rgb(30,30,30)]">
      {/* Main Navigation */}
      <nav className="h-16 bg-white dark:bg-[rgb(30,30,30)] border-b border-[rgb(229,229,229)] dark:border-[rgb(50,50,50)] flex items-center sticky top-0 z-50">
        <div className="max-w-[920px] mx-auto w-full px-6 flex justify-between items-center">
          <img alt="Duolingo" className="w-[140px] h-[33px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLUcimJWX3w3Bxk5PRqpBM0vmOzXSdQiYkyODnrzRxd9Re8Bh3OFC0jrA0HhPL7Q1mzSnTo82AZpXvOTVC3Yo8APf_RLnVpnjEwokqNxaXB-F41MqmHWCapCNDY3MdGXZp7vqq3016v4Ojn3xQbNyLryOiuJsJhmdqxCcsFIDYlnNkX_hOBx1cEqzXhtv2hx0S4PTfChx1oGGLYsXPfMBW-dIh8kx0mvj-kRTs0L6NvnYLOqPzA28iuA" />
          <div className="flex gap-1.5" data-purpose="nav-links">
            <a className="text-[13px] font-bold uppercase tracking-wider text-[rgb(175,175,175)] dark:text-[rgb(150,150,150)] px-3 py-2 rounded-lg" href="#">Belajar</a>
            <a className="text-[13px] font-bold uppercase tracking-wider text-[rgb(88,204,2)] bg-[rgba(88,204,2,0.08)] px-3 py-2 rounded-lg" href="#">Profil</a>
            <a className="text-[13px] font-bold uppercase tracking-wider text-[rgb(175,175,175)] dark:text-[rgb(150,150,150)] px-3 py-2 rounded-lg" href="#">Lainnya</a>
          </div>
        </div>
      </nav>

      {/* Profile Header */}
      <div className="banner"></div>
      <div className="max-w-[920px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-end -mt-11 px-2" data-purpose="user-info-header">
          <img alt="Profile Picture" className="pfp-custom" src={profileData.user.avatar} />
          <div className="flex-1 pb-1.5 text-center md:text-left">
            <h1 className="feather-font text-[26px] text-[rgb(75,75,75)] dark:text-[rgb(200,200,200)] leading-tight">{profileData.user.name}</h1>
            <div className="text-sm font-bold text-[rgb(119,119,119)] dark:text-[rgb(150,150,150)] mt-0.5">@{profileData.user.username} · Bergabung {profileData.user.joinDate}</div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4.5 mt-2 text-sm font-semibold text-[rgb(119,119,119)] dark:text-[rgb(150,150,150)]">
              <span className="mr-4"><b className="text-[rgb(75,75,75)] dark:text-[rgb(200,200,200)]">{profileData.user.following}</b> mengikuti</span>
              <span className="mr-4"><b className="text-[rgb(75,75,75)] dark:text-[rgb(200,200,200)]">{profileData.user.followers}</b> pengikut</span>
              <span>🇪🇸 Belajar {profileData.user.language}</span>
            </div>
          </div>
          <div className="flex gap-2.5 pb-2">
            <button className="btn btn-ghost">Bagikan</button>
            <button className="btn btn-primary">Tambah teman</button>
          </div>
        </div>

        {/* Statistics Section */}
        <h2 className="section-title">Statistik</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          {profileData.stats.map((stat, index) => (
            <div key={index} className="border-2 border-[rgb(229,229,229)] dark:border-[rgb(50,50,50)] rounded-2xl p-4 flex items-center gap-3">
              <span className="text-[26px] w-8 text-center">{stat.icon}</span>
              <div>
                <div className="text-xl font-extrabold text-[rgb(75,75,75)] dark:text-[rgb(200,200,200)] leading-tight">{stat.value}</div>
                <div className="text-[12px] font-bold uppercase tracking-wider text-[rgb(175,175,175)] dark:text-[rgb(150,150,150)] mt-0.5">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <h2 className="section-title">Pencapaian</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {profileData.achievements.map((achievement, index) => (
            <div key={index} className="flex gap-3.5 border-2 border-[rgb(229,229,229)] dark:border-[rgb(50,50,50)] rounded-2xl p-4 items-center">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-[28px] shrink-0" style={{ backgroundColor: `${achievement.color}14` }}>{achievement.icon}</div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-[15px] font-extrabold text-[rgb(75,75,75)] dark:text-[rgb(200,200,200)]">{achievement.title}</span>
                  <span className="text-[11px] font-extrabold uppercase text-[rgb(175,175,175)] dark:text-[rgb(150,150,150)]">{achievement.level}</span>
                </div>
                <div className="text-[12px] font-semibold text-[rgb(119,119,119)] dark:text-[rgb(150,150,150)] mt-0.5 mb-2">{achievement.description}</div>
                <div className="abar">
                  <div className="afill" style={{ width: `${achievement.progress}%`, backgroundColor: achievement.color }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
