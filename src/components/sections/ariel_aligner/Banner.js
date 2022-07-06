import React, { Component } from 'react';
import before_after from "../../../data/before_after.json";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider variable-width",
    arrows: true,
    dots: false,
    autoplay: false,
    centerMode: true,
    centerPadding: 0,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                dots: true
            }
        }
    ]
};
class Banner extends Component {
    render() {
        return (
                <div className="sigma_banner style-8 before_after">
                    <div className=" h1 title" style={{ textAlign: "center" }} >
                        <a style={{ display: "inline", color: "black", fontWeight: "normal", fontSize: "40px" }} > Before  </a>
                        <a style={{ display: "inline", color: "black", fontWeight: "bold", fontSize: "40px" }} > /  </a>
                        <a style={{ display: "inline", color: "#ED1566", fontWeight: "bold", fontSize: "40px" }} >  After  </a>
                    </div>

                    <Slider {...settings} className="sigma_banner-slider">
                        {/* Data */}
                        {before_after.map((item, i) => (
                            <div key={i} style={{ alignItems: "center" }}>
                                <img className="center" src={item.image} width="auto" height="299px" style={{ display: "block", margin: "auto" }} />
                            </div>
                        ))}
                        {/* Data */}
                    </Slider>
                </div>
        );
    }
}

export default Banner;