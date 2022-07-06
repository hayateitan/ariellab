import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import rayplicker_data from '../../../data/rayplicker/rayplicker.json';

class Content extends Component {
    render() {
       return (
           
            <div className="sidebar-style-9 service-details">
            <div className="section sigma_post-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="sigma_post-details-inner mb-md-80">
                                <div className="entry-content">
                                    <img src={rayplicker_data.image1} alt={rayplicker_data.title1} className="w-100" />
                                    <h2 className="entry-title">{rayplicker_data.title1}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: rayplicker_data.htmltext }} />
                                </div>


                                
                                {/* Post Meta Start */}
                                <div className="sigma_post-details-meta">
                                    <div className="sigma_post-details-meta-item sigma_post-share">
                                        <h5>Share</h5>
                                        <ul className="sigma_sm">
                                            {/* Data */}
                                            {/* {socialShare(item.title).map((social, i) => (
                                                <li key={i}>
                                                    <Link to="#" onClick={(e) => this.openSocialPopup(social, i)}>
                                                        <i className={social.iconClass} />
                                                    </Link>
                                                </li>
                                            ))} */}  
                                            {/* Data */}
                                        </ul>
                                    </div>
                                </div>
                                {/* Post Meta End */}
                            </div>
                        </div>
                        {/* Sidebar Start */}
                        {/* <div className="col-lg-4">
                            <Sidebar />
                        </div> */}
                        {/* Sidebar End */}
                    </div>
                </div>
            </div>
        </div>

        );
    }
}

export default Content;