import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FiX } from 'react-icons/fi'

const Alert = ({ message, type = 'info', dismissible = false, autoClose = 0, onClose }) => {
    const [visible, setVisible] = useState(true)

    const types = {
        info: 'bg-light-primary text-light-background dark:bg-dark-primary dark:text-dark-background',
        success: 'bg-green-500 text-white',
        warning: 'bg-yellow-500 text-gray-800',
        danger: 'bg-red-500 text-white',
    }

    useEffect(() => {
        if (autoClose > 0) {
            const timer = setTimeout(() => {
                setVisible(false)
                if (onClose) onClose()
            }, autoClose)
            return () => clearTimeout(timer)
        }
    }, [autoClose, onClose])

    if (!visible) return null

    return (
        <div
            className={`p-4 rounded-md shadow-lg flex items-start transition-transform duration-300 transform ${
                visible ? 'scale-100' : 'scale-0'
            } ${types[type]} `}
        >
            <span className="mr-3 text-2xl">
                {type === 'info' && 'ℹ️'}
                {type === 'success' && '✅'}
                {type === 'warning' && '⚠️'}
                {type === 'danger' && '❌'}
            </span>
            <p className="flex-1 text-sm md:text-base">{message}</p>
            {dismissible && (
                <button
                    onClick={() => {
                        setVisible(false)
                        if (onClose) onClose()
                    }}
                    className="ml-4 text-lg hover:opacity-75 focus:outline-none"
                >
                    <FiX />
                </button>
            )}
        </div>
    )
}

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
    dismissible: PropTypes.bool,
    autoClose: PropTypes.number,
    onClose: PropTypes.func,
}

export default Alert
