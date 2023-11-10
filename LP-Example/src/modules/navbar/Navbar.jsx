import React from 'react';
import {useContext} from "react";
import './Navbar.css';
import Icons from './icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function MyNavbar() {
    return (
        <header>
            <nav className="navbar">
                <ul className="icons-list">
                    {Icons.map((icon, index) => (
                        <li key={index}>
                            <a href={icon.url}>
                                <FontAwesomeIcon icon={icon.icon}/>
                            </a>
                        </li>
                    ))}
                </ul>
                <select id="mySelect">
                    <option value="EN" selected>EN</option>
                    <option value="ES">ES</option>
                    <option value="DE">DE</option>
                </select>
            </nav>
        </header>
    );
}

export default MyNavbar;

