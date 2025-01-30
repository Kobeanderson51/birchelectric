import { useState, useEffect } from 'react';

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-20 px-4 sm:px-6 lg:px-8">
            <div 
                className={`max-w-4xl mx-auto transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
            >
                <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90"></div>
                        <div className="relative p-8 sm:p-12">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white text-center">
                                Get in Touch
                            </h1>
                            <div className="max-w-2xl mx-auto">
                                <p className="mb-8 text-white text-lg sm:text-xl text-center leading-relaxed">
                                    Our contractors and electricians stay in constant communication with our customers until the job is done. To get a free quote, or if you have questions or special requests, just give us a call.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-8 sm:p-12 bg-white">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="group">
                                <div className="p-6 bg-gray-50 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Price Area</h3>
                                    <p className="text-2xl font-bold text-blue-600 mb-4">435-637-4099</p>
                                    <a 
                                        href="tel:435-637-4099" 
                                        className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        Call Price Office
                                    </a>
                                </div>
                            </div>
                            
                            <div className="group">
                                <div className="p-6 bg-gray-50 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">St. George Area</h3>
                                    <p className="text-2xl font-bold text-blue-600 mb-4">435-288-2526</p>
                                    <a 
                                        href="tel:435-288-2526" 
                                        className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        Call St. George Office
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
