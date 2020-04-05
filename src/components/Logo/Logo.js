import React from 'react';
import SGLogo from '../../assets/images/logo2.png';
import './Logo.css';

const logo =(props) => (
    <div className="Logo" style={{height: props.height}}>
        <img src={SGLogo} alt="SG-PROJEKT-Logo"/>
    </div>    
);

export default logo;