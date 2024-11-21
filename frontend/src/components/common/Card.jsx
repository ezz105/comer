import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaHeart, FaInfoCircle } from 'react-icons/fa';
import Tooltip from './Tooltip';
import Badge from './Badge';
import Tag from './Tags';
import { useRouter } from 'next/navigation';

const Card = ({ id, title, description, image, categories = [], badges = [] }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(favorites.includes(id));
    }, [id]);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!isFavorite) {
            favorites.push(id);
        } else {
            favorites = favorites.filter(item => item !== id);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
        window.dispatchEvent(new Event('favoriteUpdated'));
    };

    const handleDetailsClick = () => {
        router.push(`/details/${id}`);
    };

    const handleCategoryClick = (category) => {
        router.push(`/category/${category}`);
    };

    return (
        <div className="bg-light-background dark:bg-dark-background border rounded-5xl shadow-light dark:shadow-dark overflow-hidden hover:shadow-xl transition-all duration-300 relative h-full w-full max-w-sm">
            {/* Image Section */}
            <div className="relative">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-64 object-cover rounded-t-5xl hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                ) : (
                    <div className="w-full h-64 bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-500 text-lg">
                        <span>No Image Available</span>
                    </div>
                )}

                {/* Actions */}
                
                    <div className="absolute top-4 right-4 flex flex-col items-center space-y-36">
                        {/* Favorite Icon */}
                        <Tooltip text="Favorites" position="bottom">
                            <button
                                onClick={handleFavoriteClick}
                                className={`p-3 rounded-full bg-white bg-opacity-20 text-lg 
                                    ${isFavorite ? 'text-red-600' : 'text-gray-500'}
                                    hover:scale-110 hover:bg-opacity-70 transition-transform`}
                            >
                                <FaHeart />
                            </button>
                        </Tooltip>

                        {/* Details Icon */}
                        <Tooltip text="Details" position="top">
                            <button
                                onClick={handleDetailsClick}
                                className="
                                p-3 rounded-full bg-white bg-opacity-20 text-gray-500 text-lg
                                hover:scale-110 hover:bg-opacity-70 transition-transform"
                            >
                                <FaInfoCircle />
                            </button>
                        </Tooltip>
                    </div>
                
            </div>

            {/* Content Section */}
            <div className="p-6">
                {/* Title */}
                {title && (
                    <h2 className="text-2xl mb-2 font-semibold text-light-text dark:text-dark-text truncate">
                        {title}
                    </h2>
                )}

                {/* Category Tag */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {categories.map((category, index) => (
                        <Tag
                            key={index}
                            tags={[category.text]}
                            onClick={() => handleCategoryClick(category.text)}
                            color={category.color || 'gray'}
                        />
                    ))}
                </div>

                {/* Badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {badges.map((badge, index) => (
                        <Badge key={index} text={badge.text} variant={badge.variant || 'primary'} size="sm" />
                    ))}
                </div>

                {/* Description */}
                {description && (
                    <p className="text-gray-600 dark:text-gray-300 mt-4 line-clamp-3">{description}</p>
                )}
            </div>
        </div>
    )
};

Card.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            color: PropTypes.string,
        })
    ),
    badges: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            variant: PropTypes.string,
        })
    ),
};

export default Card;
