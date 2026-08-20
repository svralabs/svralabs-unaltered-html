import React from 'react';

export default function Profile() {
  const user = {
    name: 'Dalfin Andra',
    username: '@dalfin',
    joinDate: 'Maret 2024',
    followers: 128,
    following: 96,
    language: '🇪🇸 Belajar Spanyol',
    profilePicture: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0H4wFMbo2OZoufdfjjxbIllGBq3SNKP-242TpF7oDvWadVf_1rTiBMT3bRDpLIpirMKifyGni0cf_Rg-VIke8y5darFYkmlYfu4xQrG5fjkFjmFTm90ot6Eron2eI8Pa3Q2WXNjoUewKHazoy14MNSyWwEk0pPU8qPh33k9BnvV5xjCpD6ZAomkgOZwQbbXHTtb3uO60Q6BZo5TnnMTogAfum694vpON0wsGF27HzA8b8tAeHxWXymg'
  };

  const stats = [
    { icon: '🔥', value: '42', label: 'Hari streak' },
    { icon: '⚡', value: '12.480', label: 'Total XP' },
    { icon: '🏆', value: 'Emerald', label: 'Liga saat ini' },
    { icon: '🥇', value: '7', label: 'Finis teratas' }
  ];

  const achievements = [
    {
      icon: '🔥',
      title: 'Bara Api',
      level: 'Lvl 4',
      description: 'Pertahankan streak 42 hari berturut-turut.',
      progress: '70%',
      color: 'bg-[rgba(255,150,0,0.14)]',
      fillColor: 'bg-[#FF9600]'
    },
    {
      icon: '👑',
      title: 'Sang Juara',
      level: 'Lvl 3',
      description: 'Selesaikan 30 pelajaran tanpa kesalahan.',
      progress: '55%',
      color: 'bg-[rgba(255,200,0,0.18)]',
      fillColor: 'bg-[#FFC800]'
    },
    {
      icon: '📚',
      title: 'Kutu Buku',
      level: 'Lvl 5',
      description: 'Pelajari 1.000 kata baru.',
      progress: '88%',
      color: 'bg-[rgba(88,204,2,0.14)]',
      fillColor: 'bg-[#58CC02]'
    },
    {
      icon: '⚡',
      title: 'Kilat',
      level: 'Lvl 2',
      description: 'Raih 500 XP dalam satu minggu.',
      progress: '40%',
      color: 'bg-[rgba(28,176,246,0.14)]',
      fillColor: 'bg-[#1CB0F6]'
    }
  ];

  return (
    <div className="min-h-screen bg-[rgb(245,245,245)]">
      {/* Main Navigation */}
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

      {/* Profile Header */}
      <div className="banner"></div>
      <div className="max-w-[920px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-end -mt-11 px-2" data-purpose="user-info-header">
          <img alt="Profile Picture" className="pfp-custom" src={user.profilePicture} />
          <div className="flex-1 pb-1.5 text-center md:text-left">
            <h1 className="feather-font text-[26px] text-[rgb(75,75,75)] leading-tight">{user.name}</h1>
            <div className="text-sm font-bold text-[rgb(119,119,119)] mt-0.5">{user.username} · Bergabung {user.joinDate}</div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4.5 mt-2 text-sm font-semibold text-[rgb(119,119,119)]">
              <span className="mr-4"><b className="text-[rgb(75,75,75)]">{user.following}</b> mengikuti</span>
              <span className="mr-4"><b className="text-[rgb(75,75,75)]">{user.followers}</b> pengikut</span>
              <span>{user.language}</span>
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
          {stats.map((stat, index) => (
            <div key={index} className="border-2 border-[rgb(229,229,229)] rounded-2xl p-4 flex items-center gap-3">
              <span className="text-[26px] w-8 text-center">{stat.icon}</span>
              <div>
                <div className="text-xl font-extrabold text-[rgb(75,75,75)] leading-tight">{stat.value}</div>
                <div className="text-[12px] font-bold uppercase tracking-wider text-[rgb(175,175,175)] mt-0.5">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <h2 className="section-title">Pencapaian</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex gap-3.5 border-2 border-[rgb(229,229,229)] rounded-2xl p-4 items-center">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-[28px] shrink-0 ${achievement.color}`}>{achievement.icon}</div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-[15px] font-extrabold text-[rgb(75,75,75)]">{achievement.title}</span>
                  <span className="text-[11px] font-extrabold uppercase text-[rgb(175,175,175)]">{achievement.level}</span>
                </div>
                <div className="text-[12px] font-semibold text-[rgb(119,119,119)] mt-0.5 mb-2">{achievement.description}</div>
                <div className="abar">
                  <div className={`afill w-[${achievement.progress}] ${achievement.fillColor}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
