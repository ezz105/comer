import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({ text, variant = 'primary', size = 'md', className = '' }) => {
    const variants = {
        primary: 'bg-light-primary text-white dark:bg-dark-primary',
        secondary: 'bg-light-secondary text-light-text dark:bg-dark-secondary dark:text-dark-text',
        success: 'bg-green-500 text-white',
        danger: 'bg-red-500 text-white',
        warning: 'bg-yellow-500 text-black',
        info: 'bg-teal-500 text-white',
    }

    const sizes = {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-sm px-3 py-1',
        lg: 'text-base px-4 py-1.5',
    }

    return (
        <span
            className={`inline-block rounded-full ${variants[variant]} ${sizes[size]} font-semibold shadow-md transition-all hover:shadow-lg ${className}`}
        >
            {text}
        </span>
    )
}

Badge.propTypes = {
    text: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    className: PropTypes.string,
}

export default Badge
