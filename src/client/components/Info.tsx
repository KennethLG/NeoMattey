import React from "react";
import {FaFacebookSquare, FaTwitter, FaYoutube, FaInstagram} from "react-icons/fa";
import {Link} from "react-router-dom";

export const Info = () => {
	return (
		<div className="info">
			<div className="socials">
				<FaFacebookSquare className="socials-icon" size="32px"/>
				<FaTwitter className="socials-icon" size="32px"/>
				<FaYoutube className="socials-icon" size="32px"/>
				<FaInstagram className="socials-icon" size="32px"/>
			</div>
			<div className="info-text">
				<p>Webpage created by Orson Leiziaga, visit his github profile <a href="https://github.com/KennethLG" style={{textDecoration: "none", color:"rgba(0,200,200,1)"}}>here</a></p>
			</div>
		</div>
	)
}