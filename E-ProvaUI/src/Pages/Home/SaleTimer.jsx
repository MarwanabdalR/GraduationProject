import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import saleTimerBackground from "../../../public/Images/SaleTimerBG.webp";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go"; // Ensure icons are imported

const SaleTimer = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const targetDate = "2025-12-31T23:59:59";

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden -mx-3 -mt-3">
      <div
        className="relative bg-black py-6 lg:py-10 h-full bg-cover bg-no-repeat bg-center flex items-center between"
        style={{ backgroundImage: `url(${saleTimerBackground})` }}
      >
        <div className="container flex flex-col lg:flex-row md:flex-row justify-between between items-center px-6 sm:px-10 lg:px-12">
          <Fade direction="left" triggerOnce>
            <div>
            <div className="text-white my-3 md:text-xl font-semibold sm:mb-8 lg:mb-0">
              DON'T MISS{" "}
              <span className="text-yellow-400 font-bold">70% OFF</span> ALL
              SALE! NO CODE NEEDED!
            </div>
            </div>
          </Fade>

        <div>
          <div className="flex items-center gap-3 sm:gap-6 lg:gap-10">
            <Fade cascade direction="right" triggerOnce>
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                  key={unit}
                  className="bg-white text-black rounded-full py-1 px-2 flex flex-col items-center justify-center text-center shadow-md sm:p-2"
                >
                  <span className="text-sm sm:text-xl font-bold md:font-semibold md:text-xl xl:text-xl xl:font-normal">{value}</span>
                  <span className="text-xs sm:text-sm md:font-semibold md:text-xl xl:text-sm xl:font-semibold ">
                    {unit.charAt(0).toUpperCase() + unit.slice(1)}
                  </span>
                </div>
              ))}
            </Fade>
            <button
              className="text-white font-semibold text-xs md:text-sm p-1 md:px-4 md:py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center overflow-hidden border border-white"
              onMouseEnter={() => handleMouseEnter("View All Details")}
              onMouseLeave={handleMouseLeave}
            >
              <span className="p-2 md:p-1">View All Details</span>
              {hoveredButton === "View All Details" ? (
                <GoArrowRight className="inline-block ml-1 md:ml-2" />
              ) : (
                <GoArrowUpRight className="inline-block ml-1 md:ml-2" />
              )}
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SaleTimer;

