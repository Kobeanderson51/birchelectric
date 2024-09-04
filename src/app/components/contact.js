export default function Contact() {
    return (
        <div className="bg-slate-400 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="p-8 max-w-md w-full bg-white shadow-lg rounded-lg border border-gray-200">
                <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Contact Us</h1>
                <p className="mb-6 text-gray-600 text-center leading-relaxed">
                    Our contractors and electricians stay in constant communication with our customers until the job is done. To get a free quote, or if you have questions or special requests, just give us a call at <span className="font-semibold text-gray-900">435-637-4099</span> (Price area) or <span className="font-semibold text-gray-900">435-288-2526</span> (St. George area).
                </p>
                <div className="flex justify-center">
                    <a href="tel:435-637-4099" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300">
                        Call Us Now
                    </a>
                </div>
            </div>
        </div>
    );
}
