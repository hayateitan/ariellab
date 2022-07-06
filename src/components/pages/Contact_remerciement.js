import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumbs_contact from '../layouts/Breadcrumbs_contact';
import Footer from '../layouts/Footer';
import Content from '../sections/contact/Content';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';


class Contact_remerciement extends Component {
    render() {        
        const { t } = this.props;
        const pagelocation = t('thanksTxt');
        return (
            <Fragment>
                <MetaTags>
                    <title> Ariel Labs | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <div style={{ padding: "200px 10px", margin:"0 20%" }}>
                    <div style={{ paddingBottom:"20px", backgroundColor: "#fffff", color: "black", letterSpacing: "0.5px", fontSize: "20px", fontWeight: 700, lineHeight: "22px" }}>
                        {t('ContactThanksTxt')}
                    </div>
                    <Link to={"/"} style={{
                            textAlign: "center", color: "rgb(14, 48, 71)", borderBlockColor: "pink", borderBottomStyle: "solid", borderBottomWidth: "1px", fontSize: "16px",
                            fontWeight: 500,
                           
                        }}>{t('backToHomeBtn')}
                    </Link>
                </div>

                <Footer />
            </Fragment>
        );
    }
}

export default withTranslation()(Contact_remerciement);