import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <div className="hero-banner it-banner overly hero-bg4">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="main-banner-content">
                                            <h1>We're an Ecommerce Company</h1>
                                                
                                            <p>Kickstart your brand value with Websites, Apps, digital marketing services and more.</p>
                                        
                                            <Link href="#services">
                                                <a className="btn btn-primary">Get Started</a>
                                            </Link>

                                            <Link href="#services">
                                                <a
                                                    className="btn btn-secondary"
                                                > 
                                                    <i className="icofont-ui-play"></i> Contact Us
                                                </a>
                                            </Link>
                                        </div> 
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="animate-banner-image">
                                            <img src="/images/animate-banner-img1.jpg" alt="Animate image" />
                                        </div>
                                    </div>
                                </div>        
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
            </>
        );
    }
}

export default MainBanner;