import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { API_URL } from '../../../config';

class Home extends Component {

    pushClientDetails(data) {

        let client = JSON.stringify({
            userAgent: navigator.userAgent,
            location: data.loc,
            region: data.region,
            country: data.country,
            city: data.city,
            ip: data.ip
        })

        axios.post(`${API_URL}/client-details`, client, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    componentDidMount() {
        axios.get(`https://ipinfo.io?token=0967b2ba8c74d7`)
            .then(res => {
                this.pushClientDetails(res.data);
            })
    }

    render() {
        return (
            <div className="box container">
                <p><i><u>Greetings!</u></i></p>
                <p><i>My name is Stefan Tofilović and i'm currently looking for my first job.</i></p>
                <p><i>I have few months of experience as intern in two company.</i></p>
                <p><i>Check out <b><Link to="more-about-me">More about me</Link></b> page to know more about me.</i></p>
                <hr />
                <p><b>Contact me?</b></p>
                <p><img src={require("./../../../assets/images/outlook-icon.png")} alt="outlook icon" /><i>tflc.stefan@hotmail.com</i></p>
                <p>
                    <a href="https://t.me/Tstefan" target="_blank" rel="noopener noreferrer">
                        <img src={require("./../../../assets/images/telegram-icon.png")} alt="telegram icon" />
                    </a>
                    <img src={require("./../../../assets/images/viber-icon.png")} alt="viber icon" />
                    <img src={require("./../../../assets/images/whatsapp-icon.png")} alt="whatsapp icon" />
                    <i>+381616949453</i>
                </p>
                <p>
                    <i>Path to my</i> <a href="https://github.com/ToStefan" target="_blank" rel="noopener noreferrer">
                        <img src={require("./../../../assets/images/github-logo.png")} alt="github logo" />
                    </a> <i>and</i> <a href="https://www.linkedin.com/in/tflc-stefan/" target="_blank" rel="noopener noreferrer">
                        <img src={require("./../../../assets/images/linkedin-logo.png")} alt="linkedin logo" />
                    </a>
                    <i>.</i>
                </p>
            </div>
        );
    }
}

export default Home;