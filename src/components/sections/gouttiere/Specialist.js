import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serviceblock from "../../../data/service/panda_services.json" //MENU 1
import { withTranslation } from 'react-i18next';

class Specialist extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className="row" style={{ marginBottom: "10%" }}>

                <div className="col-lg-7">
                    <div className="sigma_about style-21">
                        <div className="section-title">
                            <h2 />
                            <h2 className="title-panda-advanced" style={{ fontFamily: "Open sans , sans-serif", marginBottom: "11px" }} >
                                {t('GouttiereSpecialistTitle1')}
                            </h2>
                            <h2 className="title-panda-advanced" style={{ fontFamily: "Open sans , sans-serif", color: "#ED1566" }} >
                                {t('GouttiereSpecialistTitle2')}
                            </h2>
                        </div>
                        <div className="sigma_about-content" >
                            <p style={{ fontFamily: "Open sans , sans-serif", color: "black", marginBottom: "15px", textAlign:"justify" }}>
                                {t('GouttiereSpecialistDesc1')}
                            </p>
                            <p style={{ fontFamily: "Open sans , sans-serif", color: "black", fontWeight: 700, textAlign:"justify" }}>
                                {t('GouttiereSpecialistDesc2')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1">
                    <div className="sigma_about style-9 w-100 h-100">
                        <div className="sigma_about-image-1 has-no-content" style={{top:15,margin:"auto",marginBottom:-81,left:44}}>
                            <img className='pandascan-img-small' src={process.env.PUBLIC_URL + "assets/img/nos_services/gouttieres/specialist.jpg"} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Specialist);
