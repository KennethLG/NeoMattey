import React from "react";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";

const SIZE: string = "32px";

export const Navbar: any = () => {

	const toggleNav = () => {
		if (document.getElementById("mySidebar").style.width === "250px") {
			document.getElementById("mySidebar").style.width = "0px";
		} else document.getElementById("mySidebar").style.width = "250px";
	}

	return (
		<div>
			<div id="mySidebar" className="sidebar">
				<a className="closebtn" onClick={toggleNav}>×</a>
				<Link className="sidebar-item" to="/" onClick={toggleNav}>Home</Link>
				<Link className="sidebar-item" to="/videos" onClick={toggleNav}>Videos</Link>
				<a href="https://www.youtube.com/channel/UCn1iGmbIcNliYZyN25cRSjg" className="sidebar-item" onClick={toggleNav}>Subscribe</a>
				<Link className="sidebar-item" to="/about" onClick={toggleNav}>About</Link>
			</div>
			<div className="navbar">
				<Link to="/" className="navbar-link-home"><strong>NeoMattey</strong></Link>
				<Link to="/about" className="navbar-link">About</Link>
				<a href="https://www.youtube.com/channel/UCn1iGmbIcNliYZyN25cRSjg" className="navbar-link">Subscribe</a>
				<Link to="/videos" className="navbar-link">Videos</Link>
				<Link to="/" className="navbar-link">Home</Link>
				<a className="collapse" onClick={toggleNav}>☰</a>
			</div>
		</div>
	)
}