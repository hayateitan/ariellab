import React, { Component } from 'react';
import { Link } from 'react-router-dom';   
import serviceblock from "../../../data/service/panda_services.json" //MENU 1
import { withTranslation } from 'react-i18next';

class Services extends Component {      
    render() {
        const { t } = this.props;
        return (       
            <div className="row" >    
                     <div className="section-title centered">
                        <h3 className="title mb-0" style={{fontFamily:"Open sans , sans-serif"}}>{t('PandaScanTitle')}</h3>   
                    </div>   
             {serviceblock.map((item, i) => (
                <div className={"col-lg-6 order-2 order-lg-1"} >
                    <div className="sigma_about style-21">
                        {/* <div className="section-title">    
                            <h3 className="title text">Notre Laboratoire</h3>
                        </div> */}
                        <div className="sigma_about-content" style={{ marginBottom: "5%" }}>
                            {/* Data */}  
                            <div className="sigma_info style-15" key={i}>
                                <div className="sigma_info-title">
                                    <i className={"sigma_info-icon " + item.icon} />  
                                </div>
                                <div className="sigma_info-description">
                                    <h5 style={{fontFamily:"Open sans , sans-serif", fontSize:"1.4em", color: "black"}}>{`${i+1}.  ${t(item.title)}`}</h5>
                                    <p style={{ color: "black",fontFamily:"Open sans , sans-serif" }}>{t(item.shorttext)}</p>
                                </div>
                            </div>
                            {/* Data */}
                        </div>
                    </div>

                </div>
            ))}

            </div>
        );
    }
}
   
export default withTranslation()(Services);
