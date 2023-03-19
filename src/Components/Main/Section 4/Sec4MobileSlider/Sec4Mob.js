import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Container } from "react-bootstrap";
import Sec4MobCards from "../Sec4MobCards";

function Sec4Mob() {
    return (
        <>
            <Container style={{display: "none"}}>
                <Swiper
                    loop={true}
                    spaceBetween={180}
                    slidesPerView={3}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide>
                        <Sec4MobCards
                            contentText={"atb card-dan 0%-lə köçürün"}
                            title={"Kartdan karta köçürmə"}
                            desc={"Kartdan ölkənin istənilən bank kartına sürətli pul köçürməsi"}
                            img={"assets/img/sec-4-photo-1.png"}
                            imgAlt={"mobApp"}
                            contentLink={"Onlayn köçür"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Sec4MobCards
                            contentText={"Kredit və kart ödənişləri"}
                            title={"Kartdan karta köçürmə"}
                            desc={"Kartdan ölkənin istənilən bank kartına sürətli pul köçürməsi"}
                            img={"assets/img/sec-4-photo-2.png"}
                            imgAlt={"cardToCard"}
                            contentLink={"cardToCard"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Sec4MobCards
                            contentText={"atb card-dan 0%-lə köçürün"}
                            title={"Kartdan karta köçürmə"}
                            desc={"Kartdan ölkənin istənilən bank kartına sürətli pul köçürməsi"}
                            img={"assets/img/sec-4-photo-3.png"}
                            imgAlt={"creditPayment"}
                            contentLink={"creditPayment"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Sec4MobCards
                            contentText={"atb card-dan 0%-lə köçürün"}
                            title={"Kartdan karta köçürmə"}
                            desc={"Kartdan ölkənin istənilən bank kartına sürətli pul köçürməsi"}
                            img={"assets/img/sec-4-photo-4.png"}
                            imgAlt={"onlineOrdering"}
                            contentLink={"onlineOrdering"}
                        />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </>
    );
}

export default Sec4Mob;
