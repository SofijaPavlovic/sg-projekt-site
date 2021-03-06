import React, { Component } from 'react';

import img1 from '../../assets/images/img_1.jpg';
import img2 from '../../assets/images/img_2.jpeg';
import img3 from '../../assets/images/img_3.jpg';

import './Carousel.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel
                infiniteLoop
                autoPlay
                showStatus={false}
                showThumbs={false}>
                <div>
                    <img src={img1} alt="img_1.jpg" />
                    <p className="legend legendCustom">Fundiranje</p>
                </div>
                <div>
                    <img src={img2} alt="img_1.jpg" />
                    <p className="legend">Savetovanje</p>
                </div>
                <div>
                    <img src={img3} alt="img_1.jpg" />
                    <p className="legend">Projektovanje</p>
                </div>
            </Carousel>
        );
    }
};


export default DemoCarousel;
