import React from 'react';
import styles from '../css/Navbar.module.css';

function Navbar() {
    
    const handleClick = (ev) => {
        ev.preventDefault();

        const target = ev.target.getAttribute('href');
        const location = document.querySelector(target).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 100
        })
    }
    
    return (
        <div className={styles.navBar}>
            <a href="#about" className={styles.title} onClick={handleClick}>
                Deanna Lacerte
            </a>
            <a href="#skills" className={styles.section} onClick={handleClick}>
                Skills
            </a>
            <a href="#projects" className={styles.section} onClick={handleClick}>
                My Apps
            </a>
            <a href="#contact" className={styles.section} onClick={handleClick}>
                Contact Me
            </a>
        </div>
    )
}

export default Navbar;