import React, { Component } from 'react';
import rayplicker_data from '../../../data/rayplicker/rayplicker.json';

class Software_rayplicker extends Component {
    render() {
        return (
            <div className="sigma_banner  style-10 bg-cover">

                <div className="banner-slider-inner my_menu2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className=" h1 title" >
                                    <a style={{ display: "inline", color: "black", fontWeight: "normal", fontSize: "50px" }} >LOGICIEL RAYPLICKER    </a>
                                </div>
                                <p>
                                    LE LOGICIEL RAYPLICKER POUR ANALYSER, COMMUNIQUER ET SAUVEGARDER FACILEMENT.
                                </p>
                            </div>
                            <div className="col-lg-6  d-lg-block">
                                <div className=" mt-5 mt-lg-0">
                                    <img src={"/assets/img/rayplicker/software_rayplicker_1.png"} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-slider-inner my_menu2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className=" h1 title" >
                                    <a style={{ display: "inline", color: "black", fontWeight: "normal", fontSize: "50px" }} >PRÉSENTATION DU LOGICIEL
                                    </a>
                                </div>
                                <p>
                                    Le logiciel Rayplicker 1.201 est un logiciel ouvert permettant la récupération, l’analyse et la transmission d’acquisitions obtenues avec un appareil de prise de teinte Rayplicker. Il s’installe aussi bien au cabinet dentaire qu’au laboratoire et permet d’analyser numériquement les acquisitions faites avec l’appareil Rayplicker. Il permet d’approfondir l’étude et l’analyse des informations les plus pertinentes pour la réalisation des prothèses dentaires. (Luminosité, translucidité, chromaticité, teinte).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-slider-inner my_menu2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className=" h1 title" >
                                    <a style={{ display: "inline", color: "black", fontWeight: "normal", fontSize: "50px" }} >
                                        FONCTIONNALITÉS
                                    </a>
                                </div>
              

                </div>

              
                    {rayplicker_data.map( (rayplicker_item,index)=>(
                    <div className="row align-items-center" key={index}>
                       
                        <div className="col-lg-6">
                            <div style={{ color:"white", background: "#ED1566", maxWidth: "600px", padding: "20px", opacity: 0.7 }}>
                                <a width="20px">
                                    {rayplicker_item.title}
                                </a>
                                {rayplicker_item.items.map(subtitle=>
                                    <li style={{ marginLeft: "20px" }}>
                                        {subtitle.text}
                                    </li>
                                   )}
                                
                            </div>
                        </div>
                        <div className="col-lg-6  d-lg-block" >
                            <div className=" mt-5 mt-lg-0">
                            <img src={rayplicker_item.image} alt="subheader" style={{ padding: "20%  0px 10% 20%" }} height="500px" />
                            </div>
                        </div>
                    </div>
                    ))}
    

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Software_rayplicker;
