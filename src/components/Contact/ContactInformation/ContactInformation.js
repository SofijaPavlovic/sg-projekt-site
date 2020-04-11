import React from 'react';
import './ContactInformation.css';

const infos = {
    phone: ["Telefon:","+381 24 000 000 ","+381 69 000 000"],
    adress: ["Adresa:", "Pavla Štosa 5, Subotica"],
    mail: ["E-mail:", "sgprojekt@gmail.com"],
    work: ["Radno vreme:", "radnim danima 8h - 16h"]
};

let informations = Object.keys(infos).map(info => {
    return (
        <div className="Information">
        {infos[info].map((value,i) => {
            return <p>{value}</p>
    })}
    </div>
    );
    
});

const ContactInformation = () => (
    <div>
    {informations}
    </div>
)

export default ContactInformation;