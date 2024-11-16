import React, { useState } from 'react'
import PropTypes from 'prop-types'

const RatingStars = ({ rating, max = 5, onRate }) => {
    const [hoveredRating, setHoveredRating] = useState(null) // لتخزين التقييم أثناء التمرير بالماوس

    const handleMouseEnter = index => setHoveredRating(index + 1) // عند التمرير على النجوم
    const handleMouseLeave = () => setHoveredRating(null) // عند إيقاف التمرير عن النجوم

    return (
        <div className="flex space-x-1">
            {Array.from({ length: max }, (_, index) => (
                <span
                    key={index}
                    className={`cursor-pointer text-2xl transition-colors duration-200 ${(hoveredRating || rating) > index ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                    onClick={() => onRate(index + 1)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    ★
                </span>
            ))}
        </div>
    )
}

RatingStars.propTypes = {
    rating: PropTypes.number.isRequired,
    max: PropTypes.number,
    onRate: PropTypes.func.isRequired,
}

export default RatingStars
