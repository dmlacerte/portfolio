import React from 'react';
import styles from '../css/Navbar.module.css';

function Navbar() {
    return (
        <div>
            <a href="#about">
                Deanna Lacerte
            </a>
            <a href="#skills">
                Skills
            </a>
            <a href="#projects">
                Past Work
            </a>
            <a href="#contact">
                Contact Me
            </a>
        </div>
    )
}

export default Navbar;