import React, { useState } from "react";
import "./header.css";
import HeaderMain from "./HMain/HeaderMain";
import HeaderSearch from "./HSearch/HeaderSearch";

function Header() {
    const [test, setTest] = useState(false);
    const onChangeTest = (x) => setTest(x);

    return (
        <>
            <header>
                <HeaderSearch test={test} onChangeTest={onChangeTest} />
                <HeaderMain onChangeTest={onChangeTest} />
            </header>
        </>
    );
}

export default Header;
