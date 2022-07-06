import React, { Component } from 'react';
import banner from "../../../data/pandascan/banner.json";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
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
        const { t } = this.props;
        return (
            <div className="sigma_banner style-8"> 
                <Slider {...settings} className="sigma_banner-slider" style={{display:"flex"}}>
                    {/* Data */}     
                    {banner.map((item, i) => (
                        <div key={i}>  
                            <div className="banner-slider-inner bg-center bg-cover" style={{ backgroundImage: "url(" + item.image + ")"} }>
                                <div className="sigma_banner-text text-center">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8">
                                                <h5 className="text-white">{item.subtitle}</h5>
                                                {/* {item.id ==1 && (
                                                <h1 className="title primary-color"  style={{fontFamily:"Open sans , sans-serif"}} dangerouslySetInnerHTML={{ __html: t(item.title) }}  />
                                                )} */}
                                                
                                                <h1 className="title primary-color dummy_text  "  dangerouslySetInnerHTML={{ __html: t(item.title) }}  />
                                              
                                            </div>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Data */}
                </Slider>
            </div>
        );  
    }
}

export default withTranslation()(Banner);