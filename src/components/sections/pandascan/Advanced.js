import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serviceblock from "../../../data/service/panda_services.json" //MENU 1
import { withTranslation } from 'react-i18next';

class Advanced extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className="row" style={{marginBottom:"10%"}}>
                <div className="col-lg-4 offset-lg-1">
                    <div className="sigma_about style-9 w-100 h-100">
                        <div className="sigma_about-image-1 has-no-content" style={{ marginTop: "0px" }}>
                            <img className='pandascan-img-small' src={process.env.PUBLIC_URL + "/assets/img/pandascan/image1.png"} alt="img" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="sigma_about style-21">
                        <div className="section-title">
                            <h2 />
                            <h2 className="title-panda-advanced" style={{fontFamily: "Open sans , sans-serif" }} > 
                                {t('pandascanAdvancedTitle')}
                                </h2>

                        </div>   
                        <div className="sigma_about-content" style={{ marginTop: "25px" }}>
                            <p style={{ fontFamily: "Open sans , sans-serif", color: "black"}}>
                            {t('pandascanAdvancedDesc1')}
                            <br/>
                            {t('pandascanAdvancedDesc2')}
                            <br/>
                            {t('pandascanAdvancedDesc3')}
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default withTranslation()(Advanced);
