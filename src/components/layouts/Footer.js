import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serviceblock from "../../data/service/protheses.json";
import { withTranslation } from 'react-i18next';

class Footer extends Component {
    render() {
        const { t } = this.props;
        return (
            <footer className="sigma_footer style-5 pb-0 lab_page">
                <div className="container">
                    <div className="sigma_info-wrapper style-26 mb-5 add_margin_to_footer">
                        <div className="sigma_info style-26">
                            <div className="sigma_info-title">
                                <span className="sigma_info-icon">
                                    <i className="fal fa-map-marker-alt" />

                                </span>
                            </div>
                            <div className="sigma_info-description">
                                <p>{t('ourAddressTxt')}</p>
                                <p className="secondary-color">
                                    <a href={"https://ul.waze.com/ul?place=ChIJ4ydMaYBAHRURlkZxyhIuUj4&ll=32.28435500%2C34.86063550&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"}
                                        target="_blank">
                                        <b>{"Hamelakha 45, Netanya" + "\xa0\xa0\xa0\xa0"}
                                        </b>
                                    </a>
                                    <a style={{ fontSize: "30px", color: "#31C6F7" }}
                                        href={`https://ul.waze.com/ul?place=ChIJ4ydMaYBAHRURlkZxyhIuUj4&ll=32.28435500%2C34.86063550&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location`}
                                        target="_blank">
                                        <img width="60px" src={"assets/img/waze.png"} />
                                    </a>
                                </p>

                            </div>
                        </div>
                        <div className="sigma_info style-26">
                            <div className="sigma_info-title">
                                <span className="sigma_info-icon">
                                    <i className="fal fa-phone" />
                                </span>
                            </div>
                            <div className="sigma_info-description">
                                <p>{t('callUsTxt')}</p>
                                <a className="secondary-color" href="tel:+33177508508">Fr: +33 (1) 77 508 508</a>
                                <a className="secondary-color" href="tel:+972585982626">Isr: +972 (0) 58 59 82 626 </a>
                                <a className="secondary-color" href="tel:097483979">/ 097483979</a>

                            </div>
                        </div>
                        <div className="sigma_info style-26">
                            <div className="sigma_info-title">
                                <span className="sigma_info-icon">
                                    <i className="fal fa-envelope" />
                                </span>
                            </div>
                            <div className="sigma_info-description">
                                <p>{t('ourMailTxt')}</p>
                                <a className="secondary-color"
                                    href="mailto:ariellaboratoire@gmail.com"><b>ariellaboratoire@gmail.com</b></a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="sigma_footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4" style={{marginLeft:57}}>
                                <div className="sigma_footer-widget">
                                    <div className="sigma_footer-logo mb-4" style={{marginLeft:20}}>
                                        <img src={"assets/img/logo_ariel.jpg"} width="190px" alt="logo" />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-9">
                                            <p className="mb-0">{t('footerDescTxt')}</p>
                                        </div>
                                    </div>
                                    <ul className="sigma_social-icons has-border mt-4 justify-content-start">
                                        <li>
                                            <a href={"https://m.facebook.com/ariellaboratoire/"}
                                                target="_blank">
                                                <i className="fab fa-facebook-f" style={{ fontSize: "24px" }} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={"https://instagram.com/ariel.laboratoire?utm_medium=copy_link"}
                                                target="_blank">
                                                <i className="fab fa-instagram" style={{ fontSize: "24px" }} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={"https://il.linkedin.com/in/lyor-chekroun-651802130"}
                                                target="_blank">
                                                <i className="fab fa-linkedin" style={{ fontSize: "24px" }} />
                                            </a>
                                        </li>

                                        <li>
                                            <a href={"https://youtube.com/channel/UCxWyMOeNqeVUqaPCjCKwrEA"}
                                                target="_blank">
                                                <i className="fab fa-youtube" style={{ fontSize: "24px" }} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3">
                                <div className="sigma_footer-widget">
                                    <h5 className="widget-title">Services</h5>
                                    <ul className="sigma_footer-links">
                                        {/* Data */}
                                        {serviceblock.slice(0, 5).map((item, i) => (
                                            <li key={i}>
                                                <Link to={item.link} >{t(item.title)}</Link>
                                            </li>
                                        ))}
                                        {/* Data */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-3">
                                <div className="sigma_footer-widget">
                                    <h5 className="widget-title">{t('UsefulLinksTxt')}</h5>
                                    <ul className="sigma_footer-links">
                                        <li>
                                            <Link to="/">{t('footerHome')}</Link>
                                        </li>
                                        <li>
                                            <Link to="/laboratoire">{t('footerLab')}</Link>
                                        </li>
                                        <li>
                                            <Link to="/ariel-aligner">Ariel Aligner</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">{t('footerContact')}</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="sigma_footer-widget">
                                    <h5 className="widget-title">{t('SubscribeTxt')} </h5>
                                    <form>
                                        <input type="email" name="email" placeholder="Email" required />
                                        <button type="button" className="mt-3 btn-block">{t('SubscribeBtnTxt')}</button>
                                        <p className="mb-0 mt-3">Get The Latest Updates via email. Any time you may unsubscribe</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="sigma_footer-bottom d-block d-sm-flex align-items-center justify-content-between">
                        <div className="sigma_footer-copyright mt-0 mb-3 mb-sm-0">
                            <p className="mb-0">© Ariel Labs <Link to="#">2022</Link> | Tous droits réservés
                            </p>
                        </div>
                        <ul className="sigma_footer-links">
                            <li>
                                <Link to="#">Privacy</Link>
                            </li>
                            <li>
                                <Link to="#">Terms</Link>
                            </li>
                            <li>
                                <Link to="#">Sitemap</Link>
                            </li>
                            <li>
                                <Link to="#">Help</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default withTranslation()(Footer);