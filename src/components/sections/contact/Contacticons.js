import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class Contacticons extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className="section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="sigma_info style-24">
                                <div className="sigma_info-title">
                                <span className="sigma_info-icon" style={{color:"#ED1566"}}>
                                        <i className="flaticon-hospital" />
                                    </span>
                                </div>
                                <div className="sigma_info-description">
                                    <h5 style={{fontFamily:"Open sans , sans-serif"}}>{t('ourAddressTxt')}</h5>
                                    <p>Hamelakha 45, Netanya.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="sigma_info style-24">
                                <div className="sigma_info-title">
                                    <span className="sigma_info-icon" style={{color:"#ED1566"}}>
                                        <i className="flaticon-call" />
                                    </span>
                                </div>
                                <div className="sigma_info-description">
                                    <h5 style={{fontFamily:"Open sans , sans-serif"}} >{t('callUsTxt')}</h5>  
                                    <a className="secondary-color" href="tel:097483979">Telephone: 097483979</a>
                                    <a className="secondary-color" href="tel:+972585982626">Mobile: +972585982626</a>

                                    <p> </p>
                                    <p></p>
                                </div>
                            </div>  
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="sigma_info style-24">
                                <div className="sigma_info-title">
                                <span className="sigma_info-icon" style={{color:"#ED1566"}}>
                                        <i className="flaticon-envelope" />
                                    </span>
                                </div>
                                <div className="sigma_info-description">
                                    <h5 style={{fontFamily:"Open sans , sans-serif"}}>{t('ourMailTxt')}</h5>
                                    <a className="secondary-color"
                                 href="mailto:ariellaboratoire@gmail.com">ariellaboratoire@gmail.com</a> 
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Contacticons);