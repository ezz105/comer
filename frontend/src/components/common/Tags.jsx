import React from 'react'
import PropTypes from 'prop-types'

const Tags = ({ tags, onClick, color = 'gray' }) => {
    const colors = {
        gray: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        blue: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
        green: 'bg-green-100 text-green-800 hover:bg-green-200',
        red: 'bg-red-100 text-red-800 hover:bg-red-200',
        yellow: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    }

    return (
        <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
                <span
                    key={index}
                    onClick={() => onClick(tag)}
                    className={`text-sm px-3 py-1 rounded-full cursor-pointer transition-all ${colors[color]}`}
                >
                    {tag}
                </span>
            ))}
        </div>
    )
}

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func, 
    color: PropTypes.oneOf(['gray', 'blue', 'green', 'red', 'yellow']), 
}

Tags.defaultProps = {
    onClick: () => { },
    color: 'gray',
}

export default Tags
