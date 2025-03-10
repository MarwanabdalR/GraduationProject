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
        <div className=" overflow-hidden block ">
            <div className=" bg-white ">
                <div className="container mx-auto px-4 sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
                    <div className="block">
                        <div className="relative text-center">
                            <div className=" font-semibold text-xs mx-auto">
                                <p className="mb-5 mt-0 block" style={{ letterSpacing: "3px" }}>IN THE PRESS</p>
                            </div>
                        </div>
                        <Fade delay={200} duration={1000} fraction={0.5} direction="up" triggerOnce>
                            <div className='block'>
                                <div className="visible overflow-hidden text-center">
                                    <div className="block font-semibold text-3xl text-[#181818] mx-auto" style={{ maxWidth: "855px" }}>
                                        <div className="block"><Fade direction="up" key={activeIcon} triggerOnce>{icons.find((icon) => icon.id === activeIcon)?.content}</Fade></div>
                                    </div>
                                </div>
                                <div className="visible justify-center mt-8 flex flex-wrap">
                                    {icons.map((icon) => (
                                        <button
                                            key={icon.id}
                                            onClick={() => setActiveIcon(icon.id)}
                                            className={`p-2 rounded px-8 duration-200  hover:bg-gray-200`}
                                        >
                                            <img
                                                src={icon.src}
                                                alt={icon.alt}
                                                className={`h-12`}
                                                style={activeIcon === icon.id ?{opacity:"1"} : {opacity:"0.5"}}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}