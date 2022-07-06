import React, { Component } from 'react';
import testimonials from "../../../data/testimonials.json";
import { withTranslation } from 'react-i18next';

class Testimonials extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className="container" style={{paddingBottom: "8%"}}>
                <div className="section-title centered">
                    <span className="subtitle">{t('CustomerTestimonialsTxt')}</span>
                    <h3 className="title" style={{fontFamily:"Open sans , sans-serif"}}>{t('WhatOurClientsSayTxt')}</h3>
                </div>
                
                <div className="row">
                    {/* Data */}
                    {testimonials.slice(0, 2).map((item, i) => (
                        <div className="col-md-6" key={i}>
                                <div className="sigma_testimonial style-13 text-left bg-white" key={i}>
                                    <div className="sigma_author-info">
                                        <div className="sigma_testimonial-thumb mr-4">
                                            <img src={ item.image} alt={item.name} />
                                            <span className="fas fa-quote-left sigma_testimonial-icon" />
                                        </div>
                                        <div className="sigma_author-block">
                                            <h5>
                                                {item.name}
                                            </h5>
                                            <span className="sigma_testimonial-category">{t(item.specialist)}</span>
                                        </div>
                                    </div>
                                    <div className="sigma_testimonial-body " style={{fontFamily:"Open sans , sans-serif"}}>
                                        <p className="mb-0" style={{color:"black"}}>"{t(item.comment)}"</p>
                                    </div>
                                </div>
                        </div>
                    ))}
                    {/* Data */}
                </div>
            </div>
        );
    }
}
  
export default withTranslation()(Testimonials); 