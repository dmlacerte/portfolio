import React from 'react';
import { projectData } from "../projectData";

function Projects() {
    return (
        <section id="projects" >
            <div>
                <div>
                    <h1>
                        My Apps
                    </h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                        facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                        fuga dolore.
                    </p>
                </div>
                <div>
                    {projectData.map((project) => (
                        <a
                            // href={project.link}
                            // key={project.img}
                        >
                            <div>
                                <img
                                    alt="gallery"
                                    src={project.img}
                                />
                                <div>
                                    <h1>
                                        {project.name}
                                    </h1>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;