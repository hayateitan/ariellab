import React, { Component, Fragment } from 'react';
const axios = require('axios');

//app.use(bodyParser.json())

class ContacthelperRayplicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: '',
            isVerified: false
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onNameChange(event) {
        this.setState({ name: event.target.value })
    }
    onPhoneChange(event) {
        this.setState({ phone: event.target.value })
    }
    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
  

    async handleSubmit(e) {
        const json = this.state;
        json.subject = "Nouvelle requête de contact sur Ariel-Labs/ Rayplicker service"
        e.preventDefault();
        try {
            const res =  axios.post("http://localhost:8080/mails/contact", json);
            console.log(this.state);
            window.location.href = '/contact-remerciement';

        }
        catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }

    resetForm() {
        this.setState({ name: "", phone: "", email: "", subject: "", message: "", })
    }
    render() {
        return (
            <Fragment />
        );
    }
}

export default ContacthelperRayplicker;
