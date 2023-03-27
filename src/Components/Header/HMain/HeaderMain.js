import { useState } from "react";
import { Button, Container, Offcanvas } from "react-bootstrap";
import HeaderMenuMobile from "../HeaderMenuMobile/HeaderMenuMobile";
import HeaderMenu from "../HMenu/HeaderMenu";
import "./headerMain.css";
import { navBarData } from "../../../data";

function HeaderMain({onChangeTest}) {
    const [show, setShow] = useState(false);
    const [num, setNum] = useState(0);
    
    const [kredit, setKredit] = useState(false)

    const openKredit = (x, idx) =>{
        setKredit(x)
        setNum(idx)
    }
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
                                        <a href="/#" className="search" onClick={()=> onChangeTest(true)}></a>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="headerMain-bottom">
                            <div className="headerMain-bottom-menu">
                                <ul>
                                    <li>
                                        <a onClick={() => openKredit(true, 0)} href="/#">Kreditlər</a>
                                    </li>
                                    <li>
                                        <a onClick={() => openKredit(true, 1)} href="/#">İpoteka</a>
                                    </li>
                                    <li>
                                        <a onClick={() => openKredit(true, 2)} href="/#">Kartlar</a>
                                    </li>
                                    <li>
                                        <a  href="/#">Əmanətlər</a>
                                    </li>
                                    <li>
                                        <a onClick={() => openKredit(true, 3)} href="/#">Xidmətlər</a>
                                    </li>
                                </ul>
                               { kredit ? <HeaderMenu kredit={kredit} num={num} data={navBarData.data} openKredit={openKredit}  /> : null}

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
