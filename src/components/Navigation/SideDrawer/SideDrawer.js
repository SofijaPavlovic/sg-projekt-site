import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilary';
import NavigationContact from '../NavigationItems/NavigationContact/NavigationContact';

const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"]
    }

    return (
        <Aux>
            <Backdrop
                show={props.open}
                clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className="LogoSideDrawer" onClick={props.closed}>
                    <div className="BackLogoArrow">
                        <div>
                            <i className="LeftArrow"></i>
                        </div>
                        <div>
                            <Logo />
                        </div>
                    </div>
                </div>
                <nav onClick={props.closed}>
                    <NavigationItems />
                    <NavigationContact info={props.info}/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;