import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class WhyChooseUs extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <section className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12">
                            <div className="about-content about-content-two pl-0 mt-0">
                                <div className="section-title">
                                    <h2>About Us</h2>
                                    <p>At Adulis, we pride ourselves on creating visually stunning and highly functional websites for our clients to deliver top-notch solutions that drive business growth and online presence.</p>
                                </div>

                                <div className="about-text">
                                    <h4>Web Development and Design Services</h4>
                                    <p>We create visually stunning and highly functional websites that drive business growth and improve online presence. Using the latest technologies and design principles to ensure your website is optimized, easy to navigate and loads quickly.</p>
                                </div>

                                <div className="about-text">
                                    <h4>Digital Marketing Services</h4>
                                    <p>We offer a wide range of digital marketing services including SEO, PPC advertising, and social media management. Helping our clients to get the most out of their online presence and generate traffic to their website.</p>
                                </div>

                                <div className="about-text">
                                    <h4>Our Commitment to Customer Service</h4>
                                    <p>Dedicated to delivering high-quality work and providing excellent customer service. Available to answer any questions and building a long-term relationship with our clients.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-5 col-md-12">
                            <div className="about-image right-image">
                                <img src="/images/about-img3.jpg" alt="image" className="rounded-10" />

                                
                            </div>
                        </div>
                    </div>
                </div>

                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </section>
        );
    }
}

export default WhyChooseUs;