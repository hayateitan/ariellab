import React from 'react';
import {  withRouter } from 'react-router-dom';
import ContacthelperA2Lab from '../../helper/ContacthelperA2Lab';

class ArielAlignersidebar extends ContacthelperA2Lab {
    render() {
        return (
            <div className="sidebar">
                  {/* Widget 1.1 */}
                  <div className="widget" style={{border:"0"}}> 
                    <div className="widget-inner">
                    <img src={"/assets/img/ariel-aligner/advantages_2.png"} style={{maxWidth:"80%"}} alt="img" />
  
                    </div>
                </div>
                {/* form Widget 2 */}
                <div className="widget">
                    <h5 className="widget-title">Request for Ariel Aligner</h5>
                    <div className="widget-inner">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <i className="fal fa-user" />
                                <input type="text" name="fname" placeholder="Name" required value={this.state.name} onChange={this.onNameChange} />
                            </div>
                            <div className="form-group">
                                <i className="fal fa-envelope" />
                                <input type="email" name="email" placeholder="Email" required value={this.state.email} onChange={this.onEmailChange} />
                            </div>
                            <div className="form-group">
                                <i className="fal fa-phone" />
                                <input type="number" name="phone" placeholder="Phone Number" required value={this.state.phone} onChange={this.onPhoneChange} />
                            </div>
                            <div className="form-group">
                                <textarea name="message" rows={5} placeholder="Message" required value={this.state.message} onChange={this.onMessageChange} />
                            </div>
                            <button type="submit" className="sigma_btn btn-block btn-sm">
                                Send Message
                                <i className="fal fa-arrow-right ml-3" />
                            </button>
                        </form>
                    </div>
                </div>
                {/* Contact Widget */}
                {/* Follow Widget */}
                <div className="widget widget-follow">
                    <h5 className="widget-title">Follow Us</h5>
                    <div className="social-buttons">
                        <a className="btn-block sigma_btn" href={"https://m.facebook.com/ariellaboratoire/"} style={{ color: "#fff" }} target="_blank">
                            <div className="follow-icon d-flex align-items-center">
                                <i className="fab fa-facebook-f" />
                                <p className="mb-0">
                                    Facebook
                                </p>
                            </div>
                            <i className="fal fa-chevron-right" />
                        </a>
                        <a className="btn-block sigma_btn" href={"https://instagram.com/ariel.laboratoire?utm_medium=copy_link"} style={{ color: "#fff" }} target="_blank">
                            <div className="follow-icon d-flex align-items-center">
                                <i className="fab fa-instagram" />
                                <p className="mb-0">
                                    Instagram
                                </p>
                            </div>
                            <i className="fal fa-chevron-right" />
                        </a>
                        <a className="btn-block sigma_btn" href={"https://m.facebook.com/ariellaboratoire/"} style={{ color: "#fff" }} target="_blank">
                            <div className="follow-icon d-flex align-items-center">
                                <i className="fab fa-linkedin" />
                                <p className="mb-0">
                                    Linkedin
                                </p>        
                            </div>
                            <i className="fal fa-chevron-right" />
                        </a>

                        <a className="btn-block sigma_btn" href={"https://m.facebook.com/ariellaboratoire/"} style={{ color: "#fff" }} target="_blank">
                            <div className="follow-icon d-flex align-items-center">
                                <i className="fab fa-youtube" />
                                <p className="mb-0">
                                    Youtube
                                </p>
                            </div>
                            <i className="fal fa-chevron-right" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ArielAlignersidebar);   