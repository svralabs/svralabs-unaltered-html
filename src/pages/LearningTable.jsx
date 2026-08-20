import React from 'react';

const lessons = [
  {
    language: 'Spanish',
    unit: 'Greetings',
    progress: 75,
    xp: 1200,
    status: 'In Progress',
    flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6QxgxyTkdYrrTPY8V9dzMtWHMp_yCzGy6CvosnvrFupWeQYAJ3zPBBExwae7WjNxEmEXDeeNS0RrYK97JvMSS3b1KlyGAGWK68Sm9ksmSaiSqgByKchlcrwFriZBJ31SlYhsqU1Ut2rsDp9vLk6O7wkPwRSfMSvt_dsDFOtj8Jik3Kbym1HRjLngKx-mVRIKHgZbq4PRM-tsj6Uf7ai7OxcGYKB7BafaCRUVCz_5CmHbrs1yZesZjkYvgkEECe_vs54RCh8Znrxx4'
  },
  {
    language: 'French',
    unit: 'Food',
    progress: 50,
    xp: 800,
    status: 'In Progress',
    flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6QxgxyTkdYrrTPY8V9dzMtWHMp_yCzGy6CvosnvrFupWeQYAJ3zPBBExwae7WjNxEmEXDeeNS0RrYK97JvMSS3b1KlyGAGWK68Sm9ksmSaiSqgByKchlcrwFriZBJ31SlYhsqU1Ut2rsDp9vLk6O7wkPwRSfMSvt_dsDFOtj8Jik3Kbym1HRjLngKx-mVRIKHgZbq4PRM-tsj6Uf7ai7OxcGYKB7BafaCRUVCz_5CmHbrs1yZesZjkYvgkEECe_vs54RCh8Znrxx4'
  },
  {
    language: 'German',
    unit: 'Travel',
    progress: 90,
    xp: 1500,
    status: 'Completed',
    flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6QxgxyTkdYrrTPY8V9dzMtWHMp_yCzGy6CvosnvrFupWeQYAJ3zPBBExwae7WjNxEmEXDeeNS0RrYK97JvMSS3b1KlyGAGWK68Sm9ksmSaiSqgByKchlcrwFriZBJ31SlYhsqU1Ut2rsDp9vLk6O7wkPwRSfMSvt_dsDFOtj8Jik3Kbym1HRjLngKx-mVRIKHgZbq4PRM-tsj6Uf7ai7OxcGYKB7BafaCRUVCz_5CmHbrs1yZesZjkYvgkEECe_vs54RCh8Znrxx4'
  },
  {
    language: 'Italian',
    unit: 'Culture',
    progress: 30,
    xp: 400,
    status: 'In Progress',
    flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6QxgxyTkdYrrTPY8V9dzMtWHMp_yCzGy6CvosnvrFupWeQYAJ3zPBBExwae7WjNxEmEXDeeNS0RrYK97JvMSS3b1KlyGAGWK68Sm9ksmSaiSqgByKchlcrwFriZBJ31SlYhsqU1Ut2rsDp9vLk6O7wkPwRSfMSvt_dsDFOtj8Jik3Kbym1HRjLngKx-mVRIKHgZbq4PRM-tsj6Uf7ai7OxcGYKB7BafaCRUVCz_5CmHbrs1yZesZjkYvgkEECe_vs54RCh8Znrxx4'
  }
];

export default function LearningTable() {
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
            {lessons.map((lesson, index) => (
              <tr key={index} className="hover:bg-surface-container-low transition-colors group">
                <td className="px-xl py-lg">
                  <div className="flex items-center gap-md">
                    <div className="w-10 h-8 rounded-lg overflow-hidden border-2 border-border-color">
                      <img className="w-full h-full object-cover" alt={lesson.language} src={lesson.flag} />
                    </div>
                    <span className="font-body-lg text-on-surface">{lesson.language}</span>
                  </div>
                </td>
                <td className="px-xl py-lg font-body-lg text-on-surface">{lesson.unit}</td>
                <td className="px-xl py-lg">
                  <div className="flex items-center gap-md">
                    <div className="w-24 h-2 bg-surface-variant rounded-full">
                      <div className="h-2 rounded-full bg-primary" style={{ width: `${lesson.progress}%` }}></div>
                    </div>
                    <span className="font-body-lg text-on-surface">{lesson.progress}%</span>
                  </div>
                </td>
                <td className="px-xl py-lg font-body-lg text-on-surface">{lesson.xp}</td>
                <td className="px-xl py-lg">
                  <span className={`px-md py-xs rounded-full font-label-caps text-[11px] ${lesson.status === 'Completed' ? 'bg-green-container text-on-green-container' : 'bg-orange-container text-on-orange-container'}`}>
                    {lesson.status}
                  </span>
                </td>
                <td className="px-xl py-lg text-center">
                  <button className="px-md py-sm bg-secondary-container text-on-secondary-container rounded-xl font-label-caps text-[11px] hover:bg-secondary hover:text-on-secondary transition-colors active:scale-95">
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
}
