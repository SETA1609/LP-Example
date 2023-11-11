import React, { useContext } from 'react';
import './Hobbies.css';
import hobbiesContent from './hobbiesContent';

import { ProfileContext } from '../../context/profile-context';
import { Card, Col, Container, Row } from 'react-bootstrap';

function Hobbies() {
    const content = hobbiesContent;
    const { selectedLanguage, isDarkTheme } = useContext(ProfileContext);

    const selectedHobby = content.find((hobby) => hobby.language === selectedLanguage);

    if (!selectedHobby) {
        return null;
    }

    const hobbyContent = selectedHobby.content;

    return (
        <Container className={`Hobbies ${isDarkTheme ? 'bg-secondary ' : 'bg-warning'}  `}>
            <Row xs={1} md={2} className="g-4">
                {hobbyContent.map((item, index) => (
                    <Col key={index} className="mb-4 ">
                        <Card className={`h-100 border-3 ${isDarkTheme ? 'bg-success-subtle border-success ' : 'bg-danger-subtle border-black'} mt-md-5`}>
                            <Card.Body className=" d-flex flex-column align-items-center">
                                <Card.Title className={`text-center ${isDarkTheme?'text-primary':'text-dark'} mt-3`}>{item.title}</Card.Title>

                                <Card.Text className={`text-center ${isDarkTheme?'text-primary':'text-dark'}`}>{item.body}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Hobbies;
