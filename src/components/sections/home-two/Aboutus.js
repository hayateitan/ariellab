import React from 'react';
import Contacthelper from '../../../helper/Contacthelper';
import { withTranslation } from 'react-i18next';

class Aboutus extends Contacthelper {
    render() {   
        const { t } = this.props;  
        return (
            <div className="section" style={{backgroundColor:"#f8f4f4"}}>
                <div className="container">
                    <div className="row justify-content-start position-relative">
                        <div className="sigma_contact-image style-6-aboutus d-none d-lg-block">
                            <img src={"assets/img/home-2/new_home_pic2.jpg"} alt="img" />
                        </div>
                        <div className="col-lg-12">  
                            <div className="sigma_form style-6-aboutus" >
                                {/* padding: top/right/bottom/left/ */}
                                <div className="section-title">
                                    <p style={{ fontSize: "1.7em" , color:"gray", fontFamily:"Open sans , sans-serif"}} className=" ">{t('aboutusTxt')}</p>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}  

export default withTranslation()(Aboutus);