import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/home-two/Content';
import { withTranslation } from 'react-i18next';


class Hometwo extends Component {
    render() {
        const { t } = this.props;
        const pagelocation = t('footerHome');
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

export default withTranslation()(Hometwo);