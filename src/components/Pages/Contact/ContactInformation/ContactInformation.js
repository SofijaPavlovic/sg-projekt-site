import React from 'react';
import './ContactInformation.css';

import { MdEmail } from "react-icons/md";

const contactInformation = (props) => {
    const infos = props.info
    let informations = null;
    if (infos) {
        informations = Object.keys(infos).map(info => {
            return (
                <div key={info} className="Information">
                    {infos[info].map((value, i) => {
                        return <p key={i}>{value}</p>
                    })}
                    {(info === "email") ?
                        <div>
                            <a href={`mailto:${infos[info][1]}`}>
                                <MdEmail id="email_envelop" size={18} /> Pošalji email
                        </a>
                        </div>
                        : null}
                </div>
            );

        });
    }
    return (
        <div>
            {informations}
        </div>
    );
}

export default contactInformation;