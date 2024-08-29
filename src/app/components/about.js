import Image from 'next/image';
import image1 from '../../../public/images/image1.jpg';
import image2 from '../../../public/images/image2.png';
import image3 from '../../../public/images/image3.jpg';

export default function About() {
    return (
        <div id="about" className="bg-gray-100 py-12">
            <h2 className="text-center text-7xl font-bold text-blue-600 mb-12">
                About Birch Electric
            </h2>

            {/* Credentials Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mb-12 px-4">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <Image 
                        src={image1} 
                        alt="Electrician working" 
                        layout="responsive"
                        width={500} 
                        height={500} 
                        className="rounded-lg shadow-xl"
                    />
                </div>
                <div className="md:w-1/2 text-gray-800 px-4 md:px-6">
                    <h3 className="text-3xl font-semibold mb-4 text-center md:text-center">Our Credentials</h3>
                    <p className="text-lg leading-relaxed text-center md:text-left mb-4">
                        Our team of electricians is licensed in Utah and services areas of Carbon/Emery County and Washington County, Utah, both in residential and commercial electrical work. Our professionals have undergone extensive training and education in the field, and we hold certifications from recognized industry associations and organizations.
                    </p>
                </div>
            </div>

            {/* Services Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mb-12 px-4 bg-white py-8 rounded-lg shadow-lg">
                <div className="md:w-1/2 text-gray-800 px-4 md:px-6">
                    <h3 className="text-3xl font-semibold mb-4 text-center md:text-center">Our Services</h3>
                    <p className="text-lg leading-relaxed text-center md:text-left mb-4">
                        We offer a wide range of electrical services, including repairs, upgrades, and installations for both residential and commercial properties. We also specialize in energy-efficient solutions, ensuring that our services are both effective and environmentally friendly.
                    </p>
                    <ul className="mt-4 text-lg leading-relaxed list-disc list-inside text-center md:text-left">
                        <li>Commercial Electrical</li>
                        <li>Residential Electrical</li>
                    </ul>
                </div>
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <Image 
                        src={image2} 
                        alt="Electrical services" 
                        layout="responsive"
                        width={500} 
                        height={500} 
                        className="rounded-lg shadow-xl"
                    />
                </div>
            </div>

            {/* Approach Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-4">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <Image 
                        src={image3} 
                        alt="Customer-focused approach" 
                        layout="responsive"
                        width={500} 
                        height={500} 
                        className="rounded-lg shadow-xl"
                    />
                </div>
                <div className="md:w-1/2 text-gray-800 px-4 md:px-6">
                    <h3 className="text-3xl font-semibold mb-4 text-center md:text-center">Our Approach</h3>
                    <p className="text-lg leading-relaxed text-center md:text-left mb-4">
                        Our electricians take a customer-focused approach to our work, striving to deliver solutions that meet our clients&apos; electrical needs while staying within their budget. We provide upfront pricing and communicate clearly throughout the entire process.
                    </p>
                </div>
            </div>
        </div>
    );
}
