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
                            title={this.props.projects[project]['title']}
                            imgSrc={this.props.projects[project]['imgSrc']} />
                        <div className={classes.BreakLine} />
                    </React.Fragment>
                )
            });
        }
        return (
            <div className={classes.Projects}>
                <h2>Projekti</h2>
                <div className={classes.BreakLine} />
                {projects}
            </div>

        );
    }
}

export default Projects;