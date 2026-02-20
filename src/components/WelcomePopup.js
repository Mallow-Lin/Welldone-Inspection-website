import { useState, useEffect } from 'react';

function WelcomePopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisitedBefore');
        if (!hasVisited) {
            setIsOpen(true);
            localStorage.setItem('hasVisitedBefore', 'true');
        }
    }, []);

    const closePopup = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative animate-fade-in border-2 border-[#ecb403]">
                {/* Header background with accent */}
                <div className="bg-gradient-to-r from-[#1b6666] to-[#2a8080] px-8 pt-8 pb-6 rounded-t-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#ecb403] opacity-10 rounded-full -mr-20 -mt-20"></div>

                    {/* Close button */}
                    <button
                        onClick={closePopup}
                        className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 w-8 h-8 rounded-full flex items-center justify-center transition duration-300"
                    >
                        ×
                    </button>

                    <h2 className="text-3xl font-bold text-white font-oswald relative z-10">
                        Welcome! 👋
                    </h2>
                    <p className="text-[#ecb403] text-sm mt-1 font-merriweather relative z-10">
                        New Features Available
                    </p>
                </div>

                {/* Content */}
                <div className="px-8 py-6">
                    <p className="text-gray-700 mb-5 leading-relaxed font-merriweather text-sm">
                        We're excited to announce <span className="font-bold text-[#1b6666]">Asbestos Inspection Services!</span>
                    </p>

                    <p className="text-gray-600 mb-6 leading-relaxed font-merriweather text-sm">
                        Whether you need an asbestos survey for renovation, demolition, or compliance, our certified specialists are here to help.
                    </p>

                    {/* Feature highlights */}
                    <div className="space-y-3 mb-6">
                        <div className="flex items-start space-x-3">
                            <span className="text-[#ecb403] font-bold text-lg">✓</span>
                            <p className="text-gray-600 text-sm font-merriweather">Professional & Certified Inspectors</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-[#ecb403] font-bold text-lg">✓</span>
                            <p className="text-gray-600 text-sm font-merriweather">Fast & Reliable Service</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-[#ecb403] font-bold text-lg">✓</span>
                            <p className="text-gray-600 text-sm font-merriweather">NYC Building Code Compliant</p>
                        </div>
                    </div>

                    <button
                        onClick={closePopup}
                        className="w-full bg-gradient-to-r from-[#1b6666] to-[#2a8080] hover:from-[#0f4a4a] hover:to-[#1b5f5f] text-white font-semibold px-8 py-3 rounded-lg transition duration-300 font-oswald border-2 border-[#ecb403] hover:border-[#ffdd00] shadow-md"
                    >
                        EXPLORE SERVICES
                    </button>

                    <button
                        onClick={closePopup}
                        className="w-full mt-3 bg-white hover:bg-gray-50 text-[#1b6666] font-semibold px-8 py-2 rounded-lg transition duration-300 font-oswald border-2 border-gray-300 hover:border-[#1b6666]"
                    >
                        DISMISS
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WelcomePopup;
