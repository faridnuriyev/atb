import React from "react";
import { Container } from "react-bootstrap";
import Sec1Slider from "./Slider Sec1/Sec1Slider";
import './section1.css'
import SliderSec1Mobile from "./SliderSec1 Mob/SliderSec1Mobile";

function Section1() {
    return (
        <>
            <section className="desktopSec1">
                <Container>
                    <Sec1Slider />
                </Container>
            </section>
            <section className="tabletSec1">
              <Sec1Slider />
            </section>
            <section className="mobileSec1">
              <SliderSec1Mobile />
            </section>
        </>
    );
}

export default Section1;
