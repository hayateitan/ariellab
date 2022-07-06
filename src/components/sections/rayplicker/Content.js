import React, { Component } from 'react';
import Sidebar from '../../layouts/Rayplickersidebar';
import { withTranslation } from 'react-i18next';

class Content extends Component {
    componentDidMount() {
        setTimeout(function () {
            document.getElementById('vid') && document.getElementById('vid').play();
        }, 1000);
    }
    render() {  
        const { t } = this.props;
        return (
            <div className="sidebar-style-9 service-details">
                <div className="section sigma_post-details" style={{ padding: "200px 0 50px 0" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="sigma_post-details-inner mb-md-80">
                                    <div className="entry-content">   
                                        <div className="entry-title" >
                                            <video style={{ width: "100%" }} id="vid" controls autoplay muted>
                                                <source src={"assets/video/Borea.mp4"} type="video/mp4" />
                                            </video>
                                        </div>

                                        <h2 className="entry-title" style={{ fontFamily: "Open sans , sans-serif" }}>Rayplicker</h2>
                                        <p style={{ fontFamily: "Open sans , sans-serif" }}>{t('rayplickerTxt1')}
                                        </p>
                                        <h5 style={{ fontFamily: "Open sans , sans-serif" }}>{t('rayplickerTxt2')}</h5>
                                        <p style={{ fontFamily: "Open sans , sans-serif" }}>{t('rayplickerTxt3')}
                                        </p>
                                        <div class='spacer'></div>
                                        <img src="assets/img/rayplicker/software_rayplicker_item_1.jpg" alt="Rayplicker" className="w-100" />

                                        <h4 style={{ fontFamily: "Open sans , sans-serif" }}>{t('rayplickerTxt4')}</h4>

                                        <p style={{ fontFamily: "Open sans , sans-serif" }}>{t('rayplickerTxt5')}</p>



                                        <div class='row'>
                                            <div class='col-lg-6'>
                                                <div class='sigma_general-list style-3'>
                                                    <ul>
                                                        <li>
                                                            <i class='far fa-check'></i>
                                                            <span>{t('rayplickerTxt6')}</span>
                                                        </li>
                                                        <li>
                                                            <i class='far fa-check'></i>
                                                            <span>{t('rayplickerTxt7')}</span>
                                                        </li>
                                                        <li>
                                                            <i class='far fa-check'></i>
                                                            <span>{t('rayplickerTxt8')}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class='col-lg-6'>
                                                <div class='sigma_general-list style-3'>
                                                    <ul>
                                                        <li>
                                                            <i class='far fa-check'>
                                                            </i> <span>{t('rayplickerTxt9')}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class='spacer'></div>

                                        <p style={{ fontFamily: "Open sans , sans-serif" }}>{t('rayplickerTxt10')}</p>
                                        <div class='row'>
                                            <div class='col-lg-6'>
                                                <div class='sigma_general-list style-3'>
                                                    <ul>
                                                        <li>
                                                            <i class='far fa-check'></i>
                                                            <span>{t('rayplickerTxt11')}</span>
                                                        </li>
                                                        <li>
                                                            <i class='far fa-check'></i>
                                                            <span>{t('rayplickerTxt12')}</span>
                                                        </li>
                                                        <li>
                                                            <i class='far fa-check'></i>
                                                            <span>{t('rayplickerTxt13')}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* Sidebar Start */}
                            <div className="col-lg-4">
                                <Sidebar />
                            </div>
                            {/* Sidebar End */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Content);