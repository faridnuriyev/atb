import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import "./sliderSec1Mobile.css";

import { Scrollbar } from "swiper";

export default function SliderSec1Mobile() {
    return (
        <>
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper">
                <SwiperSlide>
                    <a href="/#">
                        <img src="assets/img/section1Sliders/slider1.png" alt="slider1" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/#">
                        <img src="assets/img/section1Sliders/slider2.jpeg" alt="slider2" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/#">
                        <img src="assets/img/section1Sliders/slider3.png" alt="slider3" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/#">
                        <img src="assets/img/section1Sliders/slider4.jpeg" alt="slider4" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/#">
                        <img src="assets/img/section1Sliders/slider5.jpeg" alt="slider5" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/#">
                        <img src="assets/img/section1Sliders/slider6.jpeg" alt="slider6" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/#">
                        <img src="assets/img/section1Sliders/slider7.jpeg" alt="slider7" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/#">
                        <img src="assets/img/section1Sliders/slider8.jpeg" alt="slider8" />
                    </a>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
