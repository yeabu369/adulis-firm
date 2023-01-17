import React, { Component } from 'react';
import Link from 'next/link';

class ServiceStyleTwo extends Component {
    render() {
        return (
            <>
                <div className="service-style-two ptb-100 bg-fcfbfb">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="service-info pr-50">
                                    <div className="info-head">
                                        <h2 className="title">Web & Mobile Development</h2>
                                        <p>transforms the entire app development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded apps from a single codebase.</p>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Responsive Design
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Mobile App Development
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                React Web Development
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                UI / UX Design
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Laravel Web Development
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Angular Web Development
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="service-read-more">
                                        <Link href="/service-details">
                                            <a className="btn btn-primary">
                                                <i className="icofont-tasks"></i> Read more
                                            </a>
                                        </Link>
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="service-right-img">
                                    <img src="/images/services/it-service1.png" alt="Service Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service-style-two ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="service-left-img">
                                    <img src="/images/services/it-service2.png" alt="Service Image" />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="service-info pl-50">
                                    <div className="info-head">
                                        <h2 className="title">Digital Marketing</h2>
                                        <p>We offer a broad range of services to customers across various industries. For a number of online marketing strategies, such as search engine optimization (SEO), advertisements, copywriting, and more, we offer consulting and management choices as part of our digital marketing services.</p>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                SEO Marketing
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Facebook Marketing
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Social Marketing
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Email Marketing
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Data Scraping
                                            </div>
                                            <div className="feature-list">
                                                <i className="icofont-check-circled"></i>
                                                Youtube Marketing
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="service-read-more">
                                        <Link href="/service-details">
                                            <a className="btn btn-primary">
                                                <i className="icofont-tasks"></i> Read more
                                            </a>
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ServiceStyleTwo;