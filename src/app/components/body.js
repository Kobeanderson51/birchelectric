import Image from 'next/image';
import electrician from '../../../public/images/electricians.jpg';

const Body = () => {
    return (
        <div id="expert" className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-900">
            <div className="right md:w-1/2 p-4">
                <Image 
                    src={electrician} 
                    alt="electrician" 
                    layout="responsive" 
                    width={500} 
                    height={500} 
                    className="rounded-lg shadow-lg"
                />
            </div>
            <div id="left" className="md:w-1/2 p-4 text-white">
                <h1 className="text-7xl font-extrabold mb-4 text-center md:text-left">
                    Expert Electricians for Your Commercial & Residential Needs
                </h1>
                <h3 className="text-3xl leading-relaxed text-gray-300 mb-6">
                    Our team of highly skilled electricians provides top-quality electrical solutions for both commercial and residential needs. Serving Price, Carbon/Emery County, and the St. George area, Washington County, we ensure the highest standards of safety and efficiency.
                </h3>
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                    Schedule Service
                </button>
            </div>
        </div>
    );
};

export default Body;
