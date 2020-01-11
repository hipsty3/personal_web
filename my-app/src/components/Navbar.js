import React, { useState, useEffect } from 'react';

import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";

export default function Navbar() {
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		function handleScrolling() {
			const isTop = window.scrollY < 10;
			!isTop ? setScrolling(true) : setScrolling(false);
		}
		window.addEventListener("scroll", handleScrolling)

		return function cleanUp() {
			window.removeEventListener('scroll', handleScrolling)
		}
	});

	return (
		<div className={scrolling ? 'nav scrolling' : 'nav'}>
			<div className="nav_links">
				<NavLink aria-current="true" exact to="/" class="active"><p className="home">R A I S A</p></NavLink>
				<div className="thing"/>
				<NavLink to="/projects" ><p className="projects">PROJECTS</p></NavLink>
				<NavLink to="/experience"><p className="experience">EXPERIENCE</p></NavLink>
				<NavLink to="/contact"><p className="contact">CONTACT</p></NavLink>
			</div>
		</div>
	)
}