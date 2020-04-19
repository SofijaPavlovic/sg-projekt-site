import React from 'react';
import Carousel from '../../Carousel/Carousel';
import classes from './Home.module.css';
import Image from '../../../assets/images/building1.png';

const home = (props) => {
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
                <div className={classes.Column}>
                    <img src={Image} alt="Project1" />
                    <h3>Hala u Suboticu</h3>
                    <p>Ovde ide neki tekst o projektu. Askhfdij sjf sj shfak sjhla hs dalnf. Hala se sastoji fidn ddmkf sldjdl.</p>
                </div>
                <div className={classes.Column}>
                    <img src={Image} alt="Project1" />
                    <h3>Hata Velika 1</h3>
                    <p>Ovde ide neki tekst o projektu. Askhfdij sjf sj shfak sjhla hs dalnf. Hala se sastoji fidn ddmkf sldjdl.</p>
                </div>
                <div className={classes.Column}>
                    <img src={Image} alt="Project1" />
                    <h3>Projekat objekta 3</h3>
                    <p>Ovde ide neki tekst o projektu. Askhfdij sjf sj shfak sjhla hs dalnf. Hala se sastoji fidn ddmkf sldjdl.</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default home;