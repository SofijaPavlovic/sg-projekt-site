import React from 'react';
import'./NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems =() => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>POČETNA</NavigationItem>
        <NavigationItem link="/">O NAMA</NavigationItem>
        <NavigationItem link="/5">PROJEKTI</NavigationItem>
    </ul>    
);

export default navigationItems;