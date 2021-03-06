import React from 'react';
import classes from './Project.module.css'
import Aux from '../../../../hoc/Auxilary';

const project = (props) => {
    const isOdd = (index) => {
        return (index % 2) ? true : false;
    }

    const getProject = () =>{
        if (isOdd(props.index) & !props.isSmallDevice) {
            return (
                <Aux>
                    {img}
                    {text}
                </Aux>
            );
        } else {
            return (
                <Aux>
                    {text}
                    {img}
                </Aux>
            );
        }
    }

    const text = (
        <div className={classes.ProjectText}>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>);

    const img = (
        <div className={classes.ProjectImage}>
            <img  src={props.imgSrc} alt={props.imgSrc} />
        </div>
    );

    let project = getProject();

    return (
        <div className={classes.Project}>
            {project}
        </div>

    );
};

export default project;