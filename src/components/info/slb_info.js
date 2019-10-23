import React from 'react';

const SlbInfo = () => {
    return (
        <div className="box container">
            <p className="success-text">......................</p>
            <p><i><b>Super Lazy Boot</b></i></p>
            <p className="success-text">......................</p>
            <p><i>
                This tool i use to generate code for Java Spring Boot app. All you need to do is to specify model file, and tool will generate
                entities, dtos, controllers, services, imports, annotations... I'm planning in future to expand app to generate code for specific
                type of application, such as e-commerce as well generating online and downloading source code.
                 Code generator will be same, written in Python.
            </i></p>
            <img id="snake-img" className="rounded-img" src={require("../../assets/images/snake.gif")} alt="snake gif" />
            <p><br /><i>You can find <a href="https://github.com/ToStefan/Super-Lazy-Boot"
                target="_blank" rel="noopener noreferrer"><u>source code</u></a> on my github.</i></p>
        </div>
    );
};

export default SlbInfo;