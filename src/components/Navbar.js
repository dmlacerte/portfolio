import React from 'react';
import styles from '../css/Navbar.module.css';

function Navbar() {
    return (
        <div className={styles.navBar}>
            <a href="#about" className={styles.title}>
                Deanna Lacerte
            </a>
            <a href="#skills" className={styles.section}>
                Skills
            </a>
            <a href="#projects" className={styles.section}>
                My Apps
            </a>
            <a href="#contact" className={styles.section}>
                Contact Me
            </a>
        </div>
    )
}

export default Navbar;