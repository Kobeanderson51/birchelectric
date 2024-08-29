import Image from 'next/image';
import electrician from '../../../public/images/electricians.jpg';

const Body = () => {
    return (
        <div id="expert" className="flex flex-col md:flex-row items-center justify-center md:justify-between p-6 md:p-12 bg-gray-900">
            <div className="md:w-1/2 p-4 flex justify-center">
                <Image 
                    src={electrician} 
                    alt="Electrician" 
                    layout="intrinsic" 
                    width={600} 
                    height={400} 
                    className="rounded-lg shadow-lg"
                />
            </div>
            <div id="left" className="md:w-1/2 p-4 text-white flex flex-col items-center md:items-start">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center md:text-left">
                    Expert Electricians for Your Commercial & Residential Needs
                </h1>
                <h3 className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-300 mb-6 text-center md:text-left">
                    Our team of highly skilled electricians provides top-quality electrical solutions for both commercial and residential needs. Serving Price, Carbon/Emery County, and the St. George area, Washington County, we ensure the highest standards of safety and efficiency.
                </h3>
                <div className="flex justify-center md:justify-start w-full">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                        Schedule Service
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Body;
