import React from 'react';
import './Card.css';

function Card({ Title, body }) {
	return (
		<div>
			<h1>{Title}</h1>
			{body}
		</div>
	);
}

export default Card;
