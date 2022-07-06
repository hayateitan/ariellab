import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getAlignerProcess from "../../../data/getAlignerProcess.json";

class GetAlignerProcess extends Component {
    render() {
        return (
            <div className="section" style={{ textAlign: "center" }}>
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-12" style={{ textAlign: "center" }}>
                            {/* <h3 className="title mb-0">How it Works?</h3> */}
                            <a style={{ display: "inline", color: "black", fontWeight: "normal", fontSize: "40px" }} > How many time to have   </a>
                            <a style={{ display: "inline", color: "black", fontWeight: "bold", fontSize: "40px" }} > Ariel</a>
                            <a style={{ display: "inline", color: "#ED1566", fontWeight: "bold", fontSize: "40px" }} >  ALIGNER ©  </a>
                            <a style={{ display: "inline", color: "black", fontWeight: "normal", fontSize: "40px" }} > ?   </a>

                        </div>

                    </div>
                    <div className="row sigma_info-wrapper style-25">  
                        {/* Data */}
                        {getAlignerProcess.map((item, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className="sigma_info style-25 d-block d-xl-flex">
                                    <div className="sigma_info-title">
                                        <span className="sigma_info-icon">
                                            <img src={item.image} />
                                        </span>
                                    </div>
                                </div>
                                <div className="sigma_info-description mt-4 mt-xl-0">
                                    <p>{item.text}</p>
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

export default GetAlignerProcess;