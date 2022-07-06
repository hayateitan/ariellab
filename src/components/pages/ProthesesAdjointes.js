import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import ProthesesAdjointesLayout from '../layouts/ProthesesAdjointesLayout';
import Footer from '../layouts/Footer';
import { withTranslation } from 'react-i18next';


class ProthesesAdjointes extends Component {
    render() {
        const { t } = this.props;
        const pagelocation = t('assistantProsthesisTitle');

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
                <ProthesesAdjointesLayout breadcrumb={{ pagename: pagelocation }} />
                <Footer />
            </Fragment>
        );
    }
}

export default withTranslation()(ProthesesAdjointes);