import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";
export default function Brands() {
    const [activeIcon, setActiveIcon] = useState(0);
    const icons = [
        { id: 0, src: '../../../public/Images/brand-1.png', alt: 'Olivia Lindsay', content: '“There are no ugly women, there are just the ones who don\'t know how to make them look good.”' },
        { id: 1, src: '../../../public/Images/brand-2.png', alt: 'The Black World', content: '"Beauty is within every woman, fashion is simply the art that reveals it to the world with elegance and grace."' },
        { id: 2, src: '../../../public/Images/brand-3.png', alt: 'Salvador', content: '"There are no bad outfits, only those who haven\'t yet found the courage and confidence to wear them beautifully."' },
    ];
    return (
        <div className="max-w-[150px] max-h-[40px] opacity-30 overflow-hidden block ">
            <div className=" bg-white bg-cover bg-center pt-1 pb-16 md:pt-0 md:pb-[80px] lg:pt-0 lg:pb-[100px] xl:pt-0 xl:pb-[120px] ">
                <div className="container mx-auto px-4 sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
                    <div className="block">
                        <div className="relative !mb-[25px] text-center">
                            <div className="text-[#222222] font-semibold leading-tight text-xs tracking-[3px] mx-auto max-w-[990px]">
                                <p className="mb-5 mt-0 block" style={{ letterSpacing: "3px" }}>IN THE PRESS</p>
                            </div>
                        </div>
                        <Fade delay={200} duration={1000} fraction={0.5} direction="up" triggerOnce>
                            <div className='block'>
                                <div className="visible overflow-hidden !mb-[25px] !pb-[20px] text-center">
                                    <div className="block font-semibold text-3xl text-[#181818] mx-auto my-auto max-w-[855px]" style={{ maxWidth: "855px" }}>
                                        <div className="block"><Fade direction="up" key={activeIcon} triggerOnce>{icons.find((icon) => icon.id === activeIcon)?.content}</Fade></div>
                                    </div>
                                </div>
                                <div className="visible justify-center mt-8 flex flex-wrap pl-0 my-0 ">
                                    {icons.map((icon) => (
                                        <button
                                            key={icon.id}
                                            onClick={() => setActiveIcon(icon.id)}
                                            className={`p-2 rounded mx-8 px-8 transition-colors duration-200  hover:bg-gray-200`}
                                        >
                                            <img
                                                src={icon.src}
                                                alt={icon.alt}
                                                className={`h-12 w-auto`}
                                                style={activeIcon === icon.id ?{opacity:"1"} : {opacity:"0.5"}}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </Fade>
                        <ul className=""></ul>
                    </div>
                </div>
            </div>
        </div>
    )
}