import React from 'react';
import TableHeader from './learning/TableHeader';
import TableRow from './learning/TableRow';
import Pagination from './learning/Pagination';

const mockData = [
  {
    language: 'Spanish',
    unit: 'Lesson 1: Greetings',
    progress: 75,
    xp: 1200,
    status: 'Active',
    flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6QxgxyTkdYrrTPY8V9dzMtWHMp_yCzGy6CvosnvrFupWeQYAJ3zPBBExwae7WjNxEmEXDeeNS0RrYK97JvMSS3b1KlyGAGWK68Sm9ksmSaiSqgByKchlcrwFriZBJ31SlYhsqU1Ut2rsDp9vLk6O7wkPwRSfMSvt_dsDFOtj8Jik3Kbym1HRjLngKx-mVRIKHgZbq4PRM-tsj6Uf7ai7OxcGYKB7BafaCRUVCz_5CmHbrs1yZesZjkYvgkEECe_vs54RCh8Znrxx4'
  },
  {
    language: 'French',
    unit: 'Lesson 2: Food',
    progress: 50,
    xp: 800,
    status: 'Active',
    flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6QxgxyTkdYrrTPY8V9dzMtWHMp_yCzGy6CvosnvrFupWeQYAJ3zPBBExwae7WjNxEmEXDeeNS0RrYK97JvMSS3b1KlyGAGWK68Sm9ksmSaiSqgByKchlcrwFriZBJ31SlYhsqU1Ut2rsDp9vLk6O7wkPwRSfMSvt_dsDFOtj8Jik3Kbym1HRjLngKx-mVRIKHgZbq4PRM-tsj6Uf7ai7OxcGYKB7BafaCRUVCz_5CmHbrs1yZesZjkYvgkEECe_vs54RCh8Znrxx4'
  },
  {
    language: 'German',
    unit: 'Lesson 3: Travel',
    progress: 25,
    xp: 400,
    status: 'Active',
    flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6QxgxyTkdYrrTPY8V9dzMtWHMp_yCzGy6CvosnvrFupWeQYAJ3zPBBExwae7WjNxEmEXDeeNS0RrYK97JvMSS3b1KlyGAGWK68Sm9ksmSaiSqgByKchlcrwFriZBJ31SlYhsqU1Ut2rsDp9vLk6O7wkPwRSfMSvt_dsDFOtj8Jik3Kbym1HRjLngKx-mVRIKHgZbq4PRM-tsj6Uf7ai7OxcGYKB7BafaCRUVCz_5CmHbrs1yZesZjkYvgkEECe_vs54RCh8Znrxx4'
  },
  {
    language: 'Italian',
    unit: 'Lesson 4: Shopping',
    progress: 100,
    xp: 1500,
    status: 'Completed',
    flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6QxgxyTkdYrrTPY8V9dzMtWHMp_yCzGy6CvosnvrFupWeQYAJ3zPBBExwae7WjNxEmEXDeeNS0RrYK97JvMSS3b1KlyGAGWK68Sm9ksmSaiSqgByKchlcrwFriZBJ31SlYhsqU1Ut2rsDp9vLk6O7wkPwRSfMSvt_dsDFOtj8Jik3Kbym1HRjLngKx-mVRIKHgZbq4PRM-tsj6Uf7ai7OxcGYKB7BafaCRUVCz_5CmHbrs1yZesZjkYvgkEECe_vs54RCh8Znrxx4'
  },
  {
    language: 'Japanese',
    unit: 'Lesson 5: Culture',
    progress: 30,
    xp: 500,
    status: 'Active',
    flag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6QxgxyTkdYrrTPY8V9dzMtWHMp_yCzGy6CvosnvrFupWeQYAJ3zPBBExwae7WjNxEmEXDeeNS0RrYK97JvMSS3b1KlyGAGWK68Sm9ksmSaiSqgByKchlcrwFriZBJ31SlYhsqU1Ut2rsDp9vLk6O7wkPwRSfMSvt_dsDFOtj8Jik3Kbym1HRjLngKx-mVRIKHgZbq4PRM-tsj6Uf7ai7OxcGYKB7BafaCRUVCz_5CmHbrs1yZesZjkYvgkEECe_vs54RCh8Znrxx4'
  }
];

export default function LearningTable() {
  return (
    <div className="bg-surface-container-lowest rounded-xl border-2 border-border-color shadow-[0_4px_0_0_#E5E5E5] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <TableHeader />
          <tbody className="divide-y-2 divide-border-color">
            {mockData.map((item, index) => (
              <TableRow key={index} {...item} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
}
