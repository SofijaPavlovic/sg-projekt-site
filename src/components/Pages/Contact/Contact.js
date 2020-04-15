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
            <iframe title="Contacts map"
                width="100%"
                height="100%"
                src="https://maps.google.com/maps?q=Pavla%20%C5%A0tosa%205%2C%20Subotica&t=&z=16&ie=UTF8&iwloc=&output=embed"
                frameborder="0">
            </iframe> 
        </div>
    </div >
)

export default contact;