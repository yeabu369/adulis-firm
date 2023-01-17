import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/ItAgency/MainBanner';
import OurServices from '../components/ItAgency/OurServices';
import ServiceStyleTwo from '../components/ItAgency/ServiceStyleTwo';
import WhyChooseUs from '../components/ItAgency/WhyChooseUs';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import Feedback from '../components/Common/Feedback';
import PricingStyleThree from '../components/Pricing/PricingStyleThree';
import TeamStyleTwo from '../components/Common/TeamStyleTwo';
import LatestNewsSliderTwo from '../components/Common/LatestNewsSliderTwo';
import Newsletter from '../components/Common/Newsletter';
import Footer from '../components/Layouts/Footer';
import Partner from '../components/Common/Partner';
import ContactInfo from '../components/Contact/ContactInfo';

class ItAgency extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <MainBanner /> 

                <div id='services'>
                    <OurServices />
                </div>

                <ServiceStyleTwo />

                <div id='whyUs'>
                  <WhyChooseUs />
                </div>

                <FunFactsTwo />

                {/* <Partner /> */}

                <Feedback />

                {/* <TeamStyleTwo /> */}

                {/* <PricingStyleThree />  */}
                
                {/* <LatestNewsSliderTwo /> */}

                <div id='contact' className="pb-100">
                    {/* <Newsletter /> */}
                    <ContactInfo/>
                </div>

                <Footer />
            </>
        );
    }
}

export default ItAgency;