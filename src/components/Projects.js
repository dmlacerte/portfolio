import React, { useState } from 'react';
import '../App.css';
import styles from '../css/Projects.module.css';
import { projectData } from "../projectData";

function Projects() {
    const hovered = {};
    for (const project of projectData) {
        hovered[project.name] = false;
    }

    const [isHovered, setIsHovered] = useState(hovered);

    const toggle = (name) => {
        const newHover = {};

        for (const projects in isHovered) {
            newHover[projects] = isHovered[projects];
        }

        newHover[name] = !newHover[name];

        setIsHovered(newHover);
    }

    return (
        <section id="projects" className="pageSection">
            <div>
                <div>
                    <h1 className="sectionHeader">
                        My Apps
                    </h1>
                    <p className='sectionSubHeader'>
                        See below for a sample of my apps,
                        along with descriptions, an outline of technologies, and links to live versions and repos.
                    </p>
                </div>
                <div>
                    {projectData.map((project, index) => (
                        <div key={index}>
                            {isHovered[project.name]
                                ? null
                                : <img
                                    alt="gallery"
                                    src={project.img}
                                    onMouseEnter={() => toggle(project.name)}
                                    onMouseLeave={() => toggle(project.name)}
                                />
                            }
                            <div>
                                <h1>
                                    {project.name} True
                                </h1>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;