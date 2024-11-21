import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, variant = 'primary', size = 'md', disabled = false, icon }) => {
    const baseStyles = `
        inline-flex items-center justify-center font-semibold rounded-lg 
        shadow-sm transition-all duration-200 
        focus:outline-none focus:ring-2 focus:ring-offset-2 
        disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const variants = {
        primary: `
            bg-light-primary text-white hover:bg-blue-600 
            dark:bg-dark-primary dark:hover:bg-blue-700 
            focus:ring-light-primary dark:focus:ring-dark-primary
        `,
        secondary: `
            bg-light-secondary text-light-text hover:bg-gray-400 
            dark:bg-dark-secondary dark:text-dark-text dark:hover:bg-gray-600 
            focus:ring-light-secondary dark:focus:ring-dark-secondary
        `,
        danger: `
            bg-red-600 text-white hover:bg-red-700 
            dark:bg-red-500 dark:hover:bg-red-600 
            focus:ring-red-500 dark:focus:ring-red-400
        `,
    };

    const sizes = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles}
            ${variants[variant]} 
            ${sizes[size]}
            }`}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    disabled: PropTypes.bool,
    icon: PropTypes.node,
};

export default Button;
