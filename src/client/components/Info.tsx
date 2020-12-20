import React from "react";
import {FaFacebookSquare, FaTwitter, FaYoutube, FaInstagram} from "react-icons/fa";
import {Link} from "react-router-dom";

export const Info = () => {
	return (
		<div className="info">
			<div className="socials">
				<a style={{color: "black"}} href="https://www.facebook.com/daniel.mattey.1"><FaFacebookSquare className="socials-icon" size="32px"/></a>
				<a style={{color: "black"}} href="https://twitter.com/DanielMattey2"><FaTwitter className="socials-icon" size="32px"/></a>
				<a style={{color: "black"}} href="https://www.youtube.com/channel/UCn1iGmbIcNliYZyN25cRSjg"><FaYoutube className="socials-icon" size="32px"/></a>
				<a style={{color: "black"}} href="https://www.instagram.com/thumattey_22/"><FaInstagram className="socials-icon" size="32px"/></a>
			</div>
			<div className="info-text">
				<p>danielmatteygonzalez@gmail.com</p>
				<p>Webpage created by Orson Leiziaga, visit his github profile <a href="https://github.com/KennethLG" style={{textDecoration: "none", color:"rgba(0,200,200,1)"}}>here</a></p>
			</div>
		</div>
	)
}