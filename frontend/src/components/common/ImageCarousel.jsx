import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
        setCurrentIndex(prev => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex(prev => (prev - 1 + images.length) % images.length)
    }

    const goToImage = index => {
        setCurrentIndex(index)
    }

    return (
        <div className="relative w-full max-w-full overflow-hidden rounded-lg">
            {/* صورة الكاروسيل */}
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-300 ease-in-out"
            />

            {/* أزرار التنقل */}
            <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-800 focus:outline-none"
            >
                ◀
            </button>
            <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-800 focus:outline-none"
            >
                ▶
            </button>

            {/* مؤشرات التنقل (Dots) */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'} transition-colors duration-200`}
                    />
                ))}
            </div>
        </div>
    )
}

ImageCarousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ImageCarousel
