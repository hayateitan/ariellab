import React, { Component } from 'react';

class Contactmap extends Component {
    render() {
        return (
            <div className="sigma_contact-map">
                <iframe title="contactmap" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=netanya%20hamelacha%2045+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" height={600} allowFullScreen>
                </iframe>
            </div>
        );
    }
}

export default Contactmap;

