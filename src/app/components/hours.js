import React from 'react';

export default function Hours() {
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
        <div className='bg-gray-100 p-4 sm:p-6'>
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg text-gray-800">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-center mb-6 pt-5">Business Hours</h1>
                <ul className="divide-y divide-gray-300 ">
                    {businessHours.map((dayInfo, index) => (
                        <li key={index} className="flex justify-between py-2 px-4 sm:px-6">
                            <span className="font-semibold">{dayInfo.day}:</span>
                            <span className={`${dayInfo.hours === 'Closed' ? 'text-red-500' : ''}`}>
                                {dayInfo.hours}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};