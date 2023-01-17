import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    items:1,
    navText: [
        "<i class='pe-7s-angle-left'></i>",
        "<i class='pe-7s-angle-right'></i>"
    ],
}

class Feedback extends Component {

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
            <section className="feedback-area ptb-100">
                <div className="container">
                    <div className="feedback-list">
                        <div className="quotes-icon">
                            <img src="/images/left-quote-white.png" alt="icon" />
                        </div>

                        {this.state.display ? <OwlCarousel 
                        className="feedback-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="single-feedback">
                                <p>Adulis did an amazing job on our website. It's not only beautiful, but it's also generating leads and sales.</p>

                                <div className="bar"></div>

                                <h3>MArk Robinson</h3>
                                <span>CEO & Founder, Firex</span>
                            </div>

                            <div className="single-feedback">
                                <p>The team at Adulis was great to work with. They were very responsive and made sure that the website met all of our needs.</p>

                                <div className="bar"></div>

                                <h3>Oliver Kent</h3>
                                <span>Small business owner</span>
                            </div>

                            <div className="single-feedback">
                                <p>The results we've seen since launching our new website, thanks to Adulis's work, have been truly impressive. We're very happy with their services</p>

                                <div className="bar"></div>
                                
                                <h3>Alexander Thomas</h3>
                                <span>Marketing Specialist</span>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>

                {/* Client image */}
                <div className="client-image-box">
                    <img src="/images/clients/client1.png" className="client1" alt="client" />
                    <img src="/images/clients/client2.png" className="client2" alt="client" />
                    <img src="/images/clients/client3.png" className="client3" alt="client" />
                    <img src="/images/clients/client4.png" className="client4" alt="client" />
                    <img src="/images/clients/client5.png" className="client5" alt="client" />
                    <img src="/images/clients/client6.png" className="client6" alt="client" />
                    <img src="/images/clients/client7.png" className="client7" alt="client" />
                    <img src="/images/clients/client8.png" className="client8" alt="client" />
                </div>
            </section>
        );
    }
}

export default Feedback;