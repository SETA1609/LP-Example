import React from 'react';
import './Card.css';

function Card(props){
	
	return(
		<div>
			<h1>{props.Title}</h1>
		<p>{props.body}</p>
		</div>
	)
}

export default Card;
