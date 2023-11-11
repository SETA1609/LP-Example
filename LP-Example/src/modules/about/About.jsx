import React, {useContext} from 'react';
import "./About.css";
import {aboutContent} from "./aboutContent.js";
import {ProfileContext} from "../../context/profile-context.jsx";

function About() {
	const { selectedLanguage , isDarkTheme } = useContext(ProfileContext);

	const selectedAboutContent = aboutContent.find(
		(content) => content.language === selectedLanguage
	);

	if (!selectedAboutContent) {
		return null;
	}

	const { greeting, body, quote } = selectedAboutContent.content;

	return (
		<div className={isDarkTheme? "about aboutDark": "about aboutLight"}>
			<h1>{greeting}</h1>
			<div className={isDarkTheme? "contentDark content": "contentLight content"} >
				<p>{body}</p>
				{quote && (
					<ul>
						{quote.map((line, index) => (
							<li key={index}>{line}</li>
						))}
					</ul>
				)}
			</div>

		</div>
	);
}

export default About;
