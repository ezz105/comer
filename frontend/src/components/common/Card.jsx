import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ title, description, image, footer, actions, children }) => {
    return (
        <div className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
            {/* Image Section */}
            {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />}

            {/* Content Section */}
            <div className="p-4">
                {/* Title */}
                {title && <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>}

                {/* Description */}
                {description && <p className="text-gray-600 mt-2 mb-4">{description}</p>}

                {/* Children Elements */}
                {children && <div className="text-gray-700 mt-3">{children}</div>}
            </div>

            {/* Actions (Buttons, etc.) */}
            {actions && <div className="p-4 flex justify-end space-x-2 border-t">{actions}</div>}

            {/* Footer Section */}
            {footer && <div className="p-4 bg-gray-100 border-t">{footer}</div>}
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    footer: PropTypes.node,
    actions: PropTypes.node,
    children: PropTypes.node,
}

export default Card
