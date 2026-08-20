import React from 'react';
import PropTypes from 'prop-types';

/**
 * Table component
 * @param {Object} props - Component props
 * @param {Array} props.data - Table data
 * @param {Array} props.columns - Table columns
 * @param {boolean} props.striped - Striped rows
 * @returns {JSX.Element} Table component
 */
export default function Table({ data, columns, striped = false }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-neutral-800">
            {columns.map((column) => (
              <th
                key={column.key}
                className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-400"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.id}
              className={`${striped && index % 2 === 0 ? 'bg-neutral-900' : ''}`}
            >
              {columns.map((column) => (
                <td key={column.key} className="py-4 px-4 border-t border-neutral-800">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  striped: PropTypes.bool,
};
