import React from 'react';

import './AboutUs.css'

const AboutUs = (props) => {

    return (
        <div>
            <div className="ServicesLayout">
                <div className="Services">
                    <h3>Usluge</h3>
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
                <p>O nama</p>
                <div className="BreakLine" />
                <div>
                    {props.text}
                </div>
            
            </div>
        </div>

    );
}

export default AboutUs;