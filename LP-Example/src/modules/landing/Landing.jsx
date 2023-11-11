import React, { useContext } from 'react';
import './Landing.css';
import { landingContent } from './landingContent.js';
import {Card, CardText, Col, Container, Row} from 'react-bootstrap';
import { ProfileContext } from '../../context/profile-context.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto from './foto.png';

function Landing() {
    const content = landingContent;
    const { selectedLanguage, isDarkTheme } = useContext(ProfileContext);

    const selectedContent = content.find((content) => content.language === selectedLanguage);

    if (!selectedContent) {
        return null;
    }

    const contentToDisplay = selectedContent.content;

    const fotoStyle={
        width:"180px",
        height:"150px",
        borderRadius:"100%",
    };

    return (
        <Container
            className={
                isDarkTheme
                    ? 'landing bg-primary contentDark d-flex flex-column align-items-center justify-content-center'
                    : 'landing bg-danger-subtle contentLight d-flex flex-column align-items-center justify-content-center text-bg-light'
            }
        >
            <Row>
                <Col>
                    <img src={foto} alt="my foto" style={fotoStyle} className={isDarkTheme? "border-success border-3":"border-black border-3"} />
                </Col>
            </Row>
            <Row>

            </Row>
            <Row className="mb-4">
                {contentToDisplay.p.map((paragraph, index) => (
                    <p key={index} className={isDarkTheme ? ' text-center' : ' text-center'}>
                        {paragraph}
                    </p>
                ))}
            </Row>
        </Container>
    );
}

export default Landing;
