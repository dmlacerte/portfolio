import React from 'react';
import '../App.css';
import styles from '../css/Skills.module.css';

function Skills({techStack, selectedTechStack, setSelectedTechStack}) {

    const updateTechStack= (tech) => {
        let newStack = [...selectedTechStack];
        newStack.push(tech);
        console.log(newStack);

        setSelectedTechStack(newStack);
    }
    
    return (
        <section id="skills" className="pageSection">
            <h1 className='sectionHeader'>
                Skills
            </h1>
            <p className='sectionSubHeader'>
                Select any of the technologies below to filter onto projects containing one or more of those technologies.
            </p>
            <div className={styles.categoryRow}>
                <p>Languages</p>
                <div className={styles.techRow}>
                    {techStack.languages.map(tech => (
                        <div
                            onClick={() => updateTechStack(tech)}
                            className={styles.techRowSpace}
                        >
                            <img 
                                className={styles.iconImgs}
                                src={'/techIcons/' + tech.toLowerCase().replace(/\s/g, '') + '.png'} 
                                alt={tech + ' logo'} />
                            <p>{tech}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.categoryRow}>
                <p>Libraries and Frameworks</p>
                <div className={styles.techRow}>
                    {techStack.libraries.map(tech => (
                        <div
                            onClick={() => updateTechStack(tech)}
                            className={styles.techRowSpace}
                        >
                            <img 
                                className={styles.iconImgs}
                                src={'/techIcons/' + tech.toLowerCase().replace(/\s/g, '') + '.png'} 
                                alt={tech + ' logo'} />
                            <p>{tech}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.categoryRow}>
                <p>Databases</p>
                <div className={styles.techRow}>
                    {techStack.databases.map(tech => (
                        <div
                            onClick={() => updateTechStack(tech)}
                            className={styles.techRowSpace}
                        >
                            <img 
                                className={styles.iconImgs}
                                src={'/techIcons/' + tech.toLowerCase().replace(/\s/g, '') + '.png'} 
                                alt={tech + ' logo'} />
                            <p>{tech}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.categoryRow}>
                <p>Other</p>
                <div className={styles.techRow}>
                    {techStack.other.map(tech => (
                        <div
                            onClick={() => updateTechStack(tech)}
                            className={styles.techRowSpace}
                        >
                            <img 
                                className={styles.iconImgs}
                                src={'/techIcons/' + tech.toLowerCase().replace(/\s/g, '') + '.png'} 
                                alt={tech + ' logo'} />
                            <p>{tech}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;