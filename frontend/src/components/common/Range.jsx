import React from 'react'
import PropTypes from 'prop-types'

const Range = ({ min = 0, max = 100, value, onChange, step = 1 }) => {
    return (
        <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">{min}</span>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                step={step}
                onChange={onChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            />
            <span className="text-sm text-gray-600">{max}</span>
            <span className="text-sm font-medium text-gray-800">{value}</span>
        </div>
    )
}

Range.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    step: PropTypes.number,
}

export default Range
