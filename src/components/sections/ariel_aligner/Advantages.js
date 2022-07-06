import React, { Component } from 'react';
import ariel_aligner from '../../../data/ariel-aligner/ariel_aligner.json';

class Advantages extends Component {
    render() {
        const item = ariel_aligner;

        return (
            <div  >
                <div class='row'>
                    <div class='col-lg-6'>
                        <div style={{marginRight:"20px"}}>
                            <div className="section-title">  

                                <h4 className='title' style={{ fontFamily: "Open sans , sans-serif" }}>Advantages</h4>
                            </div>

                            <p style={{ display: "inline", fontWeight: "bold", fontFamily: "Open sans , sans-serif", fontSize: "1.1em" }}>Ariel
                            </p>
                            <p style={{ display: "inline", color: "#ED1566", fontWeight: "bold", fontFamily: "Open sans , sans-serif", fontSize: "1.1em" }}> Aligner ©
                            </p>
                            <p style={{ display: "inline", fontFamily: "Open sans , sans-serif", fontSize: "1em", maxWidth: "10%" }}> is designed for everyone. Enjoy all his benefits and go to the next level !
                            </p>
                            <p></p>
                            <div class='row'>
                                <div class='col-lg-6'   >
                                    <div class='sigma_general-list style-3'>
                                        <ul>
                                            <li>
                                                <i class='far fa-check'></i>
                                                <span style={{ fontSize: "1.1em" }}>Effective</span>
                                            </li>
                                            <li>
                                                <i class='far fa-check'>
                                                </i> <span style={{ fontSize: "1.1em" }}>Confortable</span>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                {/* <div class='col-lg-6'>
                        <img src="/assets/img/ariel-aligner/advantages_gray.png" style={{ maxWidth: "40%" }} alt={item.title} className="w-100" />

                    </div> */}
                            </div>

                        </div>
                    </div>

                    <div class='col-lg-6'>


                    <div style={{marginRight:"20px"}}>

                        <div className="section-title">

                            <h4 className='title' style={{ fontFamily: "Open sans , sans-serif" }}>Fonctionnalités</h4>
                        </div>
                        <p style={{ fontFamily: "Open sans , sans-serif", fontSize: "1.1em" }}>Possibilité d’établir vos fiches de prothèses depuis le logiciel</p>
                        <div class='row'>
                            <div class='col-lg-6'>
                                <div class='sigma_general-list style-3'>
                                    <ul>
                                        <li>
                                            <i class='far fa-check'></i>
                                            <span style={{ fontSize: "1.1em" }}>Analyses multi-teintiers</span>
                                        </li>
                                        <li>
                                            <i class='far fa-check'></i>
                                            <span style={{ fontSize: "1.1em" }}>Outils de traitement d’images (Luminosité/contraste)</span>
                                        </li>
                                        <li>
                                            <i class='far fa-check'></i>
                                            <span style={{ fontSize: "1.1em" }}>Analyses CIE Lab / Lch</span>
                                        </li>
                                        <li>
                                            <i class='far fa-check'>
                                            </i> <span style={{ fontSize: "1.1em" }}>Outil de mesure</span>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                                </div>

                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Advantages;