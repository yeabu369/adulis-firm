import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='pe-7s-angle-left'></i>",
        "<i class='pe-7s-angle-right'></i>"
    ],
    responsive:{
        0: {
            items:1,
        },
        576: {
            items:2,
        },
        768: {
            items:2,
        },
        1000: {
            items:3,
        }
    }
}

class TeamStyleThree extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div className="ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Expert Team</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    {this.state.display ? <OwlCarousel 
                    className="team-slider owl-carousel owl-theme"
                        {...options}
                    >

                        <div className="team-card text-center">
                            <div className="team-img">
                                <img src="/images/team/team9.jpg" alt="Image" />

                                <div className="social-links">
                                    <div className="d-table">
                                        <div className="d-table-cell">
                                            <ul>
                                                <li>
                                                    <a href="linkedin.com" target="_blank">
                                                        <i className="icofont-linkedin"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/" target="_blank">
                                                        <i className="icofont-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/" target="_blank">
                                                        <i className="icofont-facebook"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/" target="_blank">
                                                        <i className="icofont-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://dribbble.com/" target="_blank">
                                                        <i className="icofont-dribbble"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> 
                            </div> 

                            <div className="team-caption">
                                <h3>James White</h3>
                                <p>CEO & Founder</p>
                            </div>
                        </div>
                    
                        <div className="team-card text-center">
                            <div className="team-img">
                                <img src="/images/team/team10.jpg" alt="Image" />

                                <div className="social-links">
                                    <div className="d-table">
                                        <div className="d-table-cell">
                                        <ul>
                                                <li>
                                                    <a href="linkedin.com" target="_blank">
                                                        <i className="icofont-linkedin"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/" target="_blank">
                                                        <i className="icofont-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/" target="_blank">
                                                        <i className="icofont-facebook"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/" target="_blank">
                                                        <i className="icofont-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://dribbble.com/" target="_blank">
                                                        <i className="icofont-dribbble"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> 
                            </div>

                            <div className="team-caption">
                                <h3>Johnson Lee</h3>
                                <p>Backend Specialist</p>
                            </div>
                        </div>
                
                        <div className="team-card text-center">
                            <div className="team-img">
                                <img src="/images/team/team11.jpg" alt="Image" />

                                <div className="social-links">
                                    <div className="d-table">
                                        <div className="d-table-cell">
                                        <ul>
                                                <li>
                                                    <a href="linkedin.com" target="_blank">
                                                        <i className="icofont-linkedin"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/" target="_blank">
                                                        <i className="icofont-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/" target="_blank">
                                                        <i className="icofont-facebook"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/" target="_blank">
                                                        <i className="icofont-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://dribbble.com/" target="_blank">
                                                        <i className="icofont-dribbble"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> 
                            </div>

                            <div className="team-caption">
                                <h3>Williams Smith</h3>
                                <p>Front-end Specialist</p>
                            </div>
                        </div>

                        <div className="team-card text-center">
                            <div className="team-img">
                                <img src="/images/team/team12.jpg" alt="Image" />

                                <div className="social-links">
                                    <div className="d-table">
                                        <div className="d-table-cell">
                                        <ul>
                                                <li>
                                                    <a href="linkedin.com" target="_blank">
                                                        <i className="icofont-linkedin"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/" target="_blank">
                                                        <i className="icofont-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/" target="_blank">
                                                        <i className="icofont-facebook"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/" target="_blank">
                                                        <i className="icofont-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://dribbble.com/" target="_blank">
                                                        <i className="icofont-dribbble"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> 
                            </div>

                            <div className="team-caption">
                                <h3>Johnson</h3>
                                <p>Marketing Manager</p>
                            </div>
                        </div>

                        <div className="team-card text-center">
                            <div className="team-img">
                                <img src="/images/team/team13.jpg" alt="Image" />

                                <div className="social-links">
                                    <div className="d-table">
                                        <div className="d-table-cell">
                                        <ul>
                                                <li>
                                                    <a href="linkedin.com" target="_blank">
                                                        <i className="icofont-linkedin"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/" target="_blank">
                                                        <i className="icofont-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/" target="_blank">
                                                        <i className="icofont-facebook"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/" target="_blank">
                                                        <i className="icofont-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://dribbble.com/" target="_blank">
                                                        <i className="icofont-dribbble"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> 
                            </div>

                            <div className="team-caption">
                                <h3>Thomas</h3>
                                <p>Office Manager</p>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        );
    }
}

export default TeamStyleThree;