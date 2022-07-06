import React, { Component } from 'react';
import { Link } from 'react-router-dom';   
import serviceblock from "../../../data/service/panda_services.json" //MENU 1
import { withTranslation } from 'react-i18next';
import Sidebar from '../../layouts/PandascanSidebar';

class VideoAndFollow extends Component {     
    componentDidMount() {
        setTimeout(function () {
            document.getElementById('vid') && document.getElementById('vid').play();
        }, 1000);
    } 
    render() {
        const { t } = this.props;
        return (       
            <div className="section sigma_post-details" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="sigma_post-details-inner mb-md-80">
                            <div className="entry-content">
                            <h2 className="entry-title" style={{ fontFamily: "Open sans , sans-serif" }}>PandaScan</h2>
                                        <p style={{ fontFamily: "Open sans , sans-serif" }}>{t('pandascanTitleVideotxt')}
                                        </p>
                                <div className="entry-title" >
                                    <video style={{ width: "100%" }} id="vid" controls autoplay muted>
                                        <source src={"assets/video/Pandascan.mp4"} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
   
export default withTranslation()(VideoAndFollow);
