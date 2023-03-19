import React from "react";
import "./headerMenuMobile.css";


function HeaderMenuMobile() {
    return (
        <header>
            <div className="headerMenuMobile">
                <div className="firstBlock">
                    <div className="firstBlock2">
                        <span>Fərdi</span>
                    </div>
                    <a className="mobLangHeader" href="/#">
                        RU
                    </a>
                </div>
                <div className="secondBlock">
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
                            <a className="withOutArrow" href="/#">Əmanətlər</a>
                        </li>
                        <li>
                            <a href="/#">Xidmətlər</a>
                        </li>
                        <li>
                            <a className="headerMenuApp withOutArrow" href="/#">
                                ATB360
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="thirdBlock">
                    <p>Xidmətlər</p>
                    <ul>
                        <li>
                            <a href="/#">Kartdan karta köçürmə</a>
                        </li>
                        <li>
                            <a href="/#"><b>Kredit və kart ödənişləri</b></a>
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
                <div className="fourthBlock">
                    <p>DAHA ƏTRAFLI</p>
                    <ul>
                        <li>
                            <a href="/#">Bank məlumatları</a>
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
                <div className="fifthBlock">
                    <div className="mobMenuCallCenter">ÇAĞRI MƏRKƏZİ (24/7)</div>
                    <div className="siteRow">
                        <a href="/#">945</a>
                        <br />
                        <span>Ölkədaxili zənglər</span>
                    </div>
                    <div className="siteRow">
                        <a href="/#">+994 12 404 14 45</a>
                        <br />
                        <span>Beynəlxalq zənglər</span>
                    </div>
                    <div className="siteRow">
                        <a href="/#">+994 55 777 09 45</a>
                        <br />
                        <span>WhatsApp</span>
                    </div>

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
                <div className="sixthBlock">
                    <div className="headerMenuMobIcon">
                        <a href="https://www.facebook.com/azerturkbank" className="fbIcon"></a>
                        <a href="https://www.linkedin.com/company/az%C9%99r-t%C3%BCrk-bank-asc" className="inIcon"></a>
                        <a href="https://www.instagram.com/atb.az/" className="instIcon"></a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderMenuMobile;
