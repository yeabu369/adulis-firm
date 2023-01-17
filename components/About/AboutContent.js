import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class About extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <section className="about-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="about-image">
                                    <img src="/images/about-img2.jpg" alt="image" className="rounded-10" />

                                    <div className="video-box">
                                        <div
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="video-btn"
                                        > 
                                            <i className="pe-7s-play"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-content about-content-two">
                                    <div className="section-title">
                                        <h2>About Us</h2>
                                        <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                                    </div>

                                    <div className="about-text">
                                        <h4>Who We Are</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis..</p>
                                    </div>

                                    <div className="about-text">
                                        <h4>Our History</h4>
                                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the.</p>
                                    </div>

                                    <div className="about-text">
                                        <h4>Our Mission</h4>
                                        <ul>
                                            <li>
                                                <i className="pe-7s-check"></i> 
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            </li>
                                            <li>
                                                <i className="pe-7s-check"></i> 
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                            </li>
                                            <li>
                                                <i className="pe-7s-check"></i> 
                                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.
                                            </li>
                                        </ul>
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
                </section>
            </>
        );
    }
}

export default About;