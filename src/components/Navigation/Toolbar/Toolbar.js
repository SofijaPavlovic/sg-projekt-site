import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Toogle from '../../Navigation/Toogle/Toogle';
import { Link } from 'react-router-dom';

const toolbar = (props) => (
    <header className="Toolbar">
        <Toogle clicked={props.clicked} />
        <Link to='/'>
            <div className="Logo"><Logo /></div>
        </Link>
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;