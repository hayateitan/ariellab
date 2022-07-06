import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/contact/Content';
import { withTranslation } from 'react-i18next';

class Contact extends Component {
    render() {
        const { t } = this.props;
        const pagelocation = t('footerContact');  
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
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default withTranslation()(Contact);