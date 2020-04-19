import React, { Component } from 'react';
import Project from './Project/Project';
import classes from './Projects.module.css';

class Projects extends Component {
    render() {
        let projects = null;
        if (this.props.projects != null) {
            projects = Object.keys(this.props.projects).map((project, i) => {
                return (
                    <React.Fragment key={i}>
                        <Project
                            isSmallDevice={window.innerWidth < 800 ? true : false}
                            key={i}
                            index={i}
                            text={this.props.projects[project]['text']}
                            title={this.props.projects[project]['title']} />
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