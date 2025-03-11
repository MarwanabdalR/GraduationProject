import React from 'react';
import { Button } from '../../Components/Button';

const PersonalStyle = () => {
    return (
        <div className="flex items-center bg-white mt-8">
            <div className="md:w-1/2 mb-4" style={{minHeight:"50px"}}>
                <h3 className="text-3xl font-bold mb-4">
                    Personalized Style Recommendations Powered by AI
                </h3>
                <p className="text-gray-600 mb-6">
                    Discover outfit ideas tailored uniquely to your style. Our AI learns from your wardrobe to suggest looks for any occasion.
                </p>
                <Button Name={"Learn More"}/>

                
            </div>
            <div className="md:w-1/2 flex justify-center">
                <img
                    src="../../../public/Images/outfit2.jpg"
                    alt="Outfit"
                    className="rounded-lg"
                    style={{maxHeight:"550px" }}
                />
            </div>
        </div>
    );
};

export default PersonalStyle;