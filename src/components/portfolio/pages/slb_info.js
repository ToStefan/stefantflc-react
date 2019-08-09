import React from 'react';

const SlbInfo = () => {
    return (
        <div className="box container">
            <p><i>.....................</i></p>
            <p><i><b>Super Lazy Boot</b></i></p>
            <p><i>.....................</i></p>
            <p><i>
                This tool is used to generate controllers, services, mappers, annotations, imports, entities, dtos and much more for spring boot application.
                You just need to specify model file with classes and settings. I'm planning in future web platform which will used to create model file,
		        but core generator will be the same, written in Python. Front-end will be in React.
            </i></p>
            <img id="snake-img" className="rounded-img" src={require("./../../../assets/images/snake.gif")} alt="snake gif" />
            <p><i>You can find <a href="https://github.com/ToStefan/Super-Lazy-Boot"
                target="_blank" rel="noopener noreferrer"><u>source code</u></a> on my github.</i></p>
        </div>
    );
};

export default SlbInfo;