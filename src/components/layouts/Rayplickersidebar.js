import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ContacthelperRayplicker from '../../helper/ContacthelperRayplicker';
import { withTranslation } from 'react-i18next';

class Rayplickersidebar extends ContacthelperRayplicker {
    render() {
        const { t } = this.props;
        return (
            <div className="sidebar">
                {/* form Widget 2 */}
                <div className="widget">
                    <h5 className="widget-title">{t('RequestForRayplickerTxt')}</h5>
                    <div className="widget-inner">   
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <i className="fal fa-user" />
                                <input type="text" name="fname" placeholder={t('completenNameTxt')} required value={this.state.name} onChange={this.onNameChange} />
                            </div>
                            <div className="form-group">
                                <i className="fal fa-envelope" />
                                <input type="email" name="email" placeholder={t('emailTxt')} required value={this.state.email} onChange={this.onEmailChange} />
                            </div>
                            <div className="form-group">
                                <i className="fal fa-phone" />
                                <input type="number" name="phone" placeholder={t('PhoneNumberTxt')} required value={this.state.phone} onChange={this.onPhoneChange} />
                            </div>
                            <div className="form-group">
                                <textarea name="message" rows={5} placeholder={t('yourMessageTxt')} required value={this.state.message} onChange={this.onMessageChange} />
                            </div>
                            <button type="submit" className="sigma_btn btn-block btn-sm">
                                {t('sendRequestBtn')}
                                <i className="fal fa-arrow-right ml-3" />
                            </button>
                        </form>
                    </div>
                </div>
                {/* Contact Widget */}
                {/* Follow Widget */}
                <div className="widget widget-follow">
                    <h5 className="widget-title">{t('followUsTitle')}</h5>
                    <div className="social-buttons">
                        <a className="btn-block sigma_btn" href={"https://m.facebook.com/ariellaboratoire/"} style={{ color: "#fff" }} target="_blank">
                            <div className="follow-icon d-flex align-items-center">
                                <i className="fab fa-facebook-f" />
                                <p className="mb-0">
                                    Facebook
                                </p>
                            </div>
                            <i className="fal fa-chevron-right" />
                        </a>
                        <a className="btn-block sigma_btn" href={"https://instagram.com/ariel.laboratoire?utm_medium=copy_link"} style={{ color: "#fff" }} target="_blank">
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

export default withRouter(withTranslation()(Rayplickersidebar));