import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import workprocessAligner from "../../../data/workprocessAligner.json"; 

class Workprocess extends Component {   
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-7">
                            <div className="section-title" >    
                                <span className="subtitle" >Work Process</span>
                                <h3 className="title mb-0" style={{fontFamily:"Open sans , sans-serif"}}>How it Works?</h3>
                            </div>  
                        </div>
                     
                      
                    </div>
                    <div className="row sigma_info-wrapper style-25">
                        {/* Data */}
                        {workprocessAligner.map((item, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className="sigma_info style-25 d-block d-xl-flex">
                                    <div className="sigma_info-title">
                                        <span className="sigma_info-icon">
                                            <img src={item.image} />
                                        </span>
                                    </div>
                                    <div className="sigma_info-description mt-4 mt-xl-0">
                                        <h5 style={{fontFamily:"Open sans , sans-serif"}} dangerouslySetInnerHTML={{ __html: `Step ${1 + i}` }} />
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

export default Workprocess;