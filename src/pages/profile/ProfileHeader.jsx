import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfileHeader.module.css';

export default function ProfileHeader() {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center md:items-end -mt-11 px-2" data-purpose="user-info-header">
      <img alt="Profile Picture" className="pfp-custom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0H4wFMbo2OZoufdfjjxbIllGBq3SNKP-242TpF7oDvWadVf_1rTiBMT3bRDpLIpirMKifyGni0cf_Rg-VIke8y5darFYkmlYfu4xQrG5fjkFjmFTm90ot6Eron2eI8Pa3Q2WXNjoUewKHazoy14MNSyWwEk0pPU8qPh33k9BnvV5xjCpD6ZAomkgOZwQbbXHTtb3uO60Q6BZo5TnnMTogAfum694vpON0wsGF27HzA8b8tAeHxWXymg" />
      <div className="flex-1 pb-1.5 text-center md:text-left">
        <h1 className="feather-font text-[26px] text-[rgb(75,75,75)] leading-tight">Dalfin Andra</h1>
        <div className="text-sm font-bold text-[rgb(119,119,119)] mt-0.5">@dalfin · Bergabung Maret 2024</div>
        <div className="flex flex-wrap justify-center md:justify-start gap-4.5 mt-2 text-sm font-semibold text-[rgb(119,119,119)]">
          <span className="mr-4"><b className="text-[rgb(75,75,75)]">128</b> mengikuti</span>
          <span className="mr-4"><b className="text-[rgb(75,75,75)]">96</b> pengikut</span>
          <span>🇪🇸 Belajar Spanyol</span>
        </div>
      </div>
      <div className="flex gap-2.5 pb-2">
        <button className="btn btn-ghost">Bagikan</button>
        <Link to="/edit-profile" className="btn btn-primary">Edit Profil</Link>
      </div>
    </div>
  );
}
