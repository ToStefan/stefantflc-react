import React from 'react';

const About = () => {
    return (
        <div className="box container">
            <p><b><u>Education</u></b></p>
            <p><i>Faculty of Technical Sciences, Software and information technology</i></p>
            <hr />
            <p><b><u>Experience</u></b></p>
            <a href="http://www.hybrid-it.rs/" target="_blank" rel="noopener noreferrer">
                <img className="rounded-img" src={require("./../../../assets/images/hybrid-logo.png")} alt="Hybrid IT logo" />
            </a>
            <p><i><b>Hybrid IT Solutions</b> - One month internship as Java backend developer (05/2019 - 06/2019)</i></p>
            <p><i>
                In 3 weeks i developed Java
                (spring boot and spring security frameworks) <a href="https://github.com/ToStefan/hybrid-it-lib" target="_blank" rel="noopener noreferrer">
                    <u>project</u>
                </a> with help of mentors which was Hybrid IT best practices. Afterwards 2 weeks remote developing
                <a href="https://github.com/ToStefan/hybrid-it-jobs-market" target="_blank" rel="noopener noreferrer"> <u>use case</u>
                </a> with <a href="https://jobs.github.com/api" target="_blank" rel="noopener noreferrer">
                    <u>GitHub Jobs API</u></a> and <a href="https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete"
                        target="_blank" rel="noopener noreferrer">
                    <u>Google Place Autocomplete API</u>
                </a>.
		    </i></p><br />
            <a href="https://www.apexsql.com/" target="_blank" rel="noopener noreferrer">
                <img className="rounded-img" src={require("./../../../assets/images/apexsql-logo.png")} alt="ApexSQL logo" />
            </a>
            <p><i><b>ApexSQL</b> - Two month paid intership as fullstack .NET developer (06/2017 - 08/2017)</i></p>
            <p><i>My job was developing feature on <a href="https://www.apexsql.com/sql-tools-monitor.aspx"
                target="_blank" rel="noopener noreferrer"><u>ApexSQL Monitor</u></a> - SQL monitoring tool with another intern in Novi Sad office.
                We worked with .NET technologies, AngularJS, Kendo grid, bootstrap, html, css.
                We were communicate with 6 other interns (Belgrade and Niš office), fixing bugs and doing each other code review.
		    </i></p>
            <hr />
            <p><b><u>Me</u></b></p>
            <p><i>
                I like to try everything and see if its fits to me but my main focus now is fullstack development in java and javascript.
                I'm familiar with spring boot, hibernate, servlets, rest services, react, sql, nosql...
                In near future i would like to work with it systems that need high level of security also i want to go into data engineering.
             </i></p>
            <hr />
            <p><b><u>Stefantflc.me</u></b></p>
            Under the app is MySQL, storing users and client details - (ipinfo.io api scrap client ip, city,country, location, user agent...)
            The whole app is hosted on Heroku, but there is RethinkDB (push json to app in realtime) deployed on DigitalOcean droplet which is used for chat.
            Backend is written in Java 8 and Spring Boot framework, for security i'm using Spring security and JWT.
            Frontend is written in React, also i'm using Redux for state management.
        </div>
    );
};

export default About;