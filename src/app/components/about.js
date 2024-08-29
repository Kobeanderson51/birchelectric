import Image from 'next/image';
import image1 from '../../../public/images/image1.jpg';
import image2 from '../../../public/images/image2.png';
import image3 from '../../../public/images/image3.jpg';

export default function About() {
    return (
        <div id="about" className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-12">
                About Birch Electric
            </h2>

            {/* Credentials Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mb-12">
                <div className="md:w-1/2 mb-8 md:mb-0 px-2">
                    <Image 
                        src={image1} 
                        alt="Electrician working" 
                        layout="responsive"
                        width={600} 
                        height={400} 
                        className="rounded-lg shadow-xl"
                    />
                </div>
                <div className="md:w-1/2 text-gray-800 px-2 md:px-4">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center md:text-center">Our Credentials</h3>
                    <p className="text-base md:text-lg leading-relaxed mb-4 text-center md:text-left">
                        Our team of electricians is licensed in Utah and services areas of Carbon/Emery County and Washington County, Utah, both in residential and commercial electrical work. Our professionals have undergone extensive training and education in the field, and we hold certifications from recognized industry associations and organizations.
                    </p>
                </div>
            </div>

            {/* Services Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mb-12 bg-white py-6 md:py-8 px-4 md:px-6 rounded-lg shadow-lg">
                <div className="md:w-1/2 text-gray-800 mb-8 md:mb-0 px-2">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center md:text-center">Our Services</h3>
                    <p className="text-base md:text-lg leading-relaxed mb-4 text-center md:text-left">
                        We offer a wide range of electrical services, including repairs, upgrades, and installations for both residential and commercial properties. We also specialize in energy-efficient solutions, ensuring that our services are both effective and environmentally friendly.
                    </p>
                    <ul className="text-base md:text-lg list-disc list-inside mb-4 text-center md:text-left">
                        <li>Commercial Electrical</li>
                        <li>Residential Electrical</li>
                    </ul>
                </div>
                <div className="md:w-1/2 mb-8 md:mb-0 px-2">
                    <Image 
                        src={image2} 
                        alt="Electrical services" 
                        layout="responsive"
                        width={600} 
                        height={400} 
                        className="rounded-lg shadow-xl"
                    />
                </div>
            </div>

            {/* Approach Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-2">
                <div className="md:w-1/2 mb-8 md:mb-0 px-2">
                    <Image 
                        src={image3} 
                        alt="Customer-focused approach" 
                        layout="responsive"
                        width={600} 
                        height={400} 
                        className="rounded-lg shadow-xl"
                    />
                </div>
                <div className="md:w-1/2 text-gray-800 px-2 md:px-4">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center md:text-center">Our Approach</h3>
                    <p className="text-base md:text-lg leading-relaxed mb-4 text-center md:text-left">
                        Our electricians take a customer-focused approach to our work, striving to deliver solutions that meet our clients&apos; electrical needs while staying within their budget. We provide upfront pricing and communicate clearly throughout the entire process.
                    </p>
                </div>
            </div>
        </div>
    );
}
