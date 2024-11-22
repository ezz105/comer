import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ProgressBar = ({ progress, maxSteps = 5, showSteps = true }) => {
    const stepProgress = Math.min(progress / (100 / maxSteps), maxSteps);
    const segments = Array.from({ length: maxSteps }, (_, i) => i < stepProgress);

    return (
        <div className="space-y-4">
            {/* النصوص */}
            <div className="flex justify-between items-center">
                <span className="text-light-text dark:text-dark-text font-medium">
                    Progress: {progress}%
                </span>
                <span className="text-light-secondary dark:text-dark-secondary text-sm">
                    Step {Math.ceil(stepProgress)} of {maxSteps}
                </span>
            </div>

            {/* شريط التقدم */}
            <div className="relative w-full h-6 bg-light-border dark:bg-dark-border rounded-full overflow-hidden shadow-inner">
                <div className="absolute top-0 left-0 h-full transition-all duration-500 bg-light-primary dark:bg-dark-primary"
                     style={{ width: `${progress}%` }}
                ></div>
                {showSteps && (
                    <div className="absolute inset-0 flex items-center justify-between px-2">
                        {segments.map((active, idx) => (
                            <span
                                key={idx}
                                className={clsx(
                                    'w-2 h-2 rounded-full',
                                    active ? 'bg-light-secondary dark:bg-dark-secondary' : 'bg-light-border dark:bg-dark-border'
                                )}
                            ></span>
                        ))}
                    </div>
                )}
            </div>

            {/* النص النهائي */}
            {progress >= 100 && (
                <p className="text-green-500 dark:text-green-400 text-sm text-center mt-2">
                    🎉 Process Completed!
                </p>
            )}
        </div>
    );
};

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired, // النسبة المئوية للتقدم
    maxSteps: PropTypes.number, // عدد الخطوات التقسيمية
    showSteps: PropTypes.bool, // عرض النقاط في الشريط
};

export default ProgressBar;
