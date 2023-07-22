import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <>
                <footer className="footer-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="logo">
                                        <Link href="/">
                                            <a>
                                                <img src="/images/logo.png" alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <ul className="social-links">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="icofont-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="linkedin.com" target="_blank">
                                                <i className="icofont-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="icofont-instagram"></i>
                                            </a>
                                        </li> 
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget ml-4 pl-5">
                                    <h3>Services</h3>

                                    <ul className="list">
                                        <li>
                                            <Link href="#">
                                                <a>Business Analysis</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Digital Marketing</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Mobile App</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>eCommerce</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Web Development</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget ml-4">
                                    <h3>Quick Links</h3>

                                    <ul className="list">
                                        <li>
                                            <Link href="#contact">
                                                <a>Contact Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#services">
                                                <a>Services</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#whyUs">
                                                <a>About</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Get in Touch</h3>

                                    <ul className="get-in-touch">
                                        <li><i className="icofont-home"></i>447 Broadway, 2nd Floor, 490, New York, NY 10013</li>
                                        <li>
                                            <i className="icofont-live-support"></i> 
                                            <a href="tel:+12407436863">+1 240 743-6863</a>
                                        </li>
                                        <li>
                                            <i className="icofont-envelope"></i> 
                                            <a href="mailto:hello@adulis.com">hello@adulis.xyz</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="container">
                            <p>Copyright &copy; {currentYear} Adulis. All Rights Reserved</p>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;