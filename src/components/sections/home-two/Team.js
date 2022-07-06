import React, { Component } from 'react';
import doctorblock from "../../../data/doctor/doctor.json";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    centerMode: true,
    centerPadding: 0,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }
    ]
}
class Team extends Component {
    render() {
        const { t } = this.props;

        return (
            // <div className="section section-padding sigma_team-sec style-14 bg-gray">
            //     <div className="container-fluid p-sm-0">
            //         <div className="section-title centered">
            //             {/* <span className="subtitle text-white">Meet Our Team</span> */}
            //             <h3 style={{color:"#ED1566"}} className="title">Notre Equipe creative</h3>
            //         </div>
            //         <Slider {...settings} className="sigma_team-slider-2">
            //             {/* Data */}
            //             {doctorblock.map((item, i) => (
            //                 <div key={i} className="sigma_team style-14">
            //                     <div className="sigma_team-thumb">
            //                         <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} width="345px" />
            //                     </div>
            //                     <div className="sigma_team-body">
            //                         <h5>
            //                             <Link to={"/doctor-details/" + item.id}>{item.name}</Link>
            //                         </h5>
            //                         <div className="sigma_team-categories">
            //                             <Link to={"/doctor-details/" + item.id} className="sigma_team-category">{item.specialist}</Link>
            //                         </div>
                                 
            //                     </div>
            //                 </div>
            //             ))}
            //             {/* Data */}
            //         </Slider>
            //     </div>  
            // </div>   
            <div className="section section-padding" style={{backgroundColor:"#F8F4F4"}}>  
                <div className="container">
                    <div className="section-title centered">
                        <span className="subtitle">{t('meetOurTeamTxt')}</span>
                        <h3 className="title mb-0" style={{fontFamily:"Open sans , sans-serif"}}>{t('ourCreativeTeamTxt')}</h3>   
                    </div>
                    <div className="row">  
                        {/* Data */}
                        {doctorblock.map((item, i) => ( 
                            <div className="col-lg-4 col-md-4 col-sm-6" key={i}>
                                <div className="sigma_team style-15">   
                                    <div className="sigma_team-thumb">  
                                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} style={{maxWidth:"300px"}} />
                                    </div>
                                    <div className="sigma_team-body">
                                        <h5>
                                            <a>{item.name}</a>
                                        </h5>
                                        <div className="sigma_team-categories">
                                            <a className="sigma_team-category">{t(item.specialist)}</a>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Data */}
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Team);