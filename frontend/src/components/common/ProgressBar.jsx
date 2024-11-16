import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({ progress, color = 'blue', showLabel = false, labelPosition = 'inside' }) => {
    const colorStyles = {
        blue: 'bg-blue-500',
        green: 'bg-green-500',
        red: 'bg-red-500',
        gray: 'bg-gray-500',
    }

    const labelClasses = {
        inside: 'text-white text-xs font-semibold absolute inset-0 flex items-center justify-center',
        outside: 'text-gray-700 text-sm font-medium mt-1 text-right',
    }

    return (
        <div>
            <div className="relative w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                    className={`h-2 ${colorStyles[color]} transition-all duration-300`}
                    style={{ width: `${progress}%` }}
                />
                {showLabel && labelPosition === 'inside' && (
                    <span className={labelClasses[labelPosition]}>{`${progress}%`}</span>
                )}
            </div>
            {showLabel && labelPosition === 'outside' && (
                <span className={labelClasses[labelPosition]}>{`${progress}%`}</span>
            )}
        </div>
    )
}

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired, // النسبة المئوية للتقدم
    color: PropTypes.oneOf(['blue', 'green', 'red', 'gray']), // اللون
    showLabel: PropTypes.bool, // عرض النسبة المئوية على الشريط
    labelPosition: PropTypes.oneOf(['inside', 'outside']), // مكان ظهور النسبة
}

export default ProgressBar
