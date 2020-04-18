import React from 'react';
import './ContactInformation.css';

import { MdEmail } from "react-icons/md";

const infos = {
    phone: ["Telefon:", "+381 24 000 000 ", "+381 69 000 000"],
    adress: ["Adresa:", "Pavla Štosa 5, Subotica"],
    work: ["Radno vreme:", "radnim danima 8h - 16h"],
    mail: ["E-mail:", "sgprojekt@gmail.com"],
};

let informations = Object.keys(infos).map(info => {
    return (
        <div key={info} className="Information">
            {infos[info].map((value, i) => {
                console.log(info);
                return <p key={i}>{value}</p>
            })}
            {(info === "mail") ?
                <div>
                    <a href="mailto:abc@example.com">
                    <MdEmail id="email_envelop" size={18}/> Pošalji email 
                    </a>
                </div>
                : null}
        </div>
    );

});

const ContactInformation = () => (
    <div>
        {informations}
    </div>
)

export default ContactInformation;