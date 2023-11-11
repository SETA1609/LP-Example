import React from 'react';
import {useContext} from "react";
import './Navbar.css';
import Icons from './icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {ProfileContext} from "../../context/profile-context.jsx";
import {Button, Container, Dropdown, Nav, Navbar} from "react-bootstrap";

function MyNavbar() {
    const { changeLanguage, changeTheme, isDarkTheme,selectedLanguage } = useContext(ProfileContext);

    const handleLanguageChange = (language) => {
        changeLanguage(language);
    };

    const handleThemeChange = ()=>{
        changeTheme();
    };

    return (

        <Navbar expand="lg" className={isDarkTheme ? 'navbar navbar-dark bg-dark myNavbar fixed-top ' : 'fixed-top myNavbar bg-secondary navbar navbar-light'}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {Icons.map((icon, index) => (
                            <Nav.Link key={index} href={icon.url}>
                                <FontAwesomeIcon icon={icon.icon} /> {icon.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
                    {
                        isDarkTheme?
                            ( <>
                                    <Dropdown onSelect={handleLanguageChange} >
                                <Dropdown.Toggle className="btn-dark border-light  "  id="dropdown-basic">
                                    {selectedLanguage}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="dropdown-menu dropdown-menu-dark">
                                    <Dropdown.Item eventKey="EN">EN</Dropdown.Item>
                                    <Dropdown.Item eventKey="ES">ES</Dropdown.Item>
                                    <Dropdown.Item eventKey="DE">DE</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                                <Button className="btn-dark border-light " onClick={handleThemeChange}>🌚</Button>
                            </>

                        ) :
                            <>
                                <Dropdown onSelect={handleLanguageChange} >
                                    <Dropdown.Toggle className=" btn-secondary border-dark"  id="dropdown-basic">
                                        {selectedLanguage}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-dark">
                                        <Dropdown.Item eventKey="EN">EN</Dropdown.Item>
                                        <Dropdown.Item eventKey="ES">ES</Dropdown.Item>
                                        <Dropdown.Item eventKey="DE">DE</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button className="btn-secondary border-dark" onClick={handleThemeChange}>🌝</Button>
                            </>

                    }


            </Container>
        </Navbar>
    );
}

export default MyNavbar;

