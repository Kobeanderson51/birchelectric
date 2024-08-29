export default function Contact() {
    return (
        <div className="bg-slate-400 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="p-8 max-w-md mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>
                <p className="mb-8 text-gray-600 text-center">
                    For inquiries, please call us at <span className="font-semibold">435-637-4099 (Price area) or 435-288-2526 (St. George area)</span>
                </p>
                <p className="mb-8 text-gray-600 text-center">
                    You can also send us an email at <span className="font-semibold">
                        <a href="mailto:">BirchElectric</a>
                    </span>
                </p>
            </div>
        </div>
    );
}
