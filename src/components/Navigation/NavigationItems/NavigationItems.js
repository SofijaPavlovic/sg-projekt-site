import React from 'react';
import'./NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems =() => (
    <ul className="NavigationItems">
        <NavigationItem link="/">POČETNA</NavigationItem>
        <NavigationItem link="/onama">O NAMA</NavigationItem>
        <NavigationItem link="/projekti">PROJEKTI</NavigationItem>
        <NavigationItem link="/kontakt">KONTAKT</NavigationItem>
    </ul>    
);

export default navigationItems;