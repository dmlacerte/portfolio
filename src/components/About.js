import React from 'react';
import '../App.css';
import styles from '../css/About.module.css';

function About() {
    return (
        <section id="about" className="pageSection">
            <div className={styles.aboutContainer}>
                <div className={styles.descriptionContainer}>
                    <h1 className={styles.header}>
                        Hi, I'm Deanna!
                    </h1>
                    <h2 className={styles.subHeader}>
                        Former controls auditor turned full stack developer.
                    </h2>
                    <p>
                    I'm a self-motivated software developer from Boston, MA who enjoys solving challenging, detail-oriented problems. 
                    My 5+ years of experience as a risk & controls auditor of Fortune 500 companies enables me to approach complicated projects in a thoughtful and organized way, 
                    and be able to adjust to changes quickly but with directed purpose. 
                    After completing my Software Engineering Immersive certificate from General Assembly, 
                    I'm now looking for opportunities as a full stack or front end developer. 
                    </p>
                </div>
                <div className={styles.imgContainer}>
                    <img src='/me.jpeg' alt='picture of myself' className={styles.myPic}/>
                </div>
            </div>
        </section>
    )
}

export default About;