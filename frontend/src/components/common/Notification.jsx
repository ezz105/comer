import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';

const Notification = ({ message, redirectTo, isRead}) => {
    const router = useRouter();

    const handleClick = () => {
        if (redirectTo) router.push(redirectTo);
    };

    const notificationStyles = `
        flex items-center gap-4 p-4 rounded-lg shadow-md 
        cursor-pointer transition-all duration-300
        ${isRead ? 'bg-light-border text-light-secondary dark:bg-dark-border dark:text-dark-secondary opacity-70'
            : 'bg-light-background text-light-text hover:bg-light-border dark:bg-dark-background dark:text-dark-text dark:hover:bg-dark-border'}
    `;

    return (
        <div
            onClick={handleClick}
            className={notificationStyles}
        >
            <span className="text-base font-medium">{message}</span>
        </div>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
    redirectTo: PropTypes.string,
    isRead: PropTypes.bool.isRequired,
};
export default Notification;
