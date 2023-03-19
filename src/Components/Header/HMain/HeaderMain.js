import { useState } from "react";
import { Button, Container, Offcanvas } from "react-bootstrap";
import HeaderMenuMobile from "../HeaderMenuMobile/HeaderMenuMobile";
import "./headerMain.css";

function HeaderMain() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container>
                <div className="headerMain">
                    <div className="headerMain-left">
                        <div className="header-logo">
                            <img src="assets/img/atb_main_logo_az.svg" alt="atbLogo" />
                        </div>
                    </div>
                    <div className="headerMain-right">
                        <div className="headerMain-top">
                            <div className="firstPart">
                                <a href="/#">Fərdi</a>
                            </div>
                            <div className="secondPart">
                                <a href="/#">Biznes</a>
                                <div className="headerMain-menu">
                                    <ul>
                                        <li>
                                            <a href="/#">Kredit və kart ödənişləri</a>
                                        </li>
                                        <li className="bankInformation">
                                            <a href="/#">Bank haqqında</a>
                                            <ul className="bankInformationDrop">
                                                <li>
                                                    <a href="/#">Bank məlumatları</a>
                                                </li>
                                                <li>
                                                    <a href="/#">Karyera mərkəzi</a>
                                                </li>
                                                <li>
                                                    <a href="/#">Məlumatların açıqlanması</a>
                                                </li>
                                                <li>
                                                    <a href="/#">Filiallar</a>
                                                </li>
                                                <li>
                                                    <a href="/#">ATM və terminallar</a>
                                                </li>
                                                <li>
                                                    <a href="/#">Xəbərlər</a>
                                                </li>
                                                <li>
                                                    <a href="/#">Aktiv kampaniyalar</a>
                                                </li>
                                                <li>
                                                    <a href="/#">Standart şərtlər toplusu</a>
                                                </li>
                                                <li>
                                                    <a href="/#">İdarə Heyətinin Sədri ilə birbaşa əlaqə</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="langMenu">
                                            <a href="/#">AZ</a>
                                            <ul className="langChange">
                                                <li>
                                                    <a href="/RU">RU</a>
                                                </li>
                                                <li>
                                                    <a href="/AZ">AZ</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <a href="/#" className="search"></a>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="headerMain-bottom">
                            <div className="headerMain-bottom-menu">
                                <ul>
                                    <li>
                                        <a href="/#">Kreditlər</a>
                                    </li>
                                    <li>
                                        <a href="/#">İpoteka</a>
                                    </li>
                                    <li>
                                        <a href="/#">Kartlar</a>
                                    </li>
                                    <li>
                                        <a href="/#">Əmanətlər</a>
                                    </li>
                                    <li>
                                        <a href="/#">Xidmətlər</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="atb360App">
                                <img src="assets/img/apple.svg" alt="ios" />
                                <img src="assets/img/playMarket.svg" alt="android" />
                                <p className="atb">atb360</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="header-mobile">
                <div className="header-leftSide-mobile">
                    <Button className="hamburgerMenu" variant="primary" onClick={handleShow}>
                        ☰
                    </Button>
                    <div className="header-logo-mobile">
                        <a href="#/">
                            <img src="assets/img/atb_main_logo_az.svg" alt="atb logo" />
                        </a>
                    </div>
                </div>

                <a href="/#">
                    <img src="assets/img/atb_callcenter.svg" alt="callCenter" />
                </a>
            </div>
            <Offcanvas style={{ background: "#fff" }} className="w-100 " show={show} onHide={handleClose}>
                <div className="mobHeaderSuper">
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    <div className="header-mobile">
                        <div className="header-leftSide-mobile">
                            <div className="header-logo-mobile">
                                <a href="#/">
                                    <img src="assets/img/atb_main_logo_az.svg" alt="atb logo" />
                                </a>
                            </div>
                        </div>

                        <a href="/#">
                            <img src="assets/img/atb_callcenter.svg" alt="callCenter" />
                        </a>
                    </div>
                </div>
                <Offcanvas.Body>
                    <HeaderMenuMobile />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default HeaderMain;
