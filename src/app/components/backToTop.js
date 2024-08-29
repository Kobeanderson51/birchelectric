import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTopButton() {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 bg-gradient-to-br from-blue-500 to-blue-700 text-white p-4 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 flex items-center justify-center"
            aria-label="Back to top" 
        >
            <FaArrowUp size={20} /> 
        </button>
    );
}
