import { useEffect, useState } from 'react';
import Image from 'next/image';
import electrician from '../../../public/images/electricians.jpg';

const Body = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-12">
                    {/* Text Content */}
                    <div 
                        className={`w-full lg:w-1/2 text-center lg:text-left transform transition-all duration-1000 ease-out ${
                            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                        }`}
                    >
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4">
                            <span className="block bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                                Expert Electricians
                            </span>
                            <span className="block text-white mt-1">
                                For Your Home & Business
                            </span>
                        </h1>
                        
                        <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Our team of highly skilled electricians provides top-quality electrical solutions for both commercial and residential needs in Price, Carbon/Emery County, and St. George area.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <button 
                                onClick={() => window.location.href = '#contact'}
                                className="group relative inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-base font-semibold text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                            >
                                <span className="relative z-10">Schedule Service</span>
                                <div className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            </button>
                            
                            <button 
                                onClick={() => window.location.href = '#about'}
                                className="group relative inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-blue-400 text-base font-semibold text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                            >
                                <span className="relative z-10">Learn More</span>
                                <div className="absolute inset-0 bg-blue-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            </button>
                        </div>
                    </div>

                    {/* Image Container */}
                    <div 
                        className={`w-full lg:w-1/2 transform transition-all duration-1000 ease-out mb-6 lg:mb-0 ${
                            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                        }`}
                    >
                        <div className="relative group mx-auto max-w-md lg:max-w-none">
                            {/* Main Image */}
                            <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-2xl">
                                <Image 
                                    src={electrician} 
                                    alt="Professional Electrician at Work"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="transition-transform duration-500 group-hover:scale-[1.02]"
                                    priority
                                />
                                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            
                            {/* Decorative Elements */}
                            <div className="absolute -top-2 -right-2 w-16 h-16 bg-blue-600/10 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-blue-400/10 rounded-full blur-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
