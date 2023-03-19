import React from "react";

function Section3Tablet() {
    return (
        <div className="sec-3-tab">
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
    );
}

export default Section3Tablet;
