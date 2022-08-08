import React from 'react';
import styles from '../css/Navbar.module.css';

function Navbar() {

    const handleClick = (ev) => {
        ev.preventDefault();

        const target = ev.target.getAttribute('href');
        const location = document.querySelector(target).offsetTop;
        console.log(document.querySelector(target).offsetParent);
        console.log(location);

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
            <div className={styles.section}>
                <a href="#skills" onClick={handleClick}>
                    Skills
                </a>
                <a href="#projects" onClick={handleClick}>
                    My Apps
                </a>
                <a href="#contact" onClick={handleClick}>
                    Contact Me
                </a>
            </div>
        </div>
    )
}

export default Navbar;