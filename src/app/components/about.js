import { useEffect, useState } from 'react';
import Image from 'next/image';
import image1 from '../../../public/images/image1.jpg';
import image2 from '../../../public/images/image2.png';
import image3 from '../../../public/images/image3.jpg';

export default function About() {
    const [isVisible, setIsVisible] = useState({
        credentials: false,
        services: false,
        approach: false
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({
                            ...prev,
                            [entry.target.dataset.section]: true
                        }));
                    }
                });
            },
            { threshold: 0.2 }
        );

        const sections = document.querySelectorAll('[data-section]');
        sections.forEach(section => observer.observe(section));

        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    return (
        <div className="bg-gradient-to-b from-gray-100 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-16 transform transition-all duration-700 hover:scale-105">
                    About Birch Electric
                </h2>

                {/* Credentials Section */}
                <div 
                    data-section="credentials"
                    className={`flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mb-20 transform transition-all duration-1000 ${
                        isVisible.credentials ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                    }`}
                >
                    <div className="md:w-1/2 mb-8 md:mb-0 px-4">
                        <div className="relative group">
                            <Image 
                                src={image1} 
                                alt="Electrician working" 
                                width={600} 
                                height={400} 
                                className="rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                            <div className="absolute inset-0 rounded-xl bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>
                    <div className="md:w-1/2 text-gray-800 px-4 md:px-8">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">Our Credentials</h3>
                        <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-600">
                            Our team of electricians is licensed in Utah and services areas of Carbon/Emery County and Washington County, Utah, both in residential and commercial electrical work. Our professionals have undergone extensive training and education in the field, and we hold certifications from recognized industry associations and organizations.
                        </p>
                    </div>
                </div>

                {/* Services Section */}
                <div 
                    data-section="services"
                    className={`flex flex-col md:flex-row-reverse items-center md:items-start justify-center md:justify-between mb-20 transform transition-all duration-1000 ${
                        isVisible.services ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    }`}
                >
                    <div className="md:w-1/2 mb-8 md:mb-0 px-4">
                        <div className="relative group">
                            <Image 
                                src={image2} 
                                alt="Electrical services" 
                                width={600} 
                                height={400} 
                                className="rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                            <div className="absolute inset-0 rounded-xl bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>
                    <div className="md:w-1/2 text-gray-800 px-4 md:px-8">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">Our Services</h3>
                        <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-600">
                            We offer a wide range of electrical services, including repairs, upgrades, and installations for both residential and commercial properties. We also specialize in energy-efficient solutions, ensuring that our services are both effective and environmentally friendly.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h4 className="text-xl font-bold text-blue-600 text-center">Commercial Electrical</h4>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h4 className="text-xl font-bold text-blue-600 text-center">Residential Electrical</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Approach Section */}
                <div 
                    data-section="approach"
                    className={`flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between transform transition-all duration-1000 ${
                        isVisible.approach ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                    }`}
                >
                    <div className="md:w-1/2 mb-8 md:mb-0 px-4">
                        <div className="relative group">
                            <Image 
                                src={image3} 
                                alt="Customer-focused approach" 
                                width={600} 
                                height={400} 
                                className="rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                            <div className="absolute inset-0 rounded-xl bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>
                    <div className="md:w-1/2 text-gray-800 px-4 md:px-8">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">Our Approach</h3>
                        <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-600">
                            Our electricians take a customer-focused approach to our work, striving to deliver solutions that meet our clients&apos; electrical needs while staying within their budget. We provide upfront pricing and communicate clearly throughout the entire process.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
