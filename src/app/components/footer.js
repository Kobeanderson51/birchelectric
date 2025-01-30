import { useState, useEffect } from 'react';

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-800">
            <div 
                className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-4">Birch Electric</h3>
                        <p className="text-gray-400 text-sm">
                            Professional electrical services for residential and commercial needs.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                        <div className="space-y-2">
                            <p className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300">
                                <a href="tel:435-637-4099">Price: 435-637-4099</a>
                            </p>
                            <p className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300">
                                <a href="tel:435-288-2526">St. George: 435-288-2526</a>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-right">
                        <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                        <div className="space-y-2">
                            <a 
                                href="#about" 
                                className="block text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300"
                            >
                                About Us
                            </a>
                            <a 
                                href="#services" 
                                className="block text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300"
                            >
                                Services
                            </a>
                            <a 
                                href="#contact" 
                                className="block text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                        <p className="text-sm text-gray-400 mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} Birch Electric. All Rights Reserved.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-end space-x-4">
                            <a 
                                href="/privacy-policy" 
                                className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
                            >
                                Privacy Policy
                            </a>
                            <a 
                                href="/terms-of-service" 
                                className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
