import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/rayplicker/Content';

const pagelocation = "Rayplicker";

class Rayplicker extends Component {
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
                <Content/>
              
                <Footer />   
            </Fragment>
        );
    }
}

export default Rayplicker;