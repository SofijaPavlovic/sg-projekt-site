import React from 'react';

import { IoIosCall, IoIosMail } from 'react-icons/io';
import './NavigationContact.css';

const navigationContact = (props) => {

    const contact = {
        phone: (props.info != null )? props.info.phone[1] : null,
        email: (props.info != null )? props.info.email[1] : null,
    }

    return (
        <div className="NavigationContact">
            <div >
                <a href={"tel:" + contact.phone}>
                    <IoIosCall size={36} color={"white"} />
                </a>
            </div>
            <div>
                <a href={"mailto:" + contact.email} >
                    <IoIosMail size={36} color={"white"} />
                </a>
            </div>
        </div>
    );

}


export default navigationContact;