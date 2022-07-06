import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import protheses_conjointes from '../../data/protheses/protheses_conjointes.json';
import { withTranslation } from 'react-i18next';

class ProthesesConjointesLayout extends Component {
    render() {
        const { t } = this.props;
        return (
            <>
                {protheses_conjointes.map((item, index) => (
                    <div className="section" style={{ backgroundColor: index % 2 == 1 ? "#F8F4F4" : "white", paddingBottom: "0px" }}>
                        <div className="container">

                            <div className="row align-items-center" style={{ padding: index ==0 ? "100px 0 50px": "10px 0 50px"}}>
                                <div className={index % 2 == 1 ? "col-lg-6 inverse-order-protheses" : "col-lg-6 order-protheses"}>
                                    <div className="sigma_about style-9 w-100 h-100">
                                        <div className="sigma_about-image-1 has-no-content">
                                            <img src={item.image} alt="img" style={{ maxWidth: "80%" }} />
                                        </div>  
                                    </div>
                                </div>
                                <div className={index % 2 == 1 ? "col-lg-6 order-protheses" : "col-lg-6 inverse-order-protheses"}>
                                    <div className="sigma_about style-9 mt-5 mt-lg-0">
                                        <div className="section-title">
                                            <h3 className="title-whyus mb-5" style={{ fontFamily: "Open sans , sans-serif" }}>{t('jointProsthesesTitle')}</h3>
                                        </div>
                                        <div className="sigma_about-content">
                                            <div className="row">
                                                {/* Data */}
                                                <div className="col-md-12" key={index}>
                                                    <div className="sigma_info style-15" style={{ marginBottom: 30 + "px" }}>
                                                        <div className="sigma_info-description">
                                                            <h5 style={{ fontFamily: "Open sans , sans-serif", fontWeight: "bold", color: "black", fontSize: "1.4em" }}>{t(item.title)} </h5>
                                                            <p style={{ fontFamily: "Open sans , sans-serif", fontSize: "1.2em" }}>{item.description}</p>
                                                            <p style={{ fontWeight: "bold", display: "inline", fontFamily: "Open sans , sans-serif", fontSize: "1.2em" }}>{`${t('advantageTxt')}: `}</p>
                                                            <p style={{ display: "inline", fontSize: "1.2em", fontFamily: "Open sans , sans-serif" }}>{item.advantagesText}</p>
                                                            <p></p>
                                                            <p style={{ fontWeight: "bold", display: "inline", fontFamily: "Open sans , sans-serif", fontSize: "1.2em" }}>{`${t('materialsTxt')}: `}</p>
                                                            <p style={{ display: "inline", fontSize: "1.2em", fontFamily: "Open sans , sans-serif" }}>{item.Matériaux}</p>
                                                            <p></p>
                                                            <p style={{ fontWeight: "bold", display: "inline", fontFamily: "Open sans , sans-serif", fontSize: "1.2em" }}>{`${t('costTxt')}: `}</p>
                                                            <p style={{ display: "inline", fontSize: "1.2em", fontFamily: "Open sans , sans-serif" }}>{item.Coût}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Data */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </>

        );
    }
}

export default withTranslation()(ProthesesConjointesLayout);

//padding : top right bottom left