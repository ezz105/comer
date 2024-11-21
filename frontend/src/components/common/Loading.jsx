import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Loading = ({ size = 'md', color = '#006D77', speed = 'normal' }) => {
    const sizes = {
        sm: 'h-4 w-4 border-2',
        md: 'h-6 w-6 border-4',
        lg: 'h-8 w-8 border-4',
    };

    const speedDurations = {
        slow: '3s',
        normal: '1s',
        fast: '0.5s',
    }

    return (
        <div className="flex items-center justify-center">
            <div
                className={clsx(
                    'rounded-full border-gray-200 dark:border-gray-600 animate-spin',
                    sizes[size],
                )}
                style={{
                    borderTopColor: color,
                    animationDuration: speedDurations[speed],
                }}
            />
        </div>
    );
};

Loading.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    color: PropTypes.string,
    speed: PropTypes.oneOf(['slow', 'normal', 'fast']),
};

export default Loading;
