import React from 'react';
import styles from './SettingsPanel.module.css';

export default function SettingsPanel() {
  return (
    <div className="mt-8">
      <h2 className="section-title">Pengaturan</h2>
      <div className="border-2 border-[rgb(229,229,229)] rounded-2xl p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[rgb(75,75,75)] mb-4">Bahasa</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[rgb(119,119,119)] mb-1">Bahasa utama</label>
                <select className="w-full p-2 border border-[rgb(229,229,229)] rounded-lg">
                  <option>Indonesia</option>
                  <option>Inggris</option>
                  <option>Spanyol</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[rgb(119,119,119)] mb-1">Bahasa kedua</label>
                <select className="w-full p-2 border border-[rgb(229,229,229)] rounded-lg">
                  <option>Spanyol</option>
                  <option>Indonesia</option>
                  <option>Inggris</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[rgb(75,75,75)] mb-4">Notifikasi</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-[rgb(119,119,119)]">Notifikasi push</label>
                <input type="checkbox" className="toggle" checked />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-[rgb(119,119,119)]">Email notifikasi</label>
                <input type="checkbox" className="toggle" />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-[rgb(119,119,119)]">Notifikasi suara</label>
                <input type="checkbox" className="toggle" checked />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button className="btn btn-primary">Simpan perubahan</button>
        </div>
      </div>
    </div>
  );
}
