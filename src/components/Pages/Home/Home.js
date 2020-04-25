import React from 'react';
import Carousel from '../../Carousel/Carousel';
import classes from './Home.module.css';
import Image from '../../../assets/images/building1.png';

const home = (props) => {

    let projects = null;

    if (props.projects) {
        projects = Object.keys(props.projects).map((project, index) => {
            if (index < 3) {
                return (
                    <div className={classes.Column} key={project}>
                        <img src={props.projects[project]['imgSrc']} alt="Project_image.jpg" />
                        <h3>{props.projects[project]['title']}</h3>
                        <p>{props.projects[project]['text']}</p>
                    </div>);
            }
            return null;
        });
    }
    return (
        <React.Fragment>
            <Carousel />
            <div className={classes.AboutUs}>
                <h2>O nama</h2>
                <div className={classes.BreakLine} />
                <div>
                    {props.text}
                </div>

            </div>

            <div className={classes.Row}>
                <h2>Projekti</h2>
                <div className={classes.BreakLine} />
            </div>
            <div className={classes.Row}>
                {projects}
            </div>
        </React.Fragment>
    );
};

export default home;