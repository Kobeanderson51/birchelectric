'use client';

import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => (
    <div className="flex">
        {[...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={`w-4 h-4 ${
                    index < rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
            />
        ))}
    </div>
);

export default function ReviewSection({ reviews }) {
    return (
        <div id="reviews" className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        What Our Customers Say
                    </h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {reviews.map((review, index) => (
                        <div 
                            key={index} 
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">
                                        {review.name}
                                    </h3>
                                    <div className="mt-1">
                                        <StarRating rating={review.rating} />
                                    </div>
                                </div>
                                <span className="text-sm text-gray-400">
                                    {review.date}
                                </span>
                            </div>
                            
                            <div className="relative">
                                <svg 
                                    className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 h-8 w-8 text-gray-400/20" 
                                    fill="currentColor" 
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                >
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                                <p className="text-gray-300 relative pl-2">
                                    {review.review}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        href="https://www.google.com/search?q=birch+electric+reviews" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                    >
                        See More Reviews on Google
                    </a>
                </div>
            </div>
        </div>
    );
}
