import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={handleClick}
            className={`fixed bottom-8 right-8 z-50 transform transition-all duration-300 ease-out
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
                group bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg 
                hover:shadow-2xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 
                focus:ring-offset-2`}
            aria-label="Back to top"
        >
            <div className="relative">
                <FaArrowUp 
                    size={20} 
                    className="transform transition-transform duration-300 group-hover:-translate-y-1"
                />
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
        </button>
    );
}
