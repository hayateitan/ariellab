import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getAlignerProcess from "../../../data/getAlignerProcess.json";

class Dr_need_send extends Component {
    render() {
        return (
            <div className="section" style={{ textAlign: "center",  padding:"10px" }} >
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-12" style={{ textAlign: "center" }}>
                            {/* <h3 className="title mb-0">How it Works?</h3> */}
                            <a style={{ display: "inline", color: "black", fontWeight: "normal", fontSize: "40px" }} > What Dr need to send ?   </a>
                        </div>
                    </div>

                    <div className=" row_dr_need_send sigma_info-wrapper style-25">
                        
                        <div className="col-lg-3 col-md-6 col-sm-12" key={1}>
                            <img src={"assets/img/ariel-aligner/what_dr_need_to_send.png"} alt="img" />
                            <div className="sigma_info-description mt-4 mt-xl-0">
                                <p>8 photos (see example)</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12" key={2}>
                            <img src={"assets/img/ariel-aligner/2X_rays_1.png"} alt="img" />
                            <div className="sigma_info-description mt-4 mt-xl-0">
                                <p>2 X-Rays (see example)</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12" key={3}>
                            <img src={"assets/img/ariel-aligner/2X_rays_2.png"} alt="img" />
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12" key={4}>
                            <img src={"assets/img/ariel-aligner/clear.png"} alt="img" />
                            <div className="sigma_info-description mt-4 mt-xl-0">
                            <p>Clear and Good Silicon Upper & Lower Jaw Print, Bite registration (or STL scan file)</p>

                            </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default Dr_need_send;