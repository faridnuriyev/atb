import React from "react";
import { Container } from "react-bootstrap";
import "./section3.css";
import Section3Tablet from "./Section3Tablet";

function Section3() {
    return (
        <section>
            <Container>
                <div className="sec-3-desk">
                    <div className="sec-3-header">
                        <div className="sec-3-h2">
                            <h2>Yeni təklif!</h2>
                        </div>
                        <div className="sec-3-p">
                            <p>Fərdi müştərilər üçün kartlar</p>
                        </div>
                    </div>
                    <div className="sec-3-main">
                        <div className="sec-3-main-text">
                            <h3>atb card</h3>
                            <p>
                                <b>ƏN SƏRFƏLİ</b> kartımız!
                            </p>
                            <p>
                                İlk kartı 5 il müddətinə <b>HƏDİYYƏ</b> olaraq əldə edin
                            </p>
                            <ul>
                                <li>
                                    Qalığa <b>+5,5% GƏLİR</b>
                                </li>
                                <li>
                                    <b>+3%-dək CASHBACK</b>
                                </li>
                                <li>
                                    <b>0%-lə</b> kartdan karta
                                </li>
                                <li>
                                    <b>0%-lə</b>nağdlaşdırma
                                </li>
                                <li>
                                    <b>0%-lə</b> konvertasiya
                                </li>
                                <li>
                                    <b>
                                        Ödənişsiz <a href="/#">SMS bildiriş</a>
                                    </b>
                                    xidməti
                                </li>
                            </ul>
                        </div>
                        <div className="sec-3-card-button">
                            <img src="assets/img/atb-card.png" alt="atb-card" />
                            <button className="sec-3-main-button">Ətraflı</button>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="sec-3-tablet">
                <Section3Tablet />
            </div>
            <div className="sec-3-mobile">
                <div className="sec-3-p-mobile">
                    <p>Fərdi müştərilər üçün kartlar</p>
                </div>
                <div className="sec-3-header-mobile">
                    <div className="sec-3-h2">
                        <h2>Yeni təklif!</h2>
                    </div>
                </div>
                <div className="sec-3-main">
                    <div className="sec-3-main-text">
                        <div className="sec-3-img-mobile">
                            <img src="assets/img/atb-card.png" alt="atb-card" />
                        </div>
                        <div className="sec-3-list-mobile">
                            <h3>atb card</h3>
                            <p>
                                <b>ƏN SƏRFƏLİ</b> kartımız!
                            </p>
                            <p>
                                İlk kartı 5 il müddətinə <b>HƏDİYYƏ</b> olaraq əldə edin
                            </p>
                            <ul>
                                <li>
                                    Qalığa <b>+5,5% GƏLİR</b>
                                </li>
                                <li>
                                    <b>+3%-dək CASHBACK</b>
                                </li>
                                <li>
                                    <b>0%-lə</b> kartdan karta
                                </li>
                                <li>
                                    <b>0%-lə</b>nağdlaşdırma
                                </li>
                                <li>
                                    <b>0%-lə</b> konvertasiya
                                </li>
                                <li>
                                    <b>
                                        Ödənişsiz <a href="/#">SMS bildiriş</a>
                                    </b>
                                    xidməti
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sec-3-card-button">
                        <button className="sec-3-main-button">Ətraflı</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section3;
