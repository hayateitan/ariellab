import React, { Component, Fragment } from 'react'; //OF MENU V1
import Banner from './Banner';
import Services from "./Services";
import Specialist from './Specialist';
import Cta from './Cta';
import GoldenRules from './GoldenRules';

class Content extends Component {
    render() {
        return (
            <Fragment>       
                <Banner />
              
                <Services />
                <div className="bg-secondary-1" style={{ backgroundColor: "white" }}>
                    <div className="container">
                        <Specialist />
                    </div>
                </div>
                <Cta />
                <div className="section bg-secondary-1" style={{ backgroundColor: "white" }}>
                    <div className="container">
                        <GoldenRules />
                    </div>
                </div>
            </Fragment>   
        );
    }
}
    
export default Content;