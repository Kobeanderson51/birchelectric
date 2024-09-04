import { useState } from 'react';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
        <div className="max-w-full md:max-w-4xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg mt-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-base sm:text-lg text-gray-700 text-center mb-8">
                Here are some of the most common questions we receive. If you don&apos;t find your answer here, feel free to contact us!
            </p>
            <div className="space-y-4 sm:space-y-6">
                <div className="border-b border-gray-300 pb-4">
                    <h2
                        onClick={() => toggleDropdown(0)}
                        className="text-lg sm:text-xl font-semibold text-gray-800 cursor-pointer flex justify-between items-center"
                    >
                        What are some common electrical problems that you can fix?
                        <span className={`transform ${openIndex === 0 ? 'rotate-180' : ''} transition-transform`}>
                            ▼
                        </span>
                    </h2>
                    {openIndex === 0 && (
                        <p className="text-gray-600 mt-3 pl-2 sm:pl-4">
                            We can fix a wide range of electrical problems, including flickering lights, faulty outlets, circuit breaker issues, and electrical surges.
                        </p>
                    )}
                </div>
                <div className="border-b border-gray-300 pb-4">
                    <h2
                        onClick={() => toggleDropdown(1)}
                        className="text-lg sm:text-xl font-semibold text-gray-800 cursor-pointer flex justify-between items-center"
                    >
                        Do you offer maintenance services for electrical systems?
                        <span className={`transform ${openIndex === 1 ? 'rotate-180' : ''} transition-transform`}>
                            ▼
                        </span>
                    </h2>
                    {openIndex === 1 && (
                        <p className="text-gray-600 mt-3 pl-2 sm:pl-4">
                            Yes, we offer regular maintenance services to ensure your electrical system is working properly and efficiently. Regular maintenance can help prevent costly repairs and extend the lifespan of your electrical system.
                        </p>
                    )}
                </div>
                <div className="border-b border-gray-300 pb-4">
                    <h2
                        onClick={() => toggleDropdown(2)}
                        className="text-lg sm:text-xl font-semibold text-gray-800 cursor-pointer flex justify-between items-center"
                    >
                        How long does it take to complete an electrical project? 
                        <span className={`transform ${openIndex === 2 ? 'rotate-180' : ''} transition-transform`}>
                            ▼
                        </span>
                    </h2>
                    {openIndex === 2 && (
                        <p className="text-gray-600 mt-3 pl-2 sm:pl-4">
                            The duration of an electrical project depends on the type and complexity of the project. We will provide you with a timeline during the initial consultation and keep you updated throughout the project.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};
