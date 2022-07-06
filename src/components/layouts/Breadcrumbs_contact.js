import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

class Breadcrumbs_contact extends Component {
    render() {
        const { t } = this.props;
        return (
            // <div className="sigma_subheader style-5  bg-center bg-cover"  style={{ 
            //     backgroundColor: "#464646",
            //    //backgroundAttachment:"fixed",
            //     backgroundRepeat:"no-repeat",
            //     backgroundPosition: "center center  ", 
            //     backgroundImage: "url(assets/img/contact_us.jpg)" }}>
            //     <div className="container">
            //         <div className="sigma_subheader-inner">
            //             <h1 className="text-white">{this.props.breadcrumb.pagename}</h1>
            //         </div>
            //         <ol className="breadcrumb">

            //         </ol>
            //     </div>

            // </div>
            <div className="sigma_banner  style-10 bg-cover" style={{backgroundColor:"#F8F4F4"}}>
                <div className="banner-slider-inner my_menu2">
                    <div className="sigma_banner-text">
                        <div className="container">  
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <div className=" h1 primary-color" style={{ fontSize: "45px", fontFamily: "Open sans , sans-serif", paddingBottom:"10px" }}>
                                        {t('contactTitle')}
                                    </div>  
                                    <p style={{ color: "black", fontFamily: "Open sans , sans-serif" }}>
                                        {t('contactDsc1')}
                                        <br/>
                                        {t('contactDsc2')}
                                        <br/>
                                        {t('contactDsc3')}
                                        <br/>
                                        {t('contactDsc4')}
                                        </p>

                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="sigma_banner-image mt-5 mt-lg-0 ml-5">
                                        <img src={"./assets/img/doctors-grid/lior_2.jpg"} alt="img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Breadcrumbs_contact);