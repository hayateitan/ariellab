import React, { Component, Fragment } from 'react'; //OF MENU V1

import Banner from './Banner';
import Services from './Services';
import DeliveryTime from './DeliveryTime';
import AdvantagesItems from './AdvantagesItems';
class Content extends Component {
    render() {
        return (
            <Fragment>       
                <Banner />
                <div className="section bg-secondary-1" style={{ backgroundColor: "white"}}>
                    <div className="container">
                        <Services />
                    </div>
                </div>  
                <AdvantagesItems />
                <DeliveryTime />      

            </Fragment>   
        );
    }
}
  
export default Content;