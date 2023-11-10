import React, {useContext} from 'react';
import './Card.css';
import {ProfileContext} from "../../../context/profile-context.jsx";


function Card({ title, body }) {

	const {isDarkTheme}=useContext(ProfileContext);

	return (
		<div className={isDarkTheme?"myCardDark card" :"myCardLight card"}>
			<h1>{title}</h1>
			<p>{body}</p>
		</div>
	);
}

export default Card;
