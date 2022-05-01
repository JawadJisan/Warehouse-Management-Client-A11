import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const NewArrived = () => {
    return (
        <div id="About" className="mt-5 pt-5 text-light" >
            <div className="mt-5">
                <div className="text-center">
                    <h1 className="text-light display-2">Newly Arrived in Warehouse</h1>
                </div>
                <div className="row mx-3 d-flex justify-content-center">
                    <div style={{ backgroundColor: "#050c1a", border: "1px solid white" }} className="card focus shadow-lg col-md-2 m-3">
                        <div className="card-body pt-4">
                            <lottie-player
                                src="https://assets6.lottiefiles.com/packages/lf20_58tsmdsb.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay>
                            </lottie-player>
                        </div>
                        <div className="card-body mt-5 pt-5">
                            <h4>BMW-3025ss fc</h4>
                            <p className="card-text"> Possit antiopam id est. Illud delicata ea mel, sed novum mucius id. Nullam qua.</p>
                            <button type="button" className="btn btn-danger btn-lg w-100 "><FontAwesomeIcon icon={faChalkboardTeacher} /><Link target='_blank' to="https://demo.themesuite.com/automotive-wp/about-us/"></Link> Learn More</button>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#050c1a", border: "1px solid white" }} className="card focus shadow-lg col-md-2 m-3">
                        <div className="card-body">
                            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_ondxgr10.json" background="transparent" speed="1" loop autoplay></lottie-player>
                        </div>
                        <div className="card-body">
                            <h4>MERSEDISE BENJ - 250a</h4>
                            <p className="card-text">Te inermis cotidieque cum, sed ea utroque atomorum sadipscing. Qui id oratio everti scaevola, vim ea augue ponderum vituperatoribus, quo adhu</p>
                            <button className="btn btn-danger w-100  btn-lg"><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#050c1a", border: "1px solid white" }} className="card focus shadow-lg col-md-2 m-3">
                        <div className="card-body">
                            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_brmihxji.json" background="transparent" speed="1" loop autoplay></lottie-player>
                        </div>
                        <div className="card-body">
                            <h4>AUDI 30c Electric</h4>
                            <p className="card-text">Which car is better Audi or BMW?
BMW often edges out Audi in handling, with their cars designed to offer the “ultimate driving experience.” Audi cars are slightly less agile than BMW because their overall stiffer</p>
                            <button className="btn btn-secondary w-100  btn-danger btn-lg"><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#050c1a", border: "1px solid white" }} className="card focus shadow-lg col-md-2 m-3">
                        <div className="card-body">
                           
                            <lottie-player
                                src="https://assets9.lottiefiles.com/packages/lf20_fmmuygpm.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay>
                            </lottie-player> 
                        </div>
                        <div className="card-body mt-4 pt-4">
                            <h4 >Buggati Vegron 2500cc</h4>
                            <p className="card-text">he Bugatti Veyron EB 16.4 is a mid-engine sports car, designed and developed in France by the Volkswagen Group and Bugatti and manufactured in Molsheim, France, by French auto</p>
                            <button className="btn btn-danger btn-lg w-100  mt-4"><FontAwesomeIcon icon={faChalkboardTeacher} /> Learn More</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrived;