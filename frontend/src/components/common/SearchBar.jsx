import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { FiSearch } from 'react-icons/fi'

const SearchBar = ({ placeholder = 'Search...', onSearch }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const searchBarRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = event => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleKeyPress = event => {
        if (event.key === 'Enter' && inputValue.trim()) {
            onSearch(inputValue)
            setIsOpen(false)
            setInputValue('')
        }
    }
    const handleIconClick = () => {
        if (isOpen) {
            if (inputValue.trim()) {
                onSearch(inputValue)
                setInputValue('')
                setIsOpen(false)
            }
        } else {
            setIsOpen(true)
        }
    }

    return (
        <div ref={searchBarRef} className="relative flex items-center w-full max-w-md">
            <div
                className={`flex items-center transition-all duration-500 ease-in-out ${isOpen ? 'w-full px-4 py-2 bg-light-background dark:bg-dark-background shadow-md rounded-full' : 'w-10'}`}
            >
                {isOpen && (
                    <input
                        type="text"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={placeholder}
                        className="flex-grow text-sm bg-transparent dark:text-dark-text focus:outline-none placeholder:text-light-secondary dark:placeholder:text-dark-secondary"
                    />
                )}
                <FiSearch
                    size={20}
                    className={`cursor-pointer text-light-text dark:text-dark-text  transition-all duration-300 ${
                        isOpen 
                            ? inputValue 
                                ?'cursor-pointer text-light-primary dark:text-dark-primary'
                                : 'cursor-text text-light-secondary dark:text-dark-secondary'
                            : ''}`}
                    onClick={handleIconClick}
                />
            </div>
        </div>
    )
}

SearchBar.propTypes = {
    placeholder: PropTypes.string,
    onSearch: PropTypes.func.isRequired, // الخاصية الوحيدة المطلوبة
}

export default SearchBar
