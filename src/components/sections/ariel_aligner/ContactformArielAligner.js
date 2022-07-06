import React from 'react';
import ContacthelperA2Lab from '../../../helper/ContacthelperA2Lab';
import { t } from 'i18next';
import { withTranslation } from 'react-i18next';

class ContactformArielAligner extends ContacthelperA2Lab {   
    render() {
        const { t } = this.props;
        return (
            <div style={{backgroundColor:"#F8F4F4"}}>
            <div className="section pt-5" >  
                <div className="container">  
                    <div className="section-title centered">
                        <h3 className="title" style={{fontFamily:"Open sans , sans-serif"}}>{t('requestContactArielAlignerTxt')}</h3>   
                    </div>
                    <div className="sigma_form style-2">
                        <form onSubmit={this.handleSubmit} method="GET">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" placeholder={t('enterCompleteNameTxt')} name="name" value={this.state.name} onChange={this.onNameChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="email" placeholder={t('emailTxt')} name="email" value={this.state.email} onChange={this.onEmailChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="number" placeholder={t('PhoneNumberTxt')} name="phone" value={this.state.phone} onChange={this.onPhoneChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input type="text" placeholder={t('subjectTxt')} name={t('subjectTxt')} value={this.state.subject} onChange={this.onSubjectChange}   />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea rows={10} placeholder={t('yourMessageTxt')} name="message" value={this.state.message} onChange={this.onMessageChange} required />
                                    </div>
                                </div>
                               
                                <div className="col-12 text-center">
                                    <button type="submit">{t('sendRequestBtn')}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default withTranslation()(ContactformArielAligner);