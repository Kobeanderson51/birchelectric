import { useState, useEffect } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
    return (
        <div 
            className={`transform transition-all duration-300 ease-out ${
                isOpen ? 'scale-[1.02]' : 'scale-100'
            }`}
        >
            <div 
                className={`border-b border-blue-200 pb-4 ${
                    isOpen ? 'bg-blue-50/50 rounded-lg p-4' : ''
                } transition-all duration-300`}
            >
                <button
                    onClick={onClick}
                    className="w-full text-left"
                    aria-expanded={isOpen}
                >
                    <div className="flex justify-between items-center group">
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                            {question}
                        </h2>
                        <span className={`transform transition-transform duration-300 text-blue-500 ${
                            isOpen ? 'rotate-180' : ''
                        }`}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? 'max-h-96 mt-4' : 'max-h-0'
                }`}>
                    <p className="text-gray-600 pl-2 sm:pl-4 leading-relaxed">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const faqItems = [
        {
            question: "What are some common electrical problems that you can fix?",
            answer: "We can fix a wide range of electrical problems, including flickering lights, faulty outlets, circuit breaker issues, and electrical surges. Our experienced team is equipped to handle both simple repairs and complex electrical issues."
        },
        {
            question: "Do you offer maintenance services for electrical systems?",
            answer: "Yes, we offer comprehensive maintenance services to ensure your electrical system is working properly and efficiently. Regular maintenance can help prevent costly repairs, extend the lifespan of your electrical system, and ensure the safety of your property."
        },
        {
            question: "How long does it take to complete an electrical project?",
            answer: "The duration of an electrical project depends on the type and complexity of the project. We will provide you with a detailed timeline during the initial consultation and keep you updated throughout the project. Our team works efficiently while maintaining the highest standards of quality and safety."
        },
        {
            question: "Are you licensed and insured?",
            answer: "Yes, we are fully licensed and insured electrical contractors. Our team maintains all required certifications and stays up-to-date with the latest electrical codes and safety standards to ensure the highest quality service for our clients."
        }
    ];

    return (
        <div className="bg-gradient-to-b from-white to-gray-50 py-20">
            <div 
                className={`max-w-4xl mx-auto p-6 sm:p-8 bg-white shadow-xl rounded-2xl transition-all duration-1000 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 text-center mb-12">
                    Here are some of the most common questions we receive. If you don&apos;t find your answer here, feel free to contact us!
                </p>
                <div className="space-y-6">
                    {faqItems.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
