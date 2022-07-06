import React, { Component, Fragment } from 'react'; //OF MENU V1

import Banner from './Banner';
import Services from './Services';
import AdvantagesItems from './AdvantagesItems';
import StartItem from './StartItem';
import Advanced from './Advanced';
import Contactform from './Contactform';
import Description from './Description';
import VideoAndFollow from './VideoAndFollow'
class Content extends Component {
  
    render() {
        return (
            <Fragment>
                <Banner />
               <VideoAndFollow />
                <div className="section bg-secondary-1" style={{ backgroundColor: "white" }}>
                    <div className="container">
                        <Advanced />
                    </div>
                </div>
                <AdvantagesItems />
                <div className="section bg-secondary-1" style={{ backgroundColor: "white" }}>
                    <div className="container">
                        <Description />
                    </div>
                </div>
                <StartItem />
                <Contactform />

            </Fragment>
        );
    }
}

export default Content;