import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getAlignerProcess from "../../../data/getAlignerProcess.json";

class HowManyTimeToHavArielAligner extends Component {   
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row align-items-center" style={{marginBottom:"60px"}}>
                        <div className="col-lg-12">
                            <div className="section-title" style={{maxWidth:'680px'}}>
                            <h3 className="title-how-many-time mb-0" style={{ display: "inline",fontFamily:"Open sans , sans-serif" }} > How many time to have   </h3>
                            <h3 className="title-how-many-time mb-0" style={{ display: "inline", fontWeight: "bold",fontFamily:"Open sans , sans-serif" }} > Ariel</h3>
                            <h3 className="title-how-many-time mb-0" style={{ display: "inline", color: "#ED1566", fontWeight: "bold",fontFamily:"Open sans , sans-serif" }} >  ALIGNER ©  </h3>
                            <h3 className="title-how-many-time mb-0" style={{ display: "inline",fontFamily:"Open sans , sans-serif"}} > ?   </h3>
                            </div>  
                        </div>
                     
                      
                    </div>
                    <div className="row sigma_info-wrapper style-25">
                        {/* Data */}
                        {getAlignerProcess.map((item, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className="sigma_info style-25 d-block d-xl-flex">
                                    <div className="sigma_info-title">
                                        <span className="sigma_info-icon" style={{marginRight:"20px"}}>
                                            <img src={item.image} />
                                        </span>
                                    </div>
                                    <div className="sigma_info-description mt-4 mt-xl-0">
                                        <h5 style={{fontFamily:"Open sans , sans-serif"}} dangerouslySetInnerHTML={{ __html: item.title}} />
                                        <p style={{fontFamily:"Open sans , sans-serif"}}>{item.text}</p>
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

export default HowManyTimeToHavArielAligner;