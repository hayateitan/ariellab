import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/pandascan/Content';
import { withTranslation } from 'react-i18next';

class PandaScan extends Component {
    render() {
        const { t } = this.props;
        const pagelocation = t('footerPandaScan');
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

export default withTranslation()(PandaScan);