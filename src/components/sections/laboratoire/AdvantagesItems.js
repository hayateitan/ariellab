import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import advantages_digital_impression from "../../../data/laboratoire/advantages_digital_impression.json"
import { withTranslation } from 'react-i18next';

class AdvantagesItems extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className="section section-padding" style={{backgroundColor:"#F8F4F4"}}>
            <div className="container">
            <div className="section-title centered">
                <h3 className="title-lab-advantage text" style={{color:"black",fontFamily:"Open sans , sans-serif"}}>{t('labAdvantageBigTitle')}</h3>
            </div>
            <div className="row">
                {/* Data */}
                {advantages_digital_impression.slice(0, 6).map((item, i) => (
                    <div className="col-lg-6 col-md-6" key={i}>
                        <div className="sigma_service style-18 has-bg" style={{boxShadow:"none"}}>
                            <div className="sigma_service-thumb">
                                <i style={{color:"#ED1566"}} className={item.icon} />
                            </div>
                            <div className="sigma_service-body">
                                <h5 style={{color:"#ED1566",fontFamily:"Open sans , sans-serif", fontSize:"1.4em",color: "black"}} >{t(item.title)}</h5>
                                <p style={{fontFamily:"Open sans , sans-serif"}}>{t(item.shorttext)}</p>
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

export default withTranslation()(AdvantagesItems);


