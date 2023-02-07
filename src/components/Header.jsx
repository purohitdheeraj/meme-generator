import React from "react";
import logo from "../assets/react.svg";

function Header() {
	return (
		<nav className="nav">
			<img
				className="nav--logo"
				src={logo}
				alt="logo"
			/>
			<h2 className="nav--title">Meme Generator</h2>
			<h3 className="nav--sub-title">
				React Course - Project 3
			</h3>
		</nav>
	);
}

export default Header;
