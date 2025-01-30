'use client';

import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import ReviewSection from './reviewsection';

export default function Review() {
    const [mounted, setMounted] = useState(false);
    const [reviews] = useState([
        {
            name: "Matt P.",
            review: "Darin and his guys are awesome! They came and replaced the power meter at my new house. I was expecting to be without power for about 24 hours. It ended up being about 7 with everything getting replaced and new wiring installed! Best service in the State as far as I'm concerned! Will definitely be using them again and would recommend them for any electrical work you need! Very respectful of my property and cleaned up as they went and before they left. Did I mention that they did all this in 24° weather and a wind chill that made it feel like 10°? Above and beyond!",
            date: "A year ago",
            rating: 5
        },
        {
            name: "S Lamb",
            review: "Birch Electric answered my call on the first try, arrived at the location 20 minutes later and had the problem fixed within the hour!  Great service and very reasonable price.  Would definitely recommend!",
            date: "6 years ago",
            rating: 5
        },
        {
            name: "Jay D.",
            review: "Awesome guy to work with.",
            date: "3 months ago",
            rating: 5
        },
    ]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>

            {/* Review Section */}
            <ReviewSection reviews={reviews} />
        </>
    );
}
