import React from 'react';
import './Footer.css';
import { IoMdMail, IoMdPhonePortrait } from 'react-icons/io';
import { MdPinDrop, MdCopyright } from 'react-icons/md';

const footer = (props) => {
    let phone = null;
    let address = null;
    let email = null;
    if (props.info) {
        console.log(props.info)
        phone = props.info.phone[0] + ' ' + props.info.phone[1];
        address = props.info.address.join(' ');
        email = props.info.email.join(' ');
    }



    return (
        <footer className="Footer">
            <div className="Row">
                <div className="Column">
                    <h3>Usluge</h3>
                    <p>- Projektovanje</p>
                    <p>- Savetovanje</p>
                    <p>- Legalizacija</p>
                    <p>- Statika</p>
                    <p>- Fundiranje</p>
                </div>
                <div className="Column">

                    <h3>Mapa</h3>
                    <iframe
                        title="Footer map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d691.6662156694117!2d19.667555829195464!3d46.09765729869459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474366cdd2a21b41%3A0xc0dfa3383766f019!2sPavla%20%C5%A0tosa%205%2C%20Subotica%2024000!5e0!3m2!1sen!2srs!4v1583334064201!5m2!1sen!2srs"
                        frameBorder="0" height="80%"></iframe>

                </div>
                <div className="Column">
                    <h3>Kontakt</h3>
                    <p>SG-PROJEKT</p>
                    <p><MdPinDrop /> {address}</p>
                    <p><IoMdPhonePortrait /> {phone}</p>
                    <p><IoMdMail /> {email}</p>
                </div>
            </div>
            <div className="Row">
                <MdCopyright /> Copyright 2020 - Sva prava zadržana - Projektni biro SG-PROJEKT
            </div>

        </footer>
    )
};

export default footer;