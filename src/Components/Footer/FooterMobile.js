import React from "react";
import "./footerMobile.css";

function FooterMobile() {
    return (
        <footer>
            <div className="footer-mob-container">
                <div className="footer-firstMenuMob">
                    <ul>
                        <li>
                            <a href="/#">Xəbərlər</a>
                        </li>
                        <li>
                            <a href="/#">Karyera mərkəzi</a>
                        </li>
                        <li>
                            <a href="/#">Bankın səhmdarları</a>
                        </li>
                        <li>
                            <a href="/#">Təhlükəsizliyiniz</a>
                        </li>
                    </ul>
                </div>
                <div className="mobile-footer-section2">
                    <div className="callCenterMobile">
                        <div className="callCenterIconMobile">
                            <a href="/#">
                                <img src="assets/img/atb_945_sign_yellow.svg" alt="callCenterIcon" />
                            </a>
                        </div>
                        <div className="callCenterInfoMobile">
                            <div className="firsTextFooterMobile">
                                <span>
                                    <a href="/#">Çağrı mərkəzi (24/7)</a>
                                </span>
                            </div>
                            <span>
                                Şəhər nömrələrindən
                                <br />
                                zənglər ödənişsizdir
                            </span>
                        </div>
                    </div>
                    <div className="suggestionsMobile">
                        <ul>
                            <li>
                                <a className="faq" href="/#">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a className="survey" href="/#">
                                    Sorğu
                                </a>
                            </li>
                            <li>
                                <a className="suggest" href="/#">
                                    İrad və təkliflər
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mobile-footer-section3">
                    <a className="fb" href="/#"></a>
                    <a className="linkedIn" href="/#"></a>
                    <a className="instagram" href="/#"></a>
                </div>
                <div className="mobile-footer-section4">
                    <div>
                        <ul>
                            <li>
                                <a href="/#">Kreditlər</a>
                            </li>
                            <li>
                                <a href="/#">Arayışın onlayn sifarişi</a>
                            </li>
                            <li>
                                <a href="/#">ATB CARD</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <a href="/#">İpoteka</a>
                            </li>
                            <li>
                                <a href="/#">Əmanətlər</a>
                            </li>
                            <li>
                                <a href="/#">Card to card</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="brakeWordFooter">
                                <a href="/#">Kredit və kart ödənişləri</a>
                            </li>
                            <li>
                                <a href="/#">Depozit qutuları</a>
                            </li>
                            <li>
                                <a href="/#">Tariflər</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mobile-footer-section5">
                    <div className="footerAdressMob">
                        <p>
                            Bakı, C.Məmmədquluzadə küç. 85;
                            <br />
                            192/193
                            <br />
                            Tel: <b>945</b>
                            <br />
                            WhatsApp: <b>+994 55 7770 945</b>
                            <br />
                            E-mail: <b>atb@atb.az</b>
                        </p>
                    </div>
                    <div className="footerIconsMob">
                        <a href="/#">
                            <img src="assets/img/footerIcon1.png" alt="AIH" />
                        </a>
                        <a href="/#">
                            <img src="assets/img/footerIcon2.png" alt="Central Bank" />
                        </a>
                        <a href="/#">
                            <img src="assets/img/footerIcon3.png" alt="ADIF" />
                        </a>
                        <a href="/#">
                            <img src="assets/img/footerIcon4.png" alt="infoBank" />
                        </a>
                        <a href="/#">
                            <img src="assets/img/footerIcon5.png" alt="financialPortal" />
                        </a>
                    </div>
                </div>
                <div className="mobile-footer-section6">
                    <div className="footer-policy">
                        <div className="footer-policy-1">
                            <p>
                                © 2002 - 2023 AzərTürkBank.
                                <br />
                                Bütün hüquqlar qorunur.
                            </p>
                        </div>
                        <div className="footer-policy-2">
                            <p>
                                Azərbaycan Respublikası Mərkəzi Bankının 29 iyun 1995-ci il tarixli 234
                                nömrəli bank əməliyyatlarının həyata keçirilməsi üzrə lisenziyasına əsasən
                            </p>
                        </div>
                        Saytın məzmununun təkrar istifadəsi qadağandır.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterMobile;
