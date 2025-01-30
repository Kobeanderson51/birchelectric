import { useState, useEffect } from 'react';

export default function Hours() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentDay, setCurrentDay] = useState('');

    useEffect(() => {
        setIsVisible(true);
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        setCurrentDay(days[new Date().getDay()]);
    }, []);

    const businessHours = [
        { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
        { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
        { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
        { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
        { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
        { day: 'Saturday', hours: 'Closed' },
        { day: 'Sunday', hours: 'Closed' },
    ];

    return (
        <div className='bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6'>
            <div 
                className={`max-w-2xl mx-auto transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
            >
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90"></div>
                        <div className="relative p-8">
                            <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-2">
                                Business Hours
                            </h1>
                            <p className="text-center text-white/90 text-lg">
                                Available to serve you during these hours
                            </p>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="space-y-4">
                            {businessHours.map((dayInfo, index) => (
                                <div 
                                    key={index}
                                    className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                                        dayInfo.day === currentDay 
                                            ? 'bg-blue-50 shadow-md' 
                                            : 'hover:bg-gray-50'
                                    }`}
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className={`w-3 h-3 rounded-full ${
                                            dayInfo.hours === 'Closed' 
                                                ? 'bg-red-500' 
                                                : dayInfo.day === currentDay
                                                    ? 'bg-green-500'
                                                    : 'bg-gray-300'
                                        }`}></div>
                                        <span className={`font-medium text-lg transition-colors duration-300 ${
                                            dayInfo.day === currentDay 
                                                ? 'text-blue-600' 
                                                : 'text-gray-700 group-hover:text-gray-900'
                                        }`}>
                                            {dayInfo.day}
                                        </span>
                                    </div>
                                    <span className={`text-lg transition-colors duration-300 ${
                                        dayInfo.hours === 'Closed' 
                                            ? 'text-red-500 font-medium' 
                                            : dayInfo.day === currentDay
                                                ? 'text-blue-600 font-medium'
                                                : 'text-gray-600 group-hover:text-gray-900'
                                    }`}>
                                        {dayInfo.hours}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <p className="text-center text-gray-600 text-sm">
                                * Emergency services available 24/7. Additional charges may apply outside business hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};