export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                    <p className="text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Kobe Anderson. All Rights Reserved.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-end">
                        <a href="/privacy-policy" className="text-gray-400 hover:text-gray-300 mx-2 text-sm md:text-base">Privacy Policy</a>
                        <a href="/terms-of-service" className="text-gray-400 hover:text-gray-300 mx-2 text-sm md:text-base">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
