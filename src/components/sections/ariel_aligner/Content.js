import React, { Component, Fragment } from 'react';
import Whyus from './Whyus';
import Workprocess from './Workprocess';
import Galleryslider from '../../layouts/Galleryslider';
import Advantages from './Advantages';
import HowManyTimeToHavArielAligner from './HowManyTimeToHavArielAligner';
import HowToGetArielAligner from './HowToGetArielAligner';
import ContactformArielAligner from './ContactformArielAligner';
class Content extends Component {
    render() {
        return (   
            <Fragment>
                <div className="section bg-secondary-1" style={{ backgroundColor: "white" }}>
                    <div className="container">
                        <Whyus />
                    </div>
                </div>
                <div className="section bg-secondary-1" style={{ backgroundColor: "#F8F4F4" }}>

                    <div className="container" >
                        <Advantages />
                    </div>
                </div>
                <Workprocess />

                <div className="section pb-0"  />
                <div className="section section-padding p-0">
                    <div className="container-fluid p-0">
                        <Galleryslider />
                    </div>
                </div>

                <HowManyTimeToHavArielAligner />
                <HowToGetArielAligner />
                <ContactformArielAligner />

            </Fragment>
        );
    }
}

export default Content;