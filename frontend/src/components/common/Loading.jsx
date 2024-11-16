import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const Loading = ({ size = 'md', color = 'blue' }) => {
    const sizes = {
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
    }

    // التحقق من نوع اللون (إذا كان رقماً أو رمز لون أو غيره)
    const colorClass =
        typeof color === 'string' && color.match(/^#[0-9A-Fa-f]{6}$/i)
            ? `border-t-[${color}]` // إذا كان HEX
            : typeof color === 'string' && color.match(/^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/)
                ? `border-t-[${color}]` // إذا كان RGB
                : color === 'blue'
                    ? 'border-t-blue-600' // إذا كان blue
                    : color === 'gray'
                        ? 'border-t-gray-600' // إذا كان gray
                        : color === 'red'
                            ? 'border-t-red-600' // إذا كان red
                            : '' // قيمة افتراضية في حال لم تتطابق

    return (
        <div className="flex items-center justify-center">
            <div
                className={clsx(
                    'animate-spin rounded-full border-4 border-gray-200', // الطبقة الأساسية
                    sizes[size], // تحديد الحجم
                    colorClass // تطبيق الكود اللوني
                )}
            />
        </div>
    )
}

// إضافة التحقق من صحة الخصائص
Loading.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg']), // الحجم يمكن أن يكون إما 'sm' أو 'md' أو 'lg'
    color: PropTypes.oneOfType([
        PropTypes.string, // قبول أي قيمة نصية
        PropTypes.number, // قبول أي قيمة رقمية
    ]), // اللون يمكن أن يكون إما نصي أو رقمي
}

export default Loading
