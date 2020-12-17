import React, { useState, useEffect } from 'react';

import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    function handleScrolling() {
      setScrolling(true);
      // const isTop = window.scrollY < 10;
      // !isTop ? setScrolling(true) : setScrolling(false);
    }
    window.addEventListener("scroll", handleScrolling)

    return function cleanUp() {
      window.removeEventListener('scroll', handleScrolling)
    }
  });

  return (
    <div className={scrolling ? 'nav scrolling' : 'nav'}>
      <div className="nav_links">
        <NavLink exact to="/" className="navlink-style-home"><p className="home">R A I S A</p></NavLink>
        <div className="thing" />
        <NavLink exact to="/projects" className="navlink-style" ><p className="projects">PROJECTS</p></NavLink>
        <NavLink exact to="/experience" className="navlink-style"><p className="experience">RESUME</p></NavLink>
        <NavLink exact to="/contact" className="navlink-style"><p className="contact">CONTACT</p></NavLink>
      </div >
    </div >
  )
}