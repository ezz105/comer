import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Alert = ({ message, type = 'info', dismissible = false, autoClose = 0 }) => {
    const [visible, setVisible] = useState(true)

    const types = {
        info: 'bg-blue-500 text-white',
        success: 'bg-green-500 text-white',
        warning: 'bg-yellow-500 text-gray-800',
        danger: 'bg-red-500 text-white',
    }

    useEffect(() => {
        if (autoClose > 0) {
            const timer = setTimeout(() => setVisible(false), autoClose)
            return () => clearTimeout(timer)
        }
    }, [autoClose])

    if (!visible) return null

    return (
        <div className={`p-4 rounded-md shadow-lg ${types[type]} flex items-start`}>
            <span className="mr-3 text-xl">
                {type === 'info' && 'ℹ️'}
                {type === 'success' && '✅'}
                {type === 'warning' && '⚠️'}
                {type === 'danger' && '❌'}
            </span>
            <p className="flex-1">{message}</p>
            {dismissible && (
                <button
                    onClick={() => setVisible(false)}
                    className="ml-4 text-white hover:text-gray-200 focus:outline-none"
                >
                    &times;
                </button>
            )}
        </div>
    )
}

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
    dismissible: PropTypes.bool, // لإظهار زر الإغلاق
    autoClose: PropTypes.number, // المدة الزمنية للإغلاق التلقائي (بالملي ثانية)
}

export default Alert
