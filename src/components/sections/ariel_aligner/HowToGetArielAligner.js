import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import workprocessAligner from "../../../data/workprocessAligner.json";

function openModal() {
    var c = document.getElementsByClassName("modal-body");
    console.log(c[0])
    if (c[0] && c[0].style) {
        c[0].style.display = "block";
    }
}
function closeModal() {
    console.log("open the modal ")
    var c = document.getElementsByClassName("modal-body");
    if (c[0] && c[0].style) {
        c[0].style.display = "none";
    }
}
// When the user clicks anywhere outside of the modal, close all the modals
window.onclick = function (event) {
    var c = document.getElementsByClassName("modal-body");
    for (var i = 0; i < c.length; i++) {
        if (event.target.style.display === "block")
            c[i].style.display = "none";
    }
}

const ServiceModalFunction = (props) => (
    <div class="sigma_newsletter-popup-modal modal-body" style={{ position: "fixed" }}>
        <div style={{ backgroundColor: "#FEFEFE", margin: "auto", padding: " 3% 7% 7% 7%", border: "1px solid #888", width: "90%", }}>
            <span className="close" onClick={() => closeModal()}>&times;</span>


            <p style={{ fontSize: "25px", fontWeight: "100", fontFamily: "Arial", color: "#686a6f", opacity: 1, lineHeight: "1px" }}>

            </p>
            <p style={{ fontSize: "35px", fontWeight: "300", fontFamily: "Arial", color: "#000000", paddingBottom: "1px", opacity: 1 }}>
                How to get Ariel ALIGNER © ?
            </p>
            <p style={{ fontSize: "1em", fontWeight: "300", fontFamily: "Arial", color: "#686a6f", paddingBottom: "10px", opacity: 1 }}>
                Treatment begins with taking x-ray, photographs, a bite registration, and silicon impressions of the person's teeth and gums. The dentist/orthodontist completes a written evaluation that includes diagnosis and treatment plan. Dental impressions are scanned in order to create a digital 3D representation of the teeth. Technicians move the teeth to the desired location with the program Treat, which creates the stages between the current and desired teeth positions. Anywhere from six to forty-eight aligners may be needed. Each aligner moves teeth .25 to .33 millimeters. A computer graphic representation of the projected teeth movements, created in the software program ClinCheck, is provided to the doctor and patient for approval or modification before aligners are manufactured.The aligners are modeled using CAD-CAM (computer-aided-design and computer-aided manufacturing) software and manufactured using a rapid phototyping technique called stereolithography. The molds for the aligners are built in layers using a photo-sensitive liquid resin that cures into a hard plastic when exposed to a laser. The aligners are made from an elastic thermoplastic material that applies pressure to the teeth to move into the aligner's position. Patients that need a tooth rotated or pulled down may have a small, tooth-coloredcomposite attachment bonded onto certain teeth.More attachments can make the aligners less aesthetically pleasing.Reproximation, (also called interproximal reduction or IPR and colloquially, filing or drilling), is sometimes used at the contacts between teeth to allow for a better fit
            </p>


        </div>
    </div>
)
/////////////////////END MODAL FUNCTIONS//////////

class HowToGetArielAligner extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-12">
                            <div className="section-title" >
                                <h2 style={{ display: "inline", fontFamily: "Open sans , sans-serif" }} > How to get
                                </h2>
                                <h2 style={{ display: "inline", fontFamily: "Open sans , sans-serif" }} >  Ariel    </h2>

                                <h2 style={{ display: "inline", color: "#ED1566", fontFamily: "Open sans , sans-serif" }}>  ALIGNER ©    </h2>
                                <h2 style={{ display: "inline", color: "black", fontFamily: "Open sans , sans-serif" }} > ?     </h2>
                                <p> </p>

                            </div>
                            <p style={{ fontFamily: "Open sans , sans-serif", fontSize: "1.2em" }}> Treatment begins with taking x-ray, photographs, a bite registration, and silicon impressions of the person's teeth and gums. The dentist/orthodontist completes a written evaluation that includes diagnosis and treatment plan. Dental impressions are scanned in order to create a digital 3D representation of the teeth...
                            </p>

                            <div className="btn-link primary-color" style={{ justifyContent: "center", display: "flex", marginTop: "50px" }}>
                                <div style={{display:"flex",  cursor:"pointer"}} onClick={() => openModal()} >
                                    <i className="flaticon-medical-record" style={{ fontSize: "70px" }}  >
                                   
                                    </i>
                                    <p style={{marginTop:"auto", marginBottom:"auto"}}>
                                    Read More
                                    </p>
                                    </div>

                            </div>
                        </div>


                    </div>

                </div>
                <ServiceModalFunction />
            </div>

        );
    }
}

export default HowToGetArielAligner;