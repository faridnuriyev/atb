import React from "react";
import { Container } from "react-bootstrap";
import "./headerMenu.css";

function HeaderMenu({ openKredit, data, num, kredit }) {
    console.log(data, num);
    return (
        <div className={kredit ? "headerMenuContainer": "headerMenuContainer"}>
            <Container>
                <div className="header-menu">
                    <div className="leftSideHeaderMenu"></div>
                    <div className="rightSideHeaderMenu">
                        <div className="changingData"> {data[num].text.map(item => (
                          <ul>
                            <li>{item}</li>
                          </ul>
                        ))}</div>
                        <div className="fixedData">
                            <div className="headerData">
                                <div className="firstFixedData">
                                    <p>XİDMƏTLƏR</p>
                                    <ul>
                                        <li>
                                            <a href="/#">Kartdan karta köçürmə</a>
                                        </li>
                                        <li>
                                            <a href="/#">
                                                <b>Kredit və kart ödənişləri</b>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#">Kartın yenilənməsi</a>
                                        </li>
                                        <li>
                                            <a href="/#">Tariflər</a>
                                        </li>
                                        <li>
                                            <a href="/#">Filiallar</a>
                                        </li>
                                        <li>
                                            <a href="/#">Müxbir hesablara xidmət</a>
                                        </li>
                                        <li>
                                            <a href="/#">Google Pay</a>
                                        </li>
                                        <li>
                                            <a href="/#">Apple Pay</a>
                                        </li>
                                        <li>
                                            <a href="/#">Türkiyəyə dəstək</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="secondFixedData">
                                    <p>DAHA ƏTRAFLI</p>
                                    <ul>
                                        <li>
                                            <a href="/#">Bank məlumatları</a>
                                        </li>
                                        <li>
                                            <a href="/#">Məlumatların açıqlanması</a>
                                        </li>
                                        <li>
                                            <a href="/#">Aktiv kampaniyalar</a>
                                        </li>
                                        <li>
                                            <a href="/#">Xəbərlər</a>
                                        </li>
                                        <li>
                                            <a href="/#">Karyera mərkəzi</a>
                                        </li>
                                        <li>
                                            <a href="/#">Təhlükəsizliyiniz</a>
                                        </li>
                                        <li>
                                            <a href="/#">Xeyriyyəçilik</a>
                                        </li>
                                        <li>
                                            <a href="/#">Rauf Əliyevin bioqrafiyası</a>
                                        </li>
                                        <li>
                                            <a href="/#">İdarə Heyətinin Sədri ilə birbaşa əlaqə</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="thirdFixedData">
                                    <p>ÇAĞRI MƏRKƏZİ (24/7)</p>
                                    <div>
                                        <a href="/#">945</a>
                                        <br />
                                        <span>Ölkədaxili zənglər</span>
                                    </div>
                                    <div>
                                        <a href="/#">+994 12 404 14 45</a>
                                        <br />
                                        <span>Beynəlxalq zənglər</span>
                                    </div>
                                    <div>
                                        <a href="/#">+994 55 777 09 45</a>
                                        <br />
                                        <span>WhatsApp</span>
                                    </div>
                                    <div className="thirdFixedDataLitMenu">
                                        <ul>
                                            <li>
                                                <a href="/#">Çağrı mərkəzi</a>
                                            </li>
                                            <li>
                                                <a href="/#">FAQ</a>
                                            </li>
                                            <li>
                                                <a href="/#">Onlayn sorğu</a>
                                            </li>
                                            <li>
                                                <a href="/#">İrad və təkliflər</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pressButton">
                                <button onClick={() => openKredit(false)} className="closeMenu">
                                    
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reklamIconsContainer">
                  <div className="reklamIcons">
                    <p>Bizə qoşulun:</p>
                    <a className="fbHmenu"></a>
                    <a className="inHmenu"></a>
                    <a className="instaHmenu"></a>
                  </div>
                </div>
            </Container>
        </div>
    );
}

export default HeaderMenu;
