import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, title, children, onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 dark:bg-opacity-70"
                    onClick={handleOverlayClick}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white dark:bg-dark-background rounded-3xl shadow-2xl w-full max-w-xl mx-4 sm:mx-0"
                    >
                        <div className="flex justify-between items-center px-6 py-4 border-b border-light-border dark:border-dark-border">
                            <h3 className="text-xl font-bold text-light-text dark:text-dark-text text-center">
                                {title}
                            </h3>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 rounded-full flex items-center justify-center bg-light-secondary dark:bg-dark-secondary text-white hover:scale-110 transition-transform"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="p-6 text-light-text dark:text-dark-text">
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
