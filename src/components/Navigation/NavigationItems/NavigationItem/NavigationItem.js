import React from 'react';
import './NavigationItem.css';
import { Link, NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li className="NavigationItem">
        <NavLink 
            to={props.link}
            className={props.active ? "active" : null}>{props.children}
        </NavLink>
    </li>
);

export default navigationItem;