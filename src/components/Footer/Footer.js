import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import logo from '../../images/logo.png'
const Footer = () => {

    

    return (
        <footer id="Contact" className="footer-area  mt-5 " style={{ backgroundColor: '#12161f' }}>
            <div className="container ">
                <div className="row py-5 footer">
                    <div className="col-md-6">
                        <div className="d-flex ">
                            <h3 className="text-light fw-bolder ps-4"></h3>
                        </div>
                        <div className="d-flex">
                            <img style={{ width: '50px' }} src={logo} alt="" />
                            <h4 className="text-light mt-2 ml-2">Automotive</h4>
                        </div>
                        <p className="text-light mt-4 w-100">By subscribing to our company newsletter you will always be up-to-date on our latest promotions, deals and vehicle inventory!.</p>
                    </div>
                    <div className='social'>
                    <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon active-icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon active-icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-2">
                            <h6 className="text-light">Call now</h6>
                            <button className="btn btn-danger">+0000000</button>
                        </div>
                    </div>
                    <div>
                        <div className='about'>
                            <h3>Our Address</h3>
                            <h5>Bashundhara, Dhaka <br />  Bangladesh</h5>
                            <br />
                            <br />
                            <h4>Founder</h4>
                            <h5>Jawad Jisan</h5>
                            <h5>Mazharul Islam</h5>
                        </div>
                    </div>
                    
                      
                    
                </div>

                <div className="copyRight text-center text-light p-4">
                    <p>Copyright {(new Date()).getFullYear()} Automotive All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;