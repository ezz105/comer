import React from 'react'
import PropTypes from 'prop-types'

const Range = ({ min = 0, max = 100, value, onChange, step = 1 }) => {
    return (
        <div className="flex items-center justify-between w-full max-w-md mx-auto space-x-4 p-4">
            {/* عرض القيمة الدنيا */}
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">{min}</span>

            {/* شريط التمرير */}
            <div className="relative w-full">
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    step={step}
                    onChange={onChange}
                    className="w-full h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                />
                <div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"
                    style={{ width: `${((value - min) / (max - min)) * 100}%` }} // يعرض شريط التقدم مع الحركة
                />
            </div>

            {/* عرض القيمة العليا */}
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">{max}</span>

            {/* عرض القيمة الحالية */}
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{value}</span>
        </div>
    )
}

Range.propTypes = {
    min: PropTypes.number, // القيمة الدنيا للنطاق
    max: PropTypes.number, // القيمة العليا للنطاق
    value: PropTypes.number.isRequired, // القيمة الحالية
    onChange: PropTypes.func.isRequired, // الحدث الذي يتم تشغيله عند تغيير القيمة
    step: PropTypes.number, // الخطوة بين القيم
}

export default Range
