import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ContacthelperRayplicker from '../../helper/ContacthelperRayplicker';
import { withTranslation } from 'react-i18next';

class PandascanSidebar extends ContacthelperRayplicker {
    render() {
        const { t } = this.props;
        return (
            <div className="sidebar">
           
                {/* Follow Widget */}
                <div className="widget widget-follow">
                    <h5 className="widget-title">{t('followPandascanTitle')}</h5>
                    <div className="social-buttons">
                       
                        <a className="btn-block sigma_btn" href={"https://www.instagram.com/tv/CdpoziFIJFw/?igshid=YzAyZWRlMzg%3D"} style={{ color: "#fff" }} target="_blank">
                            <div className="follow-icon d-flex align-items-center">
                                <i className="fab fa-instagram" />
                                <p className="mb-0">
                                    Instagram
                                </p>
                            </div>
                            <i className="fal fa-chevron-right" />
                        </a>
                     

                        {/* <a className="btn-block sigma_btn" href={"https://m.facebook.com/ariellaboratoire/"} style={{ color: "#fff" }} target="_blank">
                            <div className="follow-icon d-flex align-items-center">
                                <i className="fab fa-youtube" />
                                <p className="mb-0">
                                    Youtube
                                </p>
                            </div>
                            <i className="fal fa-chevron-right" />
                        </a> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(PandascanSidebar);