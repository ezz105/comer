import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ headers, rows }) => {
    return (
        <div className="overflow-x-auto rounded-4xl shadow-md bg-light-background dark:bg-dark-background">
            <table className="min-w-full border-collapse table-auto border border-light-table-border dark:border-dark-table-border">
                <thead>
                    <tr className="bg-light-table-header dark:bg-dark-table-header">
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wide text-light-table-text dark:text-dark-table-text border-b border-light-table-border dark:border-dark-table-border"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={`transition-colors hover:bg-light-table-hover dark:hover:bg-dark-table-hover ${rowIndex % 2 === 0
                                ? 'bg-light-table-row dark:bg-dark-table-row'
                                : 'bg-light-table-altRow dark:bg-dark-table-altRow'
                                }`}
                        >
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className="px-6 py-4 text-sm text-light-table-text dark:text-dark-table-text border-b border-light-table-border dark:border-dark-table-border"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

Table.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    rows: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Table;
