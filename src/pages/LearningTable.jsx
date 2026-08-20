import { ArrowLeft, ArrowRight, Check, X, Search, Bell, User, Calendar, Settings, Heart, Star } from 'lucide-react';

const learningData = [
  { language: 'Spanish', unit: 'Beginner 1', progress: 75, xp: 1250, status: 'Active', flag: 'https://flagcdn.com/es.svg' },
  { language: 'French', unit: 'Intermediate 2', progress: 50, xp: 850, status: 'Active', flag: 'https://flagcdn.com/fr.svg' },
  { language: 'German', unit: 'Advanced 1', progress: 25, xp: 450, status: 'Paused', flag: 'https://flagcdn.com/de.svg' },
  { language: 'Italian', unit: 'Beginner 2', progress: 90, xp: 1500, status: 'Completed', flag: 'https://flagcdn.com/it.svg' },
  { language: 'Portuguese', unit: 'Intermediate 1', progress: 60, xp: 950, status: 'Active', flag: 'https://flagcdn.com/pt.svg' },
];

export default function LearningTable() {
  return (
    <div className="ml-64 pt-16 p-xl">
      <div className="max-w-6xl mx-auto">
        <div className="mb-xl">
          <h2 className="font-headline-xl text-headline-xl text-on-surface">Statistik Belajar</h2>
          <p className="text-gray-light font-body-lg">Lihat progres belajarmu di setiap bahasa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-lg mb-xl">
          <div className="bg-surface-container-lowest border-2 border-border-color rounded-xl p-md shadow-[0_4px_0_0_#E5E5E5]">
            <p className="text-label-caps text-gray-light mb-xs">TOTAL XP</p>
            <p className="text-headline-xl text-primary">12,450</p>
          </div>
          <div className="bg-surface-container-lowest border-2 border-border-color rounded-xl p-md shadow-[0_4px_0_0_#E5E5E5]">
            <p className="text-label-caps text-gray-light mb-xs">KURSUS AKTIF</p>
            <p className="text-headline-xl text-secondary">4</p>
          </div>
          <div className="bg-surface-container-lowest border-2 border-border-color rounded-xl p-md shadow-[0_4px_0_0_#E5E5E5]">
            <p className="text-label-caps text-gray-light mb-xs">HARI BERUNTUN</p>
            <p className="text-headline-xl text-orange">242</p>
          </div>
          <div className="bg-surface-container-lowest border-2 border-border-color rounded-xl p-md shadow-[0_4px_0_0_#E5E5E5]">
            <p className="text-label-caps text-gray-light mb-xs">AKURASI</p>
            <p className="text-headline-xl text-red">92%</p>
          </div>
        </div>

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
                {learningData.map((item, index) => (
                  <tr key={index} className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-xl py-lg">
                      <div className="flex items-center gap-md">
                        <div className="w-10 h-8 rounded-lg overflow-hidden border-2 border-border-color">
                          <img className="w-full h-full object-cover" alt={`Flag of ${item.language}`} src={item.flag} />
                        </div>
                        <span>{item.language}</span>
                      </div>
                    </td>
                    <td className="px-xl py-lg">{item.unit}</td>
                    <td className="px-xl py-lg">
                      <div className="flex items-center gap-md">
                        <div className="w-24 h-2 bg-surface-variant rounded-full">
                          <div className="h-2 rounded-full" style={{ width: `${item.progress}%`, backgroundColor: item.progress === 100 ? '#4CAF50' : '#6750A4' }}></div>
                        </div>
                        <span>{item.progress}%</span>
                      </div>
                    </td>
                    <td className="px-xl py-lg">{item.xp}</td>
                    <td className="px-xl py-lg">
                      <span className={`px-sm py-xs rounded-full text-xs font-bold ${item.status === 'Active' ? 'bg-green-100 text-green-800' : item.status === 'Paused' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-xl py-lg text-center">
                      <button className="text-primary hover:text-primary-dark transition-colors">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
