import { Checkbox, Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./section2.css";

function Section2() {
    const [amount, setAmount] = useState(5000);
    const [date, setDate] = useState(12);
    const [dateWrite, setDateWrite] = useState(12 + " ay");
    const [percent, setPercent] = useState(12.5);
    const [curr, setCurr] = useState(445);

    const changeValue = (e) => {
        setAmount(e.target.value);
    };
    const changeDate = (e) => {
        let x = e.target.value;
        if (x >= 1 && x <= 12) setDateWrite(x + " ay");
        else if (x >= 12 && x <= 24) setDateWrite(1 + " il " + (x - 12) + " ay");
        else if (x >= 24 && x <= 36) setDateWrite(2 + " il " + (x - 24) + " ay");
        else if (x >= 36 && x <= 47) setDateWrite(3 + " il " + (x - 36) + " ay");
        else if (x === 48) setDateWrite(4 + " il");
        setDate(x);
        changePercent(x);
    };
    const changePercent = (x) => {
        if (x < 12) setPercent(12.5);
        else if (x >= 12 && x <= 24) setPercent(13);
        else if (x >= 24 && x <= 36) setPercent(14);
        else if (x >= 36 && x <= 48) setPercent(15);
    };
    const calculate = () => {
        let cvb =
            (((1 + percent / 12 / 100) ** date * (percent / 12 / 100)) /
                ((1 + percent / 12 / 100) ** date - 1)) *
            amount;
        setCurr(cvb.toFixed(0));
    };
    useEffect(() => {
        calculate();
    }, [amount, date, percent]);

    return (
        <section>
            <div className="section-2-desk">
                <Container>
                    <div className="sec-2">
                        <div className="sec-2-title">
                            <h2>İstənilən məqsəd üçün nağd kredit</h2>
                            <div className="sec-2-credit">Kredit</div>
                        </div>
                        <div className="sec-2-main">
                            <div className="sec-2-leftSide">
                                <div className="cashSlider-row">
                                    <div className="cashSlider-box">
                                        <div className="cashSlider-text">
                                            <p>Sizə hansı məbləğ lazımdır?</p>
                                            <div className="cashValue">
                                                <input
                                                    className="creditValue"
                                                    type={"number"}
                                                    value={amount}
                                                />
                                                <span>AZN</span>
                                            </div>
                                        </div>
                                        <div className="cashSlider">
                                            <Slider
                                                onChange={changeValue}
                                                defaultValue={5000}
                                                aria-label="Default"
                                                min={300}
                                                max={30000}
                                            />
                                        </div>
                                    </div>
                                    <div className="cashSlider-numb">
                                        <p>300</p>
                                        <p>30 000</p>
                                    </div>
                                </div>
                                <div className="dateSlider-row">
                                    <div className="dateSlider-row">
                                        <div className="dateSlider-box">
                                            <div className="dateSlider-text">
                                                <p>Kreditin müddəti</p>
                                                <span className="creditDate">{dateWrite}</span>
                                            </div>
                                            <div className="dateSlider">
                                                <Slider
                                                    onChange={changeDate}
                                                    defaultValue={12}
                                                    aria-label="Default"
                                                    min={3}
                                                    max={48}
                                                />
                                            </div>
                                        </div>
                                        <div className="dateSlider-numb">
                                            <p>3</p>
                                            <p>48</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sec-2-policy">
                                    <Checkbox color="secondary" />
                                    <p>
                                        <a href="/#">Müraciət qaydaları ilə</a> razıyam
                                    </p>
                                </div>
                            </div>
                            <div className="sec-2-rightSide">
                                <div className="percentBox">
                                    <span className="percentValue">
                                        {percent}
                                        <sup>%</sup>
                                    </span>
                                    <p>İllik faiz dərəcəsi</p>
                                </div>
                                <div className="currentBox">
                                    <span className="manatValue">
                                        {curr} <sup>AZN</sup>
                                    </span>
                                    <p>Aylıq ödəniş</p>
                                </div>
                                <button className="section-2-desktop-button">Onlayn sifariş</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>






            
            <div className="section-2-mobile">
                <div className="sec-2">
                    <div className="sec-2-title">
                        <div className="sec-2-credit-mobile">Kredit</div>
                        <h2>İstənilən məqsəd üçün nağd kredit</h2>
                        <div className="sec-2-credit">Kredit</div>
                    </div>
                    <div className="sec-2-main">
                        <div className="sec-2-leftSide">
                            <div className="cashSlider-row">
                                <div className="cashSlider-box">
                                    <div className="cashSlider-text">
                                        <p>Sizə hansı məbləğ lazımdır?</p>
                                        <div className="cashValue">
                                            <input className="creditValue" type={"number"} value={amount} />
                                            <span>AZN</span>
                                        </div>
                                    </div>
                                    <div className="cashSlider">
                                        <Slider
                                            onChange={changeValue}
                                            defaultValue={5000}
                                            aria-label="Default"
                                            min={300}
                                            max={30000}
                                        />
                                    </div>
                                </div>
                                <div className="cashSlider-numb">
                                    <p>300</p>
                                    <p>30 000</p>
                                </div>
                            </div>
                            <div className="dateSlider-row">
                                <div className="dateSlider-row">
                                    <div className="dateSlider-box">
                                        <div className="dateSlider-text">
                                            <p>Kreditin müddəti</p>
                                            <span className="creditDate">{dateWrite}</span>
                                        </div>
                                        <div className="dateSlider">
                                            <Slider
                                                onChange={changeDate}
                                                defaultValue={12}
                                                aria-label="Default"
                                                min={3}
                                                max={48}
                                            />
                                        </div>
                                    </div>
                                    <div className="dateSlider-numb">
                                        <p>3</p>
                                        <p>48</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sec-2-policy">
                                <Checkbox color="secondary" />
                                <p>
                                    <a href="/#">Müraciət qaydaları ilə</a> razıyam
                                </p>
                            </div>
                        </div>
                        <div className="sec-2-rightSide">
                            <div className="percentBox">
                                <span className="percentValue">
                                    {percent}
                                    <sup>%</sup>
                                </span>
                                <p>İllik faiz dərəcəsi</p>
                            </div>
                            <div className="currentBox">
                                <span className="manatValue">
                                    {curr} <sup>AZN</sup>
                                </span>
                                <p>Aylıq ödəniş</p>
                            </div>
                            <div className="mobileButton">
                                <button className="section-2-mobile-button">Onlayn sifariş</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section2;
