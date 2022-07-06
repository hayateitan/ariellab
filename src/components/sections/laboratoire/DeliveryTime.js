import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

class DeliveryTime extends Component {   
  render() {
    const { t } = this.props;
    return (
      <div className="section section-padding sigma_service-sec style-16" style={{ padding: "7% 0 5%" }}>
        <div className="container">
          <div className="section-title centered">
            {/* <span className="subtitle ">Meet Our Team</span> */}
            <h3 className="title-delivery-time" style={{ fontFamily: "Open sans , sans-serif" }}>{t('labDeliveryTimeTitle')}</h3>
          </div>
        <div >
          <table style={{textAlign:"center"}}  >
            <div className="row"  >
              <div style={{marginLeft:"auto", marginRight:"auto"}}>
                <tr>
                  <th style={{ backgroundColor: "#F8F4F4", }}>{t('labDeliveryTimeTableTitle1')}</th>
                  <th style={{ backgroundColor: "#F8F4F4" }}>{t('labDeliveryTimeTableTitle2')}</th>
                </tr>
                <tr >
                  <td style={{ backgroundColor: "#F8F4F4" }}>   
                 {t('sundayTxt')}

                  </td>
                  <td style={{ backgroundColor: "#F8F4F4" }}>
                    13 {t('daysTxt')}
                  </td>
                </tr>
                <tr >
                <td style={{ backgroundColor: "#F8F4F4" }}>
                {t('mondayTxt')}
                  </td>
                  <td style={{ backgroundColor: "#F8F4F4" }}>
                  12 {t('daysTxt')}
                  </td>
                </tr>
                <tr >
                <td style={{ backgroundColor: "#F8F4F4" }}>
                {t('tuesdayTxt')}
                  </td>
                  <td style={{ backgroundColor: "#F8F4F4" }}>
                  12 {t('daysTxt')}
                  </td>
                </tr>
                <tr >
                <td style={{ backgroundColor: "#F8F4F4" }}>
                {t('wednesdayTxt')}
                  </td>
                  <td style={{ backgroundColor: "#F8F4F4" }}>
                  12 {t('daysTxt')}
                  </td>
                </tr>
                <tr >
                <td style={{ backgroundColor: "#F8F4F4" }}>
                {t('thursdayTxt')}
                  </td>
                  <td style={{ backgroundColor: "#F8F4F4" }}>
                  12 {t('daysTxt')}
                  </td>
                </tr>
              </div>
            </div>
          </table>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(DeliveryTime);
