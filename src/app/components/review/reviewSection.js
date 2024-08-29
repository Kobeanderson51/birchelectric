// ReviewSection.jsx
export default function ReviewSection({ reviews }) {
    return (
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-black mb-6">Customer Reviews</h3>
                <div className="space-y-6">
                    {reviews.map((review, index) => (
                        <div key={index} className="border border-gray-300 p-6 rounded-lg bg-white shadow-sm">
                            <p className="text-lg text-gray-900">
                                <q>{review.review}</q>
                            </p>
                            <p className="mt-2 text-sm text-gray-600">
                                - {review.name}, {review.date}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
