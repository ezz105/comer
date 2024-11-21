import React from 'react'
import PropTypes from 'prop-types'
import Badge from './Badge'

const Avatar = ({ image, size = 'medium', alt = 'User Avatar', initials, badge, badgePosition = 'bottom-right' }) => {
    const sizes = {
        small: 'w-10 h-10 text-sm',
        medium: 'w-14 h-14 text-md',
        large: 'w-20 h-20 text-lg',
    }

    const badgePositions = {
        'top-left': 'absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2',
        'top-right': 'absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2',
        'bottom-left': 'absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2',
        'bottom-right': 'absolute bottom-0 right-0 transform translate-x-9 translate-y-4',
    }

    return (
        <div className={`relative ${sizes[size]} aspect-square`}>
            {image ? (
                <img
                    src={image}
                    alt={alt}
                    className={`rounded-full object-cover ${
                        size === 'small' ? 
                        'border-light-border dark:border-dark-border' 
                        : 'border-light-primary dark:border-dark-primary'
                        }`}
                />
            ) : (
                <div
                    className={`flex items-center justify-center bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text rounded-full  ${
                        size === 'small' ? 
                        'border-light-border dark:border-dark-border' 
                        :'border-light-primary dark:border-dark-primary'
                        }`}
                >
                    {initials || '?'}
                </div>
            )}
            {badge && (
                <div className={badgePositions[badgePosition]}>
                    <Badge text={badge} variant="danger" size="sm" />
                </div>
            )}
        </div>
    )
}

Avatar.propTypes = {
    image: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    alt: PropTypes.string,
    initials: PropTypes.string,
    badge: PropTypes.string,
    badgePosition: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
}

export default Avatar
