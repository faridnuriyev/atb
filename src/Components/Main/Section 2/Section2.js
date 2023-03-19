import React from "react";
import { Container } from "react-bootstrap";
import "./section2.css";

function Section2() {
    return (
        <section>
            <div className="section-2-desk">
                <Container>
                    <div className="sec-2">
                        <div className="sec-2-title">
                            <h2>İstənilən məqsəd üçün nağd kredit</h2>
                            <div className="sec-2-credit">Kredit</div>
                        </div>
                        <div className="sec-2-calc"></div>
                        <div className="sec-2-main">
                          <div className="slider-2-sec">
                              <div className="slider-1">
                                <div className="radioChekc-1">
                                  <div className="rc-1-container">
                                    
                                  </div>
                                </div>
                                <div className="radioCheck-1-numbers"></div>
                              </div>
                              <div className="slider-2"></div>
                              <div className="sec-2-policy"></div>
                          </div>
                          <div className="sec-2-numbers">

                          </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Section2;
