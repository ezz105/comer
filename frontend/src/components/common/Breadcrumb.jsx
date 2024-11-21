import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const Breadcrumbs = ({ items }) => {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center space-x-3 text-sm">
            {items.map((link, index) => (
                <React.Fragment key={index}>
                    <a
                        href={link.href}
                        className={`group flex items-center space-x-1 text-light-text dark:text-dark-text transition-all duration-300 
                            hover:text-light-primary dark:hover:text-dark-primary hover:underline 
                            ${index === items.length - 1 ? 'text-light-primary dark:text-dark-primary font-semibold pointer-events-none' : ''} 
                            ${index !== items.length - 1 ? 'group-hover:scale-105' : ''}`}
                        aria-current={index === items.length - 1 ? 'page' : undefined}
                        title={link.label}
                    >
                        <span>{link.label}</span>
                    </a>
                    {index < items.length - 1 && (
                        <ChevronRightIcon className="w-5 h-5 text-light-border dark:text-dark-border group-hover:text-light-primary dark:group-hover:text-dark-primary transition-all ease-in-out" />
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};

Breadcrumbs.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Breadcrumbs;
