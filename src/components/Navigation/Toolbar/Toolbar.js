import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Toogle from '../../Navigation/Toogle/Toogle';

const toolbar =(props) => (
    <header className="Toolbar">
        <Toogle clicked={props.clicked} />
        <div className="Logo"><Logo /></div>
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;