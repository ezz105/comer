import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'; // أيقونات جديدة من react-icons

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // التبديل بين الصور
    const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    const goToImage = (index) => setCurrentIndex(index);

    return (
        <div className="relative w-full max-w-full overflow-hidden rounded-xl shadow-lg group hover:shadow-2xl transition-shadow duration-500">
            {/* صورة العرض */}
            <div className="relative overflow-hidden rounded-xl">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="w-full h-80 sm:h-96 md:h-120 object-cover rounded-xl transform transition-transform duration-700 ease-in-out hover:scale-105 group-hover:scale-105"
                />
            </div>

            {/* أزرار التنقل */}
            <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-secondary transition-all duration-300 ease-in-out"
                aria-label="Previous Slide"
            >
                <IoIosArrowBack className="h-8 w-8" />
            </button>
            <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-secondary transition-all duration-300 ease-in-out"
                aria-label="Next Slide"
            >
                <IoIosArrowForward className="h-8 w-8" />
            </button>

            {/* مؤشرات الصور */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => goToImage(index)} 
                        className={`w-4 h-4 rounded-full cursor-pointer ${index === currentIndex ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gray-300'} transition-colors duration-300`}
                    />
                ))}
            </div>
        </div>
    );
};

ImageCarousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageCarousel;
