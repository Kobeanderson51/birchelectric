export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="max-w-screen-xl mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
                <div className="mt-2">
                    <a href="/privacy-policy" className="text-gray-400 hover:text-gray-300 mx-2">Privacy Policy</a>
                    <a href="/terms-of-service" className="text-gray-400 hover:text-gray-300 mx-2">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
