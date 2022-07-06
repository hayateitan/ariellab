import React, { Component, Fragment } from 'react';
import Workprocess from './Workprocess';
import HowManyTimeToHavArielAligner from './HowManyTimeToHavArielAligner';
import Sidebar from '../../layouts/ArielAlignersidebar';
import ariel_aligner from '../../../data/ariel-aligner/ariel_aligner.json';

class Content extends Component {
    render() {
        const item = ariel_aligner;
        return (
            <div className="sidebar-style-9 service-details">
                <div className="section sigma_post-details" style={{padding:"200px 0px 0px 0px"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">

                                <div className="sigma_post-details-inner mb-md-80">
                                    <div className="entry-content">
                                        <img src="/assets/img/ariel-aligner/what_is.png" style={{ maxWidth: "60%" }} alt={item.title} className="w-100" />

                                        <h2 />
                                        <h2 className="entry-title" style={{ display: "inline", fontFamily: "Open sans , sans-serif" }} > What’s    </h2>
                                        <h2 className="entry-title" style={{ display: "inline", fontFamily: "Open sans , sans-serif" }} >  ARIEL    </h2>

                                        <h2 className="entry-title" style={{ display: "inline", color: "#ED1566", fontFamily: "Open sans , sans-serif" }}> ALIGNER ©    </h2>
                                        <h2 className="entry-title" style={{ display: "inline", fontFamily: "Open sans , sans-serif" }} > ?     </h2>
                                        <p style={{ fontFamily: "Open sans , sans-serif" }}>Metal braces Lace straps can be very restrictives. It’s why we have decided to create in our laboratory : “Ariel Aligner ©”.
                                        </p>
                                        <p style={{ display: "inline", fontWeight: "bold", fontFamily: "Open sans , sans-serif" }}>  Ariel Aligner ©
                                        </p>
                                        <p style={{ display: "inline", fontFamily: "Open sans , sans-serif" }}> is an aligner that will allow you to straighten your teeth but in a discreet way.
                                        </p>
                                        <p style={{ fontFamily: "Open sans , sans-serif" }}> Our aligners are removables and almost invisibles.
                                        </p>
                                        <p style={{ display: "inline", fontWeight: "bold", fontFamily: "Open sans , sans-serif" }}> Clear aligners,
                                        </p>
                                        <p style={{ display: "inline", fontFamily: "Open sans , sans-serif" }}>  also known as
                                        </p>
                                        <p style={{ display: "inline", fontWeight: "bold", fontFamily: "Open sans , sans-serif" }}>clear -aligner treatment,
                                        </p>
                                        <p style={{ fontFamily: "Open sans , sans-serif" }}> are orthodontic devices that are a transparent, plastic form of dental braces used to adjust teeth.
                                        </p>
                                        <p style={{ fontFamily: "Open sans , sans-serif" }}> We enable you to design and produce clear aligners . It’s the clear choice for taking your practice to the next level.
                                        </p>



                                        <div class='spacer'></div>
                                        <h4 style={{ fontFamily: "Open sans , sans-serif" }}>Advantages</h4>
                                        <p style={{ display: "inline", fontWeight: "bold", fontFamily: "Open sans , sans-serif" }}>Ariel
                                        </p>
                                        <p style={{ display: "inline", color: "#ED1566", fontWeight: "bold", fontFamily: "Open sans , sans-serif" }}> Aligner ©
                                        </p>
                                        <p style={{ display: "inline", fontFamily: "Open sans , sans-serif" }}> is designed for everyone. Enjoy all his benefits and go to the next level !
                                        </p>
                                        <p></p>
                                        <div class='row'>
                                            <div class='col-lg-6'>
                                                <div class='sigma_general-list style-3'>
                                                    <ul>
                                                        <li>
                                                            <i class='far fa-check'></i>
                                                            <span>Effective</span>
                                                        </li>
                                                        <li>
                                                            <i class='far fa-check'>
                                                            </i> <span>Confortable</span>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <div class='col-lg-6'>
                                                <img src="/assets/img/ariel-aligner/advantages.png" style={{ maxWidth: "50%" }} alt={item.title} className="w-100" />

                                            </div>

                                        </div>





                                        <div class='spacer'></div>
                                        <h4 style={{ fontFamily: "Open sans , sans-serif" }}>Fonctionnalités</h4>
                                        <p style={{ fontFamily: "Open sans , sans-serif" }}>Possibilité d’établir vos fiches de prothèses depuis le logiciel</p>
                                        <div class='row'>
                                            <div class='col-lg-6'>
                                                <div class='sigma_general-list style-3'>
                                                    <ul>
                                                        <li>
                                                            <i class='far fa-check'></i>
                                                            <span>Analyses multi-teintiers</span>
                                                        </li>
                                                        <li>
                                                            <i class='far fa-check'></i>
                                                            <span>Outils de traitement d’images (Luminosité/contraste)</span>
                                                        </li>
                                                        <li>
                                                            <i class='far fa-check'></i>
                                                            <span>Analyses CIE Lab / Lch</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class='col-lg-6'>
                                                <div class='sigma_general-list style-3'>
                                                    <ul>
                                                        <li>
                                                            <i class='far fa-check'>
                                                            </i> <span>Outil de mesure</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class='spacer'></div>

                                        <h2 style={{ display: "inline", fontFamily: "Open sans , sans-serif" }} > How to get
                                        </h2>
                                        <h2 style={{ display: "inline", fontFamily: "Open sans , sans-serif" }} >  Ariel    </h2>

                                        <h2 style={{ display: "inline", color: "#ED1566", fontFamily: "Open sans , sans-serif" }}>  ALIGNER ©    </h2>
                                        <h2 style={{ display: "inline", color: "black", fontFamily: "Open sans , sans-serif" }} > ?     </h2>
                                        <p> </p>
                                        <p style={{ fontFamily: "Open sans , sans-serif" }}>{item.getArielAlignerText}
                                        </p>

                                        <div class='spacer'></div>
                                        <h3 style={{ fontFamily: "Open sans , sans-serif" }}>What Dr need to send ?</h3>
                                        <div className="row">
                                            {item.drNeedSend.map((itemDrNeedSend, i) => (
                                                <div className="col-md-6" key={i}>
                                                    <p style={{ fontFamily: "Open sans , sans-serif" }}>{itemDrNeedSend.description}</p>

                                                    <a rel={"external"} href={itemDrNeedSend.image} className="gallery-thumb">
                                                        <img src={itemDrNeedSend.image} alt={item.title} />
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                        <div class='spacer'></div>
                                        <h3 style={{ fontFamily: "Open sans , sans-serif" }}>Material</h3>
                                        <p style={{ fontFamily: "Open sans , sans-serif" }}>
                                            The material comes from Dreve in Germany.
                                        </p>
                                        <div className="row">
                                            <div class='col-lg-6'>
                                                <img src={'/assets/img/ariel-aligner/material_1.png'} />
                                            </div>
                                            <div class='col-lg-6'>
                                                <img src={'/assets/img/ariel-aligner/material_2.png'} style={{ maxWidth: "80%" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Sidebar Start */}
                            <div className="col-lg-4">
                                <Sidebar />
                            </div>
                            {/* Sidebar End */}
                            <Workprocess />
                            <HowManyTimeToHavArielAligner />

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
