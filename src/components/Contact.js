import React, { useState } from 'react';
import '../App.css';
import styles from '../css/Contact.module.css';
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

function Contact() {
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
        <section id="contact" className={styles.contactContainer + ' pageSection'}>
            <AnimationOnScroll animateIn="animate__fadeInDown">
                <h1 className='sectionHeader'>
                    Contact Me
                </h1>
                <p className={styles.subHeader + ' sectionSubHeader'}>
                    Have any questions or want to work together? Let's get in touch!
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
                        href='mailto:dmlacerte@gmail.com'
                        target="_blank" className={styles.rightLink}
                        onMouseEnter={() => toggleOn('email')}
                        onMouseLeave={() => toggleOff()}
                    >
                        <div className={styles.linkContainer}>
                            {isHovered['email']
                                ? <img src='/socialIcons/mailBlack.png' alt='email logo' className={styles.socialIcon} />
                                : <img src='/socialIcons/mailWhite.png' alt='email logo' className={styles.socialIcon} />
                            }
                            <p>Email</p>
                        </div>
                    </a>
                </div>
            </AnimationOnScroll>
        </section>
    )
}

export default Contact;