"use client";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper modules
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import Hero from "./Hero";
import HeroTwo from "./HeroTwo";
import HeroThree from "./HeroThree";

export default function HeroSlider() {
    return (
        <div className="w-full relative overflow-hidden bg-neutral-bg">
            <Swiper
                // Swiper modules setup
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                grabCursor={false}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                className="w-full h-full"
            >
                <SwiperSlide>
                    <Hero />
                </SwiperSlide>

                <SwiperSlide>
                    <HeroTwo />
                </SwiperSlide>

                <SwiperSlide>
                    <HeroThree />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}