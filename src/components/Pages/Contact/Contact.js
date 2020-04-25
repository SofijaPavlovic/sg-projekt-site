import React from 'react';
import './Contact.css';
import ContactInformations from './ContactInformation/ContactInformation';

const contact = (props) => (
    <div className="Contact">
        <h2>Kontakt informacije</h2>
        <div className="BreakLine" />
        <div className="Informations">  
            <div className="Info">
            <ContactInformations className="Info" info={props.info} />
            </div>
            <div className="Map" >
            <iframe title="Contacts map"
                width="100%"
                height="100%"
                src="https://maps.google.com/maps?q=Pavla%20%C5%A0tosa%205%2C%20Subotica&t=&z=16&ie=UTF8&iwloc=&output=embed"
                frameBorder="0">
            </iframe> 
        </div>
        </div>
    </div >
)

export default contact;