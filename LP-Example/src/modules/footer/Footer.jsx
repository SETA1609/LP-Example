import React, {useContext} from 'react';
import './Footer.css';
import {ProfileContext} from "../../context/profile-context.jsx";
import {Col, Row} from "react-bootstrap";


function Footer(){
	const { isDarkTheme } = useContext(ProfileContext);

return(


			<footer className={isDarkTheme?"bg-dark contentDark":"bg-secondary contentLight "}>
					<Row>
						<div className=" col-12 text-center">Made by Sebastian Tamayo</div>

						<div className=" col-12 text-center">@SETA1609</div>
					</Row>


			</footer>


)

}

export default Footer;
