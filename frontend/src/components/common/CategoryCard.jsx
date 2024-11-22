import React from 'react';
import PropTypes from 'prop-types';

const CategoryCard = ({ title, image, description, onClick }) => {
  return (
    <div
      className="relative bg-light-background dark:bg-dark-background shadow-xl flex items-end justify-center min-h-[220px] rounded-t-[30px] rounded-b-[15px] border border-light-border dark:border-dark-border cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
      onClick={onClick}
    >
      {/* الصورة داخل الدائرة */}
      <div className="absolute -top-[85px] left-1/2 -translate-x-1/2 bg-light-background dark:bg-dark-background shadow-lg border border-light-border dark:border-dark-border rounded-full flex justify-center items-center h-44 w-44 overflow-hidden">
        {image && (
          <div className="h-full w-full flex justify-center items-center overflow-hidden rounded-full">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.1]"
            />
          </div>
        )}
      </div>

      {/* النص */}
      <div className="text-center p-6">
        <h4 className="text-lg font-semibold text-light-text dark:text-dark-text truncate transition-colors duration-300 group-hover:text-light-primary dark:group-hover:text-dark-primary">
          {title}
        </h4>
        {description && (
          <p className="text-sm text-light-muted dark:text-dark-muted mt-2 line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
};

export default CategoryCard;
