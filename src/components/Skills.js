import React from 'react';
import '../App.css';
import styles from '../css/Skills.module.css';

function Skills({ techStack, selectedTechStack, setSelectedTechStack }) {

    const updateTechStack = (tech) => {
        let newStack = [...selectedTechStack];
        newStack.push(tech);

        setSelectedTechStack(newStack);
    }

    const techSpace = (tech, index) => {
        return (
            <div
                onClick={() => updateTechStack(tech)}
                className={styles.techRowSpace}
                key={index}
            >

                <img
                    className={selectedTechStack.includes(tech) ? styles.iconImgsSelected : styles.iconImgs}
                    src={'/techIcons/' + tech.toLowerCase().replace(/\s/g, '') + '.png'}
                    alt={tech + ' logo'} />

                <p>{tech}</p>
            </div>
        )
    }

    return (
        <section id="skills" className="pageSection">
            <h1 className='sectionHeader'>
                Skills
            </h1>
            <div>
                <p className={styles.categoryTitle}>Languages</p>
                <div className={styles.techRow}>
                    {techStack.languages.map((tech, index)=> techSpace(tech, index))}
                </div>
            </div>
            <div>
                <p className={styles.categoryTitle}>Libraries and Frameworks</p>
                <div className={styles.techRow}>
                    {techStack.libraries.map((tech, index) => techSpace(tech, index))}
                </div>
            </div>
            <div className={styles.multiCategoryRow}>
                <div>
                    <p className={styles.categoryTitle}>Databases</p>
                    <div className={styles.techRow}>
                        {techStack.databases.map((tech, index) => techSpace(tech, index))}
                    </div>
                </div>
                <div>
                    <p className={styles.categoryTitle}>Other</p>
                    <div className={styles.techRow}>
                        {techStack.other.map((tech, index) => techSpace(tech, index))}
                    </div>
                </div>
            </div>
            <p className={styles.subHeader + ' sectionSubHeader'}>
                Want to see more of any of the above? Click on each to filter the apps section!
            </p>
        </section>
    )
}

export default Skills;