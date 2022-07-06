import React, { Component } from 'react'; //for menu v1 and v2
import partners from "../../../data/partners.json"
import footer from "../../../data/footer.json"
import { withTranslation } from 'react-i18next';

class Partners extends Component {  
    render() {
        const { t } = this.props;
        return (
            <div className="sigma_clients-wrapper style-3">

            <div className="container" >   
                
                <div className="section-title centered">
                    <h3 className="title" style={{fontFamily:"Open sans , sans-serif"}}>{t('OurPartnersTxt')}</h3>
                </div>
                    <div className="row">
                        {/* Data */}
                        {partners.slice(0, 9).map((item, i) => (
                            <div className="col-lg-4 col-md-4" key={i}>
                                <div className="sigma_clients style-3">
                                    <img src={item.image} alt="clients" style={{maxWidth:"180px"}} />
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

export default withTranslation()(Partners);