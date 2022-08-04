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
                    <p className={styles.subHeader + ' sectionSubHeader'}>
                        A sample of my apps, along with descriptions, an outline of technologies used, and links to live versions and repos.
                    </p>
                </div>
                <div className={styles.projectsContainer}>
                    {projectData.map((project, index) => (
                        <div
                            key={index}
                            className={styles.projectContainer}
                        >
                            <p
                                className={styles.projectTitle}
                            >
                                {project.name}
                            </p>
                            <div
                                onMouseEnter={() => isHovered[project.name] ? null : toggle(project.name)}
                                onMouseLeave={() => toggle(project.name)}
                                className={styles.contentBox}
                            >
                                {isHovered[project.name]
                                    ?
                                    <div
                                        className={styles.projectDesc}
                                    >
                                        <p>{project.description}</p>
                                    </div>
                                    :
                                    <img
                                        alt={project.name + ' icon'}
                                        src={project.img}
                                        className={styles.projectImg}
                                    />
                                }
                            </div>
                            <div className={styles.projectIcons}>
                                {project.techUsed.map((tech, i) => (
                                    <div 
                                        key={i}
                                        className={styles.projectIcon}
                                    >
                                        <img
                                            alt={tech + ' icon'}
                                            src={'/techIcons/' + tech.toLowerCase().replace(/\s/g, '') + '.png'}
                                            className={styles.projectImg}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className={styles.projectLinks}>
                                {project.liveLink 
                                    ? 
                                    <>
                                        <a href={project.liveLink} target="_blank">Live App</a> 
                                        <p className={styles.linkDivider}>|</p>
                                    </>
                                    : null
                                }
                                {project.githubFrontEnd 
                                    ? <a href={project.githubFrontEnd} target="_blank">GitHub (Front)</a> 
                                    : null
                                }
                                {project.githubBackEnd 
                                ? 
                                <>
                                    <p className={styles.linkDivider}>|</p>
                                    <a href={project.githubBackEnd} target="_blank">GitHub (Back)</a> 
                                </> 
                                : null
                                }
                                {project.githubFullStack 
                                ? <a href={project.githubFullStack} target="_blank">GitHub (Full)</a> 
                                : null
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;