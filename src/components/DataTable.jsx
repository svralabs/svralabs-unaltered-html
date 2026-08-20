import React from 'react';

const DataTable = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto bg-surface rounded-xl border border-outline-variant">
      <table className="min-w-full divide-y divide-outline-variant">
        <thead className="bg-surface-container-high">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-on-surface-variant uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-outline-variant">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-surface' : 'bg-surface-container-low'}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-on-surface-variant">
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
