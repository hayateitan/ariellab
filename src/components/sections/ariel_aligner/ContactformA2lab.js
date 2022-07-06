import React from 'react';
import ContacthelperA2Lab from '../../../helper/ContacthelperA2Lab';
  
class ContactformA2lab extends ContacthelperA2Lab {
    render() {
        return (
            <div className="section pt-0" style={{ margin: "200px" }}>
                <div className="container">
                    <div className="section-title centered">
                        <h3 className="title">A2Lab Request</h3>
                    </div>
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
         );
        }
    }

export default ContactformA2lab;