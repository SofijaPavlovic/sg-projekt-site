import React from 'react';

import './AboutUs.css'

const AboutUs = (props) => {

    return (
        <div>
            <div className="ServicesLayout">
            <h2>Usluge</h2>
            <div className="BreakLine" />
                <div className="Services">
                    
                    <div>
                        <p>Projektovanje</p>
                    </div>
                    <div>
                        <p>Savetovanje</p>
                    </div>
                    <div>
                        <p>Legalizacija</p>
                    </div>
                    <div>
                        <p>Statika</p>
                    </div>
                    <div>
                        <p>Fundiranje</p>
                    </div>

                </div>
            </div>
            <div className="AboutUs">
                <h2>O nama</h2>
                <div className="BreakLine" />
                <p>
                    {props.text}
                </p>
            
            </div>
        </div>

    );
}

export default AboutUs;