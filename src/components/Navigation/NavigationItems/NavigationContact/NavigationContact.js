import React, { Component } from 'react';

import { IoIosCall, IoIosMail } from 'react-icons/io';

import './NavigationContact.css';
import axios from 'axios';

class NavigationContact extends Component {
    state = {
        contact: {
            email: null,
            phone: null
        }
    };


    componentDidMount() {
            axios.get('https://sg-projekt-1cf54.firebaseio.com/contact.json')
                .then(response => {
                    
                    let email = response.data.email.split(',')[1];
                    let phone = response.data.phone.split(',')[1];
                    this.setState({contact: {
                        email: email,
                        phone: phone,
                    }});
                })
                .catch(error =>{
                    console.log(error);
                })
    }

    render() {
        return (
            <div className="NavigationContact">
                <div >
                    <a href={"tel:" + this.state.contact.phone}>
                        <IoIosCall size={36} color={"white"} />
                    </a>
                </div>
                <div>
                    <a href={"mailto:" +  this.state.contact.email} >
                        <IoIosMail size={36} color={"white"} />
                    </a>
                </div>
            </div>
        );
    }
}


export default NavigationContact;