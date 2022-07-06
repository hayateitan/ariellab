import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Content from '../sections/gouttiere/Content';
import Footer from '../layouts/Footer';
import { withTranslation } from 'react-i18next';


class Blogdetails extends Component {
    render() {
        const { t } = this.props;
        const pagelocation = t('guttersAndOrthodonticsTitle');
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

export default withTranslation()(Blogdetails);  