import React from 'react'
import PropTypes from 'prop-types'

const Tooltip = ({ children, text, position = 'top', color = 'gray' }) => {
    const positions = {
        top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
    }

    const colors = {
        gray: 'bg-gray-700',
        blue: 'bg-blue-500',
        green: 'bg-green-500',
        red: 'bg-red-500',
        yellow: 'bg-yellow-500',
    }

    return (
        <div className="relative group">
            {children}
            <div
                className={`absolute hidden group-hover:block ${colors[color]} text-white text-xs px-2 py-1 rounded shadow-lg ${positions[position]}`}
            >
                {text}
            </div>
        </div>
    )
}

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    color: PropTypes.oneOf(['gray', 'blue', 'green', 'red', 'yellow']),
}

export default Tooltip
