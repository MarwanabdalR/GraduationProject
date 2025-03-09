// Abdalrady
import { useState } from "react";
import { Bounce, Roll } from "react-awesome-reveal";
import { GoArrowUpRight, GoArrowRight } from "react-icons/go";

const MenWomenSection = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (button) => setHoveredButton(button);
  const handleMouseLeave = () => setHoveredButton(null);

  return (
    <div className="-mx-3 my-3">
      <div className="flex flex-col md:flex-row items-center justify-center relative md:-ml-4">
        {/* Women Section */}
        <Roll delay={1000} duration={1000} triggerOnce>
          <div className="flex justify-center w-full md:w-auto">
            <img
              src="https://sumilux-fashion.myshopify.com/cdn/shop/files/home1-women-2_768x.webp?v=1730083817"
              alt="Women Shop"
              className="w-full md:w-auto object-cover md:object-center"
            />
          </div>
        </Roll>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center text-center absolute bg-white bg-opacity-75 p-4 rounded-lg md:bg-transparent md:p-0 z-10">
          <Bounce delay={2000} duration={1500} triggerOnce>
            <p className="uppercase text-xs md:text-sm font-semibold text-gray-700">
              Shop Outfits
            </p>
            <h1 className="uppercase text-lg md:text-xl font-bold text-gray-900 mt-2">
              Hello Sweet Customer
            </h1>
            <div className="mt-4 md:mt-6 flex flex-col md:flex-row gap-2 md:gap-7">
              <button
                className="bg-white text-black font-semibold text-sm px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
                onMouseEnter={() => handleMouseEnter("women")}
                onMouseLeave={handleMouseLeave}
              >
                Women
                {hoveredButton === "women" ? (
                  <GoArrowRight className="inline-block ml-2" />
                ) : (
                  <GoArrowUpRight className="inline-block ml-2" />
                )}
              </button>
              <button
                className="bg-white text-black font-semibold text-sm px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
                onMouseEnter={() => handleMouseEnter("men")}
                onMouseLeave={handleMouseLeave}
              >
                Men
                {hoveredButton === "men" ? (
                  <GoArrowRight className="inline-block ml-2" />
                ) : (
                  <GoArrowUpRight className="inline-block ml-2" />
                )}
              </button>
            </div>
          </Bounce>
        </div>

        {/* Men Section */}
        <Roll delay={1700} duration={1000} triggerOnce>
          <div className="flex justify-center w-full md:w-auto">
            <div className="bg-white">
              <img
                src="https://sumilux-fashion.myshopify.com/cdn/shop/files/home1-men-1_768x.webp?v=1730083818"
                alt="Men Shop"
                className="w-full md:w-auto object-cover md:object-center"
              />
            </div>
          </div>
        </Roll>
      </div>
    </div>
  );
};

export default MenWomenSection;

