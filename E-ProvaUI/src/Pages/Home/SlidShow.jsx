import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/swiper-bundle.css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { useState } from "react";

const slides = [
  {
    image:
      "https://sumilux-fashion.myshopify.com/cdn/shop/files/home1-slider-1.webp?v=1729765034&width=1920",
    title: "Express Yourself",
    subtitle: "Fashion",
    description: "AI Powered",
    Button: "AI Model",
  },
  {
    image:
      "https://sumilux-fashion.myshopify.com/cdn/shop/files/home1-slider-2.webp?v=1729765033&width=1920",
    title: "New Arrivals",
    subtitle: "Fall Session",
    description: "Trending",
    Button: "Learn More",
  },
  {
    image:
      "https://sumilux-fashion.myshopify.com/cdn/shop/files/home1-slider-3.webp?v=1729765034&width=1920",
    title: "Man Wear",
    subtitle: "Leather",
    description: "Jacket & Coats",
    Button: "Shop Now",
  },
];

export default function Slideshow() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      centeredSlides={true}
      loop={true}
      pagination={{ dynamicBullets: true, clickable: true }}
      effect={"fade"}
      className="mySwiper"
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative">
            <img src={slide.image} alt={slide.title} className="relative" />
            <div className="absolute inset-0 flex items-start justify-center flex-col ml-20">
              <motion.p
                key={index} // Forces animation reset when the slide changes
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="z-20 text-xl font-thin uppercase text-black mb-4"
              >
                {slide.title}
              </motion.p>
              <motion.h2
                key={index}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="z-20 text-4xl font-bold text-black mb-5"
              >
                {slide.subtitle}
              </motion.h2>
              <motion.h1
                key={index}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="z-20 text-5xl font-extrabold text-black mb-5"
              >
                {slide.description}
              </motion.h1>
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex justify-center items-center gap-4"
              >
                <button
                  className="bg-white text-black font-semibold text-sm px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
                  onMouseEnter={() => handleMouseEnter("Learn more")}
                  onMouseLeave={handleMouseLeave}
                >
                  {slide.Button}
                  {hoveredButton === "Learn more" ? (
                    <GoArrowRight className="inline-block ml-2" />
                  ) : (
                    <GoArrowUpRight className="inline-block ml-2" />
                  )}
                </button>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
