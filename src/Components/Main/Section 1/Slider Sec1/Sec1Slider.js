import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Sec1Slider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper">
                <SwiperSlide className="mySlide">
                    <div className="sliderOne">
                        <button>Onlayn sifariş</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mySlide">
                    <div className="sliderTwo">
                        <button>Ətraflı</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mySlide">
                    <div className="sliderThree">
                        <button>Ətraflı</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mySlide">
                    <div className="sliderFour">
                        <button>Ətraflı</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mySlide">
                    <div className="sliderFive">
                        <button>Onlayn sifariş</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mySlide">
                    <div className="sliderSix">
                        <button>Ətraflı</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mySlide">
                    <div className="sliderSeven">
                        <button>Ətraflı</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mySlide">
                    <div className="sliderEight">
                        <button>Onlayn sifariş</button>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
