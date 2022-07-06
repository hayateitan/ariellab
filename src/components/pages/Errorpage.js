import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/ProthesesConjointesLayout';
import Footer from '../layouts/Footer';
import Content from '../sections/error-page/Content';
import { withTranslation } from 'react-i18next';

class Errorpage extends Component {
    render() {
        const { t } = this.props;
        const pagelocation = t('error404Txt');
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
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default withTranslation()(Errorpage);