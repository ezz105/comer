import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ options, label, onSelect, placeholder = 'Select an option' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = option => {
        setSelected(option);
        onSelect(option);
        setIsOpen(false);
    };

    const handleClickOutside = event => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block w-64 text-left" ref={dropdownRef}>
            {label && <label className="block text-sm font-medium text-light-text dark:text-dark-text mb-2">{label}</label>}

            <button
                onClick={toggleDropdown}
                className="w-full bg-light-primary dark:bg-dark-primary text-white px-4 py-2 rounded-md shadow-lg hover:bg-light-primary/90 dark:hover:bg-dark-primary/90 focus:outline-none flex justify-between items-center"
            >
                {selected || placeholder}
                <span className="ml-2">{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && (
                <div className="absolute right-0 w-full mt-2 bg-white dark:bg-dark-background border border-light-border dark:border-dark-border rounded-lg shadow-lg z-10">
                    <ul className="max-h-48 overflow-y-auto">
                        {options.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelect(option)}
                                className="px-4 py-2 text-light-text dark:text-dark-text hover:bg-light-secondary dark:hover:bg-dark-secondary cursor-pointer"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    label: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};

export default Dropdown;
