import React from 'react';
import learningTableData from '../data/learningTableData.json';

const ProgressBar = ({ progress }) => (
  <div className="w-full bg-surface-variant rounded-full h-2">
    <div
      className="bg-primary h-2 rounded-full"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

const LearningTable = () => {
  return (
    <div className="bg-surface-container-lowest rounded-xl border-2 border-border-color shadow-[0_4px_0_0_#E5E5E5] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-surface-container">
            <tr>
              <th className="px-xl py-md font-label-caps text-gray-light border-b-2 border-border-color">BAHASA</th>
              <th className="px-xl py-md font-label-caps text-gray-light border-b-2 border-border-color">UNIT</th>
              <th className="px-xl py-md font-label-caps text-gray-light border-b-2 border-border-color">PROGRES</th>
              <th className="px-xl py-md font-label-caps text-gray-light border-b-2 border-border-color">XP TERKUMPUL</th>
              <th className="px-xl py-md font-label-caps text-gray-light border-b-2 border-border-color">STATUS</th>
              <th className="px-xl py-md font-label-caps text-gray-light border-b-2 border-border-color text-center">AKSI</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-border-color">
            {learningTableData.languages.map((language, index) => (
              <tr key={index} className="hover:bg-surface-container-low transition-colors group">
                <td className="px-xl py-lg">
                  <div className="flex items-center gap-md">
                    <div className="w-10 h-8 rounded-lg overflow-hidden border-2 border-border-color">
                      <img
                        className="w-full h-full object-cover"
                        src={language.flag}
                        alt={`Flag of ${language.name}`}
                      />
                    </div>
                    <span className="font-body-lg text-on-surface">{language.name}</span>
                  </div>
                </td>
                <td className="px-xl py-lg font-body-lg text-on-surface">{language.unit}</td>
                <td className="px-xl py-lg">
                  <div className="flex items-center gap-md">
                    <ProgressBar progress={language.progress} />
                    <span className="font-body-lg text-on-surface">{language.progress}%</span>
                  </div>
                </td>
                <td className="px-xl py-lg font-body-lg text-on-surface">{language.xp}</td>
                <td className="px-xl py-lg">
                  <span className={`px-md py-xs rounded-full text-label-sm font-bold ${
                    language.status === 'Completed'
                      ? 'bg-green-container text-on-green-container'
                      : 'bg-orange-container text-on-orange-container'
                  }`}>
                    {language.status}
                  </span>
                </td>
                <td className="px-xl py-lg text-center">
                  <button className="px-md py-sm bg-primary-container text-on-primary-container rounded-xl hover:bg-primary hover:text-on-primary transition-colors active:scale-95">
                    Lanjutkan
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LearningTable;
