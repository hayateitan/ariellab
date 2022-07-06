import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/ariel_aligner/Content';
import Breadcrumbs from '../layouts/Breadcrumbs';

const pagelocation = "Ariel Aligner";

class Ariel_aligner extends Component {
    render() {
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

export default Ariel_aligner;