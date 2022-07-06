import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Player } from 'video-react';



class Banner extends Component {

    componentDidMount() {
        setTimeout(function () {
            document.getElementById('vid') && document.getElementById('vid').play();
        }, 1000);
    }
    render() {
        return (
                <div style={{ position: "relative", zIndex: "1", }}>
                    <div className="section section-padding" style={{ textAlign: "center", padding: "104.8px 0 0px", backgroundColor: "black" }}>
                        <video className="video-banner" id="vid" controls autoplay muted>
                            <source src={"assets/video/Ariel_labo_final_small.mp4"} type="video/mp4" />
                        </video>
                    </div>
          
                </div>

        );
    }
}

export default Banner;