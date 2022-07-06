import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serviceblock from "../../../data/service/panda_services.json" //MENU 1
import { withTranslation } from 'react-i18next';

class Description extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className="row" style={{ marginBottom: "10%" }}>

                <div className="col-lg-8">
                    <div className="sigma_about style-21">
                        <div className="section-title">
                            <h2 />
                            <h2 className="title-panda-description" style={{ fontFamily: "Open sans , sans-serif" }} >
                                {t('pandascanDescriptionTitle')}
                            </h2>

                        </div>
                        <div className="sigma_about-content" style={{ marginTop: "25px" }}>
                            <p style={{ fontFamily: "Open sans , sans-serif", color: "black", lineHeight: "22px", marginBottom: "16px", textAlign: "justify" }}
                                dangerouslySetInnerHTML={{ __html: t("pandascanDescriptionDesc1") }} />

                            <p style={{ fontFamily: "Open sans , sans-serif", color: "black", lineHeight: "22px", marginBottom: "16px", textAlign: "justify" }}
                                dangerouslySetInnerHTML={{ __html: t("pandascanDescriptionDesc2") }} />

                            <p style={{ fontFamily: "Open sans , sans-serif", color: "black", lineHeight: "22px", marginBottom: "16px", textAlign: "justify" }}
                                dangerouslySetInnerHTML={{ __html: t("pandascanDescriptionDesc3") }} />

                            <p style={{ fontFamily: "Open sans , sans-serif", color: "black", lineHeight: "22px", marginBottom: "16px", textAlign: "justify" }}
                                dangerouslySetInnerHTML={{ __html: t("pandascanDescriptionDesc4") }} />

                            <p style={{ fontFamily: "Open sans , sans-serif", color: "black", lineHeight: "22px", marginBottom: "16px", textAlign: "justify" }}
                                dangerouslySetInnerHTML={{ __html: t("pandascanDescriptionDesc5") }} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 offset-lg-1">
                    <div className="sigma_about style-9 w-100 h-100">
                        <div className="sigma_about-image-1 has-no-content">
                            <img className='pandascan-img-small' src={process.env.PUBLIC_URL + "/assets/img/pandascan/description.png"} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Description);
