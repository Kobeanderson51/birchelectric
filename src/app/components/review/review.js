import { useState } from 'react';
import reviewImage from '../../../../public/images/Positive-Reviews-.jpeg';
import ReviewSection from './reviewSection'; // Adjust path as necessary
import ReviewForm from './reviewForm'; // Adjust path as necessary

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
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${reviewImage.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(50%)'
                    }}
                ></div>
                
                {/* Overlay for Text */}
                <div className="relative z-10 max-w-3xl mx-auto text-center bg-gray-900 bg-opacity-50 py-8 px-4 rounded-lg">
                    <h2 className="text-3xl font-extrabold text-white mb-8">
                        Don’t Just Take Our Word for It
                    </h2>
                    <p className="text-lg text-gray-300">
                        Hear from our satisfied customers about their experiences with our services. We take pride in providing top-notch service and ensuring every client is happy with the results.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                            Read Reviews
                        </button>
                    </div>
                </div>
            </div>

            {/* Review Section */}
            <ReviewSection reviews={reviews} />

            {/* Review Form */}
            <ReviewForm onSubmit={handleAddReview} />
        </>
    );
}
