import React from "react";
import { Container } from "react-bootstrap";
import Sec4Mob from "./Sec4MobileSlider/Sec4Mob";
import "./section4.css";

function Section4() {
    return (
        <section>
            <Container>
                <div className="sec-4-dashed-area">
                    <span>Onlayn xidmətlər</span>
                    <div className="sec-4-cards">
                        <a href="/#" className="card-1">
                            <img src="assets/img/sec-4-photo-1.png" alt="mobApp" />
                        </a>
                        <a href="/#" className="card-2">
                            <img src="assets/img/sec-4-photo-2.png" alt="cardToCard" />
                        </a>
                        <a href="/#" className="card-3">
                            <img src="assets/img/sec-4-photo-3.png" alt="creditPayment" />
                        </a>
                        <a href="/#" className="card-4">
                            <img src="assets/img/sec-4-photo-4.png" alt="onlineOrdering" />
                        </a>
                    </div>
                </div>
                <div className="underLine-sec4"></div>
            </Container>
            <div className="dashed-area-swiper">
                <Sec4Mob />
            </div>
        </section>
    );
}

export default Section4;
