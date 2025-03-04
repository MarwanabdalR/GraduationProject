import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SlidShow() {
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
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://sumilux-fashion.myshopify.com/cdn/shop/files/home1-slider-1.webp?v=1729765034&width=1920"
            alt="Image 1"
            className="relative"
          />
          <div className="absolute inset-0 flex items-center justify-start ml-10">
            <p className="z-20 text-sm font-semibold text-black">
              Express Yourself
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://sumilux-fashion.myshopify.com/cdn/shop/files/home1-slider-2.webp?v=1729765033&width=1920"
          alt="Image 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://sumilux-fashion.myshopify.com/cdn/shop/files/home1-slider-3.webp?v=1729765034&width=1920"
          alt="Image 3"
        />
      </SwiperSlide>
    </Swiper>
  );
}
