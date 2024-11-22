import React from 'react';
import PropTypes from 'prop-types';
import { FaExclamationCircle } from 'react-icons/fa';

const Input = ({
    label,
    type = 'text',
    placeholder = '',
    value,
    onChange,
    onFocus,
    onBlur,
    name,
    id,
    disabled = false,
    error,
    icon: Icon,
    className = '',
    ...props
}) => {
    return (
        <div className={`w-full ${className}`}>
            {/* Label */}
            {label && (
                <label
                    htmlFor={id || name}
                    className="block text-sm font-semibold mb-2 text-light-text dark:text-dark-text"
                >
                    {label}
                </label>
            )}

            {/* Input Container */}
            <div className="relative">
                {/* Optional Icon */}
                {Icon && (
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-light-secondary dark:text-dark-secondary">
                        <Icon />
                    </div>
                )}

                {/* Input Field */}
                <input
                    id={id || name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    disabled={disabled}
                    className={`w-full px-4 py-2 text-sm text-light-text dark:text-dark-text placeholder-light-secondary dark:placeholder-dark-secondary bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary transition-all duration-200
                        ${Icon ? 'pl-12' : 'pl-4'} 
                        ${error ? 'border-red-500 focus:ring-red-500' : ''} 
                        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    {...props}
                />

                {/* Error Icon */}
                {error && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500">
                        <FaExclamationCircle />
                    </div>
                )}
            </div>

            {/* Error Message */}
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    name: PropTypes.string,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    icon: PropTypes.elementType, // Pass any icon component
    className: PropTypes.string,
};

export default Input;
