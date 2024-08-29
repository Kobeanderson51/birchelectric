import { useState } from 'react';
import reviewImage from '../../../../public/images/reviewImage.jpg';
import ReviewSection from './reviewSection'; // Adjust path as necessary

export default function Review() {
    const [reviews, setReviews] = useState([
        {
            name: "John Doe",
            review: "Excellent service! The team was professional and the results were beyond expectations.",
            date: "August 15, 2024"
        },
        {
            name: "Jane Smith",
            review: "Highly recommended! They were prompt, courteous, and did a fantastic job.",
            date: "July 22, 2024"
        }
        // Initial reviews data
    ]);

    const handleAddReview = (newReview) => {
        setReviews((prevReviews) => [newReview, ...prevReviews]);
    };

    return (
        <>
            <div className="relative bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div 
                    className="absolute inset-0 z-0 bg-black bg-opacity-50"
                ></div>
                
                {/* Overlay for Text */}
                <div className="relative z-10 max-w-3xl mx-auto text-center bg-gray-900 bg-opacity-50 py-8 px-4 rounded-lg">
                    <h2 className="text-3xl font-extrabold text-white mb-8">
                        Don’t Just Take Our Word for It
                    </h2>
                    <p className="text-lg text-gray-300">
                        Hear from our satisfied customers about their experiences with our services. We take pride in providing top-notch service and ensuring every client is happy with the results.
                    </p>
                </div>
            </div>

            {/* Review Section */}
            <ReviewSection reviews={reviews} />
            </>
    );
}
