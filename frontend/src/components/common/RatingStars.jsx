import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RatingStars = ({ rating, max = 5, onRate }) => {
    const [hoveredRating, setHoveredRating] = useState(null);

    const handleMouseEnter = (index) => setHoveredRating(index + 1);
    const handleMouseLeave = () => setHoveredRating(null);

    return (
        <div className="flex space-x-1">
            {Array.from({ length: max }, (_, index) => (
                <span
                    key={index}
                    className={`cursor-pointer text-2xl transition-colors duration-200 ${
                        (hoveredRating || rating) > index ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                    onClick={() => onRate(index + 1)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

RatingStars.propTypes = {
    rating: PropTypes.number.isRequired,
    max: PropTypes.number,
    onRate: PropTypes.func.isRequired,
};

export default RatingStars;
