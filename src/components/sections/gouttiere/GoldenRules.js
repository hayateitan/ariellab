import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serviceblock from "../../../data/service/panda_services.json" //MENU 1
import { withTranslation } from 'react-i18next';

class GoldenRules extends Component {
    render() {
        const { t } = this.props;
        return (
            <>         
               <div className="section-title centered" style={{marginTop:44}}>
                {/* <span className="subtitle ">Meet Our Team</span> */}
                <h3 className="title-delivery-time" style={{ fontFamily: "Open sans , sans-serif" }}>{t('gouttiereGoledenRulesTitle')}</h3>
            </div>
                <div className="row" style={{ marginBottom: "10%" }}>

                    <div className="col-lg-4 offset-lg-1">
                        <div className="sigma_about style-9 w-100 h-100">
                            <div className="sigma_about-image-1 has-no-content" style={{ margin:"auto",left:55 }}>
                                <img className='pandascan-img-small' src={process.env.PUBLIC_URL + "assets/img/nos_services/gouttieres/goldenRules.jpg"} alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="sigma_about style-21">
                          
                            <div className="sigma_about-content" >
                            <ol style={{marginRight:50,marginLeft:17}}>
                              <li style={{borderBottom:"1px solid #ED1566", fontSize:"16px", marginBottom:"10px", paddingBottom:"10px"}}>
                              {t('gouttiereGoledenRulesDesc1')}
                              </li>
                              <li style={{borderBottom:"1px solid #ED1566", fontSize:"16px", marginBottom:"10px", paddingBottom:"10px"}}>
                              {t('gouttiereGoledenRulesDesc2')}
                              </li>
                              <li style={{borderBottom:"1px solid #ED1566", fontSize:"16px", marginBottom:"10px", paddingBottom:"10px"}}>
                              {t('gouttiereGoledenRulesDesc3')}
                              </li>
                              <li style={{borderBottom:"1px solid #ED1566", fontSize:"16px", marginBottom:"10px", paddingBottom:"10px"}}>
                              {t('gouttiereGoledenRulesDesc4')}
                              </li>
                              <li style={{borderBottom:"1px solid #ED1566", fontSize:"16px", marginBottom:"10px", paddingBottom:"10px"}}>
                              {t('gouttiereGoledenRulesDesc5')}
                              </li>
                              <li style={{borderBottom:"1px solid #ED1566", fontSize:"16px", marginBottom:"10px", paddingBottom:"10px"}}>
                              {t('gouttiereGoledenRulesDesc6')}
                              </li>
                          </ol>
                            </div>
                        </div>
                    </div>

                </div>
            </>

        );
    }
}

export default withTranslation()(GoldenRules);
