import React from 'react';

const PersonalStyle = () => {
    return (
        <div className="flex  md:flex-row items-center bg-white p-8  max-h-[350px] mt-8">
            <div className="md:w-1/2 mb-4 md:mb-0 text-left sm:max-h-28" style={{minHeight:"50px"}}>
                <h3 className="text-3xl font-bold mb-4">
                    Personalized Style Recommendations Powered by AI
                </h3>
                <p className="text-gray-600 mb-6 ">
                    Discover outfit ideas tailored uniquely to your style. Our AI learns from your wardrobe to suggest looks for any occasion.
                </p>
                <a href="#" className="inline-block bg-blue-500 text-black px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                    Learn More
                </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <img
                    src="../../../public/Images/outfit2.jpg"
                    alt="Outfit"
                    className="rounded-lg max-w-xs"
                    style={{maxHeight:"550px" }}
                />
            </div>
        </div>
    );
};

export default PersonalStyle;