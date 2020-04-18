import React, {useEffect, useState} from 'react';

import './AboutUs.css'
import axios from 'axios';

const AboutUs = () => {
    let [text, setText] = useState(null);

    useEffect(() => {
        axios.get('https://sg-projekt-1cf54.firebaseio.com/about-us.json')
            .then((response) => {
                setText(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    },[]);


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
                    {text}
                </div>
            
            </div>
        </div>

    );
}

export default AboutUs;