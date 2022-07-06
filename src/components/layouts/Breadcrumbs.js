import React, { Component } from 'react';
import { Link } from 'react-router-dom';  

class Breadcrumbs extends Component {
    render() {
        return (  
            <div className="sigma_banner style-8"> 
                {/* Data */}     
                    <div>  
                        <div className="banner-slider-inner bg-center bg-cover" style={{ backgroundImage: "url(assets/img/ariel-aligner/banner_2.jpg)"} }>
                            <div className="sigma_banner-text text-center">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h5 className="text-white dummy_text">{"ff"}</h5>
                                            {/* {item.id ==1 && (
                                            <h1 className="title primary-color"  style={{fontFamily:"Open sans , sans-serif"}} dangerouslySetInnerHTML={{ __html: t(item.title) }}  />
                                            )} */}
                                            
                                            <h1 className="title primary-color dummy_text  "  dangerouslySetInnerHTML={{ __html: "teeeest" }}  />
                                          
                                        </div>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
           
        </div>
        );
    }
}

export default Breadcrumbs;