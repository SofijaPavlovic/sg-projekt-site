import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Footer from '../Footer/Footer';
import Projects from '../Pages/Projects/Projects';


import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Contact from '../Pages/Contact/Contact';
import AboutUs from '../Pages/AboutUs/AboutUs';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => { return { showSideDrawer: !this.state.showSideDrawer } })
    }

    render() {
        return (<Aux>
            <Toolbar clicked={this.sideDrawerToggleHandler} />
            <SideDrawer
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler} />
            <main className="Content">
                {this.props.children}
            </main>
            <Switch>
                <Route path={"/"} exact component={Home} />
                <Route path={"/onama"} exact component={AboutUs} />
                <Route path={"/projekti"} exact component={Projects} />
                <Route path={"/kontakt"} exact component={Contact}/>

            </Switch>
            <Footer/>
        </Aux>
        )
    }
};

export default Layout;