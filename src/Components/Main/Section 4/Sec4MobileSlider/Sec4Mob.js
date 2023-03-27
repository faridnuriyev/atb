import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Container } from "react-bootstrap";
import Sec4MobCards from "../Sec4MobCards";

function Sec4Mob() {
    return (
        <>
            <Swiper
                className="sec4SliderMygov"
                loop={true}
                spaceBetween={0}
                slidesPerView={2}
                mousewheel={true}
                keyboard={true}>
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
                        title={"Kredit ödənişi və karta mədaxil"}
                        desc={
                            "Kreditin aylıq ödənişini həyata keçirə və ya kartlarınızın balansını artıra bilərsiniz"
                        }
                        img={"assets/img/sec-4-photo-2.png"}
                        imgAlt={"cardToCard"}
                        contentLink={"cardToCard"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Sec4MobCards
                        contentText={"Arayış sifarişi"}
                        title={"Onlayn arayış sifarişi"}
                        desc={"Arayışı banka yaxınlaşmadan onlayn sifariş edin"}
                        img={"assets/img/sec-4-photo-3.png"}
                        imgAlt={"creditPayment"}
                        contentLink={"creditPayment"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Sec4MobCards
                        contentText={"Test rejimində çalışır"}
                        title={"atb360 mobil tətbiqi"}
                        desc={"Müasir və sadə mobil bank ilə gəlir və xərclərinizi rahatlıqla idarə edin!"}
                        img={"assets/img/sec-4-photo-4.png"}
                        imgAlt={"onlineOrdering"}
                        contentLink={"onlineOrdering"}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Sec4Mob;
