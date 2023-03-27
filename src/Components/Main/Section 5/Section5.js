import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./section5.css";
import ExchangeCurr from "../../Services/Services";

function Section5() {
    const exchangeCurr = new ExchangeCurr();
    const [value, setValue] = useState();
    const [completedValue, setCompletedValue] = useState();
    const [select1, setSelect1] = useState("AZN");
    const [select2, setSelect2] = useState("USD");
    const [input1, setInput1] = useState(100);
    
    const onChangeInput1 = (e) => {
        setInput1(e.target.value);
    };
    const valueChanging = (x) => {
        setCompletedValue((x / value).toFixed(2));
    };

    const exchangeSelect1 = (e) => {
        setSelect1(e.target.value);
    };
    const exchangeSelect2 = (e) => {
        setSelect2(e.target.value);
    };

    useEffect(() => {
        exchangeCurr.getData(select1, select2).then((data) => setValue(data.result));
    }, [select1, select2]);

    useEffect(() => {
        valueChanging(input1);
    }, [value, input1]);

    return (
        <>
            <section className="sec-5">
                <Container>
                    <div className="sec-5-pc">
                        <h2 className="sec-5-h2">Valyuta məzənnəsi*</h2>
                        <div className="sec-5-container">
                            <div className="sec-5-leftSide">
                                <div className="sec-5-exchange">
                                    <table>
                                        <tr>
                                            <th rowSpan={1}></th>
                                            <th colSpan={1}>Alış</th>
                                            <th colSpan={1}>Satış</th>
                                        </tr>
                                        <tr>
                                            <td className="curr">USD</td>
                                            <td>
                                                <span>1.6990</span>
                                            </td>
                                            <td>
                                                <span>1.7020</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="curr">EUR</td>
                                            <td>
                                                <span className="eur">1.7970</span>
                                            </td>
                                            <td>
                                                <span className="eur">1.8370</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="curr">GBP</td>
                                            <td>
                                                <span className="gbp">2.0280</span>
                                            </td>
                                            <td>
                                                <span className="gbp">2.0850</span>
                                            </td>
                                        </tr>
                                    </table>
                                    <div className="sec-5-text">
                                        <p>Yeniləndi 07.03.2023</p>
                                        <a href="/#">Ətraflı</a>
                                    </div>
                                </div>
                            </div>
                            <div className="sec-5-rightSide">
                                <p className="conventer-text-1">
                                    <b>Valyuta kalkulyatoru</b>
                                </p>
                                <p className="conventer-text-2">Nağd valyuta məzənnəsi əsasında hesablama</p>
                                <div className="firstAreaSec5">
                                    <div className="firstAreaText">Satmaq istəyirəm</div>
                                    <div className="firstAreaContainer">
                                        <div className="firstAreaInput">
                                            <input
                                                onChange={onChangeInput1}
                                                defaultValue={input1}
                                                type={"number"}
                                            />
                                        </div>
                                        <div className="firstAreaSelect">
                                            <div className="firstAreaSelectBox">
                                                <select onChange={exchangeSelect1}>
                                                    <option value={"AZN"}>AZN</option>
                                                    <option value={"USD"}>USD</option>
                                                    <option value={"EUR"}>EUR</option>
                                                    <option value={"GBP"}>GBP</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sec5BrakeLine"></div>
                                <div className="secondAreaSec5">
                                    <div className="secondAreaSec5Text">Alacam</div>
                                    <div className="secondAreaContainer">
                                        <div className="secondAreaNumber">
                                            <span>{completedValue != "NaN" ? completedValue : ""}</span>
                                        </div>
                                        <div className="secondAreaSelectBox">
                                            <select onChange={exchangeSelect2}>
                                                <option value={"USD"}>USD</option>
                                                <option value={"AZN"}>AZN</option>
                                                <option value={"EUR"}>EUR</option>
                                                <option value={"GBP"}>GBP</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="sec-5-mobile">
                <h2 className="sec-5-h2">Valyuta məzənnəsi*</h2>
                <div className="sec-5-container">
                    <div className="sec-5-leftSide">
                        <div className="sec-5-exchange">
                            <table>
                                <tr>
                                    <th rowSpan={1}></th>
                                    <th colSpan={1}>Alış</th>
                                    <th colSpan={1}>Satış</th>
                                </tr>
                                <tr>
                                    <td className="curr">USD</td>
                                    <td>
                                        <span>1.6990</span>
                                    </td>
                                    <td>
                                        <span>1.7020</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="curr">EUR</td>
                                    <td>
                                        <span className="eur">1.7970</span>
                                    </td>
                                    <td>
                                        <span className="eur">1.8370</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="curr">GBP</td>
                                    <td>
                                        <span className="gbp">2.0280</span>
                                    </td>
                                    <td>
                                        <span className="gbp">2.0850</span>
                                    </td>
                                </tr>
                            </table>
                            <div className="sec-5-text">
                                <p>Yeniləndi 07.03.2023</p>
                                <a href="/#">Ətraflı</a>
                            </div>
                        </div>
                    </div>
                    <div className="sec-5-rightSide">
                        <p className="conventer-text-1">Valyuta kalkulyatoru</p>
                        <p className="conventer-text-2">Nağd valyuta məzənnəsi əsasında hesablama</p>
                        <div className="firstAreaSec5">
                            <div className="firstAreaText">Satmaq istəyirəm</div>
                            <div className="firstAreaContainer">
                                <div className="firstAreaInput">
                                    <input onChange={onChangeInput1} defaultValue={input1} type={"number"} />
                                </div>
                                <div className="firstAreaSelect">
                                    <div className="firsAreaSelectBox">
                                        <select onChange={exchangeSelect1}>
                                            <option value={"AZN"}>AZN</option>
                                            <option value={"USD"}>USD</option>
                                            <option value={"EUR"}>EUR</option>
                                            <option value={"GBP"}>GBP</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sec5BrakeLine"></div>
                        <div className="secondAreaSec5">
                            <div className="secondAreaSec5Text">Alacam</div>
                            <div className="secondAreaContainer">
                                <div className="secondAreaNumber">
                                    <span>{completedValue != "NaN" ? completedValue : ""}</span>
                                </div>
                                <div className="secondAreaSelectBox">
                                    <select onChange={exchangeSelect2}>
                                        <option value={"USD"}>USD</option>
                                        <option value={"AZN"}>AZN</option>
                                        <option value={"EUR"}>EUR</option>
                                        <option value={"GBP"}>GBP</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section5;
