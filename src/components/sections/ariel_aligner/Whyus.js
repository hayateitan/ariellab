import React, { Component } from 'react';

class Whyus extends Component {
    render() {
        return (
            <>
            {/* <div className="section-title centered">
            <h3 className="title mb-0" style={{ fontFamily: "Open sans , sans-serif" }}>{('Ariel Aligner')}</h3>
            <span className="subtitle" style={{ fontFamily: "Open sans , sans-serif", fontSize: "1.2em" }}  >{('by Ariel Laboratoire')}</span>

        </div> */}
            <div className="row">
               
                <div className="col-lg-5 order-2 order-lg-1">
                    <div className="sigma_about style-21">
                        <div className="section-title">
                            <h2 />
                            <h2 className="title" style={{ display: "inline", fontFamily: "Open sans , sans-serif" }} > What’s    </h2>
                            <h2 className="title" style={{ display: "inline", fontFamily: "Open sans , sans-serif" }} >  ARIEL    </h2>

                            <h2 className="title" style={{ display: "inline", color: "#ED1566", fontFamily: "Open sans , sans-serif" }}> ALIGNER ©    </h2>
                            <h2 className="title" style={{ display: "inline", fontFamily: "Open sans , sans-serif" }} > ?     </h2>
                        </div>
                        <div className="sigma_about-content" style={{ marginTop: "25px" }}>
                            <p style={{ fontFamily: "Open sans , sans-serif", color: "black" }}>Metal braces Lace straps can be very restrictives. It’s why we have decided to create in our laboratory : “Ariel Aligner ©”.
                            </p>
                            <p style={{ display: "inline", fontWeight: "bold", fontFamily: "Open sans , sans-serif", color: "black" }}>  Ariel Aligner ©
                            </p>
                            <p style={{ display: "inline", fontFamily: "Open sans , sans-serif", color: "black" }}> is an aligner that will allow you to straighten your teeth but in a discreet way.
                            </p>
                            <p style={{ fontFamily: "Open sans , sans-serif", color: "black" }}> Our aligners are removables and almost invisibles.
                            </p>


                            {/* Data */}
                            <div className="sigma_info style-15" key='1'>
                                <div className="sigma_info-title">
                                    <i className={"sigma_info-icon flaticon-heartbeat"} />
                                </div>
                                <div className="sigma_info-description">
                                    <h5 >Transparent</h5>
                                    <p style={{ display: "inline", fontWeight: "bold", fontFamily: "Open sans , sans-serif", color: "black" }}> Clear aligners
                                    </p>
                                    <p style={{ display: "inline", fontFamily: "Open sans , sans-serif", color: "black" }}>  ,also known as
                                    </p>
                                    <p style={{ display: "inline", fontWeight: "bold", fontFamily: "Open sans , sans-serif", color: "black" }}> clear -aligner treatment,
                                    </p>
                                    <p style={{ fontFamily: "Open sans , sans-serif", color: "black" }}> are orthodontic devices that are a transparent, plastic form of dental braces used to adjust teeth.
                                    </p>
                                </div>
                            </div>

                            <div className="sigma_info style-15" key='1'>
                                <div className="sigma_info-title">
                                    <i className={"sigma_info-icon flaticon-group"} />
                                </div>
                                <div className="sigma_info-description">
                                    <h5 >You choose</h5>
                                    <p style={{ fontFamily: "Open sans , sans-serif", color: "black" }}> We enable you to design and produce clear aligners . It’s the clear choice for taking your practice to the next level.
                                    </p>
                                </div>
                            </div>

                            {/* Data */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1 order-1 order-lg-2">
                    {/* <div className="sigma_about style-21 mt-0 w-100 h-100">
                        <div className="sigma_about-image-1">
                            <img src={process.env.PUBLIC_URL + "/assets/img/ariel-aligner/what_is_2.png"} alt="img" />
                        </div>
                        <div className="sigma_about-image-2 d-none d-sm-block">
                        <img src={process.env.PUBLIC_URL + "/assets/img/ariel-aligner/why_us_3.jpg"} alt="img" />
                        </div> */}
                    <div className="sigma_about style-9 w-100 h-100">
                        <div className="sigma_about-image-1 has-no-content" style={{ marginTop: "0px" }}>
                            <img src={process.env.PUBLIC_URL + "/assets/img/ariel-aligner/what_is_2.png"} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Whyus;