import React from 'react';

const StatsCard = ({ icon, title, value, change, changeType }) => {
  return (
    <div className="bg-surface p-lg rounded-xl border border-outline-variant">
      <div className="flex justify-between items-start mb-md">
        <span className={`material-symbols-outlined p-2 ${icon.bgColor} ${icon.textColor} rounded-lg`}>
          {icon.name}
        </span>
        {change && (
          <span className={`text-xs font-semibold px-2 py-1 rounded-sm ${changeType === 'positive' ? 'text-success-text bg-success-tint' : 'text-error-text bg-error-tint'}`}>
            {change}
          </span>
        )}
      </div>
      <p className="text-on-surface-variant text-sm mb-xs">{title}</p>
      <h2 className="text-display-lg text-2xl font-bold">{value}</h2>
    </div>
  );
};

export default StatsCard;
