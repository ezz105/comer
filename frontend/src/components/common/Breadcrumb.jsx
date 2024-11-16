import React from 'react'
import PropTypes from 'prop-types'
import { ChevronRightIcon } from '@heroicons/react/solid'

const Breadcrumbs = ({ items }) => {
    return (
        <nav className="flex items-center space-x-2 text-gray-600">
            {items.map((link, index) => (
                <React.Fragment key={index}>
                    <a
                        href={link.href}
                        className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${index === items.length - 1 ? 'text-blue-600 font-semibold' : ''
                            }`}
                        aria-current={index === items.length - 1 ? 'page' : undefined}
                    >
                        {link.label}
                    </a>
                    {index < items.length - 1 && <ChevronRightIcon className="w-4 h-4 text-gray-400" />}
                </React.Fragment>
            ))}
        </nav>
    )
}

Breadcrumbs.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default Breadcrumbs
