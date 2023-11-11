import React, { useContext } from 'react';
import "./About.css";
import { aboutContent } from "./aboutContent.js";
import { ProfileContext } from "../../context/profile-context.jsx";
import { Card, CardBody } from "react-bootstrap";

function About() {
	const { selectedLanguage, isDarkTheme } = useContext(ProfileContext);

	const selectedAboutContent = aboutContent.find(
		(content) => content.language === selectedLanguage
	);

	if (!selectedAboutContent) {
		return null;
	}

	const { greeting, body, quote } = selectedAboutContent.content;

	return (
		<div className={isDarkTheme ? "about aboutDark" : "about aboutLight"}>
			<h1>{greeting}</h1>
			<Card className={isDarkTheme ? "contentDark content text-center bg-dark text-light border-3 border-light" : "contentLight content text-center border-3 border-black bg-danger-subtle"}>
				<CardBody className=" d-flex flex-column align-items-center">
					<Card.Text>{body}</Card.Text>
					{quote && (
						<ul className="list-unstyled">
							{quote.map((line, index) => (
								<li key={index}>{line}</li>
							))}
						</ul>
					)}
				</CardBody>
			</Card>
		</div>
	);
}

export default About;
