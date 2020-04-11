import React from 'react';
import './Contact.css';
import ContactInformations from './ContactInformation/ContactInformation';

const contact = () => (
    <div className="Contact">
        <div className="Informations">
            <h1>Kontakt informacije</h1>
            <ContactInformations />
        </div>

        <div className="Map" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d691.6662156694117!2d19.667555829195464!3d46.09765729869459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474366cdd2a21b41%3A0xc0dfa3383766f019!2sPavla%20%C5%A0tosa%205%2C%20Subotica%2024000!5e0!3m2!1sen!2srs!4v1583334064201!5m2!1sen!2srs"
            width="100%" height="400px">
            </iframe>
        </div>
    </div>
)

export default contact;