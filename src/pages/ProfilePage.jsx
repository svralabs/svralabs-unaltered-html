import React from 'react';

const ProfilePage = () => {
  const user = {
    name: 'Dalfin Andra',
    username: '@dalfin',
    joinDate: 'Maret 2024',
    following: 128,
    followers: 96,
    language: 'Spanyol',
    streak: 42,
    xp: 12480,
    league: 'Emerald',
    topFinishes: 7,
    achievements: [
      {
        icon: '🔥',
        name: 'Bara Api',
        level: 4,
        description: 'Pertahankan streak 42 hari berturut-turut.',
        progress: 70,
        color: 'bg-[#FF9600]',
        bgColor: 'bg-[rgba(255,150,0,0.14)]'
      },
      {
        icon: '👑',
        name: 'Sang Juara',
        level: 3,
        description: 'Selesaikan 30 pelajaran tanpa kesalahan.',
        progress: 55,
        color: 'bg-[#FFC800]',
        bgColor: 'bg-[rgba(255,200,0,0.18)]'
      },
      {
        icon: '📚',
        name: 'Kutu Buku',
        level: 5,
        description: 'Pelajari 1.000 kata baru.',
        progress: 88,
        color: 'bg-[#58CC02]',
        bgColor: 'bg-[rgba(88,204,2,0.14)]'
      },
      {
        icon: '⚡',
        name: 'Kilat',
        level: 2,
        description: 'Raih 500 XP dalam satu minggu.',
        progress: 40,
        color: 'bg-[#1CB0F6]',
        bgColor: 'bg-[rgba(28,176,246,0.14)]'
      }
    ]
  };

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
          <img alt="Profile Picture" className="pfp-custom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0H4wFMbo2OZoufdfjjxbIllGBq3SNKP-242TpF7oDvWadVf_1rTiBMT3bRDpLIpirMKifyGni0cf_Rg-VIke8y5darFYkmlYfu4xQrG5fjkFjmFTm90ot6Eron2eI8Pa3Q2WXNjoUewKHazoy14MNSyWwEk0pPU8qPh33k9BnvV5xjCpD6ZAomkgOZwQbbXHTtb3uO60Q6BZo5TnnMTogAfum694vpON0wsGF27HzA8b8tAeHxWXymg" />
          <div className="flex-1 pb-1.5 text-center md:text-left">
            <h1 className="feather-font text-[26px] text-[rgb(75,75,75)] leading-tight">{user.name}</h1>
            <div className="text-sm font-bold text-[rgb(119,119,119)] mt-0.5">{user.username} · Bergabung {user.joinDate}</div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4.5 mt-2 text-sm font-semibold text-[rgb(119,119,119)]">
              <span className="mr-4"><b className="text-[rgb(75,75,75)]">{user.following}</b> mengikuti</span>
              <span className="mr-4"><b className="text-[rgb(75,75,75)]">{user.followers}</b> pengikut</span>
              <span>🇪🇸 Belajar {user.language}</span>
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
          {/* Streak */}
          <div className="border-2 border-[rgb(229,229,229)] rounded-2xl p-4 flex items-center gap-3">
            <span className="text-[26px] w-8 text-center">🔥</span>
            <div>
              <div className="text-xl font-extrabold text-[rgb(75,75,75)] leading-tight">{user.streak}</div>
              <div className="text-[12px] font-bold uppercase tracking-wider text-[rgb(175,175,175)] mt-0.5">Hari streak</div>
            </div>
          </div>
          {/* XP */}
          <div className="border-2 border-[rgb(229,229,229)] rounded-2xl p-4 flex items-center gap-3">
            <span className="text-[26px] w-8 text-center">⚡</span>
            <div>
              <div className="text-xl font-extrabold text-[rgb(75,75,75)] leading-tight">{user.xp.toLocaleString()}</div>
              <div className="text-[12px] font-bold uppercase tracking-wider text-[rgb(175,175,175)] mt-0.5">Total XP</div>
            </div>
          </div>
          {/* League */}
          <div className="border-2 border-[rgb(229,229,229)] rounded-2xl p-4 flex items-center gap-3">
            <span className="text-[26px] w-8 text-center">🏆</span>
            <div>
              <div className="text-xl font-extrabold text-[rgb(75,75,75)] leading-tight">{user.league}</div>
              <div className="text-[12px] font-bold uppercase tracking-wider text-[rgb(175,175,175)] mt-0.5">Liga saat ini</div>
            </div>
          </div>
          {/* Top Finishes */}
          <div className="border-2 border-[rgb(229,229,229)] rounded-2xl p-4 flex items-center gap-3">
            <span className="text-[26px] w-8 text-center">🥇</span>
            <div>
              <div className="text-xl font-extrabold text-[rgb(75,75,75)] leading-tight">{user.topFinishes}</div>
              <div className="text-[12px] font-bold uppercase tracking-wider text-[rgb(175,175,175)] mt-0.5">Finis teratas</div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <h2 className="section-title">Pencapaian</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {user.achievements.map((achievement, index) => (
            <div key={index} className="flex gap-3.5 border-2 border-[rgb(229,229,229)] rounded-2xl p-4 items-center">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-[28px] shrink-0 ${achievement.bgColor}`}>{achievement.icon}</div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-[15px] font-extrabold text-[rgb(75,75,75)]">{achievement.name}</span>
                  <span className="text-[11px] font-extrabold uppercase text-[rgb(175,175,175)]">Lvl {achievement.level}</span>
                </div>
                <div className="text-[12px] font-semibold text-[rgb(119,119,119)] mt-0.5 mb-2">{achievement.description}</div>
                <div className="abar">
                  <div className={`afill w-[${achievement.progress}%] ${achievement.color}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
