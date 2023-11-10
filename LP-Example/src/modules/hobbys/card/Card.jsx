import React from 'react';
import './Card.css';

function Card({ title, body }) {
	return (
		<div>
			<h1>{title}</h1>
			<p>{body}</p>
		</div>
	);
}

export default Card;
