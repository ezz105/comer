import React from 'react'
import PropTypes from 'prop-types'

const CategoryCard = ({ title, image, description, onClick, bgColor = 'bg-white' }) => {
    return (
        <div
            className={`shadow-md rounded-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-lg ${bgColor}`}
            onClick={onClick}
        >
            {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>
            </div>
        </div>
    )
}

CategoryCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string,
    onClick: PropTypes.func,
    bgColor: PropTypes.string, 
}

CategoryCard.defaultProps = {
    image: null,
    description: '',
    onClick: () => { },
    bgColor: 'bg-white',
}

export default CategoryCard
