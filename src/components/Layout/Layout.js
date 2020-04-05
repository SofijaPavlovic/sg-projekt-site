import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Project from '../Project/Project';
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
                <Route path={"/projects"} exact />
                <Route path={"/:id"} exact component={Project} />
            </Switch>

        </Aux>
        )
    }
};

export default Layout;