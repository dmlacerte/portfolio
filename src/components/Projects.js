import React, { useState, useEffect } from 'react';
import '../App.css';
import styles from '../css/Projects.module.css';
import { projectData } from "../projectData";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

function Projects({ selectedTechStack, setSelectedTechStack }) {

    const hovered = {};

    const [isHovered, setIsHovered] = useState(hovered);
    const [filteredProjects, setFilteredProjects] = useState(projectData);

    const toggleOn = (name) => {
        const newHover = {};
        newHover[name] = true;
        setIsHovered(newHover);
    }

    const toggleOff = () => {
        setIsHovered({});
    }

    const testFilter = (project) => {
        for (const i in selectedTechStack) {
            const projectUsesTech = project.techUsed.includes(selectedTechStack[i]);
            const projectIncludesOther = project.otherTechUsed.includes(selectedTechStack[i]);

            if (projectUsesTech || projectIncludesOther) {
                return true;
            }
        }

        return false;
    }

    useEffect(() => {
        let projects = [];

        if (selectedTechStack.length > 0) {
            for (const i in projectData) {
                if (testFilter(projectData[i])) {
                    projects.push(projectData[i]);
                }
            }
        } else {
            projects = [...projectData];
        }

        setFilteredProjects(projects);

    }, [selectedTechStack])

    return (
        <section id="projects" className="pageSection">
            <AnimationOnScroll animateIn="animate__fadeInDown">
                <div>
                    <h1 className="sectionHeader">
                        My Apps
                    </h1>
                    {selectedTechStack.length > 0
                        ? <p className={styles.subHeader + ' sectionSubHeader'}>
                            {`Currently filtered onto apps that include at least one of the following skills: ${selectedTechStack.join(', ')}. `}
                            <br /> <br />
                            <span onClick={() => setSelectedTechStack([])} className={styles.resetButton}>Reset</span> to view all applications.
                        </p>
                        : null
                    }
                </div>
                <div className={styles.projectsContainer}>
                    {filteredProjects.map((project, index) => (
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
                                onMouseEnter={() => toggleOn(project.name)}
                                onMouseLeave={() => toggleOff()}
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
            </AnimationOnScroll>
        </section>
    )
}

export default Projects;