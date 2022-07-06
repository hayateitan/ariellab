import React, { Component } from 'react';
import doctorblock from "../../../data/doctor/doctor.json"; //MENU TEAM
import Slider from "react-slick";
import { Link } from 'react-router-dom';


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
        return (
            <div className="section section-padding sigma_team-sec">
                <div className="container-fluid p-sm-0">
                    <div className="section-title centered">
                        {/* <span className="subtitle ">Meet Our Team</span> */}
                        <h3 className="title ">Notre Equipe Créative</h3>
                    </div>
                    <Slider {...settings} className="sigma_team-slider-2">
                        {/* Data */}
                        {doctorblock.map((item, i) => (
                            <div key={i} className="sigma_team style-14">
                                <div className="sigma_team-thumb">
                                    <img src={item.name} alt={item.title} />
                                </div>
                                <div className="sigma_team-body">
                                    <h5>
                                        <Link to={"/doctor-details/" + item.id}>{item.name}</Link>
                                    </h5>
                                    <div className="sigma_team-categories">
                                        <Link to={"/doctor-details/" + item.id} className="sigma_team-category">{item.specialist}</Link>
                                    </div>

                                </div>
                            </div>
                        ))}
                        {/* Data */}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Team;