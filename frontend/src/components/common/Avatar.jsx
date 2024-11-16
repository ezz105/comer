import React from 'react'
import PropTypes from 'prop-types'

const Avatar = ({image,size = 'medium', alt = 'User Avatar', initials, badge, badgePosition = 'bottom-right'}) => {
    const sizes = {
        small: 'w-8 h-8 text-sm',
        medium: 'w-12 h-12 text-md',
        large: 'w-16 h-16 text-lg',
    }

    const badgePositions = {
        'top-left': 'top-0 left-0 transform -translate-x-1/2 -translate-y-1/2',
        'top-right': 'top-0 right-0 transform translate-x-1/2 -translate-y-1/2',
        'bottom-left': 'bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2',
        'bottom-right': 'bottom-0 right-0 transform translate-x-1/2 translate-y-1/2',
    }

    return (
        <div className={`relative ${sizes[size].split(' ')[0]} ${sizes[size].split(' ')[1]}`}>
            {image ? (
                <img
                    src={image}
                    alt={alt}
                    className={`rounded-full ${sizes[size].split(' ')[0]} object-cover border-2 border-gray-300`}
                />
            ) : (
                <div
                    className={`flex items-center justify-center bg-gray-200 text-gray-700 font-semibold rounded-full border-2 border-gray-300 ${sizes[size].split(' ')[0]}`}
                >
                    {initials || '?'}
                </div>
            )}
            {badge && (
                <span
                    className={`absolute ${badgePositions[badgePosition]} bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5`}
                >
                    {badge}
                </span>
            )}
        </div>
    )
}

Avatar.propTypes = {
    image: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    alt: PropTypes.string,
    initials: PropTypes.string,
    badge: PropTypes.string, // النص الذي يظهر داخل الشارة (Badge)
    badgePosition: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']), // موقع الشارة
}

export default Avatar
