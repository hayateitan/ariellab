import { t } from 'i18next';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serviceblock from "../../../data/service/protheses.json"
import { withTranslation } from 'react-i18next';

class Services extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className="section padding-home-service">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-5">
                            <div className="section-title">
                                <span className="subtitle" style={{ fontFamily: "Open sans , sans-serif", fontSize: "1.2em" }}  >{t('whatWeDoTxt')}</span>
                                <h3 className="title mb-0" style={{ fontFamily: "Open sans , sans-serif" }}>{t('ourServicesTxt')}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row sigma_info-wrapper style-services">
                        {/* Data */}
                        {serviceblock.map((item, i, row) => (
                            <div className="col-lg-6 col-md-6" key={i} style={{ paddingBottom: i + 1 != row.length ? "60px" : "0px" }}>
                                <div className="sigma_info style-25 d-block d-xl-flex" >
                                    <div className="sigma_info-title">
                                        <span className="sigma_info-icon" style={{ boxShadow: "none" }}>
                                            <img src={item.iconLink} style={{ maxWidth: item.title =='PandaSan' ? '100%': '80%'}} />
                                        </span>
                                    </div>
                                    <div className="sigma_info-description mt-4 mt-xl-0" >
                                        <h5 style={{ marginBottom: "13px", fontFamily: "Open sans , sans-serif", fontSize: "1.5em" }} dangerouslySetInnerHTML={{ __html: t(item.title) }} />
                                        <p>
                                            <Link to={item.link} style={{ color: "#ed1566", textTransform: "uppercase", letterSpacing: "3px", textDecoration: "underline", textUnderlineOffset: "10px" }}
                                                dangerouslySetInnerHTML={{ __html: t('discoverTxt') + "\xa0\xa0\xa0\xa0" + ">" }} />
                                        </p>
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

export default withTranslation()(Services)
