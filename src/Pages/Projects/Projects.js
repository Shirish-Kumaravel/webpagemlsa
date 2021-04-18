import React from 'react';
import './Projects.css';

const Projects = () => {

    return(
        <div>
            <h1 className="header">Projects</h1>
            <p className="projectbox"><i class="fas fa-arrow-right"></i>Just starting out, many to come.</p>
            <p className="projectbox"><i class="fas fa-arrow-right"></i>However, Here's a link to my GitHub profile.</p>
            <div className='gitcomponent'><a target="_blank" rel="noopener noreferrer" href="https://github.com/Shirish-Kumaravel" class="fab fa-3x fa-github"></a></div>
        </div>
    );


};
export default Projects;