import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { Route, Switch } from 'react-router-dom';

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
                <Route path={"/"} exact />
                <Route path={"/onama"} exact />
                <Route path={"/projekti"} exact component={Project} />
                <Route path={"/kontakt"} exact component={Contact}/>
            </Switch>
            <Footer/>
        </Aux>
        )
    }
};

export default Layout;