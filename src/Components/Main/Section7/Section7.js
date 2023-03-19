import React from "react";
import { Container } from "react-bootstrap";
import "./section7.css";
import Section7Mobile from "./Section7Mobile";
import Section7Tablet from "./Section7Tablet";

function Section7() {
    return (
        <section className="sec-7-position">
            <Container>
                <div className="section-7">
                    <div className="sec-7-Mobapp">
                        <div className="mobApp-first">
                            <a href="/#">
                                <img src="assets/img/mobApp1.png" alt="mobApp1" />
                            </a>
                        </div>
                        <div className="mobApp-second">
                            <a href="/#">
                                <img src="assets/img/mobApp2.png" alt="mobApp2" />
                            </a>
                        </div>
                        <div className="mobApp-bg">
                            <div className="mobApp-third">
                                <a href="/#">
                                    <div className="mobApp-title">atb360</div>
                                    <div className="mobApp-text">Rahat və müasir mobil tətbiq </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="sec-7-tablet">
                <Section7Tablet />
            </div>
            <div className="sec-7-mobile">
                <Section7Mobile />
            </div>
        </section>
    );
}

export default Section7;
