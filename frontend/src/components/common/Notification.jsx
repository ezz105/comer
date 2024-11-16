import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

const Notification = ({ message, redirectTo, isNew }) => {
    const history = useHistory()

    const handleClick = () => {
        if (redirectTo) {
            history.push(redirectTo)
        }
    }

    const backgroundColor = isNew ? 'bg-blue-500' : 'bg-gray-400'

    return (
        <div
            className={`fixed bottom-4 right-4 flex items-center text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300 ease-in-out ${backgroundColor}`}
            onClick={handleClick}
        >
            <span>{message}</span>
        </div>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
    redirectTo: PropTypes.string,
    isNew: PropTypes.bool,
}

export default Notification
