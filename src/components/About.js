import React, { useState } from 'react';
import '../App.css';
import styles from '../css/About.module.css';
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

function About() {
    const hovered = {};

    const [isHovered, setIsHovered] = useState(hovered);

    const toggleOn = (name) => {
        const newHover = {};
        newHover[name] = true;
        setIsHovered(newHover);
    }

    const toggleOff = () => {
        setIsHovered({});
    }

    return (

        <section id="about" className="pageSection">
            <AnimationOnScroll animateIn="animate__fadeInDown">
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
                        <div className={styles.contactLinksContainer}>
                            <a
                                href='https://www.linkedin.com/in/deanna-lacerte/'
                                target="_blank"
                                onMouseEnter={() => toggleOn('linkedin')}
                                onMouseLeave={() => toggleOff()}
                            >
                                <div className={styles.linkContainer}>
                                    {isHovered['linkedin']
                                        ? <img src='/socialIcons/linkedinBlack.png' alt='linkedin logo' className={styles.socialIcon} />
                                        : <img src='/socialIcons/linkedinWhite.png' alt='linkedin logo' className={styles.socialIcon} />
                                    }
                                    <p>LinkedIn</p>
                                </div>
                            </a>
                            <a
                                href='https://github.com/dmlacerte'
                                target="_blank" className={styles.rightLink}
                                onMouseEnter={() => toggleOn('github')}
                                onMouseLeave={() => toggleOff()}
                            >
                                <div className={styles.linkContainer}>
                                    {isHovered['github']
                                        ? <img src='/socialIcons/githubBlack.png' alt='github logo' className={styles.socialIcon} />
                                        : <img src='/socialIcons/githubWhite.png' alt='github logo' className={styles.socialIcon} />
                                    }
                                    <p>GitHub</p>
                                </div>
                            </a>
                            <a
                                href='/Deanna_Lacerte_Resume.pdf'
                                target="_blank" className={styles.rightLink}
                                onMouseEnter={() => toggleOn('resume')}
                                onMouseLeave={() => toggleOff()}
                                download
                            >
                                <div className={styles.linkContainer}>
                                    {isHovered['resume']
                                        ? <img src='/socialIcons/resumeBlack.png' alt='resume icon' className={styles.socialIcon} />
                                        : <img src='/socialIcons/resumeWhite.png' alt='resume icon' className={styles.socialIcon} />
                                    }
                                    <p>Resume</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={styles.imgContainer}>
                        <img src='/me.jpeg' alt='picture of myself' className={styles.myPic} />
                    </div>
                </div>
            </AnimationOnScroll>
        </section>

    )
}

export default About;