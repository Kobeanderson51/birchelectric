'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/Capture.PNG';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Don't render anything until mounted to prevent hydration errors
    if (!mounted) {
        return (
            <nav className="fixed w-full z-50 bg-gray-800">
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2'>
                    <div className='flex items-center justify-between h-16'>
                        <div className="relative flex-shrink-0">
                            <div className="w-[60px] h-[60px]" /> {/* Placeholder for logo */}
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            {['Reviews', 'About', 'Contact', 'FAQ', 'Hours'].map((item) => (
                                <span key={item} className="text-gray-300 text-sm font-medium">{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-800/95 backdrop-blur-sm shadow-lg' : 'bg-gray-800'}`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2'>
                <div className='flex items-center justify-between h-16'>
                    {/* Logo Container */}
                    <div className="relative flex-shrink-0">
                        <a href="#" className="block relative group">
                            <Image 
                                src={logo} 
                                alt="Birch Electric Logo" 
                                width={60} 
                                height={60} 
                                className="transition-all duration-300 group-hover:scale-105"
                                style={{ 
                                    objectFit: 'contain',
                                    filter: 'brightness(1.1) contrast(1.1)'
                                }}
                                priority
                            />
                            <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-gray-300 hover:text-white focus:outline-none transition-transform duration-300 hover:scale-110" 
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Reviews', 'About', 'Contact', 'FAQ', 'Hours'].map((item) => (
                            <a 
                                key={item}
                                href={`#${item.toLowerCase()}`} 
                                className='text-gray-300 hover:text-white relative group transition duration-300 text-sm font-medium'
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-gray-800/95 backdrop-blur-sm`}
            >
                {['Reviews', 'About', 'Contact', 'FAQ', 'Hours'].map((item) => (
                    <a 
                        key={item}
                        href={`#${item.toLowerCase()}`} 
                        className='block py-2 px-4 text-gray-300 hover:text-white hover:bg-gray-700/50 transition duration-300 text-sm font-medium'
                        onClick={() => setIsOpen(false)}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </nav>
    );
}
