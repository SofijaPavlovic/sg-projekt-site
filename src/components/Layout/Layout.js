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
import axios from 'axios';

class Layout extends Component {
    state = {
        showSideDrawer: false,
        contactInfo: null,
        textAboutUs: null,
        projects: null
    }

    componentDidMount() {
        axios.get('https://sg-projekt-1cf54.firebaseio.com/contact.json')
            .then(response => {
                let contactInfo = {
                    phone: response.data.phone.split(','),
                    address: response.data.address.split(','),
                    work: response.data.work.split(','),
                    email: response.data.email.split(',')
                }
                this.setState({ contactInfo: contactInfo });
            })
            .catch(error => {
                console.log(error);
            });
        axios.get('https://sg-projekt-1cf54.firebaseio.com/about-us.json')
            .then((response) => {
                this.setState({ textAboutUs: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
        axios.get('https://sg-projekt-1cf54.firebaseio.com/projects.json')
            .then((response) => {
                this.setState({ projects: response.data })
            })
            .catch((error) => {
                console.log(error);
            });

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
                closed={this.sideDrawerClosedHandler}
                info={this.state.contactInfo} />
            <main className="Content">
                {this.props.children}
            </main>
            <Switch>
                <Route path={"/"} exact render={() => <Home text={this.state.textAboutUs} projects={this.state.projects}/>} />
                <Route path={"/onama"} exact render={() => <AboutUs text={this.state.textAboutUs} />} />
                <Route path={"/projekti"} exact render={() => <Projects projects={this.state.projects} />} />
                <Route path={"/kontakt"} exact render={() => <Contact info={this.state.contactInfo} />} />
            </Switch>
            <Footer info={this.state.contactInfo}/>
        </Aux>
        )
    }
};

export default Layout;