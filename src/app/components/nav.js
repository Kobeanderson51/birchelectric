import React from 'react';
import Image from 'next/image';
import logo from '../../../public/images/Capture.PNG';

export default function Nav() {
    return (
        <nav className='flex items-center justify-between p-4 bg-gray-800'>
            <div className="rightnav flex items-center space-x-4">
                <Image src={logo} alt="logo" width={100} height={100} />
            </div>
            <div className="leftnav flex space-x-8 mx-20">
                <a href="/" className='text-gray-300 hover:text-white transition duration-300'>Home</a>
                <a href="/about" className='text-gray-300 hover:text-white transition duration-300'>About</a>
                <a href="/contact" className='text-gray-300 hover:text-white transition duration-300'>Contact</a>
            </div>
        </nav>
    );
}
