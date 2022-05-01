import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import './TopBanner.css'
const TopBanner = () => {

    return (
        <div className="header-bg mt-5 pt-5">
            <Container id="home" className="text-light " fluid>
                <Row className=" d-flex align-items-center text-light offset-1 mt-5">
                    <Col data-aos="zoom-out" className=" pt-5" md={6}>
                        <h1 className="display-3" >INTRODUCING CAR DEALER <br /> FOR YOUR INVENTORIES </h1>
                        <Row>
                            <span >
                                <h1 className="ml-4 display-3" >
                                    <Typewriter
                                        options={{
                                            strings: ["FACTORY READY FOR TRACK DAY", "SPORT UTILITY", "MAKE AN EXECUTIVE"],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h1>
                            </span>

                        </Row>
                        <button style={{ fontSize: "30px" }} className="btn btn-danger btn-lg mr-5 mt-5"><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button>
                    </Col>
                    <Col xs={12} md={6}>
                        <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_asjtnqce.json" background="transparent"
                            speed="1"
                            loop
                            autoplay></lottie-player>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopBanner;