import React, { useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import {nanoid} from "nanoid";


const Header = () => {

    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 769) {
            setIsDesktop(true);
            setIsMobile(false);
        } else {
            setIsMobile(true);
            setIsDesktop(false);
        }
    }, []);

    return (
        <section id="hero" className="jumbotron">
            <Container>
                <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                    <h1 className="hero-title">
                        Hello my name is
                        <span className="text-color-main"> Kais BETTAIEB </span>
                        <br/>
                        I'm a Python web developer Developer
                    </h1>
                </Fade>

                <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                    <div className="cv-buttons">
                        <p className="hero-cta">
                        <span className="cta-btn cta-btn--hero">
                           <a
                               href="https://drive.google.com/file/d/18QuSaIBIIpbb4nkm7ERU78ywp8sbbkFH/view?usp=sharing"
                               rel="noopener noreferrer"
                               target="_blank"
                               aria-label="telecharger mon cv version française"
                           >
                            Mon CV (FR)
                           </a>
                        </span>
                        </p>
                        <p className="hero-cta">
                        <span className="cta-btn cta-btn--hero">
                          <a
                              href="https://drive.google.com/file/d/1wjboTj5QsF8WXSmIc5vOxeaaK1mJmlS-/view?usp=sharing"
                              rel="noopener noreferrer"
                              target="_blank"
                              aria-label="download my cv english version"
                          >
                                        My CV (EN)  &nbsp;
                                      </a>
                        </span>
                        </p>
                    </div>
                </Fade>

                <Container>
                    <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                        <div className="footer-div">

                            <div className="social-links">
                                <a
                                    key={nanoid()}
                                    href={"https://www.linkedin.com/in/kais-bettaieb/"}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label={"linkedin"}
                                >
                                    <i className={`fa fa-linkedin fa-inverse`}/>
                                </a>

                                <a
                                    key={nanoid()}
                                    href={'https://github.com/kaisbettaieb'}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label={"github"}
                                >
                                    <i className={`fa fa-github fa-inverse`}/>
                                </a>
                            </div>
                            <hr/>
                            <p className="footer__text">
                                © {new Date().getFullYear()} - Template developed by{' '}
                                <a href="https://github.com/cobidev" target="_blank" rel="noopener noreferrer">
                                    Jacobo Martínez
                                </a>&nbsp;
                                and edited by{' '}
                                <a href="https://github.com/kaisbettaieb" target="_blank" rel="noopener noreferrer">
                                    Kais BETTAIEB
                                </a>
                            </p>
                        </div>
                    </Fade>
                </Container>

            </Container>


        </section>
    );
};

export default Header;
