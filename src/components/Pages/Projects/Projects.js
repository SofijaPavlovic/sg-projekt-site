import React, { Component } from 'react';
import Project from './Project/Project';
import classes from './Projects.module.css';
import axios from 'axios';

class Projects extends Component {
    state = {
        projects: null
    };

    componentDidMount() {
        axios.get('https://sg-projekt-1cf54.firebaseio.com/projects.json')
            .then((response) => {
                this.setState({ projects: response.data })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        let projects = null;
        if (this.state.projects != null) {
            projects = Object.keys(this.state.projects).map((project, i) => {
                return (
                    <React.Fragment>
                        <Project
                            isSmallDevice={window.innerWidth < 800 ? true : false}
                            key={i}
                            index={i}
                            text={this.state.projects[project]['text']}
                            title={this.state.projects[project]['title']} />
                    </React.Fragment>
                )
            });
        }
        return (
            <div className={classes.Projects}>
                {projects}
            </div>

        );
    }
}

export default Projects;