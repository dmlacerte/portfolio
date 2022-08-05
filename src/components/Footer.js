import React from 'react';
import styles from '../css/Footer.module.css';

function Footer() {

    return (
        <div className={styles.footerBar}>
            <p>© Deanna Lacerte 2022</p>
            <div>
                <a
                    href='https://www.linkedin.com/in/deanna-lacerte/'
                    target="_blank"
                >
                    <img src='/socialIcons/linkedinBlack.png' alt='linkedin logo' />
                </a>
                <a
                    href='https://github.com/dmlacerte'
                    target="_blank"
                >
                    <img src='/socialIcons/githubWhite.png' alt='github logo' />
                </a>
            </div>
        </div>
    )
}

export default Footer;