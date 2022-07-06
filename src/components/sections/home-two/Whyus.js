import React from 'react';
import Contacthelper from '../../../helper/Contacthelper';
import whyus from "../../../data/whyus.json";
import { withTranslation } from 'react-i18next';

class Whyus extends Contacthelper {
    render() {
        const { t } = this.props;  
        return (
            <div className="section">
            <div className="container">
                <div className="row justify-content-end position-relative">
                    <div className="sigma_contact-image style-6 d-none d-lg-block">
                        <img src={"assets/img/home-2/new_home_pic3.jpg"} alt="img" />
                    </div>
                    <div className="col-lg-8">
                        <div className="sigma_form style-6-whyus">
                            {/* padding: top/right/bottom/left/ */}
                            <div className="section-title">
                                <h3 style={{textAlign:"center", paddingBottom: "30px" , fontFamily:"Open sans , sans-serif"}} className="title-whyus mb-1 text-white">{t('whyUseTitle')}</h3>

                                {whyus.slice(0, 2).map((item, i) => (
                                    <>
                                        <p style={{ fontSize: "1.4em", textAlign:"center",fontFamily:"Open sans , sans-serif" ,  fontWeight:"500"}} className="text-white">{t(item.title)}</p>
                                        <p style={{ fontSize: "1.25em", textAlign:"center",fontFamily:"Open sans , sans-serif" }} className="text-white">{t(item.text)}</p>
                                    </>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default withTranslation()(Whyus);