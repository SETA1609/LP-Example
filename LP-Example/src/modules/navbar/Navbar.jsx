import React from 'react';
import {useContext} from "react";
import './Navbar.css';
import Icons from './icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {ProfileContext} from "../../context/profile-context.jsx";

function MyNavbar() {
    const { changeLanguage, changeTheme, isDarkTheme } = useContext(ProfileContext);

    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        changeLanguage(selectedLanguage);
    };

    const handleThemeChange = ()=>{
        changeTheme();
    };

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
                <select id="mySelect" onChange={handleLanguageChange}>
                    <option value="EN">EN</option>
                    <option value="ES">ES</option>
                    <option value="DE">DE</option>
                </select>
                <label >
                    <input type="checkbox" checked={isDarkTheme} onChange={handleThemeChange} />
                    <span ></span>
                </label>
            </nav>
        </header>
    );
}

export default MyNavbar;

