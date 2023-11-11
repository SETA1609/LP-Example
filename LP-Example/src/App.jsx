import React, {useContext} from "react";
import './App.css'
import MyNavbar from './modules/navbar/Navbar'
import About from './modules/about/About'
import Landing from './modules/landing/Landing'
import Footer from './modules/footer/Footer'
import Hobbies from './modules/hobbys/Hobbies.jsx'
import {ProfileContext, ProfileContextProvider} from './context/profile-context.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap'; // Import individual Bootstrap components as needed


function App() {

    const { isDarkTheme } = useContext(ProfileContext);

    return (
        <ProfileContextProvider>

            <Container className={isDarkTheme?"bg-dark container-fluid":"bg-light container-fluid"}>
                <Row>
                    < MyNavbar/>
                </Row>
                <Row>
                    < About/>
                </Row>
                <Row>
                    < Landing/>
                </Row>
                <Row>
                    < Hobbies/>
                </Row>
                <Row>
                    < Footer/>
                </Row>
            </Container>
        </ProfileContextProvider>
    )
}

export default App
