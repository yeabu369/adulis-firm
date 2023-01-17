import React, { Component } from 'react';
import Link from 'next/link';

class OurServices extends Component {
    render() {
        return (
            <>
                <div className="ptb-100 pb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Services</h2>
                            <p>Invest in professional assistance from Adulis to help you craft your perfect digital presence and credibility online.</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one bg-fcfbfb">
                                    <i className="pe-7s-comment bg-13c4a1"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>IT Consultancy</a>
                                        </Link>
                                    </h3>
                                    <p>improve your business efficiency by planning, prioritizing and guiding your digital transformation initiatives.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one bg-fcfbfb">
                                    <i className="pe-7s-display2 bg-6610f2"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Web Development</a>
                                        </Link>
                                    </h3>
                                    <p>Crafted as per your preferences to impress your clients as it is the modern day business card of your company</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one bg-fcfbfb">
                                    <i className="pe-7s-light bg-ffb700"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Digital Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Highlight your business on all the right platforms to reach your target customers worldwide.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one bg-fcfbfb">
                                    <i className="pe-7s-phone bg-fc3549"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>Mobile App Development</a>
                                        </Link>
                                    </h3>
                                    <p>We create mobile apps that are seamless extensions of your web systems, elevating the user experience.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one bg-fcfbfb">
                                    <i className="pe-7s-cart bg-00d280"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>eCommerce Development</a>
                                        </Link>
                                    </h3>
                                    <p>Robust digital commerce strategy and implementation plan for enterprises to gain a competitive edge on the digital landscape. </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <div className="service-card-one bg-fcfbfb">
                                    <i className="pe-7s-users bg-ff612f"></i>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>IT Solutions</a>
                                        </Link>
                                    </h3>
                                    <p>We understand the challenges that the sector faces and recognize the unique opportunity to help your company follow its growth plan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default OurServices;