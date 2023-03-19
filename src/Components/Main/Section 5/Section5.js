import React from "react";
import { Container } from "react-bootstrap";
import "./section5.css";

function Section5() {
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
                                            <input value={100} inputMode={"numeric"} type={"text"} />
                                        </div>
                                        <div className="firstAreaSelect">
                                            <div className="firstAreaSelectBox">
                                                <select>
                                                    <option value={0}>AZN</option>
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
                                            <span>58.75</span>
                                        </div>
                                        <div className="secondAreaSelectBox">
                                            <select>
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
                                    <input value={100} inputMode={"numeric"} type={"text"} />
                                </div>
                                <div className="firstAreaSelect">
                                    <div className="firsAreaSelectBox">
                                        <select>
                                            <option value={0}>AZN</option>
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
                                    <span>58.75</span>
                                </div>
                                <div className="secondAreaSelectBox">
                                    <select>
                                        <option value={0}>AZN</option>
                                        <option value={"USD"}>USD</option>
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
