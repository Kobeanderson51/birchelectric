import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/Capture.PNG';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='p-4 bg-gray-800'>
            <div className='flex items-center justify-between'>
                <div className="rightnav flex items-center space-x-4">
                    <Image src={logo} alt="logo" width={100} height={100} className="hidden md:block" />
                </div>
                <button 
                    className="md:hidden text-gray-300 hover:text-white focus:outline-none" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <div className="leftnav hidden md:flex space-x-8 mx-20">
                    <a href="#review" className='text-gray-300 hover:text-white transition duration-300'>Reviews</a>
                    <a href="#about" className='text-gray-300 hover:text-white transition duration-300'>About</a>
                    <a href="#contact" className='text-gray-300 hover:text-white transition duration-300'>Contact</a>
                    <a href="#FAQ" className='text-gray-300 hover:text-white transition duration-300'>FAQ</a>
                    <a href="#hours" className='text-gray-300 hover:text-white transition duration-300'>Hours</a>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
                <a href="#review" className='block py-2 text-gray-300 hover:text-white transition duration-300'>Reviews</a>
                <a href="#about" className='block py-2 text-gray-300 hover:text-white transition duration-300'>About</a>
                <a href="#contact" className='block py-2 text-gray-300 hover:text-white transition duration-300'>Contact</a>
                <a href="#FAQ" className='block py-2 text-gray-300 hover:text-white transition duration-300'>FAQ</a>
                <a href="#hours" className='block py-2 text-gray-300 hover:text-white transition duration-300'>Hours</a>
            </div>
        </nav>
    );
}
