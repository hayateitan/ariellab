import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Counter from './Counter';
import Team from './Team';
import Services from './Services';
import Partners from './Partners';
import Aboutus from "./Aboutus"
import Whyus from "./Whyus"
import Testimonials from './Testimonials';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />   
                <Services />     
                <Aboutus />   
                <Whyus />
                <Counter />
                <div className="section section-padding services_home2 bg-cover bg-center bg-secondary-1" style={{ paddingBottom: "5%" }}>
                </div>
                <Team />
                <div className="section section-padding home2" />
                <Testimonials />
                <Partners />  
            </Fragment>
        );
    }
}

export default Content;