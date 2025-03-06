import { Fade, Slide } from "react-awesome-reveal";
import React, { useState, useEffect } from 'react';
import SaleTimerBG from "../../../public/Images/SaleTimerBG.webp"
export default function SaleTimer() {
    const targetDate = "2025-12-31T23:59:59"; // Set your target date here

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                mins: Math.floor((difference / 1000 / 60) % 60),
                secs: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="overflow-hidden block -mx-[12px]" style={{marginTop: "-10px",marginLeft: "-12px",marginRight:"-12px"}}>
            <div className="relative bg-[#101010] py-3 md:py-8 lg:py-8  xl:py-8 h-full bg-center bg-cover " style={{backgroundImage:`url(${SaleTimerBG})`,backgroundSize: "1470px",paddingTop: "25px",paddingBottom: "25px"}}>
                <div className="lg:max-w-5xl md:max-w-3xl sm:max-w-xl w-full px-3 mx-auto">
                    <div className="items-center justify-between flex">
                        <Fade  direction="left" triggerOnce>
                            <div className="visible text-white text-base max-md:mb-5 max-lg:font-extrabold text-center opacity-0" style={{paddingLeft:"15px"}}>DON'T MISS <span style={{color:"#fff000"}}>70% OFF</span> ALL SALE! NO CODE NEEDED!</div>
                        </Fade>
                        <div className="visible opacity-[1] justify-center items-center flex" style={{paddingRight:"15px"}}>
                            <Fade cascade direction="right" triggerOnce>
                                <div className="inline-flex items-center">
                                    {Object.entries(timeLeft).map(([unit, value]) => (
                                        <div key={unit} className=" text-[#181818] bg-white rounded-full mr-2 text-center flex flex-col items-center justify-center w-10 h-10">
                                            <span className="relative block -mb-1 text-[10px] font-bold">{value}</span>
                                            <span className="text-[10px]">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
                                        </div>
                                    ))}
                                    <div className="" style={{paddingLeft:"20px"}}>
                                    <a href="/collections/flash-deals" className="cursor-pointer ml-10 h-12 min-w-[clamp(60px,126px,140px)] py-0 px-[20px] inline-flex items-center justify-center  text-white hover:text-black  hover:bg-white border-2 border-white hover:border-black rounded-3xl text-center">
                                    <span className="px-4 text-xs font-medium hover:text-black">View All Deals</span>
                                    </a>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
