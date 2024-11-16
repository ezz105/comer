import React from 'react'
import PropTypes from 'prop-types'

const SearchBar = ({ placeholder, value, onChange, onSearch }) => {
    return (
        <div className="flex items-center border border-gray-300 rounded-md shadow-sm overflow-hidden w-full max-w-md">
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="flex-grow px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-l-md"
            />
            <button
                onClick={onSearch}
                className="bg-blue-500 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-600 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Search
            </button>
        </div>
    )
}

SearchBar.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
}

export default SearchBar
