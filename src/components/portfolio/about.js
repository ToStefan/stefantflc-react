import React from 'react';

const About = () => {
    return (
        <div className="box container">
            <p><b><u>Education</u></b></p>
            <p><i>Faculty of Technical Sciences, Software and information technology (few more exams to graduate)</i></p>
            <hr />
            <p><b><u>Experience</u></b></p>
            <a href="http://www.hybrid-it.rs/" target="_blank" rel="noopener noreferrer">
                <img className="roundedImg" src={require("./../../assets/images/hybrid-logo.png")} alt="hybrid it logo" />
            </a>
            <p><i><b>Hybrid IT Solutions</b> - One month internship as Java backend developer</i></p>
            <p><i>
                In 3 weeks i developed in Java
                (spring boot and spring security frameworks) <a href="https://github.com/ToStefan/hybrid-it-lib" target="_blank" rel="noopener noreferrer">
                    <u>project</u>
                </a> with help of mentors which was Hybrid IT best practices. Afterwards 2 weeks remote developing also in
                Spring <a href="https://github.com/ToStefan/hybrid-it-jobs-market" target="_blank" rel="noopener noreferrer">
                    <u>use case</u></a> with <a href="https://jobs.github.com/api" target="_blank" rel="noopener noreferrer">
                    <u>GitHub Jobs API</u></a> and <a href="https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete" 
                    target="_blank" rel="noopener noreferrer">
                    <u>Google Place Autocomplete API</u>
                </a>.
                Also, writing unit and integration tests, played with swagger, lombok, logging and little bit with docker.
		</i></p>
            <a href="https://www.apexsql.com/" target="_blank" rel="noopener noreferrer">
                <img className="roundedImg" src={require("./../../assets/images/apexsql-logo.png")} alt="apexsql logo" />
            </a>
            <p><i><b>ApexSQL</b> - Two month paid intership as fullstack .NET developer</i></p>
            <p><i>
                My job was developing feature on ApexSQL Monitor - <a href="https://www.apexsql.com/sql-tools-monitor.aspx" 
                target="_blank" rel="noopener noreferrer"><u>SQL monitoring tool</u></a> with another intern in Novi Sad office. 
                We worked with .NET technologies, AngularJS, Kendo grid, bootstrap, html, css.
                We were communicate with 6 other interns (Belgrade and Niš office), fixing bugs and doing each other code review.
		</i></p>
            <hr />
            <p><b><u>Technology stack</u></b></p>
            <p><i>
                My main focus is backend development in java technologies, i'm familiar with spring boot framework, servlets, rest services but also
		        i'm currently learning React/Angular frameworks and going deeply into javascript. In near future i would like to work more with Python.
             </i></p>
        </div>
    );
};

export default About;