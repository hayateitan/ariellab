import React from 'react';
import ContacthelperRayplicker from '../../../helper/ContacthelperRayplicker';

class ContactformRayplicker extends ContacthelperRayplicker {   
    render() {
        return (   
            <div className="section pt-5">
                <div className="container">
                    <div className="section-title centered">
                        <h3 className="title">Request for Rayplicker</h3>   
                    </div>
                    <div className="sigma_form style-2">
                        <form onSubmit={this.handleSubmit} method="GET">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter Full Name" name="name" value={this.state.name} onChange={this.onNameChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <input type="email" placeholder="Email Address" name="email" value={this.state.email} onChange={this.onEmailChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <input type="number" placeholder="Phone number" name="phone" value={this.state.phone} onChange={this.onPhoneChange} required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea rows={10} placeholder="Enter Message" name="message" value={this.state.message} onChange={this.onMessageChange} required />
                                    </div>
                                </div>
                            
                                <div className="col-12 text-center">
                                    <button type="submit">Submit Request</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactformRayplicker;