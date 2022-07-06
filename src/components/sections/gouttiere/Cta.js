import React, { Component } from 'react'
import { Link } from 'react-router-dom';



// Modal Video
import ModalVideo from "react-modal-video";
import { withTranslation } from 'react-i18next';

class Cta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true });
    }
    render() {
        const { t } = this.props;
        return (
            <React.Fragment>

                <section className="section bg-cta" style={{ background: `url(assets/img/nos_services/gouttieres/cta.jpg) fixed center center`,
                
            }} id="cta">
                    <div className="bg-overlay" style={{ marginBottom:"120px"}}></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 text-center">
                                <div  style={{textAlign:"center"}} >
                                    <h4  
                                    className="title-gouttiere-cta title-dark text-white mb-4">{t('gouttiereCtaTitle')}</h4>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                    <ModalVideo
                        channel="vimeo"
                        isOpen={this.state.isOpen}
                        videoId="287684225"
                        onClose={() => this.setState({ isOpen: false })}
                    />
                </section>
            </React.Fragment>
        )
    }
}
export default withTranslation()(Cta);