import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serviceblock from "../../../data/service/lab_services.json" //MENU 1

class Services extends Component {
    render() {
        return (
            <div className="section section-padding sigma_service-sec style-16 add_padding">
                <div className="container">
                    <div className="row">
                        {/* Data */}   
                        {serviceblock.slice(0, 4).map((item, i) => (
                            <div className="col-lg-12 col-md-12 col-sm-12" key={i}>
                                <div className="sigma_service style-16">
                                    <div className="sigma_service-thumb">
                                 <img src={item.image}  style={{color:"white"}} width="80px"/>                     
                                      </div>
                                    <div className="sigma_service-body">
                                        <h5>
                                            <Link to={"#"}>{item.title}</Link>
                                        </h5>
                                        <p>{item.shorttext.slice(0, 700)}</p>
                                    </div>  
                                </div>
                            </div>
                        ))}
                        {/* Data */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;
