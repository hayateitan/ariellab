import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import ProthesesConjointesLayout from '../layouts/ProthesesConjointesLayout';
import Footer from '../layouts/Footer';
import { withTranslation } from 'react-i18next';


class Blog extends Component {   
    render() { 
        const { t } = this.props;
        const pagelocation = t('jointProsthesesTitle');  
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
                
                <ProthesesConjointesLayout breadcrumb={{ pagename: pagelocation }} />
               
                <Footer />
            </Fragment>
        );
    }
}

export default withTranslation()(Blog);