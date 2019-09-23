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
            <p><i><b>Hybrid IT Solutions</b> - One month internship as Java backend developer (20/05/2019 - 07/06/2019)</i></p>
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
            <p><i><b>ApexSQL</b> - Two month paid intership as fullstack .NET developer (19/06/2017 - 18/08/2017)</i></p>
            <p><i>
                My job was developing feature on <a href="https://www.apexsql.com/sql-tools-monitor.aspx"
                    target="_blank" rel="noopener noreferrer"><u>ApexSQL Monitor</u></a> - SQL monitoring tool with another intern in Novi Sad office.
                We worked with .NET technologies, AngularJS, Kendo grid, bootstrap, html, css.
                We were communicate with 6 other interns (Belgrade and Niš office), fixing bugs and doing each other code review.
		    </i></p> <br />
            <a href="http://www.tiacgroup.com/" target="_blank" rel="noopener noreferrer">
                <img className="rounded-img" src={require("./../../../assets/images/tiac-logo.png")} alt="Tiac logo" />
            </a>
            <p><i><b>Tiac Group</b> - Go4Code (02/09/2019 - 20/09/2019)</i></p>
            <p><i>
                During first and second week 15 of us who were learning Spring and Angular framework.
                Third week was planed for <a href="https://www.misystemsgroup.com/sr/karijera/postani-deo-tima/go4code/"
                    target="_blank" rel="noopener noreferrer"><u>Hackaton</u></a>, where we are splited into 3 teams.
                 We had 30 hours to finish the task, and then present it last day. My team won the hackaton.
            </i></p>
            <hr />
            <p><b><u>Workstation technology stack</u></b></p>
            <p><i>
                Under the app is MySQL, storing users and client details - (<a href="https://ipinfo.io/json" target="_blank" rel="noopener noreferrer">
                    <u>ipinfo.io</u></a> scrap ip data and js get client clicks) The whole app is hosted on Heroku,
                but there is <a href="https://rethinkdb.com/" target="_blank" rel="noopener noreferrer"><u>RethinkDB</u></a> (push json in realtime)
                deployed on DigitalOcean droplet which i use for chat. Backend is written in Java 8 and Spring Boot framework,
                for security i'm using Spring Security and JWT. Frontend is written in React, also i'm using Redux for state management.
            </i></p>
        </div>
    );
};

export default About;