import React, { useContext } from 'react';
import './Landing.css';
import { landingContent } from './landingContent.js';
import { Col, Container, Row } from 'react-bootstrap';
import { ProfileContext } from '../../context/profile-context.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function Landing() {
    const content = landingContent;
    const { selectedLanguage, isDarkTheme } = useContext(ProfileContext);

    const selectedContent = content.find((content) => content.language === selectedLanguage);

    if (!selectedContent) {
        return null;
    }

    const contentToDisplay = selectedContent.content;

    return (
        <Container className="landing">
            <Row>
                <Col>
                    {contentToDisplay.p.map((paragraph, index) => (
                        <p key={index} className={isDarkTheme ? 'alert' : 'is-invalid'}>
                            {paragraph}
                        </p>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}

export default Landing;
