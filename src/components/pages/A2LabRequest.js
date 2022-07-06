import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import ContactformA2lab from '../sections/ariel_aligner/ContactformA2lab';

const pagelocation = "A2Lab";

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
                <ContactformA2lab/>
                <Footer />
            </Fragment>
        );
    }
}

export default Ariel_aligner;