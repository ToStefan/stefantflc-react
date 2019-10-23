import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="box container">
            <p><u>Greetings</u></p>
            <p><i>My name is Stefan Tofilović and i'm currently looking for my first job.</i></p>
            <p><i>I have few months of experience as intern and i would like to work as fullstack java developer</i></p>
            <hr />
            <p><u>Contact me</u></p>
            <p><img src={require("../../assets/images/outlook-icon.png")} alt="outlook icon" /><i>tflc.stefan@hotmail.com</i></p>
            <p>
                <a href="https://t.me/Tstefan" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/images/telegram-icon.png")} alt="telegram icon" />
                </a>
                <img src={require("../../assets/images/viber-icon.png")} alt="viber icon" />
                <img src={require("../../assets/images/whatsapp-icon.png")} alt="whatsapp icon" />
                <i>+381616949453</i>
            </p>
            <p>
                <img src={require("../../assets/images/hubspot-icon.png")} alt="hubspot icon" />
                <Link to="/hubspot-form">HubSpot Form</Link>
            </p>
            <p>
                path to my <a href="https://github.com/ToStefan" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/images/github-logo.png")} alt="github logo" />
                </a> and <a href="https://www.linkedin.com/in/tflc-stefan/" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/images/linkedin-logo.png")} alt="linkedin logo" />
                </a>
            </p>
        </div>
    );
};

export default Contact;